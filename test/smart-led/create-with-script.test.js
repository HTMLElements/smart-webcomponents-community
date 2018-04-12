var describe,
    it,
    expect,
    document,
    beforeAll,
    afterAll;
describe('Testing smart-led create-with-script', function () {
    'use strict';
    let LED;
    beforeAll(function () {
        LED = document.createElement('smart-led');
        LED.rightToLeft = true;
        document.body.appendChild(LED);
    });

    afterAll(function () {
        document.body.removeChild(document.querySelector('smart-led'));
    });

    describe('if it ', function () {
        it('exists in DOM', function () {
            expect(LED).toBeInDOM();
        });
    });
    describe('if the classes are properly added when', function () {
        it('the widget is created', function () {
            expect(LED.firstChild).toHaveClass('smart-container');
        });
    });
    describe('if the properties are set to their default values', function () {
        it('checked is set to false', function () {
            expect(LED.checked).toBe(false);
        });
    });
    describe(' if it\'s possible to dynamically set the property', function () {
        it('disabled to "true"', function () {
            LED.disabled = true;
            expect(LED).toHaveAttr('disabled');
        });
    });
    describe('if it\'s possible to dynamically(using setProperty()) set the property', function () {
        it('disabled to "true"', function () {
            LED.setAttribute('disabled', true);
            expect(LED.disabled).toBe(true);
            expect(LED).toHaveAttr('disabled');
        });
    });
});
