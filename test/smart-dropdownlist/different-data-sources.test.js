var describe,
    jasmine,
    beforeEach,
    loadFixtures,
    it,
    expect,
    document;
describe('Testing smart-drop-down-list with different data sources', function () {
    'use strict';
    let dropDownList;
    jasmine.getFixtures().fixturesPath = 'base/test/smart-dropdownlist/fixtures';
    jasmine.getFixtures().preload('smart-drop-down-list-attributes-synchronization.htm');
    beforeEach(function () {
        loadFixtures('smart-drop-down-list-attributes-synchronization.htm');
        dropDownList = document.querySelector('smart-drop-down-list');
    });

    afterEach(function () {
        loadFixtures('smart-drop-down-list-attributes-synchronization.htm');
        dropDownList = document.querySelector('smart-drop-down-list');
    });
    describe('if it ', function () {
        it('exists in DOM', function () {
            expect(document.querySelector('smart-drop-down-list')).toBeInDOM();
        });
    });

    describe('load array of strings', function () {
        it('dataSource', function () {
            dropDownList.dataSource = [
                   "Affogato",
                   "Americano",
                   "Bicerin",
                   "Breve",
                   "Café Bombón",
                   "Café au lait",
                   "Caffé Corretto",
                   "Café Crema",
                   "Caffé Latte",
                   "Caffé macchiato",
                   "Café mélange"
            ];

            expect(dropDownList.dataSource.length).toBe(11);
            //expect(dropDownList.getItems()[2].label).toEqual('Bicerin');
            //expect(dropDownList.getItems()[2].index).toBe(2);
            //expect(dropDownList.getItems()[2].value).toEqual('Bicerin');
            //expect(dropDownList.getItems()[2].group).toBeUndefined();
            //expect(dropDownList.getItems()[2].disabled).toBe(false);
        });
        it('dataSource', function () {
            dropDownList.dataSource = [{
                label: "Affogato",
                value: 4,
                group: "B"
            }, {
                label: "Americano",
                value: 2,
                group: "A"
            }, {
                label: "Bicerin",
                value: 7
            }, {
                label: "Breve",
                value: 1,
                group: "A"
            }, {
                label: "Café Bombón",
                value: 3
            }, {
                label: "Café au lait",
                value: 9
            }, {
                label: "Caffé Corretto",
                value: 12
            }, {
                label: "Café Crema",
                value: 22
            }, {
                label: "Caffé Latte",
                value: 16
            }, {
                label: "Caffé macchiato",
                value: 11,
                group: "A"
            }, {
                label: "Café mélange",
                value: 10,
                group: "B"
            }, {
                label: "Coffee milk",
                value: 45
            }, {
                label: "Cafe mocha",
                value: 32,
                group: "A"
            }];
            expect(dropDownList.dataSource.length).toBe(13);
            //expect(dropDownList.getItems()[2].label).toEqual('Bicerin');
            //expect(dropDownList.getItems()[2].index).toBe(2);
            //expect(dropDownList.getItems()[2].value).toEqual('7');
            //expect(dropDownList.getItems()[2].group).toBeUndefined();
            //expect(dropDownList.getItems()[2].disabled).toBe(false);
        });
    });
});
