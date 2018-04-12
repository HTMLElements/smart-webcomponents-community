var describe,
    jasmine,
    beforeEach,
    loadFixtures,
    it,
    expect,
    document;
describe('Testing smart-power-button from fixture', function () {
    'use strict';
    let powerButton;
    jasmine.getFixtures().fixturesPath = 'base/test/smart-powerbutton/fixtures';
    jasmine.getFixtures().preload('smart-power-button-attributes-synchronization.htm');
    beforeEach(function () {
        loadFixtures('smart-power-button-attributes-synchronization.htm');
        powerButton = document.querySelector('smart-power-button');
    });
    describe('if it ', function () {
        it('exists in DOM', function () {
            expect(document.querySelector('smart-power-button')).toBeInDOM();
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
            expect(powerButton).toHaveAttr('checked');
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
        it('disabled to "true"', function () {
            powerButton.setAttribute('disabled', true);
            expect(powerButton.disabled).toBe(true);
            expect(powerButton).toHaveAttr('disabled');
        });
        it('checked to "true"', function () {
            powerButton.checked = true;
            expect(powerButton).toHaveAttr('checked');
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
});
