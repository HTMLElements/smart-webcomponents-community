var describe,
    jasmine,
    beforeEach,
    loadFixtures,
    it,
    expect,
    document;
describe('Testing smart-scroll-bar loaded from fixture', function () {
    'use strict';
    let smartScrollBar;
    jasmine.getFixtures().fixturesPath = 'base/test/smartscrollbar/fixtures';
    jasmine.getFixtures().preload('smart-scroll-bar-attributes-synchronization.htm');
    beforeEach(function () {
        loadFixtures('smart-scroll-bar-attributes-synchronization.htm');
        smartScrollBar = document.querySelector('smart-scroll-bar');
    });
    describe('if it ', function () {
        it('exists in DOM', function () {
            expect(smartScrollBar).toBeInDOM();
        });
    });

    describe('values  after initialization to be', function () {
        it('"value" = 50', function () {
            expect(smartScrollBar.value).toBe(20);
        });

        it('"min" to be 0', function () {
            expect(smartScrollBar.min).toBe(0);
        });

        it('"max"=30', function () {
            expect(smartScrollBar.max).toBe(100);
        });
    });
});
