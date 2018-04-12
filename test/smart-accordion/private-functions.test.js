var describe,
    it,
    expect,
    document,
    beforeAll,
    afterAll;

describe('Testing smart-accordion private functions', function () {
    'use strict';

    function createAccordion(items) {
        let accordion = document.createElement('smart-accordion');

        for (var i = 0; i < items; i++) {
            const item = document.createElement('smart-accordion-item');

            item.label = 'Item ' + i;
            item.content = 'Content ' + i;

            accordion.appendChild(item);
        }

        document.body.appendChild(accordion);
        expect(accordion).toBeInDOM();

        return accordion;
    }

    function removeAccordion(accordion) {
        document.body.removeChild(document.querySelector('smart-accordion'));
        expect(accordion).not.toBeInDOM();
    }

    describe('if it created dynamicaly', function () {
        it('exists in DOM', function () {
            const accordion = document.createElement('smart-accordion');

            document.body.appendChild(accordion);
            expect(accordion).toBeInDOM();

            document.body.removeChild(document.querySelector('smart-accordion'));
            expect(accordion).not.toBeInDOM();
        });
    });

    describe('testing item\'s event handlers', function () {
        it(' Mouse Enter Handler', function () {
            const accordion = createAccordion(1);

            accordion._items[0]._headerMouseEnterHandler();
            removeAccordion(accordion);
        });

        it(' Mouse Leave Handler', function () {
            const accordion = createAccordion(1);

            accordion._items[0]._headerMouseLeaveHandler();
            removeAccordion(accordion);
        });
    });

    describe('testing item\'s _setIndex', function () {
        it(' to 0->1', function () {
            const accordion = createAccordion(2);

            accordion._items[0]._setIndex(1);

            removeAccordion(accordion);
        });

    });

    describe('_downHandler', function () {
        it(' Mouse Down on the Header\' label', function () {
            const accordion = createAccordion(2),
                event = { originalEvent: {} },
                pressedItem = accordion._items[0];

            event.originalEvent.target = pressedItem.getElementsByClassName("smart-label")[0];
            accordion._downHandler(event);

            removeAccordion(accordion);
        });

        it(' Mouse Down on the Header', function () {
            const accordion = createAccordion(2),
                event = { originalEvent: {} },
                pressedItem = accordion._items[0];

            event.originalEvent.target = pressedItem.getElementsByClassName("smart-accordion-item-header")[0];
            accordion._downHandler(event);

            removeAccordion(accordion);
        });

        it(' Mouse Down on the Header', function () {
            const accordion = createAccordion(2),
                event = { originalEvent: {} },
                pressedItem = accordion._items[0];

            event.originalEvent.target = pressedItem.getElementsByClassName("smart-accordion-item-content")[0];
            accordion._downHandler(event);

            removeAccordion(accordion);
        });
    });

   describe(' testing _expandedIndexesHandler', function () {
        it(' in singleFitHeight with multiple items without expanded states', function () {
            const accordion = createAccordion(3);

            expect(accordion.expandedIndexes).toEqual([0]);

            removeAccordion(accordion);
        });

         it(' in singleFitHeight with multiple items, first is expanded ', function () {
            const accordion = document.createElement('smart-accordion'),
                accordionItem1 = document.createElement('smart-accordion-item'),
                accordionItem2 = document.createElement('smart-accordion-item'),
                accordionItem3 = document.createElement('smart-accordion-item');

            accordionItem1.expanded = true;

            accordion.appendChild(accordionItem1);
            accordion.appendChild(accordionItem2);
            accordion.appendChild(accordionItem3);
            document.body.appendChild(accordion);

            expect(accordion.expandedIndexes).toEqual([0]);

            document.body.removeChild(document.querySelector('smart-accordion'));
            expect(accordion).not.toBeInDOM();
        });

        it(' in singleFitHeight with multiple items, second is expanded ', function () {
            const accordion = document.createElement('smart-accordion'),
                accordionItem1 = document.createElement('smart-accordion-item'),
                accordionItem2 = document.createElement('smart-accordion-item'),
                accordionItem3 = document.createElement('smart-accordion-item');

            accordionItem2.expanded = true;

            accordion.appendChild(accordionItem1);
            accordion.appendChild(accordionItem2);
            accordion.appendChild(accordionItem3);
            document.body.appendChild(accordion);

            expect(accordion.expandedIndexes).toEqual([1]);

            document.body.removeChild(document.querySelector('smart-accordion'));
            expect(accordion).not.toBeInDOM();
        });

        it(' in singleFitHeight with multiple items, first and second ire expanded ', function () {
            const accordion = document.createElement('smart-accordion'),
                accordionItem1 = document.createElement('smart-accordion-item'),
                accordionItem2 = document.createElement('smart-accordion-item'),
                accordionItem3 = document.createElement('smart-accordion-item');

            accordionItem1.expanded = true;
            accordionItem2.expanded = true;

            accordion.appendChild(accordionItem1);
            accordion.appendChild(accordionItem2);
            accordion.appendChild(accordionItem3);
            document.body.appendChild(accordion);

            expect(accordion.expandedIndexes).toEqual([1]);

            document.body.removeChild(document.querySelector('smart-accordion'));
            expect(accordion).not.toBeInDOM();
        });

        it(' in toggle with multiple items, first and second ire expanded ', function () {
            const accordion = document.createElement('smart-accordion'),
                accordionItem1 = document.createElement('smart-accordion-item'),
                accordionItem2 = document.createElement('smart-accordion-item'),
                accordionItem3 = document.createElement('smart-accordion-item');

            accordion.expandMode = 'toggle';
            accordionItem1.expanded = true;
            accordionItem2.expanded = true;

            accordion.appendChild(accordionItem1);
            accordion.appendChild(accordionItem2);
            accordion.appendChild(accordionItem3);
            document.body.appendChild(accordion);

            expect(accordion.expandedIndexes).toEqual([1]);

            document.body.removeChild(document.querySelector('smart-accordion'));
            expect(accordion).not.toBeInDOM();
        });
    });

   describe('_focusHandler', function () {
        it(' focus could be set to a particular item', function () {
            const accordion = createAccordion(1);

            accordion._focusHandler();

            removeAccordion(accordion);
        });
    });

    describe('_keyDownHandler', function () {
        it(' "ArrowLeft", "ArrowDown", "ArrowRight", "ArrowUp", "End", "Home", " ", "Enter", "Tab"', function () {
            const accordion = createAccordion(2),
                event = { key: ' ', preventDefault: function () { } };

            //by default
            expect(accordion._items[0].focused).toBe(false);
            expect(accordion._items[1].focused).toBe(false);


            accordion._items[1].focus();
            accordion._selectedItem = accordion._items[1];
            accordion._selectedItem.focused = true;

            event.key = 'Home';
            accordion._keyDownHandler(event);
            expect(accordion._items[0].focused).toBe(true);
            expect(accordion._items[1].focused).toBe(false);

            event.key = 'End';
            accordion._keyDownHandler(event);
            expect(accordion._items[0].focused).toBe(false);
            expect(accordion._items[1].focused).toBe(true);

            event.key = 'ArrowUp';
            accordion._keyDownHandler(event);
            expect(accordion._items[0].focused).toBe(true);
            expect(accordion._items[1].focused).toBe(false);
            event.key = 'ArrowRight';
            accordion._keyDownHandler(event);
            expect(accordion._items[0].expanded).toBe(true);
            expect(accordion._items[1].expanded).toBe(false);

            event.key = 'ArrowDown';
            accordion._keyDownHandler(event);
            expect(accordion._items[0].focused).toBe(false);
            expect(accordion._items[1].focused).toBe(true);
            event.key = 'ArrowRight';
            accordion._keyDownHandler(event);
            expect(accordion._items[0].expanded).toBe(false);
            expect(accordion._items[1].expanded).toBe(true);
            event.key = 'ArrowLeft';
            accordion._keyDownHandler(event);
            expect(accordion._items[0].expanded).toBe(false);
            expect(accordion._items[1].expanded).toBe(true);


            event.key = 'Home';
            accordion._keyDownHandler(event);
            event.key = 'Enter';
            accordion._keyDownHandler(event);
            expect(accordion._items[0].expanded).toBe(true);
            expect(accordion._items[1].expanded).toBe(false);

            event.key = 'End';
            accordion._keyDownHandler(event);
            event.key = ' ';
            accordion._keyDownHandler(event);
            expect(accordion._items[0].expanded).toBe(false);
            expect(accordion._items[1].expanded).toBe(true);

            event.key = 'Home';
            accordion._keyDownHandler(event);
            event.key = 'Tab';
            accordion._keyDownHandler(event);
            expect(accordion._items[0].focused).toBe(false);
            expect(accordion._items[1].focused).toBe(true);

            removeAccordion(accordion);
        });
    });

     describe('_handleAnimationsDuration', function () {
        it(' focus could be set to a particular item', function () {
            const accordion = createAccordion(2);

            accordion.className = 'animation';
            accordion.expandedIndexes = [1];

            removeAccordion(accordion);
        });
    });

    describe(' testing _moveHandler', function () {
        it(' wneh item is not pressed before, not reorder ins not active, or accordion is readonly', function () {
            const accordion = createAccordion(1);

            accordion._moveHandler();

            accordion._itemIsPressed = true;
            accordion._moveHandler();

            accordion.reorder = true;
            accordion.readonly = true;
            accordion._moveHandler();

            removeAccordion(accordion);
        });

        it(' wneh the only item is dragged', function () {
            const accordion = createAccordion(1),
                event = { pageX : '50', pageY: '50'};

            accordion._itemIsPressed = true;
            accordion.reorder = true;

            accordion._selectedItemIndex = 0;
            accordion._selectedItem = accordion._items[0];
            event.originalEvent = { target: accordion._selectedItem.getElementsByClassName("smart-accordion-item-header")[0] };

            accordion._moveHandler(event);

            accordion._itemsCoordinates = [{ fromY: 50, toY: 55 }];
            accordion._reorderedIndex = 0;

            accordion._moveHandler(event);

            removeAccordion(accordion);
        });

        it(' wneh an item from many is dragged', function () {
            const accordion = createAccordion(2),
                event = { pageX: '50', pageY: '50' };

            accordion._itemIsPressed = true;
            accordion.reorder = true;

            accordion._selectedItemIndex = 0;
            accordion._selectedItem = accordion._items[0];
            event.originalEvent = { target: accordion._selectedItem.getElementsByClassName("smart-accordion-item-header")[0] };

            accordion._moveHandler(event);

            accordion._itemsCoordinates = [{ fromY: 50, toY: 55 }];
            accordion._reorderedIndex = 0;

            accordion._moveHandler(event);

            removeAccordion(accordion);
        });
    });

    describe(' testing _resizeHandler', function () {
        it(' focus could be set to a particular item', function () {
            const accordion = document.createElement('smart-accordion'),
                accordionItem = document.createElement('smart-accordion-item');

            accordion.style.width = '500px';
            accordion.style.height = '500px';
            accordion.appendChild(accordionItem);
            document.body.appendChild(accordion);


            accordion.style.width = '200px';
            accordion.style.height = '200px';

            accordion._resizeHandler();

            document.body.removeChild(document.querySelector('smart-accordion'));
            expect(accordion).not.toBeInDOM();
        });
    });

    describe('_swapItems', function () {
        it(' focus could be set to a particular item', function () {
            const accordion = document.createElement('smart-accordion'),
                accordionItem1 = document.createElement('smart-accordion-item'),
                accordionItem2 = document.createElement('smart-accordion-item');

            accordion.style.width = '500px';
            accordion.style.height = '500px';
            accordion.appendChild(accordionItem1);
            accordion.appendChild(accordionItem2);
            document.body.appendChild(accordion);

            expect(accordion.expandedIndexes).toEqual([0]);
            accordion._swapItems(0, 1);
            expect(accordion.expandedIndexes).toEqual([1]);
            accordion._swapItems(1, 0);

            document.body.removeChild(document.querySelector('smart-accordion'));
            expect(accordion).not.toBeInDOM();
        });
    });

    describe('_upHandler', function () {
        it(' wneh item is not pressed before, or the element is disabled or readonly', function () {
            const accordion = createAccordion(1);

            accordion._upHandler();

            accordion._itemIsPressed = true;
            accordion.disabled = true;
            accordion._upHandler();

            accordion.disabled = false;
            accordion.readonly = true;
            accordion._upHandler();

            removeAccordion(accordion);
        });

        it(' wneh item is pressed before', function () {
            const accordion = createAccordion(1);

            accordion._itemIsPressed = true;
            accordion._selectedItemIndex = 0;
            accordion._selectedItem = accordion._items[0];
            accordion._upHandler();

            expect(accordion._items[0].expanded).toBe(true);

            removeAccordion(accordion);
        });
    });

    describe('_createItem', function () {
        it(' without settings', function () {
            const accordion = createAccordion(1);
            let item = accordion._createItem();

            expect(item).toBe(undefined);

            removeAccordion(accordion);
        });

        it(' with wrong settings', function () {
            const accordion = createAccordion(1);
            let item = accordion._createItem('new item');
            
            document.body.appendChild(item);

            expect(item instanceof Smart.AccordionItem).toBe(true);

            removeAccordion(accordion);
            document.body.removeChild(item);
        });
    });
});
