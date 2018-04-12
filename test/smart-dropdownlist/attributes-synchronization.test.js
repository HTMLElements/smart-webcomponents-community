var describe,
    jasmine,
    beforeEach,
    loadFixtures,
    it,
    expect,
    document;
describe('Testing smart-drop-down-list loaded from fixture', function () {
    'use strict';
    let dropDownList;

    jasmine.getFixtures().fixturesPath = 'base/test/smartdropdownlist/fixtures';
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

    describe('expect default values', function () {
        it('dataSource', function () {
            expect(typeof dropDownList.dataSource).toBe('object');
            expect(dropDownList.dataSource).toBeNull();
        });
        it('displayLoadingIndicator=false', function () {
            expect(dropDownList.displayLoadingIndicator).toBe(false);
        });
        it('displayMember=""', function () {
            expect(dropDownList.displayMember).toBe('');
        });
        it('dropDownAppendTo="body"', function () {
            dropDownList.dropDownAppendTo = 'body';
            expect(dropDownList.dropDownAppendTo).toBe('body');
            expect(dropDownList.$.dropDownContainer.parentElement).toBe(document.body);
        });
        it('dropDownOpenMode="default"', function () {
            expect(dropDownList.dropDownOpenMode).toEqual('default');
        });
        it('dropDownPlaceholder="No Items"', function () {
            expect(dropDownList.dropDownPlaceholder).toEqual('No Items');
        });
        it('dropDownVerticalPosition="auto"', function () {
            expect(dropDownList.dropDownPosition).toEqual('auto');
        });
        it('opened=true', function () {
            expect(dropDownList.$.dropDownContainer).toHaveClass('smart-visibility-hidden');
            dropDownList.opened = true;
            expect(dropDownList.$.dropDownContainer).not.toHaveClass('smart-visibility-hidden');
        });
        it('filterable=false', function () {
            expect(dropDownList.filterable).toBe(false);
        });
        it('filterInputPlaceholder=""', function () {
            expect(dropDownList.filterInputPlaceholder).toBe('');
        });
        it('filterMode="startsWithIgnoreCase"', function () {
            expect(dropDownList.filterMode).toBe('startsWithIgnoreCase');
        });
        it('grouped=false', function () {
            expect(dropDownList.grouped).toBe(false);
        });
        it('groupMember=""', function () {
            expect(dropDownList.groupMember).toEqual('');
        });
        it('itemTemplate=null', function () {
            expect(dropDownList.itemTemplate).toBe(null);
        });
        it('incrementalSearchDelay=700', function () {
            expect(dropDownList.incrementalSearchDelay).toBe(700);
        });
        it('incrementalSearchMode="startsWithIgnoreCase"', function () {
            expect(dropDownList.incrementalSearchMode).toBe('startsWithIgnoreCase');
        });
        it('loadingIndicatorPlaceholder="Loading..."', function () {
            expect(dropDownList.loadingIndicatorPlaceholder).toBe('Loading...');
        });
        it('loadingIndicatorPosition="center"', function () {
            expect(dropDownList.loadingIndicatorPosition).toEqual('center');
        });
        //it('metaData=null', function () {
        //    expect(dropDownList.metaData).toBe(null);
        //});
        it('placeholder=""', function () {
            expect(dropDownList.placeholder).toBe('');
        });
        it('readonly=false', function () {
            expect(dropDownList.readonly).toBe(false);
        });
        it('selectedIndexes=[]', function () {
            expect(typeof dropDownList.selectedIndexes).toBe('object');
            expect(dropDownList.selectedIndexes.length).toBe(0);
        });
        it('selectedValues=[]', function () {
            expect(typeof dropDownList.selectedValues).toBe('object');
            expect(dropDownList.selectedValues.length).toBe(0);
        });
        it('selectionMode="one"', function () {
            expect(dropDownList.selectionMode).toBe('one');
        });
        it('sorted=false', function () {
            expect(dropDownList.sorted).toBe(false);
        });
        it('valueMember=""', function () {
            expect(dropDownList.valueMember).toBe('');
        });
    });
    describe('expect values to change when set', function () {
        it('dataSource = "["a","b","c","d","e"]"', function () {
            dropDownList.dataSource = ['a', 'b', 'c', 'd', 'e'];
            expect(typeof dropDownList.dataSource).toBe('object');
            expect(dropDownList.dataSource).toEqual(['a', 'b', 'c', 'd', 'e']);
            expect(dropDownList.dataSource.length).toBe(5);
        });
        it('displayLoadingIndicator = true', function () {
            dropDownList.displayLoadingIndicator = true;
            expect(dropDownList.displayLoadingIndicator).toBe(true);
            expect(dropDownList.$listBox.loadingIndicator).not.toHaveClass('smart-hidden');
            expect(dropDownList.$listBox.loadingIndicatorPlaceHolder).toHaveClass('smart-hidden');
        });
        it('displayMember="name"', function () {
            //dropDownList.dataSource = [{ name: 'First', value: 1 }, { name: 'Second', value: 2 }, { name: 'Third', value: 3 }]; //Not loaded on time by KARMA
            dropDownList.displayMember = 'name';
            //expect(dropDownList.$.listBox.displayMember).toEqual('name');
            expect(dropDownList.displayMember).toEqual('name');
        });
        it('dropDownOpenMode="default"', function () {
            dropDownList.dropDownOpenMode = 'dropDownButton';
            expect(dropDownList.dropDownOpenMode).toEqual('dropDownButton');
        });
        it('dropDownPlaceholder="There are no items to display."', function () {
            dropDownList.dropDownPlaceholder = 'There are no items to display.';
            expect(dropDownList.dropDownPlaceholder).toEqual('There are no items to display.');
        });
        it('dropDownVerticalPosition="overlay"', function () {
            dropDownList.dropDownVerticalPosition = 'overlay';
            expect(dropDownList.dropDownVerticalPosition).toEqual('overlay');
        });
        it('dropDownVerticalPosition="top"', function () {
            dropDownList.dropDownVerticalPosition = 'top';
            expect(dropDownList.dropDownVerticalPosition).toEqual('top');
        });
        it('disabled=true', function () {
            dropDownList.disabled = true;
            expect(dropDownList.disabled).toBe(true);
        });
        it('filterable=false', function () {
            dropDownList.filterable = true;
            expect(dropDownList.filterable).toBe(true);
            //expect(dropDownList.$listBox.filterInput).not.toHaveClass('smart-hidden'); // Not applied when Karma test is runned.
        });
        it('filterInputPlaceholder="Enter:"', function () {
            dropDownList.filterInputPlaceholder = 'Enter:';
            expect(dropDownList.filterInputPlaceholder).toBe('Enter:');
        });
        it('filterMode="equals"', function () {
            dropDownList.filterable = true;
            dropDownList.filterMode = 'equals';
            expect(dropDownList.filterable).toBe(true);
            expect(dropDownList.filterMode).toEqual('equals');
        });
        it('grouped=false', function () {
            dropDownList.grouped = true;
            expect(dropDownList.grouped).toBe(true);
        });
        it('groupMember=""', function () {
            dropDownList.groupMember = 'mygroup';
            expect(dropDownList.groupMember).toEqual('mygroup');
        });
        it('itemTemplate=null', function () {
            dropDownList.itemTemplate = 'template';
            expect(dropDownList.itemTemplate).toBe('template');
        });
        it('incrementalSearchDelay=100', function () {
            dropDownList.incrementalSearchDelay = 100;
            expect(dropDownList.incrementalSearchDelay).toBe(100);
        });
        it('incrementalSearchMode="endsWith"', function () {
            dropDownList.incrementalSearchMode = 'endsWith';
            expect(dropDownList.incrementalSearchMode).toBe('endsWith');
        });
        it('loadingIndicatorPlaceholder="Downloading"', function () {
            dropDownList.loadingIndicatorPlaceholder = 'Downloading';
            expect(dropDownList.loadingIndicatorPlaceholder).toBe('Downloading');
        });
        it('loadingIndicatorPosition="center"', function () {
            dropDownList.loadingIndicatorPosition = 'bottom';
            expect(dropDownList.loadingIndicatorPosition).toEqual('bottom');
        });
        //it('metaData=function', function () {
        //    dropDownList.metaData = function () { return 'valueMember' };
        //    expect(dropDownList.metaData()).toEqual('valueMember');
        //});
        it('placeholder="Please Select:"', function () {
            dropDownList.placeholder = 'Select Item:';
            expect(dropDownList.placeholder).toBe('Select Item:');
        });
        it('readonly=true', function () {
            dropDownList.readonly = true;
            expect(dropDownList.readonly).toBe(true);
        });
        it('selectedIndexes=[1,2,3]', function () {
            dropDownList.insert(0, ['Audi', 'BMW', 'Mercedess', 'VW', 'Bently', 'Maybach']);
            dropDownList.selectedIndexes = [1, 2, 3];
            expect(typeof dropDownList.selectedIndexes).toBe('object');
            //expect(dropDownList.selectedIndexes.length).toBe(1);
            expect(dropDownList.selectedIndexes.length).toBe(3);

            dropDownList.selectedIndexes = [];
            expect(dropDownList.selectedIndexes.length).toBe(0);
            expect(dropDownList.$.actionButton.innerHTML).toEqual(dropDownList.placeholder);
        });
        it('selectedValues=[1,2,3]', function () {
            dropDownList.selectedValues = ['one', 'two', 'three'];
            expect(typeof dropDownList.selectedValues).toBe('object');
            expect(dropDownList.selectedValues.length).toBe(3);
        });
        it('selectionMode="zeroOrMany"', function () {
            dropDownList.selectionMode = 'zeroOrMany';
            expect(dropDownList.selectionMode).toBe('zeroOrMany');
        });
        it('selectionDisplayMode="placeholder"', function () {
            dropDownList.selectionDisplayMode = 'placeholder';
            expect(dropDownList.selectionDisplayMode).toBe('placeholder');

            dropDownList.insert(0, ['Audi', 'BMW', 'Mercedess', 'VW', 'Bently', 'Maybach']);
            dropDownList.selectedIndexes = [1];

            dropDownList.selectionDisplayMode = 'default';
            expect(dropDownList.selectionDisplayMode).toBe('default');

            dropDownList.selectionDisplayMode = 'advanced';
            expect(dropDownList.selectionDisplayMode).toBe('advanced');
        });
        it('sorted = true', function () {
            dropDownList.sorted = true;
            expect(dropDownList.sorted).toBe(true);
        });
        it('valueMember="value1"', function () {
            dropDownList.valueMember = 'value1';
            expect(dropDownList.valueMember).toBe('value1');
        });
    });
});
