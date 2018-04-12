var describe,
    it,
    expect,
    document,
    beforeAll,
    afterAll;

describe('Testing smart-drop-down-list, created via script and dynamicaly changed it\'s properties', function () {
    'use strict';

    describe('if it created dynamicaly', function () {
        it('exists in DOM', function () {
            let dropDownList = document.createElement('smart-drop-down-list');
            document.body.appendChild(dropDownList);
            expect(dropDownList).toBeInDOM();

            document.body.removeChild(document.querySelector('smart-drop-down-list'));
            expect(dropDownList).not.toBeInDOM();
        });

        it('can set dynamically the "dataSource" property to array of strings', function () { 
            let dropDownList = document.createElement('smart-drop-down-list');
            dropDownList.dataSource = [1, 2, 3, 4, 5];
            document.body.appendChild(dropDownList);

            expect(dropDownList.dataSource).toEqual([1, 2, 3, 4, 5]);
            //expect(dropDownList.getItems().length).toBe(5); // Not synched when Karma test is runned
            document.body.removeChild(document.querySelector('smart-drop-down-list'));
            expect(dropDownList).not.toBeInDOM();
        });

        it('can set dynamically the "displayLoadingIndicator"', function () {
            let dropDownList = document.createElement('smart-drop-down-list');
            document.body.appendChild(dropDownList);

            dropDownList.displayLoadingIndicator = true;
            expect(dropDownList.displayLoadingIndicator).toBe(true);
            expect(dropDownList.getAttribute('display-loading-indicator')).toBe('');

            dropDownList.displayLoadingIndicator = false;
            expect(dropDownList.displayLoadingIndicator).toBe(false);
            expect(dropDownList.getAttribute('display-loading-indicator')).toBe(null);

            document.body.removeChild(document.querySelector('smart-drop-down-list'));
            expect(dropDownList).not.toBeInDOM();
        });

        it('can set dynamically the "displayMember" property', function () {
            let dropDownList = document.createElement('smart-drop-down-list');
            document.body.appendChild(dropDownList);

            dropDownList.displayMember = 'itemName';
            expect(dropDownList.displayMember).toBe('itemName');
            expect(dropDownList.getAttribute('display-member')).toBe('itemName');

            document.body.removeChild(document.querySelector('smart-drop-down-list'));
            expect(dropDownList).not.toBeInDOM();
        });

        it('can set dynamically the "filterable" property', function () {
            let dropDownList = document.createElement('smart-drop-down-list');

            document.body.appendChild(dropDownList);

            //expect(dropDownList.$listBox.filterInput).toHaveClass('smart-hidden'); // Not set when KARMA test is runned.

            dropDownList.filterable = true;
            expect(dropDownList.filterable).toBe(true);
            expect(dropDownList.getAttribute('filterable')).toBe('');
            //expect(dropDownList.$listBox.filterInput).toHaveClass('smart-hidden'); // Not set when KARMA test is runned.
            document.body.removeChild(document.querySelector('smart-drop-down-list'));
            expect(dropDownList).not.toBeInDOM();
        });

        it('can set dynamically the "filterMode" property', function () {
            let dropDownList = document.createElement('smart-drop-down-list');

            document.body.appendChild(dropDownList);

            dropDownList.filterMode = 'equals';
            expect(dropDownList.filterMode).toEqual('equals');

            dropDownList.filterMode = 'contains';
            expect(dropDownList.filterMode).toEqual('contains');

            dropDownList.filterMode = 'endsWith';
            expect(dropDownList.filterMode).toEqual('endsWith');

            dropDownList.filterMode = 'startsWithIgnoreCase';
            expect(dropDownList.filterMode).toEqual('startsWithIgnoreCase');

            dropDownList.filterMode = 'endsWithIgnoreCase';
            expect(dropDownList.filterMode).toEqual('endsWithIgnoreCase');

            document.body.removeChild(document.querySelector('smart-drop-down-list'));
            expect(dropDownList).not.toBeInDOM();
        });

        it('can set dynamically the "grouped" property', function () {
            let dropDownList = document.createElement('smart-drop-down-list');
            document.body.appendChild(dropDownList);

            dropDownList.grouped = true;
            expect(dropDownList.grouped).toBe(true);
            expect(dropDownList.getAttribute('grouped')).toBe('');

            dropDownList.grouped = false;
            expect(dropDownList.grouped).toBe(false);
            expect(dropDownList.getAttribute('grouped')).toBe(null);

            document.body.removeChild(document.querySelector('smart-drop-down-list'));
            expect(dropDownList).not.toBeInDOM();
        });

        it('can set dynamically the "groupMember" property', function () {
            let dropDownList = document.createElement('smart-drop-down-list');
            document.body.appendChild(dropDownList);

            dropDownList.groupMember = 'group';
            expect(dropDownList.groupMember).toBe('group');
            expect(dropDownList.getAttribute('group-member')).toBe('group');

            document.body.removeChild(document.querySelector('smart-drop-down-list'));
            expect(dropDownList).not.toBeInDOM();
        });

        it('can set dynamically the "incrementalSearchDelay" property', function () {
            let dropDownList = document.createElement('smart-drop-down-list');
            document.body.appendChild(dropDownList);

            dropDownList.incrementalSearchDelay = 1000;
            expect(dropDownList.incrementalSearchDelay).toBe(1000);
            expect(dropDownList.getAttribute('incremental-search-delay')).toBe('1000');

            document.body.removeChild(document.querySelector('smart-drop-down-list'));
            expect(dropDownList).not.toBeInDOM();
        });

        it('can set dynamically the "incrementalSearchMode" property', function () {
            let dropDownList = document.createElement('smart-drop-down-list');

            document.body.appendChild(dropDownList);
            //Test cases

            dropDownList.incrementalSearchMode = 'equals';
            expect(dropDownList.incrementalSearchMode).toEqual('equals');

            dropDownList.incrementalSearchMode = 'contains';
            expect(dropDownList.incrementalSearchMode).toEqual('contains');

            dropDownList.incrementalSearchMode = 'endsWith';
            expect(dropDownList.incrementalSearchMode).toEqual('endsWith');

            dropDownList.incrementalSearchMode = 'endsWithIgnoreCase';
            expect(dropDownList.incrementalSearchMode).toEqual('endsWithIgnoreCase');

            document.body.removeChild(document.querySelector('smart-drop-down-list'));
            expect(dropDownList).not.toBeInDOM();
        });

        it('can set dynamically the "loadingIndicatorPlaceholder" property', function () {
            let dropDownList = document.createElement('smart-drop-down-list');
            document.body.appendChild(dropDownList);

            dropDownList.loadingIndicatorPlaceholder = 'Loading more items';
            expect(dropDownList.loadingIndicatorPlaceholder).toBe('Loading more items');
            expect(dropDownList.getAttribute('loading-indicator-placeholder')).toBe('Loading more items');

            document.body.removeChild(document.querySelector('smart-drop-down-list'));
            expect(dropDownList).not.toBeInDOM();
        });

        it('can set dynamically the "loadingIndicatorPosition" property', function () {
            let dropDownList = document.createElement('smart-drop-down-list');

            document.body.appendChild(dropDownList);
            //Test cases

            dropDownList.loadingIndicatorPosition = 'bottom';
            expect(dropDownList.loadingIndicatorPosition).toEqual('bottom');

            dropDownList.loadingIndicatorPosition = 'center';
            expect(dropDownList.loadingIndicatorPosition).toEqual('center');

            dropDownList.loadingIndicatorPosition = 'top';
            expect(dropDownList.loadingIndicatorPosition).toEqual('top');

            document.body.removeChild(document.querySelector('smart-drop-down-list'));
            expect(dropDownList).not.toBeInDOM();
        });

        it('can set dynamically the "placeholder" property', function () {
            let dropDownList = document.createElement('smart-drop-down-list');
            document.body.appendChild(dropDownList);

            dropDownList.placeholder = 'Empty';
            expect(dropDownList.placeholder).toBe('Empty');
            expect(dropDownList.getAttribute('placeholder')).toBe('Empty');

            document.body.removeChild(document.querySelector('smart-drop-down-list'));
            expect(dropDownList).not.toBeInDOM();
        });

        it('can set dynamically the "selectedIndexes" property', function () {
            let dropDownList = document.createElement('smart-drop-down-list');
            document.body.appendChild(dropDownList);

            //dropDownList.dataSource = ['item 1', 'item 2', 'item 3', 'item 4'];
            dropDownList.selectionMode = 'oneOrManyExtended';

            dropDownList.selectedIndexes = [1, 2, 3];
            expect(dropDownList.selectedIndexes).toEqual([1, 2, 3]);
            //expect(dropDownList.selectedIndexes.length).toBe(3);
            //expect(dropDownList.getAttribute('selected-indexes')).toBe('[3]');

            document.body.removeChild(document.querySelector('smart-drop-down-list'));
            expect(dropDownList).not.toBeInDOM();
        });

        it('can set dynamically the "selectedValues" property', function () {
            let dropDownList = document.createElement('smart-drop-down-list');
            document.body.appendChild(dropDownList);

            //dropDownList.dataSource = ['item 1', 'item 2', 'item 3', 'item 4'];
            //dropDownList.selectionMode = 'oneOrManyExtended';

            dropDownList.selectedValues = ['item 1', 'item 2', 'item 3'];
            expect(dropDownList.selectedValues).toEqual(['item 1', 'item 2', 'item 3']);
            expect(dropDownList.selectedValues.length).toBe(3);
            //expect(dropDownList.getAttribute('selected-values')).toBe('["item 3"]');

            document.body.removeChild(document.querySelector('smart-drop-down-list'));
            expect(dropDownList).not.toBeInDOM();
        });
         
        it('can set dynamically the "selectionMode" property', function () {
            let dropDownList = document.createElement('smart-drop-down-list'),
                allowedValues = ['oneOrManyExtended', 'zeroOrMany', 'none', 'one'];

            document.body.appendChild(dropDownList);
            //Test cases

            dropDownList.selectionMode = 'zeroOrMany';
            expect(dropDownList.selectionMode).toEqual('zeroOrMany');

            dropDownList.selectionMode = 'one';
            expect(dropDownList.selectionMode).toEqual('one');

            dropDownList.selectionMode = 'none';
            expect(dropDownList.selectionMode).toEqual('none');

            document.body.removeChild(document.querySelector('smart-drop-down-list'));
            expect(dropDownList).not.toBeInDOM();
        });

        it('can set dynamically the "sorted" property', function () {
            let dropDownList = document.createElement('smart-drop-down-list');
            document.body.appendChild(dropDownList);

            dropDownList.sorted = true;
            expect(dropDownList.sorted).toBe(true);
            expect(dropDownList.getAttribute('sorted')).toBe('');

            dropDownList.sorted = false;
            expect(dropDownList.sorted).toBe(false);
            expect(dropDownList.getAttribute('sorted')).toBe(null);

            document.body.removeChild(document.querySelector('smart-drop-down-list'));
            expect(dropDownList).not.toBeInDOM();
        });

        it('can set dynamically the "valueMember" property', function () {
            let dropDownList = document.createElement('smart-drop-down-list');
            document.body.appendChild(dropDownList);

            dropDownList.valueMember = 'itemValue';
            expect(dropDownList.valueMember).toEqual('itemValue');
            expect(dropDownList.getAttribute('value-member')).toEqual('itemValue');

            document.body.removeChild(document.querySelector('smart-drop-down-list'));
            expect(dropDownList).not.toBeInDOM();
        });
    });
});
