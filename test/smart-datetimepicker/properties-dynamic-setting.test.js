var describe,
    it,
    expect,
    document,
    beforeAll,
    afterAll;

describe('Testing public API - ', function () {
    let dti;

    jasmine.getFixtures().fixturesPath = 'base/test/smartdatetimepicker/fixtures';
    jasmine.getFixtures().preload('smart-date-time-picker-simple.htm');
    beforeEach(function () {
        loadFixtures('smart-date-time-picker-simple.htm');
        dti = document.getElementById('dti');
    });

    describe('testing dynamic setting of the property ', function () {
        it('value', function () {
            dti.value = new Smart.Utilities.DateTime(2016, 5, 9, 12, 34, 11, 999, 1, 10, 36, 44, 440, 51, 557);

            let value = dti.value;

            expect(value instanceof Smart.Utilities.DateTime).toBe(true);
            expect(value.year()).toBe(2016);
            expect(value.month()).toBe(5);
            expect(value.day()).toBe(9);
            expect(value.hour()).toBe(12);
            expect(value.minute()).toBe(34);
            expect(value.second()).toBe(11);
            expect(value.millisecond()).toBe(999);
            expect(value._microsecond).toBe(1);
            expect(value._nanosecond).toBe(10);
            expect(value._picosecond).toBe(36);
            expect(value._femtosecond).toBe(44);
            expect(value._attosecond).toBe(440);
            expect(value._zeptosecond).toBe(51);
            expect(value._yoctosecond).toBe(557);

            dti.value = new Date(1013, 3, 12);
            value = dti.value;

            expect(value.compare(dti.min)).toBe(0);

            dti.value = new Date(5013, 3, 12);
            value = dti.value;

            expect(value.compare(dti.max)).toBe(0);

            dti.value = new Date(2013, 3, 12);
            value = dti.value;

            expect(value.year()).toBe(2013);
            expect(value.month()).toBe(4);
            expect(value.day()).toBe(12);
            expect(value.hour()).toBe(0);
            expect(value.minute()).toBe(0);
            expect(value.second()).toBe(0);
            expect(value.millisecond()).toBe(0);
            expect(value._microsecond).toBe(0);
            expect(value._nanosecond).toBe(0);
            expect(value._picosecond).toBe(0);
            expect(value._femtosecond).toBe(0);
            expect(value._attosecond).toBe(0);
            expect(value._zeptosecond).toBe(0);
            expect(value._yoctosecond).toBe(0);

            dti.value = '4/12/2013, 12:00:00 AM';
            value = dti.value;

            expect(value.year()).toBe(2013);
            expect(value.month()).toBe(4);
            expect(value.day()).toBe(12);
            expect(value.hour()).toBe(0);
            expect(value.minute()).toBe(0);
            expect(value.second()).toBe(0);

            dti.value = 'new Date()';
            value = dti.value;

            expect(value.year()).toBe(new Date().getFullYear());
            expect(value.month()).toBe(new Date().getMonth() + 1);
            expect(value.day()).toBe(new Date().getDate());

            dti.value = 1501840641159;
            value = dti.value;

            expect(value.toDate().getTime()).toBe(1501840641159);

            const errorTest1 = function () {
                dti.value = 'asdf';
            };
            const errorTest2 = function () {
                dti.value = '';
            };
            const errorTest3 = function () {
                dti.value = { a: 7 };
            };

            expect(errorTest1).not.toThrow();
            expect(errorTest2).not.toThrow();
            expect(errorTest3).not.toThrow();
        });

        it('calendarButton', function () {
            expect(dti.$.calendarButton).not.toBeVisible();

            dti.calendarButton = true;
            dti.opened = true;

            expect(dti.$.calendarButton).toBeVisible();
            expect(dti.$.calendarDropDown).toBeVisible();

            dti.calendarButton = false;

            expect(dti.$.calendarButton).not.toBeVisible();
            expect(dti.$.calendarDropDown).not.toBeVisible();
        });

        it('disabled and readonly', function () {
            dti.calendarButton = true;
            dti.opened = true;
            dti.disabled = true;

            expect(dti.opened).toBe(false);

            dti.disabled = false;

            dti.calendarButton = true;
            dti.opened = true;
            dti.readonly = true;

            expect(dti.opened).toBe(false);
        });

        it('footerTemplate', function () {
            const templ = document.createElement('template');
            templ.innerHTML = '<span id="testSpan"></span>'

            document.body.appendChild(templ);

            templ.setAttribute('id', 'customFooterTemplate');

            dti.footerTemplate = 'customFooterTemplate';

            expect(document.getElementById('testSpan').parentElement).toHaveClass('smart-footer');
            expect(dti._hourElement).not.toBeInDOM();
            expect(dti._minuteElement).not.toBeInDOM();
            expect(dti._ampmElement).not.toBeInDOM();

            dti.footerTemplate = null;

            expect(document.getElementById('testSpan')).toBeNull();
            expect(dti._hourElement).toBeInDOM();
            expect(dti._minuteElement).toBeInDOM();
            expect(dti._ampmElement).toBeInDOM();
        });

        it('formatString', function () {
            dti.value = new Smart.Utilities.DateTime(2017, 5, 5);

            dti.formatString = 'FP';

            expect(dti.$.input.value).toBe('2017-05-05 00:00:00:000:000:000:000:000:000:000:000');

            dti.formatString = 'ff:uu:nn';

            expect(dti.$.input.value).toBe('00:000:000');

            dti.formatString = 'd';

            expect(dti.$.input.value).toBe('5/5/2017');
        });

        it('interval', function () {
            dti.interval = new Smart.Utilities.TimeSpan(50000);

            expect(dti.interval instanceof Smart.Utilities.TimeSpan).toBe(true);
            expect(dti.interval.milliseconds()).toBe(5);

            dti.interval = 450000;

            expect(dti.interval instanceof Smart.Utilities.TimeSpan).toBe(true);
            expect(dti.interval.milliseconds()).toBe(45);

            dti.interval = { test: 90 };

            expect(dti.interval instanceof Smart.Utilities.TimeSpan).toBe(true);
            expect(dti.interval.milliseconds()).toBe(45);

            dti.interval = 'asdf';

            expect(dti.interval instanceof Smart.Utilities.TimeSpan).toBe(true);
            expect(dti.interval.milliseconds()).toBe(45);

            dti.interval = 'new Smart.Utilities.TimeSpan(20000)';

            expect(dti.interval instanceof Smart.Utilities.TimeSpan).toBe(true);
            expect(dti.interval.milliseconds()).toBe(2);

            dti.interval = new Smart.Utilities.TimeSpan(0);

            expect(dti.interval instanceof Smart.Utilities.TimeSpan).toBe(true);
            expect(dti.interval.milliseconds()).toBe(2);
        });

        it('messages', function () {
            dti.messages = {
                'en': {
                    'now': 'Today'
                },
                'bg': {
                    'now': 'Днес'
                }
            };

            expect(dti._todayElement.title).toBe('Today');

            dti.locale = 'bg';

            expect(dti._todayElement.title).toBe('Днес');
        });

        it('locale', function () {
            dti.formatString = 'D';
            dti.value = new Date(2017, 7, 7);

            expect(dti.$.input.value).toBe('Monday, August 07, 2017');

            dti.locale = 'bg';

            expect(dti.$.input.value).toBe('понеделник, август 07, 2017');

            dti.locale = 'es';

            expect(dti.$.input.value).toBe('lunes, agosto 07, 2017');
        });

        it('max and min', function () {
            dti.value = new Date(2017, 7, 7);

            dti.max = new Date(2017, 6, 1);

            expect(dti.value.year()).toBe(2017);
            expect(dti.value.month()).toBe(7);
            expect(dti.value.day()).toBe(1);

            dti.min = new Date(2018, 0, 1);

            expect(dti.min.year()).toBe(2017);
            expect(dti.min.month()).toBe(7);
            expect(dti.min.day()).toBe(1);

            expect(dti.max.year()).toBe(2017);
            expect(dti.max.month()).toBe(7);
            expect(dti.max.day()).toBe(1);

            expect(dti.value.year()).toBe(2017);
            expect(dti.value.month()).toBe(7);
            expect(dti.value.day()).toBe(1);

            dti.max = new Date(2014, 6, 1);

            expect(dti.max.year()).toBe(2014);
            expect(dti.max.month()).toBe(7);
            expect(dti.max.day()).toBe(1);
        });

        it('opened', function () {
            dti.opened = true;

            expect(dti.opened).toBe(false);

            dti.calendarButton = true;

            dti.opened = true;

            expect(dti.opened).toBe(true);
            expect(dti.$.dropDown).not.toHaveClass('smart-visibility-hidden');

            dti.opened = false;

            expect(dti.opened).toBe(false);
            expect(dti.$.dropDown).toHaveClass('smart-visibility-hidden');
        });

        it('dropDownDisplayMode', function () {
            dti.dropDownDisplayMode = 'classic';
            dti.opened = true;

            expect(dti.$.dropDownHeader).toHaveClass('smart-hidden');
            expect(dti.$.calendarDropDown).not.toHaveClass('smart-hidden');

            dti.dropDownDisplayMode = 'timePicker';

            expect(dti._timePickerInitialized).toBe(true);
            expect(dti.$.timePickerDropDown).not.toHaveClass('smart-hidden');
            expect(dti.$.calendarDropDown).toHaveClass('smart-hidden');

            dti.dropDownDisplayMode = 'calendar';

            expect(dti.$.calendarDropDown).not.toHaveClass('smart-hidden');

            dti.dropDownDisplayMode = 'default';

            expect(dti.$.dropDownHeader).not.toHaveClass('smart-hidden');
        });

        it('restrictedDates', function () {
            dti.value = new Date(2017, 7, 7);

            expect(dti.value.year()).toBe(2017);
            expect(dti.value.month()).toBe(8);
            expect(dti.value.day()).toBe(7);

            dti.restrictedDates = [new Date(2017, 7, 7), new Smart.Utilities.DateTime(2017, 8, 8), new Smart.Utilities.DateTime(2018, 1, 1)];

            expect(dti.value.year()).toBe(2017);
            expect(dti.value.month()).toBe(8);
            expect(dti.value.day()).toBe(9);

            dti.value = new Smart.Utilities.DateTime(2018, 1, 1);

            expect(dti.value.year()).toBe(2018);
            expect(dti.value.month()).toBe(1);
            expect(dti.value.day()).toBe(2);
        });

        it('spinButtons and spinButtonsPosition', function () {
            expect(dti.$.spinButtonsContainer).not.toBeVisible();



            dti.spinButtons = false;

            expect(dti.$.spinButtonsContainer).not.toBeVisible();
            expect(dti.$.spinButtonsContainer.nextElementSibling).toBe(dti.$.calendarButton);

            dti.spinButtonsPosition = 'left';

            expect(dti.$.spinButtonsContainer.nextElementSibling).toBe(dti.$.input);

            dti.spinButtons = true;
            dti.spinButtonsPosition = 'right';

            expect(dti.$.spinButtonsContainer).toBeVisible();
            expect(dti.$.spinButtonsContainer.nextElementSibling).toBe(dti.$.calendarButton);
        });

        it('calendar dropdown-specific properties', function () {
            dti.hideDayNames = true;

            expect(dti.$.calendarDropDown.hideDayNames).toBe(true);

            dti.tooltip = true;

            expect(dti.$.calendarDropDown.tooltip).toBe(true);

            dti.tooltipPosition = 'left';

            expect(dti.$.calendarDropDown.tooltipPosition).toBe('left');
        });
    });

    describe('testing public method ', function () {
        it('"close" and "open"', function () {
            dti.calendarButton = true;

            dti.close();

            expect(dti.opened).toBe(false);

            dti.open();

            expect(dti.opened).toBe(true);

            dti.open();

            expect(dti.opened).toBe(true);

            dti.close();

            expect(dti.opened).toBe(false);

            dti.calendarButton = false;
            dti.open();

            expect(dti.opened).toBe(false);

            dti.calendarButton = true;
            dti.value = null;
            dti.open();

            expect(dti.opened).toBe(true);
        });

        it('"focus"', function () {
            expect(document.activeElement).not.toBe(dti.$.input);

            dti.focus();

            expect(document.activeElement).toBe(dti.$.input);
        });
    });
});
