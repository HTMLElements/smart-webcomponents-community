var describe,
    it,
    expect,
    document,
    beforeAll,
    afterAll;

describe('Testing TimePicker initialization', function () {
    let timePicker1, timePicker2, timePicker3;

    jasmine.getFixtures().fixturesPath = 'base/test/smarttimepicker/fixtures';
    jasmine.getFixtures().preload('smart-time-picker.htm');
    beforeEach(function () {
        loadFixtures('smart-time-picker.htm');
        timePicker1 = document.getElementById('timePicker1');
        timePicker2 = document.getElementById('timePicker2');
        timePicker3 = document.getElementById('timePicker3');
    });

    it('from HTML tags', function () {
        expect(timePicker1).toBeInDOM();
        expect(timePicker2).toBeInDOM();
        expect(timePicker3).toBeInDOM();

        expect(timePicker1.value instanceof Date).toBe(true);
        expect(timePicker2.value instanceof Date).toBe(true);
        expect(timePicker3.value instanceof Date).toBe(true);

        expect(timePicker2.value.getHours()).toBe(20);
        expect(timePicker2.value.getMinutes()).toBe(33);
        expect(timePicker2._ampm).toBe('pm');
        expect(timePicker3.value.getHours()).toBe(1);
        expect(timePicker3.value.getMinutes()).toBe(15);

        expect(timePicker1.footer).toBe(true);
        expect(timePicker1.footerTemplate).not.toBeNull();
        expect(timePicker1.$.footer).toBeVisible();
        expect(timePicker1.$.footer.innerHTML.trim()).toBe('Sample template');
        expect(timePicker1.format).toBe('12-hour');
        expect(timePicker1.minuteInterval).toBe(10);
        expect(timePicker1.interval).toBe(1);
        expect(timePicker1.selection).toBe('hour');
        expect(timePicker1.view).toBe('portrait');

        expect(timePicker2.footer).toBe(false);
        expect(timePicker2.footerTemplate).toBeNull();
        expect(timePicker2.$.footer).not.toBeVisible();
        expect(timePicker2.$.footer.innerHTML.trim()).toBe('');
        expect(timePicker2.format).toBe('12-hour');
        expect(timePicker2.minuteInterval).toBe(5);
        expect(timePicker2.interval).toBe(5);
        expect(timePicker2.selection).toBe('minute');
        expect(timePicker2.view).toBe('landscape');

        expect(timePicker3.footer).toBe(false);
        expect(timePicker3.footerTemplate).toBeNull();
        expect(timePicker3.$.footer).not.toBeVisible();
        expect(timePicker3.$.footer.innerHTML.trim()).toBe('');
        expect(timePicker3.format).toBe('24-hour');
        expect(timePicker3.minuteInterval).toBe(1);
        expect(timePicker3.interval).toBe(1);
        expect(timePicker3.selection).toBe('hour');
        expect(timePicker3.view).toBe('portrait');
    });
});

describe('Testing TimePicker', function () {
    it('dynamic creation', function () {
        const timePicker4 = document.createElement('smart-time-picker'),
            template = document.createElement('template');

        template.innerHTML = 'ABCD';

        document.body.appendChild(template);

        timePicker4.value = new Date(2017, 0, 1, 0, 22);
        timePicker4.footer = true;
        timePicker4.footerTemplate = template;

        document.body.appendChild(timePicker4);

        expect(timePicker4).toBeInDOM();

        expect(timePicker4.value instanceof Date).toBe(true);
        expect(timePicker4.value.getHours()).toBe(0);
        expect(timePicker4.value.getMinutes()).toBe(22);
        expect(timePicker4.footer).toBe(true);
        expect(timePicker4.footerTemplate).not.toBeNull();
        expect(timePicker4.$.footer).toBeVisible();
        expect(timePicker4.$.footer.innerHTML.trim()).toBe('ABCD');
        expect(timePicker4.format).toBe('12-hour');
        expect(timePicker4.minuteInterval).toBe(1);
        expect(timePicker4.interval).toBe(1);
        expect(timePicker4.selection).toBe('hour');
        expect(timePicker4.view).toBe('portrait');

        document.body.removeChild(template);
        document.body.removeChild(timePicker4);

        expect(timePicker4).not.toBeInDOM();
    });
});
