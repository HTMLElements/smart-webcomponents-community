var describe,
    it,
    expect,
    document,
    beforeAll,
    afterAll;

function checkTimeParts(date, year, month, day, hour, minute) {
    return date.year() === year &&
        date.month() === month &&
        date.day() === day &&
        date.hour() === hour &&
        date.minute() === minute;
}

describe('Testing DateTimePicker initialization', function () {
    let dti1, dti2, dti3, dti4, dti5, dti6, dti7;

    jasmine.getFixtures().fixturesPath = 'base/test/smartdatetimepicker/fixtures';
    jasmine.getFixtures().preload('smart-date-time-picker-initialization.htm');
    beforeEach(function () {
        loadFixtures('smart-date-time-picker-initialization.htm');
        dti1 = document.getElementById('dti1');
        dti2 = document.getElementById('dti2');
        dti3 = document.getElementById('dti3');
        dti4 = document.getElementById('dti4');
        dti5 = document.getElementById('dti5');
        dti6 = document.getElementById('dti6');
        dti7 = document.getElementById('dti7');
    });

    it('from HTML tags', function () {
        expect(dti1).toBeInDOM();
        expect(dti2).toBeInDOM();
        expect(dti3).toBeInDOM();
        expect(dti4).toBeInDOM();
        expect(dti5).toBeInDOM();
        expect(dti6).toBeInDOM();
        expect(dti7).toBeInDOM();

        expect(dti1.value instanceof Smart.Utilities.DateTime).toBe(true);
        expect(dti2.value instanceof Smart.Utilities.DateTime).toBe(true);
        expect(dti3.value instanceof Smart.Utilities.DateTime).toBe(true);
        expect(dti4.value instanceof Smart.Utilities.DateTime).toBe(true);
        expect(dti5.value instanceof Smart.Utilities.DateTime).toBe(true);
        expect(dti6.value instanceof Smart.Utilities.DateTime).toBe(true);
        expect(dti7.value instanceof Smart.Utilities.DateTime).toBe(true);

        expect(checkTimeParts(dti1.value, 3001, 1, 1, 0, 0)).toBe(true);
        expect(checkTimeParts(dti2.value, 2002, 1, 1, 0, 0)).toBe(true);
        expect(checkTimeParts(dti3.value, 2002, 1, 1, 12, 35)).toBe(true);
        expect(dti3.value.second()).toBe(26);
        expect(dti3.value.millisecond()).toBe(893);
        expect(dti3.value.microsecond()).toBe(313);
        expect(checkTimeParts(dti4.value, 2002, 2, 1, 0, 0)).toBe(true);
        expect(dti5.value.toDate().getTime()).toBe(1501763473654);
        expect(dti6.value.toDate().getTime()).toBe(1501763473654);
        expect(dti7.value.compare(dti7.min)).toBe(1);
        expect(dti7.value.compare(dti7.max)).toBe(-1);

        expect(dti1.interval instanceof Smart.Utilities.TimeSpan).toBe(true);
        expect(dti2.interval instanceof Smart.Utilities.TimeSpan).toBe(true);
        expect(dti3.interval instanceof Smart.Utilities.TimeSpan).toBe(true);
        expect(dti4.interval instanceof Smart.Utilities.TimeSpan).toBe(true);
        expect(dti5.interval instanceof Smart.Utilities.TimeSpan).toBe(true);
        expect(dti6.interval instanceof Smart.Utilities.TimeSpan).toBe(true);
        expect(dti7.interval instanceof Smart.Utilities.TimeSpan).toBe(true);

        expect(dti1.interval.seconds()).toBe(1);
        expect(dti1.interval.totalMilliseconds()).toBe(1000);
        expect(dti2.interval.totalMilliseconds()).toBe(1);
        expect(dti3.interval.totalMilliseconds()).toBe(50);
        expect(dti4.interval.totalMilliseconds()).toBe(1000);
        expect(dti5.interval.totalMilliseconds()).toBe(1000);
        expect(dti6.interval.totalMilliseconds()).toBe(3662000);
        expect(dti7.interval.totalMilliseconds()).toBe(86462000);

        expect(dti1.opened).toBe(true);
        expect(dti1.$.calendarDropDown).toBeVisible();

        expect(dti2.opened).toBe(false);
        expect(dti2.$.calendarDropDown).not.toBeVisible();

        expect(dti3.$.spinButtonsContainer).toBeVisible();
        expect(dti3.$.spinButtonsContainer.nextElementSibling).toBe(dti3.$.calendarButton);
    });
});

describe('Testing DateTimePicker', function () {
    it('dynamic creation', function () {
        const dti1 = document.createElement('smart-date-time-picker');

        dti1.value = new Smart.Utilities.DateTime(2005, 8, 17);
        dti1.interval = new Smart.Utilities.TimeSpan(1, 0, 0, 0, 0);
        document.body.appendChild(dti1);

        expect(dti1).toBeInDOM();
        expect(checkTimeParts(dti1.value, 2005, 8, 17, 0, 0)).toBe(true);
        expect(dti1.interval.totalMilliseconds()).toBe(86400000);

        const dti2 = document.createElement('smart-date-time-picker');

        dti2.value = new Date(2005, 8, 17);
        dti2.interval = 'asdf';
        dti2.spinButtons = true;
        document.body.appendChild(dti2);

        expect(dti2).toBeInDOM();
        expect(checkTimeParts(dti2.value, 2005, 9, 17, 0, 0)).toBe(true);
        expect(dti2.interval.totalMilliseconds()).toBe(1000);
        expect(dti2.$.spinButtonsContainer).toBeVisible();

        const dti3 = document.createElement('smart-date-time-picker');

        dti3.value = 'zxcv';
        dti3.interval = '5';
        dti3.calendarButton = true;
        document.body.appendChild(dti3);

        expect(dti3).toBeInDOM();
        expect(dti3.value.compare(dti3.min)).toBe(1);
        expect(dti3.value.compare(dti3.max)).toBe(-1);
        expect(dti3.interval.totalMilliseconds()).toBe(5);
        expect(dti3.$.calendarButton).toBeVisible();

        const dti4 = document.createElement('smart-date-time-picker');

        dti4.value = 1501840641159;
        dti4.interval = 'asdf';
        dti4.spinButtons = true;
        dti4.calendarButton = true;
        document.body.appendChild(dti4);

        expect(dti4).toBeInDOM();
        expect(dti4.value.toDate().getTime()).toBe(1501840641159);
        expect(dti4.value.second()).toBe(21);
        expect(dti4.interval.totalMilliseconds()).toBe(1000);
        expect(dti4.$.spinButtonsContainer).toBeVisible();
        expect(dti4.$.calendarButton).toBeVisible();

        document.body.removeChild(dti1);
        document.body.removeChild(dti2);
        document.body.removeChild(dti3);
        document.body.removeChild(dti4);

        expect(dti1).not.toBeInDOM();
        expect(dti2).not.toBeInDOM();
        expect(dti3).not.toBeInDOM();
        expect(dti4).not.toBeInDOM();
    });
});
