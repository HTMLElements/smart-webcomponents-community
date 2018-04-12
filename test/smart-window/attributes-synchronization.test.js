var describe,
    jasmine,
    beforeEach,
    loadFixtures,
    it,
    expect,
    document;

describe('Testing smart-window loaded from fixture', function () {
    'use strict';
    let smartWindow;

    jasmine.getFixtures().fixturesPath = 'base/test/smartwindow/fixtures';
    jasmine.getFixtures().preload('smart-window-attributes-synchronization.htm');

    beforeEach(function () {
        setStyleFixtures('#jasmine-fixtures { height: 1000px; }');
        loadFixtures('smart-window-attributes-synchronization.htm');
        smartWindow = document.querySelector('smart-window');
        smartWindow.windowParent = 'jasmine-fixtures';
    });

    function checkPropertyDefaults(property) {
        it(property.name, function () {
            if (property.nullable) {
                expect(smartWindow[property.name]).toBeNull();
            }
            else {
                if (property.type !== 'any') {
                    expect(typeof smartWindow[property.name]).toBe(property.type === 'array' ? 'object' : property.type);
                }
            }

            if (property.type === 'boolean' || property.type === 'number') {
                expect(smartWindow[property.name]).toBe(property.value);
            }
            else {
                expect(smartWindow[property.name]).toEqual(property.value);
            }
        });
    }

    function checkPropertyChanges(property) {
        it(property.name + 'set to ' + property.newValue, function () {
            smartWindow[property.name] = property.newValue;
            if (property.type === 'boolean' || property.type === 'number') {
                expect(smartWindow[property.name]).toBe(property.newValue);
            }
            else {
                expect(smartWindow[property.name]).toEqual(property.newValue);
            }
        });
    }

    var properties = [
        { name: 'collapsed', value: false, type: 'boolean', newValue: true },
        { name: 'disabled', value: false, type: 'boolean', newValue: true },
        { name: 'footerTemplate', value: null, type: 'any', nullable: true, newValue: 'footerTemplate' },
        { name: 'headerTemplate', value: null, type: 'any', nullable: true, newValue: 'headerTemplate' },
        { name: 'label', value: '', type: 'string', newValue: 'Window 1' },
        { name: 'maximized', value: false, type: 'boolean', newValue: true },
        { name: 'modal', value: false, type: 'boolean', newValue: true },
        { name: 'opened', value: false, type: 'boolean', newValue: true },
        { name: 'pinned', value: false, type: 'boolean', newValue: true },
        { name: 'resizable', value: false, type: 'boolean', newValue: true },
        { name: 'resizeMode', value: 'default', type: 'string', newValue: 'corner' },
        { name: 'windowParent', value: 'jasmine-fixtures', type: 'any', newValue: 'windowContainer' }
    ];

    describe('if it ', function () {
        it('exists in DOM', function () {
            expect(smartWindow).toBeInDOM();
        });

    });

    describe('expect default values', function () {
        for (var p = 0; p < properties.length; p++) {
            checkPropertyDefaults(properties[p]);
        }
    });
    describe('expect values to change when set', function () {
        for (var p = 0; p < properties.length; p++) {
            checkPropertyChanges(properties[p], properties[p]);
        }
    });
    describe('If', function () {
        it('the header template is applied', function () {
            var headerTemplate = document.getElementById('headerTemplate');

            smartWindow.headerTemplate = 'headerTemplate';

            expect(smartWindow.$.header.innerHTML.trim()).toEqual(headerTemplate.innerHTML.trim());
        });

        it('the footer template is applied', function () {
            var footerTemplate = document.getElementById('footerTemplate');

            smartWindow.headerTemplate = 'footerTemplate';

            expect(smartWindow.$.header.innerHTML.trim()).toEqual(footerTemplate.innerHTML.trim());
        });

        it('the parent element is changed', function () {
            var windowParent = document.getElementById('windowContainer');

            smartWindow.windowParent = 'windowContainer';

            expect(smartWindow.parentElement).toEqual(windowParent);
        });
    });
});
