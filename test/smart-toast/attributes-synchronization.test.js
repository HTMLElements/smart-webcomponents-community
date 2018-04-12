var describe,
    jasmine,
    beforeEach,
    loadFixtures,
    it,
    expect,
    document;
describe('Testing smart-toast loaded from fixture', function () {
    'use strict';
    let toast;
    jasmine.getFixtures().fixturesPath = 'base/test/smarttoast/fixtures';
    jasmine.getFixtures().preload('smart-toast-attributes-synchronization.htm');
    beforeEach(function () {
        loadFixtures('smart-toast-attributes-synchronization.htm');
        toast = document.querySelector('smart-toast');
    });
    describe('if it ', function () {
        it('exists in DOM', function () {
            expect(document.querySelector('smart-toast')).toBeInDOM();
        });
    });

    function checkPropertyDefaults(property, newValue) {
        it(' - ' + property.name, function () {
            if (property.value !== null) {
                expect(typeof toast[property.name]).toBe(property.type === 'array' ? 'object' : property.type);
            }

            if (property.type === 'boolean' || property.type === 'number') {
                expect(toast[property.name]).toBe(property.value);
            }
            else {
                expect(toast[property.name]).toEqual(property.value);
            }
        });
    }

    var properties = [
        { name: 'appendTo', value: null, type: 'any' },
        { name: 'autoClose', value: false, type: 'boolean' },
        { name: 'autoCloseDelay', value: 3000, type: 'number' },
        { name: 'autoOpen', value: false, type: 'boolean' },
        { name: 'itemTemplate', value: null, type: 'string' },
        { name: 'modal', value: false, type: 'boolean' },
        { name: 'position', value: 'top-right', type: 'string' },
        { name: 'showCloseButton', value: false, type: 'boolean' },
        { name: 'type', value: 'info', type: 'string' },
        { name: 'value', value: 'Toast', type: 'string' }
    ];

    describe('expect default values on text area', function () {
        for (var p = 0; p < properties.length; p++) {
            checkPropertyDefaults(properties[p]);
        }
    });
});
