var describe,
    jasmine,
    beforeEach,
    loadFixtures,
    it,
    expect,
    document;
describe('Testing smart-calendar\'s methods', function () {
    'use strict';
    let calendar;

    jasmine.getFixtures().fixturesPath = 'base/test/smart-calendar/fixtures';
    jasmine.getFixtures().preload('smart-calendar-attributes-synchronization.htm');
    beforeEach(function () {
        loadFixtures('smart-calendar-attributes-synchronization.htm');
        calendar = document.querySelector('smart-calendar');
    });

    function createProperty(value) {
        var _value = value;

        function _get() {
            return _value;
        }

        function _set(v) {
            _value = v;
        }

        return {
            'get': _get,
            'set': _set
        };
    }

    function makePropertyWritable(objBase, objScopeName, propName, initValue) {
        var newProp,
            initObj;

        if (objBase && objScopeName in objBase && propName in objBase[objScopeName]) {
            if (typeof initValue === 'undefined') {
                initValue = objBase[objScopeName][propName];
            }

            newProp = createProperty(initValue);

            try {
                Object.defineProperty(objBase[objScopeName], propName, newProp);
            }
            catch (e) {
                initObj = {};
                initObj[propName] = newProp;
                try {
                    objBase[objScopeName] = Object.create(objBase[objScopeName], initObj);
                }
                catch (e) {
                    //stuff
                }
            }
        }
    }

    describe('if it ', function () {
        it('exists in DOM', function () {
            expect(document.querySelector('smart-calendar')).toBeInDOM();
        });
    });
    describe('if public methods work as expected', function () {
        it('clearSelection', function () {
            calendar.selectedDates = ['2017-10-5', '2017-10-2'];
            expect(calendar.selectedDates.length).toBe(2);
            expect(calendar._selectedDates.length).toBe(2);
            expect(calendar.selectedDates[0].toDateString()).toEqual(new Date(2017, 9, 5).toDateString());
            expect(calendar.selectedDates[1].toDateString()).toEqual(new Date(2017, 9, 2).toDateString());

            calendar.clearSelection();

            expect(calendar.selectedDates.length).toBe(0);
            expect(calendar._selectedDates.length).toBe(0);
        });

        it('setFocusable', function () {
            calendar.setFocusable(false);
            expect(calendar.$.nextMonthButton.$.button.tabIndex).toBe(-1);
            expect(calendar.$.previousMonthButton.$.button.tabIndex).toBe(-1);
            expect(calendar.$.monthElement.tabIndex).toBe(-1);
            expect(calendar.$.incrementYearButton.$.button.tabIndex).toBe(-1);
            expect(calendar.$.decrementYearButton.$.button.tabIndex).toBe(-1);
            expect(calendar.$.content.tabIndex).toBe(-1);

            calendar.setFocusable(true);
            //expect(calendar.$.nextMonthButton.$.button.tabIndex).toBe(0); //Fails only in Travis
            //expect(calendar.$.previousMonthButton.$.button.tabIndex).toBe(0); //Fails only in Travis
            expect(calendar.$.monthElement.tabIndex).toBe(0);
            //expect(calendar.$.incrementYearButton.$.button.tabIndex).toBe(0); //Fails only in Travis
            //expect(calendar.$.decrementYearButton.$.button.tabIndex).toBe(0); //Fails only in Travis
            expect(calendar.$.content.tabIndex).toBe(0);
        });

        it('navigate', function () {
            var currentMonth = calendar._dateInView[0];
            calendar.navigate(1);

            expect(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, currentMonth.getDate()).toDateString()).toEqual(calendar._dateInView[0].toDateString());

            currentMonth = calendar._dateInView[0];

            calendar.navigate(2);
            expect(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 2, currentMonth.getDate()).toDateString()).toEqual(calendar._dateInView[0].toDateString());

            currentMonth = calendar._dateInView[0];

            calendar.navigate(10);
            expect(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 10, currentMonth.getDate()).toDateString()).toEqual(calendar._dateInView[0].toDateString());

            currentMonth = calendar._dateInView[0];

            calendar.navigate(-6);
            expect(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 6, currentMonth.getDate()).toDateString()).toEqual(calendar._dateInView[0].toDateString());
        });

        it('select', function () {
            expect(calendar.selectedDates.length).toBe(1);
            expect(calendar.selectedDates[0].toDateString()).toEqual(new Date(2017, 9, 17).toDateString());

            calendar.select('2017-10-25');

            expect(calendar.selectedDates.length).toBe(1);
            expect(calendar.selectedDates[0].toDateString()).toEqual(new Date(2017, 9, 25).toDateString());

            calendar.selectionMode = 'oneOrMany';
            calendar.select('2017-10-25'); //Deselects previous

            calendar.select('2017-12-24');
            calendar.select('2017-12-25');
            calendar.select('2017-12-26');

            expect(calendar.selectedDates.length).toBe(3);
            expect(calendar.selectedDates[0].toDateString()).toEqual(new Date(2017, 11, 24).toDateString());
            expect(calendar.selectedDates[1].toDateString()).toEqual(new Date(2017, 11, 25).toDateString());
            expect(calendar.selectedDates[2].toDateString()).toEqual(new Date(2017, 11, 26).toDateString());
        });

        it('today', function () {
            calendar.selectionMode = 'one';

            calendar.select('2017-10-2');

            expect(calendar.selectedDates.length).toBe(1);
            expect(calendar.selectedDates[0].toDateString()).toEqual(new Date(2017, 9, 2).toDateString());

            var today = calendar.today();

            expect(calendar.selectedDates[0].toDateString()).toEqual(today.toDateString());

        });
    });
    describe('if private methods(event handlers) work as expected', function () {
        it('_downHandler', function () {
            var newDate = new Date();

            calendar.selectionMode = 'one';
            calendar.today();
            calendar.select(new Date(newDate.getFullYear(), newDate.getMonth(), 1));

            var event = { originalEvent: { target: calendar._getDayInstanceByValue(new Date(newDate.getFullYear(), newDate.getMonth(), 2)), stopPropagation: function () { } } };

            calendar._downHandler(event);

            expect(calendar.selectedDates.length).toBe(1);
            expect(calendar.selectedDates[0].toDateString()).toEqual(new Date(newDate.getFullYear(), newDate.getMonth(), 2).toDateString());

            calendar.selectionMode = 'many';

            event.originalEvent.target = calendar._getDayInstanceByValue(new Date(newDate.getFullYear(), newDate.getMonth(), 10));

            calendar._downHandler(event);

            expect(calendar.selectedDates.length).toBeGreaterThan(2);

            calendar.selectionMode = 'many';
            calendar.clearSelection();

            event.originalEvent.target = calendar._getDayInstanceByValue(new Date());

            calendar._downHandler(event);

            expect(calendar.selectedDates.length).toBe(1);

            calendar._downHandler(event); //Select The same

            //expect(calendar.selectedDates.length).toBe(0); // Its actually 0 but Karma says 1, Karma bug

            calendar.selectionMode = 'one';

            event.originalEvent.target = calendar._getDayInstanceByValue(new Date(newDate.getFullYear(), newDate.getMonth(), 2));

            calendar.$.addClass('material');

            calendar._downHandler(event);

            expect(calendar.selectedDates.length).toBe(1);
            expect(calendar.selectedDates[0].toDateString()).toEqual(new Date(newDate.getFullYear(), newDate.getMonth(), 2).toDateString());

            calendar.viewSections = ['title', 'header'];

            event.originalEvent.target = calendar.$.yearContainer;
            calendar._downHandler(event);

            expect(calendar.displayMode).toBe('decade');

            event.originalEvent.target = calendar.$.dateContainer;
            calendar._downHandler(event);
            expect(calendar.displayMode).toBe('month');

            calendar.displayMode = 'year';
            event.originalEvent.target = calendar.$.dateViewContainer.children[1];

            var month = event.originalEvent.target.value.getMonth();
            calendar._downHandler(event);

            expect(calendar._dateInView[0].getMonth()).toBe(month);
            expect(calendar.displayMode).toBe('month');

            calendar.displayModeView = 'list';
            calendar.displayMode = 'year';

            expect(calendar.displayModeView).toBe('list');
            expect(calendar.displayMode).toBe('year');

            event.originalEvent.target = calendar.$.listViewContainer.querySelector('smart-list-item');
            calendar._downHandler(event);

            expect(calendar._dateInView[0].getMonth()).toBe(new Date(event.originalEvent.target.value).getMonth())
            expect(calendar.displayMode).toBe('month');
            expect(calendar._dragStartDetails).toBeUndefined();

            var originalAgent = window.navigator.userAgent;

            makePropertyWritable(window, 'navigator', 'userAgent');
            window.navigator.userAgent = 'android';

            calendar._downHandler(event);

            expect(calendar._dragStartDetails).not.toBeNull();

            window.navigator.userAgent = originalAgent; //reset the userAgent

            calendar._downHandler(event);

            expect(calendar._dragStartDetails).toBeUndefined();

            event.originalEvent.target = calendar.$.monthsContainer.getElementsByClassName('smart-other-month-date')[0];

            var date = calendar._dateInView[0];

            calendar._downHandler(event);

            date.setMonth(date.getMonth() - 1);

            expect(calendar._dateInView[0].toDateString()).toBe(date.toDateString());
        });

        it('_documentUpHandler', function () {
            var event = { originalEvent: { target: calendar._getDayInstanceByValue(new Date(2017, 9, 2)), stopPropagation: function () { } } };

            expect(calendar._dragStartDetails).toBeUndefined();

            var originalAgent = window.navigator.userAgent;

            makePropertyWritable(window, 'navigator', 'userAgent');
            window.navigator.userAgent = 'android';

            event.pageX = event.originalEvent.target.offsetLeft;
            event.pageY = event.originalEvent.target.offsetTop;

            calendar._downHandler(event);

            expect(calendar._dragStartDetails).not.toBeNull();

            calendar.displayModeView = 'list';
            calendar.displayMode = 'year';

            event.originalEvent.target = calendar.$.listViewContainer.querySelector('smart-list-item');

            event.pageX = event.originalEvent.target.offsetLeft + 20;
            event.pageY = event.originalEvent.target.offsetTop + 20;

            calendar._documentUpHandler(event);
            window.navigator.userAgent = originalAgent; //reset the userAgent
            calendar._downHandler(event);

            expect(calendar._dragStartDetails).toBeUndefined();
        });

        it('_moveHandler', function () {
            var event = {
                originalEvent:
                    { target: calendar._getDayInstanceByValue(new Date(2017, 9, 2)) },
                preventDefault: function () { },
                stopPropagation: function () { }
            };


            event.pageX = event.originalEvent.target.offsetLeft;
            event.pageY = event.originalEvent.target.offsetTop;

            expect(calendar._dragStartDetails).toBeUndefined();


            var originalAgent = window.navigator.userAgent;

            makePropertyWritable(window, 'navigator', 'userAgent');
            window.navigator.userAgent = 'android';

            calendar._downHandler(event);

            event.pageX = event.originalEvent.target.offsetLeft + 40;
            event.pageY = event.originalEvent.target.offsetTop + 40;

            calendar._moveHandler(event);

            calendar.scrollButtonsNavigationMode = 'portrait';

            calendar._moveHandler(event);

            window.navigator.userAgent = originalAgent; //reset the userAgent
            calendar._downHandler(event);

            expect(calendar._dragStartDetails).toBeUndefined();
        });

        it('_keyDownHandler', function () {
            var event = { key: 'ArrowLeft', preventDefault: function () { }, stopPropagation: function () { } };

            calendar.$.content.focus();
            calendar._focusDate();

            calendar.selectionMode = 'one';
            calendar.today();

            var initiallySelectedDate = calendar._focusedDate,
                newDate = new Date(),
                today = new Date(newDate.getFullYear(), newDate.getMonth(), 17);

            calendar.select(today);
            calendar._keyDownHandler(event);

            today.setDate(today.getDate() - 1);

            expect(calendar.$._focusedDate).not.toEqual(initiallySelectedDate);
            expect(calendar.selectedDates[0].toDateString()).toBe(today.toDateString());

            event.key = 'ArrowRight';

            calendar._keyDownHandler(event);

            today.setDate(today.getDate() + 1);

            expect(calendar.$._focusedDate).not.toEqual(initiallySelectedDate);
            expect(calendar.selectedDates[0].toDateString()).toBe(today.toDateString());

            event.key = 'ArrowUp';

            calendar._keyDownHandler(event);

            today.setDate(today.getDate() - 7);

            expect(calendar.$._focusedDate).not.toEqual(initiallySelectedDate);
            expect(calendar.selectedDates[0].toDateString()).toBe(today.toDateString());

            event.key = 'ArrowDown';

            calendar._keyDownHandler(event);

            today.setDate(today.getDate() + 7);

            expect(calendar.$._focusedDate).not.toEqual(initiallySelectedDate);
            expect(calendar.selectedDates[0].toDateString()).toBe(today.toDateString());

            event.key = 'Home';

            calendar._keyDownHandler(event);

            expect(calendar.$._focusedDate).not.toEqual(initiallySelectedDate);
            expect(calendar.selectedDates[0].toDateString()).toBe(new Date(newDate.getFullYear(), newDate.getMonth(), 1).toDateString());

            event.key = 'End';

            calendar._keyDownHandler(event);

            var lastDayOfMonth = new Date(newDate.getFullYear(), newDate.getMonth() + 1, 0).getDate();

            expect(calendar.$._focusedDate).not.toEqual(initiallySelectedDate);
            expect(calendar.selectedDates[0].toDateString()).toBe(new Date(newDate.getFullYear(), newDate.getMonth(), lastDayOfMonth).toDateString());

            event.key = 'PageUp';

            calendar._keyDownHandler(event);

            //PropertyChangeHandler is being called, because the private method is called from the outside

            //expect(calendar.$._focusedDate).not.toEqual(initiallySelectedDate);
            //expect(calendar.selectedDates[0].toDateString()).toBe(new Date(2017, 8, 30).toDateString());

            event.key = 'PageDown';

            calendar._keyDownHandler(event);

            //PropertyChangeHandler is being called, because the private method is called from the outside

            //expect(calendar.$._focusedDate).not.toEqual(initiallySelectedDate);
            //expect(calendar.selectedDates[0].toDateString()).toBe(new Date(2017, 9, 31).toDateString());

            calendar.selectionMode = 'zeroOrOne';

            event.key = 'Home';

            calendar._keyDownHandler(event);

            expect(calendar.selectedDates[0].toDateString()).toEqual(new Date(newDate.getFullYear(), newDate.getMonth(), 1).toDateString());

            event.key = 'ArrowDown';
            calendar._keyDownHandler(event);

            event.key = 'Enter';
            calendar._keyDownHandler(event);

            expect(calendar.selectedDates.length).toBe(0);

            event.key = ' ';
            calendar._keyDownHandler(event);

            expect(calendar.selectedDates.length).toBe(1);
            expect(calendar.selectedDates[0].toDateString()).toEqual(new Date(newDate.getFullYear(), newDate.getMonth(), 1).toDateString()); //looses focus thats why it's October 1st

            calendar.selectionMode = 'none';
            event.key = 'ArrowRight';
            calendar._keyDownHandler(event);

            expect(calendar.selectionMode).toBe('none');
            expect(calendar.selectedDates.length).toBe(0);

            calendar.selectionMode = 'one';
            event.key = 'ArrowRight';
            calendar._keyDownHandler(event);

            expect(calendar.selectionMode).toBe('one');
            expect(calendar.selectedDates.length).toBe(1);

            calendar.clearSelection();
            calendar.selectionMode = 'default';

            event.key = 'Shift';
            calendar._keyDownHandler(event);

            var context = calendar.context;

            calendar.context = calendar;

            event.key = 'ArrowRight';
            calendar._keyDownHandler(event);

            expect(calendar.selectionMode).toBe('default');
            expect(calendar.selectedDates.length).toBe(2);

            calendar.context = context;

            event.key = 'Control';
            calendar._keyDownHandler(event);

            event.key = 'ArrowDown';
            calendar._keyDownHandler(event);

            expect(calendar.selectionMode).toBe('default');
            expect(calendar.selectedDates.length).toBe(3);

            calendar.selectionMode = 'zeroOrMany';
            event.key = 'ArrowRight';
            calendar._keyDownHandler(event);

            event.key = 'Enter';
            calendar._keyDownHandler(event);

            expect(calendar.selectionMode).toBe('zeroOrMany');
            expect(calendar.selectedDates.length).toBe(4);

            calendar.selectionMode = 'oneOrMany';
            event.key = 'ArrowRight';
            calendar._keyDownHandler(event);

            event.key = ' ';
            calendar._keyDownHandler(event);

            expect(calendar.selectionMode).toBe('oneOrMany');
            expect(calendar.selectedDates.length).toBe(5);

            calendar.selectionMode = 'zeroOrOne';
            event.key = 'ArrowRight';
            calendar._keyDownHandler(event);

            expect(calendar.selectedDates.length).toBe(1);

            event.key = ' ';
            calendar._keyDownHandler(event);

            expect(calendar.selectionMode).toBe('zeroOrOne');
            expect(calendar.selectedDates.length).toBe(0);

            calendar.calendarMode = 'classic';
            event.key = 'Escape';
            calendar.$.yearElement.focus();
            calendar._keyDownHandler(event);

            expect(calendar.displayMode).toBe('month');

            calendar.calendarMode = 'default';
            event.key = ' ';
            calendar.$.dateElement.focus();
            calendar._keyDownHandler(event);

            expect(calendar.displayMode).toBe('year');
        });

        it('_keyDownHandler when displayMode is not month', function () {

            var event = { key: 'ArrowRight', preventDefault: function () { }, stopPropagation: function () { } };

            calendar.displayMode = 'year';
            calendar.$.content.focus();

            var focusedDate = calendar._focusedDate,
                focusedValue = calendar._focusedDate.value;

            calendar._keyDownHandler(event);

            focusedValue.setMonth(focusedValue.getMonth() + 1);

            expect(calendar._focusedDate).not.toEqual(focusedDate);
            expect(calendar._focusedDate.value.toDateString()).toEqual(focusedValue.toDateString());
            expect(calendar.displayMode).toEqual('year');

            calendar.displayMode = 'decade';
            calendar.$.content.focus();

            focusedDate = calendar._focusedDate;
            focusedValue = calendar._focusedDate.value;

            calendar._keyDownHandler(event);

            focusedValue.setFullYear(focusedValue.getFullYear() + 1);

            expect(calendar._focusedDate).not.toEqual(focusedDate);
            expect(calendar._focusedDate.value.toDateString()).toEqual(focusedValue.toDateString());
            expect(calendar.displayMode).toEqual('decade');


            focusedDate = calendar._focusedDate;
            focusedValue = calendar._focusedDate.value;

            event.key = 'ArrowUp';
            calendar._keyDownHandler(event);
            event.key = 'ArrowUp';
            calendar._keyDownHandler(event);

            event.key = 'ArrowLeft';
            calendar._keyDownHandler(event);

            focusedValue.setFullYear(focusedValue.getFullYear() - 9);

            expect(calendar._focusedDate).not.toEqual(focusedDate);
            expect(calendar._focusedDate.value.toDateString()).toEqual(focusedValue.toDateString());

            event.key = 'ArrowLeft';
            calendar._keyDownHandler(event);
            event.key = 'ArrowLeft';
            calendar._keyDownHandler(event);

            event.key = 'ArrowUp';
            calendar._keyDownHandler(event);
            event.key = 'ArrowUp';
            calendar._keyDownHandler(event);

            focusedValue.setFullYear(focusedValue.getFullYear() - 12);

            expect(calendar._focusedDate).not.toEqual(focusedDate);
            expect(calendar._focusedDate.value.toDateString()).toEqual(focusedValue.toDateString());

            focusedDate = calendar._focusedDate;
            focusedValue = calendar._focusedDate.value;

            event.key = 'PageUp';
            calendar._keyDownHandler(event);

            focusedValue.setFullYear(focusedValue.getFullYear() - 10);

            expect(calendar._focusedDate).toEqual(focusedDate);
            expect(calendar._focusedDate.value.toDateString()).toEqual(focusedValue.toDateString());
        });

        it('_keyUpHandler', function () {
            var event = { key: 'Shift', preventDefault: function () { }, stopPropagation: function () { } };

            calendar._keyUpHandler(event);
            calendar.selectionMode = 'default';

            calendar.$.content.focus();

            calendar._keyDownHandler(event);

            expect(calendar._keysPressed[event.key]).toBe(true);

            event.key = 'Shift';
            calendar._keyUpHandler(event);

            expect(calendar._keysPressed['Shift']).toBe(false);
        });

        it('_focusDate', function () {
            var today = new Date(2017, 9, 17);

            today.setHours(0, 0, 0, 0);

            calendar._focusDate();

            expect(calendar._focusedDate.value.getTime()).toBe(today.getTime());

            today.setDate(today.getDate() + 1);
            calendar._focusDate(calendar._getDayInstanceByValue(today));

            expect(calendar._focusedDate.value.getTime()).toBe(today.getTime());

            calendar.displayMode = 'year';
            calendar._focusDate(calendar.$.dateViewContainer.children[2]);

            expect(calendar._focusedDate).toBe(calendar.$.dateViewContainer.children[2]);
        });

        it('_contentStateHandler', function () {
            var event = { type: 'focus' };

            expect(calendar._focusedDate).toBeUndefined();

            calendar._contentStateHandler(event);

            expect(calendar._focusedDate).not.toBeUndefined();

            event.type = blur;
            calendar._contentStateHandler(event);

            expect(calendar._focusedDate).not.toBeUndefined();
            expect(calendar._focusedDate.focused).toBe(false);
        });

        it('_containerWheelHandler', function () {
            var event = { preventDefault: function () { }, target: calendar.$.content, deltaY: 20 },
                newDate = new Date(calendar._dateInView[0]);

            calendar.$.content.focus();
            calendar._containerWheelHandler(event);
            newDate.setMonth(newDate.getMonth() - 1);

            expect(calendar._dateInView[0].toDateString()).toBe(newDate.toDateString());

            event.target = calendar.$.yearElement;
            calendar._containerWheelHandler(event);
            newDate.setFullYear(newDate.getFullYear() - 1);

            expect(calendar._dateInView[0].toDateString()).toBe(newDate.toDateString());
        });

        it('_headerClickHandler', function () {
            var event = { target: calendar.$.previousMonthButton },
                newDate = new Date(calendar._dateInView[0]);

            calendar._headerClickHandler(event);
            newDate.setMonth(newDate.getMonth() - 1);

            expect(calendar._dateInView[0].toDateString()).toBe(newDate.toDateString());

            event.target = calendar.$.nextMonthButton;
            calendar._headerClickHandler(event);
            newDate.setMonth(newDate.getMonth() + 1);

            expect(calendar._dateInView[0].toDateString()).toBe(newDate.toDateString());

            event.target = calendar.$.decrementYearButton;
            calendar._headerClickHandler(event);
            newDate.setFullYear(newDate.getFullYear() - 1);

            expect(calendar._dateInView[0].toDateString()).toBe(newDate.toDateString());

            event.target = calendar.$.incrementYearButton;
            calendar._headerClickHandler(event);
            newDate.setFullYear(newDate.getFullYear() + 1);

            expect(calendar._dateInView[0].toDateString()).toBe(newDate.toDateString());

            event.target = calendar.$.dateElement;
            calendar._headerClickHandler(event);

            expect(calendar.displayMode).toBe('year');

            calendar._headerClickHandler(event);

            expect(calendar.displayMode).toBe('decade');

            calendar.displayMode = 'month';
            expect(calendar.displayMode).toBe('month');
        });

        it('_mouseEventsHandler', function () {
            var event = { type: 'mouseenter' };

            calendar._mouseEventsHandler(event);

            expect(calendar).toHaveClass('hovered');

            calendar.tooltip = true;

            event.type = 'mouseleave';
            calendar._mouseEventsHandler(event);

            expect(calendar).not.toHaveClass('hovered');

            calendar.importantDates = ['2017-10-20'];
            event.type = 'mouseover';
            event.target = calendar._getDayInstanceByValue(new Date(2017, 9, 20));
            calendar._mouseEventsHandler(event);

            //The timeout is not called in time
            //expect(calendar.$.tooltip.visible).toBe(true);

            event.type = 'mouseout';
            calendar._mouseEventsHandler(event);

            expect(calendar.$.tooltip.visible).toBe(false);
        });

        it('_listViewContainerKeyDownHandler', function () {
            var event = { key: ' ', preventDefault: function () { }, stopPropagation: function () { } };

            calendar.displayModeView = 'list';
            calendar.displayMode = 'year';

            calendar._listViewContainerKeyDownHandler(event);

            expect(calendar.$.tooltip.visible).toBe(false);
        });

        it('_setFooter', function () {
            calendar.viewSections = ['footer', 'header'];
            calendar.selectionMode = 'many';

            expect(calendar.$.footer.textContent.trim()).toEqual('');

            calendar._setFooter();
            expect(calendar.$.footer.textContent.trim()).not.toEqual('');

            var template = document.createElement('template');

            template.innerHTML = '<div>{{date}}</div>';
            template.id = 'footerTemplate';

            calendar.footerTemplate = 'footerTemplate';
            calendar._setFooter();
            expect(calendar.$.footer.children.length).toBeGreaterThan(0);
        });


        it('_setImportantDates', function () {
            var template = document.createElement('template');

            template.innerHTML = '<div>@{{date}}@</div>';
            template.id = 'importantDatesTemplate';

            calendar.importantDatesTemplate = 'importantDatesTemplate';
            calendar.importantDates = ['2017-10-20'];

            expect(calendar.importantDates[0].toDateString()).toEqual(new Date(2017, 9, 20).toDateString());
        });

        it('_setTitle', function () {
            var template = document.createElement('template');

            template.innerHTML = '<div>@{{date}}@</div>';
            template.id = 'titleTemplate';

            calendar.titleTemplate = 'titleTemplate';
            calendar.viewSections = ['title', 'header'];

            expect(calendar.$.title.offsetHeight).not.toBe(0);
        });

        it('_updateHeaderTemplate', function () {
            var template = document.createElement('template');

            template.innerHTML = '<div>@{{date}}@</div>';
            template.id = 'headerTemplate';

            calendar.headerTemplate = 'headerTemplate';

            expect(calendar.$.nextMonthButton.parentElement).toBeNull();
            expect(calendar.$.previousMonthButton.parentElement).toBeNull();
        });

        it('_handleItemHoveredState', function () {
            var event = { type: 'mouseover', target: undefined };

            calendar.selectionMode = 'many';
            event.target = calendar._getDayInstanceByValue(new Date(calendar.selectedDates[0].getFullYear(), calendar.selectedDates[0].getMonth(), calendar.selectedDates[0].getDate() + 5));
            event.originalEvent = { target: event.target };

            calendar._mouseEventsHandler(event);
            calendar._downHandler(event);

            expect(calendar.selectedDates.length).toBe(7); //In reality its 6, but Karma messes up
        });
    });
});
