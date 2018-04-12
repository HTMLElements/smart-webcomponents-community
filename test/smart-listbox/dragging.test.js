var describe,
    jasmine,
    beforeEach,
    loadFixtures,
    it,
    expect,
    document;

function createProperty(value) {
    var _value = value;

    function _get() {
        return _value;
    }

    function _set(v) {
        _value = v;
    }

    return {
        'get': _get,
        'set': _set
    };
}

function makePropertyWritable(objBase, objScopeName, propName, initValue) {
    var newProp,
        initObj;

    if (objBase && objScopeName in objBase && propName in objBase[objScopeName]) {
        if (typeof initValue === 'undefined') {
            initValue = objBase[objScopeName][propName];
        }

        newProp = createProperty(initValue);

        try {
            Object.defineProperty(objBase[objScopeName], propName, newProp);
        }
        catch (e) {
            initObj = {};
            initObj[propName] = newProp;
            try {
                objBase[objScopeName] = Object.create(objBase[objScopeName], initObj);
            }
            catch (e) {
                //stuff
            }
        }
    }
}

describe('Testing smart-list-box loaded from fixture', function () {
    'use strict';
    let smartListBox;

    jasmine.getFixtures().fixturesPath = 'base/test/smart-listbox/fixtures';
    jasmine.getFixtures().preload('smart-list-box-attributes-synchronization.htm');
    beforeEach(function () {
        loadFixtures('smart-list-box-attributes-synchronization.htm');
        smartListBox = document.querySelector('smart-list-box');

        smartListBox.dataSource = ["Indian filter coffee", "Cortado", "Americano", "Breve", "Affogato"];
        smartListBox.reorder = true;
    });
    describe('if it ', function () {
        it('exists in DOM', function () {
            expect(smartListBox).toBeInDOM();
        });
    });
    describe('Testing reordering', function () {
        it('dropAction = "move"', function () {
            var event = { pageX: 10, pageY: 20, originalEvent: { target: smartListBox.items[0] } };

            smartListBox._downHandler(event);

            expect(smartListBox.items[0].selected).toBe(true);
            expect(Smart.ListBox.DragDrop.Feedback).not.toBeUndefined();
            expect(smartListBox.selectedIndexes).toEqual([0]);

            // _moveHandler handler

            event.pageX = 20;
            event.pageY = 30;
            event.originalEvent.target = document;
            event.originalEvent.preventDefault = function () { };
            event.originalEvent.stopPropagation = function () { };
            event.preventDefault = function () { };
            event.stopPropagation = function () { };

            smartListBox._moveHandler(event);
            expect(Smart.ListBox.DragDrop.Dragging).toBe(true);

            // _itemOnMOuseMove handler
            event.pageY = 50;
            smartListBox.items[2]._itemOnMouseMove(event);

            // _upHandler handler
            smartListBox._upHandler(event);
            expect(Smart.ListBox.DragDrop.Dragging).toBe(false);
            expect(smartListBox.selectedIndexes).toEqual([1]);
        });
        it('dropAction = "copy"', function () {
            var event = { pageX: 10, pageY: 20, originalEvent: { target: smartListBox.items[0] } };

            smartListBox.dropAction = 'copy';
            smartListBox._downHandler(event);
            expect(smartListBox.items[0].selected).toBe(true);
            expect(Smart.ListBox.DragDrop.Feedback).not.toBeUndefined();
            expect(smartListBox.selectedIndexes).toEqual([0]);
            expect(smartListBox.items.length).toEqual(5);

            // _moveHandler handler

            event.pageX = 20;
            event.pageY = 30;
            event.originalEvent.target = document;
            event.originalEvent.preventDefault = function () { };
            event.originalEvent.stopPropagation = function () { };
            event.preventDefault = function () { };
            event.stopPropagation = function () { };

            smartListBox._moveHandler(event);
            expect(Smart.ListBox.DragDrop.Dragging).toBe(true);

            // _itemOnMOuseMove handler
            event.pageY = 50;
            smartListBox.items[2]._itemOnMouseMove(event);

            // _upHandler handler
            smartListBox._upHandler(event);
            expect(Smart.ListBox.DragDrop.Dragging).toBe(false);
            expect(smartListBox.selectedIndexes).toEqual([2]);
            expect(smartListBox.items.length).toEqual(6);
        });
        it('dropAction = "none"', function () {
            var event = { pageX: 10, pageY: 20, originalEvent: { target: smartListBox.items[0] } };

            smartListBox.dropAction = 'none';
            smartListBox._downHandler(event);
            expect(smartListBox.items[0].selected).toBe(true);
            expect(Smart.ListBox.DragDrop.Feedback).not.toBeUndefined();
            expect(smartListBox.selectedIndexes).toEqual([0]);
            expect(smartListBox.items.length).toEqual(5);

            // _moveHandler handler

            event.pageX = 20;
            event.pageY = 30;
            event.originalEvent.target = document;
            event.originalEvent.preventDefault = function () { };
            event.originalEvent.stopPropagation = function () { };
            event.preventDefault = function () { };
            event.stopPropagation = function () { };

            smartListBox._moveHandler(event);
            expect(Smart.ListBox.DragDrop.Dragging).toBe(true);

            // _itemOnMOuseMove handler
            event.pageY = 50;
            smartListBox.items[2]._itemOnMouseMove(event);

            // _upHandler handler
            smartListBox._upHandler(event);
            expect(Smart.ListBox.DragDrop.Dragging).toBe(false);
            expect(smartListBox.selectedIndexes).toEqual([0]);
            expect(smartListBox.items.length).toEqual(5);
        });
        it('dropAction = "move" on Mobile device ', function () {
            var oldUserAgent = window.navigator.userAgent,
                event = { pageX: 10, pageY: 20, originalEvent: { target: smartListBox.items[0] }, target: smartListBox.items[0] };

            makePropertyWritable(window, 'navigator', 'userAgent');
            window.navigator.userAgent = 'android';

            smartListBox.dropAction = 'move';
            smartListBox._downHandler(event);
            expect(smartListBox.items[0].selected).toBe(true);
            expect(Smart.ListBox.DragDrop.Feedback).not.toBeUndefined();
            expect(smartListBox.selectedIndexes).toEqual([0]);
            expect(smartListBox.items.length).toEqual(5);

            // _moveHandler handler

            event.pageX = 20;
            event.pageY = 30;
            event.originalEvent.target = document;
            event.originalEvent.preventDefault = function () { };
            event.originalEvent.stopPropagation = function () { };
            event.preventDefault = function () { };
            event.stopPropagation = function () { };

            //When moveHandler is called on Mobile
            window.navigator.userAgent = oldUserAgent; //circumvent a Date check.
            smartListBox._moveHandler(event);
            window.navigator.userAgent = 'android';

            expect(Smart.ListBox.DragDrop.Dragging).toBe(true);

            // _itemOnMOuseMove handler
            event.pageY = 50;
            smartListBox.items[2]._itemOnMouseMove(event);

            // _upHandler handler
            smartListBox._upHandler(event);
            expect(Smart.ListBox.DragDrop.Dragging).toBe(false);
            expect(smartListBox.selectedIndexes).toEqual([0]);
            expect(smartListBox.items.length).toEqual(5);

            //When moveHandler is called on Mobile
            window.navigator.userAgent = oldUserAgent; //circumvent a Date check.
            smartListBox._moveHandler(event);
            window.navigator.userAgent = 'android';

            expect(Smart.ListBox.DragDrop.Dragging).toBe(false);

            // _itemOnMOuseMove handler
            smartListBox.items[2]._itemOnMouseMove(event);

            // _upHandler handler
            smartListBox._upHandler(event);
            expect(smartListBox.selectedIndexes).toEqual([0]);
            expect(smartListBox.items.length).toEqual(5);

            // When the target isn't a Smart.ListItem
            event.target = event.target.children[0];
            event.originalEvent.target = smartListBox.items[0];

            // _upHandler handler
            smartListBox._upHandler(event);
            expect(smartListBox.selectedIndexes).toEqual([0]);
            expect(smartListBox.items.length).toEqual(5);

            window.navigator.userAgent = oldUserAgent;
        });
    });
});
