var describe,
    jasmine,
    beforeEach,
    loadFixtures,
    it,
    expect,
    document;
describe('Testing smart-list-box loaded from fixture', function () {
    'use strict';
    let smartListBox;

    jasmine.getFixtures().fixturesPath = 'base/test/smart-listbox/fixtures';
    jasmine.getFixtures().preload('smart-list-box-attributes-synchronization.htm');
    beforeEach(function () {
        loadFixtures('smart-list-box-attributes-synchronization.htm');
        smartListBox = document.querySelector('smart-list-box');
    });
    describe('if it ', function () {
        it('exists in DOM', function () {
            expect(document.querySelector('smart-list-box')).toBeInDOM();
        });
    });

    describe('expect default values', function () {
        it('reorder', function () {
            expect(smartListBox.reorder).toBe(false);
        });
        it('dataSource', function () {
            expect(typeof smartListBox.dataSource).toBe('object');
            expect(smartListBox.dataSource.length).toBe(6);
        });
        it('displayLoadingIndicator=false', function () {
            expect(smartListBox.displayLoadingIndicator).toBe(false);
        });
        it('displayMember=""', function () {
            expect(smartListBox.displayMember).toBe('');
        });
        it('dropAction="move"', function () {
            expect(smartListBox.dropAction).toBe('move');
        });
        it('filterable=false', function () {
            expect(smartListBox.filterable).toBe(false);
        });
        it('filterInputPlaceholder=""', function () {
            expect(smartListBox.filterInputPlaceholder).toBe('');
        });
        it('filterMode="startsWithIgnoreCase"', function () {
            expect(smartListBox.filterMode).toBe('startsWithIgnoreCase');
        });
        it('grouped=false', function () {
            expect(smartListBox.grouped).toBe(false);
        });
        it('groupMember=""', function () {
            expect(smartListBox.groupMember).toEqual('');
        });
        it('itemTemplate=null', function () {
            expect(smartListBox.itemTemplate).toBe(null);
        });
        it('incrementalSearchDelay=700', function () {
            expect(smartListBox.incrementalSearchDelay).toBe(700);
        });
        it('incrementalSearchMode="startsWithIgnoreCase"', function () {
            expect(smartListBox.incrementalSearchMode).toBe('startsWithIgnoreCase');
        });
        it('loadingIndicatorPlaceholder="Loading..."', function () {
            expect(smartListBox.loadingIndicatorPlaceholder).toBe('Loading...');
        });
        it('loadingIndicatorPosition="center"', function () {
            expect(smartListBox.loadingIndicatorPosition).toEqual('center');
        });
        //it('metaData=null', function () {
        //    expect(smartListBox.metaData).toBe(null);
        //});
        it('placeholder="No Items"', function () {
            expect(smartListBox.placeholder).toBe('No Items');
        });
        it('selectedIndexes=[]', function () {
            expect(typeof smartListBox.selectedIndexes).toBe('object');
            expect(smartListBox.selectedIndexes.length).toBe(1);
        });
        it('selectedValues=[]', function () {
            expect(typeof smartListBox.selectedValues).toBe('object');
            expect(smartListBox.selectedValues.length).toBe(1);
        });
        it('selectionMode="default"', function () {
            expect(smartListBox.selectionMode).toBe('default');
        });
        it('sorted=false', function () {
            expect(smartListBox.sorted).toBe(false);
        });
        it('valueMember=""', function () {
            expect(smartListBox.valueMember).toBe('');
        });
    });
});
