var describe,
    it,
    expect,
    document,
    beforeAll,
    afterAll;
describe('Testing smart-switch-button create-with-script', function () {
    'use strict';
    let switchButton;
    beforeAll(function () {
        switchButton = document.createElement('smart-switch-button');
        switchButton.rightToLeft = true;
        document.body.appendChild(switchButton);
    });

    afterAll(function () {
        document.body.removeChild(document.querySelector('smart-switch-button'));
    });

    describe('if it ', function () {
        it('exists in DOM', function () {
            expect(switchButton).toBeInDOM();
        });
    });
    describe('if the classes are properly added when', function () {
        it('the widget is created', function () {
            expect(switchButton.firstChild).toHaveClass('smart-container');
        });
    });
    describe('if the properties are set to their default values', function () {
        it('checked is set to false', function () {
            expect(switchButton.checked).toBe(false);
        });
    });
    describe(' if it\'s possible to dynamically set the property', function () {
        it('disabled to "true"', function () {
            switchButton.disabled = true;
            expect(switchButton).toHaveAttr('disabled');
        });
    });
    describe('if it\'s possible to dynamically(using setProperty()) set the property', function () {
        it('disabled to "true"', function () {
            switchButton.setAttribute('disabled', true);
            expect(switchButton.disabled).toBe(true);
            expect(switchButton).toHaveAttr('disabled');
        });
    });
});
