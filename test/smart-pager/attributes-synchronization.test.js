var describe,
    jasmine,
    beforeEach,
    loadFixtures,
    it,
    expect,
    document;
describe('Testing smart-pager loaded from fixture', function () {
    'use strict';
    let maskedTextBox;
    jasmine.getFixtures().fixturesPath = 'base/test/smart-pager/fixtures';
    jasmine.getFixtures().preload('smart-pager-attributes-synchronization.htm');
    beforeEach(function () {
        loadFixtures('smart-pager-attributes-synchronization.htm');
        maskedTextBox = document.querySelector('smart-pager');
    });
    describe('if it ', function () {
        it('exists in DOM', function () {
            expect(document.querySelector('smart-pager')).toBeInDOM();
        });
    });

    function checkPropertyDefaults(property, newValue) {
        it(' - ' + property.name, function () {
            if (property.value !== null) {
                expect(typeof maskedTextBox[property.name]).toBe(property.type === 'array' ? 'object' : property.type);
            }

            if (property.type === 'boolean' || property.type === 'number') {
                expect(maskedTextBox[property.name]).toBe(property.value);
            }
            else {
                expect(maskedTextBox[property.name]).toEqual(property.value);
            }
        });
    }

    var properties = [
        { name: 'currentItem', value: 0, type: 'number' },
        { name: 'currentPage', value: 0, type: 'number' },
        { name: 'disabledItems', value: [], type: 'array' },
        { name: 'ellipsis', value: false, type: 'boolean' },
        { name: 'firstLastButtons', value: false, type: 'boolean' },
        { name: 'goToPage', value: false, type: 'boolean' },
        { name: 'hideItems', value: false, type: 'boolean' },
        { name: 'items', value: 0, type: 'number' },
        { name: 'itemsPerPage', value: 3, type: 'number' },
        { name: 'itemTemplate', value: null, type: 'string' },
        { name: 'labelMap', value: null, type: 'object' },
        { name: 'localization', value: null, type: 'object' },
        { name: 'pagesCount', value: 0, type: 'number' },
        { name: 'prevNextButtons', value: false, type: 'boolean' },
        { name: 'prevNextPageButtons', value: false, type: 'boolean' },
        { name: 'showRange', value: false, type: 'boolean' },
        { name: 'showRowsCount', value: false, type: 'boolean' },
        { name: 'rowsCountOptions', value: [], type: 'array' }
    ];

    describe('expect default values on text area', function () {
        for (var p = 0; p < properties.length; p++) {
            checkPropertyDefaults(properties[p]);
        }
    });
});
