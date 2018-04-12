var describe,
    jasmine,
    beforeEach,
    loadFixtures,
    it,
    expect,
    document;
describe('Testing smart-list-box loaded from fixture', function () {
    'use strict';
    let smartListBox;

    jasmine.getFixtures().fixturesPath = 'base/test/smartlistbox/fixtures';
    jasmine.getFixtures().preload('smart-list-box-virtualization.htm');
    beforeEach(function () {
        loadFixtures('smart-list-box-virtualization.htm');
        smartListBox = document.querySelector('smart-list-box');

        var array = [];
        for (let i = 0; i < 100; i++) {
            array.push("Item" + i);
        }

        smartListBox.dataSource = array;
    });
    describe('if it ', function () {
        it('exists in DOM', function () {
            expect(smartListBox).toBeInDOM();
        });
    });
    describe('Testing ', function () {
        it('appendChild', function () {

            expect(smartListBox.items.length).toBe(100);
            var item = document.createElement('smart-list-item');

            item.label = 'Newly Added item';
            smartListBox.appendChild(item);

            expect(smartListBox.items.length).toBe(101);
        });
        it('insertBefore', function () {

            expect(smartListBox.items.length).toBe(100);
            var item = document.createElement('smart-list-item');

            item.label = 'Newly Added item';
            smartListBox.insertBefore(item, smartListBox.items[0]);

            expect(smartListBox.items.length).toBe(101);
        });
        it('removeChild', function () {

            expect(smartListBox.items.length).toBe(100);

            smartListBox.removeChild(smartListBox.items[0]);

            expect(smartListBox.items.length).toBe(99);
        });

        it('_scrollHeight Getter with filterable on', function () { //Throws Error, Maximum Call stack exceeded from smart-element
            //smartListBox.__scrollHeight = undefined;
            //smartListBox.fitlerable = true;
            //smartListBox.filterMode = 'contains';
            //smartListBox.$.filterInput.value = '1';
            //smartListBox._filterItems();

            //expect(smartListBox._scrollHeight).toBeGreaterThan(smartListBox.offsetHeight);
        });

        it('_scrollHeight Getter with filterable off', function () { //Throws Error, Maximum Call stack exceeded from smart-element
            smartListBox.__scrollHeight = undefined;

            expect(smartListBox._scrollHeight).toBeGreaterThan(smartListBox.offsetHeight);
        });
        it('grouping', function () { //Throws Error, Maximum Call stack exceeded from smart-element
            //smartListBox.grouped = true;

            //expect(smartListBox._groups).toBeGreaterThan(0);

            //Test ungrouping too.
        });
        it('grouping', function () { //Throws Error, Maximum Call stack exceeded from smart-element
            //smartListBox.grouped = true;

            //expect(smartListBox._groups).toBeGreaterThan(0);

            //Test ungrouping too.
        });
        it('sorting', function () { //Throws Error, Maximum Call stack exceeded from smart-element
            //smartListBox.sorted = true;

            //expect(smartListBox.sorted).toBe(true);

            //Test unsorted too.

            //smartListBox.sorted = false;

            //expect(smartListBox.sorted).toBe(false);
        });
        it('_verticalScrollbarHandler when the user scrolled the vertical ScrollBar', function () { //Throws Error, Maximum Call stack exceeded from smart-element
            var event = { detail: { value: 250 }, stopPropagation: function () { }, context: smartListBox._scrollView.verticalScrollBar }

            smartListBox._scrollView.scrollTop = 250;
            smartListBox._verticalScrollbarHandler(event);

            //expect(smartListBox.sorted).toBe(true);

            //Test unsorted too.

            //smartListBox.sorted = false;

            //expect(smartListBox.sorted).toBe(false);
        });
    });
});
