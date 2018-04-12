var describe,
    it,
    expect,
    document,
    beforeAll,
    afterAll;

describe('Testing private functions of smart-list-box', function () {
    'use strict';
    let listBox,
        dataSource = ["item1", "item2", "item3", "item4", "item5", "item6", "item7", "item8", "item9"];

    beforeEach(function () {
        listBox = document.createElement('smart-list-box');
        document.body.appendChild(listBox);
    });

    afterEach(function () {
        document.body.removeChild(document.querySelector('smart-list-box'));
        expect(listBox).not.toBeInDOM();
    });

    describe('Testing _blurHandler() and _focusHandler()', function () {
        it('to set _focused correctly', function () {
            listBox._focusHandler();
            expect(listBox._focused).toBe(true);

            listBox._blurHandler();
            expect(listBox._focused).toBe(false);
        });
    });

    describe('Testing _mouseWheelHandler()', function () {
        it('on empty list box do not change item\s position', function () {
            listBox._mouseWheelHandler();
        });

        it('on list box with multiple items to change their position', function () {
            let event = { deltaY: 50, stopPropagation: function () { }, preventDefault: function () { } };

            listBox.style.height = '50px';
            listBox.dataSource = dataSource;

           // listBox._mouseWheelHandler(event);
        });
    });

    describe('Testing _horizontalScrollbarHandler()', function () {
        it('scrollbar moves the listbox', function () {
            let event = { deltaY: 50, stopPropagation: function () { }, preventDefault: function () { }, detail: { value: 20 } };

            listBox.dataSource = dataSource;
            listBox._horizontalScrollbarHandler(event);
        });
    });

    describe('Testing _downHandler()', function () {
        it('on disabled listbox to do nothing', function () {
            let event = { deltaY: 50, stopPropagation: function () { }, preventDefault: function () { }, detail: { value: 20 } };

            document.body.appendChild(listBox);
            listBox.dataSource = dataSource;
            listBox.disabled = true;
            listBox._downHandler(event);
        });

        it('on enabled listbox clicked item to be selected', function () {
            let event = { deltaY: 50, stopPropagation: function () { }, preventDefault: function () { }, detail: { value: 20 } };

            listBox.dataSource = dataSource;
            event.originalEvent = { target: listBox._items[0] }

            listBox._downHandler(event);

            expect(listBox.selectedIndexes).toEqual([0]);

            listBox.reorder = true;
            listBox._downHandler(event);
        });
    });

   describe('Testing _pointerUpHandler() event handler ', function () {
        it('on disabled listbox to do nothing', function () {
            let event = { deltaY: 50, stopPropagation: function () { }, preventDefault: function () { }, detail: { value: 20 } };

            listBox.dataSource = dataSource;
            event.target = listBox._items[0];
            listBox.disabled = true;
            listBox._pointerUpHandler(event);
        });

        it(' with target ', function () {
            let dataSource = ["Indian filter coffee", "Cortado", "Americano"],
                event = {},
                testedItem,
                items;

            listBox.style.width = '200px';
            listBox.style.height = '600px';
            listBox.dataSource = dataSource;

            items = listBox._items;
            testedItem = items[0];

            event.target = testedItem;
            listBox._pointerUpHandler(event);

            expect(listBox.selectedIndexes).toEqual([0]);
        });

        it(' when target is item\'s container ', function () {
            let dataSource = ["Indian filter coffee", "Cortado", "Americano"],
                event = {},
                testedItem,
                items;

            listBox.style.width = '200px';
            listBox.style.height = '600px';
            listBox.dataSource = dataSource;

            items = listBox._items;
            testedItem = items[0];

            event.target = testedItem.$.itemContainer;
            listBox._pointerUpHandler(event);

            expect(listBox.selectedIndexes).toEqual([0]);
        });
    });

   describe('Testing _upHandler() event handler ', function () { 
        it('on disabled listbox to do nothing', function () {
            let event = { deltaY: 50, stopPropagation: function () { }, preventDefault: function () { }, detail: { value: 20 } };

            listBox.dataSource = dataSource;
            event.target = listBox._items[0];
            listBox.disabled = true;

            listBox._upHandler(event);

        });

        it(' with target ', function () {
            let event = {},
                testedItem,
                items;

            listBox.style.width = '200px';
            listBox.style.height = '600px';
            listBox.dataSource = dataSource;

            items = listBox._items;
            testedItem = items[0];

            event = { target: testedItem, originalEvent: { target: testedItem }};
            listBox._upHandler(event);
        });
    });

     describe('Testing  _itemsContainerMoveHandler()', function () {
        it('on disabled listbox to do nothing', function () {
            let event = { originalEvent:{ stopPropagation: function () { }, preventDefault: function () { }} };

            listBox.dataSource = dataSource;
            Smart.ListBox.DragDrop.Dragging = true;
            listBox.reorder = true;
            listBox._itemsContainerMoveHandler(event);
        });
    });

    describe('Testing _keyDownHandler()', function () { 
        it('disabled listbox do not handle key events', function () {
            const event = { key: 'End' };

            listBox.dataSource = dataSource;
            listBox.disabled = true;
            listBox._keyDownHandler(event);

            expect(listBox._items[0].selected).toBe(true);
        });

        it('not disabled, not focused listbox do not handle key events', function () {
            const event = { key: 'End' };

            listBox.dataSource = dataSource;
            listBox._keyDownHandler(event);

            expect(listBox._items[0].selected).toBe(true);
        });

        it('not disabled, focused listbox handle key events', function () {
            const event = { key: 'End', stopPropagation: function () { }, preventDefault: function () { } };

            listBox.dataSource = dataSource;
            listBox._focusHandler();
            listBox._keyDownHandler(event);

            expect(listBox._items[listBox._items.length - 1].selected).toBe(true);
            listBox._blurHandler();
        });
    });

    describe('Testing _keyUpHandler()', function () {
        it('disabled listbox do not handle key events', function () {
            const event = { key: 'End', stopPropagation: function () { }, preventDefault: function () { } };

            listBox.dataSource = dataSource;
            listBox._focusHandler();
            listBox.disabled = true;
            listBox._keyUpHandler(event);

            expect(listBox._items[0].selected).toBe(true);
        });

        it('not disabled, not focused listbox do not handle key events', function () {
            const event = { key: 'End' };

            listBox.dataSource = dataSource;
            listBox._keyUpHandler(event);

            expect(listBox._items[0].selected).toBe(true);
        });
    });
});
