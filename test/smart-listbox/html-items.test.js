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
    jasmine.getFixtures().preload('smart-list-item-html-items.htm');
    beforeEach(function () {
        loadFixtures('smart-list-item-html-items.htm');
        smartListBox = document.querySelector('smart-list-box');
    });
    describe('if it ', function () {
        it('exists in DOM', function () {
            expect(document.querySelector('smart-list-box')).toBeInDOM();
        });
    });

    describe('expect', function () {
        it('all items to be loaded', function () {
            expect(smartListBox.items.length).toBe(15);
        });
    });
});
