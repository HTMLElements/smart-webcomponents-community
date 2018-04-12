var describe,
    jasmine,
    beforeEach,
    loadFixtures,
    it,
    expect,
    document;
describe('Testing smart-list-box with different data sources', function () {
    'use strict';
    let listBox;
    jasmine.getFixtures().fixturesPath = 'base/test/smartlistbox/fixtures';
    jasmine.getFixtures().preload('smart-list-box-attributes-synchronization.htm');
    beforeEach(function () {
        loadFixtures('smart-list-box-attributes-synchronization.htm');
        listBox = document.querySelector('smart-list-box');
    });

    afterEach(function () {
        loadFixtures('smart-list-box-attributes-synchronization.htm');
        listBox = document.querySelector('smart-list-box');
    });
    describe('if it ', function () {
        it('exists in DOM', function () {
            expect(document.querySelector('smart-list-box')).toBeInDOM();
        });
    });

    describe('load array of strings', function () {
        it('dataSource', function () {
            listBox.dataSource = [
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

            expect(listBox.dataSource.length).toBe(11);
            expect(listBox.items[2].label).toEqual('Bicerin');
            expect(listBox.items[2].dataIndex).toBe(2);
            expect(listBox.items[2].value).toEqual('Bicerin');
            expect(listBox.items[2].group).toBe('');
            expect(listBox.items[2].disabled).toBe(false);
        });
        it('dataSource', function () {
            listBox.dataSource = [{
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
            expect(listBox.dataSource.length).toBe(13);
            expect(listBox.items[2].label).toEqual('Bicerin');
            expect(listBox.items[2].dataIndex).toBe(2);
            expect(listBox.items[2].value).toEqual('7');
            expect(listBox.items[2].group).toBe('');
            expect(listBox.items[2].disabled).toBe(false);
        });
    });

    
});
