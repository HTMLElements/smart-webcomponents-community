var describe,
    jasmine,
    beforeEach,
    loadFixtures,
    it,
    expect,
    document;
describe('Testing smartAccordion attributes-synchronization fixture', function () {
    'use strict';
    let accordion;
    jasmine.getFixtures().fixturesPath = 'base/test/smartaccordion/fixtures';
    jasmine.getFixtures().preload('smart-accordion-expanded-items-attributes-synchronization.htm');
    beforeEach(function () {
        loadFixtures('smart-accordion-expanded-items-attributes-synchronization.htm');
        accordion = document.querySelector('smart-accordion');
    });
    describe('if it ', function () {
        it('exists in DOM', function () {
            expect(document.querySelector('smart-accordion')).toBeInDOM();
        });
    });

    function checkPropertyDefaults(property, newValue) {
        it(property.name, function () {
            expect(typeof accordion[property.name]).toBe(property.type === 'array' ? 'object' : property.type);

            if (property.type === 'boolean' || property.type === 'number') {
                expect(accordion[property.name]).toBe(property.value);
            }
            else {
                expect(accordion[property.name]).toEqual(property.value);
            }
        });
    }

    var properties = [
        { name: 'disabled', value: false, type: 'boolean' },
        { name: 'expandedIndexes', value: [1], type: 'array' },
        { name: 'expandMode', value: 'singleFitHeight', type: 'string' },
        { name: 'readonly', value: false, type: 'boolean' },
        { name: 'reorder', value: false, type: 'boolean' }
    ];

    describe('expect default values on accordion with single item', function () {
        for (var p = 0; p < properties.length; p++) {
            checkPropertyDefaults(properties[p]);
        }
    });
});
