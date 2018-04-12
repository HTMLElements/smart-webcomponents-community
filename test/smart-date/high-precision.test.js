var describe,
    it,
    expect,
    document,
    beforeAll,
    afterAll;

describe('Testing high-precision DateTime object ', function () {
    var DateTime = Smart.Utilities.DateTime;

    describe('initialization ', function () {
        it('from parameters works as expected', function () {
            const newDateTime = new DateTime(1988, 3, 11, 8, 34, 21, 890, 119, 800, 25, 333, 18, 45, 11);

            expect(newDateTime.year()).toBe(1988);
            expect(newDateTime.month()).toBe(3);
            expect(newDateTime.day()).toBe(11);
            expect(newDateTime.hour()).toBe(8);
            expect(newDateTime.minute()).toBe(34);
            expect(newDateTime.second()).toBe(21);
            expect(newDateTime.millisecond()).toBe(890);
            expect(newDateTime.microsecond()).toBe(119);
            expect(newDateTime.nanosecond()).toBe(800);
            expect(newDateTime.picosecond()).toBe(25);
            expect(newDateTime.femtosecond()).toBe(333);
            expect(newDateTime.attosecond()).toBe(18);
            expect(newDateTime.zeptosecond()).toBe(45);
            expect(newDateTime.yoctosecond()).toBe(11);
        });

        it('from string works as expected', function () {
            let newDateTime = new DateTime('1988-03-11 08:34:21:890:119:800:025:333:018:045:011');

            expect(newDateTime.year()).toBe(1988);
            expect(newDateTime.month()).toBe(3);
            expect(newDateTime.day()).toBe(11);
            expect(newDateTime.hour()).toBe(8);
            expect(newDateTime.minute()).toBe(34);
            expect(newDateTime.second()).toBe(21);
            expect(newDateTime.millisecond()).toBe(890);
            expect(newDateTime.microsecond()).toBe(119);
            expect(newDateTime.nanosecond()).toBe(800);
            expect(newDateTime.picosecond()).toBe(25);
            expect(newDateTime.femtosecond()).toBe(333);
            expect(newDateTime.attosecond()).toBe(18);
            expect(newDateTime.zeptosecond()).toBe(45);
            expect(newDateTime.yoctosecond()).toBe(11);

            newDateTime = new DateTime('08:34:24:089:019:800:002:111:018:045:011');

            expect(newDateTime.year()).toBe(new Date().getFullYear());
            expect(newDateTime.month()).toBe(1);
            expect(newDateTime.day()).toBe(1);
            expect(newDateTime.hour()).toBe(8);
            expect(newDateTime.minute()).toBe(34);
            expect(newDateTime.second()).toBe(24);
            expect(newDateTime.millisecond()).toBe(89);
            expect(newDateTime.microsecond()).toBe(19);
            expect(newDateTime.nanosecond()).toBe(800);
            expect(newDateTime.picosecond()).toBe(2);
            expect(newDateTime.femtosecond()).toBe(111);
            expect(newDateTime.attosecond()).toBe(18);
            expect(newDateTime.zeptosecond()).toBe(45);
            expect(newDateTime.yoctosecond()).toBe(11);

            newDateTime = new DateTime('1923-11-11 18:34:21:089:019:800:012');

            expect(newDateTime.year()).toBe(1923);
            expect(newDateTime.month()).toBe(11);
            expect(newDateTime.day()).toBe(11);
            expect(newDateTime.hour()).toBe(18);
            expect(newDateTime.minute()).toBe(34);
            expect(newDateTime.second()).toBe(21);
            expect(newDateTime.millisecond()).toBe(89);
            expect(newDateTime.microsecond()).toBe(19);
            expect(newDateTime.nanosecond()).toBe(800);
            expect(newDateTime.picosecond()).toBe(12);
            expect(newDateTime.femtosecond()).toBe(0);
            expect(newDateTime.attosecond()).toBe(0);
            expect(newDateTime.zeptosecond()).toBe(0);
            expect(newDateTime.yoctosecond()).toBe(0);

            newDateTime = new DateTime('07:00:00:089:019:800:002');

            expect(newDateTime.year()).toBe(new Date().getFullYear());
            expect(newDateTime.month()).toBe(1);
            expect(newDateTime.day()).toBe(1);
            expect(newDateTime.hour()).toBe(7);
            expect(newDateTime.minute()).toBe(0);
            expect(newDateTime.second()).toBe(0);
            expect(newDateTime.millisecond()).toBe(89);
            expect(newDateTime.microsecond()).toBe(19);
            expect(newDateTime.nanosecond()).toBe(800);
            expect(newDateTime.picosecond()).toBe(2);
            expect(newDateTime.femtosecond()).toBe(0);
            expect(newDateTime.attosecond()).toBe(0);
            expect(newDateTime.zeptosecond()).toBe(0);
            expect(newDateTime.yoctosecond()).toBe(0);
        });

        it('from JS Date object works as expected', function () {
            let newJSDate = new Date(),
                newDateTime = new DateTime(newJSDate);

            expect(newDateTime.year()).toBe(newJSDate.getFullYear());
            expect(newDateTime.month()).toBe(newJSDate.getMonth() + 1);
            expect(newDateTime.day()).toBe(newJSDate.getDate());
            expect(newDateTime.hour()).toBe(newJSDate.getHours());
            expect(newDateTime.minute()).toBe(newJSDate.getMinutes());
            expect(newDateTime.second()).toBe(newJSDate.getSeconds());
            expect(newDateTime.millisecond()).toBe(newJSDate.getMilliseconds());
            expect(newDateTime.microsecond()).toBe(0);
            expect(newDateTime.nanosecond()).toBe(0);
            expect(newDateTime.picosecond()).toBe(0);
            expect(newDateTime.femtosecond()).toBe(0);
            expect(newDateTime.attosecond()).toBe(0);
            expect(newDateTime.zeptosecond()).toBe(0);
            expect(newDateTime.yoctosecond()).toBe(0);

            newDateTime = new DateTime();

            expect(newDateTime.year()).toBe(newJSDate.getFullYear());
            expect(newDateTime.month()).toBe(newJSDate.getMonth() + 1);
            expect(newDateTime.day()).toBe(newJSDate.getDate());
            expect(newDateTime.hour()).toBe(newJSDate.getHours());
            expect(newDateTime.minute()).toBe(newJSDate.getMinutes());
            expect(newDateTime.microsecond()).toBe(0);
            expect(newDateTime.nanosecond()).toBe(0);
            expect(newDateTime.picosecond()).toBe(0);
            expect(newDateTime.femtosecond()).toBe(0);
            expect(newDateTime.attosecond()).toBe(0);
            expect(newDateTime.zeptosecond()).toBe(0);
            expect(newDateTime.yoctosecond()).toBe(0);

            newJSDate = new Date(1929, 3, 19, 17, 58, 22, 100);
            newDateTime = new DateTime(newJSDate);

            expect(newDateTime.year()).toBe(newJSDate.getFullYear());
            expect(newDateTime.month()).toBe(newJSDate.getMonth() + 1);
            expect(newDateTime.day()).toBe(newJSDate.getDate());
            expect(newDateTime.hour()).toBe(newJSDate.getHours());
            expect(newDateTime.minute()).toBe(newJSDate.getMinutes());
            expect(newDateTime.second()).toBe(newJSDate.getSeconds());
            expect(newDateTime.millisecond()).toBe(newJSDate.getMilliseconds());
            expect(newDateTime.microsecond()).toBe(0);
            expect(newDateTime.nanosecond()).toBe(0);
            expect(newDateTime.picosecond()).toBe(0);
            expect(newDateTime.femtosecond()).toBe(0);
            expect(newDateTime.attosecond()).toBe(0);
            expect(newDateTime.zeptosecond()).toBe(0);
            expect(newDateTime.yoctosecond()).toBe(0);
        });
    });

    describe('"clone" method ', function () {
        it('works as expected', function () {
            const firstDateTime = new Smart.Utilities.DateTime(1920, 3, 12, 8, 34, 21, 89, 19, 800, 2, 333, 18, 45, 11),
                secondDateTime = firstDateTime.clone();

            expect(firstDateTime.year()).toBe(secondDateTime.year());
            expect(firstDateTime.month()).toBe(secondDateTime.month());
            expect(firstDateTime.day()).toBe(secondDateTime.day());
            expect(firstDateTime.hour()).toBe(secondDateTime.hour());
            expect(firstDateTime.minute()).toBe(secondDateTime.minute());
            expect(firstDateTime.second()).toBe(secondDateTime.second());
            expect(firstDateTime.millisecond()).toBe(secondDateTime.millisecond());
            expect(firstDateTime.microsecond()).toBe(secondDateTime.microsecond());
            expect(firstDateTime.nanosecond()).toBe(secondDateTime.nanosecond());
            expect(firstDateTime.picosecond()).toBe(secondDateTime.picosecond());
            expect(firstDateTime.femtosecond()).toBe(secondDateTime.femtosecond());
            expect(firstDateTime.attosecond()).toBe(secondDateTime.attosecond());
            expect(firstDateTime.zeptosecond()).toBe(secondDateTime.zeptosecond());
            expect(firstDateTime.yoctosecond()).toBe(secondDateTime.yoctosecond());
        });
    });

    describe('"equals" method ', function () {
        it('works as expected', function () {
            const firstDateTime = new Smart.Utilities.DateTime(1920, 3, 12, 8, 34, 21, 89, 19, 800, 2, 333, 18, 45, 11),
                secondDateTime = new DateTime('1920-03-12 08:34:21:089:019:800:002:333:018:045:011');

            expect(firstDateTime.equals(secondDateTime)).toBe(true);
        });
    });

    describe('adding/removing ', function () {
        const newDateTime = new Smart.Utilities.DateTime(1920, 3, 12, 8, 34, 21, 89, 19, 800, 2, 333, 18, 45, 11);

        it('microseconds works as expected', function () {
            newDateTime.addMicroseconds(50010983, false);

            expect(newDateTime.second()).toBe(11);
            expect(newDateTime.millisecond()).toBe(100);
            expect(newDateTime.microsecond()).toBe(2);

            newDateTime.addMicroseconds(-100, false);

            expect(newDateTime.second()).toBe(11);
            expect(newDateTime.millisecond()).toBe(99);
            expect(newDateTime.microsecond()).toBe(902);

            const updatedDateTime = newDateTime.addMicroseconds(100, true);

            expect(newDateTime.second()).toBe(11);
            expect(newDateTime.millisecond()).toBe(99);
            expect(newDateTime.microsecond()).toBe(902);
            expect(updatedDateTime.second()).toBe(11);
            expect(updatedDateTime.millisecond()).toBe(100);
            expect(updatedDateTime.microsecond()).toBe(2);
        });

        it('nanoseconds works as expected', function () {
            newDateTime.addNanoseconds(77, false);

            expect(newDateTime.microsecond()).toBe(902);
            expect(newDateTime.nanosecond()).toBe(877);

            newDateTime.addNanoseconds(-2500, false);

            expect(newDateTime.microsecond()).toBe(900);
            expect(newDateTime.nanosecond()).toBe(377);

            const updatedDateTime = newDateTime.addNanoseconds(-900, true);

            expect(newDateTime.microsecond()).toBe(900);
            expect(newDateTime.nanosecond()).toBe(377);
            expect(updatedDateTime.microsecond()).toBe(899);
            expect(updatedDateTime.nanosecond()).toBe(477);
        });

        it('picoseconds works as expected', function () {
            newDateTime.addPicoseconds(50010983, false);

            expect(newDateTime.microsecond()).toBe(950);
            expect(newDateTime.nanosecond()).toBe(387);
            expect(newDateTime.picosecond()).toBe(985);

            newDateTime.addPicoseconds(-1001, false);

            expect(newDateTime.microsecond()).toBe(950);
            expect(newDateTime.nanosecond()).toBe(386);
            expect(newDateTime.picosecond()).toBe(984);

            const updatedDateTime = newDateTime.addPicoseconds(1001, true);

            expect(newDateTime.microsecond()).toBe(950);
            expect(newDateTime.nanosecond()).toBe(386);
            expect(newDateTime.picosecond()).toBe(984);
            expect(updatedDateTime.microsecond()).toBe(950);
            expect(updatedDateTime.nanosecond()).toBe(387);
            expect(updatedDateTime.picosecond()).toBe(985);
        });

        it('femtoseconds works as expected', function () {
            newDateTime.addFemtoseconds(11, false);

            expect(newDateTime.picosecond()).toBe(984);
            expect(newDateTime.femtosecond()).toBe(344);

            newDateTime.addFemtoseconds(-0, false);

            expect(newDateTime.picosecond()).toBe(984);
            expect(newDateTime.femtosecond()).toBe(344);

            const updatedDateTime = newDateTime.addFemtoseconds(3, true);

            expect(newDateTime.picosecond()).toBe(984);
            expect(newDateTime.femtosecond()).toBe(344);
            expect(updatedDateTime.picosecond()).toBe(984);
            expect(updatedDateTime.femtosecond()).toBe(347);
        });

        it('attoseconds works as expected', function () {
            newDateTime.addAttoseconds(88888, false);

            expect(newDateTime.picosecond()).toBe(984);
            expect(newDateTime.femtosecond()).toBe(432);
            expect(newDateTime.attosecond()).toBe(906);

            newDateTime.addAttoseconds(-88888, false);

            expect(newDateTime.picosecond()).toBe(984);
            expect(newDateTime.femtosecond()).toBe(344);
            expect(newDateTime.attosecond()).toBe(18);

            const updatedDateTime = newDateTime.addAttoseconds(-90000000, true);

            expect(newDateTime.picosecond()).toBe(984);
            expect(newDateTime.femtosecond()).toBe(344);
            expect(newDateTime.attosecond()).toBe(18);
            expect(updatedDateTime.picosecond()).toBe(894);
            expect(updatedDateTime.femtosecond()).toBe(344);
            expect(updatedDateTime.attosecond()).toBe(018);
        });

        it('zeptoseconds works as expected', function () {
            newDateTime.addZeptoseconds(1, false);

            expect(newDateTime.attosecond()).toBe(18);
            expect(newDateTime.zeptosecond()).toBe(46);

            newDateTime.addZeptoseconds(-100, false);

            expect(newDateTime.attosecond()).toBe(17);
            expect(newDateTime.zeptosecond()).toBe(946);

            const updatedDateTime = newDateTime.addZeptoseconds(-17, true);

            expect(newDateTime.attosecond()).toBe(17);
            expect(newDateTime.zeptosecond()).toBe(946);
            expect(updatedDateTime.attosecond()).toBe(17);
            expect(updatedDateTime.zeptosecond()).toBe(929);
        });

        it('yoctoseconds works as expected', function () {
            newDateTime.addYoctoseconds(989, false);

            expect(newDateTime.zeptosecond()).toBe(947);
            expect(newDateTime.yoctosecond()).toBe(0);

            newDateTime.addYoctoseconds(-1, false);

            expect(newDateTime.zeptosecond()).toBe(946);
            expect(newDateTime.yoctosecond()).toBe(999);

            const updatedDateTime = newDateTime.addYoctoseconds(-90, true);

            expect(newDateTime.zeptosecond()).toBe(946);
            expect(newDateTime.yoctosecond()).toBe(999);
            expect(updatedDateTime.zeptosecond()).toBe(946);
            expect(updatedDateTime.yoctosecond()).toBe(909);
        });
    });

    describe('"toString" method ', function () {
        it('works as expected', function () {
            let newDateTime = new DateTime(1920, 3, 12, 8, 34, 21, 89, 19, 800, 2, 333, 18, 45, 11);
            const formatStamp = newDateTime.dateData.toString() + newDateTime.getFractionsOfSecondStamp();

            expect(Smart.Utilities.DateTime.cache).not.toBeDefined();
            expect(newDateTime.toString()).toBe('1920-03-12 08:34:21');
            expect(newDateTime.toString('FP')).toBe('1920-03-12 08:34:21:089:019:800:002:333:018:045:011');
            expect(newDateTime.toString('FT')).toBe('08:34:21:089:019:800:002:333:018:045:011');
            expect(newDateTime.toString('PP')).toBe('1920-03-12 08:34:21:089:019:800:002');
            expect(newDateTime.toString('PT')).toBe('08:34:21:089:019:800:002');
            expect(newDateTime.toString('oo:nn:ee/a')).toBe('011:800:333/18');
            expect(newDateTime.toString('fff:uu:nn')).toBe('089:019:800');

            expect(Smart.Utilities.DateTime.cache).toBeDefined();
            expect(Smart.Utilities.DateTime.cache[formatStamp + 'FP']).toBeDefined();
            expect(Smart.Utilities.DateTime.cache[formatStamp + 'FT']).toBeDefined();
            expect(Smart.Utilities.DateTime.cache[formatStamp + 'PP']).toBeDefined();
            expect(Smart.Utilities.DateTime.cache[formatStamp + 'PT']).toBeDefined();
            expect(Smart.Utilities.DateTime.cache[formatStamp + 'oo:nn:ee/a']).toBeDefined();
            expect(Smart.Utilities.DateTime.cache[formatStamp + 'fff:uu:nn']).toBeDefined();

            expect(newDateTime.toString('FP')).toBe(Smart.Utilities.DateTime.cache[formatStamp + 'FP']);

            newDateTime.addAttoseconds(33, false);
            newDateTime.addMicroseconds(313, false);
            newDateTime.addPicoseconds(-77, false);

            expect(newDateTime.toString()).toBe('1920-03-12 08:34:21');
            expect(newDateTime.toString('FP')).toBe('1920-03-12 08:34:21:089:332:799:925:333:051:045:011');
            expect(newDateTime.toString('FT')).toBe('08:34:21:089:332:799:925:333:051:045:011');
            expect(newDateTime.toString('PP')).toBe('1920-03-12 08:34:21:089:332:799:925');
            expect(newDateTime.toString('PT')).toBe('08:34:21:089:332:799:925');
            expect(newDateTime.toString('oo:nn:ee/a')).toBe('011:799:333/51');
            expect(newDateTime.toString('fff:uu:nn')).toBe('089:332:799');
        });
    });
});
