var describe,
    it,
    expect,
    document,
    beforeAll,
    afterAll;
describe('Testing smart-calendar created with script', function () {
    'use strict';
    let calendar;

    beforeAll(function () {
        calendar = document.createElement('smart-calendar');
        calendar.selectedDates = ["2017-10-2", "2017-10-5", "2017-10-21"];
        document.body.appendChild(calendar);
    });

    afterAll(function () {
        document.body.removeChild(document.querySelector('smart-calendar'));
    });

    describe('if it ', function () {
        it('exists in DOM', function () {
            expect(calendar).toBeInDOM();
        });
    });

    describe('check if default properties are set', function () {
        it('', function () {
            expect(calendar.selectedDates.length).toBe(3);
            expect(calendar.selectedDates[0].toDateString()).toEqual(new Date('2017-10-2').toDateString());
            expect(calendar.selectedDates[1].toDateString()).toEqual(new Date('2017-10-5').toDateString());
            expect(calendar.selectedDates[2].toDateString()).toEqual(new Date('2017-10-21').toDateString());
            expect(calendar._dateInView[0].getMonth()).toBe(calendar.selectedDates[calendar.selectedDates.length - 1].getMonth());
        });
    });

    describe('check if properties change their values', function () {
        it('multiple properties', function () {
            calendar.selectionMode = 'one';
            calendar.selectedDates = ['2017-10-2', '2017-10-20', '2017-11-5'];
            expect(calendar.selectionMode).toEqual('one');
            expect(calendar.selectedDates.length).toBe(1);
            expect(calendar.selectedDates[0].toDateString()).toEqual(new Date('2017-11-5').toDateString());
        });
        it('selectedValues=[""]', function () {
            calendar.selectionMode = 'zeroOrMany';
            calendar.selectedDates = ['2017-10-2', '2017-10-20', '2017-11-5'];
            expect(calendar.selectionMode).toEqual('zeroOrMany');
            expect(calendar.selectedDates.length).toBe(3);
            expect(calendar.selectedDates[0].toDateString()).toEqual(new Date('2017-10-2').toDateString());
            expect(calendar.selectedDates[1].toDateString()).toEqual(new Date('2017-10-20').toDateString());
            expect(calendar.selectedDates[2].toDateString()).toEqual(new Date('2017-11-5').toDateString());
        });
        it('months', function () {
            calendar.months = 6;
            expect(calendar.months).toBe(6);
            expect(calendar.getElementsByClassName('smart-calendar-month').length).toBe(6);
        });
        it('restrictedDates= ""', function () {
            calendar.restrictedDates = ['2017-5-1', '2017-4-2'];
            expect(calendar.restrictedDates[0].toDateString()).toEqual(new Date('2017-5-1').toDateString());
            expect(calendar.restrictedDates[1].toDateString()).toEqual(new Date('2017-4-2').toDateString());
            expect(calendar.restrictedDates.length).toBe(2);
        });

        it('importantDates= ""', function () {
            calendar.importantDates = ['2017-5-24', '2017-4-1'];
            expect(calendar.importantDates[0].toDateString()).toEqual(new Date('2017-5-24').toDateString());
            expect(calendar.importantDates[1].toDateString()).toEqual(new Date('2017-4-1').toDateString());
            expect(calendar.importantDates.length).toBe(2);
        });

        it('displayMode= ""', function () {
            calendar.displayMode = 'year';
            expect(calendar.displayMode).toBe('year');
            expect(calendar.$.dateViewContainer.classList.contains('smart-hidden')).toBe(false);
            expect(calendar.$.monthsContainer.classList.contains('smart-hidden')).toBe(true);
        });

        it('hideDayNames= ""', function () {
            calendar.hideDayNames = true;
            expect(calendar.hideDayNames).toBe(true);
            expect(calendar.$.weekTitles.offsetHeight).toBe(0);
        });

        it('hideOtherMonthDays= ""', function () {
            calendar.hideOtherMonthDays = true;
            expect(calendar.hideOtherMonthDays).toBe(true);

            var neightbourMonthDays = calendar.getElementsByClassName('smart-other-month-days').length;

            for (let i = 0; i < neightbourMonthDays; i++) {
                expect(neightbourMonthDays[i].offsetHeight).toBe(0);
            }
        });

        it('weekNumbers to true', function () {
            calendar.weekNumbers = true;
            expect(calendar.weekNumbers).toBe(true);

            var weekNumbers = calendar.getElementsByClassName('smart-week-numbers').length;

            for (let i = 0; i < weekNumbers; i++) {
                expect(weekNumbers[i].offsetHeight).toBe(0);
            }
        });

        it('weeks = 4', function () {
            calendar.weeks = 4;
            expect(calendar.weeks).toBe(4);

            var weeks = calendar.getElementsByClassName('smart-calendar-week');

            expect(weeks[4].offsetHeight).toBe(0);
            expect(weeks[5].offsetHeight).toBe(0);
        });

        it('calendarMode = "classic"', function () {
            expect(calendar.displayMode).toEqual('year');

            calendar.calendarMode = 'classic';

            expect(calendar.querySelector('smart-drop-down-list').offsetHeight).not.toBe(0);
            expect(calendar.$.dateViewContainer.offsetHeight).toBe(0);
            expect(calendar.displayMode).toEqual('month');

            calendar.displayMode = 'decade';
            expect(calendar.displayMode).toEqual('month');
        });

        it('calendarMode = "default"', function () {
            expect(calendar.displayMode).toEqual('month');

            calendar.calendarMode = 'default';

            expect(calendar.querySelector('smart-drop-down-list').offsetHeight).toBe(0);

            calendar.displayMode = 'year';

            expect(calendar.$.dateViewContainer.offsetHeight).not.toBe(0);
            expect(calendar.$.monthsContainer.offsetHeight).toBe(0);

            expect(calendar.displayMode).toEqual('year');

            calendar.displayMode = 'decade';
            expect(calendar.displayMode).toEqual('decade');
            expect(calendar.$.dateViewContainer.offsetHeight).not.toBe(0);
            expect(calendar.querySelector('smart-drop-down-list').offsetHeight).toBe(0);
        });

        it('displayModeView = "list"', function () {
            expect(calendar.$.listViewContainer.offsetHeight).toBe(0);
            expect(calendar.$.dateViewContainer.offsetHeight).not.toBe(0);

            calendar.displayModeView = 'list';

            expect(calendar.$.listViewContainer.offsetHeight).not.toBe(0);
            expect(calendar.$.listViewContainer.items.length).toBe(201);
            expect(calendar.querySelector('smart-drop-down-list').offsetHeight).toBe(0);
            expect(calendar.displayMode).toEqual('decade');

            calendar.displayMode = 'year';

            expect(calendar.displayMode).toEqual('year');
            expect(calendar.$.listViewContainer.items.length).toBe(12);
            expect(calendar.$.dateViewContainer.offsetHeight).not.toBe(0);
        });

        it('months', function () {
            calendar.displayMode = 'month';

            expect(calendar.$.listViewContainer.offsetHeight).toBe(0);
            expect(calendar.$.dateViewContainer.offsetHeight).toBe(0);

            calendar.months = 12;
            expect(calendar.getElementsByClassName('smart-calendar-month').length).toBe(12);
            expect(calendar.displayMode).toBe('month');

            calendar.displayMode = 'decade';
            expect(calendar.$.listViewContainer.offsetHeight).not.toBe(0);
            expect(calendar.$.listViewContainer.items.length).toBe(201);
        });

        it('viewSections', function () {
            calendar.months = 1;
            calendar.displayMode = 'month';
            calendar.displayModeView = 'table';
            calendar.viewSections = ['header'];

            expect(calendar.$.title.offsetHeight).toBe(0);
            expect(calendar.getElementsByClassName('smart-calendar-month').length).toBe(1);
            expect(calendar.$.dateViewContainer.offsetHeight).toBe(0);

            calendar.viewSections = ['title', 'header'];
            expect(calendar.$.title.offsetHeight).not.toBe(0);
            expect(calendar.$.header.offsetHeight).not.toBe(0);
            expect(calendar.$.title.children[0].textContent.length).not.toBe(0);
            expect(calendar.$.title.children[1].textContent.length).not.toBe(0);

            calendar.viewSections = ['title', 'header', 'footer'];
            expect(calendar.$.header.offsetHeight).not.toBe(0);
            expect(calendar.$.footer.offsetHeight).not.toBe(0);
        });

        it('min/max', function () {
            calendar.max = new Date(2003, 0, 1);
            calendar.min = new Date(2005, 5, 5);

            expect(calendar.min.toDateString()).toEqual(new Date(2003, 0, 1).toDateString());
            expect(calendar.max.toDateString()).toEqual(new Date(2003, 0, 1).toDateString());

            calendar.min = new Date(2000, 1, 1);

            expect(calendar.min.toDateString()).toEqual(new Date(2000, 1, 1).toDateString());
            expect(calendar.$.nextMonthButton.disabled).toBe(true);
            expect(calendar.$.previousMonthButton.disabled).toBe(false);

            calendar.max = new Date(2006, 5, 5);

            expect(calendar.$.nextMonthButton.disabled).toBe(false);
            expect(calendar.$.previousMonthButton.disabled).toBe(false);

            calendar.min = new Date(2006, 4, 1);

            expect(calendar.$.nextMonthButton.disabled).toBe(false);
            expect(calendar.$.previousMonthButton.disabled).toBe(true);

            calendar.displayMode = 'year';

            expect(calendar.$.nextMonthButton.disabled).toBe(true);
            expect(calendar.$.previousMonthButton.disabled).toBe(true);

            calendar.displayMode = 'month';

            expect(calendar.$.nextMonthButton.disabled).toBe(true);
            expect(calendar.$.previousMonthButton.disabled).toBe(false);

            calendar.displayMode = 'decade';

            expect(calendar.$.nextMonthButton.disabled).toBe(true);
            expect(calendar.$.previousMonthButton.disabled).toBe(true);

            calendar.max = new Date(2050, 1, 1);

            expect(calendar.$.nextMonthButton.disabled).toBe(false);
            expect(calendar.$.previousMonthButton.disabled).toBe(true);

            calendar.max = 'abc2008-1-1abc';

            expect(calendar.$.nextMonthButton.disabled).toBe(true);
            expect(calendar.$.previousMonthButton.disabled).toBe(true);

            calendar.displayMode = 'month';

            expect(calendar.$.nextMonthButton.disabled).toBe(true);
            expect(calendar.$.previousMonthButton.disabled).toBe(false);
        });
    });
});
