var describe,
    it,
    expect,
    document,
    beforeAll,
    afterAll;

describe('Testing smart-accordion event handlers', function () {
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

    describe(' testing _moveHandler', function () {
        it(' wneh one of many items is dragged', function () {
            const accordion = createAccordion(2),
                event = { pageX: '50', pageY: '30', clientX: '50', clientY: '30' },
                event2 = { pageX: '50', pageY: '200', clientX: '50', clientY: '200' };

            expect(accordion._items[0].label).toBe('Item 0');
            expect(accordion._items[1].label).toBe('Item 1');

            accordion.reorder = accordion._dragging = true;
            accordion._storeItemsCoordinates();

            accordion._itemIsPressed = true;
            accordion.reorder = true;

            accordion._selectedItemIndex = 0;
            accordion._selectedItem = accordion._items[0];
            accordion._reorderedIndex = 0;

            event.originalEvent = { target: accordion._selectedItem.getElementsByClassName("smart-accordion-item-header")[0] };
            event2.originalEvent = { target: accordion._selectedItem.getElementsByClassName("smart-accordion-item-header")[0] };

            accordion._moveHandler(event);
            accordion._moveHandler(event2);

            expect(accordion._items[0].label).toBe('Item 1');
            expect(accordion._items[1].label).toBe('Item 0');

            removeAccordion(accordion);
        });
    });

    describe(' testing _focusHandler', function () {
        it(' on disabled accordion', function () {
            const accordion = createAccordion(2);

            accordion.disabled = true;

            accordion._focusHandler();

            expect(accordion._items[0].focused).toBe(false);
            expect(accordion._items[1].focused).toBe(false);

            removeAccordion(accordion);
        });
    });

    describe(' testing _keyDownHandler', function () {
        it(' on disabled accordion', function () {
            const accordion = createAccordion(2),
                event = { pageX: '50', pageY: '60' };

            accordion.disabled = true;
            accordion._keyDownHandler(event);

            expect(accordion._items[0].focused).toBe(false);
            expect(accordion._items[1].focused).toBe(false);

            removeAccordion(accordion);
        });

        it(' when is pressed random key, different than handled keys', function () {
            const accordion = createAccordion(2),
                event = { pageX: '50', pageY: '60', key:'a' };

            accordion._keyDownHandler(event);
            expect(accordion._items[0].focused).toBe(false);
            expect(accordion._items[1].focused).toBe(false);

            removeAccordion(accordion);
        });

        it(' when is pressed Enter in toggle expandMode', function () {
            const accordion = createAccordion(2),
                event = { key: 'Enter', preventDefault: function () { } };

            expect(accordion._items[0].expanded).toBe(true);
            expect(accordion._items[1].expanded).toBe(false);

            accordion.expandMode = 'toggle';
            accordion._items[0].focus();
            accordion._items[0].focused = true;
            accordion._keyDownHandler(event);

            expect(accordion._items[0].expanded).toBe(false);
            expect(accordion._items[1].expanded).toBe(false);


            removeAccordion(accordion);
        });
    });
});
