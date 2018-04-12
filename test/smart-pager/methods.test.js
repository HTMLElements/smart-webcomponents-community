var describe,
    it,
    expect,
    document,
    beforeAll,
    afterAll;
describe('Testing smart-pager\'s methods', function () {
    'use strict';
    function createPager(items) {
        const pager = document.createElement('smart-pager');

        pager.items = items;
        document.body.appendChild(pager);
        expect(pager).toBeInDOM();

        return pager;
    }

    function removePager(pager) {
        document.body.removeChild(document.querySelector('smart-pager'));
        expect(pager).not.toBeInDOM();
    }

    describe('Testing nextItem() method', function () {
        it('to increase currentItem with 1 when the range allows it', function () {
            let pager = createPager(20);

            pager.nextItem();
            expect(pager.currentItem).toBe(1);

            removePager(pager);
        });

        it('do not increase currentItem with 1 when the range disallows it', function () {
            let pager = createPager(20);

            pager.currentItem = 19;

            pager.nextItem();
            expect(pager.currentItem).toBe(19);

            removePager(pager);
        });
    });

    describe('Testing prevItem() method', function () {
        it('to decrease currentItem with 1 when the range allows it', function () {
            let pager = createPager(20);

            pager.currentItem = 19;
            pager.prevItem();
            expect(pager.currentItem).toBe(18);

            removePager(pager);
        });

        it('do not decrease currentItem with 1 when the range disallows it', function () {
            let pager = createPager(20);

            pager.currentItem = 0;
            pager.prevItem();
            expect(pager.currentItem).toBe(0);

            removePager(pager);
        });
    });

    describe('Testing nextPage() method', function () {
        it('to increase currentPage with 1 when the range allows it', function () {
            let pager = createPager(20);

            pager.nextPage();
            expect(pager.currentPage).toBe(1);

            removePager(pager);
        });

        it('do not increase currentPage with 1 when the range disallows it', function () {
            let pager = createPager(20);

            pager.currentPage = 6;
            pager.nextPage();
            expect(pager.currentPage).toBe(6);

            removePager(pager);
        });
    });

    describe('Testing prevPage() method', function () {
        it('to decrease currentPage with 1 when the range allows it', function () {
            let pager = createPager(20);

            pager.currentPage = 3;
            pager.prevPage();
            expect(pager.currentPage).toBe(2);

            removePager(pager);
        });

        it('do not decrease currentPage with 1 when the range disallows it', function () {
            let pager = createPager(20);

            pager.currentPage = 0;
            pager.prevPage();
            expect(pager.currentPage).toBe(0);

            removePager(pager);
        });
    });
});
