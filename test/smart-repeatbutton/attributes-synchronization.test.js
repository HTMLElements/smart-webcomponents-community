var describe,
    jasmine,
    beforeEach,
    loadFixtures,
    it,
    expect,
    document;
describe('Testing smartRepeatButton attributes-synchronization', function () {
    'use strict';
    let repeatButton;
    jasmine.getFixtures().fixturesPath = 'base/test/smart-repeatbutton/fixtures';
    jasmine.getFixtures().preload('smart-repeat-button-attributes-synchronization.htm');
    beforeEach(function () {
        loadFixtures('smart-repeat-button-attributes-synchronization.htm');
        repeatButton = document.querySelector('smart-repeat-button');
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
