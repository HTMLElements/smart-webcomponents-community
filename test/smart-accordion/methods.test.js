var describe,
    it,
    expect,
    document,
    beforeAll,
    afterAll;
describe('Testing smart-accordion methods', function () {
    'use strict';

    function createAccordion(items) {
        const accordion = document.createElement('smart-accordion');

        for (let i = 0; i < items; i++) {
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

    describe('Testing appendChild() method ', function () {
         it('on empty accordion', function () {
            const accordion = createAccordion(0);
            let item = document.createElement('smart-accordion-item');

            item.label = 'New Item';
            item.content = 'New Content';
            accordion.appendChild(item);

            expect(accordion._items.length).toBe(1);
            removeAccordion(accordion);
        });

       it('on accordion with multiple items', function () {
            const accordion = createAccordion(5),
                item = document.createElement('smart-accordion-item');

            item.label = 'New Item';
            item.content = 'New Content';
            accordion.appendChild(item);

            expect(accordion._items.length).toBe(6);
            removeAccordion(accordion);
       });

       it('with node, not instance of Smart.AccordionItem', function () {
           const accordion = createAccordion(5),
               item = document.createElement('span');

           item.innerText = 'New Item';
           expect(function () { accordion.appendChild(item); }).toThrow();

           removeAccordion(accordion);
       });
    });

    describe('Testing collapse() method ', function () {
        it('on empty accordion', function () {
            const accordion = createAccordion(0);

            expect(accordion._items.length).toBe(0);
            expect(function () { accordion.collapse(0) }).toThrow();

            removeAccordion(accordion);
        });

        it('on empty accordion with single items', function () {
            const accordion = createAccordion(1);

            expect(accordion._items.length).toBe(1);
            accordion.collapse(0);
            expect(accordion._items[0].expanded).toBe(true);

            removeAccordion(accordion);
        });
    });

    describe('Testing expand() method ', function () {
        it('on empty expand', function () {
            const accordion = createAccordion(0);

            expect(accordion._items.length).toBe(0);
            expect(function () { accordion.expand(0) }).toThrow();

            removeAccordion(accordion);
        });

        it('on empty accordion with single items', function () {
            const accordion = createAccordion(1);

            expect(accordion._items.length).toBe(1);

            accordion.expand(0);
            expect(accordion._items[0].expanded).toBe(true);

            removeAccordion(accordion);
        });
    });

    describe('Testing insert() method on empty accordion', function () {
        it(' with single item', function () {
            const accordion = createAccordion(0);

            expect(accordion._items.length).toBe(0);

            accordion.insert(0, { "label": "Item 0", "content": "Content 0" });

            expect(accordion._items.length).toBe(1);
            expect(accordion._items[0].expanded).toBe(true);

            removeAccordion(accordion);
        });

        it(' with array of items', function () {
            const accordion = createAccordion(0);

            expect(accordion._items.length).toBe(0);

            accordion.insert(0, [{ "label": "Item 0", "content": "Content 0" }, { "label": "Item 1", "content": "Content 1" }]);

            expect(accordion._items.length).toBe(2);
            expect(accordion._items[0].expanded).toBe(true);
            expect(accordion._items[1].expanded).toBe(false);

            removeAccordion(accordion);
        });

        it(' only at position without item settings', function () {
            const accordion = createAccordion(0);

            expect(accordion._items.length).toBe(0);

            accordion.insert(0);

            expect(accordion._items.length).toBe(1);
            expect(accordion._items[0].expanded).toBe(true);

            removeAccordion(accordion);
        });

        it(' with item settings given as string', function () {
            const accordion = createAccordion(0);

            expect(accordion._items.length).toBe(0);

            accordion.insert(0, 'item');

            expect(accordion._items.length).toBe(1);
            expect(accordion._items[0].expanded).toBe(true);
            expect(accordion._items[0].label).toBe('item');
            expect(accordion._items[0].content).toBe('item');

            removeAccordion(accordion);
        });

        it(' with item settings given as number', function () {
            const accordion = createAccordion(0);

            expect(accordion._items.length).toBe(0);

            accordion.insert(0, 5);

            expect(accordion._items.length).toBe(1);
            expect(accordion._items[0].expanded).toBe(true);
            expect(accordion._items[0].label).toBe('5');
            expect(accordion._items[0].content).toBe('5');

            removeAccordion(accordion);
        });

        it(' with item settings given as number', function () {
            const accordion = createAccordion(0);

            expect(accordion._items.length).toBe(0);

            accordion.insert();

            expect(accordion._items.length).toBe(1);
            expect(accordion._items[0].expanded).toBe(true);
            expect(accordion._items[0].label).toBe('');
            expect(accordion._items[0].content).toBe('');

            removeAccordion(accordion);
        });
    });

    describe('Testing insertBefore() method ', function () {
        it('on accordion with items', function () {
            const accordion = document.createElement('smart-accordion'),
                newAccordionItem = document.createElement('smart-accordion-item');

            document.body.appendChild(accordion);

            newAccordionItem.label = "New Item";
            newAccordionItem.content = "New Item Content";

            accordion.insert(0, { "label": "Item 0", "content": "Content 0" });

            expect(accordion._items.length).toBe(1);

            accordion.insertBefore(newAccordionItem, accordion._items[0]);

            expect(accordion._items.length).toBe(2);
            expect(accordion._items[0].expanded).toBe(false);
            expect(accordion._items[1].expanded).toBe(true);

            removeAccordion(accordion);
        });

        it('on accordion which is not initialized at all', function () {
            const accordion = document.createElement('smart-accordion'),
                newAccordionItem = document.createElement('smart-accordion-item');

            document.body.appendChild(accordion);

            newAccordionItem.label = "New Item";
            newAccordionItem.content = "New Item Content";

            accordion.insert(0, { "label": "Item 0", "content": "Content 0" });
            expect(accordion._items.length).toBe(1);

            accordion.isCompleted = false;
            expect(function () { accordion.insertBefore(newAccordionItem, accordion._items[0]); }).toThrow();
            expect(accordion._items.length).toBe(1);

            removeAccordion(accordion);
        });

        it('with an item which is not AccordionItem', function () {
            const accordion = document.createElement('smart-accordion'),
                newAccordionItem = document.createElement('span');

            document.body.appendChild(accordion);

            accordion.insert(0, { "label": "Item 0", "content": "Content 0" });
            expect(accordion._items.length).toBe(1);
            expect(function () { accordion.insertBefore(newAccordionItem, accordion._items[0]); }).toThrow();
            expect(accordion._items.length).toBe(1);

            removeAccordion(accordion);
        });

        it('with wrong referenced node', function () {
            const accordion = document.createElement('smart-accordion'),
                newAccordionItem = document.createElement('smart-accordion-item'),
                singleAccordionItem = document.createElement('smart-accordion-item');

            singleAccordionItem.label = "New Item";
            singleAccordionItem.content = "New Item Content";

            document.body.appendChild(accordion);
            document.body.appendChild(singleAccordionItem);

            newAccordionItem.label = "New Item";
            newAccordionItem.content = "New Item Content";

            accordion.insert(0, { "label": "Item 0", "content": "Content 0" });
            expect(accordion._items.length).toBe(1);

            accordion.isCompleted = false;
            expect(function () { accordion.insertBefore(newAccordionItem, singleAccordionItem); }).toThrow();
            expect(accordion._items.length).toBe(1);

            removeAccordion(accordion);
            document.body.removeChild(document.querySelector('smart-accordion-item'));
        });
    });

    describe('Testing remove() method ', function () {
        it('on empty accordion', function () {
            const accordion = createAccordion(0);

            expect(accordion._items.length).toBe(0);
            expect(function () { accordion.remove(0) }).toThrow();

            removeAccordion(accordion);
        });

        it('on accordion with single item', function () {
            const accordion = createAccordion(0);

            accordion.insert(0, { "label": "Item 0", "content": "Content 0" });
            accordion.remove(0);
            expect(accordion._items.length).toBe(0);

            removeAccordion(accordion);
        });

        it('on accordion with multiple items', function () {
            const accordion = createAccordion(0);

            accordion.insert(0, { "label": "Item 0", "content": "Content 0" });
            accordion.insert(1, { "label": "Item 1", "content": "Content 1" });
            accordion.remove(1);

            expect(accordion._items.length).toBe(1);

            removeAccordion(accordion);
        });

        it('with node removing', function () {
            const accordion = createAccordion(5);

            accordion.remove(accordion._items[0]);
            expect(accordion._items.length).toBe(4);
            removeAccordion(accordion);
        });

        it('with removing of expanded item', function () {
            const accordion = createAccordion(5);

            accordion.remove(0);
            expect(accordion._items.length).toBe(4);
            expect(accordion.expandedIndexes).toEqual([0]);
            removeAccordion(accordion);
        });

        it('with node removing which is not in accordion', function () {
            const accordion = createAccordion(5),
                singleAccordionItem = document.createElement('smart-accordion-item');

            document.body.appendChild(singleAccordionItem);

            expect(function () { accordion.remove(singleAccordionItem); }).toThrow();
            expect(accordion._items.length).toBe(5);

            removeAccordion(accordion);
            document.body.removeChild(document.querySelector('smart-accordion-item'));
        });

        it('with node removing, node is not an accordion item', function () {
            const accordion = createAccordion(5),
               item = document.createElement('span');

            expect(function () { accordion.remove(item); }).toThrow();

            removeAccordion(accordion);
        });
    });

    describe('Testing removeChild() method ', function () {
        it('on empty accordion', function () {
            const accordion = createAccordion(0);

            expect(function () { accordion.removeChild(accordion._items[0]); }).toThrow();
            expect(accordion._items.length).toBe(0);

            removeAccordion(accordion);
        });

        it('on accordion with items', function () {
            const accordion = createAccordion(0);

            accordion.insert(0, [{ "label": "Item 0", "content": "Content 0" }, { "label": "Item 1", "content": "Content 1" }, { "label": "Item 2", "content": "Content 2" }]);

            expect(accordion._items.length).toBe(3);
            accordion.removeChild(accordion._items[0]);
            expect(accordion._items.length).toBe(2);

            removeAccordion(accordion);
        });

        it('about node which is not part of the accordion', function () {
            const accordion = createAccordion(0);

            accordion.insert(0, [{ "label": "Item 0", "content": "Content 0" }, { "label": "Item 1", "content": "Content 1" }, { "label": "Item 2", "content": "Content 2" }]);

            expect(accordion._items.length).toBe(3);
            accordion.removeChild(accordion._items[0]);
            expect(accordion._items.length).toBe(2);

            removeAccordion(accordion);
        });
    });

    describe('Testing update() method ', function () {
        it('on empty accordion', function () {
            const accordion = createAccordion(0);

            expect(accordion._items.length).toBe(0);
            expect(function () { accordion.update(0, { "label": "Item 0", "content": "Content 0" }); }).toThrow();
            expect(accordion._items.length).toBe(0);

            removeAccordion(accordion);
        });

        it('on accordion with single item', function () {
            const accordion = createAccordion(0);

            accordion.insert(0, { "label": "Item 0", "content": "Content 0" });
            expect(accordion._items.length).toBe(1);
            accordion.update(0, { "label": "New Label", "content": "New content" });
            expect(accordion._items.length).toBe(1);

            removeAccordion(accordion);
        });

        it('on accordion with multiple items', function () {
            const accordion = createAccordion(0);

            accordion.insert(0, { "label": "Item 0", "content": "Content 0" });
            accordion.insert(1, { "label": "Item 1", "content": "Content 1" });
            accordion.insert(2, { "label": "Item 2", "content": "Content 2" });

            expect(accordion._items.length).toBe(3);
            accordion.update(2, { "label": "Updated latest item", "content": "Updated latest item" });
            expect(accordion._items.length).toBe(3);

            removeAccordion(accordion);
        });

        it(' without settings to throw an error', function () {
            const accordion = createAccordion(0);

            accordion.insert(0, { "label": "Item 0", "content": "Content 0" });
            accordion.insert(1, { "label": "Item 1", "content": "Content 1" });
            accordion.insert(2, { "label": "Item 2", "content": "Content 2" });

            expect(accordion._items.length).toBe(3);
            expect(function () { accordion.update(0); }).toThrow();
            expect(accordion._items.length).toBe(3);

            removeAccordion(accordion);
        });

        it(' with settings as empty array to set empty string for both label and content', function () {
            const accordion = createAccordion(0);

            accordion.insert(0, { "label": "Item 0", "content": "Content 0" });
            accordion.insert(1, { "label": "Item 1", "content": "Content 1" });
            accordion.insert(2, { "label": "Item 2", "content": "Content 2" });

            expect(accordion._items.length).toBe(3);
            expect(accordion._items[0].label).toBe('Item 0');
            expect(accordion._items[0].content).toBe('Content 0');
            accordion.update(0, []);

            expect(accordion._items.length).toBe(3);
            expect(accordion._items[0].label).toBe('');
            expect(accordion._items[0].content).toBe('');

            removeAccordion(accordion);
        });

        it(' with settings as array of objects to use the very first array item', function () {
            const accordion = createAccordion(0);

            accordion.insert(0, { "label": "Item 0", "content": "Content 0" });
            accordion.insert(1, { "label": "Item 1", "content": "Content 1" });
            accordion.insert(2, { "label": "Item 2", "content": "Content 2" });

            expect(accordion._items.length).toBe(3);
            expect(accordion._items[0].label).toBe('Item 0');
            expect(accordion._items[0].content).toBe('Content 0');
            accordion.update(0, [{ "label": "Item 0 New", "content": "Content 0 New" }, { "label": "Item 0", "content": "Content 0" }]);

            expect(accordion._items.length).toBe(3);
            expect(accordion._items[0].label).toBe('Item 0 New');
            expect(accordion._items[0].content).toBe('Content 0 New');

            removeAccordion(accordion);
        });

        it(' with settings as string', function () {
            const accordion = createAccordion(0);

            accordion.insert(0, { "label": "Item 0", "content": "Content 0" });
            accordion.insert(1, { "label": "Item 1", "content": "Content 1" });
            accordion.insert(2, { "label": "Item 2", "content": "Content 2" });

            expect(accordion._items.length).toBe(3);
            expect(accordion._items[0].label).toBe('Item 0');
            expect(accordion._items[0].content).toBe('Content 0');
            accordion.update(0, 'Content 0 New');

            expect(accordion._items.length).toBe(3);
            expect(accordion._items[0].label).toBe('Item 0');
            expect(accordion._items[0].content).toBe('Content 0 New');

            removeAccordion(accordion);
        });
    });
});
