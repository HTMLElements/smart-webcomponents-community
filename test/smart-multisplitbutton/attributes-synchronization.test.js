var describe,
    jasmine,
    beforeEach,
    loadFixtures,
    it,
    expect,
    document;
describe('Testing smart-multi-split-button loaded from fixture', function () {
    'use strict';
    let multiSplitButton;
    jasmine.getFixtures().fixturesPath = 'base/test/smartmultisplitbutton/fixtures';
    jasmine.getFixtures().preload('smart-multi-split-button-attributes-synchronization.htm');
    beforeEach(function () {
        loadFixtures('smart-multi-split-button-attributes-synchronization.htm');
        multiSplitButton = document.querySelector('smart-multi-split-button');
    });
    describe('if it ', function () {
        it('exists in DOM', function () {
            expect(document.querySelector('smart-multi-split-button')).toBeInDOM();
        });
    });

    function checkPropertyDefaults(property, newValue) {
        it(' - ' + property.name, function () {
            if (property.value !== null) {
                expect(typeof multiSplitButton[property.name]).toBe(property.type === 'array' ? 'object' : property.type);
            }

            if (property.type === 'boolean' || property.type === 'number') {
                expect(multiSplitButton[property.name]).toBe(property.value);
            }
            else {
                expect(multiSplitButton[property.name]).toEqual(property.value);
            }
        });
    }

    var properties = [
        { name: 'dataSource', value: [], type: 'array' },
        { name: 'hideDropDownButton', value: false, type: 'boolean' }
    ];

    describe('expect default values on text area', function () {
        for (var p = 0; p < properties.length; p++) {
            checkPropertyDefaults(properties[p]);
        }
    });
});

describe('Testing smart-multi-split-button loaded from fixture', function () {
    'use strict';
    let multiSplitButton;
    jasmine.getFixtures().fixturesPath = 'base/test/smartmultisplitbutton/fixtures';
    jasmine.getFixtures().preload('smart-multi-split-button-attributes-synchronization-data-source.htm');
    beforeEach(function () {
        loadFixtures('smart-multi-split-button-attributes-synchronization-data-source.htm');
        multiSplitButton = document.querySelector('smart-multi-split-button');
    });
    describe('if it ', function () {
        it('exists in DOM', function () {
            expect(document.querySelector('smart-multi-split-button')).toBeInDOM();
        });
    });

    function checkPropertyDefaults(property, newValue) {
        it(' - ' + property.name, function () {
            if (property.value !== null) {
                expect(typeof multiSplitButton[property.name]).toBe(property.type === 'array' ? 'object' : property.type);
            }

            if (property.type === 'boolean' || property.type === 'number') {
                expect(multiSplitButton[property.name]).toBe(property.value);
            }
            else {
                expect(multiSplitButton[property.name]).toEqual(property.value);
            }
        });
    }

    var properties = [
        { name: 'dataSource', value: [], type: 'array' },
        { name: 'hideDropDownButton', value: false, type: 'boolean' }
    ];

    describe('expect default values on text area', function () {
        for (var p = 0; p < properties.length; p++) {
            checkPropertyDefaults(properties[p]);
        }
    });
});

describe('Testing smart-multi-split-button loaded from fixture', function () {
    'use strict';
    let multiSplitButton;
    jasmine.getFixtures().fixturesPath = 'base/test/smartmultisplitbutton/fixtures';
    jasmine.getFixtures().preload('smart-multi-split-button-attributes-synchronization-initial-content.htm');
    beforeEach(function () {
        loadFixtures('smart-multi-split-button-attributes-synchronization-initial-content.htm');
        multiSplitButton = document.querySelector('smart-multi-split-button');
    });
    describe('if it ', function () {
        it('exists in DOM', function () {
            expect(document.querySelector('smart-multi-split-button')).toBeInDOM();
        });
    });

    function checkPropertyDefaults(property, newValue) {
        it(' - ' + property.name, function () {
            if (property.value !== null) {
                expect(typeof multiSplitButton[property.name]).toBe(property.type === 'array' ? 'object' : property.type);
            }

            if (property.type === 'boolean' || property.type === 'number') {
                expect(multiSplitButton[property.name]).toBe(property.value);
            }
            else {
                expect(multiSplitButton[property.name]).toEqual(property.value);
            }
        });
    }

    var properties = [
        { name: 'hideDropDownButton', value: false, type: 'boolean' }
    ];

    describe('expect default values on text area', function () {
        for (var p = 0; p < properties.length; p++) {
            checkPropertyDefaults(properties[p]);
        }
    });
});