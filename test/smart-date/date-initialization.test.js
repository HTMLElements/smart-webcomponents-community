var describe,
    it,
    expect,
    document,
    beforeAll,
    afterAll;

describe('Testing if DateTime object ', function () {
    var DateTime = Smart.Utilities.DateTime;

    describe('initialization ', function () {
        it('from one argument works as expected', function () {
            let newJSDate = new Date(),
                newDateTime = new DateTime(undefined);

            expect(newDateTime.year()).toBe(newJSDate.getFullYear());
            expect(newDateTime.month()).toBe(newJSDate.getMonth() + 1);
            expect(newDateTime.day()).toBe(newJSDate.getDate());
            expect(newDateTime.hour()).toBe(0);
            expect(newDateTime.minute()).toBe(0);
            expect(newDateTime.second()).toBe(0);
            expect(newDateTime.millisecond()).toBe(0);

            newDateTime = new DateTime('today');

            expect(newDateTime.year()).toBe(newJSDate.getFullYear());
            expect(newDateTime.month()).toBe(newJSDate.getMonth() + 1);
            expect(newDateTime.day()).toBe(newJSDate.getDate());
            expect(newDateTime.hour()).toBe(newJSDate.getHours());
            expect(newDateTime.minute()).toBe(newJSDate.getMinutes());

            newDateTime = new DateTime('todayDate');

            expect(newDateTime.year()).toBe(newJSDate.getFullYear());
            expect(newDateTime.month()).toBe(newJSDate.getMonth() + 1);
            expect(newDateTime.day()).toBe(newJSDate.getDate());
            expect(newDateTime.hour()).toBe(0);
            expect(newDateTime.minute()).toBe(0);
            expect(newDateTime.second()).toBe(0);
            expect(newDateTime.millisecond()).toBe(0);
        });

        it('from two arguments works as expected', function () {
            let newJSDate = new Date(),
                newDateTime = new DateTime(undefined, 'Greenland Standard Time');

            expect(newDateTime.year()).toBe(newJSDate.getFullYear());
            expect(newDateTime.month()).toBe(newJSDate.getMonth() + 1);
            expect(newDateTime.day()).toBe(newJSDate.getDate());
            expect(newDateTime.hour()).toBe(0);
            expect(newDateTime.minute()).toBe(0);
            expect(newDateTime.second()).toBe(0);
            expect(newDateTime.millisecond()).toBe(0);
            expect(newDateTime.timeZone).toBe('Greenland Standard Time');

            newDateTime = new DateTime('today', 'Atlantic Standard Time');

            expect(newDateTime.year()).toBe(newJSDate.getFullYear());
            expect(newDateTime.month()).toBe(newJSDate.getMonth() + 1);
            expect(newDateTime.day()).toBe(newJSDate.getDate());
            expect(newDateTime.hour()).toBe(newJSDate.getHours());
            expect(newDateTime.minute()).toBe(newJSDate.getMinutes());
            expect(newDateTime.second()).toBe(newJSDate.getSeconds());
            expect(newDateTime.timeZone).toBe('Atlantic Standard Time');

            newDateTime = new DateTime('todayDate', 'Greenland Standard Time');

            expect(newDateTime.year()).toBe(newJSDate.getFullYear());
            expect(newDateTime.month()).toBe(newJSDate.getMonth() + 1);
            expect(newDateTime.day()).toBe(newJSDate.getDate());
            expect(newDateTime.hour()).toBe(0);
            expect(newDateTime.minute()).toBe(0);
            expect(newDateTime.second()).toBe(0);
            expect(newDateTime.millisecond()).toBe(0);
            expect(newDateTime.timeZone).toBe('Greenland Standard Time');

            newDateTime = new DateTime('Tuesday, June 20, 2017 9:17 AM', 'Greenland Standard Time');

            expect(newDateTime.year()).toBe(2017);
            expect(newDateTime.month()).toBe(6);
            expect(newDateTime.day()).toBe(20);
            expect(newDateTime.hour()).toBe(9);
            expect(newDateTime.minute()).toBe(17);
            expect(newDateTime.second()).toBe(0);
            expect(newDateTime.millisecond()).toBe(0);
            expect(newDateTime.timeZone).toBe('Greenland Standard Time');

            newDateTime = new DateTime(60159188403001, 'Greenland Standard Time');

            expect(newDateTime.valueOf()).toBe(60159188403001);
            expect(newDateTime.year()).toBe(1907);
            expect(newDateTime.month()).toBe(5);
            expect(newDateTime.day()).toBe(16);
            expect(newDateTime.hour()).toBe(21);
            expect(newDateTime.minute()).toBe(40);
            expect(newDateTime.second()).toBe(3);
            expect(newDateTime.millisecond()).toBe(1);
            expect(newDateTime.timeZone).toBe('Greenland Standard Time');

            newDateTime = new DateTime(newJSDate, 'Atlantic Standard Time');

            expect(newDateTime.year()).toBe(newJSDate.getFullYear());
            expect(newDateTime.month()).toBe(newJSDate.getMonth() + 1);
            expect(newDateTime.day()).toBe(newJSDate.getDate());
            expect(newDateTime.hour()).toBe(newJSDate.getHours());
            expect(newDateTime.minute()).toBe(newJSDate.getMinutes());
            expect(newDateTime.second()).toBe(newJSDate.getSeconds());
            expect(newDateTime.timeZone).toBe('Atlantic Standard Time');
        });

        it('from three arguments works as expected', function () {
            let newDateTime = new DateTime('12:12:1972 13', 'MM:dd:yyyy s', undefined);

            expect(newDateTime.year()).toBe(1972);
            expect(newDateTime.month()).toBe(12);
            expect(newDateTime.day()).toBe(12);
            expect(newDateTime.hour()).toBe(0);
            expect(newDateTime.minute()).toBe(0);
            expect(newDateTime.second()).toBe(13);
            expect(newDateTime.millisecond()).toBe(0);

            newDateTime = new DateTime(2013, 4, 18);

            expect(newDateTime.year()).toBe(2013);
            expect(newDateTime.month()).toBe(4);
            expect(newDateTime.day()).toBe(18);
            expect(newDateTime.hour()).toBe(0);
            expect(newDateTime.minute()).toBe(0);
            expect(newDateTime.second()).toBe(0);
            expect(newDateTime.millisecond()).toBe(0);
        });

        it('from string works as expected', function () {
            let newDateTime = new DateTime('1938-05-18 07:25:14');

            expect(newDateTime.year()).toBe(1938);
            expect(newDateTime.month()).toBe(5);
            expect(newDateTime.day()).toBe(18);
            expect(newDateTime.hour()).toBe(7);
            expect(newDateTime.minute()).toBe(25);
            expect(newDateTime.second()).toBe(14);
            expect(newDateTime.millisecond()).toBe(0);

            newDateTime = new DateTime('1938-05-18 07:25:14.555');

            expect(newDateTime.year()).toBe(1938);
            expect(newDateTime.month()).toBe(5);
            expect(newDateTime.day()).toBe(18);
            expect(newDateTime.hour()).toBe(7);
            expect(newDateTime.minute()).toBe(25);
            expect(newDateTime.second()).toBe(14);
            expect(newDateTime.millisecond()).toBe(555);

            newDateTime = new DateTime('Monday, June 26, 2017 7:20:00 AM');

            expect(newDateTime.year()).toBe(2017);
            expect(newDateTime.month()).toBe(6);
            expect(newDateTime.day()).toBe(26);
            expect(newDateTime.hour()).toBe(7);
            expect(newDateTime.minute()).toBe(20);
            expect(newDateTime.second()).toBe(0);
            expect(newDateTime.millisecond()).toBe(0);

            newDateTime = new DateTime('Monday, June 26, 2017 7:20:00 pm');

            expect(newDateTime.year()).toBe(2017);
            expect(newDateTime.month()).toBe(6);
            expect(newDateTime.day()).toBe(26);
            expect(newDateTime.hour()).toBe(19);
            expect(newDateTime.minute()).toBe(20);
            expect(newDateTime.second()).toBe(0);
            expect(newDateTime.millisecond()).toBe(0);

            newDateTime = new DateTime('8:34 pm');

            expect(newDateTime.year()).toBe(new Date().getFullYear());
            expect(newDateTime.month()).toBe(1);
            expect(newDateTime.day()).toBe(1);
            expect(newDateTime.hour()).toBe(20);
            expect(newDateTime.minute()).toBe(34);
            expect(newDateTime.second()).toBe(0);
            expect(newDateTime.millisecond()).toBe(0);

            newDateTime = new DateTime('August 30');

            expect(newDateTime.year()).toBe(new Date().getFullYear());
            expect(newDateTime.month()).toBe(8);
            expect(newDateTime.day()).toBe(30);
            expect(newDateTime.hour()).toBe(0);
            expect(newDateTime.minute()).toBe(0);
            expect(newDateTime.second()).toBe(0);
            expect(newDateTime.millisecond()).toBe(0);

            newDateTime = new DateTime('2017 12:09');

            expect(newDateTime.year()).toBe(new Date().getFullYear());
            expect(newDateTime.month()).toBe(new Date().getMonth() + 1);
            expect(newDateTime.day()).toBe(new Date().getDate());
            expect(newDateTime.hour()).toBe(12);
            expect(newDateTime.minute()).toBe(9);
            expect(newDateTime.second()).toBe(0);
            expect(newDateTime.millisecond()).toBe(0);

            newDateTime = new DateTime('23/11/2016 11:00 pm');

            expect(newDateTime.year()).toBe(2016);
            expect(newDateTime.month()).toBe(11);
            expect(newDateTime.day()).toBe(23);
            expect(newDateTime.hour()).toBe(23);
            expect(newDateTime.minute()).toBe(0);
            expect(newDateTime.second()).toBe(0);
            expect(newDateTime.millisecond()).toBe(0);

            newDateTime = new DateTime('23/11/2016 11:00 am');

            expect(newDateTime.year()).toBe(2016);
            expect(newDateTime.month()).toBe(11);
            expect(newDateTime.day()).toBe(23);
            expect(newDateTime.hour()).toBe(11);
            expect(newDateTime.minute()).toBe(0);
            expect(newDateTime.second()).toBe(0);
            expect(newDateTime.millisecond()).toBe(0);

            newDateTime = new DateTime('/Date(123)');
            expect(newDateTime.toDate().toString()).toBe('Invalid Date');

            newDateTime = new DateTime('68/12/12', 'yy/MM/dd', undefined);

            expect(newDateTime.year()).toBe(1968);
            expect(newDateTime.month()).toBe(12);
            expect(newDateTime.day()).toBe(12);
            expect(newDateTime.hour()).toBe(0);
            expect(newDateTime.minute()).toBe(0);
            expect(newDateTime.second()).toBe(0);
            expect(newDateTime.millisecond()).toBe(0);
        });
    });
});
