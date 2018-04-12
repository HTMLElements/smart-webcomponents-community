var describe,
    jasmine,
    beforeEach,
    loadFixtures,
    it,
    expect,
    document;
describe('Testing smart-tooltip loaded from fixture', function () {
    'use strict';
    let tooltip;
    jasmine.getFixtures().fixturesPath = 'base/test/smart-tooltip/fixtures';
    jasmine.getFixtures().preload('smart-tooltip-attributes-synchronization.htm');
    beforeEach(function () {
        loadFixtures('smart-tooltip-attributes-synchronization.htm');
        tooltip = document.querySelectorAll('smart-tooltip')[0];
    });
    describe('if it ', function () {
        it('exists in DOM', function () {
            expect(document.querySelectorAll('smart-tooltip')[0]).toBeInDOM();
        });
    });

    function checkPropertyDefaults(property, newValue) {
        it(' - ' + property.name, function () {
            if (property.value !== null) {
                expect(typeof tooltip[property.name]).toBe(property.type === 'array' ? 'object' : property.type);
            }

            if (property.type === 'boolean' || property.type === 'number') {
                expect(tooltip[property.name]).toBe(property.value);
            }
            else {
                expect(tooltip[property.name]).toEqual(property.value);
            }
        });
    }

    var properties = [
        { name: 'arrow', value: false, type: 'boolean' },
        { name: 'arrowDirection', value: 'bottom', type: 'string' },
        { name: 'delay', value: 0, type: 'number' },
        { name: 'disabled', value: false, type: 'boolean' },
        { name: 'offset', value: [0,0], type: 'array' },
        { name: 'openMode', value: 'hover', type: 'string' },
        { name: 'position', value: 'top', type: 'string' },
        { name: 'selector', value: 'button', type: 'string' },
        { name: 'tooltipTemplate', value: null, type: 'string' },
        { name: 'value', value: 'Tooltip', type: 'string' },
        { name: 'visible', value: false, type: 'boolean' }
    ];

    describe('expect default values on tooltip', function () {
        for (var p = 0; p < properties.length; p++) {
            checkPropertyDefaults(properties[p]);
        }
    });
});
