var describe,
    jasmine,
    beforeEach,
    loadFixtures,
    it,
    expect,
    document;
describe('Testing smart-text-area loaded from fixture', function () {
    'use strict';
    let textArea;
    jasmine.getFixtures().fixturesPath = 'base/test/smarttextarea/fixtures';
    jasmine.getFixtures().preload('smart-text-area-attributes-synchronization.htm');
    beforeEach(function () {
        loadFixtures('smart-text-area-attributes-synchronization.htm');
        textArea = document.querySelector('smart-text-area');
    });
    describe('if it ', function () {
        it('exists in DOM', function () {
            expect(document.querySelector('smart-text-area')).toBeInDOM();
        });
    });

    function checkPropertyDefaults(property, newValue) {
        it(' - ' + property.name, function () {
            if (property.value !== null) {
                expect(typeof textArea[property.name]).toBe(property.type === 'array' ? 'object' : property.type);
            }

            if (property.type === 'boolean' || property.type === 'number') {
                expect(textArea[property.name]).toBe(property.value);
            }
            else {
                expect(textArea[property.name]).toEqual(property.value);
            }
        });
    }

    var properties = [
        { name: 'allowHorizontalScrollbar', value: false, type: 'boolean' },
        { name: 'allowVerticalScrollbar', value: false, type: 'boolean' },
        { name: 'autocapitalize', value: 'none', type: 'string' },
        { name: 'autocomplete', value: 'off', type: 'string' },
        { name: 'autofocus', value: false, type: 'boolean' },
        { name: 'cols', value: 20, type: 'number' },
        { name: 'displayMode', value: 'default', type: 'string' },
        { name: 'form', value: false, type: 'boolean' },
        { name: 'maxLength', value: null, type: 'number' },
        { name: 'minLength', value: null, type: 'number' },
        { name: 'name', value: '', type: 'string' },
        { name: 'placeholder', value: '', type: 'string' },
        { name: 'required', value: false, type: 'boolean' },
        { name: 'resizable', value: false, type: 'boolean' },
        { name: 'rows', value: 5, type: 'number' },
        { name: 'selectAllOnFocus', value: false, type: 'boolean' },
        { name: 'selectionDirection', value: 'none', type: 'string' },
        { name: 'selectionEnd', value: 0, type: 'number' },
        { name: 'selectionStart', value: 0, type: 'number' },
        { name: 'spellcheck', value: false, type: 'boolean' },
        { name: 'singleLine', value: false, type: 'boolean' },
        { name: 'value', value: '', type: 'string' },
        { name: 'wrap', value: 'soft', type: 'string' }
    ];

    describe('expect default values on text area', function () {
        for (var p = 0; p < properties.length; p++) {
            checkPropertyDefaults(properties[p]);
        }
    });

   /* describe('if the properties are set correctly via atributes. Others are with default values', function () {
        it('decimalSeparator is set to "."', function () {
            expect(textArea.decimalSeparator).toEqual('.');
        });
    });
    describe('if the properties can be changed dynamically', function () {
        it('decimalSeparator can be set to ","', function () {
            textArea.decimalSeparator = ',';
            expect(textArea.decimalSeparator).toEqual(',');
        });
    });*/
});
