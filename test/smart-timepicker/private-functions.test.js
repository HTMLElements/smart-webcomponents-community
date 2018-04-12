var describe,
    it,
    expect,
    document,
    beforeAll,
    afterAll;

describe('Testing private functions of TimePicker - ', function () {
    let timePicker1, timePicker2, timePicker3;

    jasmine.getFixtures().fixturesPath = 'base/test/smarttimepicker/fixtures';
    jasmine.getFixtures().preload('smart-time-picker.htm');
    beforeEach(function () {
        loadFixtures('smart-time-picker.htm');
        timePicker1 = document.getElementById('timePicker1');
        timePicker2 = document.getElementById('timePicker2');
        timePicker3 = document.getElementById('timePicker3');
    });

    it('"_pickerDownHandler"', function () {
        timePicker1.setHours(0);
        timePicker1.setMinutes(0);

        timePicker1._pickerDownHandler({ pageX: 40, pageY: 265, buttons: 2 });

        expect(timePicker1.value.getHours()).toBe(0);

        timePicker1._pickerDownHandler({ pageX: 40, pageY: 265, buttons: 1, which: 1 });

        expect(timePicker1.value.getHours()).toBe(9);

        timePicker1._pickerDownHandler({ pageX: 160, pageY: 150, buttons: 1, which: 1 });

        expect(timePicker1.value.getHours()).toBe(0);

        timePicker1.format = '24-hour';

        timePicker1._pickerDownHandler({ pageX: 125, pageY: 330, buttons: 1, which: 1 });

        expect(timePicker1.value.getHours()).toBe(19);

        timePicker1._pickerDownHandler({ pageX: 60, pageY: 210, buttons: 1, which: 1 });

        expect(timePicker1.value.getHours()).toBe(10);

        timePicker1._pickerDownHandler({ pageX: 160, pageY: 225, buttons: 1, which: 1 });

        expect(timePicker1.value.getHours()).toBe(0);

        timePicker1._pickerDownHandler({ pageX: 160, pageY: 150, buttons: 1, which: 1 });

        expect(timePicker1.value.getHours()).toBe(12);

        timePicker1.selection = 'minute';

        timePicker1._pickerDownHandler({ pageX: 40, pageY: 250, buttons: 1, which: 1 });

        expect(timePicker1.value.getMinutes()).toBe(50);

        timePicker1._pickerDownHandler({ pageX: 160, pageY: 380, buttons: 1, which: 1 });

        expect(timePicker1.value.getMinutes()).toBe(30);

        timePicker1._pickerDownHandler({ pageX: 120, pageY: 150, buttons: 1, which: 1 });

        expect(timePicker1.value.getMinutes()).toBe(0);

        timePicker1._pickerDownHandler({ pageX: 250, pageY: 205, buttons: 1, which: 1 });

        expect(timePicker1.value.getMinutes()).toBe(10);

        timePicker1._pickerDownHandler({ pageX: 180, pageY: 215, buttons: 1, which: 1 });

        expect(timePicker1.value.getMinutes()).toBe(0);

        timePicker1.disabled = true;
        timePicker1._pickerDownHandler({ pageX: 160, pageY: 380, buttons: 1, which: 1 });

        expect(timePicker1.value.getMinutes()).toBe(0);

        timePicker1.disabled = false;
        timePicker1._pickerDownHandler({ pageX: 160, pageY: 380, buttons: 1, which: 1 });

        expect(timePicker1.value.getMinutes()).toBe(30);
    });

    it('"_headerClickHandler"', function () {
        timePicker2._headerClickHandler({ target: timePicker2.$.hourContainer });

        expect(timePicker2.selection).toBe('hour');
        expect(timePicker2.$.hourContainer).toHaveClass('smart-selected');
        expect(timePicker2.$.minuteContainer).not.toHaveClass('smart-selected');

        timePicker2._headerClickHandler({ target: timePicker2.$.minuteContainer });

        expect(timePicker2.selection).toBe('minute');
        expect(timePicker2.$.minuteContainer).toHaveClass('smart-selected');
        expect(timePicker2.$.hourContainer).not.toHaveClass('smart-selected');

        expect(timePicker2.value.getHours()).toBe(20);

        timePicker2._headerClickHandler({ target: timePicker2.$.amContainer });

        expect(timePicker2.value.getHours()).toBe(8);
        expect(timePicker2.$.amContainer).toHaveClass('smart-selected');
        expect(timePicker2.$.pmContainer).not.toHaveClass('smart-selected');

        timePicker2._headerClickHandler({ target: timePicker2.$.pmContainer });

        expect(timePicker2.value.getHours()).toBe(20);
        expect(timePicker2.$.pmContainer).toHaveClass('smart-selected');
        expect(timePicker2.$.amContainer).not.toHaveClass('smart-selected');

        timePicker2.readonly = true;
        timePicker2._headerClickHandler({ target: timePicker2.$.amContainer });

        expect(timePicker2.value.getHours()).toBe(20);
        expect(timePicker2.$.pmContainer).toHaveClass('smart-selected');
        expect(timePicker2.$.amContainer).not.toHaveClass('smart-selected');

        timePicker2.readonly = false;
        timePicker2._headerClickHandler({ target: timePicker2.$.amContainer });

        expect(timePicker2.value.getHours()).toBe(8);
        expect(timePicker2.$.amContainer).toHaveClass('smart-selected');
        expect(timePicker2.$.pmContainer).not.toHaveClass('smart-selected');
    });
});
