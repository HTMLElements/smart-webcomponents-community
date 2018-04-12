var describe,
    jasmine,
    beforeEach,
    loadFixtures,
    it,
    expect,
    document;
describe('Testing smart-text-area loaded from fixture', function () {
    'use strict';
    let multilineTextBox;
    jasmine.getFixtures().fixturesPath = 'base/test/smartpasswordtextbox/fixtures';
    jasmine.getFixtures().preload('smart-password-text-box-attributes-synchronization.htm');
    beforeEach(function () {
        loadFixtures('smart-password-text-box-attributes-synchronization.htm');
        multilineTextBox = document.querySelectorAll('smart-password-text-box')[0];
    });
    describe('if it ', function () {
        it('exists in DOM', function () {
            expect(document.querySelectorAll('smart-password-text-box')[0]).toBeInDOM();
            expect(document.querySelectorAll('smart-password-text-box')[1]).toBeInDOM();
        });
    });

    function checkPropertyDefaults(property, newValue) {
        it(' - ' + property.name, function () {
            if (property.value !== null) {
                expect(typeof multilineTextBox[property.name]).toBe(property.type === 'array' ? 'object' : property.type);
            }

            if (property.type === 'boolean' || property.type === 'number') {
                expect(multilineTextBox[property.name]).toBe(property.value);
            }
            else {
                expect(multilineTextBox[property.name]).toEqual(property.value);
            }
        });
    }

    var properties = [
        { name: 'autoFocus', value: false, type: 'boolean' },
        { name: 'form', value: '', type: 'string' },
        { name: 'localization', value: null, type: 'object' },
        { name: 'maxLength', value: null, type: 'number' },
        { name: 'minLength', value: 2, type: 'number' },
        { name: 'name', value: '', type: 'string' },
        { name: 'passwordStrength', value: null, type: 'function' },
        { name: 'placeholder', value: '', type: 'string' },
        { name: 'required', value: false, type: 'boolean' },
        { name: 'selectAllOnFocus', value: false, type: 'boolean' },
        { name: 'showPasswordIcon', value: false, type: 'boolean' },
        { name: 'showPasswordStrength', value: false, type: 'boolean' },
        { name: 'tooltipArrow', value: false, type: 'boolean' },
        { name: 'tooltipDelay', value: 0, type: 'number' },
        { name: 'tooltipPosition', value: 'top', type: 'string' },
        { name: 'tooltipTemplate', value: null, type: 'string' },
        { name: 'value', value: '', type: 'string' }
    ];

    describe('expect default values on text area', function () {
        for (var p = 0; p < properties.length; p++) {
            checkPropertyDefaults(properties[p]);
        }
    });
});
