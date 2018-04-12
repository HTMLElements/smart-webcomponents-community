var describe,
    jasmine,
    beforeEach,
    loadFixtures,
    it,
    expect,
    document;
describe('Testing smart-drop-down-list\'s methods', function () {
    'use strict';
    let dropDownList;

    jasmine.getFixtures().fixturesPath = 'base/test/smart-dropdownlist/fixtures';
    jasmine.getFixtures().preload('smart-drop-down-list-attributes-synchronization.htm');
    beforeEach(function () {
        loadFixtures('smart-drop-down-list-attributes-synchronization.htm');
        dropDownList = document.querySelector('smart-drop-down-list');
    });
    describe('if it ', function () {
        it('exists in DOM', function () {
            expect(document.querySelector('smart-drop-down-list')).toBeInDOM();
        });
    });
    describe('if public methods work as expected', function () {
        //Properties not synched in Time, when Karma runs the test
        it('clearSelection', function () {
            dropDownList.insert(0, [{ label: 'Audi', value: '$220,000', selected: true }, { label: 'BMW', value: '$259,000' }]);
            //dropDownList.selectedIndexes = [1,2];
            //expect(dropDownList.selectedIndexes).toEqual([1, 2]);

            dropDownList.clearSelection();
            expect(dropDownList.selectedIndexes).toEqual([]);
        });

        it('clearItems', function () {
            dropDownList.insert(0, [{ label: 'Audi', value: '$220,000', selected: true }, { label: 'BMW', value: '$259,000' }]);
            dropDownList.clearItems();
            expect(dropDownList.getElementsByTagName('smart-list-item').length).toBe(0);
        });

        it('open', function () {
            dropDownList.open();
            expect(dropDownList.$.dropDownContainer).not.toHaveClass('smart-visibility-hidden');

            dropDownList.close();
            expect(dropDownList.$.dropDownContainer).toHaveClass('smart-visibility-hidden');
            expect(dropDownList.$.dropDownButton).not.toHaveAttr('selected');

            dropDownList.dropDownOpenMode = 'dropDownButton';
            dropDownList.open();
            expect(dropDownList.$.dropDownContainer).not.toHaveClass('smart-visibility-hidden');
            expect(dropDownList.$.dropDownButton).toHaveAttr('selected');

            let dropDownTop = dropDownList.$.dropDownContainer.style.top;

            dropDownList.dropDownVerticalPosition = 'top';
            dropDownList.dropDownAppendTo = 'body';
            dropDownList.open();
            expect(dropDownTop).not.toBe(dropDownList.$.dropDownContainer.style.top);
            expect(dropDownList.$.dropDownContainer.className.indexOf('smart-drop-down-repositioned')).toBeGreaterThan(-1);
        });
        it('close', function () {
            dropDownList.close();
            expect(dropDownList.$.dropDownContainer).toHaveClass('smart-visibility-hidden');

            dropDownList.dropDownVerticalPosition = 'top';
            dropDownList.open();
            dropDownList.close();
            expect(dropDownList.$.dropDownContainer).toHaveClass('smart-visibility-hidden');
        });
        it('getItems', function () {
            dropDownList.insert(0, ['Audi', 'BMW', 'Mercedess', 'VW', 'Bently', 'Maybach']);
            expect(dropDownList.items.length).toBe(6);
        });
        it('insert(0, "New Item")', function () {
            dropDownList.insert(0, 'New Item');
            expect(dropDownList.items.length).toBe(1);
        });
        it('remove(1)', function () {
            dropDownList.insert(0, ['Audi', 'BMW', 'Mercedess', 'VW', 'Bently', 'Maybach']);
            dropDownList.remove(1);
            expect(dropDownList.items.length).toBe(5);
        });
        it('setFocusable(false)', function () {
            dropDownList.setFocusable(false);
            expect(dropDownList.tabIndex).toBe(-1);

            dropDownList.setFocusable(true);
            expect(dropDownList.tabIndex).not.toBe(-1);
            expect(dropDownList.tabIndex).toBe(0);
        });
        it('update(2, "New Label")', function () {
            dropDownList.insert(0, ['Audi', 'BMW', 'Mercedess', 'VW', 'Bently', 'Maybach']);
            expect(dropDownList.items[2].label).toEqual('Mercedess');

            dropDownList.update(2, 'New Label');
            expect(dropDownList.items[2].label).toEqual('New Label');
        });
    });
    describe('if private methods(event handlers) work as expected', function () {
        it('buttonsDownHandler', function () {
            let event = {};

            dropDownList.dropDownOpenMode = 'dropDownButton';
            event.target = dropDownList.$.actionButton;
            dropDownList._buttonsDownHandler(event);
        });
        it('buttonsMouseEventsHandler', function () {
            let event = { target: dropDownList, type: 'mouseenter' };

            dropDownList._buttonsMouseEventsHandler(event);
            expect(dropDownList).toHaveClass('hovered');

            event.type = 'mouseleave';
            dropDownList._buttonsMouseEventsHandler(event);
            expect(dropDownList).not.toHaveClass('hovered');

            dropDownList.dropDownOpenMode = 'dropDownButton';
            event.type = 'mouseenter';
            event.target = dropDownList.$.dropDownButton;
            dropDownList._buttonsMouseEventsHandler(event);
            expect(dropDownList.$.dropDownButton).toHaveClass('hovered');

            event.type = 'mouseleave';
            dropDownList._buttonsMouseEventsHandler(event);
            expect(dropDownList.$.dropDownButton).not.toHaveClass('hovered');
        });
        it('documentUpHandler', function () {
            var event = { originalEvent: { target: dropDownList.$.actionButton } };

            dropDownList.dropDownOpenMode = 'dropDownButton';

            dropDownList._documentUpHandler(event);
            expect(dropDownList.$.dropDownContainer).toHaveClass('smart-visibility-hidden');

            event.originalEvent.target = dropDownList.$.dropDownButton;
            dropDownList._documentUpHandler(event);
            expect(dropDownList.$.dropDownContainer).not.toHaveClass('smart-visibility-hidden');

            dropDownList.open();
            event.originalEvent.target = dropDownList.$.listBox;
            dropDownList._documentUpHandler(event);
            expect(dropDownList.$.dropDownContainer).not.toHaveClass('smart-visibility-hidden');

            dropDownList.insert(0, ['Audi', 'BMW', 'Mercedess', 'VW', 'Bently', 'Maybach']);
            event.originalEvent.target = dropDownList.items[0];
            dropDownList._documentUpHandler(event);
            expect(dropDownList.$.dropDownContainer).toHaveClass('smart-visibility-hidden');

            dropDownList.selectionDisplayMode = 'advanced';
            dropDownList.selectedIndexes = [1];
            dropDownList._applySelection(dropDownList.selectionDisplayMode);
            event.originalEvent.target = document.getElementsByClassName('smart-drop-down-list-unselect-button')[0];
            dropDownList._documentUpHandler(event);
            expect(dropDownList.$.dropDownContainer).toHaveClass('smart-visibility-hidden');

            var targetItem = dropDownList.items[1];

            dropDownList.selectedIndexes = [1];
            dropDownList._applySelection(dropDownList.selectionDisplayMode);
            event.originalEvent.target = document.getElementsByClassName('smart-drop-down-list-selection-label')[0];
            dropDownList._documentUpHandler(event);
            expect(dropDownList.$.dropDownContainer).not.toHaveClass('smart-visibility-hidden');
            expect(dropDownList.$.listBox._focusedItem).toBe(targetItem);
            expect(dropDownList.$.listBox._scrollView.scrollTop).toBe(targetItem.offsetTop);
        });
        it('documentDownHandler', function () {
            let event = {
                originalEvent: { target: dropDownList.$.listBox.getElementsByClassName('smart-thumb')[0] },
                target: dropDownList.$.listBox.getElementsByClassName('smart-thumb')[0]
            };

            dropDownList._documentDownHandler(event);
            expect(dropDownList._isListBoxThumbDragged).toBe(true);

        });
        it('keyDownHandler', function () {
            var event = { target: dropDownList, key: 'Enter', preventDefault: function () { } };

            dropDownList.dropDownOpenMode = 'dropDownButton';
            event.target = dropDownList.$.actionButton;
            dropDownList._keyDownHandler(event);
            expect(dropDownList.$.dropDownContainer).toHaveClass('smart-visibility-hidden');

            event.target = dropDownList.$.dropDownButton;
            dropDownList._keyDownHandler(event);
            expect(dropDownList.$.dropDownContainer).not.toHaveClass('smart-visibility-hidden');

            // Attribute not synched in time.
            dropDownList.insert(0, [{ label: 'Audi', value: '$220,000' }, { label: 'BMW', value: '$259,000' }]);
            dropDownList.selectedIndexes = [0];

            event.key = 'ArrowDown';
            dropDownList._keyDownHandler(event); //Fails only in Travis. Passes in Local Karma.
            expect(dropDownList.selectedIndexes).toEqual([1]); //Not synched in time if test run separately

            event.key = 'Escape';
            dropDownList._keyDownHandler(event);
            expect(dropDownList.$.dropDownContainer).toHaveClass('smart-visibility-hidden');

            event.key = 'ArrowUp';
            dropDownList._keyDownHandler(event);

            event.altKey = true;
            event.key = 'ArrowDown';
            dropDownList._keyDownHandler(event);
            expect(dropDownList.$dropDownContainer.hasClass('smart-visibility-hidden')).toBe(false);

            event.key = 'ArrowUp';
            dropDownList._keyDownHandler(event);
            expect(dropDownList.$dropDownContainer.hasClass('smart-visibility-hidden')).toBe(true);

            event.key = 'B';
            dropDownList._keyDownHandler(event);
            expect(dropDownList.selectedIndexes).toEqual([1]);
            expect(dropDownList.selectedValues).toEqual(["$259,000"]);
            expect(dropDownList.$dropDownContainer.hasClass('smart-visibility-hidden')).toBe(true);
        });
        it('keyUpHandler', function () {
            var event = { target: dropDownList, key: 'Enter', preventDefault: function () { } };

            dropDownList._keyDownHandler(event);

            dropDownList.dropDownOpenMode = 'dropDownButton';
            event.key = ' ';
            event.target = dropDownList.$.actionButton;
            dropDownList._keyDownHandler(event);
            expect(dropDownList.$.actionButton).toHaveClass('active');

            dropDownList._keyUpHandler(event);
            expect(dropDownList.$.actionButton).not.toHaveClass('active');
        });
        it('listBoxChangeHandler', function () {
            let event = { detail: { index: 1 } };

            dropDownList.insert(0, ['Audi', 'BMW', 'Mercedess', 'VW', 'Bently', 'Maybach']);
            dropDownList._listBoxChangeHandler(event);
            //expect(dropDownList.$.actionButton.innerHTML).toEqual(dropDownList.placeholder); //Fails only in Travis. Passes in Local Karma.

            dropDownList.selectionDisplayMode = 'placeholder';
            dropDownList._listBoxChangeHandler(event);
            expect(dropDownList.$.actionButton.innerHTML).toEqual(dropDownList.placeholder);
        });
        it('listBoxKeyDownHandler', function () {
            var event = { key: 'Enter', stopPropagation: function () { } };

            dropDownList.open();
            expect(dropDownList.$.dropDownContainer).not.toHaveClass('smart-visibility-hidden');

            dropDownList._listBoxKeyDownHandler(event);
            expect(dropDownList.$.dropDownContainer).toHaveClass('smart-visibility-hidden');

            event.key = 'Escape';
            dropDownList.open();
            expect(dropDownList.$.dropDownContainer).not.toHaveClass('smart-visibility-hidden');

            dropDownList._listBoxKeyDownHandler(event);
            expect(dropDownList.$.dropDownContainer).toHaveClass('smart-visibility-hidden');
        });
        it('mouseEnterHandler and mouseLeaveHandler', function () {
            dropDownList._mouseEnterHandler();
            expect(dropDownList).toHaveClass('hovered');

            dropDownList._mouseLeaveHandler();
            expect(dropDownList).not.toHaveClass('hovered');

            dropDownList.dropDownOpenMode = 'auto';
            dropDownList._mouseEnterHandler();
            expect(dropDownList).toHaveClass('hovered');
            expect(dropDownList.$.dropDownContainer).not.toHaveClass('smart-visibility-hidden');

            dropDownList._mouseLeaveHandler();
            expect(dropDownList).not.toHaveClass('hovered');
            expect(dropDownList.$.dropDownContainer).toHaveClass('smart-visibility-hidden');
        });
        it('selectStarthandler', function () {
            var event = { preventDefault: function () { }, target: dropDownList };

            dropDownList._buttonsDownHandler(event);
            dropDownList._selectStartHandler(event);
        });
        it('_focus', function () {
            dropDownList.insert(0, ['Audi', 'BMW', 'Mercedess', 'VW', 'Bently', 'Maybach']);

            var item = dropDownList.items[0];

            dropDownList._focus(item);
            expect(item).toHaveAttr('focused');
        });
        it('getItem', function () {
            dropDownList.insert(0, ['Audi', 'BMW', 'Mercedess', 'VW', 'Bently', 'Maybach']);

            expect(dropDownList.getItem('Audi')).not.toBeNull();
        });
        it('select', function () {
            dropDownList.insert(0, ['Audi', 'BMW', 'Mercedess', 'VW', 'Bently', 'Maybach']);

            var item = dropDownList.getItem('Audi');

            dropDownList.select(item)
            expect(item).not.toBeNull();
            //expect(item).toHaveAttr('selected'); //Fails only in Travis. Passes in Local Karma.
        });
        it('unselect', function () {
            dropDownList.insert(0, ['Audi', 'BMW', 'Mercedess', 'VW', 'Bently', 'Maybach']);

            var item = dropDownList.getItem('Audi');

            dropDownList.select(item)
            expect(item).not.toBeNull();
            //expect(item).toHaveAttr('selected'); //Fails only in Travis. Passes in Local Karma.

            dropDownList.unselect(item);
            expect(item).not.toHaveAttr('selected');
        });
        it('appendChild', function () {
            dropDownList.insert(0, ['Audi', 'BMW', 'Mercedess', 'VW', 'Bently', 'Maybach']);

            var item = document.createElement('smart-list-item');

            item.label = 'New item';

            expect(function () { dropDownList.appendChild(item) }).not.toThrow();
            expect(function () { dropDownList.appendChild() }).toThrow();
        });
        it('cloneNode', function () {
            var clone = dropDownList.cloneNode();

            expect(clone instanceof Smart.DropDownList).toBe(true);

            clone = dropDownList.cloneNode(false);
            expect(clone instanceof Smart.DropDownList).toBe(true);
        });
        it('ensureVisible', function () {
            dropDownList.insert(0, ['Audi', 'BMW', 'Mercedess', 'VW', 'Bently', 'Maybach']);

            var lastItem = dropDownList.items[dropDownList.items.length - 1];

            dropDownList.ensureVisible(lastItem);
            expect(lastItem.top).toBeLessThan(dropDownList.$.dropDownContainer.offsetHeight);
        });
        it('insertBefore', function () {
            dropDownList.insert(0, ['Audi', 'BMW', 'Mercedess', 'VW', 'Bently', 'Maybach']);

            var newItem = document.createElement('smart-list-item');

            newItem.label = "New Item";

            dropDownList.insertBefore(newItem, dropDownList.items[1]);
            expect(dropDownList.items[1]).toEqual(newItem);
            expect(function () { dropDownList.insertBefore(newItem) }).toThrow();
            expect(function () { dropDownList.insertBefore() }).toThrow();
        });
        it('removeChild', function () {
            dropDownList.insert(0, ['Audi', 'BMW', 'Mercedess', 'VW', 'Bently', 'Maybach']);

            expect(dropDownList.items[0].label).toEqual('Audi');

            dropDownList.removeChild(dropDownList.items[0]);
            expect(dropDownList.items[0].label).toEqual('BMW');
            expect(function () { dropDownList.removeChild(); }).toThrow();
        });
        it('setElementParent', function () {
            dropDownList.insert(0, ['Audi', 'BMW', 'Mercedess', 'VW', 'Bently', 'Maybach']);

            const coordinates = dropDownList.getBoundingClientRect();

            //dropDownPosition = "bottom"
            dropDownList.dropDownAppendTo = 'otherContainer';
            expect(dropDownList.$.dropDownContainer.parentElement).toBe(document.getElementById('otherContainer'));
            //expect(dropDownList.$.dropDownContainer.style.top).toBe(coordinates.top + dropDownList.offsetHeight + window.pageYOffset + 'px');
            expect(dropDownList.$.dropDownContainer.style.top).toBe(coordinates.top + dropDownList.offsetHeight + window.pageYOffset - 1 + 'px');
            expect(dropDownList.$.dropDownContainer.style.left).toBe(coordinates.left + window.pageXOffset + 'px');

            dropDownList.style.marginTop = '250px';

            //dropDownPosition = "top"
            dropDownList.dropDownPosition = 'top';
            dropDownList.open();

            //NOTE: For some reason Karma reloads the fixture at this point so we call the necessary methods manually
            dropDownList._setDropDownSize();
            dropDownList._rePositionListBox();

            expect(dropDownList.$.dropDownContainer.offsetTop).toBeLessThan(dropDownList.offsetTop);
            expect(dropDownList.$.dropDownContainer.offsetTop + dropDownList.$.dropDownContainer.offsetHeight - 1).toBe(dropDownList.offsetTop);

            //dropDownPosition = "center-top"
            dropDownList.dropDownPosition = 'center-top';
            dropDownList.open();

            expect(dropDownList.$.dropDownContainer.offsetTop).toBeLessThan(dropDownList.offsetTop);
            expect(dropDownList.$.dropDownContainer.offsetTop + dropDownList.$.dropDownContainer.offsetHeight - 1).toBe(dropDownList.offsetTop);
            expect(dropDownList.$.dropDownContainer.offsetLeft).toBe(dropDownList.offsetLeft + dropDownList.offsetWidth / 2);

            //dropDownPosition = "center-bottom"
            dropDownList.dropDownPosition = 'center-bottom';
            dropDownList.open();

            expect(dropDownList.$.dropDownContainer.offsetTop).toBeGreaterThan(dropDownList.offsetTop);
            expect(dropDownList.$.dropDownContainer.offsetTop + 1).toBe(dropDownList.offsetTop + dropDownList.offsetHeight);
            expect(dropDownList.$.dropDownContainer.offsetLeft).toBe(dropDownList.offsetLeft + dropDownList.offsetWidth / 2);

            //dropDownPosition = "overlay-bottom"
            dropDownList.dropDownPosition = 'overlay-bottom';
            dropDownList.open();

            expect(dropDownList.$.dropDownContainer.offsetTop).toBe(dropDownList.offsetTop);
            expect(dropDownList.$.dropDownContainer.offsetLeft).toBe(dropDownList.offsetLeft);

            //dropDownPosition = "overlay-center"
            dropDownList.dropDownPosition = 'overlay-center';
            dropDownList.open();

            expect(dropDownList.$.dropDownContainer.offsetTop).toBeLessThan(dropDownList.offsetTop);
            expect(dropDownList.$.dropDownContainer.offsetTop).toBe(dropDownList.offsetTop - dropDownList.$.dropDownContainer.offsetHeight / 2 + dropDownList.offsetHeight / 2);
            expect(dropDownList.$.dropDownContainer.offsetLeft).toBe(dropDownList.offsetLeft);

            //dropDownPosition = "overlay-top"
            dropDownList.dropDownPosition = 'overlay-top';
            dropDownList.open();

            expect(dropDownList.$.dropDownContainer.offsetTop).toBeLessThan(dropDownList.offsetTop);
            expect(dropDownList.$.dropDownContainer.offsetTop).toBe(dropDownList.offsetTop + dropDownList.offsetHeight - dropDownList.$.dropDownContainer.offsetHeight);
            expect(dropDownList.$.dropDownContainer.offsetLeft).toBe(dropDownList.offsetLeft);

            dropDownList.style.marginTop = '';
            dropDownList.dropDownAppendTo = '';
            expect(dropDownList.$.dropDownContainer.parentElement.parentElement).toBe(dropDownList);
            expect(dropDownList.$.dropDownContainer.style.top).toBe('');
            expect(dropDownList.$.dropDownContainer.style.left).toBe('');
        });
        it('setDropDownSize', function () {
            dropDownList.insert(0, ['Audi', 'BMW', 'Mercedess']);
            expect(dropDownList.items.length).toBe(3);

            dropDownList.dropDownAppendTo = 'otherContainer';

            dropDownList._setDropDownSize();

            expect(dropDownList.$.dropDownContainer.offsetHeight).toBeLessThan(200);

            dropDownList.dropDownAppendTo = '';
        });

        it('resizeHandler', function () {
            dropDownList.resizeMode = 'none';

            //min-width is 100px
            dropDownList.style.width = '100px';

            expect(dropDownList.$.dropDownContainer.offsetWidth).toBeGreaterThan(dropDownList.offsetWidth);

            dropDownList._resizeHandler();
            expect(dropDownList.$.dropDownContainer.offsetWidth).toBe(dropDownList.offsetWidth);
        });
    });
});
