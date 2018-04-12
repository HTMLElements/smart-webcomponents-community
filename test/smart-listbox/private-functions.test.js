/* Latest Firefox 59.0.2 lifecycle problem. Element is not completed when private methods are being called. */

// var describe,
//     it,
//     expect,
//     document,
//     beforeAll,
//     afterAll;

// describe('Testing private functions of smart-list-box', function () {
//     'use strict';

//     describe('Testing ensureVisible()', function () {
//         it(' ', function () {
//             let smartListBox = document.createElement('smart-list-box'),
//                 dataSource = ["Indian filter coffee", "Cortado", "Americano"],
//                 event = { pageX: 20, pageY: 40 },
//                 items;

//             smartListBox.style.width = '200px';
//             smartListBox.style.height = '600px';
//             smartListBox.dataSource = dataSource;
//             document.body.appendChild(smartListBox);

//             items = smartListBox._items;
//             smartListBox.ensureVisible(items[0]);

//             document.body.removeChild(document.querySelector('smart-list-box'));
//             expect(smartListBox).not.toBeInDOM();
//         });
//     });

//     describe('Testing _applyTemplate() functionality ', function () {
//         it(' ', function () {
//             let smartListBox = document.createElement('smart-list-box'),
//                 itemTemplate1 = document.createElement('template'),
//                 itemTemplate2 = document.createElement('template'),
//                 dataSource = ["Indian filter coffee", "Cortado", "Americano"],
//                 event = { pageX: 20, pageY: 40 },
//                 items;

//             itemTemplate1.setAttribute('id', 'itemTemplate1');
//             itemTemplate2.setAttribute('id', 'itemTemplate2');
//             itemTemplate2.innerHTML = '<span class="glyphicon glyphicon-ok"></span><span style="margin-left:5px;">{{label}}</span>';
//             document.body.appendChild(itemTemplate1);
//             document.body.appendChild(itemTemplate2);

//             smartListBox.style.width = '200px';
//             smartListBox.style.height = '600px';
//             smartListBox.dataSource = dataSource;
//             document.body.appendChild(smartListBox);

//             // without template
//             items = smartListBox._items;
//             smartListBox._applyTemplate(items[0]);

//             // with an empty template
//             smartListBox.itemTemplate = 'itemTemplate1';
//             smartListBox._applyTemplate(items[0]);

//             // with template
//             smartListBox.itemTemplate = 'itemTemplate2';
//             smartListBox._applyTemplate(items[0]);

//             document.body.removeChild(document.querySelector('smart-list-box'));
//             expect(smartListBox).not.toBeInDOM();
//         });
//     });

//     describe('Testing _applyIncrementalSearch() functionality ', function () {
//         it(' ', function () {
//             let smartListBox = document.createElement('smart-list-box'),
//                 dataSource = ["Indian filter coffee", "Cortado", "Americano"],
//                 event = { pageX: 20, pageY: 40 },
//                 items;

//             smartListBox.style.width = '200px';
//             smartListBox.style.height = '600px';
//             smartListBox.dataSource = dataSource;
//             document.body.appendChild(smartListBox);

//             smartListBox._applyIncrementalSearch('A');

//             document.body.removeChild(document.querySelector('smart-list-box'));
//             expect(smartListBox).not.toBeInDOM();
//         });
//     });

//     describe('Testing _filterItems() functionality ', function () {
//         it(' ', function () {
//             let smartListBox = document.createElement('smart-list-box'),
//                 dataSource = ["Indian filter coffee", "Cortado", "Americano"],
//                 event = { pageX: 20, pageY: 40 },
//                 items;

//             smartListBox.style.width = '200px';
//             smartListBox.style.height = '600px';
//             smartListBox.dataSource = dataSource;
//             document.body.appendChild(smartListBox);

//             // without groups
//             smartListBox._filterItems();

//             // without groups
//             smartListBox.grouped = true;
//             smartListBox._filterItems();

//             document.body.removeChild(document.querySelector('smart-list-box'));
//             expect(smartListBox).not.toBeInDOM();
//         });
//     });

//     describe('Testing _getPreviousItem() functionality ', function () {
//         it(' ', function () {
//             let smartListBox = document.createElement('smart-list-box'),
//                 dataSource = ["Indian filter coffee", "Cortado", "Americano"],
//                 event = { pageX: 20, pageY: 40 },
//                 items;

//             smartListBox.style.width = '200px';
//             smartListBox.style.height = '600px';
//             smartListBox.dataSource = dataSource;
//             document.body.appendChild(smartListBox);

//             let previousItem = smartListBox._getPreviousItem(1);

//             document.body.removeChild(document.querySelector('smart-list-box'));
//             expect(smartListBox).not.toBeInDOM();
//         });
//     });

//     describe('Testing _unsort() functionality ', function () {
//         it(' ', function () {
//             let smartListBox = document.createElement('smart-list-box'),
//                 dataSource = ["Indian filter coffee", "Cortado", "Americano"],
//                 event = { pageX: 20, pageY: 40 },
//                 items;

//             smartListBox.style.width = '200px';
//             smartListBox.style.height = '600px';
//             smartListBox.dataSource = dataSource;
//             document.body.appendChild(smartListBox);

//             // without groups
//             smartListBox._unsort();

//             // without groups
//             smartListBox.grouped = true;
//             smartListBox._unsort();

//             document.body.removeChild(document.querySelector('smart-list-box'));
//             expect(smartListBox).not.toBeInDOM();
//         });
//     });

//     describe('Testing removeChild() functionality ', function () {
//         it('about width and height', function () {
//             let smartListBox = document.createElement('smart-list-box'),
//                 dataSource = ["Indian filter coffee", "Cortado", "Americano"],
//                 event = { pageX: 20, pageY: 40 },
//                 items;

//             smartListBox.style.width = '200px';
//             smartListBox.style.height = '600px';
//             smartListBox.dataSource = dataSource;
//             document.body.appendChild(smartListBox);

//             smartListBox.grouped = true;
//             items = smartListBox._items;
//             let parentGroup = items[0].parentElement.parentElement.parentElement;
//             parentGroup.removeChild(items[0]);

//             document.body.removeChild(document.querySelector('smart-list-box'));
//             expect(smartListBox).not.toBeInDOM();
//         });
//     });

//     describe('Testing appendChild() functionality ', function () {
//         it(' ', function () {
//             let smartListBox = document.createElement('smart-list-box'),
//                 newNode = document.createElement('div'),
//                 dataSource = ["Indian filter coffee", "Cortado", "Americano"],
//                 event = { pageX: 20, pageY: 40 },
//                 items;

//             smartListBox.style.width = '200px';
//             smartListBox.style.height = '600px';
//             smartListBox.dataSource = dataSource;
//             document.body.appendChild(smartListBox);

//             newNode.innerHTML='new node';

//             items = smartListBox._items;

//             items[0].appendChild(newNode);
//             items[0].insertBefore(newNode, newNode);
//             items[0].removeChild(newNode);

//             document.body.removeChild(document.querySelector('smart-list-box'));
//             expect(smartListBox).not.toBeInDOM();
//         });
//     });

//     describe('Testing _filterItems()', function () {
//         it('with all search modes', function () {
//             let smartListBox = document.createElement('smart-list-box'),
//                 dataSource = ["Indian filter coffee", "Cortado", "Americano"],
//                 items;

//             document.body.appendChild(smartListBox);

//             smartListBox.dataSource = dataSource;
//             smartListBox.filterable = true;
//             smartListBox.$.filterInput.value = 'Co';
//             smartListBox._filterItems();

//             expect(smartListBox.items.length).toBe(1);
//             expect(smartListBox.items[0].label).toEqual('Cortado');

//             smartListBox.filterMode = 'startsWith';
//             smartListBox._filterItems();

//             expect(smartListBox.items.length).toBe(1);
//             expect(smartListBox.items[0].label).toEqual('Cortado');

//             smartListBox.filterMode = 'doesNotContain';
//             smartListBox._filterItems();

//             expect(smartListBox.items.length).toBe(2);
//             expect(smartListBox.items[0].label).toEqual('Indian filter coffee');

//             smartListBox.filterMode = 'contains';
//             smartListBox._filterItems();

//             expect(smartListBox.items.length).toBe(1);
//             expect(smartListBox.items[0].label).toEqual('Cortado');


//             smartListBox.filterMode = 'containsIgnoreCase';
//             smartListBox._filterItems();

//             expect(smartListBox.items.length).toBe(2);
//             expect(smartListBox.items[0].label).toEqual('Indian filter coffee');

//             smartListBox.filterMode = 'equals';
//             smartListBox.$.filterInput.value = 'americano';
//             smartListBox._filterItems();

//             expect(smartListBox.items.length).toBe(0);

//             smartListBox.$.filterInput.value = 'Cortado';
//             smartListBox._filterItems();

//             expect(smartListBox.items.length).toBe(1);
//             expect(smartListBox.items[0].label).toEqual('Cortado');

//             smartListBox.filterMode = 'equalsIgnoreCase';
//             smartListBox.$.filterInput.value = 'Americano';
//             smartListBox._filterItems();

//             expect(smartListBox.items.length).toBe(1);
//             expect(smartListBox.items[0].label).toEqual('Americano');

//             smartListBox.filterMode = 'endsWith';
//             smartListBox.$.filterInput.value = 'O';
//             smartListBox._filterItems();

//             expect(smartListBox.items.length).toBe(0);

//             smartListBox.filterMode = 'endsWith';
//             smartListBox.$.filterInput.value = 'no';
//             smartListBox._filterItems();

//             expect(smartListBox.items.length).toBe(1);
//             expect(smartListBox.items[0].label).toEqual('Americano');

//             smartListBox.filterMode = 'endsWithIgnoreCase';
//             smartListBox.$.filterInput.value = 'o';
//             smartListBox._filterItems();

//             expect(smartListBox.items.length).toBe(2);
//             expect(smartListBox.items[0].label).toEqual('Cortado');

//             document.body.removeChild(document.querySelector('smart-list-box'));
//             expect(smartListBox).not.toBeInDOM();
//         });
//     });
//     describe('Testing itemTemplate', function () {
//         it('when invalid template is passed', function () {
//             let smartListBox = document.createElement('smart-list-box'),
//                 dataSource = ["Indian filter coffee", "Cortado", "Americano"],
//                 items;

//             document.body.appendChild(smartListBox);

//             smartListBox.itemTemplate = '';

//             expect(smartListBox.itemTemplate).toBe('');

//             let invalidTemplate = document.createElement('div');

//             invalidTemplate.id = 'notATemplate';
//             document.body.appendChild(invalidTemplate);

//             expect(function () { smartListBox.itemTemplate = 'notATemplate'; }).toThrow();

//             document.body.removeChild(document.querySelector('smart-list-box'));
//             expect(smartListBox).not.toBeInDOM();
//         });
//     });
//     describe('Testing _keyDownHandler()', function () {
//         it('with sorted items', function () {
//             let smartListBox = document.createElement('smart-list-box'),
//                 dataSource = ["Indian filter coffee", "Cortado", "Americano"],
//                 items,
//                 event = { key: 'ArrowLeft', stopPropagation: function () { }, preventDefault: function () { } };

//             document.body.appendChild(smartListBox);

//             smartListBox.dataSource = dataSource;
//             smartListBox._keyDownHandler(event);

//             smartListBox.filterable = true;
//             smartListBox.$.filterInput.focus();
//             smartListBox._keyDownHandler(event);

//             expect(smartListBox.filterable).toBe(true);

//             smartListBox.filterable = false;
//             smartListBox._focusHandler();
//             smartListBox.$.filterInput.blur()
//             smartListBox.selectionMode = 'none';
//             smartListBox._keyDownHandler(event);

//             expect(smartListBox.filterable).toBe(false);

//             smartListBox.filterable = true;
//             smartListBox.selectionMode = 'oneOrManyExtended';
//             smartListBox._keyDownHandler(event);

//             expect(smartListBox.filterable).toBe(true);

//             event.key = 'ArrowUp';
//             smartListBox._keyDownHandler(event);

//             event.key = 'asdasdasd';
//             smartListBox._keyDownHandler(event);

//             event.key = ' ';
//             smartListBox._focusedItem = undefined;
//             smartListBox._keyDownHandler(event);

//             expect(smartListBox.items[0].selected).toBe(true);
//             expect(smartListBox.selectedIndexes).toEqual([0]);

//             smartListBox.selectionMode = 'zeroOrMany';
//             smartListBox._focusedItem = undefined;
//             smartListBox._keyDownHandler(event);

//             expect(smartListBox.items[0].focused).toBe(true);

//             smartListBox.selectionMode = 'one';
//             event.key = ' ';
//             smartListBox._keyDownHandler(event);

//             smartListBox.filterable = false;
//             smartListBox.selectionMode = 'one';
//             event.key = 'ArrowDown';
//             smartListBox._keyDownHandler(event);

//             expect(smartListBox.selectedIndexes.length).toBe(1);

//             smartListBox.selectionMode = 'oneOrMany';
//             event.key = 'Shift';
//             smartListBox._keyDownHandler(event);

//             event.key = 'ArrowDown';
//             smartListBox._keyDownHandler(event);

//             expect(smartListBox.selectedIndexes.length).toBe(1);

//             smartListBox.selectionMode = 'oneOrManyExtended';
//             event.key = ' ';
//             smartListBox._keyDownHandler(event);

//             document.body.removeChild(document.querySelector('smart-list-box'));
//             expect(smartListBox).not.toBeInDOM();
//         });
//     });
//     describe('Testing _keyUpHandler', function () {
//         it('when different input is entered', function () {
//             let smartListBox = document.createElement('smart-list-box'),
//                 dataSource = ["Indian filter coffee", "Cortado", "Americano"],
//                 items,
//                 event = { key: 'A', stopPropagation: function () { }, preventDefault: function () { } };

//             document.body.appendChild(smartListBox);

//             smartListBox.dataSource = dataSource;
//             smartListBox.filterable = true;
//             smartListBox.$.filterInput.focus();
//             smartListBox._keyUpHandler(event);

//             smartListBox._focusHandler();
//             smartListBox.$.filterInput.value = 'C';
//             smartListBox._filterItems();
//             smartListBox.focus();
//             smartListBox._keyUpHandler(event);

//             expect(smartListBox.items[0].focused).toBe(true);


//             smartListBox.$.filterInput.value = '';
//             smartListBox._filterItems();

//             smartListBox._blurHandler();
//             smartListBox.filterable = false;
//             smartListBox.focus();
//             smartListBox._focusHandler();
//             smartListBox._keyUpHandler(event);

//             document.body.removeChild(document.querySelector('smart-list-box'));
//             expect(smartListBox).not.toBeInDOM();
//         });
//     });
//     describe('Testing _mouseWheelHandler', function () {
//         it('when different input is entered', function () {
//             let smartListBox = document.createElement('smart-list-box'),
//                 dataSource = ["Indian filter coffeeIndian filter coffeeIndian filter coffeeIndian filter coffeeIndian filter coffeeIndian filter coffee", "Cortado", "Americano", "Americano", "Americano", "Americano", "Americano", "Americano", "Americano"],
//                 items,
//                 event = { key: 'A', stopPropagation: function () { }, preventDefault: function () { } };

//             document.body.appendChild(smartListBox);

//             smartListBox.style.height = '50px';
//             smartListBox.dataSource = dataSource;
//             smartListBox._mouseWheelHandler(event);

//             document.body.removeChild(document.querySelector('smart-list-box'));
//             expect(smartListBox).not.toBeInDOM();
//         });
//     });
//     describe('Testing _handleKeyStrokes', function () {
//         it('when different input is entered', function () {
//             let smartListBox = document.createElement('smart-list-box'),
//                 dataSource = ["Indian filter coffee", "Cortado", "Americano"],
//                 items,
//                 event = { key: 'ArrowLeft', stopPropagation: function () { }, preventDefault: function () { }, deltaY: -100 };

//             document.body.appendChild(smartListBox);

//             //Enter different keys for _handleKeyStrokes
//             smartListBox.dataSource = dataSource;
//             smartListBox.filterable = true;
//             smartListBox.$.filterInput.value = 'A';
//             smartListBox._handleKeyStrokes(event.key);

//             expect(smartListBox.selectedIndexes).toEqual([0]);

//             smartListBox.$.filterInput.value = '';
//             smartListBox.filterable = false;
//             smartListBox.disabled = true;
//             smartListBox._handleKeyStrokes(event.key);

//             expect(smartListBox.selectedIndexes).toEqual([0]);

//             smartListBox.disabled = false;
//             smartListBox.focus();
//             smartListBox._focusHandler();
//             event.key = 'ArrowRight';
//             smartListBox._handleKeyStrokes(event.key);

//             expect(smartListBox.selectedIndexes).toEqual([1]);

//             smartListBox.selectionMode = 'zeroOrOne';
//             smartListBox.selectedIndexes = [];
//             smartListBox._focusedItem = undefined;
//             event.key = ' ';
//             smartListBox._handleKeyStrokes(event.key);
//             expect(smartListBox.selectedIndexes).toEqual([]);

//             smartListBox.selectionMode = 'oneOrMany';
//             smartListBox._focusedItem = smartListBox._items[0];
//             smartListBox._handleKeyStrokes(event.key);
//             expect(smartListBox.selectedIndexes).toEqual([0]);

//             event.key = 'ArrowDown';
//             smartListBox._handleKeyStrokes(event.key);
//             event.key = ' ';
//             smartListBox._handleKeyStrokes(event.key);
//             expect(smartListBox.selectedIndexes).toEqual([0, 1]);

//             event.key = 'ArrowDown';
//             smartListBox._handleKeyStrokes(event.key); //focus next item
//             event.key = ' ';
//             smartListBox._handleKeyStrokes(event.key); //Select next item
//             smartListBox._handleKeyStrokes(event.key); //unselect, previously selected item.
//             expect(smartListBox.selectedIndexes).toEqual([0, 1]);

//             event.key = 'Home';
//             smartListBox._handleKeyStrokes(event.key);
//             expect(smartListBox._focusedItem).toBe(smartListBox.items[0]);

//             smartListBox.dataSource = [];
//             smartListBox._handleKeyStrokes(event.key);
//             expect(smartListBox.items.length).toBe(0);
//             expect(smartListBox.selectedIndexes).toEqual([]);

//             event.key = 'End';
//             smartListBox._handleKeyStrokes(event.key);
//             expect(smartListBox.items.length).toBe(0);
//             expect(smartListBox.selectedIndexes).toEqual([]);

//             event.key = 'Home';
//             smartListBox.dataSource = dataSource;
//             smartListBox.selectionMode = 'oneOrManyExtended';
//             smartListBox._handleKeyStrokes(event.key);

//             expect(smartListBox.items.length).toBe(3);

//             event.key = 'End';
//             smartListBox._handleKeyStrokes(event.key);
//             expect(smartListBox.selectedIndexes).toEqual([2]);

//             smartListBox.selectedIndexes = [];
//             smartListBox.selectionMode = 'oneOrMany';
//             smartListBox._handleKeyStrokes(event.key);
//             event.key = 'Home';
//             smartListBox._handleKeyStrokes(event.key);
//             event.key = ' ';
//             smartListBox._handleKeyStrokes(event.key);
//             expect(smartListBox.selectedIndexes).toEqual([0]);

//             event.key = 'PageUp';
//             smartListBox._handleKeyStrokes(event.key);
//             expect(smartListBox.selectedIndexes).toEqual([0]);

//             smartListBox.dataSource = [];
//             smartListBox._handleKeyStrokes(event.key);
//             expect(smartListBox.items.length).toBe(0);
//             expect(smartListBox.selectedIndexes).toEqual([]);

//             smartListBox.dataSource = ["Affogato", "Americano", "Bicerin", "Breve", "Café Bombón", "Café au lait", "Caffé Corretto", "Café Crema", "Caffé Latte"];
//             smartListBox.style.height = '65px'; //If 50, pageDown not selecting next item.
//             smartListBox.selectionMode = 'oneOrManyExtended';
//             smartListBox.selectedIndexes = [8];
//             smartListBox._handleKeyStrokes(event.key);
//             expect(smartListBox.items.length).toBe(9);
//             expect(smartListBox.selectedIndexes).toEqual([6]);

//             smartListBox.dataSource = dataSource;
//             smartListBox.selectedIndexes = [0];
//             event.key = 'PageDown';
//             smartListBox._handleKeyStrokes(event.key);
//             expect(smartListBox.selectedIndexes).toEqual([1]);

//             smartListBox.dataSource = [];
//             smartListBox._handleKeyStrokes(event.key);
//             expect(smartListBox.items.length).toBe(0);
//             expect(smartListBox.selectedIndexes).toEqual([]);

//             smartListBox.dataSource = ["Affogato", "Americano", "Bicerin", "Breve", "Café Bombón", "Café au lait", "Caffé Corretto", "Café Crema", "Caffé Latte"];
//             smartListBox.style.height = '65px';
//             smartListBox.selectionMode = 'oneOrManyExtended';
//             smartListBox._handleKeyStrokes(event.key);
//             expect(smartListBox.items.length).toBe(9);
//             expect(smartListBox.selectedIndexes).toEqual([1]);

//             document.body.removeChild(document.querySelector('smart-list-box'));
//             expect(smartListBox).not.toBeInDOM();
//         });
//     });
//     describe('Testing _resizeHandler', function () {
//         it('when width/height changes', function () {
//             let smartListBox = document.createElement('smart-list-box'),
//                 dataSource = ["Indian filter coffee", "Cortado", "Americano"],
//                 items,
//                 event = { key: 'A', stopPropagation: function () { }, preventDefault: function () { }, target: smartListBox };

//             document.body.appendChild(smartListBox);

//             smartListBox.dataSource = dataSource;
//             smartListBox._resizeHandler(event);

//             document.body.removeChild(document.querySelector('smart-list-box'));
//             expect(smartListBox).not.toBeInDOM();
//         });
//     });
//     describe('Testing _selectStartHandler', function () {
//         it('if it stops drag selection', function () {
//             let smartListBox = document.createElement('smart-list-box'),
//                 dataSource = ["Indian filter coffee", "Cortado", "Americano"],
//                 items,
//                 event = { key: 'A', stopPropagation: function () { }, preventDefault: function () { }, target: smartListBox };

//             document.body.appendChild(smartListBox);

//             smartListBox.dataSource = dataSource;
//             spyOn(event, 'preventDefault');

//             smartListBox._selectStartHandler(event);

//             expect(event.preventDefault).toHaveBeenCalled();

//             document.body.removeChild(document.querySelector('smart-list-box'));
//             expect(smartListBox).not.toBeInDOM();
//         });
//     });
//     describe('Testing _downHandler', function () {
//         it('when target isn\'t a Smart.ListItem', function () {
//             let smartListBox = document.createElement('smart-list-box'),
//                 dataSource = ["Indian filter coffee", "Cortado", "Americano"],
//                 items,
//                 event = { key: 'A', stopPropagation: function () { }, preventDefault: function () { }, originalEvent: { target: '' } };

//             document.body.appendChild(smartListBox);

//             smartListBox.dataSource = dataSource;
//             event.originalEvent.target = smartListBox.items[0].getElementsByClassName('smart-list-item-container')[0];
//             smartListBox._downHandler(event);
//             expect(smartListBox.items[0].selected).toBe(true);

//             document.body.removeChild(document.querySelector('smart-list-box'));
//             expect(smartListBox).not.toBeInDOM();
//         });
//     });
//     describe('Testing _incrementalSearch', function () {
//         it('when entering different values', function () {
//             let smartListBox = document.createElement('smart-list-box'),
//                 dataSource = ["Indian filter coffee", "Cortado", "Americano", "Affogato","Americano","Bicerin", "Breve","Coffee milk"];

//             document.body.appendChild(smartListBox);

//             smartListBox.dataSource = dataSource;
//             smartListBox._incrementalSearchQuery = 'A';
//             smartListBox._incrementalSearch();

//             expect(smartListBox.items[2].focused).toBe(true);

//             smartListBox._incrementalSearchQuery = 'a';
//             smartListBox._incrementalSearch();

//             expect(smartListBox.items[3].focused).toBe(true);

//             smartListBox._incrementalSearchQuery = 'a';
//             smartListBox._incrementalSearch();

//             expect(smartListBox.items[4].focused).toBe(true);

//             smartListBox._incrementalSearchQuery = 'a';
//             smartListBox._incrementalSearch();

//             expect(smartListBox.items[2].focused).toBe(true);

//             document.body.removeChild(document.querySelector('smart-list-box'));
//             expect(smartListBox).not.toBeInDOM();
//         });
//         it('with different incremental Search modes', function () {
//             let smartListBox = document.createElement('smart-list-box'),
//                 dataSource = ["Indian filter coffee", "Cortado", "Americano", "Affogato", "Americano", "Bicerin", "Breve", "Coffee milk"];

//             document.body.appendChild(smartListBox);

//             smartListBox.dataSource = dataSource;
//             smartListBox._incrementalSearchQuery = 'A';
//             smartListBox._incrementalSearch();

//             expect(smartListBox.items[2].focused).toBe(true);

//             smartListBox.incrementalSearchMode = 'equals';
//             smartListBox._incrementalSearchQuery = 'Breve';
//             smartListBox._incrementalSearch();

//             expect(smartListBox.items[6].focused).toBe(true);
//             expect(smartListBox.items[6].selected).toBe(true);

//             smartListBox.selectionMode = 'radioButton';
//             smartListBox.incrementalSearchMode = 'containsIgnoreCase';
//             smartListBox._incrementalSearchQuery = 'B';
//             smartListBox._incrementalSearch();

//             expect(smartListBox.items[5].focused).toBe(true);
//             expect(smartListBox.items[5].selected).toBe(false);

//             document.body.removeChild(document.querySelector('smart-list-box'));
//             expect(smartListBox).not.toBeInDOM();
//         });
//     });
//     describe('Testing _refreshLayout', function () {
//         it('when Horizontal Scroll Bar is visible', function () {
//             let smartListBox = document.createElement('smart-list-box'),
//                 dataSource = ["Indian filter coffee", "Cortado", "Americano"],
//                 items,
//                 event = { key: 'A', stopPropagation: function () { }, preventDefault: function () { }, originalEvent: { target: '' } };

//             document.body.appendChild(smartListBox);

//             smartListBox.dataSource = dataSource;
//             smartListBox.style.width = '20px';
//             smartListBox._refreshLayout();
//             expect(smartListBox._scrollView.hScrollBar.$.hasClass('smart-hidden')).toBe(false);
//             expect(smartListBox.items[0].selected).toBe(true);

//             document.body.removeChild(document.querySelector('smart-list-box'));
//             expect(smartListBox).not.toBeInDOM();
//         });
//     });
// });
