var describe,
    jasmine,
    beforeEach,
    loadFixtures,
    it,
    expect,
    document;

describe('Testing smart-calendar loaded from fixture', function () {
    'use strict';
    let calendar;

    jasmine.getFixtures().fixturesPath = 'base/test/smartcalendar/fixtures';
    jasmine.getFixtures().preload('smart-calendar-attributes-synchronization.htm');
    beforeEach(function () {
        loadFixtures('smart-calendar-attributes-synchronization.htm');
        calendar = document.querySelector('smart-calendar');
    });

    function checkPropertyDefaults(property) {
        it(property.name, function () {
            if (property.nullable) {
                expect(calendar[property.name]).toBeNull();
            }
            else if (property.type === 'array') {
                expect(typeof calendar[property.name]).toBe('object');
            }
            else if (property.type === 'object' || property.type === 'function' || property.type === 'any' || property.type === 'date') {
                expect(typeof calendar[property.name]).toBe('object');
            }
            else {
                expect(typeof calendar[property.name]).toBe(property.type);
            }

            if (property.type === 'boolean' || property.type === 'number') {
                expect(calendar[property.name]).toBe(property.value);
            }
            else {
                if (property.name === 'selectedDates') {
                    expect(calendar[property.name].length).toBe(1);
                }
                else {
                    expect(calendar[property.name]).toEqual(property.value);
                }
            }
        });
    }

    function checkPropertyChanges(property) {
        it(property.name + 'set to ' + property.newValue, function () {
            calendar[property.name] = property.newValue;
            if (property.newValue === 'boolean' || property.newValue === 'number') {
                expect(calendar[property.name]).toBe(property.newValue);
            }
            else {
                if (property.name === 'selectedDates' || property.name === 'restrictedDates' || property.name === 'importantDates') {
                    expect(calendar[property.name].length).toBe(property.newValue.length);
                    expect(calendar[property.name][0].toDateString()).toEqual(new Date(property.newValue[0]).toDateString());
                    expect(calendar[property.name][1].toDateString()).toEqual(new Date(property.newValue[1]).toDateString());
                    expect(calendar[property.name][2].toDateString()).toEqual(new Date(property.newValue[2]).toDateString());
                }
                else {
                    expect(calendar[property.name]).toEqual(property.newValue);
                }
            }
        });
    }

    var properties = [
        { name: 'animationSettings', value: null, type: 'object', nullable: true, newValue: { step: 0.25 } },
        { name: 'calendarMode', value: 'default', type: 'string', newValue: 'classic' },
        { name: 'dayNameFormat', value: 'firstTwoLetters', type: 'string', newValue: 'narrow' },
        { name: 'dateFormatFunction', value: null, type: 'function', newValue: (date) => { return date.getFullYear() + date.getMonth() + date.getDate() } },
        { name: 'disabled', value: false, type: 'boolean', newValue: true },
        { name: 'disableAutoNavigation', value: false, type: 'boolean', newValue: true },
        { name: 'displayMode', value: 'month', type: 'string', newValue: 'year' },
        { name: 'displayModeView', value: 'table', type: 'string', newValue: 'list' },
        { name: 'firstDayOfWeek', value: 0, type: 'number', newValue: 3 },
        { name: 'footerTemplate', value: null, type: 'any', newValue: 'footerTemplate' },
        { name: 'headerTemplate', value: null, type: 'any', newValue: 'headerTemplate' },
        { name: 'hideDayNames', value: false, type: 'boolean', newValue: true },
        { name: 'hideOtherMonthDays', value: false, type: 'boolean', newValue: true },
        { name: 'hideTooltipArrow', value: false, type: 'boolean', newValue: true },
        { name: 'importantDates', value: [], type: 'array', newValue: ['2017-07-2', '2017-12-24', '2017-12-25'] },
        { name: 'importantDatesTemplate', value: null, type: 'any', newValue: 'importantDatesTemplate' },
        { name: 'locale', value: 'en', type: 'string', newValue: 'bg' },
        { name: 'max', value: new Date(2100, 1, 1), type: 'any', newValue: new Date(2020, 0, 1) },
        { name: 'min', value: new Date(1900, 1, 1), type: 'any', newValue: new Date(2000, 0, 1) },
        { name: 'months', value: 1, type: 'number', newValue: 2 },
        { name: 'monthNameFormat', value: 'long', type: 'string', newValue: 'short' },
        { name: 'readonly', value: false, type: 'boolean', newValue: true },
        { name: 'rightToLeft', value: false, type: 'boolean', newValue: true },
        { name: 'restrictedDates', value: [], type: 'array', newValue: ['2017-7-7', '2017-10-20', '2017-10-22'] },
        { name: 'scrollButtonsNavigationMode', value: 'landscape', type: 'string', newValue: 'portrait' },
        { name: 'scrollButtonsPosition', value: 'both', type: 'string', newValue: 'far' },
        { name: 'selectedDates', value: ['new Date()'], type: 'array', newValue: ['2017-10-9', '2017-10-12', '2017-10-25'] },
        { name: 'selectionMode', value: 'default', type: 'string', newValue: 'zeroOrMany' },
        { name: 'spinButtonsDelay', value: 80, type: 'number', newValue: 150 },
        { name: 'spinButtonsInitialDelay', value: 0, type: 'number', newValue: 100 },
        { name: 'titleTemplate', value: null, type: 'any', newValue: 'titleTemplate' },
        { name: 'tooltip', value: false, type: 'boolean', newValue: true },
        { name: 'tooltipDelay', value: 100, type: 'number', newValue: 250 },
        { name: 'tooltipPosition', value: 'top', type: 'string', newValue: 'bottom' },
        { name: 'tooltipTemplate', value: null, type: 'any', newValue: 'tooltipTemplate' },
        { name: 'view', value: 'portrait', type: 'string', newValue: 'landscape' },
        { name: 'viewSections', value: ['header'], type: 'array', newValue: ['title', 'header', 'footer'] },
        { name: 'weekNumbers', value: false, type: 'boolean', newValue: true },
        { name: 'weeks', value: 6, type: 'number', newValue: 2 }, //fail
        { name: 'yearFormat', value: 'numeric', type: 'string', newValue: '2-digit' }
    ];

    describe('if it ', function () {
        it('exists in DOM', function () {
            expect(document.querySelector('smart-calendar')).toBeInDOM();
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
});
