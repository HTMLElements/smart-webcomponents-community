var describe,
    it,
    expect,
    document,
    beforeAll,
    afterAll;
describe('Testing smartRepeatButton create-with-script', function () {
    'use strict';
    let repeatButton;
    beforeAll(function () {
        repeatButton = document.createElement('smart-repeat-button');
        repeatButton.innerHTML = 'Click Me';
        document.body.appendChild(repeatButton);
    });

    afterAll(function () {
        document.body.removeChild(document.querySelector('smart-repeat-button'));
    });

    describe('if it ', function () {
        it('exists in DOM', function () {
            expect(document.querySelector('smart-repeat-button')).toBeInDOM();
        });
    });
    describe('if the property', function () {
        it('delay is set to it\'s default value 50', function () {
            expect(repeatButton.delay).toBe(50);
        });
        it('innerHTML is set to it\'s default value 50', function () {
            expect(repeatButton.firstChild.innerHTML).toEqual('Click Me');
        });
        it('initialDelay is set to it\'s default value 150', function () {
            expect(repeatButton.initialDelay).toBe(150);
        });
    });
    describe(' if it\'s possible to dynamically set the property', function () {
        it('disabled to "true"', function () {
            repeatButton.disabled = true;
            expect(repeatButton.firstChild).toHaveAttr('disabled');
        });
        it('value to "myButton"', function () {
            repeatButton.value = 'myButton';
            expect(repeatButton.value).toEqual('myButton');
        });
        it('delay to "myButton"', function () {
            repeatButton.delay = 100;
            expect(repeatButton.delay).toBe(100);
        });
        it('initialDelay to "myButton"', function () {
            repeatButton.initialDelay = 250;
            expect(repeatButton.initialDelay).toBe(250);
        });
        it('rightToLeft to "true"', function () {
            repeatButton.rightToLeft = true;
            expect(repeatButton).toHaveAttr('right-to-left');
        });
    });
    describe('if it\'s possible to dynamically(using setProperty()) set the property', function () {
        it('disabled to "true"', function () {
            repeatButton.setAttribute('disabled', true);
            expect(repeatButton.disabled).toBe(true);
            expect(repeatButton.firstChild).toHaveAttr('disabled');
        });
        it('value to "myButton"', function () {
            repeatButton.setAttribute('value', 'myButton');
            expect(repeatButton.value).toEqual('myButton');
        });
        it('delay to 100', function () {
            repeatButton.setAttribute('delay', 100);
            expect(repeatButton.delay).toBe(100);
        });
        it('initialDelay to 250', function () {
            repeatButton.setAttribute('initial-delay', 250);
            expect(repeatButton.initialDelay).toBe(250);
        });
        it('rightToLeft to "true"', function () {
            repeatButton.setAttribute('right-to-left', 'true');
            expect(repeatButton).toHaveAttr('right-to-left', 'true');
        });
    });
});
