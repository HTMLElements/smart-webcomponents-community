var describe,
    it,
    expect,
    document,
    beforeAll,
    afterAll;
describe('Testing smart-list-box created with script', function () {
    'use strict';
    let smartListBox;

    describe('Testing clearItems() method ', function () {
        it('with data source contaiined array of string elements', function () {
            let smartListBox = document.createElement('smart-list-box'),
                dataSource = ["Indian filter coffee", "Cortado", "Americano"],
                items;

            document.body.appendChild(smartListBox);
            smartListBox.dataSource = dataSource;

            items = smartListBox.items;
            expect(items.length).toBe(3);

            smartListBox.clearItems();
            items = smartListBox.items;
            expect(items.length).toBe(0);

            document.body.removeChild(document.querySelector('smart-list-box'));
            expect(smartListBox).not.toBeInDOM();
        });

        it('with data source contaiined valueMember and displayMember', function () {
            let smartListBox = document.createElement('smart-list-box'),
                dataSource = [{ "itemNumber": 0, "itemName": "Affogato" }, { "itemNumber": 1, "itemName": "Americano" }, { "itemNumber": 2, "itemName": "Bicerin" }],
                items;

            document.body.appendChild(smartListBox);
            smartListBox.dataSource = dataSource;

            items = smartListBox.items;
            expect(items.length).toBe(3);

            smartListBox.clearItems();
            items = smartListBox.items;
            expect(items.length).toBe(0);

            document.body.removeChild(document.querySelector('smart-list-box'));
            expect(smartListBox).not.toBeInDOM();
        });
    });

    describe('Testing clearSelection() method ', function () {
        it('with data source contaiined array of string elements', function () {
            let smartListBox = document.createElement('smart-list-box'),
                dataSource = ["Indian filter coffee", "Cortado", "Americano"],
                items;

            document.body.appendChild(smartListBox);
            smartListBox.dataSource = dataSource;
            smartListBox.selectedIndexes = [0];

            smartListBox.clearSelection();
            expect(smartListBox.selectedIndexes.length).toBe(0);

            document.body.removeChild(document.querySelector('smart-list-box'));
            expect(smartListBox).not.toBeInDOM();
        });

        it('with data source contaiined valueMember and displayMember', function () {
            let smartListBox = document.createElement('smart-list-box'),
                dataSource = [{ "itemNumber": 0, "itemName": "Affogato" }, { "itemNumber": 1, "itemName": "Americano" }, { "itemNumber": 2, "itemName": "Bicerin" }],
                items;

            document.body.appendChild(smartListBox);
            smartListBox.dataSource = dataSource;
            smartListBox.selectedIndexes = [0];

            smartListBox.clearSelection();
            expect(smartListBox.selectedIndexes.length).toBe(0);

            document.body.removeChild(document.querySelector('smart-list-box'));
            expect(smartListBox).not.toBeInDOM();
        });
    });

    describe('Testing _focus() method ', function () {
        it('with data source contaiined array of string elements', function () {
            let smartListBox = document.createElement('smart-list-box'),
                //dataSource = ["Indian filter coffee", "Cortado", "Americano"],
                dataSource = ['0', '1', '2'],
                items;

            document.body.appendChild(smartListBox);
            smartListBox.dataSource = dataSource;
            items = smartListBox.items;
            expect(items.length).toBe(3);

            // smartListBox._focus('Americano');
            smartListBox._focus(smartListBox.getItem('0'));

            document.body.removeChild(document.querySelector('smart-list-box'));
            expect(smartListBox).not.toBeInDOM();
        });

        it('with data source contaiined valueMember and displayMember', function () {
            let smartListBox = document.createElement('smart-list-box'),
                dataSource = [{ "itemNumber": 0, "itemName": "Affogato" }, { "itemNumber": 1, "itemName": "Americano" }, { "itemNumber": 2, "itemName": "Bicerin" }],
                items;

            document.body.appendChild(smartListBox);
            smartListBox.valueMember = "itemNumber";
            smartListBox.displayMember = "itemName";
            smartListBox.dataSource = dataSource;
            items = smartListBox.items;
            expect(items.length).toBe(3);

            // smartListBox._focus('0'); // throws an error when is tryed to be focuset element 0, there is no problem with other values in the range
            smartListBox._focus(smartListBox.getItem('1'));
            // smartListBox._focus('3'); // throws an error if there is no such an element

            document.body.removeChild(document.querySelector('smart-list-box'));
            expect(smartListBox).not.toBeInDOM();
        });
    });

    describe('Testing getItem() method ', function () {
        it('with data source contaiined array of string elements', function () {
            let smartListBox = document.createElement('smart-list-box'),
                dataSource = ["Indian filter coffee", "Cortado", "Americano"],
                item;

            document.body.appendChild(smartListBox);
            smartListBox.dataSource = dataSource;

            item = smartListBox.getItem('Americano');

            //expect().toBe();

            document.body.removeChild(document.querySelector('smart-list-box'));
            expect(smartListBox).not.toBeInDOM();
        });

        it('with data source contaiined valueMember and displayMember', function () {
            let smartListBox = document.createElement('smart-list-box'),
                dataSource = [{ "itemNumber": 0, "itemName": "Affogato" }, { "itemNumber": 1, "itemName": "Americano" }, { "itemNumber": 2, "itemName": "Bicerin" }],
                item;

            document.body.appendChild(smartListBox);

            smartListBox.dataSource = dataSource;
            smartListBox.valueMember = 'itemNumber';
            smartListBox.displayMember = 'itemName';

            // smartListBox._focus('0'); // throws an error when is tryed to be focuset element 0, there is no problem with other values in the range
            item = smartListBox.getItem('1');
            // smartListBox._focus('3'); // throws an error if there is no such an element

            //expect().toBe();

            document.body.removeChild(document.querySelector('smart-list-box'));
            expect(smartListBox).not.toBeInDOM();
        });
    });

    describe('Testing items method ', function () {
        it('with data source contaiined array of string elements', function () {
            let smartListBox = document.createElement('smart-list-box'),
                dataSource = ["Indian filter coffee", "Cortado", "Americano"],
                items;

            document.body.appendChild(smartListBox);
            smartListBox.dataSource = dataSource;

            items = smartListBox.items;
            expect(items.length).toBe(dataSource.length);

            document.body.removeChild(document.querySelector('smart-list-box'));
            expect(smartListBox).not.toBeInDOM();
        });

        it('with data source contaiined valueMember and displayMember', function () {
            let smartListBox = document.createElement('smart-list-box'),
                dataSource = [{ "itemNumber": 0, "itemName": "Affogato" }, { "itemNumber": 1, "itemName": "Americano" }, { "itemNumber": 2, "itemName": "Bicerin" }],
                items;

            document.body.appendChild(smartListBox);

            smartListBox.dataSource = dataSource;
            smartListBox.valueMember = 'itemNumber';
            smartListBox.displayMember = 'itemName';

            items = smartListBox.items;
            expect(items.length).toBe(dataSource.length);

            document.body.removeChild(document.querySelector('smart-list-box'));
            expect(smartListBox).not.toBeInDOM();
        });
    });

    describe('Testing insert() method ', function () {
        it('with data source contaiined array of string elements', function () {
            let smartListBox = document.createElement('smart-list-box'),
                dataSource = ["Indian filter coffee", "Cortado", "Americano"],
                items;

            document.body.appendChild(smartListBox);
            smartListBox.dataSource = dataSource;

            smartListBox.insert(0, "New item");
            items = smartListBox.items;

            expect(items.length).toBe(dataSource.length + 1);

            document.body.removeChild(document.querySelector('smart-list-box'));
            expect(smartListBox).not.toBeInDOM();
        });

        it('with data source contaiined valueMember and displayMember', function () {
            let smartListBox = document.createElement('smart-list-box'),
                dataSource = [{ "itemNumber": 0, "itemName": "Affogato" }, { "itemNumber": 1, "itemName": "Americano" }, { "itemNumber": 2, "itemName": "Bicerin" }],
                items;

            document.body.appendChild(smartListBox);

            smartListBox.dataSource = dataSource;
            smartListBox.valueMember = 'itemNumber';
            smartListBox.displayMember = 'itemName';

            smartListBox.insert(0, { "itemNumber": 0, "itemName": "New Item" });
            items = smartListBox.items;
            expect(items.length).toBe(dataSource.length + 1);

            document.body.removeChild(document.querySelector('smart-list-box'));
            expect(smartListBox).not.toBeInDOM();
        });
    });

    describe('Testing remove() method ', function () {
        it('with data source contaiined array of string elements', function () {
            let smartListBox = document.createElement('smart-list-box'),
                dataSource = ["Indian filter coffee", "Cortado", "Americano"],
                items;

            document.body.appendChild(smartListBox);

            smartListBox.dataSource = dataSource;
            smartListBox.remove(0);
            items = smartListBox.items;

            expect(items.length).toBe(dataSource.length - 1);

            document.body.removeChild(document.querySelector('smart-list-box'));
            expect(smartListBox).not.toBeInDOM();
        });

        it('with data source contaiined valueMember and displayMember', function () {
            let smartListBox = document.createElement('smart-list-box'),
                dataSource = [{ "itemNumber": 0, "itemName": "Affogato" }, { "itemNumber": 1, "itemName": "Americano" }, { "itemNumber": 2, "itemName": "Bicerin" }],
                items;

            document.body.appendChild(smartListBox);

            smartListBox.dataSource = dataSource;
            smartListBox.valueMember = 'itemNumber';
            smartListBox.displayMember = 'itemName';
            smartListBox.remove(0);
            items = smartListBox.items;

            expect(items.length).toBe(dataSource.length - 1);

            document.body.removeChild(document.querySelector('smart-list-box'));
            expect(smartListBox).not.toBeInDOM();
        });

        it('when elements are grouped', function () {
            let smartListBox = document.createElement('smart-list-box'),
                dataSource = [{ "itemNumber": 0, "itemName": "Affogato", "itemGroup": "C" }, { "itemNumber": 1, "itemName": "Americano", "itemGroup": "A" }, { "itemNumber": 2, "itemName": "Bicerin", "itemGroup": "C" }],
                items;

            document.body.appendChild(smartListBox);

            smartListBox.dataSource = dataSource;
            smartListBox.valueMember = 'itemNumber';
            smartListBox.displayMember = 'itemName';
            smartListBox.groupMember = 'itemGroup';
            //smartListBox.grouped = true;
            smartListBox.remove(0);
            items = smartListBox.items;

            expect(items.length).toBe(dataSource.length - 1);
            expect(items[0].value).toBe('1');

            document.body.removeChild(document.querySelector('smart-list-box'));
            expect(smartListBox).not.toBeInDOM();
        });

        it('when elements are grouped and sorted', function () {
            let smartListBox = document.createElement('smart-list-box'),
                dataSource = [{ "itemNumber": 1, "itemName": "Affogato", "itemGroup": "C" }, { "itemNumber": 0, "itemName": "Americano", "itemGroup": "A" }, { "itemNumber": 2, "itemName": "Bicerin", "itemGroup": "C" }],
                items;

            document.body.appendChild(smartListBox);

            smartListBox.dataSource = dataSource;
            smartListBox.valueMember = 'itemNumber';
            smartListBox.displayMember = 'itemName';
            smartListBox.groupMember = 'itemGroup';
            //smartListBox.grouped = true;
            smartListBox.sorted = true;
            smartListBox.remove(0);
            items = smartListBox.items;

            expect(items.length).toBe(dataSource.length - 1);
            //expect(items[0].value).toBe('1');

            document.body.removeChild(document.querySelector('smart-list-box'));
            expect(smartListBox).not.toBeInDOM();
        });
    });

    describe('Testing select() method ', function () {
        it('with data source array containing string elements', function () {
            let smartListBox = document.createElement('smart-list-box'),
               dataSource = ["Indian filter coffee", "Cortado", "Americano"],
                items;

            document.body.appendChild(smartListBox);
            smartListBox.dataSource = dataSource;
            items = smartListBox.items;
            expect(items.length).toBe(3);

            smartListBox.select('Americano');
            expect(smartListBox.selectedValues).toEqual(['Americano']);

            smartListBox.dataSource = [1, 2, 3, 4, 5];
            smartListBox.select(1);

            expect(smartListBox.selectedValues).toEqual(['1']);

            smartListBox.select('asdasdasd');
            expect(smartListBox.selectedValues).toEqual(['1']);

            //Testing with different selectionModes
            smartListBox.selectionMode = 'zeroOrMany';
            smartListBox.select(1);

            expect(smartListBox.selectedIndexes).toEqual([0]);

            smartListBox.select('1');
            expect(smartListBox.selectedIndexes).toEqual([]);

            smartListBox.selectionMode = 'zeroOrOne';
            smartListBox.select('2');

            expect(smartListBox.selectedIndexes).toEqual([1]);

            smartListBox.select('3');

            expect(smartListBox.selectedIndexes).toEqual([2]);

            smartListBox.select('1');

            expect(smartListBox.selectedIndexes).toEqual([0]);

            smartListBox.select('1');

            expect(smartListBox.selectedIndexes).toEqual([]);

            smartListBox.selectionMode = 'radioButton';
            smartListBox.select('1');

            expect(smartListBox.selectedIndexes).toEqual([0]);

            smartListBox.grouped = true;
            smartListBox.select('2');

            //expect(smartListBox.selectedIndexes).toEqual([2]); //Bug ... waiting for fix

            //smartListBox.virtualized = true; // In a separate file using a new fixture
            //smartListBox.select('B');

            //expect(smartListBox.selectedIndexes).toEqual([1]); //Bug ... waiting for fix

            smartListBox.grouped = false;
            smartListBox.dataSource = [];
            smartListBox.dataSource = ['A', 'B', 'C', 'D', 'E'];
            smartListBox.selectionMode = 'oneOrMany';
            smartListBox.select('C');
            smartListBox.select('E');
            expect(smartListBox.selectedIndexes).toEqual([0, 2, 4]);

            smartListBox.select('C');
            expect(smartListBox.selectedIndexes).toEqual([0, 4]);

            smartListBox.select('E');
            smartListBox.selectionMode = 'default';

            expect(smartListBox.selectedIndexes).toEqual([0]);

            smartListBox.select('E');

            let event = { key: 'Control', type: 'keydown', stopPropagation: function () { }, preventDefault: function () { } };

            smartListBox._focusHandler();
            smartListBox._keyDownHandler(event);
            smartListBox._blurHandler();
            smartListBox.select('C');

            expect(smartListBox.selectedIndexes).toEqual([4, 2]);

            smartListBox.select('B');

            expect(smartListBox.selectedIndexes).toEqual([4, 2, 1]);

            smartListBox.select('B');

            expect(smartListBox.selectedIndexes).toEqual([4, 2]);

            //Testing default selection using Shift key
            smartListBox.clearSelection();
            smartListBox._focusHandler();
            smartListBox._keyUpHandler(event);

            smartListBox.select('A');
            event.key = 'Shift';
            smartListBox._keyDownHandler(event);
            smartListBox.select('D');

            expect(smartListBox.selectedIndexes).toEqual([0, 1, 2, 3]);

            smartListBox.clearSelection();
            smartListBox._keyUpHandler(event); //Release Shift key.
            expect(smartListBox.selectedIndexes).toEqual([]);

            smartListBox.select('D');

            expect(smartListBox.selectedIndexes).toEqual([3]);

            smartListBox._keyDownHandler(event); //Press Shift key again
            smartListBox.select('A');

            expect(smartListBox.selectedIndexes).toEqual([3, 2, 1, 0]);

            smartListBox.select('B');

            expect(smartListBox.selectedIndexes).toEqual([3, 2, 1]);

            document.body.removeChild(document.querySelector('smart-list-box'));
            expect(smartListBox).not.toBeInDOM();
        });

        it('with data source contaiined valueMember and displayMember', function () {
            let smartListBox = document.createElement('smart-list-box'),
                dataSource = [{ "itemNumber": 0, "itemName": "Affogato" }, { "itemNumber": 1, "itemName": "Americano" }, { "itemNumber": 2, "itemName": "Bicerin" }],
                items;

            document.body.appendChild(smartListBox);
            smartListBox.valueMember = "itemNumber";
            smartListBox.displayMember = "itemName";
            smartListBox.dataSource = dataSource;
            items = smartListBox.items;
            expect(items.length).toBe(3);

            // smartListBox.select('0'); // throws an error when is tryed to be focuset element 0, there is no problem with other values in the range
            // expect(smartListBox.selectedValues).toEqual( ['0'] );

            smartListBox.select('1');
            expect(smartListBox.selectedValues).toEqual(['1']);

            document.body.removeChild(document.querySelector('smart-list-box'));
            expect(smartListBox).not.toBeInDOM();
        });
    });

    describe('Testing unselect() method ', function () {
        it('with data source contaiined array of string elements', function () {
            let smartListBox = document.createElement('smart-list-box'),
               dataSource = ["Indian filter coffee", "Cortado", "Americano"],
                items;

            document.body.appendChild(smartListBox);
            smartListBox.dataSource = dataSource;
            items = smartListBox.items;
            expect(items.length).toBe(3);

            smartListBox.selectedValues = ['Americano'];
            smartListBox.unselect('Americano');
            expect(smartListBox.selectedValues).toEqual([]);

            /*smartListBox.selectedValues = ["Indian filter coffee", "Cortado", "Americano"]; // Depends on selectionMode. To be checked in different selection modes.
            smartListBox.unselect('Cortado');
            expect(smartListBox.selectedValues).toEqual(["Indian filter coffee", "Americano"]);*/
            //console.log(smartListBox.selectionMode);

            document.body.removeChild(document.querySelector('smart-list-box'));
            expect(smartListBox).not.toBeInDOM();
        });

        it('with data source contaiined valueMember and displayMember', function () {
            let smartListBox = document.createElement('smart-list-box'),
                dataSource = [{ "itemNumber": 0, "itemName": "Affogato" }, { "itemNumber": 1, "itemName": "Americano" }, { "itemNumber": 2, "itemName": "Bicerin" }],
                items;

            document.body.appendChild(smartListBox);
            smartListBox.valueMember = "itemNumber";
            smartListBox.displayMember = "itemName";
            smartListBox.dataSource = dataSource;
            items = smartListBox.items;
            expect(items.length).toBe(3);

            smartListBox.selectedValues = ['0'];
            smartListBox.unselect('0');
            expect(smartListBox.selectedValues).toEqual([]);

            smartListBox.selectedValues = ['1'];
            smartListBox.unselect('1');
            expect(smartListBox.selectedValues).toEqual([]);

            smartListBox.selectedValues = ['0', '1'];
            smartListBox.unselect('0');
            expect(smartListBox.selectedValues).toEqual(['1']);

            smartListBox.selectionMode = 'zeroOrMany';
            smartListBox.selectedValues = ['0', '1', '2'];
            smartListBox.unselect('0');
            expect(smartListBox.selectedValues).toEqual(['1', '2']);

            smartListBox.selectionMode = 'none';
            smartListBox.selectedValues = ['0', '1', '2'];
            smartListBox.unselect('0');
            expect(smartListBox.selectedValues).toEqual([]);

            smartListBox.selectionMode = 'checkBox';
            smartListBox.selectedValues = ['0', '1', '2'];
            smartListBox.unselect('0');
            expect(smartListBox.selectedValues).toEqual(['1', '2']);

            smartListBox.selectionMode = 'radioButton';
            smartListBox.selectedValues = ['0', '1', '2'];
            smartListBox.unselect('0');
            expect(smartListBox.selectedValues).toEqual(['2']);

            /* smartListBox.unselect('2');
             expect(smartListBox.selectedValues).toEqual(['2']); // bug or not ? */


            document.body.removeChild(document.querySelector('smart-list-box'));
            expect(smartListBox).not.toBeInDOM();
        });

        describe('Testing checkMissingModule', function () {
            it('if ScrollBar element is present, if not it should throw an error', function () {
                //    let scrollBarInstance = Smart.ScrollBar;

                //    Smart.ScrollBar = undefined;

                //    let missingModule = function () {
                //        smartListBox._checkMissingModules();
                //    };

                //    expect(missingModule).toThrow();
                //    Smart.ScrollBar = scrollBarInstance;
            });
        });
        describe('Testing _scrollWidth', function () {
            it('when the browser is old, no CSS vars support', function () {
                let smartListBox = document.createElement('smart-list-box'),
                    dataSource = [{ "itemNumber": 0, "itemName": "Affogato" }, { "itemNumber": 1, "itemName": "Americano" }, { "itemNumber": 2, "itemName": "Bicerin" }],
                    items;

                document.body.appendChild(smartListBox);
                smartListBox.dataSource = dataSource;
                smartListBox.valueMember = "itemNumber";
                smartListBox.displayMember = "itemName";
                smartListBox._areCSSVarsSupported = false;
                smartListBox.__scrollWidth = undefined;
                smartListBox._scrollWidth;
                smartListBox._areCSSVarsSupported = true;

                expect(smartListBox.$.itemsInnerContainer.style.width).toBe('100%');

                document.body.removeChild(document.querySelector('smart-list-box'));
                expect(smartListBox).not.toBeInDOM();
            });
        });
        describe('Testing update()', function () {
            it('with sorted items', function () {
                let smartListBox = document.createElement('smart-list-box'),
                    dataSource = ["Indian filter coffee", "Cortado", "Americano"],
                    items;

                document.body.appendChild(smartListBox);

                smartListBox.dataSource = dataSource;
                smartListBox.sorted = true;
                smartListBox.update(0, { label: 'Shake', value: 'shake' });

                expect(smartListBox.items[2].label).toBe('Shake');

                smartListBox.sorted = false;

                expect(function () { smartListBox.update(13123123, 'New item'); }).toThrow();

                document.body.removeChild(document.querySelector('smart-list-box'));
                expect(smartListBox).not.toBeInDOM();
            });
        });
        describe('Testing remove()', function () {
            it('with sorted items', function () {
                let smartListBox = document.createElement('smart-list-box'),
                    dataSource = ["Indian filter coffee", "Cortado", "Americano"],
                    items;

                document.body.appendChild(smartListBox);

                smartListBox.dataSource = dataSource;
                smartListBox.sorted = true;

                expect(smartListBox.items.length).toBe(3);
                expect(smartListBox.items[0].label).toEqual('Americano');

                smartListBox.remove(0);

                expect(smartListBox.items.length).toBe(2);
                expect(smartListBox.items[0].label).toEqual('Cortado');

                smartListBox.sorted = false;

                expect(function () { smartListBox.remove(13123123, 'New item'); }).toThrow();

                document.body.removeChild(document.querySelector('smart-list-box'));
                expect(smartListBox).not.toBeInDOM();
            });
        });
        describe('Testing setFocusable()', function () {
            it('with sorted items', function () {
                let smartListBox = document.createElement('smart-list-box'),
                    dataSource = ["Indian filter coffee", "Cortado", "Americano"],
                    items;

                document.body.appendChild(smartListBox);

                smartListBox.dataSource = dataSource;
                smartListBox.setFocusable(false);

                expect(smartListBox.tabindex).toBe(undefined);

                document.body.removeChild(document.querySelector('smart-list-box'));
                expect(smartListBox).not.toBeInDOM();
            });
        });
        describe('Testing ensureVisible()', function () {
            it('with an invalid string that should usually represent the value of an item', function () {
                let smartListBox = document.createElement('smart-list-box'),
                    dataSource = ["Indian filter coffee", "Cortado", "Americano"],
                    items;

                document.body.appendChild(smartListBox);

                smartListBox.dataSource = dataSource;
                expect(smartListBox.ensureVisible('Ala bala')).toBe(false);

                document.body.removeChild(document.querySelector('smart-list-box'));
                expect(smartListBox).not.toBeInDOM();
            });
        });
        describe('Testing appendChild on a ListItemsGroup', function () {
            it('by trying to append a SmartItem', function () {
                let smartListBox = document.createElement('smart-list-box'),
                    dataSource = ["Indian filter coffee", "Cortado", "Americano"],
                    items;

                document.body.appendChild(smartListBox);

                smartListBox.dataSource = dataSource;
                smartListBox.grouped = true;
                smartListBox._groups[0].appendChild(document.createElement('smart-list-item'));
                expect(smartListBox._groups[0].getElementsByTagName('smart-list-item').length).toBe(2);

                document.body.removeChild(document.querySelector('smart-list-box'));
                expect(smartListBox).not.toBeInDOM();
            });
        });
    });
});
