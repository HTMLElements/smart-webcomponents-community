var describe,
    it,
    expect,
    document,
    beforeAll,
    afterAll;

describe('Testing private functions of smart-list-box', function () {
    'use strict';

    describe('Testing _itemOnMouseEnter() event handler ', function () {
        it('about width and height', function () {
            let smartListBox = document.createElement('smart-list-box'),
                dataSource = ["Indian filter coffee", "Cortado", "Americano"],
                items,
                testedItem;

            smartListBox.style.width = '200px';
            smartListBox.style.height = '600px';
            smartListBox.dataSource = dataSource;
            document.body.appendChild(smartListBox);

            items = smartListBox._items;
            testedItem = items[0];

            testedItem._itemOnMouseEnter();
            expect(testedItem).toHaveClass('hovered');

            testedItem._itemOnMouseLeave();
            expect(testedItem).not.toHaveClass('hovered');
            testedItem.disabled = true;
            testedItem._itemOnMouseEnter();
            expect(testedItem).not.toHaveClass('hovered');

            document.body.removeChild(document.querySelector('smart-list-box'));
            expect(smartListBox).not.toBeInDOM();
        });
    });

    describe('Testing _itemOnMouseMove() event handler ', function () {
        it('on mouse move disabled item do not  change it\'s state ', function () {
            let smartListBox = document.createElement('smart-list-box'),
                dataSource = ["Indian filter coffee", "Cortado", "Americano"],
                event = { top: 20, left: 50 },
                items,
                testedItem;

            smartListBox.dataSource = dataSource;
            document.body.appendChild(smartListBox);

            testedItem = smartListBox._items[0];
            testedItem.disabled = true;
            testedItem._itemOnMouseMove(event);
            expect(testedItem).not.toHaveClass('smart-list-item-line-feedback');
            expect(testedItem).not.toHaveClass('smart-list-item-bottom-line-feedback');

            document.body.removeChild(document.querySelector('smart-list-box'));
            expect(smartListBox).not.toBeInDOM();
        });

       it('about width and height', function () {
            let smartListBox = document.createElement('smart-list-box'),
                dataSource = ["Indian filter coffee", "Cortado", "Americano"],
                event = {top:20, left:50},
                items,
                testedItem;

            smartListBox.style.width = '200px';
            smartListBox.style.height = '600px';
            smartListBox.dataSource = dataSource;
            smartListBox.reorder = true;
            smartListBox.allowDrop = true;
            document.body.appendChild(smartListBox);

            items = smartListBox._items;
            testedItem = items[0];
            testedItem._itemOnMouseEnter();

            Smart.ListBox.DragDrop.Dragging = true;

            testedItem._itemOnMouseMove(event);
            expect(testedItem).not.toHaveClass('smart-list-item-bottom-line-feedback');

            document.body.removeChild(document.querySelector('smart-list-box'));
            expect(smartListBox).not.toBeInDOM();
       });


       it('is dragged last item', function () {
           let smartListBox = document.createElement('smart-list-box'),
               dataSource = ["Indian filter coffee", "Cortado", "Americano"],
               event = { top: 150, left: 50, pageY: 50, pageX: 50 },
               items,
               testedItem;

           smartListBox.style.width = '200px';
           smartListBox.style.height = '600px';
           smartListBox.dataSource = dataSource;
           smartListBox.reorder = true;
           smartListBox.allowDrop = true;
           document.body.appendChild(smartListBox);

           items = smartListBox._items;
           testedItem = items[smartListBox._items.length-1];
           testedItem._itemOnMouseEnter();

           Smart.ListBox.DragDrop.Dragging = true;

           testedItem._itemOnMouseMove(event);
           expect(testedItem).toHaveClass('smart-list-item-bottom-line-feedback');

           event.pageY = 250;
           testedItem._itemOnMouseMove(event);
           expect(testedItem).not.toHaveClass('smart-list-item-line-feedback');

           document.body.removeChild(document.querySelector('smart-list-box'));
           expect(smartListBox).not.toBeInDOM();
       });
    });

    describe('Testing _itemOnMouseLeave() event handler ', function () {
        it('about width and height', function () {
            let smartListBox = document.createElement('smart-list-box'),
                dataSource = ["Indian filter coffee", "Cortado", "Americano"],
                testedItem,
                items;

            smartListBox.style.width = '200px';
            smartListBox.style.height = '600px';
            smartListBox.dataSource = dataSource;
            document.body.appendChild(smartListBox);

            items = smartListBox._items;
            testedItem = items[0];
            testedItem._itemOnMouseLeave();

            expect(testedItem).not.toHaveClass('hovered');

            document.body.removeChild(document.querySelector('smart-list-box'));
            expect(smartListBox).not.toBeInDOM();
        });

        it('on disabled item', function () {
            let smartListBox = document.createElement('smart-list-box'),
                dataSource = ["Indian filter coffee", "Cortado", "Americano"],
                testedItem,
                items;

            smartListBox.style.width = '200px';
            smartListBox.style.height = '600px';
            smartListBox.dataSource = dataSource;
            document.body.appendChild(smartListBox);

            items = smartListBox._items;
            testedItem = items[0];
            testedItem.disabled = true;
            testedItem._itemOnMouseLeave();

            expect(testedItem).not.toHaveClass('hovered');

            testedItem.label = 'Item 1 new label';
            expect(testedItem.innerText.trim()).toBe('Item 1 new label');

            document.body.removeChild(document.querySelector('smart-list-box'));
            expect(smartListBox).not.toBeInDOM();
        });
    });
});
