var describe,
    jasmine,
    beforeEach,
    loadFixtures,
    it,
    expect,
    document;
describe('Testing smart-switch-button from fixture', function () {
    'use strict';
    let switchButton;
    jasmine.getFixtures().fixturesPath = 'base/test/smartswitchbutton/fixtures';
    jasmine.getFixtures().preload('smart-switch-button-attributes-synchronization.htm');
    beforeEach(function () {
        loadFixtures('smart-switch-button-attributes-synchronization.htm');
        switchButton = document.querySelector('smart-switch-button');
    });
    describe('if it ', function () {
        it('exists in DOM', function () {
            expect(document.querySelector('smart-switch-button')).toBeInDOM();
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
        it('checked to "true"', function () {
            switchButton.checked = true;
            expect(switchButton).toHaveAttr('checked');
        });
        it('indeterminate to "true"', function () {
            switchButton.indeterminate = true;
            expect(switchButton.indeterminate).toBe(true);
            expect(switchButton).toHaveAttr('indeterminate');
        });
        it('trueContent to "ON"', function () {
            switchButton.trueContent = 'ON';
            expect(switchButton.trueContent).toEqual('ON');
        });
        it('falseContent to "OFF"', function () {
            switchButton.falseContent = 'OFF';
            expect(switchButton.falseContent).toEqual('OFF');
        });
    });
    describe('if it\'s possible to dynamically(using setProperty()) set the property', function () {
        it('disabled to "true"', function () {
            switchButton.setAttribute('disabled', true);
            expect(switchButton.disabled).toBe(true);
            expect(switchButton).toHaveAttr('disabled');
        });
    });
    describe('to change dynamicaly check states', function () {
        it('checked to "true"', function () {
            switchButton.checked = true;
            expect(switchButton).toHaveAttr('checked');
        });
        it('checked from "true" to "null"', function () {
            switchButton.checked = true;
            switchButton.checked = null;
            expect(switchButton.getAttribute('checked')).toBe('null');
        });
        it('checked from "null" to "true"', function () {
            switchButton.checked = null;
            switchButton.checked = true;
            expect(switchButton).toHaveAttr('checked');
        });
        it('checked from "true" to "false"', function () {
            switchButton.checked = true;
            switchButton.checked = false;
            expect(switchButton).not.toHaveAttr('checked');
        });
        it('checked from "false" to "null"', function () {
            switchButton.checked = false;
            switchButton.checked = null;
            expect(switchButton.getAttribute("checked")).toBe('null');
        });
        it('checked from "null" to "false"', function () {
            switchButton.checked = null;
            switchButton.checked = false;
            expect(switchButton).not.toHaveAttr('checked');
        });
    });
});
