var describe,
    jasmine,
    beforeEach,
    loadFixtures,
    it,
    expect,
    document;
describe('Testing smartButton attributes-synchronization', function () {
    'use strict';
    let button;
    jasmine.getFixtures().fixturesPath = 'base/test/smart-button/fixtures';
    jasmine.getFixtures().preload('smart-button-attributes-synchronization.htm');
    beforeEach(function () {
        loadFixtures('smart-button-attributes-synchronization.htm');
        button = document.querySelector('smart-button');
    });
    describe('if it ', function () {
        it('exists in DOM', function () {
            expect(document.querySelector('smart-button')).toBeInDOM();
        });
    });
    describe('if the classes are properly added when', function () {
        it('the widget is created', function () {
            expect(button.firstChild).toHaveClass('smart-button');
        });
    });
    describe('if the property', function () {
        it('value is set', function () {
            expect(button.value).toBeUndefined();
        });
    });
    describe(' if it\'s possible to dynamically set the property', function () {
        it('disabled to "true"', function () {
            button.disabled = true;
            expect(button.firstChild).toHaveAttr('disabled');
        });
        it('value to "myButton"', function () {
            button.value = 'myButton';
            expect(button.value).toEqual('myButton');
        });
        it('rightToLeft to "true"', function () {
            button.rightToLeft = true;
            expect(button).toHaveAttr('right-to-left');
        });
    });
    describe('if it\'s possible to dynamically(using setProperty()) set the property', function () {
        it('disabled to "true"', function () {
            button.setAttribute('disabled', true);
            expect(button.disabled).toBe(true);
            expect(button.firstChild).toHaveAttr('disabled');
        });
        it('innerHTML to "myButton"', function () {
            button.setAttribute('inner-h-t-m-l', 'myButton');
            expect(button.innerHTML).toEqual('myButton');
            expect(button.firstChild.innerHTML).toEqual('myButton');
        });
        it('rightToLeft to "true"', function () {
            button.setAttribute('right-to-left', 'true');
            expect(button).toHaveAttr('right-to-left', 'true');
        });
    });
});
