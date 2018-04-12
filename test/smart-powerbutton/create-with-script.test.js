var describe,
    it,
    expect,
    document,
    beforeAll,
    afterAll;
describe('Testing smart-power-button create-with-script', function () {
    'use strict';
    let powerButton;
    beforeAll(function () {
        powerButton = document.createElement('smart-power-button');
        powerButton.rightToLeft = true;
        document.body.appendChild(powerButton);
    });

    afterAll(function () {
        document.body.removeChild(document.querySelector('smart-power-button'));
    });

    describe('if it ', function () {
        it('exists in DOM', function () {
            expect(powerButton).toBeInDOM();
        });
    });
    describe('if the classes are properly added when', function () {
        it('the widget is created', function () {
            expect(powerButton.firstChild).toHaveClass('smart-container');
        });
    });
    describe('if the properties are set to their default values', function () {
        it('checked is set to false', function () {
            expect(powerButton.checked).toBe(false);
        });
    });
    describe(' if it\'s possible to dynamically set the property', function () {
        it('disabled to "true"', function () {
            powerButton.disabled = true;
            expect(powerButton).toHaveAttr('disabled');
        });
        it('checked to "true"', function () {
            powerButton.checked = true;
            expect(powerButton.checked).toBe(true);
        });
        it('value to "ON"', function () {
            powerButton.value = 'ON';
            expect(powerButton.value).toEqual('ON');
        });
        it('name to "PowerButton1"', function () {
            powerButton.name = 'PowerButton1';
            expect(powerButton.name).toEqual('PowerButton1');
        });
        it('clickMode to "hover"', function () {
            powerButton.clickMode = 'hover';
            expect(powerButton.clickMode).toEqual('hover');
        });
    });
    describe('if it\'s possible to dynamically(using setProperty()) set the property', function () {
        it('disabled to "false"', function () {
            powerButton.removeAttribute('disabled');
            expect(powerButton.disabled).toBe(false);
            expect(powerButton).not.toHaveAttr('disabled');
        });
        it('value to "OFF"', function () {
            powerButton.setAttribute('value', 'OFF');
            expect(powerButton.value).toEqual('OFF');
            expect(powerButton).toHaveAttr('value', 'OFF');
        });
        it('name to "PowerButton2"', function () {
            powerButton.setAttribute('name', 'PowerButton2');
            expect(powerButton.name).toEqual('PowerButton2');
            expect(powerButton).toHaveAttr('name', 'PowerButton2');
        });
        it('clickMode to "press"', function () {
            powerButton.setAttribute('click-mode', 'press');
            expect(powerButton.clickMode).toEqual('press');
            expect(powerButton).toHaveAttr('click-mode', 'press');
        });
    });
});
