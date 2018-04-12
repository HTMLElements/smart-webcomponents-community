var describe,
    it,
    expect,
    document,
    beforeAll,
    afterAll;
describe('Testing smart-pager created dynamicaly and destroyed', function () {
    'use strict';
    function createPager() {
        const pager = document.createElement('smart-pager');

        document.body.appendChild(pager);
        expect(pager).toBeInDOM();

        return pager;
    }

    function removePager(pager) {
        document.body.removeChild(document.querySelector('smart-pager'));
        expect(pager).not.toBeInDOM();
    }

    describe('if the number of the items could be changed ', function () {
        it('to positive number', function () {
            let pager = createPager();

            pager.items = 20;
            expect(pager.$.itemsContainer.querySelectorAll('.smart-pager-item').length).toBe(3);

            pager.items = 50;
            expect(pager.$.itemsContainer.querySelectorAll('.smart-pager-item').length).toBe(3);

            pager.items = 0;
            expect(pager.$.itemsContainer.querySelectorAll('.smart-pager-item').length).toBe(0);

            removePager(pager);
        });
    });

    describe('if the number of the items per page could be changed ', function () {
        it('to positive number', function () {
            let pager = createPager();

            pager.items = 20;
            pager.itemsPerPage = 50;
            expect(pager.$.itemsContainer.querySelectorAll('.smart-pager-item').length).toBe(20);

            pager.items = 0;
            pager.itemsPerPage = 30;
            expect(pager.$.itemsContainer.querySelectorAll('.smart-pager-item').length).toBe(0);

            removePager(pager);
        });
    });


    describe('if current page could be changed ', function () {
        it('to positive number', function () {
            let pager = createPager();

            pager.items = 20;
            pager.currentPage = 2;
            expect(pager.$.itemsContainer.querySelectorAll('.smart-pager-item').length).toBe(3);

            pager.currentPage = 3;
            expect(pager.$.itemsContainer.querySelectorAll('.smart-pager-item').length).toBe(3);

            pager.currentPage = 6;
            expect(pager.$.itemsContainer.querySelectorAll('.smart-pager-item').length).toBe(2);

            removePager(pager);
        });

           it('to negative number', function () {
               let pager = createPager();
   
                pager.items = 20;
                pager.currentPage = -2;

                expect(pager.currentPage).toBe(0);
   
               removePager(pager);
           });

           it('to huge number', function () {
               let pager = createPager();

               pager.items = 20;
               pager.currentPage = 500;

               expect(pager.currentPage).toBe(6);

               removePager(pager);
           });
    });

    describe('if current item could be changed ', function () {
        it('to positive number', function () {
            let pager = createPager();

            pager.items = 20;
            pager.currentItem = 2;
            expect(pager.$.itemsContainer.querySelectorAll('.smart-pager-item')[2].classList.contains('smart-selected')).toBe(true);

            pager.currentItem = 3;
            expect(pager.$.itemsContainer.querySelectorAll('.smart-pager-item')[0].classList.contains('smart-selected')).toBe(true);

            removePager(pager);
        });

        it('to negative number to be handled', function () {
            let pager = createPager();

            pager.items = 20;
            pager.currentItem = -2;

            expect(pager.currentItem).toBe(0);

            removePager(pager);
        });

        it('to huge number to be handled', function () {
            let pager = createPager();

            pager.items = 20;
            pager.currentItem = 500;

            expect(pager.currentItem).toBe(19);

            removePager(pager);
        });
    });

    describe('testing pagesCount', function () {
        it('do not be updated by the user', function () {
            let pager = createPager();

            pager.items = 20;
            pager.pagesCount = 20;

            expect(pager.pagesCount).toBe(7);

            removePager(pager);
        });

        it('to be updated when number of items is changed', function () {
            let pager = createPager();

            pager.items = 10;
            expect(pager.pagesCount).toBe(4);

            pager.items = 5;
            expect(pager.pagesCount).toBe(2);

            pager.items = 1000;
            expect(pager.pagesCount).toBe(334);

            removePager(pager);
        });

        it('to be updated when number of items per page is changed', function () {
            let pager = createPager();

            pager.items = 1000;

            pager.itemsPerPage = 50;
            expect(pager.pagesCount).toBe(20);

            pager.itemsPerPage = 10;
            expect(pager.pagesCount).toBe(100);

            removePager(pager);
        });

    });

    describe('testing showRows ', function () {
        it(' when showRows is true and options are set, the dropdown to be visible', function () {
            let pager = createPager(),
                showRowsDisplay = window.getComputedStyle(pager.$.itemsPerPageBlock, null).getPropertyValue('display');

            expect(showRowsDisplay).toBe('none');

            pager.items = 30;
            pager.showRowsCount = true;
            pager.rowsCountOptions = [5, 10, 15];

            showRowsDisplay = window.getComputedStyle(pager.$.itemsPerPageBlock, null).getPropertyValue('display');
            expect(showRowsDisplay).toBe('flex');

            removePager(pager);
        });
    });

    describe('testing showRange ', function () {
        it(' the range container to be visible, when showRange = true', function () {
            let pager = createPager(),
                showRangeDisplay,
                rangeContainer = pager.querySelector('.smart-range');

            pager.items = 20;
            pager.showRange = true;

            showRangeDisplay = window.getComputedStyle(rangeContainer, null).getPropertyValue('display');
            expect(showRangeDisplay).toBe('flex');

            removePager(pager);
        });

        it(' the information in the range container to be changed after items update', function () {
            let pager = createPager(),
                showRangeDisplay,
                rangeContainer = pager.querySelector('.smart-range');

            pager.showRange = true;

            pager.items = 20;
            expect(rangeContainer.innerHTML).toBe('<span class="smart-range-start">1</span> <span class="smart-range-hyphen">-</span> <span class="smart-range-end">3</span><span class="smart-range-prefix">of</span> <span class="smart-range-items">20</span> <span class="smart-range-suffix"></span>');

            pager.items = 30;
            expect(rangeContainer.innerHTML).toBe('<span class="smart-range-start">1</span> <span class="smart-range-hyphen">-</span> <span class="smart-range-end">3</span><span class="smart-range-prefix">of</span> <span class="smart-range-items">30</span> <span class="smart-range-suffix"></span>');

            pager.items = 40;
            expect(rangeContainer.innerHTML).toBe('<span class="smart-range-start">1</span> <span class="smart-range-hyphen">-</span> <span class="smart-range-end">3</span><span class="smart-range-prefix">of</span> <span class="smart-range-items">40</span> <span class="smart-range-suffix"></span>');

            removePager(pager);
        });
    });

    describe('testing localization ', function () {
        it(' when the localization object is updated, to update button labels', function () {
            let pager = createPager();

            pager.items = 20;

            pager.firstLastButtons = true;
            pager.prevNextButtons = true;
            pager.prevNextPageButtons = true;

            pager.localization = {
                'firstButton': '|<',
                'lastButton': '>|',
                'previousButton': '<<',
                'nextButton': '>>',
                'previousPageButton': 'Page <<',
                'nextPageButton': 'Page >>',
                'goToButton': 'To page ..',
                'goToInputPlaceholder': '',
                'elypsis': '.',
                'rangeString': ' - '
            };

            expect(pager.$.previousButton.content).toBe('<<');
            expect(pager.$.nextButton.content).toBe('>>');

            removePager(pager);
        });
    });

    describe('testing disabledItems changes ', function () {
        it('to add/remove smart-disabled class', function () {
            let pager = createPager(),
                items;

            pager.items = 20;
            pager.disabledItems = [0, 1];
            pager.currentItem = 2;
            items = pager.$.itemsContainer.querySelectorAll('.smart-pager-item');

            expect(items[0].classList.contains('smart-disabled')).toBe(true);
            expect(items[1].classList.contains('smart-disabled')).toBe(true);
            expect(items[2].classList.contains('smart-disabled')).toBe(false);

            pager.disabledItems = [];
            items = pager.$.itemsContainer.querySelectorAll('.smart-pager-item');
            expect(items[0].classList.contains('smart-disabled')).toBe(false);
            expect(items[1].classList.contains('smart-disabled')).toBe(false);
            expect(items[2].classList.contains('smart-disabled')).toBe(false);

            removePager(pager);
        });
    });


    describe('testing elypsis handling', function () {
        it('to be displayed next page elypsis if is required and elypsis = true', function () {
            let pager = createPager();

            pager.items = 20;
            pager.ellipsis = true;

            expect(window.getComputedStyle(pager.$.nextEllipsisButton, null).getPropertyValue('display')).toBe('flex');
            expect(window.getComputedStyle(pager.$.previousEllipsisButton, null).getPropertyValue('display')).toBe('none');

            pager.currentItem = 10;
            expect(window.getComputedStyle(pager.$.nextEllipsisButton, null).getPropertyValue('display')).toBe('flex');
            expect(window.getComputedStyle(pager.$.previousEllipsisButton, null).getPropertyValue('display')).toBe('flex');

            removePager(pager);
        });

        it('to be displayed previous page elypsis if is required and elypsis = true', function () {
            let pager = createPager();

            pager.items = 20;
            pager.ellipsis = true;

            pager.currentItem = 19;
            expect(window.getComputedStyle(pager.$.nextEllipsisButton, null).getPropertyValue('display')).toBe('none');
            expect(window.getComputedStyle(pager.$.previousEllipsisButton, null).getPropertyValue('display')).toBe('flex');

            pager.currentItem = 10;
            expect(window.getComputedStyle(pager.$.nextEllipsisButton, null).getPropertyValue('display')).toBe('flex');
            expect(window.getComputedStyle(pager.$.previousEllipsisButton, null).getPropertyValue('display')).toBe('flex');

            removePager(pager);
        });
    });

    describe('testing labelMap update', function () {
        it('to replace the numbers in each item with labels', function () {
            let pager = createPager();

            pager.items = 20;
            pager.labelMap = { 1: 'a', 2: 'b' };

            expect(pager.$.itemsContainer.querySelectorAll('.smart-pager-item')[1].innerText).toBe('a');
            expect(pager.$.itemsContainer.querySelectorAll('.smart-pager-item')[2].innerText).toBe('b');

            removePager(pager);
        });
    });

    describe('testing itemTemplate update', function () {
        it('to replace the numbers in each item with template', function () {
            const pagerItemTemplate = document.createElement('template'),
                pager = document.createElement('smart-pager');

            pagerItemTemplate.innerHTML = '<span>Item </span><span style="margin-left:5px;">{{label}}</span>';
            pagerItemTemplate.id = 'pagerItemTemplateId';
            document.body.appendChild(pagerItemTemplate);

            pager.items = 20;
            pager.itemTemplate = 'pagerItemTemplateId';

            document.body.appendChild(pager);

            expect(pager.$.itemsContainer.querySelectorAll('.smart-pager-item')[0].innerHTML).toBe('<span>Item </span><span style="margin-left:5px;">1</span>');

            removePager(pager);
            document.body.removeChild(document.querySelector('template'));
        });
    });

    describe('if the pager is enabled/disabled ', function () {
        it('to enable/disable pager\'s navigation buttons', function () {
            let pager = createPager(),
                e = { target: pager.$.nextPageButton };
            pager.items = 20;

            expect(pager.currentItem).toBe(0);

            pager.currentItem = 5;
            pager.elypsis = true;
            pager.firstLastButtons = true;
            pager.prevNextButtons = true;
            pager.prevNextPageButtons = true;

            pager.disabled = true;
            pager._navigationButtonsClickHandler(e);
            expect(pager.currentItem).toBe(5);

            e.target = pager.$.nextButton;
            pager._navigationButtonsClickHandler(e);
            expect(pager.currentItem).toBe(5);

            e.target = pager.$.lastButton;
            pager._navigationButtonsClickHandler(e);
            expect(pager.currentItem).toBe(5);

            e.target = pager.$.nextEllipsisButton;
            pager._navigationButtonsClickHandler(e);
            expect(pager.currentItem).toBe(5);

            e.target = pager.$.previousPageButton;
            pager._navigationButtonsClickHandler(e);
            expect(pager.currentItem).toBe(5);

            e.target = pager.$.previousButton;
            pager._navigationButtonsClickHandler(e);
            expect(pager.currentItem).toBe(5);

            e.target = pager.$.firstButton;
            pager._navigationButtonsClickHandler(e);
            expect(pager.currentItem).toBe(5);

            e.target = pager.$.previousEllipsisButton;
            pager._navigationButtonsClickHandler(e);
            expect(pager.currentItem).toBe(5);

            pager.disabled = false;

            e.target = pager.$.nextPageButton;
            pager._navigationButtonsClickHandler(e);
            expect(pager.currentItem).toBe(6);

            e.target = pager.$.nextButton;
            pager._navigationButtonsClickHandler(e);
            expect(pager.currentItem).toBe(7);

            e.target = pager.$.nextEllipsisButton;
            pager._navigationButtonsClickHandler(e);
            expect(pager.currentItem).toBe(9);

            e.target = pager.$.lastButton;
            pager._navigationButtonsClickHandler(e);
            expect(pager.currentItem).toBe(19);

            e.target = pager.$.previousPageButton;
            pager._navigationButtonsClickHandler(e);
            expect(pager.currentItem).toBe(15);

            e.target = pager.$.previousEllipsisButton;
            pager._navigationButtonsClickHandler(e);
            expect(pager.currentItem).toBe(12);

            e.target = pager.$.firstButton;
            pager._navigationButtonsClickHandler(e);
            expect(pager.currentItem).toBe(0);

            removePager(pager);
        });

        it('to enable/disable user\'s iteraction with the items', function () {
            let pager = createPager(),
                e = {};

            pager.items = 20;
            expect(pager.currentItem).toBe(0);

            e.target = pager.$.itemsContainer.querySelectorAll('.smart-pager-item')[0];
            e.path = [pager.$.itemsContainer.querySelectorAll('.smart-pager-item')[0]];

            pager.items = 20;
            pager.currentItem = 2;
            pager.disabled = true;

            pager._itemsContainerClickHandler(e);
            expect(pager.currentItem).toBe(2);

            pager.disabled = false;

            e.target = pager.$.itemsContainer.querySelectorAll('.smart-pager-item')[0];
            e.path = [pager.$.itemsContainer.querySelectorAll('.smart-pager-item')[0]];
            pager._itemsContainerClickHandler(e);
            expect(pager.currentItem).toBe(0);

            removePager(pager);
        });
    });
});
