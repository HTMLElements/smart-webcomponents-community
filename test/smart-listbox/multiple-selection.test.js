//var describe,
//    jasmine,
//    beforeEach,
//    loadFixtures,
//    it,
//    expect,
//    document;
//describe('Testing smart-list-box multipleSelection with fixture', function () {
//    'use strict';
//    let listBox;

//    jasmine.getFixtures().fixturesPath = 'base/test/smartlistbox/fixtures';
//    jasmine.getFixtures().preload('smart-list-box-attributes-synchronization.htm');
//    beforeEach(function () {
//        loadFixtures('smart-list-box-attributes-synchronization.htm');
//        listBox = document.querySelector('smart-list-box');
//    });
//    describe('if it ', function () {
//        it('exists in DOM', function () {
//            expect(document.querySelector('smart-list-box')).toBeInDOM();
//        });
//    });

//    describe('different selectionModes with Mouse click', function () {
//        it('selectedIndexes', function () {
//            listBox.selectionMode = 'multiSimple';
//            listBox.selectedIndexes = [0, 2, 3];
//            expect(listBox.selectedIndexes.length).toBe(3);
//            expect(listBox.selectedIndexes).toEqual([0, 2, 3]);
//            expect(listBox.selectedValues).toEqual(['1', '3', '4']);

//            listBox.selectionMode = 'checkBox';

//            let event = { target: listBox.getItems()[0]};

//            listBox._itemsClickHandler(event);

//            expect(listBox.selectedIndexes).toEqual([2, 3]);
//            expect(listBox.selectedValues).toEqual(['3', '4']);

//            event = { target: listBox.getItems()[1] };
//            listBox._itemsClickHandler(event);

//            expect(listBox.selectedIndexes).toEqual([2, 3, 1]);
//            expect(listBox.selectedValues).toEqual(['3', '4', '2']);

//            listBox.selectionMode = 'radioButton';
//            expect(listBox.selectedIndexes).toEqual([1]);
//            expect(listBox.selectedValues).toEqual(['2']);

//            event = { target: listBox.getItems()[2] };
//            expect(listBox.selectedIndexes).toEqual([1]);
//            expect(listBox.selectedValues).toEqual(['2']);

//            listBox.selectionMode = 'none';
//            listBox.selectedIndexes = [1, 2, 3];
//            expect(listBox.selectedIndexes).toEqual([]);
//            expect(listBox.selectedValues).toEqual([]);

//            listBox.selectionMode = 'multiExtended';
//            listBox._itemsClickHandler(event);
//            expect(listBox.selectedValues.length).toBe(1);
//            expect(listBox.selectedIndexes).toEqual([2]);
//            expect(listBox.selectedValues).toEqual(['3']);

//            listBox._keysPressed['Shift'] = true;
//            event.target = listBox.getItems()[5];
//            listBox._itemsClickHandler(event);
//            expect(listBox.selectedValues.length).toBe(4);
//            expect(listBox.selectedIndexes).toEqual([2, 3, 4, 5]);
//            expect(listBox.selectedValues).toEqual(['3', '4', '5', '6']);
//            listBox._keysPressed['Shift'] = false;
//        });
//        it('different selection modes with KeyBoard navigation', function () {
//            let event = { key: 'ArrowUp', stopPropagation: function () { } },
//                clickEvent = { target: listBox.getItems()[1] };

//            listBox.selectionMode = 'one';
//            listBox._itemsClickHandler(clickEvent);
//            listBox._keyDownHandler(event);

//            expect(listBox.selectedValues.length).toBe(1);
//            expect(listBox.selectedIndexes).toEqual([0]);
//            expect(listBox.selectedValues).toEqual(['1']);

//            event.key = 'ArrowDown';
//            listBox._keyDownHandler(event);
//            expect(listBox.selectedValues.length).toBe(1);
//            expect(listBox.selectedIndexes).toEqual([1]);
//            expect(listBox.selectedValues).toEqual(['2']);

//            event.key = 'ArrowLeft';
//            listBox._keyDownHandler(event);
//            expect(listBox.selectedValues.length).toBe(1);
//            expect(listBox.selectedIndexes).toEqual([0]);
//            expect(listBox.selectedValues).toEqual(['1']);

//            event.key = 'ArrowRight';
//            listBox._keyDownHandler(event);
//            expect(listBox.selectedValues.length).toBe(1);
//            expect(listBox.selectedIndexes).toEqual([1]);
//            expect(listBox.selectedValues).toEqual(['2']);

//            event.key = 'Home';
//            listBox._keyDownHandler(event);
//            expect(listBox.selectedValues.length).toBe(1);
//            expect(listBox.selectedIndexes).toEqual([0]);
//            expect(listBox.selectedValues).toEqual(['1']);

//            event.key = 'End';
//            listBox._keyDownHandler(event);
//            expect(listBox.selectedValues.length).toBe(1);
//            expect(listBox.selectedIndexes).toEqual([5]);
//            expect(listBox.selectedValues).toEqual(['6']);

//            event.key = 'PageUp';
//            listBox._keyDownHandler(event);
//            expect(listBox.selectedValues.length).toBe(1);
//            expect(listBox.selectedIndexes).toEqual([0]);
//            expect(listBox.selectedValues).toEqual(['1']);
//            //expect(listBox.$.itemsInnerContainer.scrollHeight).toBeGreaterThan(161); // Chrome 162
//            //expect(listBox.$.itemsInnerContainer.scrollHeight).toBeLessThan(171); //FireFox 170

//            event.key = 'PageDown';
//            listBox._keyDownHandler(event);
//            expect(listBox.selectedValues.length).toBe(1);
//            expect(listBox.selectedIndexes).toEqual([5]);
//            expect(listBox.selectedValues).toEqual(['6']);

//            listBox.selectionMode = 'checkBox';
//            event.key = ' ';
//            listBox._keyDownHandler(event);
//            expect(listBox.selectedValues.length).toBe(0);
//            expect(listBox.selectedIndexes).toEqual([]);
//            expect(listBox.selectedValues).toEqual([]);

//            listBox.selectionMode = 'multiExtended';
//            listBox._itemsClickHandler(clickEvent);
//            expect(listBox.selectedValues.length).toBe(1);
//            expect(listBox.selectedIndexes).toEqual([1]);
//            expect(listBox.selectedValues).toEqual(['2']);

//            event.key = 'ArrowDown';
//            listBox._keysPressed['Shift'] = true;
//            listBox._keyDownHandler(event);
//            expect(listBox.selectedValues.length).toBe(2);
//            expect(listBox.selectedIndexes).toEqual([1,2]);
//            expect(listBox.selectedValues).toEqual(['2', '3']);
//            listBox._keysPressed['Shift'] = false;
//        });
//    });
//});
