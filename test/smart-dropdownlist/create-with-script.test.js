var describe,
    it,
    expect,
    document,
    beforeAll,
    afterAll;
describe('Testing smart-drop-down-list created with script', function () {
    'use strict';
    let dropDownList;
    beforeAll(function () {
        dropDownList = document.createElement('smart-drop-down-list');
        dropDownList.dataSource = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven'];
        document.body.appendChild(dropDownList);
    });

    afterAll(function () {
        document.body.removeChild(document.querySelector('smart-drop-down-list'));
    });

    describe('if it ', function () {
        it('exists in DOM', function () {
            expect(dropDownList).toBeInDOM();
        });
    });

    describe('check if properties change their values', function () {
        it('selectedIndexes=[0]', function () {
            dropDownList.dataSource = [1,2,3];
            dropDownList.selectedIndexes = [0];
            expect(dropDownList.selectedIndexes).toEqual([0]);
            expect(typeof dropDownList.selectedIndexes).toBe('object');
            expect(dropDownList.selectedIndexes.length).toBe(1);
        });
        it('selectedValues=[""]', function () {
            dropDownList.dataSource = ['one', 'two'];
            dropDownList.selectedValues = ['one'];
            expect(dropDownList.selectedValues).toEqual(['one']);
            expect(typeof dropDownList.selectedValues).toBe('object');
            expect(dropDownList.selectedValues.length).toBe(1);
        });
        it('dataSource', function () {
            dropDownList.dataSource = [];
            expect(dropDownList.dataSource.length).toBe(0);
        });
        it('displayMember= ""', function () {
            dropDownList.displayMember = '';
            expect(dropDownList.displayMember).toBe('');
        });
        it('filterable=true', function () {
            dropDownList.filterable = true;
            expect(dropDownList.filterable).toBe(true);
        });
        it('grouped=true', function () {
            dropDownList.grouped = true;
            expect(dropDownList.grouped).toBe(true);
        });
        it('incrementalSearchDelay=700', function () {
            dropDownList.incrementalSearchDelay = 200;
            expect(dropDownList.incrementalSearchDelay).toBe(200);
        });
        it('incrementalSearchMode="endsWith"', function () {
            dropDownList.incrementalSearchMode = 'endsWith';
            expect(dropDownList.incrementalSearchMode).toBe('endsWith');
        });
        it('loadingIndicatorLabel="Loading..."', function () {
            dropDownList.loadingIndicatorLabel = 'Loading...';
            expect(dropDownList.loadingIndicatorLabel).toBe('Loading...');
        });
        it('loadingIndicatorPosition="bottom"', function () {
            dropDownList.loadingIndicatorPosition = 'bottom';
            expect(dropDownList.loadingIndicatorPosition).toEqual('bottom');
        });
        it('metaData=null', function () {
            dropDownList.metaData = function() { return 'valueMember' };
            expect(dropDownList.metaData).not.toBe(null);
        });
        it('placeholder="There\'s no items to show!"', function () {
            dropDownList.placeholder = 'There\'s no items to show!';
            expect(dropDownList.placeholder).toEqual('There\'s no items to show!');
        });
        it('seting all possible selectionModes', function () {
            dropDownList.selectionMode = 'one';
            expect(dropDownList.selectionMode).toBe('one');
            dropDownList.selectionMode = 'zeroOrMany';
            expect(dropDownList.selectionMode).toBe('zeroOrMany');
            dropDownList.selectionMode = 'oneOrMany';
            expect(dropDownList.selectionMode).toBe('oneOrMany');
            dropDownList.selectionMode = 'radioButton';
            expect(dropDownList.selectionMode).toBe('radioButton');
            dropDownList.selectionMode = 'none';
            expect(dropDownList.selectionMode).toBe('none');
        });
        it('sorted=true', function () {
            dropDownList.sorted = true;
            expect(dropDownList.sorted).toBe(true);
        });
        it('valueMember=""', function () {
            dropDownList.valueMember = 'value';
            expect(dropDownList.valueMember).toEqual('value');
        });
    });
});
