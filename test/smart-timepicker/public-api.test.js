var describe,
    it,
    expect,
    document,
    beforeAll,
    afterAll;

describe('Testing public API of TimePicker - ', function () {
    let timePicker1, timePicker2, timePicker3;

    jasmine.getFixtures().fixturesPath = 'base/test/smarttimepicker/fixtures';
    jasmine.getFixtures().preload('smart-time-picker.htm');
    beforeEach(function () {
        loadFixtures('smart-time-picker.htm');
        timePicker1 = document.getElementById('timePicker1');
        timePicker2 = document.getElementById('timePicker2');
        timePicker3 = document.getElementById('timePicker3');
    });

    it('methods "setHours" and "setMinutes"', function () {
        timePicker1.setHours(5);
        timePicker1.setMinutes(60);

        expect(timePicker1.value.getHours()).toBe(5);
        expect(timePicker1.value.getMinutes()).toBe(0);
        expect(timePicker1._ampm).toBe('am');
        expect(timePicker1.$.amContainer).toHaveClass('smart-selected');
        expect(timePicker1.$.pmContainer).not.toHaveClass('smart-selected');
        expect(timePicker1.$.hourContainer.innerHTML).toBe('5');
        expect(timePicker1.$.minuteContainer.innerHTML).toBe(':00');

        timePicker1.setHours(24);
        timePicker1.setMinutes(3);

        expect(timePicker1.value.getHours()).toBe(0);
        expect(timePicker1.value.getMinutes()).toBe(3);
        expect(timePicker1._ampm).toBe('am');
        expect(timePicker1.$.amContainer).toHaveClass('smart-selected');
        expect(timePicker1.$.pmContainer).not.toHaveClass('smart-selected');
        expect(timePicker1.$.hourContainer.innerHTML).toBe('12');
        expect(timePicker1.$.minuteContainer.innerHTML).toBe(':03');

        timePicker1.setHours(16);
        timePicker1.setMinutes(34);

        expect(timePicker1.value.getHours()).toBe(16);
        expect(timePicker1.value.getMinutes()).toBe(34);
        expect(timePicker1._ampm).toBe('pm');
        expect(timePicker1.$.amContainer).not.toHaveClass('smart-selected');
        expect(timePicker1.$.pmContainer).toHaveClass('smart-selected');
        expect(timePicker1.$.hourContainer.innerHTML).toBe('4');
        expect(timePicker1.$.minuteContainer.innerHTML).toBe(':34');

        timePicker2.setHours(18);
        timePicker2.setMinutes(43);

        expect(timePicker2.value.getHours()).toBe(18);
        expect(timePicker2.value.getMinutes()).toBe(43);
        expect(timePicker2._ampm).toBe('pm');
        expect(timePicker2.$.amContainer).not.toHaveClass('smart-selected');
        expect(timePicker2.$.pmContainer).toHaveClass('smart-selected');
        expect(timePicker2.$.hourContainer.innerHTML).toBe('6');
        expect(timePicker2.$.minuteContainer.innerHTML).toBe(':43');

        timePicker3.setHours(12);
        timePicker3.setMinutes(5);

        expect(timePicker3.value.getHours()).toBe(12);
        expect(timePicker3.value.getMinutes()).toBe(5);
        expect(timePicker3._am).toBeUndefined();
        expect(timePicker3.$.amContainer).not.toBeVisible();
        expect(timePicker3.$.pmContainer).not.toBeVisible();
        expect(timePicker3.$.hourContainer.innerHTML).toBe('12');
        expect(timePicker3.$.minuteContainer.innerHTML).toBe(':05');

        timePicker3.setHours(19);
        timePicker3.setMinutes(45);

        expect(timePicker3.value.getHours()).toBe(19);
        expect(timePicker3.value.getMinutes()).toBe(45);
        expect(timePicker3._am).toBeUndefined();
        expect(timePicker3.$.amContainer).not.toBeVisible();
        expect(timePicker3.$.pmContainer).not.toBeVisible();
        expect(timePicker3.$.hourContainer.innerHTML).toBe('19');
        expect(timePicker3.$.minuteContainer.innerHTML).toBe(':45');
    });

    it('"footer"/"view"/"footerTemplate" propertyChangedHandlers', function () {
        timePicker1.footer = false;

        expect(timePicker1.$.footer).not.toBeVisible();

        timePicker1.footer = true;

        expect(timePicker1.$.footer).toBeVisible();

        timePicker1.view = 'landscape';

        expect(timePicker1.$.header.offsetLeft).toBeLessThan(timePicker1.$.main.offsetLeft);

        timePicker1.view = 'portrait';

        expect(timePicker1.$.header.offsetLeft).toBe(timePicker1.$.main.offsetLeft);

        timePicker1.footerTemplate = 'fakeTemplate';

        expect(timePicker1.footerTemplate).toBeNull();
        expect(timePicker1.$.footer.innerHTML).toBe('');

        timePicker1.footerTemplate = 'fakeTemplate';

        expect(timePicker1.footerTemplate).toBeNull();
        expect(timePicker1.$.footer.innerHTML).toBe('');

        timePicker1.footerTemplate = 'timePicker1Template';

        expect(timePicker1.footerTemplate).not.toBeNull();
        expect(timePicker1.$.footer.innerHTML.trim()).toBe('Sample template');
    });

    it('"format" propertyChangedHandler', function () {
        timePicker1.setHours(19);
        timePicker1.format = '24-hour';

        expect(timePicker1.$.hourContainer.innerHTML).toBe('19');

        timePicker1.format = '12-hour';

        expect(timePicker1.$.hourContainer.innerHTML).toBe('7');

        timePicker1.format = '24-hour';
        timePicker1.setHours(0);

        expect(timePicker1.$.hourContainer.innerHTML).toBe('0');

        timePicker1.format = '12-hour';

        expect(timePicker1.$.hourContainer.innerHTML).toBe('12');
    });

    it('"minuteInterval" propertyChangedHandler', function () {
        timePicker1.minuteInterval = 10;

        expect(timePicker1.minuteInterval).toBe(10);
        expect(timePicker1.interval).toBe(1);

        timePicker2.minuteInterval = 80;

        expect(timePicker2.minuteInterval).toBe(60);
        expect(timePicker2.interval).toBe(60);
    });

    it('"selection" propertyChangedHandler', function () {
        timePicker1.selection = 'minute';

        expect(timePicker1.$.hourContainer).not.toHaveClass('smart-selected');
        expect(timePicker1.$.minuteContainer).toHaveClass('smart-selected');

        timePicker2.selection = 'hour';

        expect(timePicker2.$.hourContainer).toHaveClass('smart-selected');
        expect(timePicker2.$.minuteContainer).not.toHaveClass('smart-selected');
    });

    it('"value" propertyChangedHandler', function () {
        timePicker1.value = new Date(2017, 0, 1, 12, 33);

        expect(timePicker1.value instanceof Date).toBe(true);
        expect(timePicker1.value.getHours()).toBe(12);
        expect(timePicker1.value.getMinutes()).toBe(33);

        timePicker1.value = {};

        expect(timePicker1.value instanceof Date).toBe(true);
        expect(timePicker1.value.getHours()).toBe(12);
        expect(timePicker1.value.getMinutes()).toBe(33);

        timePicker1.value = 'new Date()';

        expect(timePicker1.value instanceof Date).toBe(true);
        expect(timePicker1.value.getHours()).toBe((new Date()).getHours());
    });
});
