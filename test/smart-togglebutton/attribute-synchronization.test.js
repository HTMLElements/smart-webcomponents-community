var describe,
    jasmine,
    beforeEach,
    loadFixtures,
    it,
    expect,
    document;
describe('Testing smartToggleButton attributes-synchronization fixture', function () {
    'use strict';
    let toggleButton;
    jasmine.getFixtures().fixturesPath = 'base/test/smarttogglebutton/fixtures';
    jasmine.getFixtures().preload('smart-toggle-button-attributes-synchronization.htm');
    beforeEach(function () {
        loadFixtures('smart-toggle-button-attributes-synchronization.htm');
        toggleButton = document.querySelector('smart-toggle-button');
    });
    describe('if it ', function () {
        it('exists in DOM', function () {
            expect(document.querySelector('smart-toggle-button')).toBeInDOM();
        });
    });
    describe('if the properties are set to their default values', function () {
        it('checked is set to false', function () {
            expect(toggleButton.checked).toBe(false);
        });
        it('value is set to undefined', function () {
            expect(toggleButton.value).toBeUndefined();
        });
        it('name is set to undefined', function () {
            expect(toggleButton.name).toBeUndefined();
        });
        it('type is set to undefined', function () {
            expect(toggleButton.type).toBeUndefined();
        });
        it('clickMode is set to "release"', function () {
            expect(toggleButton.clickMode).toEqual('release');
        });
    });
    describe(' if it\'s possible to dynamically set the property', function () {
        it('disabled to "true"', function () {
            toggleButton.disabled = true;
            expect(toggleButton.disabled).toBe(true);
        });
        it('checked to false', function () {
            expect(toggleButton.checked).toBe(false);
        });
        it('value to "On"', function () {
            toggleButton.value = 'On';
            expect(toggleButton.value).toEqual('On');
        });
        it('name to "toggleButton"', function () {
            toggleButton.name = 'toogleButton1'
            expect(toggleButton.name).toEqual('toogleButton1');
        });
        it('type to "Submit"', function () {
            toggleButton.type = 'Submit';
            expect(toggleButton.type).toEqual('Submit');
        });
        it('clickMode to "hover"', function () {
            toggleButton.clickMode = 'hover';
            expect(toggleButton.clickMode).toEqual('hover');
        });
        it('rightToLeft to "true"', function () {
            toggleButton.rightToLeft = true;
            expect(toggleButton.rightToLeft).toBe(true);
        });
    });
    describe('if it\'s possible to dynamically(using setProperty()) set the property', function () {
        it('disabled to "true"', function () {
            toggleButton.setAttribute('disabled', true);
            expect(toggleButton.disabled).toBe(true);
            expect(toggleButton).toHaveAttr('disabled');
        });
        it('checked to true', function () {
            toggleButton.setAttribute('checked', true);
            expect(toggleButton.checked).toBe(true);
            expect(toggleButton).toHaveAttr('checked');
        });
        it('value to "On"', function () {
            toggleButton.value = 'On';
            expect(toggleButton.value).toEqual('On');
            expect(toggleButton).toHaveAttr('value', 'On');
        });
        it('type to "Submit"', function () {
            toggleButton.setAttribute('type','Submit');
            expect(toggleButton.type).toEqual('Submit');
            expect(toggleButton).toHaveAttr('type', 'Submit');
        });
        it('clickMode to "hover"', function () {
            toggleButton.setAttribute('click-mode', 'release');
            expect(toggleButton.clickMode).toEqual('release');
            expect(toggleButton).toHaveAttr('click-mode', 'release');
        });
        it('rightToLeft to "true"', function () {
            toggleButton.setAttribute('right-to-left', 'true');
            expect(toggleButton).toHaveAttr('right-to-left', 'true');
        });
        it('name to "ToggleButton"', function () {
            toggleButton.name = 'ToggleButton';
            expect(toggleButton.name).toEqual('ToggleButton');
            expect(toggleButton).toHaveAttr('name', 'ToggleButton');
        });
    });
});
