var describe,
    jasmine,
    beforeEach,
    loadFixtures,
    it,
    expect,
    document;
describe('Testing smart-list-box scrollbarTest with fixture', function () {
    'use strict';
    let listBox;

    jasmine.getFixtures().fixturesPath = 'base/test/smart-listbox/fixtures';
    jasmine.getFixtures().preload('smart-list-box-array-source.htm');
    beforeEach(function () {
        loadFixtures('smart-list-box-array-source.htm');
        listBox = document.querySelector('smart-list-box');
    });
    describe('if it ', function () {
        it('exists in DOM', function () {
            expect(document.querySelector('smart-list-box')).toBeInDOM();
        });
    });

    describe('if scrollView is changed on KeyStroke', function () {
        //it('selectedIndexes', function () {
        //    let clickEvent = { originalEvent: { target: listBox.items[0] } },
        //        event = { key: 'ArrowDown', stopPropagation: function () { } };

        //    listBox._downHandler(clickEvent);
        //    listBox._focusHandler();
        //    listBox._keyDownHandler(event);
        //    expect(listBox.$.itemsContainer.scrollTop).toBe(0); // Chrome 162

        //    clickEvent.target = listBox.items[3];
        //    listBox._focusHandler();
        //    listBox._downHandler(clickEvent);
        //    listBox._keyDownHandler(event);
        //    expect(listBox.$.itemsContainer.scrollTop).toBe(0);
        //    expect(listBox.$.itemsContainer.scrollTop).toBe(0);

        //    listBox._keyDownHandler(event);
        //    expect(listBox.$.itemsContainer.scrollTop).toBeGreaterThan(8); // Chrome 9
        //    expect(listBox.$.itemsContainer.scrollTop).toBeLessThan(14); // FireFox 13

        //    listBox._keyDownHandler(event);
        //    expect(listBox.$.itemsContainer.scrollTop).toBeGreaterThan(37); // Chrome 38
        //    expect(listBox.$.itemsContainer.scrollTop).toBeLessThan(44); // FireFox 43

        //    clickEvent.target = listBox.items[7];
        //    listBox._downHandler(clickEvent);
        //    expect(listBox.$.itemsContainer.scrollTop).toBeGreaterThan(37); // Chrome 57
        //    expect(listBox.$.itemsContainer.scrollTop).toBeLessThan(44); // FireFox 63
        //});
    });
});
