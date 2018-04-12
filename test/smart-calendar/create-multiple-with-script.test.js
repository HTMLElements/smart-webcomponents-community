var describe,
    it,
    expect,
    document,
    beforeEach;
describe('Testing smart-calendar create-multiple-with-script', function () {
    'use strict';
    let calendar;

    jasmine.getFixtures().fixturesPath = 'base/test/smartcalendar/fixtures';
    jasmine.getFixtures().preload('smart-calendar-attributes-synchronization.htm');
    beforeEach(function () {
        loadFixtures('smart-calendar-attributes-synchronization.htm');
        calendar = document.querySelector('smart-calendar');
    });
    describe('if it', function () {
        it('exists in DOM', function () {
            expect(document.querySelector('smart-calendar')).toBeInDOM();
        });
    });

    // Create N more elements of each kind and set them properties
    let createElemnets = function (selector, count) {
        let doc = document;

        while (count > 0) {
            count--;
            selector = document.createElement('smart-calendar');
            doc.body.appendChild(selector);

            //Applying properties
            selector.viewSections = ['title', 'header'];
            selector.selectedDates = ['2017-2-5', '2017-5-2', '2010-1-1'];
            selector.weekNumbers = true;

            //Checking if properties are set
            expect(selector.viewSections).toEqual(['title', 'header']);
            expect(selector.selectedDates[0].toDateString()).toEqual(new Date('2017-2-5').toDateString());
            expect(selector.selectedDates[1].toDateString()).toEqual(new Date('2017-5-2').toDateString());
            expect(selector.selectedDates[2].toDateString()).toEqual(new Date('2010-1-1').toDateString());
            expect(selector.weekNumbers).toBe(true);
        }
    }

    //Removing the elements from the DOM
    let removeElements = function () {
        let calendars = document.getElementsByTagName('smart-calendar'),
            count = calendars.length;

        while (count > 1) {
            count--;
            document.body.removeChild(calendars[count]);
        }
    }

    describe('Creating other elements while test is running,', function () {
        it('set properties to them and before the test ends we remove them', function () {
            let doc = document,
                calendar2;

            //Setting the setings of the calendar created with the fixture
            calendar.calendarMode = 'classic';
            calendar.selectedDates = ['2000-1-1'];
            calendar.firstDayOfWeek = 2;

            createElemnets(calendar2, 10)

            expect(calendar.calendarMode).toEqual('classic');
            expect(calendar.selectedDates[0].toDateString()).toEqual(new Date('2000-1-1').toDateString());
            expect(calendar.firstDayOfWeek).toEqual(2);

            removeElements();
            expect(doc.getElementsByTagName('smart-calendar').length).toBe(1);
        });
    });
    describe('Creating and destroying other elements while the test is running,', function () {
        it('set properties to them and before the test ends we remove them', function () {
            let doc = document,
                calendar2;

            createElemnets(calendar2, 10)

            //Setting the setings of the calendar created with the fixture
            calendar.min = new Date('1991-1-1');
            calendar.max = '2000-1-1';
            calendar.selectionMode = 'zeroOrMany';
            calendar.selectedDates = ['1998-4-1','1991-7-17','1999-10-1'];
            calendar.weeks = 4;

            expect(calendar.min.toDateString()).toEqual(new Date('1991-1-1').toDateString());
            expect(calendar.max.toDateString()).toEqual(new Date('2000-1-1').toDateString());
            expect(calendar.selectionMode).toEqual('zeroOrMany');
            expect(calendar.selectedDates[0].toDateString()).toEqual(new Date('1998-4-1').toDateString());
            expect(calendar.selectedDates[1].toDateString()).toEqual(new Date('1991-7-17').toDateString());
            expect(calendar.selectedDates[2].toDateString()).toEqual(new Date('1999-10-1').toDateString());
            expect(calendar.weeks).toBe(4);

            removeElements();
            expect(doc.getElementsByTagName('smart-calendar').length).toBe(1);
        });
    });
});
