var describe,
    jasmine,
    beforeEach,
    loadFixtures,
    it,
    expect,
    document;
describe('Testing smart-text-box loaded from fixture', function () {
    'use strict';
    let textBox;
    jasmine.getFixtures().fixturesPath = 'base/test/smarttextbox/fixtures';
    jasmine.getFixtures().preload('smart-text-box-attributes-synchronization.htm');
    beforeEach(function () {
        loadFixtures('smart-text-box-attributes-synchronization.htm');
        textBox = document.querySelectorAll('smart-text-box')[0];
    });
    describe('if it ', function () {
        it('exists in DOM', function () {
            expect(document.querySelectorAll('smart-text-box')[0]).toBeInDOM();
        });
    });

    function checkPropertyDefaults(property, newValue) {
        it(' - ' + property.name, function () {
            if (property.value !== null) {
                expect(typeof textBox[property.name]).toBe(property.type === 'array' ? 'object' : property.type);
            }

            if (property.type === 'boolean' || property.type === 'number') {
                expect(textBox[property.name]).toBe(property.value);
            }
            else {
                expect(textBox[property.name]).toEqual(property.value);
            }
        });
    }

    var properties = [
        { name: 'autoFocus', value: false, type: 'boolean' },
        { name: 'disabled', value: false, type: 'boolean' },
        { name: 'form', value: '', type: 'string' },
        { name: 'maxLength', value: null, type: 'number' },
        { name: 'minLength', value: 2, type: 'number' },
        { name: 'name', value: '', type: 'string' },
        { name: 'placeholder', value: '', type: 'string' },
        { name: 'required', value: false, type: 'boolean' },
        { name: 'readonly', value: false, type: 'boolean' },
        { name: 'selectAllOnFocus', value: false, type: 'boolean' },
        { name: 'value', value: '', type: 'string' }
    ];

    describe('expect default values on text area', function () {
        for (var p = 0; p < properties.length; p++) {
            checkPropertyDefaults(properties[p]);
        }
    });
});
