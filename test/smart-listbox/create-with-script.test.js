var describe,
    it,
    expect,
    document,
    beforeAll,
    afterAll;
describe('Testing smart-list-box created with script', function () {
    'use strict';
    let smartListBox;
    beforeAll(function () {
        smartListBox = document.createElement('smart-list-box');
        smartListBox.dataSource = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven'];
        document.body.appendChild(smartListBox);
    });

    afterAll(function () {
        document.body.removeChild(document.querySelector('smart-list-box'));
    });

    describe('if it ', function () {
        it('exists in DOM', function () {
            expect(smartListBox).toBeInDOM();
        });
    });

    describe('check if properties change their values', function () {
        it('selectedIndexes=[0]', function () {
            smartListBox.dataSource = [1,2,3];
            smartListBox.selectedIndexes = [0];
            expect(smartListBox.selectedIndexes).toEqual([0]);
            expect(typeof smartListBox.selectedIndexes).toBe('object');
            expect(smartListBox.selectedIndexes.length).toBe(1);
        });
        it('selectedValues=[""]', function () {
            smartListBox.dataSource = ['one', 'two'];
            smartListBox.selectedValues = ['one'];
            expect(smartListBox.selectedValues).toEqual(['one']);
            expect(typeof smartListBox.selectedValues).toBe('object');
            expect(smartListBox.selectedValues.length).toBe(1);
        });
        it('dataSource', function () {
            smartListBox.dataSource = [];
            expect(smartListBox.dataSource.length).toBe(0);
        });
        it('displayMember= ""', function () {
            smartListBox.displayMember = '';
            expect(smartListBox.displayMember).toBe('');
        });
        it('filterable=true', function () {
            smartListBox.filterable = true;
            expect(smartListBox.filterable).toBe(true);
        });
        it('grouped=true', function () {
            smartListBox.grouped = true;
            expect(smartListBox.grouped).toBe(true);
        });
        it('incrementalSearchDelay=700', function () {
            smartListBox.incrementalSearchDelay = 200;
            expect(smartListBox.incrementalSearchDelay).toBe(200);
        });
        it('incrementalSearchMode="endsWith"', function () {
            smartListBox.incrementalSearchMode = 'endsWith';
            expect(smartListBox.incrementalSearchMode).toBe('endsWith');
        });
        it('loadingIndicatorLabel="Loading..."', function () {
            smartListBox.loadingIndicatorLabel = 'Loading...';
            expect(smartListBox.loadingIndicatorLabel).toBe('Loading...');
        });
        it('loadingIndicatorPosition="bottom"', function () {
            smartListBox.loadingIndicatorPosition = 'bottom';
            expect(smartListBox.loadingIndicatorPosition).toEqual('bottom');
        });
        it('metaData=null', function () {
            smartListBox.metaData = function() { return 'valueMember' };
            expect(smartListBox.metaData).not.toBe(null);
        });
        it('placeholder="There\'s no items to show!"', function () {
            smartListBox.placeholder = 'There\'s no items to show!';
            expect(smartListBox.placeholder).toEqual('There\'s no items to show!');
        });
        it('seting all possible selectionModes', function () {
            smartListBox.selectionMode = 'zeroOrMany';
            expect(smartListBox.selectionMode).toBe('zeroOrMany');
            smartListBox.selectionMode = 'default';
            expect(smartListBox.selectionMode).toBe('default');
            smartListBox.selectionMode = 'checkBox';
            expect(smartListBox.selectionMode).toBe('checkBox');
            smartListBox.selectionMode = 'radioButton';
            expect(smartListBox.selectionMode).toBe('radioButton');
            smartListBox.selectionMode = 'none';
            expect(smartListBox.selectionMode).toBe('none');
        });
        it('sorted=true', function () {
            smartListBox.sorted = true;
            expect(smartListBox.sorted).toBe(true);
        });
        it('valueMember=""', function () {
            smartListBox.valueMember = 'value';
            expect(smartListBox.valueMember).toEqual('value');
        });
    });
});
