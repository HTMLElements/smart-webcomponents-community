var describe,
    it,
    expect,
    document,
    beforeAll,
    afterAll;

describe('Testing ', function () {
    let dti;

    jasmine.getFixtures().fixturesPath = 'base/test/smartdatetimepicker/fixtures';
    jasmine.getFixtures().preload('smart-date-time-picker-simple.htm');
    beforeEach(function () {
        loadFixtures('smart-date-time-picker-simple.htm');
        dti = document.getElementById('dti');
    });

    describe('calendar-related handlers - ', function () {
        beforeEach(function () {
            dti.calendarButton = true;
        });

        it('_calendarButtonClickHandler', function () {
            expect(dti.opened).toBe(false);

            dti._calendarButtonClickHandler({ target: dti.$.calendarButton });

            expect(dti.opened).toBe(true);

            dti._calendarButtonClickHandler({ target: dti.$.calendarDropDown });

            expect(dti.opened).toBe(true);

            dti._calendarButtonClickHandler({ target: dti.$.calendarButton });

            expect(dti.opened).toBe(false);
        });

        it('_footerChangeHandler', function () {
            dti.opened = true;
            dti.value = new Smart.Utilities.DateTime(2015, 1, 1, 13, 45);
            dti._hourElement.value = 2;
            dti._footerChangeHandler({ target: dti._hourElement, stopPropagation: function () { } });

            expect(dti.value.hour()).toBe(14);

            dti._hourElement.value = 100;
            dti._footerChangeHandler({ target: dti._hourElement, stopPropagation: function () { } });

            expect(dti.value.hour()).toBe(14);

            dti._ampmElement.value = 'AM';
            dti._footerChangeHandler({ target: dti._ampmElement, stopPropagation: function () { } });

            expect(dti.value.hour()).toBe(2);

            dti._hourElement.value = 3;
            dti._footerChangeHandler({ target: dti._hourElement, stopPropagation: function () { } });

            expect(dti.value.hour()).toBe(3);

            dti._ampmElement.value = 'p';
            dti._footerChangeHandler({ target: dti._ampmElement, stopPropagation: function () { } });

            expect(dti.value.hour()).toBe(15);

            dti._ampmElement.value = 'asdf';
            dti._footerChangeHandler({ target: dti._ampmElement, stopPropagation: function () { } });

            expect(dti.value.hour()).toBe(15);

            dti._minuteElement.value = 12;
            dti._footerChangeHandler({ target: dti._minuteElement, stopPropagation: function () { } });

            expect(dti.value.minute()).toBe(12);

            dti._minuteElement.value = -120;
            dti._footerChangeHandler({ target: dti._minuteElement, stopPropagation: function () { } });

            expect(dti.value.minute()).toBe(12);
        });

        it('_footerClickHandler', function () {
            const oldValue = dti.value.clone();

            dti.opened = true;
            dti.value = new Smart.Utilities.DateTime(2015, 1, 1, 13, 45);

            let targetButton = dti.getElementsByClassName('smart-footer-component-hour')[0].getElementsByTagName('smart-repeat-button')[0];

            dti._footerClickHandler({ target: targetButton });

            expect(dti.value.hour()).toBe(14);

            targetButton = dti.getElementsByClassName('smart-footer-component-minute')[0].getElementsByTagName('smart-repeat-button')[1];
            dti._footerClickHandler({ target: targetButton });

            expect(dti.value.minute()).toBe(44);

            dti._footerClickHandler({ target: dti._todayElement });

            expect(oldValue.compare(dti.value)).not.toBe(0);
        });

        it('_footerWheelHandler', function () {
            dti.enableMouseWheelAction = true;
            dti.opened = true;
            dti.value = new Smart.Utilities.DateTime(2015, 1, 1, 13, 45);

            dti._footerWheelHandler({ target: dti._hourElement, deltaY: 1, stopPropagation: function () { } });

            expect(dti.value.hour()).toBe(12);

            dti._footerWheelHandler({ target: dti._minuteElement, deltaY: -1, stopPropagation: function () { } });

            expect(dti.value.minute()).toBe(46);

            dti._footerWheelHandler({ target: dti._ampmElement, deltaY: 1, stopPropagation: function () { } });

            expect(dti.value.hour()).toBe(0);

            dti._footerWheelHandler({ target: dti._ampmElement, deltaY: 1, stopPropagation: function () { } });

            expect(dti.value.hour()).toBe(12);

            dti._footerWheelHandler({ target: dti._ampmElement, deltaY: -1, stopPropagation: function () { } });

            expect(dti.value.hour()).toBe(0);
        });

        it('_inputKeydownHandler', function () {
            let event = { key: 'Tab', preventDefault: function () { } };

            dti._inputKeydownHandler(event);

            event.key = '0';
            dti.editMode = 'full';
            dti._inputKeydownHandler(event);

            dti.editMode = 'partial';
            event.key = 'Delete';
            dti._inputKeydownHandler(event);

            event.key = '/';
            dti._inputKeydownHandler(event);

            event.key = 'Backspace';
            dti._inputKeydownHandler(event);

            dti._inputMousedownHandler();
        });

        it('_inputPasteHandler', function () {
            let event = { preventDefault: function () { } };

            dti.editMode = 'partial';
            dti._inputPasteHandler(event);

            dti.editMode = 'full';
            dti._inputPasteHandler(event);

            dti._inputDragstartHandler(event);
        });

        it('_inputSelectHandler', function () {
            dti.editMode = 'partial';
            dti._inputSelectHandler();

            dti.editMode = 'full';
            dti._inputSelectHandler();

            dti.editMode = 'partial';
            dti._programmaticSelection = true;
            dti._inputSelectHandler();

            dti._programmaticSelection = false;
            dti._highlightedTimePart
            dti._inputSelectHandler();
        });

        it('_dropDownHeaderClickHandler', function () {
            let event = { target: dti.$.calendarButton };

            dti._calendarButtonClickHandler(event);
            expect(dti.opened).toBe(true);

            event.target = dti.$.timePickerDropDown;
            dti._dropDownHeaderClickHandler(event);
            expect(dti.opened).toBe(true);

            event.target = dti.$.selectDate;
            dti._dropDownHeaderClickHandler(event);
            expect(dti.opened).toBe(true);
        });

        it('_calendarButtonClickHandler', function () { 
            let event = { target: dti.$.selectDate };

            dti._inputBlurHandler();
            dti._inputFocusHandler();

            dti._calendarButtonClickHandler(event);

            event.target = dti;

            dti._calendarButtonClickHandler(event);
            expect(dti.opened).toBe(true);

            dti.opened = true;
            dti._calendarButtonClickHandler(event);
            expect(dti.opened).toBe(false);
        });
    });

    describe('handlers related to ', function () {
        it('time part navigation', function () {
            dti.value = new Smart.Utilities.DateTime(2016, 5, 9, 12, 34, 11, 999, 1, 10, 36, 44, 440, 51, 557);
            dti.formatString = 'FP';

            dti._highlightTimePartBasedOnCursor(0);

            expect(dti._highlightedTimePart.code).toBe('yyyy');

            dti._inputKeydownHandler({ key: 'ArrowRight', preventDefault: function () { } });

            expect(dti._highlightedTimePart.code).toBe('MM');

            dti._inputKeydownHandler({ key: 'ArrowRight', preventDefault: function () { } });

            expect(dti._highlightedTimePart.code).toBe('dd');

            dti._inputKeydownHandler({ key: 'End', preventDefault: function () { } });

            expect(dti._highlightedTimePart.code).toBe('oo');

            dti._inputKeydownHandler({ key: 'ArrowLeft', preventDefault: function () { } });

            expect(dti._highlightedTimePart.code).toBe('xx');

            dti._inputKeydownHandler({ key: 'Home', preventDefault: function () { } });

            expect(dti._highlightedTimePart.code).toBe('yyyy');

            dti._inputKeydownHandler({ key: 'ArrowUp', preventDefault: function () { } });

            expect(dti.value.year()).toBe(2017);

            dti._inputKeydownHandler({ key: 'ArrowDown', preventDefault: function () { } });
            dti._inputKeydownHandler({ key: 'ArrowDown', preventDefault: function () { } });

            expect(dti.value.year()).toBe(2015);

            dti.enableMouseWheelAction = true;

            dti._inputWheelHandler({ deltaY: -1 });

            expect(dti.value.year()).toBe(2016);

            dti._documentUpHandler({ originalEvent: { target: document } });

            dti._inputWheelHandler({ deltaY: 1 });

            expect(dti.value.year()).toBe(2016);
            expect(dti.value.second()).toBe(10);

            dti.formatString = 'LL yyyy-MM dddd XX';

            expect(dti.$.input.value).toBe('LL 2016-05 Monday XX');

            dti._highlightTimePartBasedOnCursor(0);

            expect(dti._highlightedTimePart.code).toBe('yyyyy');

            dti._highlightTimePartBasedOnCursor(20);

            expect(dti._highlightedTimePart.code).toBe('dddd');

            dti._inputKeydownHandler({ key: 'Home', preventDefault: function () { } });

            expect(dti._highlightedTimePart.code).toBe('yyyyy');

            dti._inputKeydownHandler({ key: 'End', preventDefault: function () { } });

            expect(dti._highlightedTimePart.code).toBe('dddd');
        });

        it('increment/decrement', function () {
            dti.spinButtons = true;

            dti.value = new Smart.Utilities.DateTime(2000, 3, 13, 22, 36, 17);

            expect(dti.value.second()).toBe(17);

            dti._spinButtonsClickHandler({ target: dti.$.downButton });

            expect(dti.value.second()).toBe(16);

            dti._spinButtonsClickHandler({ target: dti.$.upButton });
            dti._spinButtonsClickHandler({ target: dti.$.upButton });

            expect(dti.value.second()).toBe(18);

            dti.interval = new Smart.Utilities.TimeSpan(1, 0, 1);

            dti._spinButtonsClickHandler({ target: dti.$.downButton });
            dti._spinButtonsClickHandler({ target: dti.$.downButton });

            expect(dti.value.second()).toBe(16);
            expect(dti.value.hour()).toBe(20);

            dti._spinButtonsClickHandler({ target: dti.$.upButton });

            expect(dti.value.second()).toBe(17);
            expect(dti.value.hour()).toBe(21);

            dti.interval = new Smart.Utilities.TimeSpan(1, 0, 0, 0, 0);

            dti._spinButtonsClickHandler({ target: dti.$.upButton });

            expect(dti.value.second()).toBe(17);
            expect(dti.value.hour()).toBe(21);
            expect(dti.value.day()).toBe(14);

            dti._highlightTimePartBasedOnCursor(8);

            dti._spinButtonsClickHandler({ target: dti.$.upButton });

            expect(dti.value.second()).toBe(17);
            expect(dti.value.hour()).toBe(21);
            expect(dti.value.day()).toBe(14);
            expect(dti.value.year()).toBe(2001);

            dti._documentUpHandler({ originalEvent: { target: document } });

            dti._spinButtonsClickHandler({ target: dti.$.upButton });

            expect(dti.value.second()).toBe(17);
            expect(dti.value.hour()).toBe(21);
            expect(dti.value.day()).toBe(15);
            expect(dti.value.year()).toBe(2001);

            dti.formatString = 'zzz dddd';

            const oldInputValue = dti.$.input.value;

            dti._highlightTimePartBasedOnCursor(0);

            expect(dti._highlightedTimePart.code).toBe('zzz');

            dti._spinButtonsClickHandler({ target: dti.$.upButton });

            expect(dti._highlightedTimePart).not.toBeUndefined();
            expect(dti.$.input.value).toBe(oldInputValue);
        });

        it('mouse interaction', function () {
            dti.calendarButton = true;

            dti._mouseoverHandler({ target: dti.$.input });

            expect(dti.$.input).toHaveClass('hover');

            dti._mouseoutHandler({ target: dti.$.input });

            expect(dti.$.input).not.toHaveClass('hover');

            dti._mouseoverHandler({ target: dti.$.calendarButton });

            expect(dti.$.calendarButton).toHaveClass('hover');

            dti._mouseoutHandler({ target: dti.$.calendarButton });

            expect(dti.$.calendarButton).not.toHaveClass('hover');

            dti.disabled = true;
            dti._mouseoverHandler({ target: dti.$.input });

            expect(dti.$.input).not.toHaveClass('hover');
        });

        it('calendar change', function () {
            dti.$.calendarDropDown.selectedDates = [new Date(2012, 3, 15)];
            dti._calendarDropDownChangeHandler({ stopPropagation: function () { }, detail: { value: [new Date(2012, 3, 15)] } });

            expect(dti.value.year()).toBe(2012);
            expect(dti.value.month()).toBe(4);
            expect(dti.value.day()).toBe(15);

            dti._hourElement.value = '';
            dti._ampmElement.value = '';
            dti._minuteElement.value = '';
            dti._calendarDropDownChangeHandler({ stopPropagation: function () { }, detail: { value: [new Date(2012, 3, 16)] } });

            expect(dti.value.year()).toBe(2012);
            expect(dti.value.month()).toBe(4);
            expect(dti.value.day()).toBe(16);

            dti.$.calendarDropDown.selectedDates = [];
            dti._calendarDropDownChangeHandler({ stopPropagation: function () { }, detail: { value: [new Date(2012, 3, 17)] } });

            expect(dti.value).toBe(null);
        });

        it('manual full edit', function () {
            dti.value = new Smart.Utilities.DateTime(2017, 8, 9);
            dti.formatString = 'd';
            dti.focus();
            dti._highlightTimePartBasedOnCursor(0);
            dti.$.input.setSelectionRange(0, 20);

            dti._inputKeydownHandler({ key: '1', preventDefault: function () { } });

            expect(dti._fullEdit).toBe(true);
            expect(dti._highlightedTimePartEdit).not.toBe(true);

            dti.$.input.value = '10/2/2015';

            dti._inputChangeHandler({ stopPropagation: function () { } });

            expect(dti.value.year()).toBe(2015);
            expect(dti.value.month()).toBe(10);
            expect(dti.value.day()).toBe(2);
            expect(dti._fullEdit).not.toBe(true);
            expect(dti._highlightedTimePartEdit).not.toBe(true);
        });

        it('manual part edit', function () {
            dti.value = new Smart.Utilities.DateTime(2017, 8, 9);
            dti.formatString = 'd';
            dti.focus();
            dti._highlightTimePartBasedOnCursor(0);
            dti.$.input.setSelectionRange(0, 1);

            dti._inputKeydownHandler({ key: '1', preventDefault: function () { } });

            expect(dti._fullEdit).not.toBe(true);
            expect(dti._highlightedTimePartEdit).toBe(true);

            dti.$.input.value = '12/9/2017';

            dti._inputChangeHandler({ stopPropagation: function () { } });

            expect(dti.value.year()).toBe(2017);
            expect(dti.value.month()).toBe(12);
            expect(dti.value.day()).toBe(9);
            expect(dti._fullEdit).not.toBe(true);
            expect(dti._highlightedTimePartEdit).not.toBe(true);
        });

       it('_handleManualTimePartEdit', function () {
            dti._highlightedTimePart = { index: 0, code: 'MM' };
            dti._handleManualTimePartEdit('MM');
        });

       it('setting null value', function () {
           dti.$.input.value = '';
           dti._inputChangeHandler();

           expect(dti.value).toBe(null);
        });
    });
});
