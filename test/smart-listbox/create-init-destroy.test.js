var describe,
    it,
    expect,
    document,
    beforeAll,
    afterAll;

describe('Testing smart-list-box, created via script and dynamicaly changed it\'s properties', function () {
    'use strict';

    describe('if it created dynamicaly', function () {
        it('exists in DOM', function () {
            let smartListBox = document.createElement('smart-list-box');
            document.body.appendChild(smartListBox);
            expect(smartListBox).toBeInDOM();

            document.body.removeChild(document.querySelector('smart-list-box'));
            expect(smartListBox).not.toBeInDOM();
        });

        it('can set dynamically the "reorder"', function () {
            let smartListBox = document.createElement('smart-list-box');
            document.body.appendChild(smartListBox);

            smartListBox.reorder = true;
            expect(smartListBox.reorder).toBe(true);
            expect(smartListBox.getAttribute('reorder')).toBe('');

            smartListBox.reorder = false;
            expect(smartListBox.reorder).toBe(false);
            expect(smartListBox.getAttribute('reorder')).toBe(null);

            document.body.removeChild(document.querySelector('smart-list-box'));
            expect(smartListBox).not.toBeInDOM();
        });

        it('can set dynamically the "dataSource" property to array of strings', function () { 
            let smartListBox = document.createElement('smart-list-box');
            smartListBox.dataSource = [1,2,3,4,5];
            document.body.appendChild(smartListBox);

            document.body.removeChild(document.querySelector('smart-list-box'));
            expect(smartListBox).not.toBeInDOM();
        });

        it('can set dynamically the "displayLoadingIndicator"', function () {
            let smartListBox = document.createElement('smart-list-box');
            document.body.appendChild(smartListBox);

            smartListBox.displayLoadingIndicator = true;
            expect(smartListBox.displayLoadingIndicator).toBe(true);
            expect(smartListBox.getAttribute('display-loading-indicator')).toBe('');

            smartListBox.displayLoadingIndicator = false;
            expect(smartListBox.displayLoadingIndicator).toBe(false);
            expect(smartListBox.getAttribute('display-loading-indicator')).toBe(null);

            document.body.removeChild(document.querySelector('smart-list-box'));
            expect(smartListBox).not.toBeInDOM();
        });

        it('can set dynamically the "displayMember" property', function () {
            let smartListBox = document.createElement('smart-list-box');
            document.body.appendChild(smartListBox);

            smartListBox.displayMember = 'itemName';
            expect(smartListBox.displayMember).toBe('itemName');
            expect(smartListBox.getAttribute('display-member')).toBe('itemName');

            document.body.removeChild(document.querySelector('smart-list-box'));
            expect(smartListBox).not.toBeInDOM();
        });

        it('can set dynamically the "dropAction" property', function () {
            let smartListBox = document.createElement('smart-list-box'),
                allowedValues = ['copy', 'move', 'none'];

            document.body.appendChild(smartListBox);

            for (let i = 0; i < allowedValues.length; i++) {
                smartListBox.dropAction = allowedValues[i];
                expect(smartListBox.dropAction).toBe(allowedValues[i]);
                expect(smartListBox.getAttribute('drop-action')).toBe(allowedValues[i]);

                switch(i) {
                    case 0:
                        //
                        break;
                    case 1:
                        //
                        break;
                    default:
                        //
                        break;
                }
            }

            document.body.removeChild(document.querySelector('smart-list-box'));
            expect(smartListBox).not.toBeInDOM();
        });

        it('can set dynamically the "filterable" property', function () {
            let smartListBox = document.createElement('smart-list-box');

            document.body.appendChild(smartListBox);

            let filterInput = smartListBox.$.filterInput;

            expect(filterInput.className.indexOf('smart-hidden') > -1).toBe(true);

            smartListBox.filterable = true;
            expect(smartListBox.filterable).toBe(true);
            expect(smartListBox.getAttribute('filterable')).toBe('');
            expect(filterInput.className.indexOf('smart-hidden') > -1).toBe(false);

            document.body.removeChild(document.querySelector('smart-list-box'));
            expect(smartListBox).not.toBeInDOM();
        });

        it('can set dynamically the "filterMode" property', function () {
            let smartListBox = document.createElement('smart-list-box'),
                allowedValues = ['contains', 'containsIgnoreCase', 'doesNotContain', 'doesNotContainIgnoreCase', 'equals', 'equalsIgnoreCase', 'startsWith', 'startsWithIgnoreCase', 'endsWith', 'endsWithIgnoreCase', 'custom'];

            document.body.appendChild(smartListBox);

            for (let i = 0; i < allowedValues.length; i++) {
                smartListBox.filterMode = allowedValues[i];
                expect(smartListBox.filterMode).toBe(allowedValues[i]);
                expect(smartListBox.getAttribute('filter-mode')).toBe(allowedValues[i]);

                switch (i) {
                    case 0:
                        //
                        break;
                    case 1:
                        //
                        break;
                    case 2:
                        //
                        break;
                    case 3:
                        //
                        break;
                    case 4:
                        //
                        break;
                    case 5:
                        //
                        break;
                    case 6:
                        //
                        break;
                    case 7:
                        //
                        break;
                    case 8:
                        //
                        break;
                    default:
                        //
                        break;
                }
            }

            document.body.removeChild(document.querySelector('smart-list-box'));
            expect(smartListBox).not.toBeInDOM();
        });

        it('can set dynamically the "grouped" property', function () {
            let smartListBox = document.createElement('smart-list-box');
            document.body.appendChild(smartListBox);

            smartListBox.grouped = true;
            expect(smartListBox.grouped).toBe(true);
            expect(smartListBox.getAttribute('grouped')).toBe('');

            smartListBox.grouped = false;
            expect(smartListBox.grouped).toBe(false);
            expect(smartListBox.getAttribute('grouped')).toBe(null);

            document.body.removeChild(document.querySelector('smart-list-box'));
            expect(smartListBox).not.toBeInDOM();
        });

        it('can set dynamically the "groupMember" property', function () {
            let smartListBox = document.createElement('smart-list-box');
            document.body.appendChild(smartListBox);

            smartListBox.groupMember = 'group';
            expect(smartListBox.groupMember).toBe('group');
            expect(smartListBox.getAttribute('group-member')).toBe('group');

            document.body.removeChild(document.querySelector('smart-list-box'));
            expect(smartListBox).not.toBeInDOM();
        });

        it('can set dynamically the "incrementalSearchDelay" property', function () {
            let smartListBox = document.createElement('smart-list-box');
            document.body.appendChild(smartListBox);

            smartListBox.incrementalSearchDelay = 1000;
            expect(smartListBox.incrementalSearchDelay).toBe(1000);
            expect(smartListBox.getAttribute('incremental-search-delay')).toBe('1000');

            document.body.removeChild(document.querySelector('smart-list-box'));
            expect(smartListBox).not.toBeInDOM();
        });

        it('can set dynamically the "incrementalSearchMode" property', function () {
            let smartListBox = document.createElement('smart-list-box'),
                allowedValues = ['contains', 'containsIgnoreCase', 'doesNotContain', 'doesNotContainIgnoreCase', 'equals', 'equalsIgnoreCase', 'startsWith', 'startsWithIgnoreCase', 'endsWith', 'endsWithIgnoreCase'];

            document.body.appendChild(smartListBox);

            for (let i = 0; i < allowedValues.length; i++) {
                smartListBox.incrementalSearchMode = allowedValues[i];
                expect(smartListBox.incrementalSearchMode).toBe(allowedValues[i]);
                expect(smartListBox.getAttribute('incremental-search-mode')).toBe(allowedValues[i]);

                switch (i) {
                    case 0:
                        //
                        break;
                    case 1:
                        //
                        break;
                    case 2:
                        //
                        break;
                    case 3:
                        //
                        break;
                    case 4:
                        //
                        break;
                    case 5:
                        //
                        break;
                    case 6:
                        //
                        break;
                    case 7:
                        //
                        break;
                    case 8:
                        //
                        break;
                    default:
                        //
                        break;
                }
            }

            document.body.removeChild(document.querySelector('smart-list-box'));
            expect(smartListBox).not.toBeInDOM();
        });

        it('can set dynamically the "loadingIndicatorPlaceholder" property', function () {
            let smartListBox = document.createElement('smart-list-box');
            document.body.appendChild(smartListBox);

            smartListBox.loadingIndicatorPlaceholder = 'Loading';
            expect(smartListBox.loadingIndicatorPlaceholder).toBe('Loading');
            expect(smartListBox.getAttribute('loading-indicator-placeholder')).toBe('Loading');

            document.body.removeChild(document.querySelector('smart-list-box'));
            expect(smartListBox).not.toBeInDOM();
        });

        it('can set dynamically the "loadingIndicatorPosition" property', function () {
            let smartListBox = document.createElement('smart-list-box'),
                allowedValues = ['bottom', 'center', 'top'];

            document.body.appendChild(smartListBox);

            for (let i = 0; i < allowedValues.length; i++) {
                smartListBox.loadingIndicatorPosition = allowedValues[i];
                expect(smartListBox.loadingIndicatorPosition).toBe(allowedValues[i]);
                expect(smartListBox.getAttribute('loading-indicator-position')).toBe(allowedValues[i]);

                switch (i) {
                    case 0:
                        //
                        break;
                    case 1:
                        //
                        break;
                    default:
                        //
                        break;
                }
            }

            document.body.removeChild(document.querySelector('smart-list-box'));
            expect(smartListBox).not.toBeInDOM();
        });

        it('can set dynamically the "placeholder" property', function () {
            let smartListBox = document.createElement('smart-list-box');
            document.body.appendChild(smartListBox);

            smartListBox.placeholder = 'Empty';
            expect(smartListBox.placeholder).toBe('Empty');
            expect(smartListBox.getAttribute('placeholder')).toBe('Empty');

            document.body.removeChild(document.querySelector('smart-list-box'));
            expect(smartListBox).not.toBeInDOM();
        });

        it('can set dynamically the "selectedIndexes" property', function () {
            let smartListBox = document.createElement('smart-list-box');
            document.body.appendChild(smartListBox);

            smartListBox.dataSource = ['item 1', 'item 2', 'item 3', 'item 4'];
            smartListBox.selectionMode = 'default';


            smartListBox.selectedIndexes = [1,2,3];
            expect(smartListBox.selectedIndexes.length).toBe(3);
     
            document.body.removeChild(document.querySelector('smart-list-box'));
            expect(smartListBox).not.toBeInDOM();
        });

        it('can set dynamically the "selectedValues" property', function () {
            let smartListBox = document.createElement('smart-list-box');
            document.body.appendChild(smartListBox);

            smartListBox.dataSource = ['item 1', 'item 2', 'item 3', 'item 4'];
            smartListBox.selectionMode = 'default';

            smartListBox.selectedValues = ['item 1', 'item 2', 'item 3'];
            expect(smartListBox.selectedValues.length).toBe(3);
          
            document.body.removeChild(document.querySelector('smart-list-box'));
            expect(smartListBox).not.toBeInDOM();
        });
         
        it('can set dynamically the "selectionMode" property', function () {
            let smartListBox = document.createElement('smart-list-box'),
                allowedValues = ['oneOrMany', 'zeroOrMany', 'none', 'one'];

            document.body.appendChild(smartListBox);

            for (let i = 0; i < allowedValues.length; i++) {
                smartListBox.selectionMode = allowedValues[i];
                expect(smartListBox.selectionMode).toBe(allowedValues[i]);
                expect(smartListBox.getAttribute('selection-mode')).toBe(allowedValues[i]);
            }

            document.body.removeChild(document.querySelector('smart-list-box'));
            expect(smartListBox).not.toBeInDOM();
        });

        it('can set dynamically the "sorted" property', function () {
            let smartListBox = document.createElement('smart-list-box');
            document.body.appendChild(smartListBox);

             smartListBox.sorted = true;
             expect(smartListBox.sorted).toBe(true);
             expect(smartListBox.getAttribute('sorted')).toBe('');

            smartListBox.sorted = false;
            expect(smartListBox.sorted).toBe(false);
            expect(smartListBox.getAttribute('sorted')).toBe(null);

            document.body.removeChild(document.querySelector('smart-list-box'));
            expect(smartListBox).not.toBeInDOM();
        });

        it('can set dynamically the "valueMember" property', function () {
            let smartListBox = document.createElement('smart-list-box');
            document.body.appendChild(smartListBox);

            smartListBox.valueMember = 'itemValue';
            expect(smartListBox.valueMember).toBe('itemValue');
            expect(smartListBox.getAttribute('value-member')).toBe('itemValue');

            document.body.removeChild(document.querySelector('smart-list-box'));
            expect(smartListBox).not.toBeInDOM();
        });
    });
});
