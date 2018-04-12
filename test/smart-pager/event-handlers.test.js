var describe,
    it,
    expect,
    document,
    beforeAll,
    afterAll;

describe('Testing smart-pager, event handlers', function () {
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

    describe('testing keyboard navigation', function () {
        it('when "End" key is pressed', function () {
            let pager = createPager(20),
                e = { key: 'End', preventDefault: function () { }, stopPropagation: function () { } };

            pager._keyDownHandler(e);

            expect(pager.currentItem).toEqual(19);
            expect(pager.currentPage).toEqual(6);

            removePager(pager);
        });

        it('when "Home" key is pressed', function () {
            let pager = createPager(20),
                e = { key: 'Home', preventDefault: function () { }, stopPropagation: function () { } };

            pager._keyDownHandler(e);

            expect(pager.currentItem).toEqual(0);
            expect(pager.currentPage).toEqual(0);

            removePager(pager);
        });

        it('when "PageUp" key is pressed', function () {
            let pager = createPager(20),
                e = { key: 'PageUp', preventDefault: function () { }, stopPropagation: function () { } };

            pager._keyDownHandler(e);

            expect(pager.currentItem).toEqual(3);
            expect(pager.currentPage).toEqual(1);

            removePager(pager);
        });


        it('when "PageDown" key is pressed', function () {
            let pager = createPager(20),
                e = { key: 'PageDown', preventDefault: function () { }, stopPropagation: function () { } };

            pager.currentPage = 1;
            pager._keyDownHandler(e);

            expect(pager.currentItem).toEqual(0);
            expect(pager.currentPage).toEqual(0);

            removePager(pager);
        });

        it('when "ArrowUp" or "ArrowRight" key is pressed', function () {
            let pager = createPager(20),
                e = { key: 'ArrowUp', preventDefault: function () { }, stopPropagation: function () { } };

            pager._keyDownHandler(e);

            expect(pager.currentItem).toEqual(1);
            expect(pager.currentPage).toEqual(0);

            e.key = 'ArrowRight';
            pager._keyDownHandler(e);

            expect(pager.currentItem).toEqual(2);
            expect(pager.currentPage).toEqual(0);

            removePager(pager);
        });

        it('when "ArrowDown" or "ArrowLeft" key is pressed', function () {
            let pager = createPager(20),
                e = { key: 'ArrowDown', preventDefault: function () { }, stopPropagation: function () { } };

            pager.currentItem = 2;
            pager._keyDownHandler(e);

            expect(pager.currentItem).toEqual(1);
            expect(pager.currentPage).toEqual(0);

            e.key = 'ArrowLeft';
            pager._keyDownHandler(e);

            expect(pager.currentItem).toEqual(0);
            expect(pager.currentPage).toEqual(0);

            removePager(pager);
        });
    });

    
    describe('testing navigation buttons', function () {
        it('when "firstButton" is clicked', function () {
            let pager = createPager(20),
                e = { target: pager.$.firstButton };

            pager._navigationButtonsClickHandler(e);

            expect(pager.currentItem).toEqual(0);
            expect(pager.currentPage).toEqual(0);

            removePager(pager);
        });

        it('when "lastButton" is clicked', function () {
            let pager = createPager(20),
                e = { target: pager.$.lastButton };

            pager._navigationButtonsClickHandler(e);

            expect(pager.currentItem).toEqual(19);
            expect(pager.currentPage).toEqual(6);

            removePager(pager);
        });

        it('when "previousButton" is clicked', function () {
            let pager = createPager(20),
                e = { target: pager.$.previousButton };

            pager.currentItem = 1;
            pager._navigationButtonsClickHandler(e);

            expect(pager.currentItem).toEqual(0);
            expect(pager.currentPage).toEqual(0);

            removePager(pager);
        });

        it('when "lastButton" is clicked', function () {
            let pager = createPager(20),
                e = { target: pager.$.nextButton };

            pager._navigationButtonsClickHandler(e);

            expect(pager.currentItem).toEqual(1);
            expect(pager.currentPage).toEqual(0);

            removePager(pager);
        });

        it('when "previousPageButton" or "previousElypsisButton" is clicked', function () {
            let pager = createPager(20),
                e = { target: pager.$.previousPageButton };

            pager.currentPage = 2;
            pager._navigationButtonsClickHandler(e);

            expect(pager.currentItem).toEqual(3);
            expect(pager.currentPage).toEqual(1);

            e.target = pager.$.previousEllipsisButton;
            pager._navigationButtonsClickHandler(e);

            expect(pager.currentItem).toEqual(0);
            expect(pager.currentPage).toEqual(0);

            removePager(pager);
        });

        it('when "nextPageButton" or "nextElypsisButton" is clicked', function () {
            let pager = createPager(20),
                e = { target: pager.$.nextPageButton };

            pager._navigationButtonsClickHandler(e);

            expect(pager.currentItem).toEqual(3);
            expect(pager.currentPage).toEqual(1);

            e.target = pager.$.nextEllipsisButton;
            pager._navigationButtonsClickHandler(e);

            expect(pager.currentItem).toEqual(6);
            expect(pager.currentPage).toEqual(2);

            removePager(pager);
        });
    });

    describe('testing goToButtonClickHandler', function () {
        it('when "goToInput" contains value', function () {
            let pager= createPager(),
                e = { target: pager.$.goToButton };

            pager.$.goToInput.value = '1';
            pager.items = 20;
            pager._navigationButtonsClickHandler(e);

            expect(pager.currentItem).toEqual(3);
            expect(pager.currentPage).toEqual(1);

            removePager(pager);
        });

        it('when "goToInput" is empty', function () {
            let pager = createPager(20),
                e = { target: pager.$.goToButton };

            pager._navigationButtonsClickHandler(e);

            expect(pager.currentItem).toEqual(0);
            expect(pager.currentPage).toEqual(0);

            removePager(pager);
        });
    });

    describe('testing itemsContainerClickHandler', function () {
        it('when is clicked an item', function () {
            let pager = createPager(20),
                activePageItems = pager.querySelectorAll('.smart-pager-item'),
                e = { target: activePageItems[1], path: [activePageItems[1]] };

            pager._itemsContainerClickHandler(e);

            expect(pager.currentItem).toEqual(1);
            expect(pager.currentPage).toEqual(0);

            removePager(pager);
        });
    });
});
