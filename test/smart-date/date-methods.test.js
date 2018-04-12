var describe,
    it,
    expect,
    document,
    beforeAll,
    afterAll;

describe('Testing DateTime object method(s) ', function () {
    var DateTime = Smart.Utilities.DateTime;

    it('"subtract" and the class TimeSpan', function () {
        let firstDateTime = new DateTime(1920, 3, 12, 8, 34, 21),
            secondDateTime = new DateTime(1920, 3, 12, 8, 35, 21),
            subtractionResult = firstDateTime.subtract(secondDateTime);
        const duration = subtractionResult.duration();

        expect(subtractionResult instanceof Smart.Utilities.TimeSpan).toBe(true);
        expect(subtractionResult.ticks()).toBe(-600000000);
        expect(subtractionResult.ticks()).toBe(subtractionResult.valueOf());
        expect(duration instanceof Smart.Utilities.TimeSpan).toBe(true);
        expect(duration.ticks()).toBe(Math.abs(subtractionResult.ticks()));
        expect(subtractionResult.minutes()).toBe(-1);
        expect(subtractionResult.seconds()).toBe(0);
        expect(subtractionResult.totalMinutes()).toBe(-1);
        expect(subtractionResult.totalSeconds()).toBe(-60);
        expect(subtractionResult.totalMilliseconds()).toBe(-60000);

        firstDateTime = new DateTime(1920, 3, 13, 18, 30, 25, 11);
        secondDateTime = new DateTime(1920, 3, 12, 8, 35, 21, 18);
        const secondSubtractionResult = firstDateTime.subtract(secondDateTime),
            secondDuration = secondSubtractionResult.duration();

        expect(secondDuration instanceof Smart.Utilities.TimeSpan).toBe(true);
        expect(secondDuration.ticks()).toBe(secondSubtractionResult.ticks());
        expect(secondSubtractionResult.days()).toBe(1);
        expect(secondSubtractionResult.totalDays()).toBe(1);
        expect(secondSubtractionResult.hours()).toBe(9);
        expect(secondSubtractionResult.totalHours()).toBe(33);
        expect(secondSubtractionResult.minutes()).toBe(55);
        expect(secondSubtractionResult.totalMinutes()).toBe(2035);
        expect(secondSubtractionResult.seconds()).toBe(3);
        expect(secondSubtractionResult.totalSeconds()).toBe(122103);

        expect(subtractionResult.equals(secondSubtractionResult)).toBe(false);
        expect(subtractionResult.compare(subtractionResult, secondSubtractionResult)).toBe(-1);

        const resultsAddition = subtractionResult.add(secondSubtractionResult),
            resultsSubtraction = subtractionResult.subtract(secondSubtractionResult);

        expect(resultsAddition.compare(resultsAddition, resultsSubtraction)).toBe(1);
        expect(resultsAddition.minutes()).toBe(54);
        expect(resultsSubtraction.minutes()).toBe(-56);

        expect(subtractionResult.fromDays(5).days()).toBe(5);
        expect(subtractionResult.fromHours(15).hours()).toBe(15);
        expect(subtractionResult.fromMinutes(45).minutes()).toBe(45);
        expect(subtractionResult.fromSeconds(60).seconds()).toBe(0);
        expect(subtractionResult.fromMilliseconds(55).milliseconds()).toBe(55);
        expect(subtractionResult.fromTicks(4500).ticks()).toBe(4500);
    });

    it('"dayOfWeek", "dayOfYear", "weekOfYear", "isWeekend" and "isLeapYear"', function () {
        let newDateTime = new DateTime(2017, 6, 26);

        expect(newDateTime.dayOfWeek()).toBe(1);
        expect(newDateTime.dayOfYear()).toBe(177);
        expect(newDateTime.weekOfYear()).toBe(26);
        expect(newDateTime.isWeekend()).toBe(false);

        newDateTime = new DateTime(2016, 12, 31);

        expect(newDateTime.dayOfWeek()).toBe(6);
        expect(newDateTime.dayOfYear()).toBe(366);
        expect(newDateTime.weekOfYear()).toBe(52);
        expect(newDateTime.isWeekend()).toBe(true);

        expect(newDateTime.isLeapYear(2017)).toBe(false);
        expect(newDateTime.isLeapYear(2020)).toBe(true);

        const isLeapYearErrorTest = function () {
            newDateTime.isLeapYear(50000);
        };

        expect(isLeapYearErrorTest).toThrowError('Year out of Range');
    });

    it('"clearTime"', function () {
        const newDateTime = new DateTime(2017, 6, 26, 19, 0, 17, 135),
            newDate = newDateTime.clearTime();

        expect(newDate.year()).toBe(newDateTime.year());
        expect(newDate.month()).toBe(newDateTime.month());
        expect(newDate.day()).toBe(newDateTime.day());
        expect(newDate.hour()).toBe(0);
        expect(newDate.minute()).toBe(0);
        expect(newDate.second()).toBe(0);
        expect(newDate.millisecond()).toBe(0);
    });

    it('for adding time units', function () {
        const newDateTime = new DateTime(2017, 6, 26, 19, 0, 17, 135);
        let updatedDateTime;

        newDateTime.addYears(7, false);

        expect(newDateTime.year()).toBe(2024);

        updatedDateTime = newDateTime.addYears(2);

        expect(newDateTime.year()).toBe(2024);
        expect(updatedDateTime.year()).toBe(2026);

        newDateTime.addMonths(-6, false);

        expect(newDateTime.year()).toBe(2023);
        expect(newDateTime.month()).toBe(12);

        updatedDateTime = newDateTime.addMonths(2);

        expect(newDateTime.year()).toBe(2023);
        expect(newDateTime.month()).toBe(12);
        expect(updatedDateTime.year()).toBe(2024);
        expect(updatedDateTime.month()).toBe(2);

        newDateTime.addDays(7, false);

        expect(newDateTime.day()).toBe(2);

        updatedDateTime = newDateTime.addDays(2);

        expect(newDateTime.day()).toBe(2);
        expect(updatedDateTime.day()).toBe(4);

        newDateTime.addHours(-9, false);

        expect(newDateTime.hour()).toBe(10);

        updatedDateTime = newDateTime.addHours(22);

        expect(newDateTime.hour()).toBe(10);
        expect(updatedDateTime.hour()).toBe(8);

        newDateTime.addMinutes(25, false);

        expect(newDateTime.minute()).toBe(25);

        updatedDateTime = newDateTime.addMinutes(22);

        expect(newDateTime.minute()).toBe(25);
        expect(updatedDateTime.minute()).toBe(47);

        newDateTime.addSeconds(-63, false);

        expect(newDateTime.minute()).toBe(24);
        expect(newDateTime.second()).toBe(14);

        updatedDateTime = newDateTime.addSeconds(0);

        expect(newDateTime.second()).toBe(14);
        expect(updatedDateTime.second()).toBe(14);

        newDateTime.addMilliseconds(117, false);

        expect(newDateTime.millisecond()).toBe(252);

        updatedDateTime = newDateTime.addMilliseconds(71000);

        expect(newDateTime.millisecond()).toBe(252);
        expect(updatedDateTime.minute()).toBe(25);
        expect(updatedDateTime.second()).toBe(25);
        expect(updatedDateTime.millisecond()).toBe(252);

        let timeSpanToAdd = new Smart.Utilities.TimeSpan(1, 1, 21);

        newDateTime.add(timeSpanToAdd, undefined, false);

        expect(newDateTime.hour()).toBe(11);
        expect(newDateTime.minute()).toBe(25);
        expect(newDateTime.second()).toBe(35);

        timeSpanToAdd = new Smart.Utilities.TimeSpan(0, 0, 1, 300);
        updatedDateTime = newDateTime.add(timeSpanToAdd, undefined, true);

        expect(newDateTime.hour()).toBe(11);
        expect(newDateTime.minute()).toBe(25);
        expect(newDateTime.second()).toBe(35);
        expect(updatedDateTime.hour()).toBe(11);
        expect(updatedDateTime.minute()).toBe(31);
        expect(updatedDateTime.second()).toBe(35);
        expect(updatedDateTime.millisecond()).toBe(252);
    });

    it('"toString"', function () {
        let newDateTime = new DateTime(2017, 6, 26, 19, 0, 17, 135);

        expect(newDateTime.toString('D')).toBe('Monday, June 26, 2017');
        expect(newDateTime.toString('t')).toBe('7:00 PM');
        expect(newDateTime.toString('T')).toBe('7:00:17 PM');
        expect(newDateTime.toString('f')).toBe('Monday, June 26, 2017 7:00 PM');
        expect(newDateTime.toString('F')).toBe('Monday, June 26, 2017 7:00:17 PM');
        expect(newDateTime.toString('M')).toBe('June 26');
        expect(newDateTime.toString('Y')).toBe('2017 June');
        expect(newDateTime.toString('S')).toBe('2017-06-26T19:00:17');
        expect(newDateTime.toString('ISO')).toBe('2017-06-26 07:00:17');
        expect(newDateTime.toString('ISO2')).toBe('2017-06-26 19:00:17');
        expect(newDateTime.toString('d1')).toBe('26.06.2017');
        expect(newDateTime.toString('d2')).toBe('26-06-2017');
        expect(newDateTime.toString('yyyy HH')).toBe('2017 19');

        let todayOffset = parseInt(newDateTime.getTimeZoneOffset().offset, 10).toString();

        expect(todayOffset).toBe((-(new Date().getTimezoneOffset() / 60)).toString());

        let offset = (-(new Date(2017, 5, 26, 19, 0, 17, 135).getTimezoneOffset() / 60)).toString();

        if (offset.length === 1) {
            offset = '+0' + offset;
        }
        else if (offset.length === 2) {
            if (offset.charAt(0) === '-') {
                offset = '-0' + offset.charAt(1);
            }
            else {
                offset = '+' + offset;
            }
        }

        expect(newDateTime.toString('yyyy HH zz')).toBe('2017 19 ' + offset);

        delete DateTime.cache;
    });

    it('"date", "toDate" and "toTimeZone"', function () {
        const newDateTime = new DateTime(2017, 6, 26, 19, 0, 17, 135),
            dateOnly = newDateTime.date();

        expect(dateOnly.year()).toBe(2017);
        expect(dateOnly.month()).toBe(6);
        expect(dateOnly.day()).toBe(26);
        expect(dateOnly.hour()).toBe(0);
        expect(dateOnly.minute()).toBe(0);
        expect(dateOnly.second()).toBe(0);
        expect(dateOnly.millisecond()).toBe(0);

        const toDateWithNewTimeZone = newDateTime.toDate('Canada Central Standard Time');

        expect(toDateWithNewTimeZone instanceof Date).toBe(true);

        const toNewTimeZone = newDateTime.toTimeZone('Canada Central Standard Time');

        expect(toNewTimeZone instanceof DateTime).toBe(true);
        expect(toNewTimeZone.timeZone).toBe('Canada Central Standard Time');
    });

    it('misc methods and functionalities', function () {
        let date1 = new DateTime(2017, 6, 26, 19, 0, 17, 135),
            date2 = new DateTime(2017, 6, 26, 19, 0, 17, 135),
            referenceDate = new Date(2017, 5, 26, 19, 0, 17, 135);

        date1.calendar.locale = 'en';
        date2.calendar.locale = 'de';

        expect(date1.equals(date2)).toBe(true);
        expect(date1.compare(date2)).toBe(0);

        expect(date1.toDateString()).toBe(referenceDate.toDateString());
        expect(date1.toLocaleDateString()).toBe(referenceDate.toLocaleDateString('en'));
        expect(date1.toLocaleString()).toBe(referenceDate.toLocaleString('en'));
        expect(date1.toLocaleTimeString()).toBe(referenceDate.toLocaleTimeString('en'));

        expect(date2.toDateString()).toBe(referenceDate.toDateString());
        expect(date2.toLocaleDateString()).toBe(referenceDate.toLocaleDateString('de'));
        expect(date2.toLocaleString()).toBe(referenceDate.toLocaleString('de'));
        expect(date2.toLocaleTimeString()).toBe(referenceDate.toLocaleTimeString('de'));

        date1 = new DateTime(2017, 6, 26, 0, 0, 0, 0, 0);
        date2 = date1.clone();

        date1.addMicroseconds(0, false);
        expect(date1.equals(date2)).toBe(true);

        date1.addMicroseconds(-2, false);
        expect(date1.year()).toBe(2017);
        expect(date1.month()).toBe(6);
        expect(date1.day()).toBe(25);
        expect(date1.hour()).toBe(23);
        expect(date1.minute()).toBe(59);
        expect(date1.second()).toBe(59);
        expect(date1.millisecond()).toBe(999);
        expect(date1.microsecond()).toBe(998);
        expect(date1.nanosecond()).toBe(0);

        date2.addDeciseconds(1, false);

        expect(date2.millisecond()).toBe(100);

        date2.addCentiseconds(20, false);

        expect(date2.millisecond()).toBe(300);
    });
});
