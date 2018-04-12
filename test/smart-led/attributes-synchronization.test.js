var describe,
    jasmine,
    beforeEach,
    loadFixtures,
    it,
    expect,
    document;
describe('Testing smart-led from fixture', function () {
    'use strict';
    let LED;
    jasmine.getFixtures().fixturesPath = 'base/test/smart-led/fixtures';
    jasmine.getFixtures().preload('smart-led-attributes-synchronization.htm');
    beforeEach(function () {
        loadFixtures('smart-led-attributes-synchronization.htm');
        LED = document.querySelector('smart-led');
    });
    describe('if it ', function () {
        it('exists in DOM', function () {
            expect(document.querySelector('smart-led')).toBeInDOM();
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
        it('checked to "true"', function () {
            LED.checked = true;
            expect(LED).toHaveAttr('checked');
        });
    });
    describe('if it\'s possible to dynamically(using setProperty()) set the property', function () {
        it('disabled to "true"', function () {
            LED.setAttribute('disabled', true);
            expect(LED.disabled).toBe(true);
            expect(LED).toHaveAttr('disabled');
        });
        it('indeterminate to "true"', function () {
            LED.indeterminate = true;
            expect(LED.indeterminate).toBe(true);
            expect(LED).toHaveAttr('indeterminate');
        });
        it('trueContent to "ON"', function () {
            LED.trueContent = 'ON';
            expect(LED.trueContent).toEqual('ON');
        });
        it('falseContent to "OFF"', function () {
            LED.falseContent = 'OFF';
            expect(LED.falseContent).toEqual('OFF');
        });
        it('indeterminateContent to "---"', function () {
            LED.indeterminateContent = '---';
            expect(LED.indeterminateContent).toEqual('---');
        });
    });
    describe('to change dynamicaly check states', function () {
        it('checked to "true"', function () {
            LED.checked = true;
            expect(LED.getAttribute("checked")).toBe('');
        });
        it('checked from "true" to "null"', function () {
            LED.checked = true;
            LED.checked = null;
            expect(LED.getAttribute("checked")).toBe('null');
        });
        it('checked from "null" to "true"', function () {
            LED.checked = null;
            LED.checked = true;
            expect(LED.getAttribute("checked")).toBe('');
        });
        it('checked from "true" to "false"', function () {
            LED.checked = true;
            LED.checked = false;
            expect(LED.getAttribute("checked")).toBe(null);
        });
        it('checked from "false" to "null"', function () {
            LED.checked = false;
            LED.checked = null;
            expect(LED.getAttribute("checked")).toBe('null');
        });
        it('checked from "null" to "false"', function () {
            LED.checked = null;
            LED.checked = false;
            expect(LED.getAttribute("checked")).toBe(null);
        });
    });
});
