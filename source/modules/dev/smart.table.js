
/* Smart UI v14.1.1 (2022-07-04) 
Copyright (c) 2011-2022 jQWidgets. 
License: https://htmlelements.com/license/ */ //

/**
* Table custom element.
*/
Smart('smart-table', class Table extends Smart.ContentElement {
    /**
    * Table's properties
    */
    static get properties() {
        return {
            'autoLoadState': {
                value: false,
                type: 'boolean'
            },
            'autoSaveState': {
                value: false,
                type: 'boolean'
            },
            'columnGroups': {
                value: null,
                type: 'array?'
            },
            'columnMinWidth': {
                value: '50px',
                type: 'any'
            },
            'columnReorder': {
                value: false,
                type: 'boolean'
            },
            'columnResize': {
                value: false,
                type: 'boolean'
            },
            'columnResizeFeedback': {
                value: false,
                type: 'boolean'
            },
            'columnResizeNormalize': {
                value: false,
                type: 'boolean'
            },
            'columns': {
                value: [],
                type: 'any?',
                reflectToAttribute: false
            },
            'columnSizeMode': {
                value: 'default',
                allowedValues: ['auto', 'default'],
                type: 'string'
            },
            'conditionalFormatting': {
                value: null,
                type: 'array?',
                reflectToAttribute: false
            },
            'conditionalFormattingButton': {
                value: false,
                type: 'boolean'
            },
            'deferredScrollDelay': {
                value: 1,
                type: 'number'
            },
            'dataRowId': {
                value: null,
                type: 'string?'
            },
            'dataSource': {
                value: null,
                type: 'any?',
                reflectToAttribute: false
            },
            'dataSourceSettings': {
                value: {
                    'autoGenerateColumns': {
                        value: false,
                        type: 'boolean'
                    },
                    'sanitizeHTML': {
                        value: 'blackList',
                        allowedValues: ['all', 'blackList', 'none'],
                        type: 'string'
                    },
                    'sanitizeHTMLRender': {
                        value: 'text',
                        allowedValues: ['text', 'html'],
                        type: 'string'
                    },
                    'root': {
                        value: '',
                        type: 'string'
                    },
                    'record': {
                        value: '',
                        type: 'string'
                    },
                    'keyDataField': {
                        value: '',
                        type: 'string'
                    },
                    'parentDataField': {
                        value: '',
                        type: 'string'
                    },
                    'childrenDataField': {
                        value: '',
                        type: 'string'
                    },
                    'groupBy': {
                        value: [],
                        type: 'array'
                    },
                    'dataFields': {
                        value: [],
                        type: 'array'
                    },
                    'mapChar': {
                        value: '.',
                        type: 'string'
                    },
                    'id': {
                        value: '',
                        type: 'string'
                    },
                    'virtualDataSource': {
                        value: null,
                        type: 'any'
                    },
                    'virtualDataSourceOnExpand': {
                        value: null,
                        type: 'any'
                    }
                },
                type: 'object'
            },
            'dataTransform': {
                value: null,
                type: 'function?',
                reflectToAttribute: false
            },
            'editing': {
                value: false,
                type: 'boolean'
            },
            'editMode': {
                value: 'cell',
                allowedValues: ['cell', 'row'],
                type: 'string'
            },
            'expandHierarchy': {
                value: false,
                type: 'boolean'
            },
            'filtering': {
                value: false,
                type: 'boolean'
            },
            'columnMenu': {
                value: false,
                type: 'boolean'
            },
            'filterRow': {
                value: false,
                type: 'boolean'
            },
            'filterTemplate': {
                value: null,
                type: 'string?'
            },
            'filterOperator': {
                value: 'and',
                type: 'string?'
            },
            'footerRow': {
                value: null,
                type: 'string?'
            },
            'formulas': {
                value: false,
                type: 'boolean'
            },
            'freezeFooter': {
                value: false,
                type: 'boolean'
            },
            'freezeHeader': {
                value: false,
                type: 'boolean'
            },
            'grouping': {
                value: false,
                type: 'boolean'
            },
            'groupFormatFunction': {
                value: null,
                type: 'any'
            },
            'headerRow': {
                value: null,
                type: 'any'
            },
            'hideSelectionColumn': {
                value: false,
                type: 'boolean'
            },
            'keyboardNavigation': {
                value: false,
                type: 'boolean'
            },
            'loadColumnStateBehavior': {
                value: 'implementationOnly',
                allowedValues: ['stateOnly', 'implementationOnly', 'intersection'],
                type: 'string'
            },
            'messages': {
                value: {
                    'en': {
                        'add': 'Add condition',
                        'all': 'All columns',
                        'apply': 'Apply',
                        'between': 'Between',
                        'cancel': 'Cancel',
                        'clearFilter': 'Clear filter',
                        'close': 'Close',
                        'column': 'Column:',
                        'condition': 'Condition:',
                        'conditionalFormatting': 'Conditional Formatting',
                        'CONTAINS': 'contains',
                        'CONTAINS_CASE_SENSITIVE': 'contains (case sensitive)',
                        'DOES_NOT_CONTAIN': 'does not contain',
                        'DOES_NOT_CONTAIN_CASE_SENSITIVE': 'does not contain (case sensitive)',
                        'EMPTY': 'empty',
                        'ENDS_WITH': 'ends with',
                        'ENDS_WITH_CASE_SENSITIVE': 'ends with (case sensitive)',
                        'EQUAL': 'equal',
                        'equal': 'Equal To',
                        'EQUAL_CASE_SENSITIVE': 'equal (case sensitive)',
                        'filterCondition': 'Filter condition',
                        'filterPlaceholder': 'Filter',
                        'firstButton': 'First',
                        'fontFamily': 'Font family:',
                        'fontSize': 'Font size:',
                        'format': 'Format:',
                        'formatColumn': 'Format Column',
                        'GREATER_THAN': 'greater than',
                        'GREATER_THAN_OR_EQUAL': 'greater than or equal',
                        'greaterThan': 'Greater Than',
                        'highlight': 'Highlight',
                        'invalidValue': 'Invalid value',
                        'itemsPerPage': 'Items per page:',
                        'lastButton': 'Last',
                        'LESS_THAN': 'less than',
                        'LESS_THAN_OR_EQUAL': 'less than or equal',
                        'lessThan': 'Less Than',
                        'nextButton': 'Next',
                        'NOT_EMPTY': 'not empty',
                        'NOT_EQUAL': 'not equal',
                        'NOT_NULL': 'not null',
                        'notEqual': 'Not Equal To',
                        'NULL': 'null',
                        'ok': 'OK',
                        'previousButton': 'Previous',
                        'remove': 'Remove condition',
                        'secondValue': 'Second value:',
                        'STARTS_WITH': 'starts with',
                        'STARTS_WITH_CASE_SENSITIVE': 'starts with (case sensitive)',
                        'summaryPrefix': 'of',
                        'text': 'Text',
                        'value': 'Value:',
                        'with': 'with',
                        'columnMenuItemSortAsc': 'Sort Ascending',
                        'columnMenuItemSortDesc': 'Sort Descending',
                        'columnMenuItemReset': 'Reset',
                        'columnMenuItemRemoveSort': 'Remove Sort',
                        'columnMenuItemFilter': 'Show rows where:',
                        'columnMenuItemRemoveFilter': 'Remove Filter',
                        'columnMenuItemColumns': 'Columns',
                        'grouping': 'Group field name is not found in the dataFields collection!'
                    }
                },
                type: 'object',
                extend: true
            },
            'onCellRender': {
                value: null,
                type: 'function?',
                reflectToAttribute: false
            },
            'onColumnRender': {
                value: null,
                type: 'function?',
                reflectToAttribute: false
            },
            'onUpdateComplete': {
                value: null,
                type: 'function?',
                reflectToAttribute: false
            },
            'onInit': {
                value: null,
                type: 'function?',
                reflectToAttribute: false
            },
            'onLoad': {
                value: null,
                type: 'function?',
                reflectToAttribute: false
            },
            'pageSize': {
                value: 10,
                allowedValues: [10, 25, 50],
                type: 'int'
            },
            'pageIndex': {
                value: 0,
                type: 'int'
            },
            'paging': {
                value: false,
                type: 'boolean'
            },
            'rowDetailTemplate': {
                value: null,
                type: 'string?'
            },
            'selected': {
                value: [],
                type: 'array',
                reflectToAttribute: false
            },
            'selection': {
                value: false,
                type: 'boolean'
            },
            'selectionMode': {
                value: 'many',
                type: 'string',
                allowedValues: ['one', 'many', 'extended']
            },
            'selectionByHierarchy': {
                value: true,
                type: 'boolean'
            },
            'sort': {
                value: null,
                type: 'function?',
                reflectToAttribute: false
            },
            'sortMode': {
                value: 'none',
                type: 'string',
                allowedValues: ['none', 'one', 'many']
            },
            'stateSettings': {
                value: ['columns', 'expanded', 'filtered', 'grouped', 'selected', 'sorted'],
                type: 'array'
            },
            'tooltip': {
                value: false,
                type: 'boolean'
            },
            'virtualization': {
                value: false,
                type: 'boolean'
            }
        }
    }

    /**
     * Table's event listeners.
     */
    static get listeners() {
        return {
            'resize': '_resizeHandler',
            'conditionalFormattingButton.click': '_conditionalFormattingButtonClickHandler',
            'filterInput.keyup': '_filterInputKeyupHandler',
            'pager.change': '_pagerChangeHandler',
            'pager.pageSizeChanged': '_pagerPageSizeChanged',
            'tableContainer.change': '_tableContainerChangeHandler',
            'tableContainer.click': '_tableContainerClickHandler',
            'tableContainer.down': '_tableContainerDownHandler',
            'tableContainer.focus': '_tableContainerFocusHandler',
            'tableContainer.pointerover': '_tableContainerPointeroverHandler',
            'document.down': '_documentDownHandler',
            'document.keydown': '_tableContainerKeydownHandler',
            'document.keyup': '_tableContainerKeyupHandler',
            'document.move': '_documentMoveHandler',
            'document.up': '_documentUpHandler'
        };
    }

    template() {
        if (Smart.Templates[this.nodeName]) {
            delete Smart.Templates[this.nodeName];
        }

        if (this.virtualization) {
            return `<div id="container" class="smart-container" role="presentation">
                        <div id="header" class="smart-table-header" role="toolbar">
                            <smart-input id="filterInput" class="underlined" animation="[[animation]]" locale="[[locale]]" right-to-left="[[rightToLeft]]" theme="[[theme]]"></smart-input>
                            <div id="filterTemplateContainer" class="smart-table-filter-template-container smart-hidden"></div>
                            <smart-button id="conditionalFormattingButton" class="smart-table-toolbar-button conditional-formatting" animation="[[animation]]" right-to-left="[[rightToLeft]]" theme="[[theme]]" aria-label="Conditional Formatting"></smart-button>
                        </div>
                        <smart-scroll-viewer style="opacity: 0.99" id="virtualizationContainer" class="smart-table-virtualization-container" right-to-left="[[rightToLeft]]" theme="[[theme]]">
                            <table id="tableContainer" inner-h-t-m-l=\'[[innerHTML]]\' class="smart-table-container">
                                <content></content>
                            </table>
                        </smart-scroll-viewer>
                        <smart-pager id="pager" animation="[[animation]]" locale="[[locale]]" page-index="[[pageIndex]]" page-size="[[pageSize]]" pages-count="null" show-first-last-navigation-buttons show-page-size-selector show-prev-next-navigation-buttons show-summary right-to-left="[[rightToLeft]]" theme="[[theme]]"></smart-pager>
                        <div id="loadingIndicatorContainer" class="smart-loader-container smart-hidden" aria-label="Loading">
                            <span id="loadingIndicator" class="smart-loader" role="presentation"></span>
                        </div>
                    </div>`;
        }

        return `<div id="container" class="smart-container" role="presentation">
                    <div id="header" class="smart-table-header" role="toolbar">
                        <smart-input id="filterInput" class="underlined" animation="[[animation]]" locale="[[locale]]" right-to-left="[[rightToLeft]]" theme="[[theme]]"></smart-input>
                        <div id="filterTemplateContainer" class="smart-table-filter-template-container smart-hidden"></div>
                        <smart-button id="conditionalFormattingButton" class="smart-table-toolbar-button conditional-formatting" animation="[[animation]]" right-to-left="[[rightToLeft]]" theme="[[theme]]" aria-label="Conditional Formatting"></smart-button>
                    </div>
                    <table id="tableContainer" inner-h-t-m-l=\'[[innerHTML]]\' class="smart-table-container">
                        <content></content>
                    </table>
                    <smart-pager id="pager" animation="[[animation]]" locale="[[locale]]" page-index="[[pageIndex]]" page-size="[[pageSize]]" pages-count="null" show-first-last-navigation-buttons show-page-size-selector show-prev-next-navigation-buttons show-summary right-to-left="[[rightToLeft]]" theme="[[theme]]"></smart-pager>
                    <div id="loadingIndicatorContainer" class="smart-loader-container smart-hidden" aria-label="Loading">
                        <span id="loadingIndicator" class="smart-loader" role="presentation"></span>
                    </div>
                </div>`;
    }

    resetState(setting) {
        const that = this;

        switch (setting) {
            case 'expanded':
                that._expandedIds = [];
                that._state.expanded = [];
                break;
            case 'selected':
                that._selectedIds = [];
                that._disabledSelection = [];
                that._selectableGroupRecords = [];
                that.set('selected', []);
                that._state.selected = [];
                break;
            default:
                that._dblclickObject = { numberOfClicks: 0 };
                that._expandedIds = [];
                that._selectedIds = [];
                that._disabledSelection = [];
                that._selectableGroupRecords = [];
                that._state = { expanded: [], selected: [], sorted: [] };
                that.set('selected', []);
                break;
        }
    }

    render() {
        const that = this;

        that._render();

        super.render();
    }


    _render() {
        const that = this,
            computedStyle = getComputedStyle(that);

        that.setAttribute('role', 'presentation');
        that.$.tableContainer.id = that.id + 'TableContainer';

        that._cachedWidth = that.offsetWidth;
        that._cachedHeight = that.offsetHeight;
        that._defaults = {
            fontFamily: computedStyle.fontFamily,
            fontSize: computedStyle.fontSize,
            text: that._toHex(computedStyle.color),
            highlight: that._toHex(computedStyle.backgroundColor)
        };
        that._isMobile = Smart.Utilities.Core.isMobile;
        that._autoScrollCoefficient = Smart.Utilities.Core.Browser.Firefox ? 8 : Smart.Utilities.Core.Browser.Edge ? 16 : 4;
        that._dblclickObject = { numberOfClicks: 0 };
        that._expandedIds = [];
        that._selectedIds = [];
        that._disabledSelection = [];
        that._selectableGroupRecords = [];
        that._state = { expanded: [], selected: [], sorted: [] };
        that._rowHeight = parseFloat(computedStyle.getPropertyValue('--smart-table-row-height'));
        that._rowDetailHeight = parseFloat(computedStyle.getPropertyValue('--smart-table-row-detail-height'));
        that._animation = that.animation;

        that._setFocusable();

        if (that.selection) {
            that.$.tableContainer.setAttribute('aria-multiselectable', true);
        }

        if (that.virtualization) {
            const virtualizationContainer = that.$.virtualizationContainer;
            const table = that;

            if (virtualizationContainer) {
                virtualizationContainer._mouseWheelHandler = function (event) {
                    const that = virtualizationContainer;

                    if (that.disabled || (!that.computedHorizontalScrollBarVisibility && !that.computedVerticalScrollBarVisibility)) {
                        return;
                    }

                    if (event.shiftKey && that.computedHorizontalScrollBarVisibility) {
                        const scrollLeft = that.scrollLeft;

                        if (scrollLeft === 0 && event.deltaX < 0 ||
                            scrollLeft === that.scrollHeight && event.deltaX > 0) {
                            return;
                        }
                        event.stopPropagation();
                        event.preventDefault();

                        if (that.scrollWidth > 0) {
                            that.scrollTo(undefined, that.scrollLeft + that._getScrollCoefficient(event, that.offsetWidth));
                        }

                        return;
                    }

                    if (that.computedVerticalScrollBarVisibility) {
                        const scrollTop = that.scrollTop;

                        if (scrollTop === 0 && event.deltaY < 0 ||
                            scrollTop === that.scrollHeight && event.deltaY > 0) {
                            return;
                        }

                        event.stopPropagation();
                        event.preventDefault();

                        if (that.scrollHeight > 0) {
                            let verticalOffset = 3 * table._rowHeight;

                            if (event.deltaY <= 0) {
                                verticalOffset = -3 * table._rowHeight;
                            }

                            if (Math.abs(event.deltaY) >= 100) {
                                that.scrollTop += verticalOffset;
                            }
                            else {
                                that.scrollTop += event.deltaY;
                            }
                        }
                    }
                }

                virtualizationContainer._verticalScrollbarHandler = function (event) {
                    if (that.deferredScrollDelay === 0) {
                        that._onVerticalChange(event);
                    }
                    else {
                        if (that._verticalScrollTimer) {
                            clearTimeout(that._verticalScrollTimer);
                            delete that._verticalScrollTimer;
                        }
                        that._verticalScrollTimer = setTimeout(() => {
                            that._onVerticalChange(event);
                            delete that._verticalScrollTimer;
                        }, that.deferredScrollDelay);
                    }
                }
            }

            virtualizationContainer.hasStyleObserver = false;
            virtualizationContainer.$.verticalScrollBar.hasStyleObserver = false;
            virtualizationContainer.$.horizontalScrollBar.hasStyleObserver = false;

            that.freezeHeader = true;
            that.freezeFooter = true;
        }

        if (that.isRendered) {
            if (that.innerHTML && that.innerHTML.trim().length > 1) {
                that._initDataSourceFromHTML();
            }
            else {
                that._fullRefresh();
            }

            return;
        }

        that._createElement();

        // update row height after a small amount of time. This is required, if images are present within Table cells and loaded with delay.
        setTimeout(() => {
            const renderedRows = that.querySelectorAll('tr[row-id]');

            if (renderedRows.length > 0) {
                let isLayoutDirty = false;

                for (let i = 0; i < renderedRows.length; i++) {
                    const firstRow = renderedRows[i];

                    if (that._rowHeight < firstRow.offsetHeight) {
                        that._rowHeight = firstRow.offsetHeight;
                        isLayoutDirty = true;
                    }
                }

                if (isLayoutDirty) {
                    that.style.setProperty('--smart-table-row-height', that._rowHeight + 'px');
                    that._refreshDataRows();
                }
            }

            if (that.onLoad) {
                that.onLoad();
            }
        }, 500);


        if (that.columnMenu) {
            that._initialState = that.getState();
        }

        super.render();
    }

    _initDataSourceFromHTML() {
        const that = this;
        const context = that.context;
        that.context = that;

        if (that.hasAttribute('smart-blazor')) {
            that.$.tableContainer.innerHTML = '';
        }

        const oldColumns = that.columns;
        that.dataSource = null;
        that.rows = null;
        that.columns = null;

        const th = that.querySelectorAll('th');
        let columns = [];
        let dataFields = [];
        let rows = [];

        for (let i = 0; i < th.length; i++) {
            const label = th[i].innerHTML.trim();
            let boundColumn = { label: label, dataField: label, dataType: 'string' };

            columns.push(boundColumn);
            dataFields.push(label);
        }

        if (th.length === 0 && oldColumns && oldColumns.length > 0) {
            for (let i = 0; i < oldColumns.length; i++) {
                const oldColumn = oldColumns[i];
                const label = oldColumn.label;
                let boundColumn = { label: label, dataField: oldColumn.dataField, dataType: oldColumn.dataType };

                if (oldColumn.width) {
                    boundColumn.width = oldColumn.width;
                }

                if (oldColumn.allowResize) {
                    boundColumn.allowResize = oldColumn.allowResize;
                }

                if (oldColumn.allowFilter) {
                    boundColumn.allowFilter = oldColumn.allowFilter;
                }

                if (oldColumn.allowSort) {
                    boundColumn.allowSort = oldColumn.allowSort;
                }

                if (oldColumn.allowHide) {
                    boundColumn.allowHide = oldColumn.allowHide;
                }

                if (oldColumn.allowMenu) {
                    boundColumn.allowMenu = oldColumn.allowMenu;
                }

                if (oldColumn.freeze) {
                    boundColumn.freeze = oldColumn.freeze;
                }

                if (oldColumn.responsivePriority) {
                    boundColumn.responsivePriority = oldColumn.responsivePriority;
                }

                if (oldColumn.columnGroup) {
                    boundColumn.columnGroup = oldColumn.columnGroup;
                }

                columns.push(boundColumn);
                dataFields.push({ name: oldColumn.dataField, dataType: oldColumn.dataType });
            }
        }

        const tr = that.querySelectorAll('tr');

        for (let i = 0; i < tr.length; i++) {
            const row = tr[i];
            const newRow = {};
            const td = row.querySelectorAll('td');

            if (td.length > 0) {
                for (let j = 0; j < columns.length; j++) {
                    const column = columns[j];

                    newRow[column.dataField] = td[j].innerHTML.trim();
                }

                rows.push(newRow);
            }
        }

        const dataSource = new Smart.DataAdapter(
            {
                dataSource: rows,
                expandHierarchy: that.expandHierarchy,
                dataFields: dataFields,
                id: that.dataRowId
            });

        that.$.tableContainer.innerHTML = '';
        that.columns = columns;
        that.context = context;
        that.dataSource = dataSource;
    }
    /**
     * Called when the element is attached to the DOM.
     */
    attached() {
        const that = this;

        super.attached();

        if (that.isCompleted && that._dialog) {
            that._addDialogHandlers();
            that.getShadowRootOrBody().appendChild(that._dialog);
        }

        if (that.isRendered && that.isCompleted) {
            that.endUpdate();
        }
    }

    /**
     * Called when the element is detached from the DOM.
     */
    detached() {
        const that = this;

        super.detached();

        if (that._focusedCell && !that.$.tableContainer.contains(that._focusedCell)) {
            delete that._focusedCell;
        }

        if (!that._dialog) {
            return;
        }

        that._detachCachedTemplates();

        const dialog = that._dialog;

        dialog.removeEventListener('change', that._dialogEventHandler);
        dialog.removeEventListener('clear', that._dialogEventHandler);
        dialog.removeEventListener('click', that._dialogEventHandler);
        dialog.removeEventListener('close', that._dialogEventHandler);
        dialog.removeEventListener('filter', that._dialogEventHandler);
        dialog.remove();
    }

    /**
     * Adds a filter to a specific column.
     *
     * @param {string} dataField The column's data field.
     * @param {FilterGroup} filter FilterGroup object.
     */
    addFilter(dataField, filter) {
        const that = this,
            column = that.columnByDataField[dataField];

        if (typeof filter === 'string') {
            filter = that.dataSource._createFilter(column.dataType, [filter]);
        }
        else if (Array.isArray(filter)) {
            filter = that.dataSource._createFilter(column.dataType, filter);
        }

        if (!column || column.allowFilter === false ||
            filter instanceof Smart.Utilities.FilterGroup === false) {
            return;
        }

        dataField = column.dataField;

        if (that._clearSortByRow) {
            that._clearSortByRow(true);
        }

        if (that._designerFiltersApplied) {
            that._clearDesignerFilters();
        }

        if (!that._filterInfo.appliedFilters) {
            that._filterInfo.appliedFilters = {};
        }

        that._filterInfo.appliedFilters[dataField] = filter;
        that._refreshFilters('add');

        if (column.headerCellElement) {
            column.headerCellElement.setAttribute('filter', '');
        }

        if (that.$.filterInput && filter && !that.filterRow && !that.columnMenu) {
            that.$.filterInput.value = filter.filters[filter.filters.length - 1].value;
            that._filterInfo.query = that.$.filterInput.value;
        }

        if (that._originalDynamicColumnsOrder) {
            that._originalDynamicColumnsOrder = that._dynamicColumns.map(dC => dC.id);
        }
    }

    /**
     * Groups by a column.
     *
     * @param {string} dataField The column's data field.
     */
    addGroup(dataField) {
        const that = this;

        if (!that.grouping) {
            return;
        }

        const column = that.columnByDataField[dataField];

        if (!column || column.allowGroup === false) {
            return;
        }

        const dataSource = that.dataSource,
            groupBy = dataSource.groupBy;

        dataField = column.dataField;

        if (groupBy.indexOf(dataField) !== -1) {
            return;
        }

        groupBy.push(dataField);
        dataSource.refreshHierarchy();
        that._getSelectableGroupRecords();
        that._fullRefresh();

        that._updateState('grouped');

        if (!that._doNotFireEvent) {
            that.$.fireEvent('group', { action: 'add', dataField: dataField });
        }
    }

    /**
     * Begins an edit operation.
     *
     * @param {number|string} row The id of the row to edit.
     * @param {string} dataField Optional The dataField of the cell's column.
     */
    beginEdit(row, dataField) {
        const that = this;

        if (!that.editing) {
            return;
        }

        const column = that.columnByDataField[dataField];

        if (!column) {
            dataField = undefined;
        }
        else {
            dataField = column.dataField;
        }

        if (that.editMode === 'cell' && !dataField ||
            column && column.allowEdit === false) {
            return;
        }

        const rowObject = that.rowById[row];

        if (!rowObject) {
            return;
        }

        const parsedId = rowObject.data.$.id;

        if (that._editing) {
            that.endEdit();
        }

        that._beginEdit({
            rowId: parsedId,
            rowObject: rowObject,
            dataField: dataField
        });
    }

    /**
     * Ends the current edit operation and discards changes.
     */
    cancelEdit() {
        const that = this,
            editingInfo = that._editing;

        if (!editingInfo) {
            return;
        }

        for (let i = 0; i < editingInfo.cells.length; i++) {
            const cell = editingInfo.cells[i];

            if (cell.editor.contains(that.getRootNode().activeElement)) {
                that._focusCell(cell.element);
            }

            cell.editor.remove();
            that._setCellContent(cell.element, that._formatCellValue(editingInfo.row, that.columnByDataField[cell.dataField], cell.element));
            cell.element.classList.remove('editing');
        }

        delete that._editing;
    }

    /**
     * Clears applied filters.
     */
    clearFilters(dataField = null) {
        const that = this,
            filterInfo = that._filterInfo;

        if (!filterInfo.inputFilters &&
            !filterInfo.rowFilters &&
            !filterInfo.appliedFilters) {
            return;
        }

        that._clearFilterInput();
        that._clearRowFilters(dataField);
        delete that._filterInfo.appliedFilters;

        if (!that.dataSource.virtualDataSource) {
            that.dataSource.clearFilter();
        }

        that._fullRefresh('filter');
        that._updateState('filtered');

        if (!that._doNotFireEvent) {
            that.$.fireEvent('filter', { action: 'remove' });
        }
    }

    /**
     * Clears grouping.
     */
    clearGrouping() {
        const that = this,
            dataSource = that.dataSource,
            groupBy = dataSource.groupBy;

        if (groupBy.length === 0) {
            return;
        }

        dataSource.groupBy = [];
        dataSource.refreshHierarchy();
        that._getSelectableGroupRecords();
        that._fullRefresh();

        that._updateState('grouped');
        that.$.fireEvent('group', { action: 'remove' });
    }

    /**
     * Clears selection.
     */
    clearSelection() {
        this._clearSelection(true);
    }

    /**
     * Collapses all rows (in tree mode).
     */
    collapseAllRows() {
        const that = this;

        if (that._isExpandCollapseForbidden()) {
            return;
        }

        function collapse(siblings) {
            for (let i = 0; i < siblings.length; i++) {
                const sibling = siblings[i];

                if (sibling.leaf) {
                    continue;
                }

                if (sibling.children) {
                    collapse(sibling.children);
                }

                if (sibling.expanded) {
                    that.collapseRow(sibling.$.id);
                }
            }
        }

        collapse(that[that.nodeName.toLowerCase() === 'smart-table' ? 'dataSource' : 'rows'].boundHierarchy);
    }

    /**
     * Collapses a group.
     *
     * @param {string} index The group's hierarchical index.
     */
    collapseGroup(index) {
        const that = this;

        if (!that.grouping || that.dataSource.groupBy.length === 0) {
            return;
        }

        const group = that._getGroupByIndex(index);

        if (!group || !group.expanded) {
            return;
        }

        const groupHeader = that.$.tableContainer.querySelector(`tr[row-id="${group.$.id}"]:not([unused])`);

        if (!groupHeader) {
            // group is not in view
            group.expanded = false;
            let path = group.$.id;
            if (path === undefined || path === null) {
                that.refresh();
                return;
            }

            if (!path.replace) {
                that.refresh();
                that.$.fireEvent('group', { action: 'collapse', path: path, dataField: group.groupDataField, label: group.label });
                return;
            }

            path = path.replace('Item', '').replace(/_/ig, '.');

            that.$.fireEvent('group', { action: 'collapse', path: path, dataField: group.groupDataField, label: group.label });
            return;
        }

        if (that._isCollapsed(group)) {
            groupHeader.setAttribute('aria-expanded', false);
            groupHeader.classList.remove('expanded');
            group.expanded = false;
            return;
        }

        that._hierarchyArrowClickHandler(groupHeader);
    }

    /**
     * Collapses a row (in tree mode).
     *
     * @param {string | number} rowId The id of the row to collapse.
     */
    collapseRow(rowId) {
        const that = this;

        if (that._isExpandCollapseForbidden()) {
            return;
        }

        const rowObject = that.rowById ? that.rowById[rowId] :
            that.rows.dataItemById[rowId],
            data = rowObject.data || rowObject;

        if (!rowObject || data.leaf || !data.expanded) {
            return;
        }

        const rowElement = that.$.tableContainer.querySelector(`tr[row-id="${rowId}"]:not([unused])`);

        if (!rowElement) {
            // row is not in view
            data.expanded = false;
            that._expandedIds = that._expandedIds.filter(id => id !== data.$.id);
            that._updateState('expanded');
            return;
        }

        if (that._isCollapsed(data)) {
            rowElement.setAttribute('aria-expanded', false);
            rowElement.classList.remove('expanded');
            data.expanded = false;
            that._expandedIds = that._expandedIds.filter(id => id !== data.$.id);
            that._updateState('expanded');
            that.$.fireEvent('collapse', { record: data });
            return;
        }

        that._hierarchyArrowClickHandler(rowElement);
    }

    /**
     * Collapses the details of a row
     */
    collapseRowDetails(rowId) {
        const that = this;

        if (!that.rowDetailTemplate) {
            return
        }

        const rowObject = that.rowById ? that.rowById[rowId] : that.rows.dataItemById[rowId],
            data = rowObject.data || rowObject;

        if (!rowObject || !data) {
            return;
        }

        const row = that.$.tableContainer.querySelector(`tr[row-id="${rowId}"]:not([unused])`);

        if (!row) {
            return
        }

        const detailRow = row.nextElementSibling;

        if (!detailRow || !detailRow.classList.contains('smart-table-row-detail') || detailRow.classList.contains('collapsed')) {
            return
        }

        that._toggleRowDetail(row, data.$.id);
    }

    /**
     * Collapse All Row Details
     */
    collapseAllRowDetails() {
        const that = this;

        if (!that.rowDetailTemplate || !that.dataSource) {
            return
        }

        let rows = that.dataSource.boundSource;

        if (!rows) {
            rows = that.$.tableContainer.querySelectorAll('tr[row-id]:not([unused])');
        }

        for (let i = 0; i < rows.length; i++) {
            that.collapseRowDetails(rows[i].$.id);
        }
    }

    /**
     * Expand All Row Details
     */
    expandAllRowDetails() {
        const that = this;

        if (!that.rowDetailTemplate || !that.dataSource) {
            return
        }

        let rows = that.dataSource.boundSource;

        if (!rows) {
            rows = that.$.tableContainer.querySelectorAll('tr[row-id]:not([unused])');
        }

        for (let i = 0; i < rows.length; i++) {
            that.expandRowDetails(rows[i].$.id);
        }
    }


    updateRow(rowId, data, updateAllFields) {
        const that = this;
        const rowObject = that.rowById ? that.rowById[rowId] : that.rows.dataItemById[rowId];

        if (!rowObject) {
            return;
        }

        const oldSelectedIds = that._selectedIds.slice(0);
        that._editing = true;
        that.__updatedRows = true;
        let grouped = [];
        if (that.dataSource && that.dataSource.groupBy && that.dataSource.groupBy.toArray) {
            grouped = that.dataSource.groupBy.toArray().slice(0);
        }

        const notify = that.dataSource.boundSource.canNotify;
        that.dataSource.boundSource.canNotify = false;

        const updateDataByDataField = (dataField) => {
            rowObject.data[dataField] = data[dataField];

            if (that.dataSource.id && rowObject && rowObject.data && rowObject.data.$) {
                rowObject.data.$.id = data[that.dataSource.id];
            }

            if (rowObject) {
                if (rowObject.data.$ && rowObject.data.$.index !== undefined) {
                    const index = rowObject.data.$.index;
                    const dataBoundArray = that.dataSource.dataSource;
                    const getValue = () => {
                        const value = data[dataField];

                        if (value === null || value === undefined) {
                            const column = that.columnByDataField[dataField];

                            if (column) {
                                if (column.dataType === 'number') {
                                    return 0;
                                }
                                else if (column.dataType === 'boolean') {
                                    return false;
                                }
                                else if (column.dataType === 'date') {
                                    return new Date();
                                }
                                else {
                                    return '';
                                }
                            }
                            else {
                                return '';
                            }
                        }

                        return value;
                    }

                    if (dataBoundArray && dataBoundArray[index]) {
                        dataBoundArray[index][dataField] = getValue();
                    }

                    if (that.dataSource[index]) {
                        if (grouped.length > 0 && !that._dirtyHierarchy) {
                            const oldValue = that.dataSource[index][dataField];
                            const newValue = getValue();

                            if (oldValue !== newValue && grouped.indexOf(dataField) >= 0) {
                                const expandedGroups = that._getExpandedGroups(that.dataSource.boundHierarchy);
                                that._dirtyHierarchy = expandedGroups;
                            }
                        }

                        that.dataSource[index][dataField] = getValue();
                    }
                }
            }
        }

        for (let i = 0; i < that.columns.length; i++) {
            const column = that.columns[i];

            if (data[column.dataField] === undefined) {
                continue;
            }

            updateDataByDataField(column.dataField);
        }

        if (updateAllFields) {
            const dataFields = that.dataSource.dataFields;

            if (dataFields) {
                for (let i = 0; i < dataFields.length; i++) {
                    if (dataFields[i].map) {
                        updateDataByDataField(dataFields[i].map);
                        continue;
                    }

                    updateDataByDataField(dataFields[i].name);
                }
            }
        }

        that._editing = false;
        that.dataSource.boundSource.canNotify = notify;

        if (that.__updating) {
            return;
        }

        that.dataSource.refreshHierarchy();
        that._fullRefresh(undefined, oldSelectedIds, 'update');
    }

    addRow(data) {
        const that = this;

        let grouped = [];

        const notify = that.dataSource.boundSource.canNotify;
        that.dataSource.boundSource.canNotify = false;
        that._editing = true;
        that.__updatedRows = true;

        if (that.dataSource && that.dataSource.groupBy && that.dataSource.groupBy.toArray) {
            grouped = that.dataSource.groupBy.toArray().slice(0);

            if (grouped.length > 0) {
                that.dataSource.beginUpdate();
            }
        }

        if (grouped.length > 0) {
            if (that.dataSource) {
                that.dataSource.add(data, true);
            }
            else {
                that._addNewRow(data, 0);
            }
        }
        else {
            if (that.dataSource) {
                if (that.dataSource.boundHierarchy && that.$.tableContainer && that.$.tableContainer.getAttribute('role') === 'treegrid') {
                    const parentId = data[that.dataSource.parentDataField];
                    that.dataSource.add(data, parentId);
                }
                else {
                    that.dataSource.add(data, true);
                }
            }
            else {
                that._addNewRow(data, 0);
            }
        }
        that.dataSource.boundSource.canNotify = notify;
        that._editing = false;

        if (grouped.length > 0 || (that.dataSource.boundHierarchy && that.$.tableContainer && that.$.tableContainer.getAttribute('role') === 'treegrid')) {
            if (that._dataSourceUpdatingTimer) {
                clearTimeout(that._dataSourceUpdatingTimer);
            }

            that._dataSourceUpdatingTimer = setTimeout(() => {
                that._doNotFireEvent = true;
                const expandedGroups = that._getExpandedGroups(that.dataSource.boundHierarchy);

                grouped.forEach(dataField => that.addGroup(dataField));

                that.dataSource.endUpdate();
                that._restoreExpandedGroups(expandedGroups);
                that._fullRefresh('update');
                that._doNotFireEvent = false;
            }, 50);
        }
        else {
            if (that._dataSourceUpdatingTimer) {
                clearTimeout(that._dataSourceUpdatingTimer);
            }

            that._dataSourceUpdatingTimer = setTimeout(() => {
                that._doNotFireEvent = true;
                that._fullRefresh('update');
                that._doNotFireEvent = false;
            });
        }
    }

    removeRow(rowId) {
        const that = this;
        const rowObject = that.rowById ? that.rowById[rowId] : that.rows.dataItemById[rowId];

        if (!rowObject) {
            if (that.dataSource && that.dataSource.dataItemById) {
                const data = that.dataSource.dataItemById[rowId];

                if (data) {
                    const index = data.$ !== undefined ? data.$.index : 0;
                    that.dataSource.removeAt(index)
                    // remove selected row id, when the row is removed.
                    if (that._selectedIds.indexOf(rowId) >= 0) {
                        that._selectedIds.splice(that._selectedIds.indexOf(rowId), 1);
                        that._updateSelectAllState();
                        that._updateState('selected');
                        that.$.fireEvent('change', { type: 'remove' });
                    }

                    if (!that.virtualization || !that.__updating) {
                        that._fullRefresh('update');
                    }
                }
            }
            return;
        }

        const data = rowObject.data || rowObject;
        const index = data.$ !== undefined ? data.$.index : 0;
        const notify = that.dataSource.boundSource.canNotify;
        that.dataSource.boundSource.canNotify = false;
        that._editing = true;
        that.__updatedRows = true;

        let grouped = [];

        if (that.dataSource && that.dataSource.groupBy && that.dataSource.groupBy.toArray) {
            grouped = that.dataSource.groupBy.toArray().slice(0);
            if (grouped.length > 0) {
                that.dataSource.beginUpdate();
            }
        }

        that._doNotFireEvent = true;

        if (that._sortColumns && that._sortColumns.length) {
            that.dataSource.remove(data)
        }
        else {
            that.dataSource.removeAt(index)
        }

        // remove selected row id, when the row is removed.
        if (that._selectedIds.indexOf(rowId) >= 0) {
            that._selectedIds.splice(that._selectedIds.indexOf(rowId), 1);
            that._updateSelectAllState();
            that._updateState('selected');
            that.$.fireEvent('change', { type: 'remove' });
        }

        that._doNotFireEvent = false;
        that.dataSource.boundSource.canNotify = notify;
        that._editing = false;

        if (grouped.length > 0) {
            if (that._dataSourceUpdatingTimer) {
                clearTimeout(that._dataSourceUpdatingTimer);
            }

            that._dataSourceUpdatingTimer = setTimeout(() => {
                const expandedGroups = that._getExpandedGroups(that.dataSource.boundHierarchy);

                grouped.forEach(dataField => that.addGroup(dataField));

                that.dataSource.endUpdate();
                that._restoreExpandedGroups(expandedGroups);
                that._fullRefresh('update');
            }, 50);
        }

        if (!that.virtualization || !that.__updating) {
            that._fullRefresh('update');
        }
    }
    /**
     * Expands the details of a row
     */
    expandRowDetails(rowId) {
        const that = this;

        if (!that.rowDetailTemplate) {
            return
        }

        const rowObject = that.rowById ? that.rowById[rowId] : that.rows.dataItemById[rowId];

        if (!rowObject) {
            return;
        }

        const data = rowObject.data || rowObject;

        if (!rowObject || !data) {
            return;
        }

        const row = that.$.tableContainer.querySelector(`tr[row-id="${rowId}"]:not([unused])`);

        if (!row) {
            return
        }

        const detailRow = row.nextElementSibling;

        if (!detailRow && !that.virtualization || detailRow && detailRow.classList.contains('smart-table-row-detail') && !detailRow.classList.contains('collapsed')) {
            return
        }

        that._toggleRowDetail(row, data.$.id);
    }

    /**
     * Ends the current edit operation and saves changes.
     */
    endEdit() {
        const that = this,
            editingInfo = that._editing;

        if (!editingInfo) {
            return;
        }

        const row = editingInfo.row,
            data = row.data,
            editingResults = [];
        let valid = true;

        for (let i = 0; i < editingInfo.cells.length; i++) {
            const cell = editingInfo.cells[i],
                column = that.columnByDataField[cell.dataField],
                cellElement = cell.element,
                editor = cell.editor;
            let newValue;

            if (column.editor && column.editor.template) {
                if (column.editor.getValue) {
                    newValue = column.editor.getValue(editor);
                }
            }
            else {
                newValue = editor.value;

                if (editor instanceof HTMLInputElement) {
                    if (editor.type === 'number') {
                        newValue = parseFloat(newValue);
                    }
                    else if (editor.type === 'date') {
                        newValue = new Date(newValue);

                        if (isNaN(newValue.getTime())) {
                            newValue = null;
                        }
                    }
                }
            }

            if (column.validation) {
                const validationResult = column.validation(newValue),
                    invalid = validationResult !== undefined && validationResult !== true;

                if (invalid) {
                    let message;

                    if (typeof validationResult === 'object' && validationResult.message) {
                        message = validationResult.message;
                    }
                    else {
                        message = that.localize('invalidValue');
                    }

                    cellElement.setAttribute('validation-message', message);
                }
                else {
                    cellElement.removeAttribute('validation-message');
                }

                cellElement.classList.toggle('invalid', invalid);
                valid = valid && !invalid;
            }

            editingResults.push({ column: column, newValue: newValue });
        }

        if (!valid) {
            return;
        }

        function completeEditOperation(noVirtualDataSource, dataToUse) {
            for (let i = 0; i < editingInfo.cells.length; i++) {
                const cell = editingInfo.cells[i],
                    editingResult = editingResults[i],
                    column = editingResult.column,
                    editor = cell.editor;

                if (editor.contains(that.getRootNode().activeElement)) {
                    that._focusCell(cell.element);
                }

                editor.remove();

                if (noVirtualDataSource) {
                    dataToUse[cell.dataField] = editingResult.newValue;

                    if (column.transform) {
                        dataToUse[column.dataField] = column.transform(editingResult.newValue);
                    }
                }

                that._setCellContent(cell.element, that._formatCellValue(row, column, cell.element));
                cell.element.classList.remove('editing');

                that.$.fireEvent('cellEndEdit', { id: dataToUse.$.id, row: dataToUse, value: dataToUse[cell.dataField], dataField: cell.dataField });
            }

            that._updateCellsWithFormulas();

            if (that.editMode === 'row') {
                that.$.fireEvent('rowEndEdit', { id: dataToUse.$.id, row: dataToUse });
            }
        }

        if (that.dataSource.virtualDataSource) {
            const changedData = Object.assign({}, data);

            for (let i = 0; i < editingInfo.cells.length; i++) {
                const cell = editingInfo.cells[i],
                    editingResult = editingResults[i],
                    column = editingResult.column;

                changedData[cell.dataField] = editingResult.newValue;

                if (column.transform) {
                    changedData[column.dataField] = column.transform(editingResult.newValue);
                }
            }

            for (const column of that._columns) {
                if (changedData[column.dataField] instanceof Date) {
                    changedData[column.dataField] = changedData[column.dataField].toISOString().slice(0, 10);
                }
            }

            that._editing.row.data = changedData;

            that._requestVirtualDataSource('update', function (confirm) {
                if (confirm) {
                    completeEditOperation(false, changedData);
                }
                else {
                    that._editing.row.data = data;
                    that.cancelEdit();
                }

                return confirm;
            });
        }
        else {
            completeEditOperation(true, data);
        }

        delete that._editing;
    }

    /**
     * Expands all rows (in tree mode).
     */
    expandAllRows() {
        const that = this;

        if (that._isExpandCollapseForbidden()) {
            return;
        }

        that.beginUpdate();

        const rows = that[that.nodeName.toLowerCase() === 'smart-table' ? 'dataSource' : 'rows'].boundHierarchy;

        if (rows) {
            for (let i = 0; i < rows.length; i++) {
                const row = rows[i];

                const expandRow = (row) => {
                    if (row.leaf) {
                        return;
                    }

                    row.expanded = true;

                    if (!row.children) {
                        return;
                    }

                    for (let j = 0; j < row.children.length; j++) {
                        const subRow = row.children[j];

                        expandRow(subRow);
                    }
                }

                expandRow(row);
            }
        }

        that.endUpdate();
    }

    isGroupExpanded(index) {
        const that = this,
            dataSource = that.dataSource;

        if (!that.grouping || dataSource.groupBy.length === 0) {
            return;
        }

        const group = that._getGroupByIndex(index);

        if (!group) {
            return false;
        }

        return group.expanded;
    }

    /**
     * Expands a group.
     *
     * @param {string} index The group's hierarchical index.
     */
    expandGroup(index) {
        const that = this,
            dataSource = that.dataSource;

        if (!that.grouping || dataSource.groupBy.length === 0) {
            return;
        }

        const group = that._getGroupByIndex(index);

        if (!group) {
            return;
        }

        const propertyChangedHandler = that._doNotFireEvent,
            animation = that.animation,
            groupHeader = that.$.tableContainer.querySelector(`tr[row-id="${group.$.id}"]:not([unused])`);
        let skipExpand = false;

        if (propertyChangedHandler) {
            that.animation = 'none';
        }

        if (!groupHeader) {
            // group is not in view
            group.expanded = true;

            if (!group.expanded && !propertyChangedHandler) {
                let path = group.$.id;
                path = path.replace('Item', '').replace(/_/ig, '.');

                that.$.fireEvent('group', { action: 'expand', path: path, dataField: group.groupDataField, label: group.label });
            }

            return;
        }

        if (that._isCollapsed(group)) {
            if (propertyChangedHandler) {
                skipExpand = true;
            }
            else {
                let parent = group.parent;

                if (parent && !parent.expanded) {
                    that.expandGroup(group.parent.$.id.replace('Item', '').replace(/_/g, '.'));
                }
            }
        }

        if (!group.expanded) {
            if (skipExpand || propertyChangedHandler) {
                group.expanded = true;
                groupHeader.setAttribute('aria-expanded', true);
                groupHeader.classList.add('expanded');
            }
            else {
                that._hierarchyArrowClickHandler(groupHeader, propertyChangedHandler);
            }
        }

        if (propertyChangedHandler) {
            group.expanded = true;
            groupHeader.setAttribute('aria-expanded', true);
            groupHeader.classList.add('expanded');

            requestAnimationFrame(() => that.animation = animation);
        }
    }

    /**
   * Expands All Row Groups
   */
    expandAllRootGroups() {
        const that = this;

        if (!that.grouping) {
            return;
        }

        that.beginUpdate();

        const groupRows = that.dataSource.boundHierarchy;

        if (groupRows) {
            for (let i = 0; i < groupRows.length; i++) {
                const group = groupRows[i];
                group.expanded = true;
            }
        }

        that.endUpdate();
    }

    /**
     * Expands All Row Groups
     */
    expandAllGroups() {
        const that = this;

        if (!that.grouping) {
            return;
        }

        that.beginUpdate();

        const groupRows = that.dataSource.boundHierarchy;

        if (groupRows) {
            for (let i = 0; i < groupRows.length; i++) {
                const group = groupRows[i];

                const expandGroup = (group) => {
                    group.expanded = true;

                    if (!group.children) {
                        return;
                    }

                    for (let j = 0; j < group.children.length; j++) {
                        const subGroup = group.children[j];

                        expandGroup(subGroup);
                    }
                }

                expandGroup(group);
            }
        }

        that.endUpdate();
    }

    /**
     * Expands All Row Groups
     */
    collapseAllGroups() {
        const that = this;

        if (!that.grouping) {
            return;
        }

        that.beginUpdate();

        const groupRows = that.dataSource.boundHierarchy;

        if (groupRows) {
            for (let i = 0; i < groupRows.length; i++) {
                const group = groupRows[i];
                group.expanded = false;
            }
        }

        that.endUpdate();
    }

    /**
     * Expands a row (in tree mode).
     *
     * @param {string | number} rowId The id of the row to expand.
     */
    expandRow(rowId) {
        const that = this;

        if (that._isExpandCollapseForbidden()) {
            return;
        }

        const rowObject = that.rowById ? that.rowById[rowId] :
            that.rows.dataItemById[rowId],
            data = rowObject.data || rowObject;

        if (!rowObject || data.leaf) {
            return;
        }

        const rowElement = that.$.tableContainer.querySelector(`tr[row-id="${rowId}"]:not([unused])`);

        if (!rowElement) {
            // row is not in view
            data.expanded = true;

            if (that._expandedIds.indexOf(data.$.id) === -1) {
                that._expandedIds.push(data.$.id);
            }

            that._updateState('expanded');
            that.$.fireEvent('expand', { id: data.$.id, record: data });
            return;
        }

        if (that._isCollapsed(data)) {
            let parent = data.parent;

            if (parent && !parent.expanded) {
                that.expandRow(parent.$.id);
            }
        }

        if (!data.expanded) {
            that._hierarchyArrowClickHandler(rowElement);
        }
    }

    /**
     * Exports the Table's data.
     *
     * @param {String} dataFormat The file format to export to.
     * @param {String} fileName Optional The name of the file to export to.
     * @param {boolean} exportFiltered Optional If set to true, exports only filtered records.
     * @param {Function} callback Optional A callback function to pass the exported data to (if fileName is not provided).
     */
    exportData(dataFormat, fileName, exportFiltered, callback) {
        const that = this,
            // columns = that._columns,
            columns = that._columns.filter(col => col.visible),
            columnGroups = that.columnGroups,
            dataSource = that.dataSource,
            computedStyle = getComputedStyle(that),
            borderColor = computedStyle.borderRightColor,
            dataExporter = new Smart.Utilities.DataExporter(undefined, dataSource.groupBy.toArray()),
            headerRow = {};
        let headerCells = Array.from(that.$.tableContainer.firstElementChild.querySelectorAll('th'));
        let dataSourceToExport;

        function processHierarchy(siblings) {
            const result = [];

            siblings.forEach(child => {
                if (exportFiltered && child.$.filtered === false) {
                    return;
                }

                result.push(child);

                if (!child.leaf) {
                    child._expanded = child.expanded;

                    if (child.children) {
                        child.children = processHierarchy(child.children);

                        if (child.children.length === 0) {
                            child._expanded = undefined;
                            child.children = undefined;
                            child.leaf = true;
                        }
                    }
                }
            });

            return result;
        }

        if (dataSource.virtualDataSource) {
            dataSourceToExport = [];

            for (let i = 0; i < that.rows.length; i++) {
                dataSourceToExport.push(that.rows[i].data);
            }
        }
        else if (dataSource.boundHierarchy && !that.grouping) {
            dataExporter.hierarchical = true;
            dataSourceToExport =
                processHierarchy(JSON.parse(JSON.stringify(dataSource.boundHierarchy, (key, value) => {
                    if (key === 'parent') {
                        return undefined;
                    }

                    return value;
                })));
        }
        else {
            dataSourceToExport = Array.from(dataSource.toArray());

            if (exportFiltered) {
                dataSourceToExport = dataSourceToExport.filter(record => record.$.filtered !== false);
            }
        }

        dataExporter.style = {
            border: '1px solid ' + borderColor,
            borderCollapse: 'collapse',
            backgroundColor: computedStyle.backgroundColor,
            color: computedStyle.color,
            fontFamily: 'Helvetica',
            header: {
                border: '1px solid ' + borderColor,
                fontWeight: 'bold'
            },
            columns: {
                border: '1px solid ' + borderColor
            }
        };

        headerCells = headerCells.filter((cell) => {
            return cell.classList.contains('smart-table-select-all') === false;
        });

        for (let i = 0; i < columns.length; i++) {
            const column = columns[i],
                headerCell = headerCells[i],
                headerStyle = {},
                columnStyle = {};
            let columnWidth = headerCell.offsetWidth + 'px';

            headerRow[column.dataField] = column.label;

            if (column.dataType === 'date') {
                columnStyle.format = 'd';
            }

            headerStyle.width = columnWidth;

            dataExporter.style.header[column.dataField] = headerStyle;
            dataExporter.style.columns[column.dataField] = columnStyle;
        }

        if (columnGroups) {
            dataExporter.header = { columns: columns, columngroups: columnGroups };
        }
        else {
            dataSourceToExport.unshift(headerRow);
        }

        return dataExporter.exportData(dataSourceToExport, dataFormat, fileName, callback);
    }

    /**
     * Returns the index of the Row that corresponds to the rowId
     * @param {string | number} rowId - the id of the row
     */
    getRowIndexById(rowId) {
        const that = this,
            targetRow = that.rowById[rowId],
            dataSource = that.dataSource;

        if (!dataSource || !targetRow) {
            return -1
        }

        return targetRow.data && targetRow.data.$ ? targetRow.data.$.index : -1
    }

    /**
     * Returns an array of selected row ids.
     */
    getSelection() {
        const that = this;

        if (that._selectableGroupRecords.length === 0) {
            return that._selectedIds.filter(id => !('' + id).startsWith('Item'));
        }

        return that._selectedIds.filter(id => that._selectableGroupRecords.indexOf(id) === -1 && !('' + id).startsWith('Item'));
    }

    /**
     * Gets the Table's state.
     */
    getState() {
        return JSON.parse(this._stringifyState());
    }

    /**
     * Returns the value of a cell.
     *
     * @param {number|string} row The id of the cell's row.
     * @param {string} dataField The dataField of the cell's column.
     */
    getValue(row, dataField) {
        const that = this,
            column = that.columnByDataField[dataField];

        if (!column) {
            return;
        }

        let rowObject = that.rowById[row];

        if (rowObject) {
            return rowObject.data[column.dataField];
        }

        rowObject = that.dataSource.dataItemById[row];

        if (rowObject) {
            return rowObject[column.dataField];
        }
    }

    /**
     * Loads the Table's state.
     *
     * @param {Object} state Optional An object returned by one of the methods getState or saveState.
     */
    loadState(state) {
        const that = this;

        if (!state) {
            state = window.localStorage.getItem('smartTable' + that.id);

            if (!state) {
                return;
            }
        }

        const stateSettings = that.stateSettings;
        let toRefresh = false;

        that._loadingState = true;

        if (typeof state === 'string') {
            state = JSON.parse(state);
        }

        if (stateSettings.indexOf('columns') !== -1) {
            // columns
            const loadColumnStateBehavior = that.loadColumnStateBehavior,
                columnsFromTableDefinition = that._columns,
                columnsFromState = [],
                loadedColumns = state.columns;

            for (let i = 0; i < loadedColumns.length; i++) {
                let columnFromState = Object.assign({}, loadedColumns[i]);
                const columnFromTableDefinition = columnsFromTableDefinition.find(col => col.dataField === columnFromState.dataField);

                if (!columnFromTableDefinition) {
                    if (loadColumnStateBehavior !== 'implementationOnly') {
                        columnsFromState.push(columnFromState);
                    }

                    continue;
                }

                const labelFromTableDefinition = columnFromTableDefinition.label,
                    propertiesToKeep = ['editor', 'formatFunction', 'templateElement', 'templateElementSettings', 'transform', 'validation'];

                if (loadColumnStateBehavior !== 'stateOnly') {
                    propertiesToKeep.push('label');
                }

                for (let property in columnFromTableDefinition) {
                    if (propertiesToKeep.indexOf(property) === -1) {
                        delete columnFromTableDefinition[property];
                    }
                }

                columnFromState = Object.assign(columnFromTableDefinition, columnFromState);

                if (loadColumnStateBehavior !== 'stateOnly' && labelFromTableDefinition) {
                    columnFromState.label = labelFromTableDefinition;
                }

                columnsFromState.push(columnFromState);
            }

            if (loadColumnStateBehavior !== 'stateOnly') {
                for (let i = 0; i < columnsFromTableDefinition.length; i++) {
                    const oldColumn = columnsFromTableDefinition[i],
                        matchingColumn = columnsFromState.find(col => col.dataField === oldColumn.dataField);

                    if (!matchingColumn) {
                        columnsFromState.push(oldColumn);
                    }
                }
            }

            that.columns = columnsFromState;
            that._initColumns(true);
            toRefresh = true;

            if (that._formattingPanel) {
                that._formattingPanel.columns = that._columns;
            }
        }

        if (that.grouping) {
            // column grouping
            const dataSource = that.dataSource,
                oldGrouped = that.dataSource.groupBy;

            state.grouped = state.grouped || [];

            if (JSON.stringify(oldGrouped._array) !== JSON.stringify(state.grouped)) {
                that.dataSource.groupBy = state.grouped;
                dataSource.refreshHierarchy();
                toRefresh = true;
            }
        }
        else if (that.hasAttribute('hierarchy') &&
            stateSettings.indexOf('expanded') !== -1 &&
            JSON.stringify(that._expandedIds.slice(0).sort()) !==
            JSON.stringify(state.expanded.slice(0).sort())) {
            // expanded rows
            that.collapseAllRows();
            that._expandedIds = state.expanded;
            toRefresh = true;
        }

        if (stateSettings.indexOf('selected') !== -1 && state.selected.slice &&
            JSON.stringify(that._selectedIds.slice(0).sort()) !==
            JSON.stringify(state.selected.slice(0).sort())) {
            // selected rows
            that._selectedIds = state.selected;
            toRefresh = true;
        }

        if (toRefresh) {
            that._initRows();
            that.refresh();
        }

        filtered:
        if (stateSettings.indexOf('filtered') !== -1) {
            // applied fitering
            const filtering = that.filtering,
                loadedFilterInfo = state.filtered;

            that.clearFilters();

            if (!loadedFilterInfo) {
                break filtered;
            }

            if (filtering && that.filterRow && loadedFilterInfo.rowFilters) {
                const filterRow = that.$.tableContainer.querySelector('.smart-table-filter-row'),
                    selectionColumnCorrection = Number(that.selection),
                    filterRowValues = state.filtered.filterRowValues;

                for (let i = 0; i < that._columns.length; i++) {
                    const loadedInfo = filterRowValues[i];

                    if (!loadedInfo) {
                        continue;
                    }

                    const dataType = that._columns[i].dataType,
                        container = filterRow.children[i + selectionColumnCorrection].firstElementChild,
                        condition = that._filterInfo[dataType === 'string' ? 'stringConditions' : 'numberAndDateConditions'].
                            find(cond => cond.value === loadedInfo.condition);

                    if (['EMPTY', 'NOT_EMPTY', 'NULL', 'NOT_NULL'].indexOf(condition.value) === -1) {
                        if (dataType === 'date') {
                            const value = new Date(loadedInfo.value),
                                month = (value.getMonth() + 1).toString(),
                                date = value.getDate().toString();

                            container.children[0].value = `${value.getFullYear()}-${'0'.repeat(2 - month.length)}${month}-${'0'.repeat(2 - date.length)}${date}`;
                        }
                        else {
                            container.children[0].value = loadedInfo.value;
                        }
                    }

                    container.children[1].value = condition.label;
                    container.children[1].$.input.dataValue = condition.value;
                }

                that._applyRowFilters();
            }
            else if (filtering && loadedFilterInfo.inputFilters) {
                that.$.filterInput.value = loadedFilterInfo.query;
                that._filterByAll(loadedFilterInfo.query);
            }
            else if (loadedFilterInfo.appliedFilters) {
                if (!that._filterInfo.appliedFilters) {
                    that._filterInfo.appliedFilters = {};
                }

                for (let dataField in loadedFilterInfo.appliedFilters) {
                    const currentFilterInfo = loadedFilterInfo.appliedFilters[dataField],
                        filterGroup = new window.Smart.Utilities.FilterGroup();

                    currentFilterInfo.filters.forEach((filter, index) => {
                        const filterObject = filterGroup.createFilter(filter.type.replace('Filter', ''), filter.value, filter.condition);

                        filterGroup.addFilter(currentFilterInfo.logicalOperators[index], filterObject);
                    });

                    that._filterInfo.appliedFilters[dataField] = filterGroup;
                }

                that._refreshFilters('add');
            }
        }

        if (stateSettings.indexOf('sorted') !== -1) {
            // sorted columns
            that.clearSort();

            if (state.sorted.forEach) {
                state.sorted.forEach(col => {
                    that.sortBy(col.dataField, col.direction);
                });
            }
        }

        stateSettings.forEach(setting => that._updateState(setting, false));

        if (that.autoSaveState) {
            window.localStorage.setItem('smartTable' + that.id, that._stringifyState());
        }

        delete that._loadingState;
    }

    /**
     * Navigates to a page.
     *
     * @param {number} pageIndex The zero-based page index to navigate to.
     */
    navigateTo(pageIndex) {
        const that = this;

        if (isNaN(pageIndex) || pageIndex === null) {
            return;
        }

        const oldValue = that.pageIndex;

        that.pageIndex = Math.max(Math.min(Math.round(pageIndex), that.$.pager.pagesCount - 1), 0);

        if (that.paging && that.pageIndex !== oldValue) {
            that._fullRefresh('pageIndexChange');
            that.$.fireEvent('page', { action: 'pageIndexChange' });
        }
    }

    /**
     * Removes filters applied to a specific column.
     *
     * @param {string} dataField The column's data field.
     */
    removeFilter(dataField) {
        const that = this,
            column = that.columnByDataField[dataField];

        if (column && that.filterRow) {
            that.clearFilters(dataField);
        }

        if (!that._filterInfo.appliedFilters || !column) {
            return;
        }

        dataField = column.dataField;

        if (that._clearSortByRow) {
            that._clearSortByRow(true);
        }

        if (that._designerFiltersApplied) {
            that._clearDesignerFilters(dataField);
        }

        delete that._filterInfo.appliedFilters[dataField];
        that._refreshFilters('remove');

        if (that._originalDynamicColumnsOrder) {
            that._originalDynamicColumnsOrder = that._dynamicColumns.map(dC => dC.id);
        }
    }

    /**
     * Removes grouping by a column.
     *
     * @param {string} dataField The column's data field.
     */
    removeGroup(dataField) {
        const that = this,
            column = that.columnByDataField[dataField];

        if (!that.grouping || !column) {
            return;
        }

        dataField = column.dataField;

        const dataSource = that.dataSource,
            groupBy = dataSource.groupBy,
            index = groupBy.indexOf(dataField);

        if (index === -1) {
            return;
        }

        groupBy.splice(index, 1);
        dataSource.refreshHierarchy();
        that._getSelectableGroupRecords();
        that._fullRefresh();

        that._updateState('grouped');
        that.$.fireEvent('group', { action: 'remove', dataField: dataField });
    }

    /**
     * Saves the Table's state.
     */
    saveState() {
        const that = this,
            stringifiedState = that._stringifyState();

        window.localStorage.setItem('smartTable' + that.id, stringifiedState);

        return JSON.parse(stringifiedState);
    }

    enableSelect(rowId) {
        const that = this;

        if (!that.selection) {
            return;
        }

        if (that._disabledSelection.indexOf(rowId) >= 0) {
            that._disabledSelection.splice(that._disabledSelection.indexOf(rowId), 1);
            that._fullRefresh('update');
        }
    }

    disableSelect(rowId) {
        const that = this;

        if (!that.selection) {
            return;
        }

        that._disabledSelection.push(rowId);
        that._fullRefresh('update');
    }
    /**
     * Selects one or more rows.
     *
     * @param {string | number | (string | number)[]} rowId The id of the row (or an array of row ids) to select.
     */
    select(rowId) {
        const that = this;

        if (!that.selection) {
            return;
        }

        if (Array.isArray(rowId)) {
            that._changeSelectionOfMultiple(rowId, 'select');
            return;
        }

        if (that._selectSingle(rowId)) {
            that._updateSelectAllState();
            that._updateState('selected');
            that.$.fireEvent('change', { type: that._interaction ? 'interaction' : 'programmatic' });
        }
    }

    /**
     * Sets the value of a cell.
     *
     * @param {number|string} row The id of the cell's row.
     * @param {string} dataField The dataField of the cell's column.
     * @param {any} value The new value of the cell.
     */
    setValue(row, dataField, value) {
        const that = this,
            column = that.columnByDataField[dataField];

        if (!column) {
            return;
        }

        let rowObject = that.rowById[row],
            data;

        if (!rowObject) {
            rowObject = that.dataSource.dataItemById[row];

            if (!rowObject) {
                return;
            }

            data = rowObject;
        }
        else {
            data = rowObject.data;
        }

        dataField = column.dataField;

        that.dataSource._updating = true;

        if (column.transform) {
            data[column.originalDataField] = value;
            data[dataField] = column.transform(value);
        }
        else {
            data[dataField] = value;
        }

        const cell = that.$.tableContainer.querySelector(`tr[row-id="${row}"]:not([unused]) td[data-field="${dataField}"]`);

        if (cell) {
            that._setCellContent(cell, that._formatCellValue(rowObject, column, cell), cell.classList.contains('tree-cell'));
            if (column.templateElement) {
                if (column.templateElementSettings) {
                    const isTreeCell = cell.classList.contains('tree-cell');
                    const td = cell;
                    const templateChild = !isTreeCell ? td : td.children[0].children[1];

                    const id = data.$.id;
                    if (that._cachedTemplates && that._cachedTemplates[column.dataField + '_' + id]) {
                        if (that._cachedTemplates[column.dataField + '_' + id].innerHTML.length === 0) {
                            delete that._cachedTemplates[column.dataField + '_' + id];
                        }
                        else {
                            templateChild.innerHTML = '';
                            templateChild.appendChild(that._cachedTemplates[column.dataField + '_' + id]);
                        }
                    }

                    column.templateElementSettings(data[column.dataField], id, templateChild.firstElementChild);
                    if (!that._cachedTemplates) {
                        that._cachedTemplates = [];
                    }

                    if (!that._cachedTemplates[column.dataField + '_' + id]) {
                        that._cachedTemplates[column.dataField + '_' + id] = templateChild.firstElementChild;
                    }
                }
            }
        }

        that._updateCellsWithFormulas();
        delete that.dataSource._updating;
    }

    /**
     * Unselects one or more rows.
     *
     * @param {string | number | (string | number)[]} rowId The id of the row (or an array of row ids) to unselect.
     */
    unselect(rowId) {
        const that = this;

        if (!that.selection) {
            return;
        }

        if (Array.isArray(rowId)) {
            that._changeSelectionOfMultiple(rowId, 'unselect');
            return;
        }

        if (that._unselectSingle(rowId)) {
            that._updateSelectAllState();
            that._updateState('selected');
            that.$.fireEvent('change', {
                type: that._interaction && that._disabledSelection.indexOf(rowId) === -1 ? 'interaction' : 'programmatic'
            });
        }
    }

    /**
   * Scrolls the Table vertically
   * @param {number} newValue - scroll amount
   * @returns 
   */
    set scrollTop(newValue) {
        const that = this;

        if (!that.isRendered) {
            return
        }

        newValue = parseInt(newValue);

        if (isNaN(newValue)) {
            return
        }

        (that.virtualization ? that.$.virtualizationContainer : that.$.container).scrollTop = newValue;
    }

    /**
     * Returns the top scroll of the Table
     */
    get scrollTop() {
        const that = this;

        if (!that.isRendered) {
            return 0
        }

        return (that.virtualization ? that.$.virtualizationContainer : that.$.container).scrollTop
    }

    /**
     * Scrolls the Table horizontally
     * @param {number} newValue - scroll amount
     * @returns 
     */
    set scrollLeft(newValue) {
        const that = this;

        if (!that.isRendered) {
            return
        }

        newValue = parseInt(newValue);

        if (isNaN(newValue)) {
            return
        }

        (that.virtualization ? that.$.virtualizationContainer : that.$.container).scrollLeft = newValue;
    }

    /**
     * Returns the left scroll of the Table
     */
    get scrollLeft() {
        const that = this;

        if (!that.isRendered) {
            return 0
        }


        return (that.virtualization ? that.$.virtualizationContainer : that.$.container).scrollLeft;
    }

    clearContent() {
        const that = this;

        while (that.$.tableContainer.firstChild) {
            that.$.tableContainer.removeChild(that.$.tableContainer.firstChild);
        }
    }

    applyContent() {
        const that = this;

        if (that.content === undefined) {
            that.content = that.$.tableContainer;
            return;
        }

        if (that.content === '' || that.content === null) {
            that.clearContent();
            return;
        }

        if (that.content instanceof HTMLElement) {
            that.clearContent();
            that.$.content.appendChild(that.content);
            return;
        }

        const fragment = document.createDocumentFragment();

        /* Create a wrapper DIV tag. */
        let tmpElement = document.createElement('div');
        fragment.appendChild(tmpElement);

        /* Fill the nodes array with the wrapper's childNodes. */
        if (that.content instanceof HTMLElement) {
            tmpElement.appendChild(that.content);
        }
        else {
            tmpElement.innerHTML = that.content;
        }

        let nodes = Array.from(tmpElement.childNodes);

        /* Remove the wrapper DIV tag. */
        tmpElement.parentNode.removeChild(tmpElement);

        for (let i = 0; i < nodes.length; i++) {
            fragment.appendChild(nodes[i]);
        }

        that.clearContent();
        that.$.tableContainer.appendChild(fragment);
    }

    /**
     * Called when a property is changed.
     */
    propertyChangedHandler(propertyName, oldValue, newValue) {
        const that = this;
        super.propertyChangedHandler(propertyName, oldValue, newValue);

        if (propertyName === 'innerHTML') {
            that._initDataSourceFromHTML();

            return;
        }

        function clearFilterSort() {
            that._clearFilterInput();
            that._clearRowFilters();
            delete that._filterInfo.appliedFilters;
            that._sortColumns = [];
        }

        function updateDialog(propertyToSet, valueToSet) {
            const elements = [];

            if (that._dialog) {
                elements.push(that._dialog, that._dialog.$.footer.firstElementChild, that._dialog.$.footer.children[1]);
            }

            if (that._formattingPanel) {
                elements.push(that._formattingPanel);
            }

            elements.forEach(element => element[propertyToSet] = valueToSet);
        }

        switch (propertyName) {
            case 'animation':
            case 'theme':
                if (propertyName === 'theme') {
                    const computedStyle = getComputedStyle(that);

                    that._defaults.text = that._toHex(computedStyle.color);
                    that._defaults.highlight = that._toHex(computedStyle.backgroundColor);
                }

                if (that.filterRow) {
                    const filterRow = that.$.tableContainer.querySelector('.smart-table-filter-row'),
                        elements = Array.from(filterRow.querySelectorAll('smart-input, smart-button'));

                    elements.forEach(element => element[propertyName] = newValue);
                }

                updateDialog(propertyName, newValue);
                break;
            case 'autoSaveState':
                if (newValue) {
                    window.localStorage.setItem('smartTable' + that.id, that._stringifyState());
                }

                break;
            case 'columnGroups':
                if (newValue) {
                    if (that.columnResize) {
                        that.columnResize = false;
                    }

                    if (that.columnSizeMode === 'auto') {
                        that.removeAttribute('resize-max-reached');
                        that.columnSizeMode = 'default';
                    }
                }

                that.refresh();
                break;
            case 'columnMinWidth': {
                if (isNaN(parseFloat(newValue))) {
                    that.columnMinWidth = oldValue;
                    return;
                }

                that._handleAutoSizeMode();
                that._handleFrozenColumnPositions();
                that._refreshHorizontalScrollbar();
                break;
            }
            case 'columnResize':
                if (newValue && that.columnGroups) {
                    that.columnResize = false;
                }

                break;
            case 'columnResizeNormalize':
                if (that._columns && that._columns.length > 0) {
                    if (that._columns[that._columns.length - 1].dataField === '') {
                        that._columns.pop();
                        that.columns.pop();
                    }
                }
                that._initColumns(true);
                that.refresh();
                break;

            case 'columns': {
                if (that._conditionalFormatting) {
                    delete that._conditionalFormatting;
                }

                const sortColumns = that._sortColumns,
                    filterInfo = that._filterInfo;

                clearFilterSort();
                that._initColumns(true);
                that.refresh();

                if (that._formattingPanel) {
                    that._formattingPanel.columns = that._columns;
                }

                if (that.dataSource.dataFields) {
                    let dataFields = that.dataSource.dataFields || [];
                    const columns = that.columns;
                    let updateSource = false;

                    columns.forEach(column => {
                        if (column.dataType) {
                            const respectiveDataField = dataFields.find(dataField => dataField.name === column.dataField);

                            if (respectiveDataField) {
                                respectiveDataField.dataType = column.dataType;
                            }
                            else if (column.map) {
                                const respectiveDataField = dataFields.find((dataField) => {
                                    if (column.map.indexOf(dataField.name) >= 0) {
                                        return dataField;
                                    }
                                    else {
                                        return null;
                                    }
                                });

                                if (respectiveDataField) {
                                    that.dataSource.dataFields.push({ name: column.dataField, map: column.map, dataType: column.dataType });
                                    updateSource = true;
                                }
                            }
                            else {
                                that.dataSource.dataFields.push({ name: column.dataField, dataType: column.dataType });
                                updateSource = true;
                            }
                        }
                    });

                    if (updateSource && that.dataSource.dataBind) {
                        let grouped = [];
                        let expandedGroups = [];

                        // get groups.
                        if (that.dataSource && that.dataSource.groupBy && that.dataSource.groupBy.toArray) {
                            grouped = that.dataSource.groupBy.toArray().slice(0);
                        }

                        // get expanded groups.
                        if (grouped.length > 0) {
                            expandedGroups = that._getExpandedGroups(that.dataSource.boundHierarchy);
                        }

                        // re-bind.
                        that.dataSource.bindingCompleted = false;
                        that.dataSource.dataBind();

                        that._doNotFireEvent = true;

                        // restore expanded groups.
                        if (grouped.length > 0) {
                            grouped.forEach(dataField => that.addGroup(dataField));

                            if (that.dataSource.boundHierarchy) {
                                that.dataSource.refreshHierarchy();
                            }

                            that._restoreExpandedGroups(expandedGroups);
                        }

                        // restores filtering and sorting after data bind
                        if (filterInfo.inputFilters) {
                            that._filterByAll(filterInfo.query);
                        }
                        else if (filterInfo.rowFilters) {
                            that._applyRowFilters();
                        }
                        else if (filterInfo.appliedFilters) {
                            that._refreshFilters();
                        }

                        if (sortColumns) {
                            that._sortColumns = [];
                            sortColumns.forEach(col => {
                                that.columnByDataField[col.dataField].sortOrder = null;
                                that.sortBy(col.dataField, col.direction);
                            });
                        }

                        if (that._selectedIds.length > 0) {
                            const oldSelectedIds = JSON.stringify(that._selectedIds.slice(0).sort()),
                                updatedDataSource = that.dataSource;

                            that._selectedIds = that._selectedIds.filter(id => updatedDataSource.dataItemById[id] !== undefined ||
                                that._selectableGroupRecords.indexOf(id) !== -1);

                            if (oldSelectedIds !== JSON.stringify(that._selectedIds.slice(0).sort())) {
                                that._updateSelectAllState();
                                that._updateState('selected');
                                that.$.fireEvent('change', { type: 'remove' });
                            }
                        }

                        if (that.virtualization) {
                            setTimeout(() => {
                                const dataField = that.columns && that.columns.length > 0 ? that.columns[0].dataField : '';
                                if (dataField) {
                                    const cell = that.querySelector('td[data-field="' + dataField + '"]');

                                    if (cell) {
                                        if (that._rowHeight < cell.offsetHeight) {
                                            that._rowHeight = cell.offsetHeight;
                                            that.style.setProperty('--smart-table-row-height', that._rowHeight + 'px');
                                            that._refreshDataRows();
                                        }
                                    }
                                }
                            }, 300);
                        }

                        delete that._doNotFireEvent;
                    }
                    else {
                        // restores filtering and sorting after data bind
                        if (filterInfo.inputFilters) {
                            that._filterByAll(filterInfo.query);
                        }
                        else if (filterInfo.rowFilters) {
                            that._applyRowFilters();
                        }
                        else if (filterInfo.appliedFilters) {
                            that._refreshFilters();
                        }

                        if (sortColumns) {
                            that._sortColumns = [];
                            sortColumns.forEach(col => {
                                that.columnByDataField[col.dataField].sortOrder = null;
                                that.sortBy(col.dataField, col.direction);
                            });
                        }
                    }
                }

                break;
            }
            case 'columnSizeMode':
                if (newValue === 'auto') {
                    if (that.columnGroups) {
                        that.columnSizeMode = 'default';
                        return;
                    }

                    that._handleAutoSizeMode();
                }
                else {
                    that.removeAttribute('resize-max-reached');
                    that._columns.forEach(col => {
                        if (col.visible) {
                            if (col._isResponsive) {
                                col.headerCellElement.style.width =
                                    (col.width || col._manualPercentageWidth) ? that._getColumnWidth(col.width || col._manualPercentageWidth, true, col) : null
                            }
                            else {
                                col.headerCellElement.style.width =
                                    (col.width || col._manualWidth) ? that._getColumnWidth(col.width || col._manualWidth, true, col) : null
                            }
                        }
                    });
                }

                that._handleFrozenColumnPositions();
                that._refreshHorizontalScrollbar();
                break;
            case 'conditionalFormatting':
                that._applyInitialConditionalFormatting(that.dataSource);
                that._refreshDataRows();
                break;
            case 'conditionalFormattingButton':
                that.$.header.classList.toggle('smart-hidden', (!that.filtering || that.filterRow) && !newValue);

                if (!newValue && that._dialog) {
                    that._dialog.close();
                }

                break;
            case 'dataSource':
            case 'dataSourceSettings': {
                const sortColumns = that._sortColumns,
                    filterInfo = that._filterInfo;

                if (propertyName === 'dataSource' && newValue === null) {
                    that.dataSource = [];
                }

                if (propertyName === 'dataSource' && oldValue && newValue && that.virtualization) {
                    if (oldValue instanceof Smart.DataAdapter) {
                        if ((oldValue.length === newValue.length) && oldValue.length > 0 && newValue.length > 0 && !that.dataSourceSettings.parentDataField && !oldValue.parentDataField) {
                            that.dataSource = oldValue;

                            if (that._cachedDataSource === newValue) {
                                return;
                            }

                            that.beginUpdate();

                            for (let i = 0; i < newValue.length; i++) {
                                const data = newValue[i];
                                const id = that.dataSource[i].$.id;

                                that.updateRow(id, data, true);
                            }

                            that.endUpdate(undefined, true);
                            that._cachedDataSource = newValue;
                            return;
                        }
                    }
                }

                const scrollTop = that.$.virtualizationContainer ? that.$.virtualizationContainer.scrollTop : 0;
                const hasScrollBar = that.$.virtualizationContainer !== undefined ? true : false;
                const vScrollBar = hasScrollBar ? (that.$.virtualizationContainer.$ ? (that.$.virtualizationContainer.$.verticalScrollBar) : null) : null;

                if (vScrollBar) {
                    vScrollBar.beginUpdate();
                }

                let grouped = [];

                if (oldValue && oldValue.groupBy && oldValue.groupBy.toArray) {
                    grouped = oldValue.groupBy.toArray().slice(0);
                }

                that._dataBind(true);

                that._doNotFireEvent = true;


                if (grouped.length > 0) {
                    const expandedGroups = that._getExpandedGroups(oldValue.boundHierarchy);

                    that.__updating = true;
                    if (that.dataSource._groupBy) {
                        that.dataSource._groupBy.canNotify = false;
                    }

                    if (that._selectedIds.length > 0) {
                        const oldSelectedIds = JSON.stringify(that._selectedIds.slice(0).sort()),
                            updatedDataSource = that.dataSource;

                        that._selectedIds = that._selectedIds.filter(id => updatedDataSource.dataItemById[id] !== undefined ||
                            that._selectableGroupRecords.indexOf(id) !== -1);

                        grouped.forEach(dataField => that.addGroup(dataField));

                        if (oldSelectedIds !== JSON.stringify(that._selectedIds.slice(0).sort())) {
                            that._updateSelectAllState();
                            that._updateState('selected');
                            that.$.fireEvent('change', { type: 'remove' });
                        }
                    }
                    else {
                        grouped.forEach(dataField => that.addGroup(dataField));
                    }

                    if (that.dataSource.boundHierarchy) {
                        that.dataSource.refreshHierarchy();
                    }

                    if (that.dataSource._groupBy) {
                        that.dataSource._groupBy.canNotify = true;
                    }

                    that.__updating = false;
                    that._restoreExpandedGroups(expandedGroups);
                    that._fullRefresh('update');
                }

                // restores filtering and sorting after data bind
                if (filterInfo.inputFilters) {
                    that._filterByAll(filterInfo.query);
                }
                else if (filterInfo.rowFilters) {
                    that._applyRowFilters();
                }
                else if (filterInfo.appliedFilters) {
                    that._refreshFilters();
                }

                if (sortColumns) {
                    that._sortColumns = [];
                    sortColumns.forEach(col => {
                        that.columnByDataField[col.dataField].sortOrder = null;
                        that.sortBy(col.dataField, col.direction);
                    });
                }

                if (that._selectedIds.length > 0) {
                    const oldSelectedIds = JSON.stringify(that._selectedIds.slice(0).sort()),
                        updatedDataSource = that.dataSource;

                    that._selectedIds = that._selectedIds.filter(id => updatedDataSource.dataItemById[id] !== undefined ||
                        that._selectableGroupRecords.indexOf(id) !== -1);

                    if (oldSelectedIds !== JSON.stringify(that._selectedIds.slice(0).sort())) {
                        that._updateSelectAllState();
                        that._updateState('selected');
                        that.$.fireEvent('change', { type: 'remove' });
                    }
                }

                if (that.virtualization) {
                    setTimeout(() => {
                        const dataField = that.columns && that.columns.length > 0 ? that.columns[0].dataField : '';
                        if (dataField) {
                            const cell = that.querySelector('td[data-field="' + dataField + '"]');

                            if (cell) {
                                if (that._rowHeight < cell.offsetHeight) {
                                    that._rowHeight = cell.offsetHeight;
                                    that.style.setProperty('--smart-table-row-height', that._rowHeight + 'px');
                                    that._refreshDataRows();
                                }
                            }
                        }
                    }, 300);

                    that.$.virtualizationContainer.scrollTop = scrollTop;

                    if (vScrollBar) {
                        vScrollBar.endUpdate();
                        that._onVerticalChange({ detail: { value: vScrollBar.value } }, true);
                    }
                }

                delete that._doNotFireEvent;
                break;
            }
            case 'disabled':
            case 'unfocusable':
            case 'keyboardNavigation':
                that._setFocusable();
                updateDialog('unfocusable', that.disabled || that.unfocusable || !that.keyboardNavigation);

                if (propertyName === 'disabled' && that._dialog) {
                    that._dialog.close();
                }

                break;
            case 'hideSelectionColumn':
                that.refresh();
                break;
            case 'columnMenu':
                that.$.header.classList.toggle('smart-hidden', (!that.filtering || that.filterRow || that.columnMenu) && !that.conditionalFormattingButton);

                if (that.columnMenu) {
                    that._initialState = that.getState();
                }
                that.refresh();
                break;
            case 'editing':
                if (newValue) {
                    that.$.tableContainer.removeAttribute('aria-readonly');
                }
                else {
                    that.$.tableContainer.setAttribute('aria-readonly', true);
                }
                break;
            case 'filtering':
                if (!that.columnMenu) {
                    that.$.header.classList.toggle('smart-hidden', (!newValue || that.filterRow) && !that.conditionalFormattingButton);
                }

                if (newValue && that.filterRow) {
                    that._createFilterRow();
                }
                else if (newValue === false) {
                    if (that.filterRow) {
                        that.$.tableContainer.querySelector('.smart-table-filter-row').remove();
                    }

                    if (that._filterInfo.query || that._filterInfo.rowFilters || that._filterInfo.appliedFilters) {
                        that.clearFilters();
                    }
                }

                if (that.virtualization) {
                    that.refresh();
                }

                break;
            case 'filterRow':
                that.$.header.classList.toggle('smart-hidden', (!that.filtering || newValue) && !that.conditionalFormattingButton);

                if (!that.filtering) {
                    return;
                }


                if (newValue) {
                    that._createFilterRow();
                }
                else {
                    that.$.tableContainer.querySelector('.smart-table-filter-row').remove();

                    if (that._filterInfo.rowFilters) {
                        that.clearFilters();
                    }
                }

                break;
            case 'filterTemplate':
                that._applyFilterTemplate();
                break;
            case 'footerRow': {
                const footer = that.$.tableContainer.querySelector('tfoot');

                if (footer) {
                    footer.remove();
                }

                if (newValue) {
                    that._createFooterRow();
                }

                break;
            }
            case 'formulas':
                if (newValue) {
                    that._formulaParser = new Smart.FormulaParser(that);
                }
                else {
                    delete that._formulaParser;
                }

                that._updateCellsWithFormulas(true);
                break;
            case 'freezeHeader':
            case 'freezeFooter':
                if (that.virtualization) {
                    that[propertyName] = true;
                }

                break;
            case 'grouping':
                if (!newValue) {
                    that.clearGrouping();
                }

                break;
            case 'headerRow': {
                const headerRows = Array.from(that.$.tableContainer.firstElementChild.children);

                for (let i = 1; i < headerRows.length; i++) {
                    headerRows[i].remove();
                }

                if (newValue) {
                    that._createCustomHeaderRow();
                }

                break;
            }
            case 'locale':
            case 'messages': {
                const dialog = that._dialog;

                that._localize();

                if (that.filterRow) {
                    const filterRow = that.$.tableContainer.querySelector('.smart-table-filter-row'),
                        stringConditionsInputs = Array.from(filterRow.querySelectorAll('smart-input.string-filter')),
                        numDateConditionsInputs = Array.from(filterRow.querySelectorAll('smart-input.num-date-filter')),
                        clearFilterButtons = Array.from(filterRow.querySelectorAll('smart-button'));

                    stringConditionsInputs.concat(numDateConditionsInputs).forEach(input => input.title = that.localize('filterCondition'));
                    stringConditionsInputs.forEach(input => {
                        input.dataSource = that._filterInfo.stringConditions;

                        if (input.$.input.dataValue === undefined) {
                            input.value = that.localize('CONTAINS');
                        }
                        else {
                            input.value = that._filterInfo.stringConditions.find(condition => condition.value === input.$.input.dataValue).label;
                        }
                    });
                    numDateConditionsInputs.forEach(input => {
                        input.dataSource = that._filterInfo.numberAndDateConditions;

                        if (input.$.input.dataValue === undefined) {
                            input.value = that.localize('EQUAL');
                        }
                        else {
                            input.value = that._filterInfo.numberAndDateConditions.find(condition => condition.value === input.$.input.dataValue).label;
                        }
                    });
                    clearFilterButtons.forEach(button => button.title = that.localize('clearFilter'));
                }

                if (dialog) {
                    dialog.$.footer.firstElementChild.innerHTML = that.localize('ok');
                    dialog.$.footer.children[1].innerHTML = that.localize('cancel');

                    if (dialog.classList.contains('conditional-formatting')) {
                        dialog.label = that.localize('conditionalFormatting');
                    }
                    else if (dialog.classList.contains('drill-down')) {
                        dialog.label = that.localize('details');
                    }
                }

                if (that._formattingPanel) {
                    that._formattingPanel.messages = that.messages;
                    that._formattingPanel.locale = that.locale;
                }

                Array.from(that.$.tableContainer.querySelectorAll('.group-label-value>.placeholder')).forEach(placeholder => {
                    placeholder.textContent = that.localize('EMPTY');
                });

                break;
            }
            case 'pageIndex':
                that.pageIndex = Math.max(Math.min(Math.round(newValue), that.$.pager.pagesCount - 1), 0);

                if (that.paging && that.pageIndex !== oldValue) {
                    that._fullRefresh('pageIndexChange');
                    that.$.fireEvent('page', { action: 'pageIndexChange' });
                }

                break;
            case 'pageSize':
                if (that.paging) {
                    that._fullRefresh('pageSizeChange');
                    that.$.fireEvent('page', { action: 'pageSizeChange' });
                }

                break;
            case 'paging':
                if (newValue === false) {
                    if (that.dataSource.virtualDataSource) {
                        that.paging = true;
                        return;
                    }

                    if (that.$.pager.pagesCount === 1) {
                        return;
                    }
                }

                that._fullRefresh();
                break;
            case 'rowDetailTemplate': {
                that._fullRefresh();
                break;
            }
            case 'rightToLeft':
                Array.from(that.$.tableContainer.querySelectorAll('.freeze-near, .freeze-far')).forEach(td => {
                    td.style.left = null;
                    td.style.right = null;
                    td.style.zIndex = null;
                });

                that._handleFrozenColumnPositions();
                updateDialog('rightToLeft', newValue);
                break;
            case 'selected': {
                const oldSlectedIds = that._selectedIds.slice(0);

                that._clearSelection();
                that._changeSelectionOfMultiple(newValue, 'select', 'programmatic', oldSlectedIds);
                break;
            }
            case 'selection':
                if (that.filterRow) {
                    const filterRow = that.$.tableContainer.querySelector('.smart-table-filter-row');

                    if (newValue) {
                        filterRow.insertBefore(document.createElement('td'), filterRow.firstElementChild);
                    }
                    else {
                        filterRow.firstElementChild.remove();
                    }
                }

                that.refresh();

                if (newValue) {
                    that.$.tableContainer.setAttribute('aria-multiselectable', true);
                    that._updateSelectAllState();
                }
                else {
                    that.$.tableContainer.removeAttribute('aria-multiselectable');
                }

                break;
            case 'selectionMode': {
                that.$.tableContainer.classList.remove('smart-unselectable');
                const selectAllCheckbox = that.querySelector('.smart-table-select-all');
                if (selectAllCheckbox) {
                    if (that.selectionMode === 'one') {
                        selectAllCheckbox.classList.add('smart-visibility-hidden');
                    }
                    else {
                        selectAllCheckbox.classList.remove('smart-visibility-hidden');
                    }
                }

                break;
            }
            case 'sortMode':
                if (newValue === 'none') {
                    that.clearSort();
                }

                break;
            case 'tooltip':
                if (!newValue) {
                    const previousHoveredCell = that.$.tableContainer.querySelector('.tooltip');

                    if (previousHoveredCell) {
                        previousHoveredCell.classList.remove('tooltip');
                        previousHoveredCell.removeAttribute('title');
                    }
                }

                break;
            case 'virtualization':
                // virtualization cannot be changed dynamically
                that.virtualization = oldValue;
                break;
        }
    }

    /**
     * Renders the element. Calls only element-specific functionality.
     */
    _createElement() {
        const that = this;

        that._expandedRowDetailIds = [];
        that._editors = {};

        if (isNaN(parseFloat(that.columnMinWidth))) {
            that.columnMinWidth = '50px';
        }

        if (that.columnGroups) {
            that.columnResize = false;
            that.columnSizeMode = 'default';
        }

        if (that.formulas) {
            that._formulaParser = new Smart.FormulaParser(that);
        }

        that._setupPagingAndFiltering();
        that._localize();

        that._selectedIds = that.selected.slice(0);
        if (that.selectionMode === 'one') {
            that._selectedIds = that._selectedIds.slice(0, 1);
            const selectAllCheckbox = that.querySelector('.smart-table-select-all');
            if (selectAllCheckbox) {
                selectAllCheckbox.classList.add('smart-visibility-hidden');
            }
        }

        that._dataBind();

        if (!that.editing) {
            that.$.tableContainer.setAttribute('aria-readonly', true);
        }

        if (that.autoLoadState) {
            that.loadState();
        }

        if (that.autoSaveState) {
            window.localStorage.setItem('smartTable' + that.id, that._stringifyState());
        }

    }

    _initColumns(propertyChangedHandler) {
        const that = this,
            columns = that.columns;

        if (!that.isRendered && that.dataSource.length > 0 &&
            (!columns || Array.isArray(columns) && columns.length === 0)) {
            that.columns = that.dataSource.dataFields.map(dataField => {
                return { label: dataField.name, dataField: dataField.name, dataType: dataField.dataType };
            });
        }

        that._filterInfo.stringDataFields = [];
        that._columns = [];
        that.columnByDataField = {};

        that.columns.canNotify = false;

        if (that.columns instanceof Smart.ObservableArray) {
            const _columns = [];

            for (let i = 0; i < that.columns.length; i++) {
                let boundColumn = that.columns[i];
                let column = {};

                for (let key in boundColumn) {
                    column[key] = boundColumn[key];
                }

                _columns.push(column);
            }

            that.columns = _columns;
        }

        for (let i = 0; i < that.columns.length; i++) {
            let boundColumn = that.columns[i];

            if (typeof boundColumn === 'string') {
                if (that.dataSource.dataFields) {
                    const field = that.dataSource.dataFields.find(field => {
                        if (field.name === boundColumn) {
                            return field;
                        }
                    });

                    boundColumn = { label: boundColumn, dataField: boundColumn, dataType: field ? field.dataType || 'string' : 'string' };
                }
            }

            if (boundColumn.label === undefined && boundColumn.dataField === undefined) {
                continue;
            }

            if (boundColumn.label === undefined) {
                boundColumn.label = boundColumn.dataField;
            }

            if (boundColumn.dataField === undefined) {
                boundColumn.dataField = boundColumn.label;
            }

            if (!boundColumn.dataType) {
                boundColumn.dataType = 'string';
            }

            if ((boundColumn.dataType === 'string' || boundColumn.dataType === 'number') &&
                boundColumn.allowFilter !== false && boundColumn.dataField) {
                that._filterInfo.stringDataFields.push(boundColumn.dataField);
            }

            boundColumn.visible = boundColumn.visible !== undefined ? !!boundColumn.visible : true;
            boundColumn.allowResize = boundColumn.allowResize !== undefined ? !!boundColumn.allowResize : true;

            that._transformColumnDataField(boundColumn, propertyChangedHandler);

            boundColumn.thHierarchy = [];

            that._columns.push(boundColumn);
            that.columnByDataField[boundColumn.dataField] = boundColumn;
        }

        if (that.columnSizeMode === 'default' && that.selection) {
            let shouldAddEmptyColumn = true;

            for (let i = 0; i < that._columns.length; i++) {
                const column = that._columns[i];

                if (!column.width) {
                    shouldAddEmptyColumn = false;
                    column._isResponsive = true;
                    column._isFillRemainingWidth = true;
                    break;
                }
            }

            if (!that.columnResizeNormalize && shouldAddEmptyColumn) {
                that._columns.push({
                    dataField: '', label: '', visible: true, allowResize: false, allowFilter: false, allowSort: false
                });
            }
        }

        that.columns = new Smart.ObservableArray(that._columns);
        that._updateState('columns');
        that.columns.notify(function (changes) {
            if (!that.columns.canNotify) {
                return;
            }

            if (changes.action === 'length' || changes.action === 'update' &&
                ['allowGroup', 'allowSort', 'sortOrder'].indexOf(changes.propertyName) !== -1) {
                that._updateState('columns');
                return;
            }

            const column = changes.target;

            if (changes.action === 'update') {
                const dataField = column.dataField;

                if (changes.propertyName === 'allowEdit') {
                    Array.from(that.$.tableContainer.querySelectorAll(`td[data-field="${dataField}"]`)).
                        forEach(td => {
                            td.classList.toggle('no-edit', changes.newValue === false);

                            if (changes.newValue === false) {
                                td.setAttribute('aria-readonly', true);
                            }
                            else {
                                td.removeAttribute('aria-readonly');
                            }
                        });
                    that._updateState('columns');
                    return;
                }

                if (changes.propertyName === 'allowFilter') {
                    if ((column.dataType === 'string' || column.dataType === 'number') && dataField) {
                        if (changes.newValue === false) {
                            that._filterInfo.stringDataFields = that._filterInfo.stringDataFields.filter(currentDataField => currentDataField !== dataField);
                        }
                        else if (changes.oldValue === false) {
                            that._filterInfo.stringDataFields.push(dataField);
                        }
                    }

                    if (that.filterRow) {
                        that.$.tableContainer.querySelector(`.smart-table-filter-row td[filter-for="${dataField}"]`).classList.toggle('no-filter', changes.newValue === false);
                    }

                    if (that.nodeName.toLowerCase() === 'smart-pivot-table') {
                        that._columnNotify(changes);
                    }

                    that._updateState('columns');
                    return;
                }

                if (changes.propertyName === 'transform') {
                    if (column.sortOrder) {
                        that.sortBy(column.dataField, null);
                    }

                    that._transformColumnDataField(column, true);
                }
                else if (['allowPivot', 'allowRowGroup', 'pivot', 'rowGroup', 'summary'].indexOf(changes.propertyName) !== -1 &&
                    that.nodeName.toLowerCase() === 'smart-pivot-table') {
                    that._columnNotify(changes);
                    that._updateState('columns');
                    return;
                }
                else if (changes.propertyName === 'visible') {
                    //Hide expanded Rows if all columns are hidden
                    const expandedRowIds = that._expandedRowDetailIds,
                        tableContainer = that.$.tableContainer;
                    let filterRow;

                    if (that.filterRow) {
                        filterRow = tableContainer.querySelector('.smart-table-filter-row');

                        if (filterRow) {
                            filterRow.remove();
                        }
                    }

                    if (expandedRowIds && expandedRowIds.length && !that._columns.some(col => col.visible)) {
                        expandedRowIds.forEach(rowId => that._toggleRowDetail(tableContainer.querySelector(`[row-id="${rowId}"]`), rowId));
                    }

                    that.$.tableContainer.setAttribute('aria-colcount', that._columns.filter(col => col.visible).length + (+that.selection));

                    that.refresh();
                    that._updateState('columns');
                    return
                }
            }

            if (changes.action === 'add') {
                that.columns[that.columns.length - 1].visible = true;
            }

            that._columns = that.columns._array;
            that.columnByDataField = [];
            that._columns.forEach(column => {
                that.columnByDataField[column.dataField] = column;

                if (column.originalDataField) {
                    that.columnByDataField[column.originalDataField] = column;
                }
            });
            that.refresh(true);
            that._updateState('columns');
        });

        that.$.tableContainer.setAttribute('aria-colcount', that._columns.filter(col => col.visible).length + (+that.selection));
    }

    /**
     * Transforms a column's data field.
     */
    _transformColumnDataField(column, propertyChangedHandler) {
        const that = this;

        if (typeof column.transform === 'function') {
            if (!that.isRendered || propertyChangedHandler) {
                const dataSource = that.dataSource,
                    columnsCanNotify = that.columns.canNotify;

                if (columnsCanNotify) {
                    that.columns.canNotify = false;
                }

                if (propertyChangedHandler && column.originalDataField) {
                    delete that.columnByDataField[column.dataField];
                    column.dataField = column.originalDataField;
                }

                const originalDataField = column.dataField,
                    transformedDataField = originalDataField + 'Transformed';

                that.columnByDataField[originalDataField] = column;
                column.originalDataField = originalDataField;
                column.dataField = transformedDataField;

                dataSource.canNotify = false;

                for (let j = 0; j < dataSource.length; j++) {
                    const record = dataSource[j];

                    record[transformedDataField] = column.transform(record[originalDataField]);
                }

                if (columnsCanNotify) {
                    that.columns.canNotify = true;
                }

                dataSource.canNotify = true;
            }
        }
        else if (column.transform) {
            column.transform = undefined;
        }
    }

    /**
     * Initializes rows.
     */
    _initRows() {
        const that = this,
            dataSource = that.dataSource,
            oldContext = that.context;

        that.context = that;
        that.rows = [];
        that.rowById = [];

        if (dataSource.virtualDataSource) {
            that._initRowsVirtualDataSource();
            that.context = oldContext;
            return;
        }

        if (dataSource.boundHierarchy) {
            that.$.tableContainer.setAttribute('role', 'treegrid');
            that.setAttribute('hierarchy', '');
            that._initHierarchicalRows();
            that.context = oldContext;
            return;
        }

        that.$.tableContainer.setAttribute('role', 'grid');

        let viewStart = 0,
            viewEnd = dataSource.length,
            pagingAndFiltering = false;

        that.removeAttribute('hierarchy');

        if (that.paging) {
            const pageSize = that.pageSize;

            if (that._filterInfo.query || that._filterInfo.rowFilters || that._filterInfo.appliedFilters) {
                let visibleRecords = 0;

                for (let i = 0; i < viewEnd; i++) {
                    if (dataSource[i].$.filtered !== false) {
                        visibleRecords++;
                    }
                }

                viewEnd = visibleRecords;
                pagingAndFiltering = true;
            }

            const pagesCount = Math.max(Math.ceil(viewEnd / pageSize), 1);

            that.$.pager.pagesCount = pagesCount;
            that.$.pager.totalRecords = viewEnd;
            that.pageIndex = Math.max(Math.min(that.pageIndex, pagesCount - 1), 0);

            viewStart = that.pageIndex * pageSize;
            viewEnd = viewStart + pageSize;
        }

        if (pagingAndFiltering) {
            let j = -1;

            for (let i = 0; i < dataSource.length; i++) {
                const data = dataSource[i];

                if (data && data.$.filtered !== false) {
                    j++;

                    if (j < viewStart) {
                        continue;
                    }

                    if (j >= viewEnd) {
                        break;
                    }

                    that._addNewRow(data, i);
                }
            }
        }
        else {
            for (let i = viewStart; i < viewEnd; i++) {
                const data = dataSource[i];

                if (data && data.$.filtered !== false) {
                    that._addNewRow(data, i);
                }
            }
        }

        that._observeRows();
        that.context = oldContext;
    }

    /**
     * Initializes rows when bound to a virtual data source.
     */
    _initRowsVirtualDataSource() {
        const that = this,
            dataSource = that.dataSource;

        if (dataSource.boundHierarchy) {
            that.$.tableContainer.setAttribute('role', 'treegrid');
            that.setAttribute('hierarchy', '');
            that._processHierarchy(dataSource.boundHierarchy, 0, dataSource.boundHierarchy.length);
        }
        else {
            for (let i = 0; i < dataSource._dataSource.length; i++) {
                const data = dataSource[i];

                if (data && data.$.filtered !== false) {
                    that._addNewRow(data, i);
                }
            }
        }

        if (that.paging) {
            const viewEnd = dataSource.length,
                pageSize = that.pageSize,
                pagesCount = Math.max(Math.ceil(viewEnd / pageSize), 1),
                oldPagesCount = that.$.pager.pagesCount;

            that.$.pager.pagesCount = pagesCount;
            that.$.pager.totalRecords = viewEnd;
            that.pageIndex = Math.max(Math.min(that.pageIndex, pagesCount - 1), 0);

            if (oldPagesCount !== null && oldPagesCount !== pagesCount) {
                that._fullRefresh();
                return;
            }
        }

        that._observeRows();
    }

    /**
     * Initializes hierarchical rows.
     */
    _initHierarchicalRows() {
        const that = this,
            boundHierarchy = that.dataSource.boundHierarchy;
        let viewStart = 0,
            viewEnd = boundHierarchy.length,
            pagingAndFiltering = false;

        if (that.paging) {
            const pageSize = that.pageSize;

            if (that._filterInfo.query || that._filterInfo.rowFilters || that._filterInfo.appliedFilters) {
                let visibleRecords = 0;

                for (let i = 0; i < viewEnd; i++) {
                    if (boundHierarchy[i].$.filtered !== false) {
                        visibleRecords++;
                    }
                }

                viewEnd = visibleRecords;
                pagingAndFiltering = true;
            }

            const pagesCount = Math.max(Math.ceil(viewEnd / pageSize), 1);

            that.$.pager.pagesCount = pagesCount;
            that.$.pager.totalRecords = viewEnd;
            that.pageIndex = Math.max(Math.min(that.pageIndex, pagesCount - 1), 0);

            viewStart = that.pageIndex * pageSize;
            viewEnd = viewStart + pageSize;
        }

        if (pagingAndFiltering) {
            let j = -1;

            for (let i = 0; i < boundHierarchy.length; i++) {
                const data = boundHierarchy[i];

                if (data && data.$.filtered !== false) {
                    j++;

                    if (j < viewStart) {
                        continue;
                    }

                    if (j >= viewEnd) {
                        break;
                    }

                    that._processHierarchy(boundHierarchy, i, i + 1);
                }
            }
        }
        else {
            that._processHierarchy(boundHierarchy, viewStart, viewEnd);
        }

        that._observeRows();
    }

    /**
     * Processes hierarchy.
     */
    _processHierarchy(object, start, end) {
        const that = this;

        for (let i = start; i < end; i++) {
            const item = object[i];

            if (!item) {
                break;
            }

            if (item.leaf) {
                if (item && item.$.filtered !== false) {
                    that._addNewRow(item, i);
                }
            }
            else {
                if (that._expandedIds.indexOf(item.$.id) !== -1) {
                    item.expanded = true;
                }
                else if (item.expanded === undefined) {
                    item.expanded = false;
                }

                if (item.$.filtered !== false) {
                    that._addNewRow(item, i);
                }

                if (item.children.length && item.$.filtered !== false) {
                    that._processHierarchy(item.children, 0, item.children.length);
                }
            }
        }
    }

    /**
     * Makes "rows" an observable array.
     */
    _observeRows() {
        const that = this;

        that.rows = new Smart.ObservableArray(that.rows);

        that.rows.notify(function (changes) {
            if (!that.rows.canNotify ||
                changes.path ||
                !that.dataSource) {
                return;
            }

            that.rows.canNotify = false;

            const changeType = changes.action,
                oldSelectedIds = that._selectedIds.slice(0);

            that.dataSource.canNotify = false;

            switch (changeType) {
                case 'add': {
                    const blankRow = {};

                    that.dataSource.dataFields.forEach(dataField => blankRow[dataField.name] = '');

                    const data = Object.assign(blankRow, that.rows[changes.index]);

                    that.dataSource.add(that.rows[changes.index]);
                    that._editing = { row: { data: data } };
                    break;
                }
                case 'update':
                    that.dataSource.update(changes.index, that.rows[changes.index]);
                    that._editing = { row: { data: that.rows[changes.index] } };
                    break;
                case 'remove': {
                    const data = changes.removed[0].data,
                        id = data.$.id,
                        positionInSelectedIds = that._selectedIds.indexOf(id);

                    that.dataSource.removeAt(data.$.index);
                    delete that.rowById[id];

                    if (positionInSelectedIds !== -1) {
                        that._selectedIds.splice(positionInSelectedIds, 1);
                    }

                    that._editing = { row: changes.removed[0] };
                    that._updateSelectAllState();
                    break;
                }
            }

            that._fullRefresh(changeType, oldSelectedIds, changeType);
            delete that._editing;
            that.dataSource.canNotify = true;
            that.rows.canNotify = true;
        });
    }

    beginUpdate() {
        const that = this;

        if (that.nodeName.toLowerCase() !== 'smart-table') {
            return;
        }

        that.__updating = true;
        that.__updatedRows = false;
        const testEnv = window.__karma__ || window.karma;

        if (document.hidden && !testEnv) {
            return;
        }

        that._dirtyHierarchy = false;
        that.__updatingOldSelectedIds = that._selectedIds.slice(0);
        that.__updatingSortColumns = that._sortColumns;
        if (that.dataSource) {
            if (that.dataSource.clearSort) {
                that.dataSource.clearSort();
            }
        }
    }

    endUpdate(refresh, noDelay) {
        const that = this;

        if (that.nodeName.toLowerCase() !== 'smart-table') {
            return;
        }


        that.__updating = false;
        const testEnv = window.__karma__ || window.karma;

        if (document.hidden && !testEnv) {
            return;
        }

        if (refresh === false) {
            return;
        }

        if (testEnv) {
            noDelay = true;
        }

        const scheduleUpdate = (() => {
            const oldSelectedIds = that.__updatingOldSelectedIds ? that.__updatingOldSelectedIds : that._selectedIds.slice(0);

            if (that.__updatingOldSelectedIds) {
                delete that.__updatingOldSelectedIds;
            }

            if (that._dirtyHierarchy) {
                that.dataSource.refreshHierarchy();
            }

            const sortColumns = that._sortColumns,
                filterInfo = that._filterInfo,
                grouped = that.dataSource.groupBy._array.slice(0);

            const hasScrollBar = that.$.virtualizationContainer !== undefined ? true : false;
            const vScrollBar = hasScrollBar ? (that.$.virtualizationContainer.$ ? (that.$.virtualizationContainer.$.verticalScrollBar) : null) : null;

            if (vScrollBar) {
                vScrollBar.beginUpdate();
            }

            that._doNotFireEvent = true;
            that._fullRefresh('update', oldSelectedIds, 'update');

            if (grouped.length > 0) {
                let expandedGroups = that._getExpandedGroups(that.dataSource.boundHierarchy);

                if (that._dirtyHierarchy) {
                    expandedGroups = that._dirtyHierarchy;
                }

                grouped.forEach(dataField => that.addGroup(dataField));
                that._restoreExpandedGroups(expandedGroups);
            }

            // restores filtering and sorting after data bind
            if (filterInfo.inputFilters) {
                that._filterByAll(filterInfo.query);
            }
            else if (filterInfo.rowFilters) {
                that._applyRowFilters();
            }
            else if (filterInfo.appliedFilters) {
                that._refreshFilters();
            }

            if (sortColumns) {
                if ((that.__updatingSortColumns && JSON.stringify(that.__updatingSortColumns) !== JSON.stringify(sortColumns)) || grouped.length === 0 || refresh === true || that.__updatedRows === false) {
                    that._sortColumns = [];
                    sortColumns.forEach(col => {
                        that.columnByDataField[col.dataField].sortOrder = null;
                        that.sortBy(col.dataField, col.direction);
                    });
                }
            }

            if (vScrollBar) {
                vScrollBar.endUpdate();
                that._onVerticalChange({ detail: { value: vScrollBar.value } }, true);

                if (that._dirtyHierarchy) {
                    if (that._rowsInDOM.length < that.rows.length && that.$.virtualizationContainer.$.verticalScrollBar.max === 0) {
                        that._refreshDataRows();
                    }

                    that._dirtyHierarchy = false;
                }
            }

            if (that.onUpdateComplete) {
                that.onUpdateComplete(that.rows);
            }

            delete that._doNotFireEvent;
        });

        if (that._verticalScrollTimer) {
            if (that._scheduleUpdate) {
                clearInterval(that._scheduleUpdate);
            }

            that._scheduleUpdate = setInterval(function () {
                if (!that._verticalScrollTimer) {
                    scheduleUpdate();
                    clearInterval(that._scheduleUpdate);
                    delete that._scheduleUpdate;
                }
            }, 100);
            return;
        }

        if (noDelay) {
            scheduleUpdate();
            return;
        }

        requestAnimationFrame(() => {
            scheduleUpdate();
        });
    }
    /**
     * Adds a new row
     */
    _addNewRow(data, index) {
        const that = this,
            id = data.$.id,
            row = new Smart.Observable({ data: data, boundIndex: index });

        if (that._disabledSelection.indexOf(id) !== -1) {
            row.allowSelect = false;
        }

        row.canNotify = true;

        row.notify(function (changes) {
            if (that._editing || that._hierarchyChange) {
                return;
            }

            const selection = that.selection;

            function disableChildrenSelection(record, idCollection) {
                const id = record.$.id,
                    rowElement = that.$.tableContainer.querySelector(`[row-id="${id}"]:not([unused])`),
                    rowObject = that.rowById[id];

                idCollection.push(id);

                if (rowElement) {
                    rowElement.removeAttribute('aria-selected');
                    rowElement.classList.add('disable-select');

                    if (selection) {
                        rowElement.firstElementChild.firstElementChild.setAttribute('aria-disabled', true);
                    }
                }

                if (rowObject) {
                    rowObject.allowSelect = false;
                }

                if (record.children) {
                    for (let i = 0; i < record.children.length; i++) {
                        disableChildrenSelection(record.children[i], idCollection);
                    }
                }
            }

            function enableChildrenSelection(record) {
                const id = record.$.id,
                    rowElement = that.$.tableContainer.querySelector(`[row-id="${id}"]:not([unused])`),
                    rowObject = that.rowById[id];

                if (record.parent && that._disabledSelection.indexOf(record.parent.$.id) !== -1) {
                    rowObject.allowSelect = false;
                    return;
                }

                that._disabledSelection.splice(that._disabledSelection.indexOf(id), 1);

                if (rowElement) {
                    rowElement.classList.remove('disable-select');

                    if (selection) {
                        rowElement.setAttribute('aria-selected', false);
                        rowElement.firstElementChild.firstElementChild.removeAttribute('aria-disabled');
                    }
                }

                if (rowObject) {
                    rowObject.allowSelect = true;
                }

                if (record.children) {
                    for (let i = 0; i < record.children.length; i++) {
                        enableChildrenSelection(record.children[i]);
                    }
                }
            }

            if (changes.propertyName === 'allowSelect') {
                const disabledSelectionIndex = that._disabledSelection.indexOf(id);

                that._hierarchyChange = true;

                if (!changes.newValue && disabledSelectionIndex === -1) {
                    const idsToDisable = [];

                    disableChildrenSelection(data, idsToDisable);
                    that._disabledSelection = that._disabledSelection.concat(idsToDisable);
                    that.unselect(idsToDisable);
                }
                else if (changes.newValue && disabledSelectionIndex !== -1) {
                    enableChildrenSelection(data);
                }

                delete that._hierarchyChange;
            }
        });

        that.rowById[id] = row;
        that.rows.push(row);
    }

    /**
    * Refreshes the UI Component.
    */
    refresh() {
        const that = this;
        // columns = that._columns,

        if (that.__updating) {
            return;
        }

        const columns = that._columns.filter(col => col.visible),
            tableContainer = that.$.tableContainer,
            filterRow = tableContainer.querySelector('.smart-table-filter-row'),
            footer = tableContainer.querySelector('tfoot'),
            tbody = document.createElement('tbody'),
            fractionOfMax = that._getFractionOfMax(),
            scrollContainer = that.virtualization ? that.$.virtualizationContainer : that.$.tableContainer.parentElement,
            currentScroll = { top: scrollContainer.scrollTop, left: scrollContainer.scrollLeft };

        that.columns.canNotify = false;

        while (tableContainer.childNodes.length > 0) {
            tableContainer.childNodes[0].remove();
        }

        that._createTableHeader();

        if (!that.isRendered && that.onInit && !that._loadingState) {
            that.onInit();
        }

        that._createCustomHeaderRow();
        that._createFooterRow(footer);
        that._createDataRows(tbody);
        that._createFilterRow(filterRow);

        const headerCellElements = tableContainer.querySelectorAll('th[data-field]');

        for (let i = 0; i < columns.length; i++) {
            const column = columns[i];

            column.headerCellElement = headerCellElements[i];

            if (column.headerCellElement) {
                column.headerCellElement.onclick = function () {
                    const dataField = this.dataField;

                    that.$.fireEvent('columnClick', { dataField: dataField });
                    that.closeColumnMenu();

                    if (that.sortMode === 'none' || column.allowSort === false || that._preventClickSort) {
                        return;
                    }

                    that._addSortIconContainer(this);

                    that._sortOnClick = true;
                    if (this.headerCellElement.sortIconContainerElement.classList.contains('asc')) {
                        that.sortBy(dataField, 'desc');
                    }
                    else if (this.headerCellElement.sortIconContainerElement.classList.contains('desc')) {
                        that.sortBy(dataField, null);
                    }
                    else {
                        that.sortBy(dataField, 'asc');
                    }
                    that._sortOnClick = false;
                }.bind(column);
            }
        }

        if (that._sortColumns && that._sortColumns.length > 0) {
            for (let i = 0; i < that._sortColumns.length; i++) {
                const sortColumn = that._sortColumns[i];
                const column = that.columnByDataField[sortColumn.dataField];

                that._addSortIconContainer(column, sortColumn.direction, i + 1);
            }
        }

        that._handleAutoSizeMode();
        that._handleFrozenColumnPositions();
        that._refreshHorizontalScrollbar();

        if (that.isRendered) {
            if (that.selection) {
                that._updateSelectAllState();
            }

            that._setFractionOfMax(fractionOfMax);
        }

        //Reset the scrolling again
        [scrollContainer.scrollTop, scrollContainer.scrollLeft] = [currentScroll.top, currentScroll.left];

        that.columns.canNotify = true;
    }

    /**
     * Creates Table header
     */
    _createTableHeader() {
        const that = this,
            selection = that.selection,
            thead = document.createElement('thead'),
            columns = that._columns.filter(col => col.visible),
            levels = that._getColumnHeaderStructure(),
            windowWidth = window.innerWidth,
            hiddenColumnIndexes = {};

        for (let l = 0; l < levels; l++) {
            const tr = document.createElement('tr'),
                fragment = document.createDocumentFragment();

            if (selection) {
                if (l < levels - 1) {
                    tr.innerHTML = '<th class="empty"></th>';
                }
                else {
                    tr.innerHTML = '<th class="smart-table-select-all freeze-near" scope="col" aria-colindex="1"><div role="checkbox" aria-checked="false" aria-label="Toggle selection of all rows"></div></th>';
                }

                if (that.virtualization && Smart.Utilities.Core.Browser.Safari) {
                    tr.querySelector('th').classList.add('sticky');
                }
            }

            if (l < levels - 1) {
                tr.classList.add('column-groups-header');
            }

            for (let i = 0; i < columns.length; i++) {
                const column = columns[i];

                if (l === 0) {
                    // one-time column settings
                    if (column.width && isNaN(parseFloat(column.width))) {
                        delete column.width;
                    }

                    if (column.responsivePriority) {
                        if (typeof column.responsivePriority !== 'number') {
                            column.responsivePriority = 1;
                        }

                        column.responsivePriority = Math.max(Math.min(Math.round(column.responsivePriority), 5), 1);

                        if (levels > 1) {
                            hiddenColumnIndexes[i] = that._isColumnHidden(column.responsivePriority, windowWidth);
                        }
                    }
                }

                if (l < levels - 1) {
                    if (hiddenColumnIndexes[i]) {
                        continue;
                    }

                    const column = columns[i],
                        label = column.headerStructure[l];

                    if (i > 0) {
                        let position = i - 1,
                            previousColumn = columns[position];

                        while (previousColumn) {
                            if (that._isColumnHidden(previousColumn.responsivePriority, windowWidth)) {
                                position--;
                                previousColumn = columns[position];
                            }
                            else {
                                break;
                            }
                        }

                        if (previousColumn) {
                            const previousLabel = previousColumn.headerStructure[l];

                            if (label === previousLabel &&
                                that._areColumnsWithSameFreezeSettings(column, previousColumn)) {
                                continue;
                            }
                        }
                    }

                    const th = document.createElement('th');

                    th.includes = [column];

                    if (i < columns.length - 1) {
                        let colSpan = 1,
                            position = i + 1,
                            nextColumn = columns[position];

                        while (nextColumn) {
                            if (!that._isColumnHidden(nextColumn.responsivePriority, windowWidth)) {
                                const nextLabel = nextColumn.headerStructure[l];

                                if (label === nextLabel &&
                                    that._areColumnsWithSameFreezeSettings(column, nextColumn)) {
                                    colSpan++;
                                    th.includes.push(nextColumn);
                                }
                                else {
                                    break;
                                }
                            }

                            position++;
                            nextColumn = columns[position];
                        }

                        th.colSpan = colSpan;
                    }

                    if (l === 0 || column.headerStructure[l - 1] !== label) {
                        th.textContent = label;
                    }

                    th.includes.forEach(col => col.thHierarchy[l] = th);

                    th.classList.add('column-header');

                    if (column.freeze) {
                        th.classList.add('freeze-' + (column.freeze === 'far' ? 'far' : 'near'));
                    }

                    if (that.virtualization && Smart.Utilities.Core.Browser.Safari) {
                        th.classList.add('sticky');
                    }

                    fragment.appendChild(th);
                }
                else {
                    that._setupColumnHeaderCell(selection, fragment, i, column);
                }
            }

            tr.appendChild(fragment);
            thead.appendChild(tr);
            that._tableHeader = thead;
        }

        that.$.tableContainer.appendChild(thead);

        if (that.columnSizeMode === 'default') {
            for (let i = 0; i < that.columns.length; i++) {
                const column = that.columns[i];

                if (!column.width) {
                    const th = thead.querySelector('[data-field="' + column.dataField + '"]');

                    if (th && th.offsetWidth < 5) {
                        th.style.width = parseInt(column.minWidth || that.columnMinWidth) + 'px';
                    }
                }
            }

            if (selection) {
                const visibleColumns = that.columns.filter((column) => {
                    return column.visible;
                });

                if (visibleColumns.length === 1) {
                    const column = visibleColumns[0];
                    const th = thead.querySelector('[data-field="' + column.dataField + '"]');

                    if (th) {
                        th.style.width = '';
                    }
                }
            }
        }
    }

    /**
     * Returns an array of column hierarchy ancestors
     */
    _getColumnHeaderStructure() {
        const that = this,
            columns = that._columns,
            columnGroups = that.columnGroups;

        if (!columnGroups) {
            return 1;
        }

        let levels = 1;

        for (const column of columns) {
            let columnGroup = column.columnGroup;

            column.headerStructure = [];

            if (columnGroup) {
                columnGroup = columnGroups.find(colGroup => colGroup.name === columnGroup);

                if (columnGroup) {
                    column.headerStructure.push(columnGroup.label || columnGroup.name);

                    while (columnGroup.parentGroup) {
                        columnGroup = columnGroups.find(colGroup => colGroup.name === columnGroup.parentGroup);

                        if (columnGroup) {
                            column.headerStructure.unshift(columnGroup.label || columnGroup.name);
                        }
                        else {
                            break;
                        }
                    }
                }
            }

            column.headerStructure.push(column.label);
            levels = Math.max(levels, column.headerStructure.length);
        }

        for (const column of columns) {
            const headerStructure = column.headerStructure,
                firstAncestor = headerStructure[0];

            while (headerStructure.length < levels) {
                headerStructure.unshift(firstAncestor);
            }
        }

        return levels;
    }

    /**
     * Checks if a column is hidden due to responsive priority
     */
    _isColumnHidden(responsivePriority, windowWidth) {
        if (!responsivePriority || responsivePriority === 1 || windowWidth > 1280) {
            return false;
        }

        if (windowWidth <= 640 && responsivePriority === 2 ||
            windowWidth <= 800 && responsivePriority === 3 ||
            windowWidth <= 1024 && responsivePriority === 4 ||
            windowWidth <= 1280 && responsivePriority === 5) {
            return true;
        }

        return false;
    }

    /**
     * Checks if two columns are with the same freeze settings
     */
    _areColumnsWithSameFreezeSettings(columnA, columnB) {
        if (!columnA.freeze && !columnB.freeze ||
            columnA.freeze === columnB.freeze ||
            columnA.freeze === true && columnB.freeze === 'near' ||
            columnA.freeze === 'near' && columnB.freeze === true) {
            return true;
        }

        return false;
    }

    getColumnProperty(dataField, propertyName) {
        const that = this;

        const column = that.columnByDataField[dataField];

        if (!column) {
            return null;
        }

        switch (propertyName) {
            case 'width': {
                if (column.width) {
                    return that._getColumnWidth(column.width, true, column);
                }

                if (column._isResponsive && column._manualPercentageWidth) {
                    return that._getColumnWidth(column._manualPercentageWidth + '%', true, column);
                }

                return that._getColumnWidth(column._manualWidth, true, column);
            }
            default:
                return column[propertyName];
        }
    }

    setColumnProperty(dataField, propertyName, propertyValue) {
        const that = this;

        const column = that.columnByDataField[dataField];

        if (!column) {
            return null;
        }

        that.columns.forEach((column, index) => {
            if (column.dataField === dataField) {
                that.columns[index][propertyName] = propertyValue;
            }
        });
    }

    _getTableRemainingWidth() {
        const that = this;
        let tableWidth = that.offsetWidth;

        if (that.selection) {
            const selectAllElement = that.$.tableContainer.querySelector('.smart-table-select-all');

            if (selectAllElement) {
                tableWidth = that.offsetWidth - selectAllElement.offsetWidth;
            }

            if (that.columns[that.columns.length - 1].dataField === '') {
                tableWidth -= that.columnMinWidth;
            }
        }

        if (that.virtualization && that.$.virtualizationContainer && that.$.virtualizationContainer.computedVerticalScrollBarVisibility) {
            tableWidth -= 20;
        }

        let totalColumnWidths = 0;

        for (let i = 0; i < that.columns.length; i++) {
            const column = that.columns[i];

            if (!column.visible) {
                continue;
            }

            if (column.width && !('' + column.width).endsWith('%')) {
                totalColumnWidths += that._getColumnWidth(column.width);
            }
        }

        tableWidth -= totalColumnWidths;

        return tableWidth;
    }

    /**
     * Returns the size of the column in pixels
     * @param {*} width
     */
    _getColumnWidth(width, toStyle, column) {
        const that = this,
            widthSize = parseFloat(width);

        width = (width + '').trim();

        if (width.endsWith('%')) {
            let tableWidth = that.offsetWidth;

            if (that.selection) {
                const selectAllElement = that.$.tableContainer.querySelector('.smart-table-select-all');

                if (selectAllElement) {
                    tableWidth = that.offsetWidth - selectAllElement.offsetWidth;
                }

                if (that.columns[that.columns.length - 1].dataField === '') {
                    tableWidth -= that.columnMinWidth;
                }
            }

            if (that.virtualization && that.$.virtualizationContainer && that.$.virtualizationContainer.computedVerticalScrollBarVisibility) {
                tableWidth -= 20;
            }

            let totalColumnWidths = 0;

            for (let i = 0; i < that.columns.length; i++) {
                const column = that.columns[i];

                if (!column.visible) {
                    continue;
                }

                if (column.width && !('' + column.width).endsWith('%')) {
                    totalColumnWidths += that._getColumnWidth(column.width);
                }
            }

            tableWidth -= totalColumnWidths;

            const minWidth = column ? (column.minWidth || that._getNumericMinWidth()) : that._getNumericMinWidth();
            const columnWidth = toStyle ? (widthSize + '%') : tableWidth * (widthSize / 100)

            if (minWidth > columnWidth) {
                return minWidth;
            }

            return columnWidth;
        }

        if (isNaN(widthSize)) {
            return 'auto';
        }

        return toStyle ? (widthSize + 'px') : widthSize
    }

    /**
     * Sets up a column's header cell
     */
    _setupColumnHeaderCell(selection, fragment, i, column) {
        const that = this,
            th = document.createElement('th');

        th.setAttribute('aria-colindex', i + 1 + (+selection));


        if (column.width) {
            let width = column.width;
            if (typeof width === 'number' && column.minWidth) {
                width = Math.max(width, column.minWidth);
            }

            th.style.width = that._getColumnWidth(width, true, column);
        }
        else if (column._manualWidth) {
            if (column._isResponsive) {
                th.style.width = column._manualPercentageWidth + '%';
            }
            else {
                th.style.width = column._manualWidth + 'px';
            }
        }

        if (that._columns.length === 1 || !column.allowResize) {
            th.setAttribute('locked', '');
        }

        if (column.freeze) {
            th.classList.add('freeze-' + (column.freeze === 'far' ? 'far' : 'near'));
        }

        if (column.responsivePriority) {
            th.classList.add('priority-' + column.responsivePriority);
        }

        if (that.virtualization && Smart.Utilities.Core.Browser.Safari) {
            th.classList.add('sticky');
        }

        th.setAttribute('data-field', column.dataField);
        th.innerHTML = `<div class="wrapper" role="presentation"><div class="label">${column.label}</div></div>`;

        if (that.columnMenu) {
            const columnMenuButton = document.createElement('div');

            columnMenuButton.classList.add('column-menu');
            columnMenuButton.setAttribute('aria-hidden', true);

            th.firstElementChild.appendChild(columnMenuButton);

            columnMenuButton.onclick = (event) => {
                if (that.activeColumnMenu && that.activeColumnMenu.dataField === column.dataField) {
                    that.closeColumnMenu();
                }
                else {
                    that.openColumnMenu(column.dataField);
                }
                event.preventDefault();
                event.stopPropagation();
            }
        }

        if (that.onColumnRender) {
            that.onColumnRender(column.dataField, th);
        }

        fragment.appendChild(th);
    }

    /**
     * Refreshes data rows only
     */
    _refreshDataRows() {
        const that = this;

        const scrollY = window.scrollY;
        const scrollX = window.scrollX;

        const tbody = that.$.tableContainer.children[1],
            dataRows = Array.from(tbody.querySelectorAll('tr:not(.smart-table-filter-row)'));

        that._clearCachedTemplates();

        if (that.filterRow || that.footerRow || that.headerRow) {
            for (let i = 0; i < dataRows.length; i++) {
                dataRows[i].remove();
            }
        }
        else {
            tbody.innerHTML = '';
        }

        that._createDataRows(tbody);
        that._handleAutoSizeMode();
        that._handleFrozenColumnPositions();
        that._refreshHorizontalScrollbar();

        if (scrollX || scrollY) {
            window.scroll(scrollX, scrollY);
        }
    }

    /**
     * Creates Table data rows.
     */
    _createDataRows(tbody) {
        const that = this;

        if (that.virtualization) {
            that._createVirtualDataRows(tbody);
            return;
        }

        const rowDetailTemplate = that.rowDetailTemplate,
            selection = that.selection,
            fragment = document.createDocumentFragment(),
            hierarchical = that.hasAttribute('hierarchy');

        for (let i = 0; i < that.rows.length; i++) {
            const rowObject = that.rows[i],
                data = rowObject.data;

            if (data.groupDataField) {
                that._createGroupHeader(data, fragment);
            }
            else {
                that._createDataRow(
                    rowObject,
                    fragment,
                    {
                        hierarchical: hierarchical, rowDetailTemplate: rowDetailTemplate,
                        selection: selection, virtualization: false
                    }
                );
            }
        }

        fragment.appendChild(that._createLastRow());
        tbody.appendChild(fragment);
        that._updateState('expanded');

        if (!tbody.parentElement) {
            that.$.tableContainer.insertBefore(tbody, that.$.tableContainer.querySelector('tfoot'));
        }

        if (that.getRootNode().activeElement === that.$.tableContainer) {
            that._tableContainerFocusHandler();
        }

        if (that._templateTags.length) {
            const rows = that.querySelectorAll('tr');

            for (let i = 0; i < that._templateTags.length; i++) {
                const tag = that._templateTags[i];
                const index = tag.index;
                const dataField = tag.dataField;
                const component = tag.td;
                if (rows[index]) {
                    const cell = rows[index].querySelector('[data-field="' + dataField + '"]');

                    const smartButtons = cell.querySelectorAll('smart-button');
                    const buttons = cell.querySelectorAll('button');
                    const anchors = cell.querySelectorAll('a');
                    const spans = cell.querySelectorAll('span');

                    const newTags = [...smartButtons, ...buttons, ...anchors, ...spans];

                    const componentSmartButtons = component.querySelectorAll('smart-button');
                    const componentButtons = component.querySelectorAll('button');
                    const componentAnchors = component.querySelectorAll('a');
                    const componentSpans = component.querySelectorAll('span');

                    const oldTags = [...componentSmartButtons, ...componentButtons, ...componentAnchors, ...componentSpans];

                    for (let m = 0; m < newTags.length; m++) {
                        if (newTags[m].nodeName.toLowerCase() === 'button' && newTags[m].classList.contains('smart-button')) {
                            continue;
                        }

                        newTags[m].onclick = () => {
                            oldTags[m].click();
                        }
                    }
                }

            }
        }
    }

    /**
     * Creates a single Table data row.
     */
    _createDataRow(rowObject, fragment, tableSettings) {
        const that = this,
            // columns = that._columns,
            columns = that._columns.filter(col => col.visible),
            data = rowObject.data,
            id = data.$.id,
            rowElement = document.createElement('tr'),
            result = { row: rowElement, detail: null };
        let colspan = 0;

        rowElement.setAttribute('aria-rowindex', data.$.index + 1);

        that._processAndRenderSelection(data, rowElement, tableSettings.hierarchical);

        if (tableSettings.selection) {
            colspan++;
        }

        for (let j = 0; j < columns.length; j++) {
            const td = document.createElement('td'),
                column = columns[j];

            td.setAttribute('data-field', column.dataField);
            td.setAttribute('aria-colindex', j + 1 + (+tableSettings.selection));

            let value = that._formatCellValue(rowObject, column, td),
                isTreeCell;

            if (column.freeze) {
                td.classList.add('freeze-' + (column.freeze === 'far' ? 'far' : 'near'));
            }

            if (column.responsivePriority) {
                td.classList.add('priority-' + column.responsivePriority);
            }

            if (column.allowEdit === false) {
                td.classList.add('no-edit');
                td.setAttribute('aria-readonly', true);
            }

            if (j === 0 && tableSettings.hierarchical) {
                const childrenFiltered = that._areChildrenFiltered(data);

                if (!data.leaf) {
                    td.classList.add('tree-cell');
                    isTreeCell = childrenFiltered;
                }

                if (data.level) {
                    td.classList.add('outline-level-' + Math.min(data.level, 10));

                    if (data.leaf || !childrenFiltered) {
                        td.classList.add('tree-leaf');
                    }
                }
            }

            if (tableSettings.virtualization && column.templateElement) {
                const templateElement = column.templateElement + '';

                if (isTreeCell) {
                    that._setCellContent(td, value, isTreeCell);
                }

                const templateChild = !isTreeCell ? td : td.children[0].children[1];

                if (templateElement.indexOf('{{value}}') >= 0) {
                    templateChild.innerHTML = templateElement.replace(/{{value}}/ig, '<div class="smart-table-cell-template">' + data[column.dataField] + '</div>');
                }
                else {
                    templateChild.innerHTML = templateElement;
                }

                if (column.templateElementSettings) {
                    if (that._cachedTemplates && that._cachedTemplates[column.dataField + '_' + id]) {
                        if (that._cachedTemplates[column.dataField + '_' + id].innerHTML.length === 0) {
                            delete that._cachedTemplates[column.dataField + '_' + id];
                        }
                        else {
                            templateChild.innerHTML = '';
                            templateChild.appendChild(that._cachedTemplates[column.dataField + '_' + id]);
                        }
                    }

                    column.templateElementSettings(data[column.dataField], id, templateChild.firstElementChild);
                    if (!that._cachedTemplates) {
                        that._cachedTemplates = [];
                    }

                    if (!that._cachedTemplates[column.dataField + '_' + id]) {
                        that._cachedTemplates[column.dataField + '_' + id] = templateChild.firstElementChild;
                    }
                }
            }
            else {
                that._setCellContent(td, value, isTreeCell);
            }

            if (that.onCellRender) {
                that.onCellRender(data, column.dataField, data[column.dataField], td);
            }

            that._applyConditionalFormattingToCell(td, column.dataField, data.$.index);

            rowElement.appendChild(td);
            colspan++;
        }

        rowElement.data = data;
        rowElement.setAttribute('row-id', id);

        if (that._disabledSelection.indexOf(id) !== -1) {
            rowElement.removeAttribute('aria-selected');
            rowElement.classList.add('disable-select');

            if (tableSettings.selection) {
                rowElement.firstElementChild.firstElementChild.setAttribute('aria-disabled', true);
            }
        }

        if (data.expanded) {
            if (that._expandedIds.indexOf(id) === -1) {
                that._expandedIds.push(id);
            }

            rowElement.setAttribute('aria-expanded', true);
            rowElement.classList.add('expanded');
        }
        else if (data.expanded === false) {
            rowElement.setAttribute('aria-expanded', false);
        }

        if (data.level && that._isCollapsed(data)) {
            rowElement.setAttribute('aria-hidden', true);
            rowElement.classList.add('collapsed', 'smart-hidden');
        }

        fragment.appendChild(rowElement);

        if (tableSettings.rowDetailTemplate) {
            const detailTr = document.createElement('tr');

            if (that._expandedRowDetailIds.indexOf(id) === -1) {
                if (tableSettings.virtualization) {
                    return result;
                }

                detailTr.setAttribute('aria-hidden', true);
                detailTr.classList.add('collapsed');
            }
            else {
                result.detail = detailTr;
            }

            detailTr.data = Object.assign(data, { detail: true });
            detailTr.classList.add('smart-table-row-detail');
            detailTr.innerHTML = `<td colspan="${colspan}"><div class="smart-table-detail-container">${that._applyRowDetailTemplate(rowObject)}</div></td>`;
            fragment.appendChild(detailTr);
        }

        return result;
    }

    /**
     * Processes and renders (creates a checkbox) selection state of a row.
     */
    _processAndRenderSelection(data, rowElement, hierarchical, update) {
        const that = this,
            id = data.$.id,
            state = that._getChildCheckState(data).state;

        if (hierarchical && that.selectionByHierarchy) {
            const selectedIds = that._selectedIds,
                selectedIdIndex = selectedIds.indexOf(id);

            if (state === true && selectedIdIndex === -1) {
                that._selectedIds.push(id);
            }
            else if (!state && selectedIdIndex !== -1) {
                that._selectedIds.splice(selectedIdIndex, 1);
            }
        }

        if (!that.selection) {
            return;
        }

        let selectionTd, checkbox;

        if (update) {
            selectionTd = rowElement.firstElementChild;
            checkbox = selectionTd.firstElementChild;
        }
        else {
            selectionTd = document.createElement('td');
            checkbox = document.createElement('div');
        }

        checkbox.className = 'selection-checkbox';
        checkbox.setAttribute('role', 'checkbox');
        checkbox.setAttribute('aria-checked', state ? true : (state === null ? 'mixed' : false));
        checkbox.setAttribute('aria-label', 'Toggle row selection');
        selectionTd.className = `smart-table-select-row freeze-near${state ? ' selected' : (state === null ? ' indeterminate' : '')}`;
        selectionTd.setAttribute('aria-colindex', 1);

        if (!update) {
            selectionTd.appendChild(checkbox);
            rowElement.appendChild(selectionTd);
        }

        rowElement.setAttribute('aria-selected', state === true);
    }

    /**
     * Applies conditional formatting to cell.
     */
    _applyConditionalFormattingToCell(cell, columnDataField, rowIndex) {
        const that = this;

        if (that._conditionalFormatting && that._conditionalFormatting[columnDataField]) {
            const cellStyle = that._conditionalFormatting[columnDataField][rowIndex];

            if (cellStyle) {
                cell.style.backgroundColor = cellStyle.background;
                cell.style.color = cellStyle.color;
                cell.style.fontFamily = cellStyle.fontFamily;
                cell.style.fontSize = cellStyle.fontSize;
            }
        }
    }

    /**
     * Creates last, invisible, row.
     */
    _createLastRow() {
        const lastVisibleRow = document.createElement('tr');

        lastVisibleRow.setAttribute('aria-hidden', true);
        lastVisibleRow.classList.add('last-visible');

        try {
            const resizeObserver = new ResizeObserver(entries => {
                try {
                    lastVisibleRow.classList.toggle('sized',
                        entries[0].contentRect.height > 0 && lastVisibleRow.previousSibling !== null);
                }
                catch (error) {
                    //
                }
            });

            resizeObserver.observe(lastVisibleRow);
        }
        catch (error) {
            //
        }

        return lastVisibleRow;
    }

    /**
     * Creates a group header.
     */
    _createGroupHeader(data, container, existingGroupHeader) {
        const that = this;

        if (!that.columnByDataField[data.groupDataField]) {
            console.error(that.localize('grouping'));
        }

        const groupLabel = that.columnByDataField[data.groupDataField] ? that.columnByDataField[data.groupDataField].label : `${that.localize('EMPTY')}`,
            groupHeader = existingGroupHeader || document.createElement('tr'),
            cell = document.createElement('td'),
            cellInnerContainer = document.createElement('div'),
            arrow = document.createElement('div'),
            labelElement = document.createElement('div');
        let label = data.label;
        if (/<.+?>/.test(label) || /<./.test(label)) {
            // sanitizing value when it contains HTML tags
            if (label.replace) {
                if (that.dataSourceSettings.sanitizeHTML === 'all') {
                    label = label.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').
                        replace(/'/g, '&#39;').replace(/"/g, '&quot;');
                }
                else if (that.dataSourceSettings.sanitizeHTML === 'blackList') {
                    label = window.Smart.Utilities.Core.sanitizeHTML(label);
                }
            }
        }

        if (label === '' || !label) {
            label = `<em class="placeholder">${that.localize('EMPTY')}</em>`;
        }

        groupHeader.removeAttribute('aria-rowindex');
        groupHeader.data = data;
        arrow.classList.add('hierarchy-arrow', 'smart-arrow', 'smart-arrow-down');
        arrow.setAttribute('role', 'button');
        arrow.setAttribute('aria-label', 'Toggle row');
        labelElement.classList.add('group-label');
        labelElement.innerHTML = `<span class="group-label-name">${groupLabel}: </span>
                            <span class="group-label-value">${label}</span>
                            <span class="group-label-count">(${that._getLeafCount(data)})</span>`;
        cell.colSpan = that._columns.filter(col => col.visible).length;
        cell.classList.add('group-header');

        if (data.level) {
            cell.classList.add('outline-level-' + Math.min(data.level, 10));

            if (that._isCollapsed(data)) {
                groupHeader.setAttribute('aria-hidden', true);
                groupHeader.classList.add('collapsed', 'smart-hidden');
            }
        }

        groupHeader.setAttribute('row-id', data.$.id);
        groupHeader.setAttribute('role', 'group');
        groupHeader.setAttribute('aria-level', data.level);

        cellInnerContainer.appendChild(arrow);
        cellInnerContainer.appendChild(labelElement);
        cell.appendChild(cellInnerContainer);

        that._processAndRenderSelection(data, groupHeader, true);

        groupHeader.appendChild(cell);

        groupHeader.setAttribute('aria-expanded', data.expanded);
        groupHeader.classList.toggle('expanded', data.expanded);
        if (data && data.$ && data.$.filtered === false) {
            groupHeader.classList.add('smart-hidden');
        }

        if (that.groupFormatFunction) {
            const settings = {
                value: label,
                row: data.$.id,
                column: data.groupDataField,
                data: data,
                template: null
            };

            that.groupFormatFunction(settings);

            if (label !== settings.value) {
                labelElement.innerHTML = `<span class="group-label-name">${groupLabel}: </span>
                <span class="group-label-value">${settings.value}</span>
                <span class="group-label-count">(${that._getLeafCount(data)})</span>`;
            }

            if (settings.template instanceof HTMLElement) {
                labelElement.innerHTML = '';
                labelElement.appendChild(settings.template);
            }

            const template = settings.template;
            let result = '';

            if (template && template.startsWith('#')) {
                const templateElement = document.querySelector(template);
                let value = label;
                if (templateElement && templateElement instanceof HTMLTemplateElement) {
                    const templateContent = templateElement.content.cloneNode(true),
                        tempElement = document.createElement('div');

                    tempElement.appendChild(templateContent);

                    value = value.toString();
                    value = value.replace(/'/ig, '\\\'');
                    value = value.replace(/"/ig, '\\"');

                    result = tempElement.innerHTML.replace(/{{value}}/ig, value);

                    if (result.indexOf('{{value=') >= 0) {
                        if (!value) {
                            result = result.replace(/{{value=/ig, '');
                            result = result.replace(/}}/ig, '');
                        }
                        else {
                            result = result.substring(0, result.indexOf('{{value=')) + value + result.substring(result.indexOf('}'));
                            result = result.replace(/}/ig, '');
                            result = result.replace(/{/ig, '');
                        }
                    }

                    labelElement.innerHTML = result;
                }
            }
            else if (template && typeof template === 'string') {
                result = template.replace(/{{value}}/ig, label);
                labelElement.innerHTML = result;
            }
        }

        const selectionCoefficient = that.selection ? 1 : 0;

        for (let j = 0; j < that.columns.length; j++) {
            const td = document.createElement('td'),
                column = that.columns[j];

            if (!column.visible) {
                continue;
            }

            td.setAttribute('data-field', column.dataField);
            td.setAttribute('aria-colindex', j + 1 + selectionCoefficient);
            td.classList.add('smart-hidden');
            groupHeader.appendChild(td);
        }

        if (!existingGroupHeader) {
            container.appendChild(groupHeader);
        }

        return groupHeader;
    }

    /**
     * Gets the number of leafs in a group.
     */
    _getLeafCount(data) {
        let count = 0;

        function process(siblings) {
            for (const child of siblings) {
                if (child.leaf) {
                    count++;
                }
                else if (child.children && child.children.length > 0) {
                    process(child.children);
                }
            }
        }

        process(data.children);
        return count;
    }

    /**
     * Returns whether a data row or group header is collapsed.
     */
    _isCollapsed(data) {
        let parent = data.parent;

        while (parent) {
            if (!parent.expanded) {
                return true;
            }

            parent = parent.parent;
        }

        return false;
    }

    /**
     * Returns whether at least one child is not filtered out.
     */
    _areChildrenFiltered(data) {
        if (data.leaf) {
            return;
        }

        if (data.children.length === 0 && this.dataSource.virtualDataSource) {
            // indicates children are to be loaded on-demand
            return true;
        }

        for (let i = 0; i < data.children.length; i++) {
            if (data.children[i].$.filtered !== false) {
                return true;
            }
        }

        return false;
    }

    /**
     * Applies row detail template.
     */
    _applyRowDetailTemplate(rowObject) {
        const that = this,
            dataFields = that.dataSource.dataFields;
        let content = that.rowDetailTemplate;

        for (let i = 0; i < dataFields.length; i++) {
            const dataField = dataFields[i].name,
                regex = new RegExp(`{{${dataField}}}`, 'g');
            let column = that.columnByDataField[dataField] || { dataField: dataField };

            if (regex.test(content)) {
                let data = that._formatCellValue(rowObject, column, document.createElement('td'));

                if (typeof data !== 'string') {
                    data = rowObject.data[column.dataField];
                }

                content = content.replace(regex, data);
            }
        }

        return content;
    }

    /**
     * Handles the relative positions of frozen columns.
     */
    _handleFrozenColumnPositions() {
        const that = this,
            rightToLeft = that.rightToLeft,
            // columns = that._columns;
            columns = that._columns.filter(col => col.visible);
        let frozenNear = [],
            frozenFar = [],
            selectionModifier = 0;

        function applyStyle(property, index, value, i, zIndex) {
            const column = columns[index - selectionModifier],
                ths = [column.headerCellElement];

            for (const columnGroupHeader of column.thHierarchy) {
                if (columnGroupHeader.includes[0].dataField === column.dataField) {
                    ths.push(columnGroupHeader);
                }
            }

            Array.from(that.$.tableContainer.querySelectorAll(`td:nth-child(${index + 1})`)).
                concat(ths).forEach(td => {
                    td.style[property] = value + 'px';

                    if (zIndex) {
                        td.style.zIndex = 2 + i;
                    }
                });
        }

        if (that.selection) {
            if (!rightToLeft) {
                frozenNear.push(0);
            }
            else {
                frozenFar.push(0);
            }

            selectionModifier = 1;
        }

        for (let i = 0 + selectionModifier; i < columns.length + selectionModifier; i++) {
            const column = columns[i - selectionModifier];

            if (!column.freeze) {
                continue;
            }

            if (!rightToLeft && column.freeze === 'far' ||
                rightToLeft && column.freeze !== 'far') {
                frozenFar.push(i);
            }
            else {
                frozenNear.push(i);
            }
        }

        if (frozenNear.length < 2 && frozenFar.length < 2) {
            return;
        }

        const widths = [];

        if (that.selection) {
            widths.push(40);
        }

        for (const column of columns) {
            let width = column.width;
            if (!width) {
                width = column.headerCellElement.offsetWidth;
            }

            if (column.minWidth) {
                width = Math.max(column.minWidth, width);
            }

            widths.push(width);
        }

        if (!rightToLeft) {
            for (let i = 1; i < frozenNear.length; i++) {
                const index = frozenNear[i];
                let left = 0;

                for (let j = 0; j < index; j++) {
                    if (frozenNear.indexOf(j) !== -1) {
                        left += widths[j];
                    }
                }

                applyStyle('left', index, left, i, false);
            }

            for (let i = 0; i < frozenFar.length - 1; i++) {
                const index = frozenFar[i];
                let right = 0;

                for (let j = index + 1; j < widths.length; j++) {
                    if (frozenFar.indexOf(j) !== -1) {
                        right += widths[j];
                    }
                }

                applyStyle('right', index, right, i, true);
            }

            return;
        }

        // right-to-left
        for (let i = 0; i < frozenNear.length - 1; i++) {
            const index = frozenNear[i];
            let left = 0;

            for (let j = index + 1; j < widths.length; j++) {
                if (frozenNear.indexOf(j) !== -1) {
                    left += widths[j];
                }
            }

            applyStyle('left', index, left, i, true);
        }

        for (let i = 1; i < frozenFar.length; i++) {
            const index = frozenFar[i];
            let right = 0;

            for (let j = 0; j < index; j++) {
                if (frozenFar.indexOf(j) !== -1) {
                    right += widths[j];
                }
            }

            applyStyle('right', index, right, i, false);
        }
    }

    /**
     * Returns formatted cell value.
     */
    _formatCellValue(row, column, cell, value) {
        const that = this;
        let rowId = row && row.data ? row.data.$.id : row;

        if (value === undefined) {
            value = row.data[column.dataField];
        }

        if (typeof (value) === 'string' && (value.indexOf('>') >= 0 || value.indexOf('<') >= 0)) {
            // sanitizing value when it contains HTML tags
            if (value.replace) {
                if (that.dataSourceSettings.sanitizeHTML === 'all') {
                    value = value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').
                        replace(/'/g, '&#39;').replace(/"/g, '&quot;');
                }
                else if (that.dataSourceSettings.sanitizeHTML === 'blackList') {
                    value = window.Smart.Utilities.Core.sanitizeHTML(value);
                }
            }
        }

        if (that._cellsWithFormulas) {
            const signature = column.dataField + ':' + rowId;

            if (typeof value === 'string' && /=.+/.test(value)) {
                const formulaParser = that._formulaParser;

                that._cellsWithFormulas[signature] = true;

                if (formulaParser) {
                    value = formulaParser.parse(value.slice(1));
                }
            }
            else {
                delete that._cellsWithFormulas[signature];
            }
        }

        if (column.formatFunction) {
            const settings = {
                value: value,
                row: rowId,
                column: column.dataField,
                data: row.data,
                cell: cell,
                template: null
            };

            column.formatFunction(settings);

            value = settings.value;

            if (settings.template instanceof HTMLElement) {
                return settings.template;
            }

            if (settings.template === null ||
                typeof settings.template !== 'string') {
                return value;
            }

            const template = settings.template;
            let result = '';

            if (template.startsWith('#')) {
                const templateElement = document.querySelector(template);

                if (templateElement && templateElement instanceof HTMLTemplateElement) {
                    const templateContent = templateElement.content.cloneNode(true),
                        tempElement = document.createElement('div');

                    tempElement.appendChild(templateContent);

                    value = value.toString();
                    value = value.replace(/'/ig, '\\\'');
                    value = value.replace(/"/ig, '\\"');

                    result = tempElement.innerHTML.replace(/{{value}}/ig, value);

                    if (result.indexOf('{{value=') >= 0) {
                        if (!value) {
                            result = result.replace(/{{value=/ig, '');
                            result = result.replace(/}}/ig, '');
                        }
                        else {
                            result = result.substring(0, result.indexOf('{{value=')) + value + result.substring(result.indexOf('}'));
                            result = result.replace(/}/ig, '');
                            result = result.replace(/{/ig, '');
                        }
                    }

                    return result;
                }
            }

            result = '<div class="smart-table-cell-template">' + template.replace(/{{value}}/ig, value) + '</div>';
            return result;
        }
        else if (column.dataType === 'date' && value instanceof Date) {
            return value.toLocaleDateString();
        }

        return value;
    }

    /**
     * Sets cell content.
     */
    _setCellContent(cell, content, isTreeCell) {
        if (content instanceof HTMLElement !== true) {
            if (isTreeCell) {
                cell.innerHTML = content = `<div>
                                                <div class="hierarchy-arrow smart-arrow smart-arrow-down" role="button" aria-label="Toggle row"></div>
                                                <div>${content}</div>
                                            </div>`;
            }
            else if (typeof (content) === 'string' && content.indexOf('>') >= 0) {
                if (/<.+?>/.test(content) || /&\S+;/.test(content)) {
                    if (cell._content === content) {
                        return;
                    }

                    cell.innerHTML = content;
                    cell._content = content;
                }
                else {
                    if (cell.textContent !== content) {
                        cell.textContent = content;
                    }
                }
            }
            else {
                if (this.dataSourceSettings.sanitizeHTMLRender === 'html') {
                    if (cell.innerHTML !== content) {
                        cell.innerHTML = content;
                    }

                }
                else {
                    if (cell.textContent !== content) {
                        cell.textContent = content;
                    }
                }
            }

            return;
        }

        while (cell.childNodes.length > 0) {
            cell.childNodes[0].remove();
        }

        if (isTreeCell) {
            const container = document.createElement('div');

            container.innerHTML = '<div class="hierarchy-arrow smart-arrow smart-arrow-down" role="button" aria-label="Toggle row"></div><div></div>';
            container.children[1].appendChild(content);
            cell.appendChild(container);
        }
        else {
            cell.appendChild(content);
        }
    }

    _dataBind(propertyChangedHandler) {
        const that = this;

        const removeAt = function (rowData) {
            const id = rowData.$.id,
                positionInSelectedIds = that._selectedIds.indexOf(id);

            delete that.rowById[id];
            that.rows.splice(rowData.$.index, 1);

            if (positionInSelectedIds !== -1) {
                that._selectedIds.splice(positionInSelectedIds, 1);
            }
        }

        that._cellsWithFormulas = {};
        that._templateTags = [];

        if (!that.dataSource) {
            that.dataFields = [];

            if (!that.columns || Array.isArray(that.columns) && that.columns.length === 0) {
                that.columns = [];

                const th = that.querySelectorAll('th');

                for (let i = 0; i < th.length; i++) {
                    const label = th[i].innerHTML.trim();
                    let boundColumn = { label: label, dataField: label, dataType: 'string' };

                    that.columns.push(boundColumn);
                    that.dataFields.push(label);
                }
            }
            else {
                for (let i = 0; i < that.columns.length; i++) {
                    const column = that.columns[i];

                    if (typeof column === 'string') {
                        that.dataFields.push(column);
                    }
                    else if (typeof column === 'object') {
                        that.dataFields.push(column.dataField + (column.dataType ? ': ' + column.dataType : ''));
                    }
                }
            }

            let rows = [];

            if (!that.rows) {
                const tr = that.querySelectorAll('tr');

                for (let i = 0; i < tr.length; i++) {
                    const row = tr[i];
                    const newRow = {};
                    const td = row.querySelectorAll('td');

                    if (td.length > 0) {
                        for (let j = 0; j < that.columns.length; j++) {
                            const column = that.columns[j];

                            newRow[column.dataField] = td[j].innerHTML.trim();
                            if (newRow[column.dataField].indexOf('<') >= 0) {
                                that._templateTags.push(
                                    {
                                        index: i,
                                        dataField: column.dataField,
                                        td: td[j]
                                    }
                                )
                            }
                        }

                        rows.push(newRow);
                    }
                }

                that.dataSource = new Smart.DataAdapter(
                    {
                        dataSource: rows,
                        expandHierarchy: that.expandHierarchy,
                        dataFields: that.dataFields,
                        id: that.dataRowId
                    });
            }

            const tables = that.$.container.querySelectorAll('table');

            if (tables.length > 1) {
                tables[tables.length - 1].parentNode.removeChild(tables[tables.length - 1]);
            }
        }
        else if (that.dataSource instanceof Smart.DataAdapter === false) {
            const dataSource = that.dataSource;

            if (Array.isArray(dataSource)) {
                const columns = that.columns;
                let dataFields;

                if (dataSource.length > 0) {
                    const firstRecord = dataSource[0];

                    dataFields = [];

                    for (let dataField in firstRecord) {
                        const value = firstRecord[dataField];

                        if (typeof value === 'number') {
                            dataFields.push({ name: dataField, dataType: 'number' });
                        }
                        else if (typeof value === 'boolean') {
                            dataFields.push({ name: dataField, dataType: 'boolean' });
                        }
                        else if (value instanceof Date) {
                            dataFields.push({ name: dataField, dataType: 'date' });
                        }
                        else if (value instanceof Object) {
                            dataFields.push({ name: dataField, dataType: 'any' });
                        }
                        else {
                            dataFields.push({ name: dataField, dataType: 'string' });
                        }
                    }
                }

                if (columns && columns.length > 0) {
                    dataFields = dataFields || [];

                    columns.forEach(column => {
                        if (column.dataType) {
                            const respectiveDataField = dataFields.find(dataField => dataField.name === column.dataField);

                            if (respectiveDataField) {
                                respectiveDataField.dataType = column.dataType;
                            }
                            else if (column.map) {
                                const respectiveDataField = dataFields.find((dataField) => {
                                    if (column.map.indexOf(dataField.name) >= 0) {
                                        return dataField;
                                    }
                                    else {
                                        return null;
                                    }
                                });

                                if (respectiveDataField) {
                                    dataFields.push({ name: column.dataField, map: column.map, dataType: column.dataType });
                                }
                            }
                            else {
                                dataFields.push({ name: column.dataField, dataType: column.dataType });
                            }
                        }
                    });
                }

                if (that.dataSourceSettings.dataFields && that.dataSourceSettings.dataFields.length > 0) {
                    that.dataSource = new Smart.DataAdapter({
                        dataSource: that.dataSource,
                        dataSourceType: that.dataSourceSettings.dataSourceType,
                        dataFields: that.dataSourceSettings.dataFields,
                        keyDataField: that.dataSourceSettings.keyDataField,
                        parentDataField: that.dataSourceSettings.parentDataField,
                        childrenDataField: that.dataSourceSettings.childrenDataField,
                        groupBy: that.dataSourceSettings.groupBy,
                        mapChar: that.dataSourceSettings.mapChar,
                        root: that.dataSourceSettings.root,
                        record: that.dataSourceSettings.record,
                        autoGenerateColumns: that.autoGenerateColumns,
                        id: that.dataSourceSettings.id || that.dataRowId,
                        expandHierarchy: that.expandHierarchy,
                        virtualDataSource: that.dataSourceSettings.virtualDataSource,
                        virtualDataSourceOnExpand: that.dataSourceSettings.virtualDataSourceOnExpand
                    });
                }
                else {
                    that.dataSource = new Smart.DataAdapter({
                        dataSource: that.dataSource,
                        dataFields: dataFields,
                        id: that.dataRowId || that.dataSourceSettings.id,
                        dataSourceType: that.dataSourceSettings.dataSourceType,
                        keyDataField: that.dataSourceSettings.keyDataField,
                        parentDataField: that.dataSourceSettings.parentDataField,
                        childrenDataField: that.dataSourceSettings.childrenDataField,
                        groupBy: that.dataSourceSettings.groupBy,
                        mapChar: that.dataSourceSettings.mapChar,
                        root: that.dataSourceSettings.root,
                        record: that.dataSourceSettings.record,
                        autoGenerateColumns: that.autoGenerateColumns,
                        expandHierarchy: that.expandHierarchy,
                        virtualDataSource: that.dataSourceSettings.virtualDataSource,
                        virtualDataSourceOnExpand: that.dataSourceSettings.virtualDataSourceOnExpand
                    });
                }
            }
            else {
                that.dataSource = new Smart.DataAdapter({ dataSource: [], id: that.dataRowId, expandHierarchy: that.expandHierarchy });
            }
        }

        that.dataSource.expandHierarchy = that.expandHierarchy;
        that._transformDataSource();
        that._applyInitialConditionalFormatting(that.dataSource);

        that._initColumns(propertyChangedHandler);
        that._initRows();

        that.dataSource.notify(function (changes) {
            if (that.dataSource._updating) {
                delete that.dataSource._updating;
                return;
            }

            if (that._editing) {
                return;
            }


            const data = changes.data,
                oldSelectedIds = that._selectedIds.slice(0);
            let changeType = changes.action;

            that.rows.canNotify = false;

            switch (changes.action) {
                case 'add':
                    if (data.length) {
                        for (let i = 0; i < data.length; i++) {
                            that._addNewRow(data[i], that.dataSource.length - data.length + i);
                        }
                    }
                    else {
                        that._addNewRow(data, that.dataSource.length - 1);
                    }

                    break;
                case 'update':
                    if (data.length) {
                        for (let i = 0; i < data.length; i++) {
                            const index = changes.index[i];

                            that.rows[index].data = data[i];
                        }
                    }
                    else {
                        /* const index = changes.index;
                         that.rows[index].data = data; */
                    }

                    break;
                case 'insert':
                    that._addNewRow(data, changes.index);

                    for (let i = 0; i < that.rows.length; i++) {
                        const row = that.rows[i];

                        row.dataIndex = i;
                    }
                    break;
                case 'remove':
                case 'removeLast':
                    changeType = 'remove';
                    removeAt(data);
                    break;
                case 'bindingComplete':
                    if (that.filtering && that.filterRow) {
                        const filterInfo = that._filterInfo;
                        // restores filtering and sorting after data bind
                        if (filterInfo.inputFilters) {
                            that._filterByAll(filterInfo.query);
                        }
                        else if (filterInfo.rowFilters) {
                            that._applyRowFilters();
                        }
                        else if (filterInfo.appliedFilters) {
                            that._refreshFilters();
                        }
                    }
                    break;
            }

            that.rows.canNotify = true;

            this.refreshHierarchy();
            that._fullRefresh(undefined, oldSelectedIds, changeType);

        });

        that.refresh();

        if (that.dataSource.virtualDataSource) {
            that.paging = true;
            that._requestVirtualDataSource('dataBind');
        }

        that.$.tableContainer.setAttribute('aria-rowcount', that.dataSource.length);
    }

    /**
     * Request virtual data source (remote data).
     */
    _requestVirtualDataSource(action, callback, toggledRow = null) {
        const that = this,
            pageSize = that.pageSize,
            viewStart = Math.max(that.pageIndex * pageSize, 0),
            viewEnd = viewStart + pageSize,
            sorting = [],
            filtering = [],
            edit = {};
        let filterOperator = null;

        that.dataSource._updating = true;

        if (that._sortColumns) {
            that._sortColumns.forEach((column, index) => sorting[column.dataField] = { sortOrder: column.direction, sortIndex: index });
            sorting.length = that._sortColumns.length;
        }

        if (that._filterInfo.appliedFilters) {
            for (let dataField in that._filterInfo.appliedFilters) {
                filtering[dataField] = that._filterInfo.appliedFilters[dataField];
            }

            filtering.length = Object.keys(that._filterInfo.appliedFilters).length;
            filterOperator = 'and';
        }
        else {
            const UIFilters = that._filterInfo.inputFilters || that._filterInfo.rowFilters;

            if (UIFilters) {
                UIFilters.forEach(filter => filtering[filter[0]] = filter[1]);
                filtering.length = UIFilters.length;
            }

            filterOperator = that._filterInfo.inputFilters ? 'or' : 'and';
        }

        if (that._editing) {
            edit.row = that._editing.row.data;
        }

        that.$.loadingIndicatorContainer.classList.remove('smart-hidden');
        that.setAttribute('loading', '');

        that.dataSource.onVirtualDataSourceRequested(
            function (details) {
                let confirmedChange = true;

                if (['add', 'update', 'remove'].indexOf(action) !== -1 && callback) {
                    confirmedChange = callback(details.result);
                }

                that.$.loadingIndicatorContainer.classList.add('smart-hidden');
                that.removeAttribute('loading');

                if (!confirmedChange) {
                    return;
                }

                if (toggledRow) {
                    toggledRow.expanded = true;
                }

                that._initRows();
                that._refreshDataRows();
            },
            {
                first: viewStart,
                last: viewEnd,
                sorting: sorting,
                filtering: filtering,
                filterOperator: filterOperator,
                grouping: [],
                edit: edit,
                row: toggledRow,
                action: action
            });
    }

    sortBy(columnDataField, sortOrder) {
        const that = this,
            column = that.columnByDataField[columnDataField];

        if (column) {
            if (column.allowSort === false) {
                return;
            }

            columnDataField = column.dataField;
        }

        that._sortBy({
            column: column,
            columnDataField: columnDataField,
            sortOrder: sortOrder,
            dataFields: that.dataSource.dataFields,
            columnByDataField: 'columnByDataField'
        });

        if (columnDataField === null) {
            const eventType = that._sortOnClick === true ? 'interaction' : 'programmatic';

            that.$.fireEvent('sort', { columns: [], sortDataFields: [], sortOrders: [], sortDataTypes: [], type: eventType });
        }
    }

    /**
     * General sorting functionality
     */
    _sortBy(settings) {
        const that = this,
            column = settings.column,
            columnDataField = settings.columnDataField,
            sortOrder = settings.sortOrder,
            dataFields = settings.dataFields,
            columnByDataField = settings.columnByDataField,
            sortDataFields = [],
            sortOrders = [],
            sortDataTypes = [];

        const clearSortColumn = function (column) {
            that._addSortIconContainer(column);

            if (column.headerCellElement) {
                column.headerCellElement.removeAttribute('aria-sort');
                column.headerCellElement.sortIconContainerElement.classList.remove('desc');
                column.headerCellElement.sortIconContainerElement.classList.remove('asc');
            }
            column.sortOrder = null;
        }

        const clearSortColumns = function () {
            if (that._sortColumns && that._sortColumns.length > 0) {
                for (let i = 0; i < that._sortColumns.length; i++) {
                    const sortColumn = that._sortColumns[i];
                    const column = that[columnByDataField][sortColumn.dataField];

                    clearSortColumn(column);
                }
            }

            that._sortColumns = [];
        }

        if (column === null || column === undefined) {
            if (that._sortColumns && that._sortColumns.length > 0) {
                clearSortColumns();
                that._sortCallback(sortDataFields, sortOrders, sortDataTypes);
                that._updateState('sorted');
            }

            return;
        }

        if (that.sortMode === 'none' || !that.dataSource) {
            return;
        }

        if (sortOrder && column.sortOrder === sortOrder) {
            return;
        }

        let sortColumnDirection = sortOrder || 'asc';

        if (sortOrder === null) {
            sortColumnDirection = null;
        }

        clearSortColumn(column);

        if (!that._sortColumns) {
            that._sortColumns = [];
        }

        let dataType = 'string';

        for (let i = 0; i < dataFields.length; i++) {
            const field = dataFields[i];

            if (field.name === columnDataField) {
                dataType = field.dataType;

                if (dataType === 'any') {
                    dataType = 'number';
                }

                break;
            }
        }

        let addNewSortColumn = true;

        for (let i = 0; i < that._sortColumns.length; i++) {
            const sortColumn = that._sortColumns[i];

            if (sortColumn.dataField === columnDataField) {
                addNewSortColumn = false;
                if (sortColumnDirection === null) {
                    sortColumn.direction = 'desc';
                }

                if (sortColumn.direction === 'asc') {
                    sortColumn.direction = 'desc';
                    sortColumnDirection = 'desc';
                }
                else if (sortColumn.direction === 'desc') {
                    that._sortColumns.splice(i, 1);
                    clearSortColumn(column);
                    sortColumnDirection = sortOrder;
                    break;
                }
            }
        }

        if (addNewSortColumn) {
            if (that.sortMode === 'one') {
                clearSortColumns();
            }

            that._sortColumns.push({ dataField: columnDataField, direction: sortColumnDirection, dataType: dataType });
        }

        that._addSortIconContainer(column);

        if (sortColumnDirection !== null) {
            if (column.headerCellElement) {
                column.headerCellElement.sortIconContainerElement.classList.remove('asc');
                column.headerCellElement.sortIconContainerElement.classList.remove('desc');
            }

            column.sortOrder = sortColumnDirection;

            if (column.headerCellElement) {
                if (sortColumnDirection === 'desc') {
                    column.headerCellElement.sortIconContainerElement.classList.add('desc');
                    column.headerCellElement.setAttribute('aria-sort', 'descending');
                }
                else {
                    column.headerCellElement.sortIconContainerElement.classList.add('asc');
                    column.headerCellElement.setAttribute('aria-sort', 'ascending');
                }
            }
        }
        else {
            if (column.headerCellElement) {
                column.headerCellElement.sortIconContainerElement.classList.remove('asc');
                column.headerCellElement.sortIconContainerElement.classList.remove('desc');
                column.headerCellElement.removeAttribute('aria-sort');
            }
        }

        for (let i = 0; i < that._sortColumns.length; i++) {
            const sortColumn = that._sortColumns[i],
                columnDefinition = that[columnByDataField][sortColumn.dataField];

            sortDataFields.push(sortColumn.dataField);
            sortOrders.push(sortColumn.direction);
            sortDataTypes.push(sortColumn.dataType);

            if (columnDefinition.headerCellElement) {
                columnDefinition.headerCellElement.sortIconContainerElement.setAttribute('order', i + 1);
            }
        }

        that._sortCallback(sortDataFields, sortOrders, sortDataTypes);

        that._updateState('sorted');

        if (!that._doNotFireEvent) {
            const eventType = that._sortOnClick === true ? 'interaction' : 'programmatic';

            that.$.fireEvent('sort', { columns: that._sortColumns, sortDataFields: sortDataFields, sortOrders: sortOrders, sortDataTypes: sortDataTypes, type: eventType });
        }
    }

    /**
     * Adds sort icon container to a header cell
     */
    _addSortIconContainer(column, direction, order) {
        const headerCellElement = column.headerCellElement;

        if (!headerCellElement) {
            return;
        }

        if (!headerCellElement.sortIconContainerElement) {
            const arrow = document.createElement('div');

            arrow.classList.add('sort-by');
            arrow.setAttribute('aria-hidden', true);

            if (direction) {
                arrow.classList.add(direction);
            }

            headerCellElement.firstElementChild.appendChild(arrow);
            headerCellElement.sortIconContainerElement = arrow;
            if (direction === 'asc') {
                headerCellElement.setAttribute('aria-sort', 'ascending');
            }
            else if (direction === 'desc') {
                headerCellElement.setAttribute('aria-sort', 'descending');
            }
            else {
                headerCellElement.removeAttribute('aria-sort');
            }

            if (order !== undefined) {
                arrow.setAttribute('order', order);
            }
        }
    }

    /**
     * Applies sorting; refreshes the view
     */
    _sortCallback(sortDataFields, sortOrders, sortDataTypes) {
        const that = this,
            dataSource = that.dataSource;

        if (!dataSource.virtualDataSource) {
            let customCompareFunctions = null;

            for (let i = 0; i < that.columns.length; i++) {
                const column = that.columns[i];

                if (column.sort) {
                    if (!customCompareFunctions) {
                        customCompareFunctions = {};
                    }

                    customCompareFunctions[column.dataField] = column.sort;
                }
            }

            dataSource._sort(that.dataSource.boundSource, sortDataFields, sortOrders, sortDataTypes, that.sort, customCompareFunctions);

            let grouped = [];
            let expandedGroups = [];

            if (dataSource.groupBy && dataSource.groupBy.toArray) {
                grouped = dataSource.groupBy.toArray().slice(0);
            }

            if (grouped.length > 0) {
                expandedGroups = that._getExpandedGroups(dataSource.boundHierarchy);
            }

            dataSource.refreshHierarchy();

            if (grouped.length > 0) {
                const stopEvents = that._doNotFireEvent;
                that._doNotFireEvent = true;
                that._restoreExpandedGroups(expandedGroups);
                that._doNotFireEvent = stopEvents;
            }
        }

        that._fullRefresh('sort');
    }

    /**
     * Clears the sorting of all columns
     */
    clearSort() {
        this.sortBy(null);
    }

    /**
     * Makes a full Table refresh
     */
    _fullRefresh(action, oldSelectedIds, changeType, callback) {
        const that = this;

        if (that.__updating) {
            return;
        }

        if (that.dataSource.virtualDataSource) {
            that._requestVirtualDataSource(action, callback);
            return;
        }

        const fractionOfMax = that._getFractionOfMax();

        if (!oldSelectedIds) {
            oldSelectedIds = that._selectedIds.slice(0);
        }

        oldSelectedIds = JSON.stringify(oldSelectedIds.sort());

        that._initRows();
        that._refreshDataRows();
        that._setFractionOfMax(fractionOfMax);

        if (action === 'filter') {
            that._updateSelectAllState();

            if (!changeType) {
                changeType = 'filter';
            }
        }

        if (oldSelectedIds !== JSON.stringify(that._selectedIds.slice(0).sort())) {
            if (action !== 'filter') {
                that._updateSelectAllState();
            }

            that._updateState('selected');
            that.$.fireEvent('change', { type: changeType });
        }

        if (typeof action === 'string' && action.indexOf('page') !== -1) {
            that._fixFrozenHeaderFirefox();
        }
    }

    /**
     * pager change handler
     */
    _pagerChangeHandler(event) {
        const that = this,
            target = that.isInShadowDOM ? event.composedPath()[0] : event.target;

        if (target !== that.$.pager) {
            return;
        }

        that.pageIndex = event.detail.index;

        that._fullRefresh('pageIndexChange');
        that.$.fireEvent('page', { action: 'pageIndexChange' });
    }

    /**
     * pager pageSizeChanged handler
     */
    _pagerPageSizeChanged(event) {
        const that = this;

        that.pageSize = event.detail.value;
        that._fullRefresh('pageSizeChange');
        that.$.fireEvent('page', { action: 'pageSizeChange' });
    }

    /**
     * filterInput keyup handler.
     */
    _filterInputKeyupHandler() {
        const that = this;

        clearTimeout(that._filterInputTimeout);

        that._filterInputTimeout = setTimeout(function () {
            if (that._filterInfo && that.$.filterInput.value !== that._filterInfo.query) {
                const oldContext = that.context;

                that.context = that;
                that._filterByAll(that.$.filterInput.value);
                that.context = oldContext;
            }
        }, 500);
    }

    /**
     * Filters by all data fields.
     */
    _filterByAll(query) {
        const that = this;

        that._filterInfo.query = query;

        if (query === '') {
            that.clearFilters();
            return;
        }

        const filters = [];

        that._clearRowFilters();
        delete that._filterInfo.appliedFilters;
        that._filterInfo.stringDataFields.forEach(dataField => {
            const filterGroup = new Smart.Utilities.FilterGroup(),
                filterObject = filterGroup.createFilter('string', query, 'CONTAINS');

            filterGroup.addFilter('or', filterObject);
            filters.push([dataField, filterGroup]);
        });

        if (!that.dataSource.virtualDataSource) {
            that.dataSource._filter(filters, 'or');
        }

        that._filterInfo.inputFilters = filters;
        that._fullRefresh('filter');
        that._updateState('filtered');

        if (!that._doNotFireEvent) {
            that.$.fireEvent('filter', { action: 'add', filters: filters });
        }
    }

    /**
     * Initial paging and filtering setup.
     */
    _setupPagingAndFiltering() {
        const that = this;

        that.$.pager.$.pageSizeSelector.classList.add('underlined');
        that.$.pager.$.pageSizeSelector.dropDownAppendTo = 'body';

        that._filterInfo = { query: '' };
        that._applyFilterTemplate();
        that.$.header.classList.toggle('smart-hidden', (!that.filtering || that.filterRow || that.columnMenu) && !that.conditionalFormattingButton);
    }

    /**
     * Applies filter template.
     */
    _applyFilterTemplate() {
        const that = this,
            filterTemplate = that.filterTemplate;

        that.$.filterTemplateContainer.innerHTML = '';

        if (!filterTemplate) {
            that.$.filterInput.classList.remove('smart-hidden');
            that.$.filterTemplateContainer.classList.add('smart-hidden');
            that.filterTemplate = null;
            return;
        }

        const potentialHTMLTemplate = document.getElementById(filterTemplate);

        if (potentialHTMLTemplate && potentialHTMLTemplate instanceof HTMLTemplateElement) {
            const templateContent = document.importNode(potentialHTMLTemplate.content, true);

            that.$.filterInput.classList.add('smart-hidden');
            that.$.filterTemplateContainer.classList.remove('smart-hidden');
            that.$.filterTemplateContainer.appendChild(templateContent);
        }
        else {
            that.filterTemplate = null;
            that.$.filterInput.classList.remove('smart-hidden');
            that.$.filterTemplateContainer.classList.add('smart-hidden');
        }
    }

    /**
     * Refreshes applied filters.
     */
    _refreshFilters(action) {
        const that = this,
            filters = [];

        for (let columnDataField in that._filterInfo.appliedFilters) {
            let filterGroup = that._filterInfo.appliedFilters[columnDataField];

            filters.push([columnDataField, filterGroup]);
        }

        if (filters.length === 0) {
            that.clearFilters();
            return;
        }

        that._clearFilterInput();
        that._clearRowFilters();

        if (!that.dataSource.virtualDataSource) {
            that.dataSource._filter(filters, that.filterOperator);
        }

        that._fullRefresh('filter');
        that._updateState('filtered');

        if (action && !that._doNotFireEvent) {
            that.$.fireEvent('filter', { action: action, filters: filters });
        }
    }

    /**
     * Localizes labels displayed in the Table.
     */
    _localize() {
        const that = this,
            pager = that.$.pager;

        if (!pager.messages[that.locale]) {
            pager.messages[that.locale] = {};
        }

        pager.messages[that.locale].pageSizeLabel = that.localize('itemsPerPage');
        pager.messages[that.locale].summaryPrefix = that.localize('summaryPrefix');
        pager.messages[that.locale].summarySuffix = '';
        pager.$.firstButton.setAttribute('tooltip', that.localize('firstButton'));
        pager.$.previousButton.setAttribute('tooltip', that.localize('previousButton'));
        pager.$.nextButton.setAttribute('tooltip', that.localize('nextButton'));
        pager.$.lastButton.setAttribute('tooltip', that.localize('lastButton'));

        that.$.filterInput.placeholder = that.localize('filterPlaceholder');
        that.$.conditionalFormattingButton.setAttribute('tooltip', that.localize('conditionalFormatting'));

        that._filterInfo.stringConditions = [
            { value: 'EMPTY', label: that.localize('EMPTY') },
            { value: 'NOT_EMPTY', label: that.localize('NOT_EMPTY') },
            { value: 'CONTAINS', label: that.localize('CONTAINS') },
            { value: 'CONTAINS_CASE_SENSITIVE', label: that.localize('CONTAINS_CASE_SENSITIVE') },
            { value: 'DOES_NOT_CONTAIN', label: that.localize('DOES_NOT_CONTAIN') },
            { value: 'DOES_NOT_CONTAIN_CASE_SENSITIVE', label: that.localize('DOES_NOT_CONTAIN_CASE_SENSITIVE') },
            { value: 'STARTS_WITH', label: that.localize('STARTS_WITH') },
            { value: 'STARTS_WITH_CASE_SENSITIVE', label: that.localize('STARTS_WITH_CASE_SENSITIVE') },
            { value: 'ENDS_WITH', label: that.localize('ENDS_WITH') },
            { value: 'ENDS_WITH_CASE_SENSITIVE', label: that.localize('ENDS_WITH_CASE_SENSITIVE') },
            { value: 'EQUAL', label: that.localize('EQUAL') },
            { value: 'EQUAL_CASE_SENSITIVE', label: that.localize('EQUAL_CASE_SENSITIVE') },
            { value: 'NULL', label: that.localize('NULL') },
            { value: 'NOT_NULL', label: that.localize('NOT_NULL') }
        ];
        that._filterInfo.numberAndDateConditions = [
            { value: 'EQUAL', label: that.localize('EQUAL') },
            { value: 'NOT_EQUAL', label: that.localize('NOT_EQUAL') },
            { value: 'LESS_THAN', label: that.localize('LESS_THAN') },
            { value: 'LESS_THAN_OR_EQUAL', label: that.localize('LESS_THAN_OR_EQUAL') },
            { value: 'GREATER_THAN', label: that.localize('GREATER_THAN') },
            { value: 'GREATER_THAN_OR_EQUAL', label: that.localize('GREATER_THAN_OR_EQUAL') },
            { value: 'NULL', label: that.localize('NULL') },
            { value: 'NOT_NULL', label: that.localize('NOT_NULL') }
        ];
    }

    /**
     * Creates the Table's filter row.
     */
    _createFilterRow(existingFilterRow) {
        const that = this;

        if (!that.filtering || !that.filterRow) {
            return;
        }

        if (existingFilterRow) {
            that.$.tableContainer.children[1].insertBefore(existingFilterRow, that.$.tableContainer.children[1].firstElementChild);
            return;
        }

        const row = document.createElement('tr'),
            columns = that._columns.filter(col => col.visible);
        let content = '';

        row.className = 'smart-table-filter-row';

        if (that.selection) {
            content += '<td style="left: 0px; z-index: 99; position: sticky; background: var(--smart-background);"></td>';
        }

        for (let i = 0; i < columns.length; i++) {
            const column = columns[i];
            const filterRowInput = that._createFilterRowInput(column);

            content += filterRowInput;
        }

        row.innerHTML = content;

        that.$.tableContainer.children[1].insertBefore(row, that.$.tableContainer.children[1].firstElementChild);
    }

    _createFilterRowInput(column) {
        const that = this;
        const animation = ` animation="${that.animation}" `;
        const rightToLeft = that.rightToLeft ? ' right-to-left' : '';
        const classes = [];

        let dataSource, inputType, className, value;

        if (column.dataType === 'string') {
            dataSource = that._filterInfo.stringConditions;
            inputType = 'string';
            className = 'string-filter';
            value = that.localize('CONTAINS');
        }
        else {
            dataSource = that._filterInfo.numberAndDateConditions;
            inputType = column.dataType;
            className = 'num-date-filter';
            value = that.localize('EQUAL');
        }

        if (column.freeze) {
            classes.push('freeze-' + (column.freeze === 'far' ? 'far' : 'near'));
        }

        if (column.responsivePriority) {
            classes.push('priority-' + column.responsivePriority);
        }

        if (column.allowFilter === false) {
            classes.push('no-filter');
        }

        const filterRowInput = `<td${classes.length ? ' class="' + classes.join(' ') + '"' : ''} filter-for="${column.dataField}">
                            <div>
                                <input type="${inputType}" class="filter-value" aria-label="Filter value" />
                                <smart-input class="${className}${animation}data-source='${JSON.stringify(dataSource)}' drop-down-button-position="right" drop-down-width="auto" readonly${rightToLeft} value="${value}" title="${that.localize('filterCondition')}" aria-label="Filter condition"></smart-input>
                                <smart-button class="smart-hidden" title="${that.localize('clearFilter')}"${animation}${rightToLeft} aria-label="Clear filter"></smart-button>
                            </div>
                        </td>`;

        return filterRowInput;
    }

    /**
     * tableContainer change handler.
     */
    _tableContainerChangeHandler(event) {
        const that = this,
            target = that.isInShadowDOM ? event.composedPath()[0] : event.target;

        if (target.classList.contains('filter-value') && (target.type === 'date' ||
            (target instanceof Smart.Input) &&
            (target.previousElementSibling.value !== '' || ['EMPTY', 'NOT_EMPTY', 'NULL', 'NOT_NULL'].indexOf(event.detail.value) !== -1))) {
            that._applyRowFilters();
        }

        if ((target.classList.contains('string-filter') || target.classList.contains('num-date-filter')) &&
            (target instanceof Smart.Input) &&
            (target.previousElementSibling.value !== '' || ['EMPTY', 'NOT_EMPTY', 'NULL', 'NOT_NULL'].indexOf(event.detail.value) !== -1)) {
            that._applyRowFilters();
        }
    }

    /**
     * tableContainer click handler.
     */
    _tableContainerClickHandler(event) {
        const that = this;

        if (that._editing) {
            return;
        }

        const target = that.isInShadowDOM ? event.composedPath()[0] : event.target;

        if (!that.$.tableContainer.contains(target)) {
            return;
        }

        const row = target.closest('tbody tr[row-id], tfoot tr.grand-total');

        if (row) {
            that.closeColumnMenu();
            const cell = target.closest('td');

            if (target.classList.contains('hierarchy-arrow')) {
                const animation = that.animation;

                if (that.virtualization) {
                    that._animation = 'none';
                }

                that._hierarchyArrowClickHandler(row, cell);

                if (that.virtualization) {
                    that._animation = animation;
                }
                return;
            }

            const id = row.getAttribute('row-id');

            let rowData;

            if (id) {
                rowData = that.rowById ? that.rowById[id].data :
                    that.rows.dataItemById[id];
            }

            const parsedId = rowData ? rowData.$.id : undefined,
                dataField = cell ? cell.getAttribute('data-field') : undefined;

            if (!rowData && row.classList.contains('grand-total')) {
                rowData = row.data;
            }

            if (dataField !== undefined) {
                const data = {};

                for (let i = 0; i < that.columns.length; i++) {
                    const column = that.columns[i];
                    data[column.dataField] = rowData[column.dataField];
                }

                that.$.fireEvent('cellClick', { id: id, row: data, dataField: dataField, value: rowData[dataField], originalEvent: event });
            }

            that._toggleSelection(row, rowData, event, target);

            if (that.editing || that.drillDown) {
                if (!dataField || cell.classList.contains('no-edit')) {
                    return;
                }

                clearTimeout(that._dblclickObject.timeout);
                that._dblclickObject.numberOfClicks++;

                if (that._dblclickObject.numberOfClicks === 2) {
                    that._dblclickObject.numberOfClicks = 0;

                    that._beginEdit({
                        rowElement: row,
                        cell: cell,
                        dataField: dataField
                    });
                }
                else {
                    that._dblclickObject.timeout = setTimeout(function () {
                        that._dblclickObject.numberOfClicks = 0;
                    }, 300);
                }
            }

            if (that.rowDetailTemplate) {
                that._toggleRowDetail(row, parsedId);
            }

            return;
        }

        const selectAllCheckbox = target.closest('.smart-table-select-all');

        if (selectAllCheckbox) {
            if (that.selectionMode === 'one') {
                return;
            }

            that._selectAllCheckboxClickHandler(selectAllCheckbox);
            return;
        }

        const clearFilterButton = target.closest('.smart-table-filter-row smart-button') || target.closest('.smart-table-column-menu smart-button');

        if (clearFilterButton) {
            const filterValueInput = clearFilterButton.parentElement.firstElementChild,
                filterConditionInput = clearFilterButton.parentElement.children[1];

            filterValueInput.value = '';

            if (['EMPTY', 'NOT_EMPTY', 'NULL', 'NOT_NULL'].indexOf(filterConditionInput.$.input.dataValue) !== -1) {
                filterConditionInput.value = that.localize(filterValueInput.type === 'text' ? 'CONTAINS' : 'EQUAL');
                delete filterConditionInput.$.input.dataValue;
            }

            that._applyRowFilters();
            return;
        }
    }

    /**
     * Toggles selection.
     */
    _toggleSelection(row, rowData, event, target) {
        const that = this;

        if (!that.selection || that.selectionMode === 'cell' ||
            row.classList.contains('disable-select') || row.classList.contains('grand-total')) {
            return;
        }

        function clearSelection() {
            that._selectedIds = [];
            Array.from(that.$.tableContainer.querySelectorAll('.smart-table-select-row.selected')).forEach(td => {
                if (!td.parentElement.classList.contains('disable-select')) {
                    td.parentElement.setAttribute('aria-selected', false);
                }

                td.classList.remove('selected', 'indeterminate');
                td.firstElementChild.setAttribute('aria-checked', false);
            });
        }

        function getDescendantsIds(item, idCollection) {
            const itemId = item.$.id;

            if (that._selectedIds.indexOf(itemId) !== -1) {
                idCollection.push(itemId);
            }

            if (item.children) {
                item.children.forEach(child => getDescendantsIds(child, idCollection));
            }
        }

        const id = rowData.$.id;
        let rowSelected = that._selectedIds.indexOf(id) !== -1;

        that._interaction = true;

        if (that.selectionMode === 'one') {
            if (!rowSelected) {
                clearSelection();
                that.select(id);
            }
            else {
                return;
            }
        }
        if (that.selectionMode === 'many') {
            if (rowSelected) {
                that.unselect(id);
            }
            else {
                if (that._disabledSelection.length > 0 && rowData.children && rowData.children.length > 0) {
                    let unselectedChildren = 0,
                        disabledChildren = 0,
                        childIds = [];

                    rowData.children.forEach(child => {
                        const childId = child.$.id;

                        if (that._selectedIds.indexOf(childId) === -1) {
                            unselectedChildren++;
                        }
                        else {
                            childIds.push(childId);
                        }

                        if (that._disabledSelection.indexOf(childId) !== -1) {
                            disabledChildren++;
                        }
                    });

                    if (unselectedChildren === disabledChildren) {
                        that.unselect(childIds);
                        delete that._interaction;
                        return;
                    }
                }

                that.select(id);
                that._selectionStart = { data: rowData, element: row };
            }
        }
        else {
            if (that._selectionStart && event.shiftKey) {
                let allRows, currentIndex, startIndex;

                if (that.virtualization) {
                    allRows = that.rows;
                    currentIndex = allRows.findIndex(r => r.data.$.id === id);
                    startIndex = allRows.findIndex(r => r.data.$.id === that._selectionStart.data.$.id);
                }
                else {
                    allRows = Array.from(that.$.tableContainer.querySelectorAll('tr[row-id]:not([unused])'));
                    currentIndex = allRows.indexOf(row);
                    startIndex = allRows.indexOf(that._selectionStart.element);
                }

                if (currentIndex !== startIndex) {
                    const oldSelectedIds = JSON.stringify(that._selectedIds.slice(0).sort()),
                        start = Math.min(currentIndex, startIndex),
                        end = Math.max(currentIndex, startIndex);

                    clearSelection();

                    const idsToSelect = [];

                    for (let i = start; i <= end; i++) {
                        const currentRow = allRows[i];

                        idsToSelect.push(currentRow.data.$.id);
                    }

                    that._changeSelectionOfMultiple(idsToSelect, 'select', 'interaction', oldSelectedIds);
                    getSelection().removeAllRanges();
                    delete that._interaction;
                    return;
                }
                else if (that._selectedIds.length === 1) {
                    delete that._interaction;
                    return;
                }
            }

            const checkboxClicked = target ? target.classList.contains('selection-checkbox') || target.classList.contains('smart-table-select-row') : false;
            let singleSelected = false;

            if (that._selectedIds.length === 1) {
                singleSelected = true;
            }
            else if (that.hasAttribute('hierarchy') && that.selectionByHierarchy) {
                const selectedIdsInThisBranch = [];

                getDescendantsIds(rowData, selectedIdsInThisBranch);

                if (that._selectedIds.length === selectedIdsInThisBranch.length) {
                    singleSelected = true;
                }

                if (rowData && rowData.leaf) {
                    singleSelected = true;
                }

                rowSelected = that._getChildCheckState(rowData).maxSelected;
            }
            else if (that.hasAttribute('hierarchy') && !that.selectionByHierarchy) {
                singleSelected = true;
            }

            if (rowSelected && (checkboxClicked || singleSelected || event.ctrlKey || event.metaKey)) {
                delete that._selectionStart;
                that.unselect(id);
                delete that._interaction;
                return;
            }

            if (!checkboxClicked && !event.ctrlKey && !event.metaKey) {
                clearSelection();
            }

            that.select(id);
            that._selectionStart = { data: rowData, element: row };
        }

        delete that._interaction;
    }

    /**
     * "Select all" checkbox click handler.
     */
    _selectAllCheckboxClickHandler(checkbox, dataSource) {
        const that = this;

        if (dataSource === undefined) {
            const filterInfo = that._filterInfo;

            if (filterInfo.inputFilters || filterInfo.rowFilters || filterInfo.appliedFilters) {
                that._selectAllCheckboxClickHandlerFiltering(checkbox);
                return;
            }

            dataSource = that.dataSource;

            if (that.hasAttribute('hierarchy') && that._disabledSelection.length > 0) {
                const boundHierarchy = dataSource.boundHierarchy,
                    on = that._getChildCheckState({ children: boundHierarchy }).maxSelected;

                that._changeSelectionOfMultiple(boundHierarchy.map(record => record.$.id), on ? 'unselect' : 'select', 'interaction');
                return;
            }
        }

        const dataSourceLength = dataSource.length,
            on = that._selectedIds.length === dataSourceLength - that._disabledSelection.length + that._selectableGroupRecords.length,
            oldSelectedIds = that._selectedIds.slice(0);

        that._selectedIds = [];

        if (on) {
            that._updateCSSOnUnselectAll(checkbox);
        }
        else {
            let numberOfSelected = 0,
                condition;

            for (let i = 0; i < dataSourceLength; i++) {
                const id = dataSource[i].$.id;

                if (that._disabledSelection.indexOf(id) === -1) {
                    that._selectedIds.push(id);
                    numberOfSelected++;
                }
            }

            if (numberOfSelected === dataSourceLength) {
                condition = true;
            }
            else if (numberOfSelected === 0) {
                condition = false;
            }

            that._updateCSSOnSelectAll(checkbox, condition);

            if (that._selectableGroupRecords.length > 0) {
                that._selectedIds = that._selectedIds.concat(that._selectableGroupRecords);
            }
        }

        if (oldSelectedIds.length !== that._selectedIds.length) {
            that._updateState('selected');
            that.$.fireEvent('change', { type: 'interaction' });
        }
    }

    /**
     * "Select all" checkbox click handler when filtering is applied.
     */
    _selectAllCheckboxClickHandlerFiltering(checkbox) {
        const that = this,
            dataSource = that.dataSource,
            oldSelectedIds = that._selectedIds.slice(0),
            selectedFromFiltered = [],
            enabledFromFiltered = [];
        let filteredLength = 0;

        for (let i = 0; i < dataSource.length; i++) {
            const dataPoint = dataSource[i];

            if (dataPoint.$.filtered === false) {
                continue;
            }

            const id = dataPoint.$.id;

            filteredLength++;

            if (oldSelectedIds.indexOf(id) !== -1) {
                selectedFromFiltered.push(id);
            }

            if (that._disabledSelection.indexOf(id) === -1) {
                enabledFromFiltered.push(id);
            }
        }

        const on = selectedFromFiltered.length === enabledFromFiltered.length;

        that._selectedIds = that._selectedIds.filter(id => enabledFromFiltered.indexOf(id) === -1);

        if (on) {
            that._updateCSSOnUnselectAll(checkbox);
        }
        else {
            let condition;

            that._selectedIds = that._selectedIds.concat(enabledFromFiltered);

            if (enabledFromFiltered.length === filteredLength) {
                condition = true;
            }
            else if (enabledFromFiltered.length === 0) {
                condition = false;
            }

            that._updateCSSOnSelectAll(checkbox, condition);
        }

        if (oldSelectedIds.length !== that._selectedIds.length) {
            that._updateState('selected');
            that.$.fireEvent('change', { type: 'interaction' });
        }
    }

    /**
     * Updates CSS when the "Select all" checkbox is unchecked.
     */
    _updateCSSOnUnselectAll(checkbox) {
        checkbox.classList.remove('indeterminate', 'selected');
        checkbox.firstElementChild.setAttribute('aria-checked', false);
        Array.from(this.$.tableContainer.querySelectorAll('.smart-table-select-row')).forEach(td => {
            if (!td.parentElement.classList.contains('disable-select')) {
                td.parentElement.setAttribute('aria-selected', false);
            }

            td.classList.remove('selected', 'indeterminate');
            td.firstElementChild.setAttribute('aria-checked', false);
        });
    }

    /**
     * Updates CSS when the "Select all" checkbox is unchecked.
     */
    _updateCSSOnSelectAll(checkbox, condition) {
        if (condition) {
            checkbox.classList.remove('indeterminate');
            checkbox.classList.add('selected');
            checkbox.firstElementChild.setAttribute('aria-checked', true);
        }
        else if (condition === false) {
            checkbox.classList.remove('indeterminate', 'selected');
            checkbox.firstElementChild.setAttribute('aria-checked', false);
        }
        else {
            checkbox.classList.remove('selected');
            checkbox.classList.add('indeterminate');
            checkbox.firstElementChild.setAttribute('aria-checked', 'mixed');
        }

        Array.from(this.$.tableContainer.querySelectorAll('.smart-table-select-row')).forEach(td => {
            if (!td.parentElement.classList.contains('disable-select')) {
                td.parentElement.setAttribute('aria-selected', true);
                td.classList.remove('indeterminate');
                td.classList.add('selected');
                td.firstElementChild.setAttribute('aria-checked', true);
            }
        });
    }

    /**
     * Begins an edit operation.
     */
    _beginEdit(details) {
        const that = this,
            editMode = that.editMode,
            dataField = details.dataField;
        let rowId = details.rowId,
            rowElement = details.rowElement,
            rowObject = details.rowObject,
            cell = details.cell,
            cells = [],
            dataFields = [];

        if (!that.editing) {
            return;
        }

        if (!rowElement) {
            rowElement = that.$.tableContainer.querySelector(`tr[row-id="${rowId}"]:not([unused])`);
        }

        if (!rowObject) {
            rowId = rowElement.getAttribute('row-id');
            rowObject = that.rowById[rowId];
            rowId = rowObject.data.$.id;
        }

        if (editMode === 'row') {
            cells = rowElement.querySelectorAll('td[data-field]');
            dataFields = that._columns.filter(col => col.visible).map(col => col.dataField);

            if (!cell) {
                cell = dataField ? rowElement.querySelector(`td[data-field="${dataField}"`) : cells[0];
            }
        }
        else {
            if (!cell) {
                cell = rowElement.querySelector(`td[data-field="${dataField}"`);
            }

            cells = [cell];
            dataFields = [dataField];
        }

        that._editing = { row: rowObject, cells: [] };

        for (let i = 0; i < dataFields.length; i++) {
            const currentCell = cells[i];
            let currentDataField = dataFields[i];
            const column = that.columnByDataField[currentDataField];

            if (column.allowEdit === false) {
                continue;
            }

            if (column.transform) {
                currentDataField = column.originalDataField;
            }

            const cellValue = rowObject.data[currentDataField],
                editor = that._initEditor(column, rowId, currentDataField, cellValue);
            let standardDateEditor = editor instanceof HTMLInputElement && editor.type === 'date';

            if (column.editor && column.editor.template) {
                if (column.editor.onRender) {
                    column.editor.onRender(rowId, currentDataField, editor, cellValue);
                }
            }
            else if (standardDateEditor) {
                if (cellValue instanceof Date && !isNaN(cellValue.getTime())) {
                    const month = (cellValue.getMonth() + 1).toString(),
                        date = cellValue.getDate().toString();

                    editor.value = `${cellValue.getFullYear()}-${'0'.repeat(2 - month.length)}${month}-${'0'.repeat(2 - date.length)}${date}`;
                }
                else {
                    editor.value = '';
                }
            }
            else {
                editor.value = cellValue === undefined ? '' : cellValue;
            }

            currentCell.classList.add('editing');
            currentCell.innerHTML = '';
            currentCell.appendChild(editor);

            if (currentCell === cell && editor.focus) {
                editor.focus();

                if (!(column.editor && column.editor.template) && !standardDateEditor && editor.select) {
                    editor.select();
                }
            }

            that._editing.cells.push({ dataField: currentDataField, editor: editor, element: currentCell });
            that.$.fireEvent('cellBeginEdit', { id: rowObject.data.$.id, row: rowObject.data, value: rowObject.data[currentDataField], dataField: currentDataField });
        }

        if (editMode === 'row') {
            that.$.fireEvent('rowBeginEdit', { id: rowObject.data.$.id, row: rowObject.data });
        }
    }

    /**
     * Initializes column editor.
     */
    _initEditor(column, rowId, dataField, value) {
        const that = this;
        let editor = that._editors[dataField];

        if (editor) {
            return editor;
        }

        if (column.editor && column.editor.template) {
            const wrapper = document.createElement('div');

            wrapper.innerHTML = column.editor.template;

            editor = wrapper.firstElementChild;
            editor.className = 'smart-table-editor';

            if (column.editor.onInit) {
                column.editor.onInit(rowId, dataField, editor, value);
            }

            return editor;
        }

        editor = document.createElement('input');
        editor.className = 'smart-table-editor standard';

        if (column.dataType === 'number') {
            editor.type = 'number';
        }
        else if (column.dataType === 'date') {
            editor.type = 'date';
        }
        else {
            editor.type = 'text';
        }

        that._editors[dataField] = editor;
        return editor;
    }

    /**
     * Toggles row detail.
     */
    _toggleRowDetail(row, id) {
        const that = this;

        if (that.virtualization) {
            that._toggleRowDetailVirtualization(row, id);
            return;
        }

        const detailRow = row.nextElementSibling;

        detailRow.classList.toggle('collapsed');

        if (!detailRow.classList.contains('collapsed')) {
            detailRow.removeAttribute('aria-hidden');
            that._expandedRowDetailIds.push(id);
        }
        else {
            detailRow.setAttribute('aria-hidden', true);
            that._expandedRowDetailIds = that._expandedRowDetailIds.filter(currentId => currentId !== id);
        }
    }

    /**
     * Toggles row detail (when virtualization is enabled).
     */
    _toggleRowDetailVirtualization(row, id) {
        const that = this;
        let detailRow = row.nextElementSibling;

        function complete() {
            let scrollbar = that.$.virtualizationContainer.$.verticalScrollBar,
                scrollbarValue = that.$.virtualizationContainer.$.verticalScrollBar.value;

            that._ignoreVerticalChange = true;

            that._refreshDataRows();

            scrollbarValue = Math.min(scrollbar.max, scrollbarValue);
            scrollbar.value = scrollbarValue;
            delete that._ignoreVerticalChange;
            that._onVerticalChange({ detail: { value: scrollbarValue } }, true);
        }

        if (detailRow && detailRow.classList.contains('smart-table-row-detail') &&
            !detailRow.classList.contains('collapsed')) {
            // collapse expanded row detail

            detailRow.setAttribute('aria-hidden', true);
            that._expandedRowDetailIds = that._expandedRowDetailIds.filter(currentId => currentId !== id);

            detailRow.classList.add('collapsed');
            detailRow.remove();
            complete();

            return;
        }

        const data = row.data;

        detailRow = document.createElement('tr');
        detailRow.classList.add('collapsed');
        that._createRowDetailOnDemand(detailRow, { data: data }, data);

        row.parentElement.insertBefore(detailRow, row.nextElementSibling);

        that._expandedRowDetailIds.push(id);

        detailRow.classList.remove('collapsed');
        complete();
    }

    /**
     * Sets whether the element can be focused.
     */
    _setFocusable() {
        const that = this,
            table = that.nodeName.toLowerCase() === 'smart-table';

        if (!that.keyboardNavigation || that.disabled || that.unfocusable ||
            that.hasAttribute('modal')) {
            that.$.tableContainer.removeAttribute('tabindex');

            if (table) {
                that.$.filterInput.unfocusable = true;
                that.$.pager.unfocusable = true;
            }

            that.$.conditionalFormattingButton.unfocusable = true;
            return;
        }

        const tabindex = that.$.tableContainer.getAttribute('tabindex');

        if (tabindex === null || tabindex < 0) {
            that.$.tableContainer.setAttribute('tabindex', 0);
        }

        if (table) {
            that.$.filterInput.unfocusable = false;
            that.$.pager.unfocusable = false;
        }

        that.$.conditionalFormattingButton.unfocusable = false;
    }

    /**
     * tableContainer focus handler.
     */
    _tableContainerFocusHandler() {
        const that = this;

        if (!that._focusedCell || !that.$.tableContainer.contains(that._focusedCell)) {
            that._focusCell(that.$.tableContainer.children[1].querySelector('tr:not([unused]) td[data-field], tr:not([unused]) td.group-header'));
        }
    }

    /**
     * tableContainer down handler.
     */
    _tableContainerDownHandler(event) {
        const that = this,
            target = that.isInShadowDOM ? event.originalEvent.composedPath()[0] : event.originalEvent.target;

        that._focusCell(target.closest('td[data-field], td.group-header'));
        event.stopPropagation();
    }

    /**
     * Focuses a cell.
     */
    _focusCell(cell, scrollTo) {
        const that = this;

        if (!cell || !cell.hasAttribute('data-field') && !cell.classList.contains('group-header') ||
            cell.parentElement.classList.contains('grand-total')) {
            return false;
        }

        if (that._focusedCell) {
            if (that._focusedCell === cell) {
                return false;
            }

            that._focusedCell.removeAttribute('focus');
        }

        that._focusedCell = cell;
        cell.setAttribute('focus', '');

        if (!scrollTo) {
            return;
        }

        const container = that.$.tableContainer.parentElement,
            filterHeaderHeight = that.$.header.offsetHeight,
            frozenHeaderHeight = (that.freezeHeader ? that.$.tableContainer.firstElementChild.offsetHeight : 0),
            currentScrollTop = container.scrollTop;
        let targetScrollTop = cell.offsetTop - filterHeaderHeight - frozenHeaderHeight;

        // vertical scroll to
        if (targetScrollTop < currentScrollTop) {
            container.scrollTop = targetScrollTop;
        }
        else {
            const frozenFooterHeight = that.footerRow && that.freezeFooter ? that.$.tableContainer.lastElementChild.offsetHeight : 0,
                pagerHeight = that.$.pager.offsetHeight,
                scrollableHeight = container.clientHeight - (filterHeaderHeight + frozenHeaderHeight + frozenFooterHeight + pagerHeight);

            targetScrollTop += cell.offsetHeight;

            if (targetScrollTop > currentScrollTop + scrollableHeight) {
                container.scrollTop = targetScrollTop - scrollableHeight;
            }
        }

        if (cell.classList.contains('freeze-near') || cell.classList.contains('freeze-far')) {
            return;
        }

        // horizontal scroll to
        const currentScrollLeft = container.scrollLeft,
            firstRow = that.$.tableContainer.querySelector('tr[row-id]:not([unused])');
        let frozenNearWidth = 0,
            targetScrollLeft;

        Array.from(firstRow.children).forEach(td => {
            if (td.classList.contains('freeze-near')) {
                frozenNearWidth += td.offsetWidth;
            }
        });

        if (!that.rightToLeft) {
            targetScrollLeft = cell.offsetLeft - frozenNearWidth;

            if (targetScrollLeft < currentScrollLeft) {
                container.scrollLeft = targetScrollLeft;
            }
            else {
                const scrollableWidth = container.clientWidth;

                targetScrollLeft += cell.offsetWidth + frozenNearWidth;

                if (targetScrollLeft > currentScrollLeft + scrollableWidth) {
                    container.scrollLeft = targetScrollLeft - scrollableWidth;
                }
            }
        }
        else {
            let prevElement = cell.previousElementSibling;

            targetScrollLeft = 0;

            while (prevElement) {
                if (!prevElement.classList.contains('freeze-near')) {
                    targetScrollLeft -= prevElement.offsetWidth;
                }

                prevElement = prevElement.previousElementSibling;
            }

            if (targetScrollLeft > currentScrollLeft) {
                container.scrollLeft = targetScrollLeft;
            }
            else {
                const scrollableWidth = container.clientWidth;

                targetScrollLeft -= cell.offsetWidth;

                if (targetScrollLeft < currentScrollLeft - scrollableWidth) {
                    container.scrollLeft = targetScrollLeft + scrollableWidth - frozenNearWidth;
                }
            }
        }
    }

    focus() {
        const that = this;

        if (!that.keyboardNavigation ||
            that.disabled ||
            that.unfocusable ||
            that.hasAttribute('modal')) {
            return;
        }

        that.$.tableContainer.focus();
    }

    blur() {
        const that = this;

        that.$.tableContainer.blur();
    }
    /**
     * tableContainer keydown handler.
     */
    _tableContainerKeydownHandler(event) {
        const that = this,
            target = that.isInShadowDOM ? event.composedPath()[0] : event.target,
            key = event.key;

        if (key === 'Shift') {
            if (that.selectionMode === 'extended') {
                that.$.tableContainer.classList.add('smart-unselectable');
            }

            return;
        }

        if (!that.contains(target)) {
            return;
        }

        if (target && target.nodeName === 'INPUT' && !that._editing) {
            return;
        }

        const focusedCell = that._focusedCell;

        if (!focusedCell) {
            return;
        }

        const virtualization = that.virtualization,
            isGroupHeader = focusedCell.classList.contains('group-header');

        if (isGroupHeader && ['ArrowRight', 'ArrowLeft', 'Home', 'End', 'Escape', 'F2'].indexOf(key) !== -1) {
            event.preventDefault();
            return;
        }

        if (that._editing) {
            switch (key) {
                case 'Enter':
                    that.endEdit();
                    break;
                case 'Escape':
                    that.cancelEdit();
                    break;
                default:
                    return;
            }

            that.$.tableContainer.focus();
            event.preventDefault();
            return;
        }

        const row = focusedCell.parentElement;

        if (virtualization && row) {
            const verticalScrollBar = that.$.virtualizationContainer.$.verticalScrollBar,
                value = verticalScrollBar.value,
                rowId = row.data.$.id;

            if (key === 'ArrowUp' && value === 0 &&
                rowId === that._rowsVirtual[0].data.$.id ||
                key === 'ArrowDown' && value === verticalScrollBar.max &&
                rowId === that._rowsVirtual[that._rowsVirtual.length - 1].data.$.id) {
                return;
            }
        }

        let nextArrow = 'ArrowRight',
            prevArrow = 'ArrowLeft';

        if (that.rightToLeft) {
            nextArrow = 'ArrowLeft';
            prevArrow = 'ArrowRight';
        }

        switch (key) {
            case nextArrow:
            case prevArrow: {
                const siblingSelector = key === nextArrow ? 'nextElementSibling' : 'previousElementSibling';
                let sibling = focusedCell[siblingSelector];

                while (sibling && sibling.classList.contains('smart-hidden')) {
                    sibling = sibling[siblingSelector];
                }

                that._focusCell(sibling, !virtualization, event);
                that._scrollToVirtualization(key === nextArrow ? 'nextArrow' : 'prevArrow', sibling);
                break;
            }
            case 'ArrowUp':
            case 'ArrowDown': {
                const siblingSelector = key === 'ArrowUp' ? 'previousElementSibling' : 'nextElementSibling';
                let sibling = row[siblingSelector];

                while (sibling && (sibling.classList.contains('smart-table-row-detail') || sibling.classList.contains('collapsed'))) {
                    sibling = sibling[siblingSelector];
                }

                if (sibling) {
                    if (isGroupHeader) {
                        that._focusCell(sibling.querySelector('td[data-field], .group-header'), !virtualization, event);
                    }
                    else {
                        that._focusCell(sibling.querySelector(`td[data-field="${focusedCell.getAttribute('data-field')}"], .group-header`), !virtualization, event);
                    }

                    that._scrollToVirtualization(key, sibling);
                }

                break;
            }
            case 'Home':
                that._focusCell(row.querySelector('td[data-field]'), !virtualization, event);
                that._scrollToVirtualization(key);
                break;
            case 'End': {
                const cellsOnRow = row.querySelectorAll('td[data-field]');
                let i = cellsOnRow.length - 1,
                    cellToFocus = cellsOnRow[i];

                while (cellToFocus.classList.contains('smart-hidden')) {
                    i--;
                    cellToFocus = cellsOnRow[i];
                }

                that._focusCell(cellToFocus, !virtualization, event);
                that._scrollToVirtualization(key);
                break;
            }
            case 'PageDown':
                that._pageDownHandler(focusedCell, event);
                break;
            case 'PageUp':
                that._pageUpHandler(focusedCell, event);
                break;
            case 'Enter': {
                const data = row.data;

                if (that.dataSource.boundHierarchy && that._areChildrenFiltered(data)) {
                    that._hierarchyArrowClickHandler(row, focusedCell, event);
                }
                else if (that.rowDetailTemplate) {
                    that._toggleRowDetail(row, data.$.id);
                }

                break;
            }
            case ' ':
                that._toggleSelection(row, row.data, event);
                break;
            case 'F2':
                that.beginEdit(row.data.$.id, focusedCell.getAttribute('data-field'));
                break;
            default:
                return;
        }

        event.preventDefault();

        if (that.onKeyboardScroll) {
            const view = virtualization ? that.$.virtualizationContainer : that.$.container;
            that.onKeyboardScroll(key, view.scrollTop, view.scrollLeft);
        }
    }

    /**
     * Handles PageDown navigation.
     */
    _pageDownHandler(focusedCell, event) {
        const that = this,
            paging = that.paging;

        if (!paging && focusedCell.parentElement === focusedCell.parentElement.parentElement.lastElementChild) {
            return;
        }

        const virtualization = that.virtualization,
            tableContainer = that.$.tableContainer,
            container = tableContainer.parentElement,
            view = virtualization ? that.$.virtualizationContainer : container;
        let dataField = focusedCell.getAttribute('data-field');

        dataField = dataField ? `="${dataField}"` : '';

        function getLastCellInView() {
            const rows = tableContainer.querySelectorAll('tr[row-id]:not([unused])');
            let correction = virtualization ? 0 : that.$.header.offsetHeight + that.$.pager.offsetHeight;

            if (that.footerRow && that.freezeFooter) {
                correction += tableContainer.lastElementChild.offsetHeight;
            }

            for (let i = rows.length - 1; i >= 0; i--) {
                const currentRow = rows[i];

                if (currentRow.classList.contains('collapsed')) {
                    continue;
                }

                if (currentRow.offsetTop + currentRow.offsetHeight <=
                    (virtualization ? -container.offsetTop : container.scrollTop) +
                    view.clientHeight - correction) {
                    return currentRow.querySelector(`td[data-field${dataField}], .group-header`);
                }
            }
        }

        let lastCellInView = getLastCellInView();

        if (!lastCellInView) {
            return;
        }

        if (focusedCell === lastCellInView) {
            const heightCorrection = (that.freezeHeader ? tableContainer.firstElementChild.offsetHeight : 0) +
                that._rowHeight;
            let oldValue;

            if (virtualization) {
                oldValue = view.$.verticalScrollBar.value;
                view.$.verticalScrollBar.value += view.clientHeight - heightCorrection;
            }
            else {
                container.scrollTop += container.clientHeight - heightCorrection;
            }

            lastCellInView = getLastCellInView();

            if (paging &&
                ((virtualization && oldValue === view.$.verticalScrollBar.value) ||
                    (!virtualization && focusedCell === lastCellInView))) {
                const oldPageIndex = that.pageIndex;

                that.navigateTo(that.pageIndex + 1);

                if (that.pageIndex !== oldPageIndex) {
                    if (virtualization) {
                        view.$.verticalScrollBar.value = 0;
                    }

                    that._focusCell(tableContainer.querySelector(`tr[row-id]:not([unused]) td[data-field${dataField}], tr[row-id]:not([unused]) .group-header`), !virtualization, event);
                }
            }
            else {
                that._focusCell(lastCellInView, undefined, event);
            }
        }
        else {
            that._focusCell(lastCellInView, undefined, event);
        }
    }

    /**
     * Handles PageUp navigation.
     */
    _pageUpHandler(focusedCell, event) {
        const that = this,
            virtualization = that.virtualization,
            tableContainer = that.$.tableContainer,
            container = tableContainer.parentElement,
            view = virtualization ? that.$.virtualizationContainer : container;
        let dataField = focusedCell.getAttribute('data-field');

        dataField = dataField ? `="${dataField}"` : '';

        function getFirstCellInView() {
            const rows = tableContainer.querySelectorAll('tr[row-id]:not([unused])');
            let correction = 0;

            if (that.freezeHeader) {
                correction = tableContainer.firstElementChild.offsetHeight;
            }

            for (let i = 0; i < rows.length; i++) {
                const currentRow = rows[i];

                if (currentRow.classList.contains('collapsed')) {
                    continue;
                }

                if (currentRow.offsetTop >=
                    (virtualization ? -container.offsetTop : container.scrollTop) + correction) {
                    return currentRow.querySelector(`td[data-field${dataField}], .group-header`);
                }
            }
        }

        let firstCellInView = getFirstCellInView();

        if (!firstCellInView) {
            return;
        }

        if (focusedCell === firstCellInView) {
            const heightCorrection = (that.freezeHeader ? tableContainer.firstElementChild.offsetHeight : 0) +
                that._rowHeight;
            let oldValue;

            if (virtualization) {
                oldValue = view.$.verticalScrollBar.value;
                view.$.verticalScrollBar.value -= view.clientHeight - heightCorrection;
            }
            else {
                container.scrollTop -= container.clientHeight - heightCorrection;
            }

            firstCellInView = getFirstCellInView();

            if (that.paging &&
                ((virtualization && oldValue === view.$.verticalScrollBar.value) ||
                    (!virtualization && focusedCell === firstCellInView))) {
                const oldPageIndex = that.pageIndex;

                that.navigateTo(that.pageIndex - 1);

                if (that.pageIndex !== oldPageIndex) {
                    if (virtualization) {
                        view.$.verticalScrollBar.value = view.$.verticalScrollBar.max;
                    }

                    const allCellsInColumn = tableContainer.querySelectorAll(`tr[row-id]:not([aria-hidden="true"]) td[data-field${dataField}], tr[row-id]:not([aria-hidden="true"]) .group-header`);

                    that._focusCell(allCellsInColumn[allCellsInColumn.length - 1], !virtualization, event);
                }
            }
            else {
                that._focusCell(firstCellInView, undefined, event);
            }
        }
        else {
            that._focusCell(firstCellInView, undefined, event);
        }
    }

    /**
     * tableContainer keyup handler.
     */
    _tableContainerKeyupHandler(event) {
        const that = this,
            target = that.isInShadowDOM ? event.composedPath()[0] : event.target;

        if (event.key === 'Shift' && that.selectionMode === 'extended') {
            that.$.tableContainer.classList.remove('smart-unselectable');
        }

        if (!that.contains(target)) {
            return;
        }

        if (target.classList.contains('filter-value') && target.type !== 'date') {
            clearTimeout(that._filterRowTimeout);

            that._filterRowTimeout = setTimeout(function () {
                const oldContext = that.context;

                that.context = that;
                that._applyRowFilters();
                that.context = oldContext;
            }, 500);

            return;
        }
    }

    /**
     * tableContainer pointerover handler.
     */
    _tableContainerPointeroverHandler(event) {
        const that = this;

        if (!that.tooltip) {
            return;
        }

        const target = that.isInShadowDOM ? event.composedPath()[0] : event.target,
            cell = target.closest('tbody td[data-field], thead th[data-field]');

        if (!cell) {
            return;
        }

        const previousHoveredCell = that.$.tableContainer.querySelector('.tooltip'),
            columnByDataField = that.columnByDataField[cell.getAttribute('data-field')],
            isVirtualized = that.virtualization;

        if (previousHoveredCell) {
            previousHoveredCell.classList.remove('tooltip');
            previousHoveredCell.removeAttribute('title');
        }

        if (cell.tagName.toLowerCase() === 'th') {
            const label = cell.querySelector('.label');

            if (label) {
                if (label.scrollWidth > label.offsetWidth) {
                    cell.classList.add('tooltip');
                    //NOTE: 'templateElement' works only when 'virtualization is enabled'
                    cell.title = isVirtualized && columnByDataField && columnByDataField.templateElement ? '' : label.innerText;
                }
            }

            return;
        }

        if (cell.classList.contains('tree-cell') && cell.firstElementChild &&
            cell.firstElementChild.children[1].scrollWidth > cell.firstElementChild.children[1].offsetWidth ||
            cell.scrollWidth > cell.offsetWidth) {
            cell.classList.add('tooltip');
            //NOTE: 'templateElement' works only when 'virtualization is enabled'
            cell.title = isVirtualized && columnByDataField && columnByDataField.templateElement ? '' : cell.innerText;
        }
    }

    /**
     * Document down handler.
     */
    _documentDownHandler(event) {
        const that = this,
            target = that.isInShadowDOM ? event.originalEvent.composedPath()[0] : event.originalEvent.target;

        function handleDblclick() {
            if (that.columnSizeMode === 'default') {
                return;
            }

            that._preventClickSort = true;

            clearTimeout(that._dblclickObject.timeout);
            that._dblclickObject.numberOfClicks++;

            if (that._dblclickObject.numberOfClicks === 2) {
                that._dblclickObject.numberOfClicks = 0;
                that._autoResizeColumnOnDblclick();
            }
            else {
                that._dblclickObject.timeout = setTimeout(function () {
                    that._dblclickObject.numberOfClicks = 0;
                }, 300);
            }
        }

        delete that._preventClickSort;

        if (that._editing && !target.closest('.smart-table-editor')) {
            const dropDown = target.closest('.smart-drop-down') || target.closest('.smart-input-drop-down-menu');

            if (!dropDown) {
                that.endEdit();
                return;
            }

            const ownerElement = dropDown.ownerElement;

            if (!ownerElement) {
                that.endEdit();
                return;
            }

            if (that.$.container.contains(ownerElement) && ownerElement.classList.contains('smart-table-editor')) {
                return;
            }

            that.endEdit();
            return;
        }

        const columnReorder = that.columnReorder,
            columnResize = that.columnResize;

        if (columnReorder && !that.columnTotals || columnResize) {
            const th = target.closest('th[data-field]:not(.smart-pivot-table-total-header)');

            if (th && that.$.tableContainer.contains(th)) {
                that.$.tableContainer.classList.add('smart-unselectable');

                if (columnResize && that._columns.length > 1 &&
                    !that.hasAttribute('resize-max-reached')) {
                    const rightToLeft = that.rightToLeft,
                        rect = th.getBoundingClientRect();

                    let resizeColumn = null;



                    if (!rightToLeft && event.clientX <= rect.left + 5 ||
                        rightToLeft && event.clientX >= rect.right - 5) {
                        const previousItem = th.previousElementSibling;

                        if (previousItem && previousItem.hasAttribute('data-field')) {
                            if (previousItem.hasAttribute('locked')) {
                                return;
                            }

                            for (let i = 0; i < that.columns.length; i++) {
                                const column = that.columns[i];

                                if (column.headerCellElement === previousItem) {
                                    resizeColumn = column;
                                    break;
                                }
                            }

                            const previousItemRect = previousItem.getBoundingClientRect();
                            const minWidth = resizeColumn ? (resizeColumn.minWidth || that._getNumericMinWidth()) : that._getNumericMinWidth();

                            that._resizeDetails = {
                                FeedbackShown: false,
                                Item: previousItem,
                                ItemStart: previousItemRect[rightToLeft ? 'right' : 'left'] + window.scrollX,
                                Min: minWidth,
                                StartPosition: { left: event.pageX, top: event.pageY },
                                StartTime: new Date()
                            };
                            that._resizeDetails.Max = that._getCurrentResizeMax();
                            handleDblclick();
                            return;
                        }
                    }

                    if (!rightToLeft && event.clientX >= rect.right - 5 ||
                        rightToLeft && event.clientX <= rect.left + 5) {
                        if (th.hasAttribute('locked')) {
                            return;
                        }

                        for (let i = 0; i < that.columns.length; i++) {
                            const column = that.columns[i];

                            if (column.headerCellElement === th) {
                                resizeColumn = column;
                                break;
                            }
                        }

                        const minWidth = resizeColumn ? (resizeColumn.minWidth || that._getNumericMinWidth()) : that._getNumericMinWidth();

                        that._resizeDetails = {
                            FeedbackShown: false,
                            Item: th,
                            ItemStart: rect[rightToLeft ? 'right' : 'left'] + window.scrollX,
                            Min: minWidth,
                            StartPosition: { left: event.pageX, top: event.pageY },
                            StartTime: new Date()
                        };
                        that._resizeDetails.Max = that._getCurrentResizeMax();
                        handleDblclick();
                        return;
                    }
                }

                if (columnReorder) {
                    that._dragDetails = {
                        FeedbackShown: false,
                        Item: th,
                        StartPosition: { left: event.pageX, top: event.pageY },
                        StartTime: new Date()
                    };
                }
            }
        }
    }

    /**
     * document move handler.
     */
    _documentMoveHandler(event) {
        const that = this,
            dragDetails = that._dragDetails;

        if (!dragDetails) {
            if (that._resizeDetails) {
                that._handleResizeOnMove(event);
            }

            return;
        }

        if (!dragDetails.FeedbackShown) {
            const now = new Date(),
                timePassed = now.getTime() - dragDetails.StartTime.getTime() > 500,
                moved = Math.abs(dragDetails.StartPosition.left - event.pageX) > 5 ||
                    Math.abs(dragDetails.StartPosition.top - event.pageY) > 5;

            if (moved && (!that._isMobile || that._isMobile && timePassed)) {
                that._hideBodyOverflow();
                dragDetails.Feedback = that._addDragFeedback();
                dragDetails.FeedbackShown = true;
                dragDetails.Item.classList.add('dragged');
                that.classList.add('smart-unselectable');
            }
            else {
                if (that._isMobile && moved && !timePassed) {
                    delete that._dragDetails;
                    that.$.tableContainer.classList.remove('smart-unselectable');
                }

                return;
            }
        }

        const container = that.$.tableContainer.parentElement;

        dragDetails.Feedback.style.left = event.pageX + 10 + 'px';
        dragDetails.Feedback.style.top = event.pageY + 10 + 'px';

        if (dragDetails.HoveredItem) {
            dragDetails.HoveredItem.classList.remove('drop-column', 'left', 'right');
            delete dragDetails.HoveredItem;
        }

        if (container.offsetWidth < container.scrollWidth) {
            clearInterval(that._dragInterval);
            that._dragInterval = setInterval(function () {
                const rect = container.getBoundingClientRect();

                if (rect.left <= event.clientX && rect.left + rect.width >= event.clientX) {
                    if (event.clientX >= rect.left && event.clientX <= rect.left + 25) {
                        container.scrollLeft -= that._autoScrollCoefficient;
                    }
                    else if (event.clientX >= rect.left + rect.width - 25 && event.clientX <= rect.left + rect.width) {
                        container.scrollLeft += that._autoScrollCoefficient;
                    }
                    else {
                        clearInterval(that._dragInterval);
                    }
                }
                else {
                    clearInterval(that._dragInterval);
                }
            }, 10);
        }

        const hoveredItem = that._getClosestThToHover(event);

        if (hoveredItem) {
            hoveredItem.classList.add('drop-column');
            dragDetails.HoveredItem = hoveredItem;
        }
    }

    /**
     * Hides body overflow.
     */
    _hideBodyOverflow() {
        const that = this,
            isVerticalScrollable = (document.scrollingElement || document.documentElement).scrollHeight > document.documentElement.clientHeight,
            isHorizontalScrollable = (document.scrollingElement || document.documentElement).scrollWidth > document.documentElement.clientWidth;

        that._originalBodyOverflow = { overflowX: document.body.style.overflowX, overflowY: document.body.style.overflowY, overflow: document.body.style.overflow };

        document.body.classList.add('smart-dragging');
        document.body.style.overflow = document.body.style.overflowX = document.body.style.overflowY = '';

        if (isVerticalScrollable && !isHorizontalScrollable) {
            document.body.style.overflowX = 'hidden';
        }
        else if (isHorizontalScrollable && !isVerticalScrollable) {
            document.body.style.overflowY = 'hidden';
        }
        else if (!isHorizontalScrollable && !isVerticalScrollable) {
            document.body.style.overflow = 'hidden';
        }
    }

    /**
     * Adds drag feedback.
     */
    _addDragFeedback() {
        const that = this,
            draggedItem = that._dragDetails.Item,
            feedback = document.createElement('div');

        feedback.className = 'smart-table-feedback';
        feedback.setAttribute('parent-table-id', that.id);
        feedback.innerHTML = that.columnByDataField[draggedItem.getAttribute('data-field')].label;

        if (that.theme) {
            feedback.setAttribute('theme', that.theme);
        }

        document.body.appendChild(feedback);
        return feedback;
    }

    /**
     * Gets the closest th element to hover.
     */
    _getClosestThToHover(event) {
        const that = this,
            x = event.clientX,
            headerCellElements = Array.from(that.$.tableContainer.querySelectorAll('th[data-field]:not(.smart-pivot-table-total-header)'));
        let closest, closestDistance, side;

        for (let i = 0; i < headerCellElements.length; i++) {
            const currentCell = headerCellElements[i];

            if (!currentCell || this._dragDetails.Item === currentCell) {
                continue;
            }

            const rect = currentCell.getBoundingClientRect(),
                leftDistance = Math.abs(x - rect.left),
                rightDistance = Math.abs(x - rect.right),
                bestHorizontalDistance = Math.min(leftDistance, rightDistance);

            if (closestDistance === undefined || bestHorizontalDistance < closestDistance) {
                closest = currentCell;
                closestDistance = bestHorizontalDistance;
                side = leftDistance < rightDistance ? 'left' : 'right';
            }
            else {
                break;
            }
        }

        if (closest) {
            closest.classList.add(side);
        }

        return closest;
    }

    /**
     * Handles resizing on document move.
     */
    _handleResizeOnMove(event) {
        const that = this,
            resizeDetails = that._resizeDetails;

        if (!resizeDetails.FeedbackShown) {
            const now = new Date(),
                timePassed = now.getTime() - resizeDetails.StartTime.getTime() > 500,
                moved = Math.abs(resizeDetails.StartPosition.left - event.pageX) >= 1 ||
                    Math.abs(resizeDetails.StartPosition.top - event.pageY) >= 1;

            if (moved && (!that._isMobile || that._isMobile && timePassed)) {
                resizeDetails.Feedback = that._addResizeFeedbacks();
                resizeDetails.FeedbackShown = true;
                that.classList.add('smart-unselectable', 'resizing');
                document.body.style.cursor = 'col-resize';
            }
            else {
                if (that._isMobile && moved && !timePassed) {
                    delete that._resizeDetails;
                    that.$.tableContainer.classList.remove('smart-unselectable', 'resizing');
                    document.body.style.cursor = null;
                }

                return;
            }
        }

        const feedback = resizeDetails.Feedback,
            itemStart = resizeDetails.ItemStart;
        let targetWidth;

        if (that.rightToLeft) {
            targetWidth = Math.min(resizeDetails.Max, Math.max(resizeDetails.Min, Math.round(itemStart - event.pageX)));
            feedback.style.left = itemStart - targetWidth + 'px';
        }
        else {
            targetWidth = Math.min(resizeDetails.Max, Math.max(resizeDetails.Min, Math.round(event.pageX - itemStart)));
            feedback.style.left = itemStart + targetWidth + 'px';
        }

        feedback.classList.toggle('min', targetWidth === resizeDetails.Min);
        feedback.classList.toggle('max', targetWidth === resizeDetails.Max);

        if (that.columnResizeFeedback) {
            feedback.innerHTML = targetWidth + 'px';
        }

        resizeDetails.Width = targetWidth;
    }

    /**
     * Adds resize feedbacks.
     */
    _addResizeFeedbacks() {
        const that = this,
            resizeDetails = that._resizeDetails,
            container = that.$.container,
            rect = container.getBoundingClientRect(),
            top = rect.top + window.scrollY + 'px',
            height = rect.height + 'px',
            feedback = document.createElement('div'),
            staticFeedback = document.createElement('div');

        staticFeedback.className = 'smart-table-resize-feedback static';
        staticFeedback.setAttribute('parent-table-id', that.id);
        staticFeedback.style.top = top;
        staticFeedback.style.left = resizeDetails.ItemStart + 'px';
        staticFeedback.style.height = height;
        that._resizeDetails.StaticFeedback = staticFeedback;

        feedback.className = 'smart-table-resize-feedback';
        feedback.setAttribute('parent-table-id', that.id);
        feedback.style.top = top;
        feedback.style.height = height;

        if (that.theme) {
            staticFeedback.setAttribute('theme', that.theme);
            feedback.setAttribute('theme', that.theme);
        }

        document.body.appendChild(feedback);
        document.body.appendChild(staticFeedback);
        return feedback;
    }

    /**
     * Resolves column resize operation.
     */
    _resolveResize(viaDragging) {
        const that = this,
            resizeDetails = that._resizeDetails;

        delete that._resizeDetails;
        that.$.tableContainer.classList.remove('smart-unselectable', 'resizing');

        if (viaDragging) {
            if (!resizeDetails.FeedbackShown) {
                return;
            }

            resizeDetails.StaticFeedback.remove();
            resizeDetails.Feedback.remove();
        }

        const column = that._columns.find(col => col.headerCellElement === resizeDetails.Item);

        that.classList.remove('smart-unselectable', 'resizing');
        document.body.style.cursor = null;

        let resizeWidth = resizeDetails.Width;

        if (resizeWidth < that.columnMinWidth) {
            resizeWidth = that.columnMinWidth;
        }

        const tableWidth = that._getTableRemainingWidth();

        if (column) {
            const isResponsive = column._isResponsive || (column.width && column.width.toString().indexOf('%') >= 0 ? true : false);

            delete column.width;

            if (column.minWidth && resizeWidth < column.minWidth) {
                resizeWidth = column.minWidth;
            }

            column._manualWidth = resizeWidth;
            column._manualPercentageWidth = parseFloat((resizeWidth / tableWidth) * 100);
            column._isResponsive = isResponsive;
            resizeDetails.Item.style.width = column._isResponsive ? parseFloat((resizeWidth / tableWidth) * 100) + '%' : resizeWidth + 'px';

            if (column._isFillRemainingWidth) {
                let shouldAddEmptyColumn = true;

                for (let i = 0; i < that._columns.length; i++) {
                    const column = that._columns[i];

                    if (!column.width && !column._manualWidth) {
                        shouldAddEmptyColumn = false;
                        break;
                    }
                }

                if (!that.columnResizeNormalize && shouldAddEmptyColumn) {
                    that.columns.push({
                        dataField: '', label: '', visible: true, allowResize: false, allowFilter: false, allowSort: false
                    });
                    that._initColumns(true);
                    that.refresh();
                }
            }
        }
        else {
            resizeDetails.Item.style.width = resizeWidth + 'px';
        }

        that._handleAutoSizeMode(column);
        that._handleFrozenColumnPositions();
        that._refreshHorizontalScrollbar();

        const percentageWidth = parseFloat((resizeWidth / tableWidth) * 100);

        that.$.fireEvent('columnResize',
            { dataField: column.dataField, headerCellElement: resizeDetails.Item, widthInPercentages: percentageWidth, width: resizeWidth });
    }

    openColumnMenu(dataField) {
        const that = this;
        const column = that.columnByDataField[dataField];

        if (!column) {
            return;
        }

        const th = column.headerCellElement;

        if (!th) {
            return;
        }

        if (column && column.allowMenu === false) {
            return;
        }

        const columnMenuButton = th.querySelector('.column-menu');

        if (!columnMenuButton) {
            return;
        }

        const positionColumnSettingsMenu = () => {
            const thRect = columnsMenuItem.getBoundingClientRect();
            const columnMenu = that.activeColumnMenu;

            that._columnsSettingsMenu.style.top = thRect.top + window.scrollY + 'px';
            that._columnsSettingsMenu.style.left = thRect.right + window.scrollX + 'px';
            if (thRect.right - columnMenuButton.offsetWidth + window.scrollX + columnMenu.offsetWidth > that.getBoundingClientRect().right) {
                that._columnsSettingsMenu.style.left = 10 + thRect.right - columnMenu.offsetWidth - that._columnsSettingsMenu.offsetWidth + window.scrollX + 'px';
            }
        }

        const positionColumnMenu = () => {
            const th = column.headerCellElement;

            if (!th.hasAttribute('column-menu-button')) {
                th.setAttribute('column-menu-button', '');
            }

            const columnMenuButton = th.querySelector('.column-menu');
            const thRect = columnMenuButton.getBoundingClientRect();

            columnMenu.style.top = thRect.bottom + 10 + window.scrollY + 'px';
            columnMenu.style.left = thRect.right - columnMenuButton.offsetWidth + window.scrollX + 'px';
            if (thRect.right - columnMenuButton.offsetWidth + window.scrollX + columnMenu.offsetWidth > that.getBoundingClientRect().right) {
                columnMenu.style.left = thRect.right - columnMenu.offsetWidth + window.scrollX + 'px';
            }

            const input = columnMenu.querySelector('input');

            if (!input) {
                return;
            }

            input.focus();
        }

        if (column.columnMenu) {
            column.columnMenu.remove();
        }

        that.closeColumnMenu();

        const columnMenu = document.createElement('div');
        columnMenu.classList.add('smart-table-column-menu', 'wrapper');
        columnMenu.owner = th;
        columnMenu.dataField = dataField;

        const sortAscMenuItem = document.createElement('div');
        sortAscMenuItem.innerHTML = `<span class='menu-icon sort-asc'></span><span class="label">${that.localize('columnMenuItemSortAsc')}</span>`;
        sortAscMenuItem.classList.add('smart-table-menu-item');

        const sortDescMenuItem = document.createElement('div');
        sortDescMenuItem.innerHTML = `<span class='menu-icon sort-desc'></span><span class="label">${that.localize('columnMenuItemSortDesc')}</span>`;
        sortDescMenuItem.classList.add('smart-table-menu-item');

        const columnsMenuItem = document.createElement('div');
        columnsMenuItem.innerHTML = `<span class='menu-icon columns'></span><span class="label">${that.localize('columnMenuItemColumns')}</span>`;
        columnsMenuItem.classList.add('smart-table-menu-item', 'columns-item');

        const columnsMenuItemFilter = document.createElement('div');
        columnsMenuItemFilter.innerHTML = `<span class='menu-icon filter-by'></span><span class="label">${that.localize('columnMenuItemFilter')}</span>`;
        columnsMenuItemFilter.classList.add('smart-table-menu-item', 'filter-item');

        const columnsMenuItemRemoveFilter = document.createElement('div');
        columnsMenuItemRemoveFilter.innerHTML = `<span class='menu-icon filter-by-remove'></span><span class="label">${that.localize('columnMenuItemRemoveFilter')}</span>`;
        columnsMenuItemRemoveFilter.classList.add('smart-table-menu-item', 'remove-filter-item', 'smart-hidden');

        const columnsMenuItemRemoveSort = document.createElement('div');
        columnsMenuItemRemoveSort.innerHTML = `<span class='menu-icon sort-remove'></span><span class="label">${that.localize('columnMenuItemRemoveSort')}</span>`;
        columnsMenuItemRemoveSort.classList.add('smart-table-menu-item', 'remove-sort-item', 'smart-hidden');

        const columnsMenuItemReset = document.createElement('div');
        columnsMenuItemReset.innerHTML = `<span class='menu-icon reset'></span><span class="label">${that.localize('columnMenuItemReset')}</span>`;
        columnsMenuItemReset.classList.add('smart-table-menu-item', 'reset-item');

        const createColumnsMenu = () => {
            if (that._columnsSettingsMenu) {
                that._columnsSettingsMenu.remove();
            }

            const menu = document.createElement('div');
            menu.classList.add('smart-table-column-menu', 'wrapper', 'smart-table-columns-menu');
            let visibleColumnsCount = 0;
            let visibleItem = null;

            for (let i = 0; i < that.columns.length; i++) {
                const item = document.createElement('div');
                item.innerHTML = `<span class='column-item menu-icon'></span><span class="label">${that.columns[i].label}</span>`;
                item.classList.add('smart-table-menu-item');
                item.column = that.columns[i];

                if (dataField === item.column.dataField || item.column.allowHide === false) {
                    continue;
                }

                if (!item.column.visible) {
                    item.firstElementChild.classList.add('off');
                }
                else {
                    visibleColumnsCount++;
                    visibleItem = item;
                }

                item.onpointerdown = (event) => {
                    item.column.visible = !item.column.visible;
                    if (item.column.visible) {
                        item.firstElementChild.classList.remove('off');
                    }
                    else {
                        item.firstElementChild.classList.add('off');
                    }

                    positionColumnMenu();
                    positionColumnSettingsMenu();

                    event.stopPropagation();
                    event.preventDefault();
                }

                menu.appendChild(item);
            }

            if (visibleColumnsCount === 1 && visibleItem) {
                visibleItem.classList.add('smart-disabled');
            }

            document.body.appendChild(menu);

            return menu;
        }

        columnsMenuItem.onmouseleave = (event) => {
            const rect = that._columnsSettingsMenu.getBoundingClientRect();

            if (event.pageX >= rect.left - 20 && event.pageX <= rect.right + 20 && event.pageY >= rect.top - 20 && event.pageY <= rect.bottom + 20) {
                return;
            }

            if (that._columnsSettingsMenu) {
                that._columnsSettingsMenu.remove();
            }

        }

        columnsMenuItem.onmouseenter = () => {
            that._columnsSettingsMenu = createColumnsMenu();
            positionColumnSettingsMenu();
        }

        const filterInputComponent = that._createFilterRowInput(column);

        if (that.filtering && column.allowFilter !== false) {
            if (!that.filterRow) {
                columnMenu.innerHTML = filterInputComponent;
                columnMenu.insertBefore(columnsMenuItemFilter, columnMenu.firstElementChild);
                const filterInput = columnMenu.querySelector('.filter-value');
                filterInput.onkeyup = (event) => {
                    if (event.key === 'Enter') {
                        that.closeColumnMenu();
                    }

                    if (event.key === 'Escape') {
                        filterInput.value = '';
                    }
                }

                filterInput.nextElementSibling.onchange = () => {
                    that._applyRowFilters();
                }
            }
            else {
                columnMenu.insertBefore(columnsMenuItemRemoveFilter, columnMenu.firstElementChild);
            }
        }

        columnMenu.insertBefore(columnsMenuItemReset, columnMenu.firstElementChild);
        columnMenu.insertBefore(columnsMenuItem, columnMenu.firstElementChild);
        columnMenu.insertBefore(columnsMenuItemRemoveSort, columnMenu.firstElementChild);

        if (column.allowSort !== false && that.sortMode !== 'none') {
            columnMenu.insertBefore(sortDescMenuItem, columnMenu.firstElementChild);
            columnMenu.insertBefore(sortAscMenuItem, columnMenu.firstElementChild);

            if (column.headerCellElement.hasAttribute('aria-sort')) {
                columnsMenuItemRemoveSort.classList.remove('smart-hidden');
                const sortValue = column.headerCellElement.getAttribute('aria-sort');

                if (sortValue === 'ascending') {
                    sortAscMenuItem.classList.add('smart-disabled');
                }
                else {
                    sortDescMenuItem.classList.add('smart-disabled');
                }
            }

            columnsMenuItemRemoveSort.onclick = () => {
                that.sortBy(column.dataField, null);
                that.closeColumnMenu();
            }

            sortAscMenuItem.onclick = () => {
                that.sortBy(column.dataField, 'asc');
                that.closeColumnMenu();
            }

            sortDescMenuItem.onclick = () => {
                that.sortBy(column.dataField, 'desc');
                that.closeColumnMenu();
            }
        }

        columnsMenuItemReset.onclick = () => {
            if (that._initialState) {
                that.loadState(that._initialState);

                if (that._filterInfo.filterRowValues) {
                    delete that._filterInfo.filterRowValues;
                }
                that.clearFilters();
                if (that.filterRow) {
                    const filterRow = that.$.tableContainer.querySelector('.smart-table-filter-row');

                    if (filterRow) {
                        filterRow.remove();
                    }
                }

                that._initRows();
                that.refresh();
            }

            that.closeColumnMenu();
        }

        const index = that.columns.findIndex(currentColumn => {
            return currentColumn.dataField === column.dataField;
        });

        that.appendChild(columnMenu);

        // handle column menu filter.
        const clearFilterButton = columnMenu.lastElementChild.children[2];
        if (clearFilterButton) {
            clearFilterButton.onclick = () => {
                const filterValueInput = clearFilterButton.parentElement.firstElementChild,
                    filterConditionInput = clearFilterButton.parentElement.children[1];

                filterValueInput.value = '';

                if (['EMPTY', 'NOT_EMPTY', 'NULL', 'NOT_NULL'].indexOf(filterConditionInput.$.input.dataValue) !== -1) {
                    filterConditionInput.value = that.localize(filterValueInput.type === 'text' ? 'CONTAINS' : 'EQUAL');
                    delete filterConditionInput.$.input.dataValue;
                }

                that._applyRowFilters();

            }
        }

        const loadedInfo = that._filterInfo && that._filterInfo.filterRowValues ? that._filterInfo.filterRowValues[index] : null;

        if (loadedInfo && !that.filterRow) {
            const container = columnMenu.lastElementChild;
            const dataType = column.dataType,
                condition = that._filterInfo[dataType === 'string' ? 'stringConditions' : 'numberAndDateConditions'].
                    find(cond => cond.value === loadedInfo.condition);

            if (['EMPTY', 'NOT_EMPTY', 'NULL', 'NOT_NULL'].indexOf(condition.value) === -1) {
                if (dataType === 'date') {
                    const value = new Date(loadedInfo.value),
                        month = (value.getMonth() + 1).toString(),
                        date = value.getDate().toString();

                    container.children[0].value = `${value.getFullYear()}-${'0'.repeat(2 - month.length)}${month}-${'0'.repeat(2 - date.length)}${date}`;
                }
                else {
                    container.children[0].value = loadedInfo.value;
                }

            }

            container.children[1].value = condition.label;
            container.children[1].$.input.dataValue = condition.value;
            container.children[2].classList.remove('smart-hidden');
        }

        if (column.headerCellElement.hasAttribute('filter')) {
            columnsMenuItemRemoveFilter.classList.remove('smart-hidden');
        }

        columnsMenuItemRemoveFilter.onclick = () => {
            that.removeFilter(column.dataField);
            that.closeColumnMenu();
        }

        positionColumnMenu();
        column.columnMenu = that.activeColumnMenu = columnMenu;

        that.$.fireEvent('openColumnMenu', {
            dataField: dataField
        })
    }

    closeColumnMenu() {
        const that = this;

        if (!that.activeColumnMenu) {
            return;
        }

        if (that.activeColumnMenu.owner.hasAttribute('column-menu-button')) {
            that.activeColumnMenu.owner.removeAttribute('column-menu-button');
        }

        if (that._columnsSettingsMenu) {
            that._columnsSettingsMenu.remove();
        }

        that.$.fireEvent('closeColumnMenu', {
            dataField: that.activeColumnMenu.dataField
        })

        that.activeColumnMenu.remove();
        delete that.activeColumnMenu;
    }
    /**
     * Document up handler.
     */
    _documentUpHandler(event) {
        const that = this,
            dragDetails = that._dragDetails;

        if (that.activeColumnMenu) {
            const originalEvent = event.originalEvent ? event.originalEvent : event;

            if (originalEvent) {
                let isChildElement = false;
                let clickedTarget = originalEvent.target;

                while (clickedTarget) {
                    clickedTarget = clickedTarget.parentNode;
                    if (clickedTarget === that) {
                        isChildElement = true;
                        break;
                    }
                }

                if (that.activeColumnMenu.contains(originalEvent.target) || (that._columnsSettingsMenu && that._columnsSettingsMenu.contains(originalEvent.target))) {
                    isChildElement = true;
                }

                const input = that.activeColumnMenu.querySelector('smart-input');

                if (input) {
                    const dropDown = input.$.scrollView;

                    if (dropDown.contains(originalEvent.target)) {
                        isChildElement = true;
                    }
                }

                if (!isChildElement) {
                    that.closeColumnMenu();
                }
            }
        }

        if (that._selectDrag) {
            that.$.main.classList.remove('prevent-scroll');
            delete that._selectDrag;
            return;
        }

        if (!dragDetails) {
            if (that._resizeDetails) {
                that._resolveResize(true);
            }

            return;
        }

        delete that._dragDetails;
        that.$.tableContainer.classList.remove('smart-unselectable');

        if (!dragDetails.FeedbackShown) {
            return;
        }

        const hoveredItem = dragDetails.HoveredItem;

        document.body.classList.remove('smart-dragging');
        document.body.style.overflow = that._originalBodyOverflow.overflow;
        document.body.style.eoverflowX = that._originalBodyOverflow.overflowX;
        document.body.style.overflowY = that._originalBodyOverflow.overflowY;
        delete that._originalBodyOverflow;

        that.classList.remove('smart-unselectable');
        dragDetails.Item.classList.remove('dragged');

        document.body.removeChild(dragDetails.Feedback);

        clearInterval(that._dragInterval);
        delete that._dragInterval;

        if (hoveredItem) {
            that._applyColumnReorder(dragDetails, hoveredItem);
        }

        that._preventClickSort = true;
        requestAnimationFrame(() => delete that._preventClickSort);
    }

    /**
     * Applies column reorder.
     */
    _applyColumnReorder(dragDetails, hoveredItem) {
        const that = this,
            rightToLeft = that.rightToLeft,
            originalColumns = that._columns,
            originDataField = dragDetails.Item.getAttribute('data-field'),
            originColumn = originalColumns.find(col => col.dataField === originDataField),
            targetDataField = hoveredItem.getAttribute('data-field'),
            dropAfter = hoveredItem.classList.contains('right'),
            newColumns = that._columns.filter(col => col.dataField !== originDataField);
        const index = newColumns.findIndex(col => col.dataField === targetDataField);

        hoveredItem.classList.remove('drop-column', 'left', 'right');

        if (dropAfter && !rightToLeft || !dropAfter && rightToLeft) {
            newColumns.splice(index + 1, 0, originColumn);
        }
        else {
            newColumns.splice(index, 0, originColumn);
        }

        if (originalColumns.map(col => col.dataField).join(',') === newColumns.map(col => col.dataField).join(',')) {
            // new column order is the same as old one
            return;
        }

        that.columns = newColumns;
        that._initColumns();
        that.refresh();
    }

    /**
     * Applies filters from filter row.
     */
    _applyRowFilters() {
        const that = this;

        if (!that.filtering || (!that.filterRow && !that.columnMenu)) {
            return;
        }

        const filterRow = that.filterRow ? that.$.tableContainer.querySelector('.smart-table-filter-row') : null,
            selectionColumnCorrection = Number(that.selection),
            columns = that._columns.filter(col => col.visible),
            filters = [],
            filterRowValues = [];

        for (let i = 0; i < columns.length; i++) {
            const dataField = columns[i].dataField,
                dataType = columns[i].dataType;

            if (columns[i].headerCellElement) {
                if (columns[i].headerCellElement.hasAttribute('filter')) {
                    columns[i].headerCellElement.removeAttribute('filter');
                }
            }

            if (!that.filterRow) {
                if (!columns[i].columnMenu) {
                    filterRowValues.push(null);
                    continue;
                }
            }

            const container = that.filterRow ? filterRow.children[i + selectionColumnCorrection].firstElementChild : columns[i].columnMenu.lastElementChild,
                button = container.children[2];
            let filterValue = container.firstElementChild.value,
                filterCondition = container.children[1].value;

            if (dataType === 'string') {
                filterCondition = that._filterInfo.stringConditions.find(condition => condition.label === filterCondition).value;
            }
            else {
                filterCondition = that._filterInfo.numberAndDateConditions.find(condition => condition.label === filterCondition).value;

                if (filterValue !== '') {
                    if (dataType === 'number') {
                        filterValue = parseFloat(filterValue);

                        if (isNaN(filterValue)) {
                            container.firstElementChild.value = '';
                            filterValue = '';
                        }
                    }
                    else if (dataType === 'date') {
                        filterValue = new Date(filterValue);
                        filterValue.setHours(0, 0, 0);
                    }
                }
            }

            const conditionWithEmptyValue = ['EMPTY', 'NOT_EMPTY', 'NULL', 'NOT_NULL'].indexOf(filterCondition) !== -1;

            if (filterValue !== '' || conditionWithEmptyValue) {
                const filterGroup = new Smart.Utilities.FilterGroup(),
                    filterObject = filterGroup.createFilter(dataType, filterValue, filterCondition);

                filterGroup.addFilter('or', filterObject);
                filters.push([dataField, filterGroup]);

                button.classList.remove('smart-hidden');
                filterRowValues.push({ condition: filterCondition, value: filterValue });

                if (columns[i].headerCellElement) {
                    columns[i].headerCellElement.setAttribute('filter', '');
                }
            }
            else {
                button.classList.add('smart-hidden');
                filterRowValues.push(null);
                if (columns[i].headerCellElement) {
                    if (columns[i].headerCellElement.hasAttribute('filter')) {
                        columns[i].headerCellElement.removeAttribute('filter');
                    }
                }
            }

            if (conditionWithEmptyValue) {
                container.firstElementChild.setAttribute('disabled', true);
            }
            else {
                container.firstElementChild.removeAttribute('disabled');
            }
        }

        if (filters.length > 0) {
            if (!that.dataSource.virtualDataSource) {
                that.dataSource._filter(filters, that.filterOperator);
            }

            that._filterInfo.rowFilters = filters;
            that._filterInfo.filterRowValues = filterRowValues;
            delete that._filterInfo.appliedFilters;
            that._fullRefresh('filter');
            that._updateState('filtered');

            if (!that._doNotFireEvent) {
                that.$.fireEvent('filter', { action: 'add', filters: filters });
            }
        }
        else if (that._filterInfo.rowFilters) {
            if (that._filterInfo.filterRowValues) {
                delete that._filterInfo.filterRowValues;
            }
            that.clearFilters();
        }
        else {
            if (that._filterInfo.filterRowValues) {
                delete that._filterInfo.filterRowValues;
            }
        }
    }

    /**
     * Clears filter input value.
     */
    _clearFilterInput() {
        const that = this;

        that._filterInfo.query = '';
        delete that._filterInfo.inputFilters;
        that.$.filterInput.value = '';
    }

    /**
     * Clears filter row UI.
     */
    _clearRowFilters(dataField) {
        const that = this;

        if (!that._filterInfo.rowFilters) {
            return;
        }

        const filterRow = that.$.tableContainer.querySelector('.smart-table-filter-row'),
            selectionColumnCorrection = that.selection ? 1 : 0;
        let columns = that._columns.filter(col => col.visible);

        if (dataField) {
            columns = that._columns.filter(col => col.dataField === dataField)
        }
        if (filterRow) {
            for (let i = 0; i < columns.length; i++) {
                const container = filterRow.children[i + selectionColumnCorrection] ? filterRow.children[i + selectionColumnCorrection].firstElementChild : null;

                if (container) {
                    container.firstElementChild.value = '';
                    container.children[2].classList.add('smart-hidden');
                }

                if (columns[i].headerCellElement) {
                    if (columns[i].headerCellElement.hasAttribute('filter')) {
                        columns[i].headerCellElement.removeAttribute('filter');
                    }
                }
            }
        }

        delete that._filterInfo.rowFilters;
    }


    /**
     * Creates the Table's footer row.
     */
    _createFooterRow(existingFooter) {
        const that = this,
            footerRow = that.footerRow;

        if (!footerRow) {
            return;
        }

        if (existingFooter) {
            that.$.tableContainer.appendChild(existingFooter);
            return;
        }

        const potentialHTMLTemplate = document.getElementById(footerRow);

        if (potentialHTMLTemplate && potentialHTMLTemplate instanceof HTMLTemplateElement) {
            const tfoot = document.createElement('tfoot'),
                templateContent = document.importNode(potentialHTMLTemplate.content, true);

            tfoot.appendChild(templateContent);
            that.$.tableContainer.appendChild(tfoot);
        }
        else {
            that.footerRow = null;
        }
    }

    /**
     * Creates the Table's custom header row.
     */
    _createCustomHeaderRow() {
        const that = this,
            header = that.$.tableContainer.firstElementChild;
        let headerRow = that.headerRow;

        if (!headerRow) {
            return;
        }

        if (typeof headerRow === 'function') {
            headerRow.call(that, header);
        }
        else if (typeof headerRow === 'string') {
            const template = document.getElementById(headerRow);

            if (!template) {
                header.innerHTML = `<tr><th>${headerRow}</th></tr>`;
                return
            }
            else {
                headerRow = template;
            }
        }

        if (headerRow instanceof HTMLTemplateElement) {
            header.appendChild(document.importNode(headerRow.content, true));
        }
        else if (headerRow.nodeName) {
            header.appendChild(headerRow);
        }
        else {
            that.headerRow = null;
        }
    }

    /**
     * Updates the state of the "Select all" checkbox.
     */
    _updateSelectAllState(dataSourceLength) {
        const that = this;

        if (!that.selection ||
            that.selectionMode === 'cell') {
            return;
        }

        const selectAllCheckboxTd = that.$.tableContainer.querySelector('.smart-table-select-all');
        let selectedIdsLength;

        if (dataSourceLength === undefined) {
            const dataSource = that.dataSource,
                filterInfo = that._filterInfo;

            if (filterInfo.inputFilters || filterInfo.rowFilters || filterInfo.appliedFilters) {
                const selectedIds = that._selectedIds;

                dataSourceLength = 0;
                selectedIdsLength = 0;

                for (let i = 0; i < dataSource.length; i++) {
                    const dataPoint = dataSource[i];

                    if (dataPoint.$.filtered === false) {
                        continue;
                    }

                    const id = dataPoint.$.id;

                    dataSourceLength++;

                    if (selectedIds.indexOf(id) !== -1) {
                        selectedIdsLength++;
                    }
                }
            }
            else {
                dataSourceLength = that.dataSource.length;
            }
        }

        if (selectedIdsLength === undefined) {
            selectedIdsLength = that._selectedIds.length;
        }

        if (selectedIdsLength === 0 || dataSourceLength === 0) {
            selectAllCheckboxTd.classList.remove('selected', 'indeterminate');
            selectAllCheckboxTd.firstElementChild.setAttribute('aria-checked', false);
        }
        else if (selectedIdsLength === dataSourceLength + that._selectableGroupRecords.length) {
            selectAllCheckboxTd.classList.remove('indeterminate');
            selectAllCheckboxTd.classList.add('selected');
            selectAllCheckboxTd.firstElementChild.setAttribute('aria-checked', true);
        }
        else {
            selectAllCheckboxTd.classList.remove('selected');
            selectAllCheckboxTd.classList.add('indeterminate');
            selectAllCheckboxTd.firstElementChild.setAttribute('aria-checked', 'mixed');
        }
    }

    /**
     * resize handler.
     */
    _resizeHandler() {
        const that = this;

        clearTimeout(that._resizeTimeout);

        const updateStickyHeader = () => {
            if (Smart.Utilities.Core.Browser.Firefox && that.virtualization) {
                const scrollbarValue = that.$.virtualizationContainer.$.verticalScrollBar.value;
                that._onVerticalChange({ detail: { value: scrollbarValue } }, true);
            }
        }

        updateStickyHeader();

        if (that.columnSizeMode === 'default') {
            that._handleAutoSizeMode();
        }

        that._resizeTimeout = setTimeout(function () {
            if (that.columnGroups &&
                that._columns.some(col => col.responsivePriority && col.responsivePriority > 1)) {
                that.refresh();
                return;
            }

            const currentWidth = that.offsetWidth,
                currentHeight = that.offsetHeight;

            if (that.virtualization && that._cachedHeight !== currentHeight) {
                const fractionOfMax = that._getFractionOfMax();

                that._refreshDataRows();
                that._setFractionOfMax(fractionOfMax);
                that._cachedWidth = currentWidth;
                that._cachedHeight = currentHeight;
                updateStickyHeader();

                return;
            }

            that._handleAutoSizeMode();
            that._handleFrozenColumnPositions();
            that._refreshHorizontalScrollbar();
            that._cachedWidth = currentWidth;
            that._cachedHeight = currentHeight;
            updateStickyHeader();
        }, 75);
    }

    /**
     * Expand/collapse arrow click handler.
     */
    _hierarchyArrowClickHandler(groupHeader, doNotFireEvent) {
        const that = this,
            isTreeMode = !that.grouping,
            groupData = groupHeader.data;

        that.animation = that._animation;

        if (that.expandHierarchy) {
            // keep collapsed ids.
            if (!that._collapsedIds) {
                that._collapsedIds = [];
            }

            if (groupData.expanded === true) {
                that._collapsedIds[groupData.$.id] = true;
            }
            else {
                delete that._collapsedIds[groupData.$.id];
            }

            if (that.dataSource && that.expandHierarchy) {
                that.dataSource._collapsedIds = that._collapsedIds;
            }
        }
        // end of collapsed ids.

        if (isTreeMode && that.dataSource.virtualDataSource && !groupData.expanded &&
            groupData.children && groupData.children.length === 0) {
            that._requestVirtualDataSource('expand', undefined, groupData);

            that.$.fireEvent('expand', { id: groupData.$.id, record: groupData });

            return;
        }

        if (that.virtualization) {
            that._hierarchyArrowClickHandlerVirtualization(groupHeader, doNotFireEvent);
            return;
        }

        const tableContainer = that.$.tableContainer,
            toggledId = groupData.$.id;

        function expandChildren(siblings) {
            siblings.forEach(child => {
                that._expandSingleChildRow(tableContainer.querySelector(`tr[row-id="${child.$.id}"]:not([unused])`));

                if (child.children && child.expanded) {
                    requestAnimationFrame(() => expandChildren(child.children));
                }
            });
        }

        function collapseChildren(siblings) {
            siblings.forEach(child => {
                that._collapseSingleChildRow(tableContainer.querySelector(`tr[row-id="${child.$.id}"]:not([unused])`));

                if (child.children) {
                    collapseChildren(child.children);
                }
            });
        }

        if (groupData.expanded) {
            collapseChildren(groupData.children);
        }
        else {
            requestAnimationFrame(() => expandChildren(groupData.children));
        }

        groupData.expanded = !groupData.expanded;
        groupHeader.setAttribute('aria-expanded', groupData.expanded);
        groupHeader.classList.toggle('expanded', groupData.expanded);

        if (isTreeMode) {
            if (groupData.expanded) {
                if (that._expandedIds.indexOf(toggledId) === -1) {
                    that._expandedIds.push(toggledId);
                }

                that.$.fireEvent('expand', { id: groupData.$.id, record: groupData });
            }
            else {
                that._expandedIds = that._expandedIds.filter(id => id !== toggledId);
                that.$.fireEvent('collapse', { id: groupData.$.id, record: groupData });
            }

            that._updateState('expanded');
        }
        else if (doNotFireEvent !== true) {
            let path = '' + groupData.$.id;
            path = path.replace('Item', '').replace(/_/ig, '.');

            if (groupData.expanded) {
                that.$.fireEvent('group', { action: 'expand', path: path, dataField: groupData.groupDataField, label: groupData.label });
            }
            else {
                that.$.fireEvent('group', { action: 'collapse', path: path, dataField: groupData.groupDataField, label: groupData.label });
            }
        }
    }

    /**
     * Expands a single child row.
     */
    _expandSingleChildRow(childRow, completedChildren = []) {
        if (!childRow) {
            return;
        }

        completedChildren.push(false);

        if (this.animation !== 'none') {
            childRow.classList.remove('smart-hidden');

            requestAnimationFrame(() => {
                childRow.classList.add('no-height');

                childRow.ontransitionend = function () {
                    childRow.classList.remove('no-height');
                    childRow.ontransitionend = null;
                    completedChildren.pop();
                }

                childRow.removeAttribute('aria-hidden');
                childRow.classList.remove('collapsed');
            });
        }
        else {
            childRow.removeAttribute('aria-hidden');
            childRow.classList.remove('collapsed', 'smart-hidden');
            completedChildren.pop();
        }
    }

    /**
     * Collapses a single child row.
     */
    _collapseSingleChildRow(childRow, completedChildren = []) {
        if (!childRow) {
            return;
        }

        completedChildren.push(false);

        if (this.animation !== 'none') {
            childRow.ontransitionend = function () {
                childRow.classList.add('smart-hidden');
                childRow.ontransitionend = null;
                completedChildren.pop();
            }
        }
        else {
            childRow.classList.add('smart-hidden');
            completedChildren.pop();
        }

        childRow.setAttribute('aria-hidden', true);
        childRow.classList.add('collapsed');
    }

    /**
     * Gets a group by its hierarchical index.
     */
    _getGroupByIndex(index) {
        const that = this;

        if (typeof index === 'number') {
            index = index.toString();
        }

        const boundHierarchy = that.dataSource.boundHierarchy,
            indexes = index.split('.');
        let group = boundHierarchy[indexes[0]];

        if (!group) {
            return;
        }

        for (let i = 1; i < indexes.length; i++) {
            group = group.children[indexes[i]];

            if (!group || group.leaf) {
                return;
            }
        }

        return group;
    }

    /**
    * Gets a group's children by its hierarchical index.
    */
    getGroupChildren(index) {
        const that = this;

        if (typeof index === 'number') {
            index = index.toString();
        }

        const boundHierarchy = that.dataSource.boundHierarchy,
            indexes = index.split('.');
        let group = boundHierarchy[indexes[0]];

        if (!group) {
            return [];
        }

        for (let i = 1; i < indexes.length; i++) {
            group = group.children[indexes[i]];

            if (!group || group.leaf) {
                return [];
            }
        }

        return group.children;
    }


    /**
     * Creates dialog.
     */
    _createDialog() {
        const that = this,
            dialog = document.createElement('smart-window'),
            footerTemplate = document.createElement('template'),
            propertySync = ` animation=${that.animation} theme="${that.theme}"${that.rightToLeft ? ' right-to-left' : ''}${!that.keyboardNavigation || that.unfocusable ? ' unfocusable' : ''}`;

        footerTemplate.innerHTML = `<smart-button class="ok primary"${propertySync}>${that.localize('ok')}</smart-button>
<smart-button class="cancel"${propertySync}>${that.localize('cancel')}</smart-button>`;

        dialog.animation = that.animation;
        dialog.footerTemplate = footerTemplate;
        dialog.headerButtons = ['close'];
        dialog.rightToLeft = that.rightToLeft;
        dialog.theme = that.theme;
        dialog.unfocusable = !that.keyboardNavigation || that.unfocusable;
        dialog.className = 'smart-table-window';
        dialog.ownerElement = that;

        that._dialog = dialog;
        that._addDialogHandlers();
        that.getShadowRootOrBody().appendChild(dialog);
        that.setAttribute('aria-owns', dialog.id);
    }

    /**
     * Adds dialog handlers.
     */
    _addDialogHandlers() {
        const that = this,
            dialog = that._dialog;

        dialog.addEventListener('close', that._dialogEventHandler);
        dialog.addEventListener('click', that._dialogEventHandler);
    }

    /**
     * Dialog event handler.
     */
    _dialogEventHandler(event) {
        const dialog = this,
            that = dialog.ownerElement,
            target = dialog.isInShadowDOM ? event.composedPath()[0] : event.target,
            eventType = event.type,
            oldContext = that.context;

        that.context = that;

        if (eventType === 'close') {
            if (target !== dialog) {
                that.context = oldContext;
                return;
            }

            const conditionalFormatting = dialog.classList.contains('conditional-formatting'),
                fields = dialog.classList.contains('fields');

            if (dialog.ok) {
                if (conditionalFormatting) {
                    that._applyConditionalFormatting();
                }

                delete dialog.ok;
            }
            else if (conditionalFormatting &&
                JSON.stringify(that._formattingPanel.items) !== JSON.stringify(that._formattingPanel.getItems())) {
                that._formattingPanel.$.itemsContainer.innerHTML = '';
                that._formattingPanel._addDefaultItems();
            }

            dialog.content.innerHTML = '';
            dialog.classList.remove('conditional-formatting', 'drill-down', 'fields');

            if (that.keyboardNavigation && !that.disabled && !that.unfocusable) {
                that.$.tableContainer.setAttribute('tabindex', 0);

                if (that.nodeName.toLowerCase() === 'smart-table') {
                    that.$.filterInput.unfocusable = false;
                    that.$.pager.unfocusable = false;
                }

                that.$.conditionalFormattingButton.unfocusable = false;
            }

            that.removeAttribute('modal');

            if (conditionalFormatting) {
                that.$.conditionalFormattingButton.focus();
            }
            else if (fields && that.$.fieldsButton) {
                that.$.fieldsButton.focus();
            }
            else {
                that.$.tableContainer.focus();
            }
        }
        else if (eventType === 'click' && dialog.$.footer.contains(target)) {
            if (target.closest('.ok')) {
                dialog.ok = true;
                dialog.close();
            }
            else if (target.closest('.cancel')) {
                dialog.close();
            }
        }

        that.context = oldContext;
    }

    /**
     * Opens dialog.
     */
    _openDialog(header, content, className) {
        const that = this;

        if (!that._dialog) {
            that._createDialog();
        }

        const dialog = that._dialog;

        dialog.label = header;
        dialog.classList.add(className);
        dialog.appendChild(content);
        that.$.tableContainer.removeAttribute('tabindex');

        if (that.nodeName.toLowerCase() === 'smart-table') {
            that.$.filterInput.unfocusable = true;
            that.$.pager.unfocusable = true;
        }

        if (className !== 'drill-down') {
            dialog.setAttribute('aria-controls', that.$.tableContainer.id);
        }
        else {
            dialog.removeAttribute('aria-controls');
        }

        that.$.conditionalFormattingButton.unfocusable = true;
        that.setAttribute('modal', '');
        dialog.open();
    }

    /**
     * "Conditional Formatting" button click handler.
     */
    _conditionalFormattingButtonClickHandler(event, columns, dataSource) {
        const that = this;
        let formattingPanel;

        if (that._formattingPanel) {
            formattingPanel = that._formattingPanel;
        }
        else {
            formattingPanel = document.createElement('smart-formatting-panel');
            formattingPanel.animation = that.animation;
            formattingPanel.columns = columns || that._columns;
            formattingPanel.dataSource = dataSource || that.dataSource;
            formattingPanel.locale = that.locale;
            formattingPanel.messages = that.messages;
            formattingPanel.rightToLeft = that.rightToLeft;
            formattingPanel.theme = that.theme;
            formattingPanel.unfocusable = !that.keyboardNavigation || that.unfocusable;
            formattingPanel.ownerElement = that;

            that._formattingPanel = formattingPanel;
        }

        if (that.conditionalFormatting) {
            formattingPanel.items = that.conditionalFormatting.slice(0);
        }

        that._openDialog(that.localize('conditionalFormatting'), formattingPanel, 'conditional-formatting');
    }

    /**
     * Transforms dataSource records using dataTransform callback.
     */
    _transformDataSource() {
        const that = this;

        if (!that.isRendered && that.dataTransform) {
            const dataSource = that.dataSource;

            for (let i = 0; i < dataSource.length; i++) {
                that.dataTransform(dataSource[i]);
            }
        }
    }

    /**
     * Applies initial conditional formatting.
     */
    _applyInitialConditionalFormatting(dataSource) {
        const that = this,
            conditionalFormatting = that.conditionalFormatting;

        if (!conditionalFormatting || conditionalFormatting.length === 0) {
            that._conditionalFormatting = null;
            return;
        }

        const defaults = that._defaults,
            formatter = new Smart.Utilities.ConditionalFormatter(dataSource),
            dataStyleCollection = [];
        let getColumns;

        if (that.nodeName.toLowerCase() === 'smart-pivot-table') {
            const pivotColumns = that._dynamicColumns;

            getColumns = function (column) {
                if (column === 'all') {
                    return pivotColumns.map(col => col.id);
                }
                else {
                    return pivotColumns.
                        filter(col => col.dataFields[col.dataFields.length - 1].dataField === column).
                        map(col => col.id);
                }
            }
        }
        else {
            getColumns = function (column) {
                if (column === 'all') {
                    return that._columns.map(col => col.value);
                }
                else {
                    return [column];
                }
            }
        }

        for (let i = 0; i < conditionalFormatting.length; i++) {
            conditionalFormatting[i] = Object.assign({
                column: 'all',
                condition: 'lessThan',
                firstValue: 0,
                secondValue: 1,
                fontFamily: defaults.fontFamily,
                fontSize: defaults.fontSize,
                text: defaults.text,
                highlight: defaults.highlight
            }, conditionalFormatting[i]);

            const data = conditionalFormatting[i],
                columns = getColumns(data.column),
                condition = data.condition;

            formatter.color = data.highlight;
            formatter.comparator = data.firstValue;
            formatter.min = data.firstValue;
            formatter.max = data.secondValue;

            const dataStyles = formatter.format(condition, columns);

            for (let column in dataStyles) {
                const columnStyles = dataStyles[column];

                for (let index in columnStyles) {
                    const cellStyle = columnStyles[index];

                    cellStyle.color = data.text;
                    cellStyle.fontFamily = data.fontFamily;
                    cellStyle.fontSize = data.fontSize;
                }
            }

            dataStyleCollection.push(dataStyles);
        }

        if (that._formattingPanel) {
            that._formattingPanel.items = conditionalFormatting.slice(0);
        }

        if (dataStyleCollection.length === 0) {
            return dataStyleCollection[0];
        }

        const finalStyle = {};

        for (let i = 0; i < dataStyleCollection.length; i++) {
            const dataStyles = dataStyleCollection[i];

            for (let column in dataStyles) {
                const columnStyles = dataStyles[column];

                if (!finalStyle[column]) {
                    finalStyle[column] = {};
                }

                for (let index in columnStyles) {
                    finalStyle[column][index] = Object.assign({}, finalStyle[column][index], columnStyles[index]);
                }
            }
        }

        that._conditionalFormatting = finalStyle;
    }

    /**
     * Converts RGB to HEX.
     */
    _toHex(rgb) {
        if (rgb.indexOf('#') !== -1) {
            return rgb;
        }

        const result = /rgb\((\d+), (\d+), (\d+)\)/g.exec(rgb);

        if (!result) {
            return '#FFFFFF';
        }

        return '#' + (parseFloat(result[1]).toString(16).padStart(2, '0') +
            parseFloat(result[2]).toString(16).padStart(2, '0') +
            parseFloat(result[3]).toString(16).padStart(2, '0')).toUpperCase();
    }

    /**
     * Applies conditional formatting.
     */
    _applyConditionalFormatting() {
        const that = this,
            previousConditionalFormatting = that._conditionalFormatting;

        that._conditionalFormatting = that._formattingPanel.apply();
        that.conditionalFormatting = that._formattingPanel.getItems();

        if (that._conditionalFormatting !== previousConditionalFormatting) {
            that._refreshDataRows();
        }
    }

    /**
     * Updates stored state.
     */
    _updateState(field, autoSave) {
        const that = this;
        let selected;

        if (field === 'selected') {
            selected = that.getSelection();
            that.selected = selected;
        }

        if (that.stateSettings.indexOf(field) === -1) {
            return;
        }

        const state = that._state;

        switch (field) {
            case 'columns':
                state.columns = that._columns;
                break;
            case 'expanded':
                state.expanded = that._expandedIds;
                break;
            case 'filtered':
                state.filtered = that._filterInfo;
                break;
            case 'grouped':
                state.grouped = that.dataSource.groupBy._array.slice(0);
                break;
            case 'selected':
                state.selected = selected;
                break;
            case 'sorted':
                state.sorted = that._sortColumns || [];
                break;
        }

        if (that.autoSaveState && that.isRendered && autoSave !== false) {
            window.localStorage.setItem('smartTable' + that.id, that._stringifyState());
        }
    }

    /**
     * Stringifies Table state.
     */
    _stringifyState() {
        const that = this;

        const state = JSON.parse(JSON.stringify(that._state));

        ['columns', 'expanded', 'filtered', 'grouped', 'selected', 'sorted'].forEach((value) => {
            if (that.stateSettings.indexOf(value) === -1) {
                delete state[value];
            }
        });

        return JSON.stringify(state, function (key, value) {
            if (typeof value === 'function' ||
                value instanceof HTMLElement ||
                key === 'sortOrder' ||
                key === 'thHierarchy') {
                return undefined;
            }

            return value;
        });
    }

    /**
     * Handles columnSizeMode: 'auto'.
     */
    _handleAutoSizeMode() {
        const that = this;

        if (that.columnSizeMode === 'default') {

            const columns = that._columns.filter(col => col.visible);

            const autoSizeColumns = [];

            const autoSizeColumn = (column) => {
                const th = column.headerCellElement;

                if (!th) {
                    return
                }

                const minWidth = parseInt(column.minWidth || that.columnMinWidth);

                if (th.offsetWidth < minWidth) {
                    th.style.width = minWidth + 'px';
                }
                else {
                    th.style.width = '';

                    if (th.offsetWidth < minWidth) {
                        th.style.width = minWidth + 'px';
                    }
                }
            }

            columns.forEach((column) => {
                if (!column.width && !column._manualWidth) {
                    autoSizeColumn(column);
                    autoSizeColumns.push(column);
                }

                if (column.width && typeof (column.width) === 'string' && column.width.endsWith('%')) {
                    const width = that._getColumnWidth(column.width, false, column);

                    if (column.autoWidth === false) {
                        column.headerCellElement.style.width = column.width;
                    }
                    else {
                        column.headerCellElement.setAttribute('responsive-width', column.width);
                        column.headerCellElement.style.width = width + 'px';
                    }
                }
                else if (column._manualPercentageWidth) {
                    if (column._isResponsive) {
                        const width = that._getColumnWidth(column._manualPercentageWidth + '%', false, column);

                        if (column.autoWidth === false) {
                            column.headerCellElement.style.width = column.width;
                        }
                        else {
                            column.headerCellElement.setAttribute('responsive-width', column._manualPercentageWidth + '%');
                            column.headerCellElement.style.width = width + 'px';
                        }
                    }
                    else {
                        column.headerCellElement.style.width = column._manualWidth + 'px';
                    }
                }
            });

            for (let i = 0; i < autoSizeColumns.length; i++) {
                autoSizeColumn(autoSizeColumns[i]);
            }

            return;
        }

        // const columns = that._columns,
        const columns = that._columns.filter(col => col.visible),
            columnMinWidth = that._getNumericMinWidth();

        let firstAutoSizedColumn, lastAutoSizedColumn;

        columns.forEach((col) => {
            if (col.width) {
                // do not process columns with static width
                return;
            }

            if (!col._manualWidth) {
                if (!firstAutoSizedColumn) {
                    firstAutoSizedColumn = col;
                }

                lastAutoSizedColumn = col;
                col.headerCellElement.style.width = null;
            }
        });

        const tableWidth = that.$.tableContainer.offsetWidth -
            (that.selection ? (that.$.tableContainer.querySelector('.smart-table-select-all').offsetWidth) : 0);
        let widths = new Map(),
            totalWidth = 0,
            totalMinWidth = 0,
            numberOfAutoWidthColumns = 0;

        that.removeAttribute('resize-max-reached');
        that.setAttribute('auto-size', '');

        if (firstAutoSizedColumn) {
            firstAutoSizedColumn.headerCellElement.style.width = '100%';
        }

        for (let i = 0; i < columns.length; i++) {
            const column = columns[i];

            if (column === firstAutoSizedColumn) {
                numberOfAutoWidthColumns++;
                continue;
            }

            const headerCellElement = column.headerCellElement;
            let width, minWidth;

            if (column.width) {
                width = minWidth = that._getColumnWidth(column.width, false, column);

                if (column.minWidth && width < minWidth) {
                    width = column.minWidth;
                    minWidth = column.minWidth;
                }
            }
            else if (column._manualWidth) {
                width = column._manualWidth;
                minWidth = column.minWidth || columnMinWidth;

                if (width < minWidth) {
                    width = minWidth;
                }
            }
            else {
                width = Math.max(headerCellElement.offsetWidth, columnMinWidth);
                minWidth = column.minWidth || columnMinWidth;
                numberOfAutoWidthColumns++;
            }

            totalWidth += width;
            totalMinWidth += minWidth;

            if (column._isResponsive) {
                width = that._getColumnWidth(column._manualPercentageWidth + '%', false, column);

                if (width < minWidth) {
                    width = minWidth;
                }
            }

            widths.set(column, { width: width, minWidth: minWidth });

        }

        function processFirstAutoSizedColumn() {
            firstAutoSizedColumn.headerCellElement.style.width = null;

            const width = Math.max(firstAutoSizedColumn.headerCellElement.offsetWidth, columnMinWidth),
                minWidth = firstAutoSizedColumn.minWidth || columnMinWidth;

            widths.set(firstAutoSizedColumn, { width: width, minWidth: minWidth });
            totalWidth += Math.max(width, minWidth);
            totalMinWidth += minWidth;
        }

        if (firstAutoSizedColumn) {
            if (firstAutoSizedColumn !== lastAutoSizedColumn) {
                lastAutoSizedColumn.headerCellElement.style.width = '100%';
                processFirstAutoSizedColumn();
                lastAutoSizedColumn.headerCellElement.style.width = null;
            }
            else if (columns.length > 1) {
                const firstSizedColumn = columns.find(col => col !== firstAutoSizedColumn);

                firstSizedColumn.headerCellElement.style.width = '100%';
                processFirstAutoSizedColumn();
                if (firstSizedColumn._isResponsive) {
                    firstSizedColumn.headerCellElement.style.width = widths.get(firstSizedColumn).width + '%';
                }
                else {
                    firstSizedColumn.headerCellElement.style.width = widths.get(firstSizedColumn).width + 'px';
                }
            }
            else {
                processFirstAutoSizedColumn();
            }
        }

        if (tableWidth <= totalMinWidth ||
            numberOfAutoWidthColumns === 0) {
            columns.forEach(col => {
                if (col._isResponsive) {
                    col.headerCellElement.style.width = (col._manualPercentageWidth ? col._manualPercentageWidth + '%' : widths.get(col).minWidth) + 'px';

                    if (col._manualPercentageWidth) {
                        const columnWidth = that._getColumnWidth(col._manualPercentageWidth + '%', false, col);
                        const minWidth = col.minWidth || that.columnMinWidth;
                        if (columnWidth === minWidth) {
                            col.headerCellElement.style.width = minWidth + 'px';
                        }
                    }
                }
                else {
                    col.headerCellElement.style.width = (col._manualWidth ? col._manualWidth : widths.get(col).minWidth) + 'px';
                }
            });

            if (tableWidth <= totalMinWidth) {
                that.setAttribute('resize-max-reached', '');
            }
        }
        else if (tableWidth > totalMinWidth) {
            if (tableWidth < totalWidth) {
                const processedAutoWidthColumns = [];
                let toShrink = totalWidth - tableWidth,
                    autoWidthColumnsToProcess = numberOfAutoWidthColumns,
                    coefficient;

                while (toShrink > 0 && autoWidthColumnsToProcess > 0) {
                    coefficient = Math.ceil(toShrink / autoWidthColumnsToProcess);

                    columns.forEach(col => {
                        if (col.width || col._manualWidth ||
                            processedAutoWidthColumns.indexOf(col) !== -1) {
                            return;
                        }

                        const colWidths = widths.get(col);
                        let width = Math.max(colWidths.width - coefficient, colWidths.minWidth);
                        const actualShrink = colWidths.width - width;

                        toShrink -= actualShrink;

                        if (width === colWidths.minWidth) {
                            autoWidthColumnsToProcess--;
                            processedAutoWidthColumns.push(col);
                        }

                        colWidths.width = width;
                    });
                }

                columns.forEach(col => {
                    if (col._isResponsive) {
                        col.headerCellElement.style.width = widths.get(col).width + '%';
                        if (col._manualPercentageWidth) {
                            const columnWidth = that._getColumnWidth(col._manualPercentageWidth + '%', false, col);
                            const minWidth = col.minWidth || that.columnMinWidth;
                            if (columnWidth === minWidth) {
                                col.headerCellElement.style.width = minWidth + 'px';
                            }
                        }
                    }
                    else {
                        col.headerCellElement.style.width = widths.get(col).width + 'px'
                    }
                });
            }
            else if (tableWidth === totalWidth) {
                columns.forEach(col => {
                    if (col._isResponsive) {
                        col.headerCellElement.style.width = widths.get(col).width + '%'
                    }
                    else {
                        col.headerCellElement.style.width = widths.get(col).width + 'px'
                    }
                });
            }
            else {
                columns.forEach(col => {
                    const autoWidth = widths.get(col).width;

                    if (col === firstAutoSizedColumn) {
                        col.headerCellElement.style.width = tableWidth - totalWidth + autoWidth + 'px';
                    }
                    else {
                        col.headerCellElement.style.width = autoWidth + 'px';
                    }
                });
            }
        }

        that.removeAttribute('auto-size');
    }

    /**
     * Gets column min width as a number.
     */
    _getNumericMinWidth() {
        const that = this,
            columnMinWidth = that.columnMinWidth;

        if (typeof columnMinWidth === 'string' && columnMinWidth.indexOf('%') !== -1) {
            const tableWidth = that.offsetWidth;

            return tableWidth * (parseFloat(columnMinWidth) / 100);
        }

        return parseFloat(columnMinWidth);
    }

    /**
     * Gets the max a column can be resized to in the current resize operation.
     */
    _getCurrentResizeMax() {
        const that = this;

        if (that.columnSizeMode === 'default') {
            return Infinity;
        }

        const resizeDetails = that._resizeDetails,
            columns = that._columns,
            column = columns.find(col => col.headerCellElement === resizeDetails.Item),
            columnIndex = columns.indexOf(column);

        let lastVisibleColumnIndex = columns.length - 1;

        for (let i = columns.length - 1; i >= 0; i--) {
            if (columns[i].visible) {
                lastVisibleColumnIndex = i;
                break;
            }
        }

        if (columnIndex === lastVisibleColumnIndex) {
            return resizeDetails.Item.offsetWidth;
        }

        //  let sumOfMinWidths = 0;
        let end;

        for (let i = columnIndex + 1; i < columns.length; i++) {
            const nextColumn = columns[i];

            //      sumOfMinWidths += nextColumn.width ? that._getColumnWidth(nextColumn.width, false, nextColumn) : (nextColumn.minWidth || resizeDetails.Min);

            if (i === lastVisibleColumnIndex) {
                if (nextColumn.headerCellElement) {
                    const rect = nextColumn.headerCellElement.getBoundingClientRect();

                    end = rect[that.rightToLeft ? 'left' : 'right'] + window.scrollX;
                }
            }
        }

        return end;
        //        return end - resizeDetails.ItemStart - sumOfMinWidths;
    }

    /**
     * Resizes column on dblclick.
     */
    _autoResizeColumnOnDblclick() {
        const that = this,
            resizeDetails = that._resizeDetails,
            header = resizeDetails.Item,
            firstDifferentColumnHeader = that._columns.find(col => col.headerCellElement !== header).headerCellElement,
            cachedWidth = firstDifferentColumnHeader.style.width;

        that.setAttribute('auto-size', '');
        header.style.width = null;
        firstDifferentColumnHeader.style.width = '100%';

        let targetWidth = header.offsetWidth;

        firstDifferentColumnHeader.style.width = cachedWidth;
        that.removeAttribute('auto-size', '');

        targetWidth = Math.min(resizeDetails.Max, Math.max(resizeDetails.Min, targetWidth));
        resizeDetails.Width = targetWidth;

        that._resolveResize();
    }

    /**
     * Returns if expand/collapse operation is forbidden.
     */
    _isExpandCollapseForbidden() {
        const that = this;

        return (!that.hasAttribute('hierarchy') || that.grouping) && that.nodeName.toLowerCase() !== 'smart-pivot-table';
    }

    /**
     * Selects a single row.
     */
    _selectSingle(rowId) {
        const that = this,
            rowObject = that.rowById ?
                that.rowById[rowId] || that.dataSource.dataItemById[rowId] :
                that.rows.dataItemById[rowId];

        if (!rowObject) {
            return;
        }

        const parsedId = rowObject.data ? rowObject.data.$.id : rowObject.$.id;

        if (that._selectedIds.indexOf(parsedId) !== -1 ||
            that._disabledSelection.indexOf(parsedId) !== -1) {
            return;
        }

        const rowElement = that.$.tableContainer.querySelector(`tr[row-id="${parsedId}"]:not([unused])`);

        if (that.selectionMode === 'one') {
            that._clearSelection();
            that._selectedIds = [];
        }

        that._selectedIds.push(parsedId);

        if (rowElement) {
            const checkboxContainer = rowElement.firstElementChild;

            checkboxContainer.classList.remove('indeterminate');
            checkboxContainer.classList.add('selected');
            checkboxContainer.firstElementChild.setAttribute('aria-checked', true);
            rowElement.setAttribute('aria-selected', true);
        }

        that._handleHierarchicalSelection(rowObject, true);
        return true;
    }

    /**
     * Unselects a single row.
     */
    _unselectSingle(rowId) {
        const that = this,
            rowObject = that.rowById ?
                that.rowById[rowId] || that.dataSource.dataItemById[rowId] :
                that.rows.dataItemById[rowId];

        if (!rowObject) {
            return;
        }

        const parsedId = rowObject.data ? rowObject.data.$.id : rowObject.$.id,
            selectedIdIndex = that._selectedIds.indexOf(parsedId);

        const rowElement = that.$.tableContainer.querySelector(`tr[row-id="${parsedId}"]:not([unused])`);

        if (selectedIdIndex !== -1) {
            that._selectedIds.splice(selectedIdIndex, 1);
        }

        if (rowElement) {
            const checkboxContainer = rowElement.firstElementChild;

            checkboxContainer.classList.remove('selected', 'indeterminate');
            checkboxContainer.firstElementChild.setAttribute('aria-checked', false);
            rowElement.setAttribute('aria-selected', false);
        }

        that._handleHierarchicalSelection(rowObject, false);
        return true;
    }

    /**
     * Changes the selection of multiple rows.
     */
    _changeSelectionOfMultiple(ids, action, actionType = 'programmatic', oldSelectedIds) {
        const that = this;

        if (!oldSelectedIds) {
            oldSelectedIds = JSON.stringify(that._selectedIds.slice(0).sort());
        }

        for (let i = 0; i < ids.length; i++) {
            that[`_${action}Single`](ids[i]);
        }

        if (oldSelectedIds !== JSON.stringify(that._selectedIds.slice(0).sort())) {
            that._updateSelectAllState();
            that._updateState('selected');
            that.$.fireEvent('change', { type: actionType });
        }
    }

    /**
     * Handles hierarchical checkbox selection.
     */
    _handleHierarchicalSelection(rowObject, selected) {
        const that = this;

        if (!that.hasAttribute('hierarchy')) {
            return;
        }

        if (that.selectionByHierarchy === false) {
            return;
        }

        function checkUncheckChildren(currentItem, check) {
            const children = currentItem.children;
            let uncheckedChildren = 0;

            for (let i = 0; i < children.length; i++) {
                const currentChild = children[i];

                if (currentChild.$.filtered === false) {
                    continue;
                }

                let appliedState = that._setThreeStateCheckbox(currentChild, check);

                if (currentChild.children && currentChild.children.length > 0) {
                    appliedState = checkUncheckChildren(currentChild, check);
                }

                if (check && appliedState === false) {
                    uncheckedChildren++;
                }
            }

            if (check && uncheckedChildren > 0) {
                return that._setThreeStateCheckbox(currentItem, uncheckedChildren === children.length ? false : null);
            }
        }

        const item = rowObject.data;
        let currentItem = item;

        if (item && item.children) {
            checkUncheckChildren(item, selected);
        }

        while (currentItem && currentItem.parent) {
            const parent = currentItem.parent,
                parentState = that._getChildCheckState(parent).state;

            that._setThreeStateCheckbox(parent, parentState);

            currentItem = parent;
        }
    }

    /**
     * Returns a child row's check state.
     */
    _getChildCheckState(child) {
        const that = this,
            selectedIds = that._selectedIds,
            disabledSelection = that._disabledSelection,
            children = child.children;

        if (!children || children.length === 0 || !that.selectionByHierarchy) {
            const id = child.$.id,
                selected = selectedIds.indexOf(id) !== -1;

            return { state: selected, maxSelected: selected ? true : disabledSelection.indexOf(id) !== -1 };
        }

        let maxSelected = true,
            visibleChildren = 0,
            selectedChildren = 0,
            indeterminateChildren = 0;

        for (let i = 0; i < children.length; i++) {
            const subChild = children[i];

            if (subChild.$.filtered === false) {
                continue;
            }

            const subChildState = that._getChildCheckState(subChild);

            visibleChildren++;

            if (subChildState.state) {
                selectedChildren++;
            }
            else if (subChildState.state === null) {
                indeterminateChildren++;
            }
            else if (subChildState.maxSelected === false) {
                maxSelected = false;
            }
        }

        if (selectedChildren !== 0 && selectedChildren === visibleChildren) {
            return { state: true, maxSelected: true };
        }

        if (selectedChildren === 0 && indeterminateChildren === 0) {
            return { state: false, maxSelected: maxSelected };
        }

        return { state: null, maxSelected: maxSelected };
    }

    /**
     * Sets checked, unchecked, or indeterminate state to a checkbox.
     */
    _setThreeStateCheckbox(item, state) {
        const that = this,
            id = item.$.id,
            selectedIds = that._selectedIds,
            selectedIdIndex = selectedIds.indexOf(id);

        if (state) {
            if (that._disabledSelection.indexOf(id) !== -1) {
                state = false;
            }
            else if (selectedIdIndex === -1) {
                selectedIds.push(id);
            }
        }

        if (!state && selectedIdIndex !== -1) {
            selectedIds.splice(selectedIdIndex, 1);
        }

        const rowElement = that.$.tableContainer.querySelector(`tr[row-id="${id}"]:not([unused])`);

        if (!rowElement) {
            return state;
        }

        const checkboxContainer = rowElement.firstElementChild,
            checkbox = checkboxContainer.firstElementChild;

        if (state) {
            checkboxContainer.classList.remove('indeterminate');
            checkboxContainer.classList.add('selected');
            checkbox.setAttribute('aria-checked', true);
            rowElement.setAttribute('aria-selected', true);
        }
        else if (state === false) {
            checkboxContainer.classList.remove('selected', 'indeterminate');
            checkbox.setAttribute('aria-checked', false);
            rowElement.setAttribute('aria-selected', false);
        }
        else {
            checkboxContainer.classList.remove('selected');
            checkboxContainer.classList.add('indeterminate');
            checkbox.setAttribute('aria-checked', 'mixed');
            rowElement.setAttribute('aria-selected', false);
        }

        return state;
    }

    /**
     * Gets selectable group records.
     */
    _getSelectableGroupRecords() {
        const that = this,
            dataSource = that.dataSource,
            boundHierarchy = dataSource.boundHierarchy;

        that._selectableGroupRecords = [];

        if (!boundHierarchy) {
            that._selectedIds = that._selectedIds.filter(id => dataSource.dataItemById[id] !== undefined);
            return;
        }

        function process(collection) {
            collection.forEach(group => {
                if (group.groupDataField) {
                    that._selectableGroupRecords.push(group.$.id);
                    process(group.children);
                }
            });
        }

        process(boundHierarchy);
        that._selectedIds = that._selectedIds.filter(id => dataSource.dataItemById[id] !== undefined ||
            that._selectableGroupRecords.indexOf(id) !== -1);
    }

    /**
     * Clears selection.
     */
    _clearSelection(fireEvent) {
        const that = this;

        if (that._selectedIds.length === 0) {
            return;
        }

        const selectAllCheckbox = that.$.tableContainer.querySelector('.smart-table-select-all');

        Array.from(that.$.tableContainer.querySelectorAll('.smart-table-select-row')).forEach(td => {
            if (!td.parentElement.classList.contains('disable-select')) {
                td.parentElement.setAttribute('aria-selected', false);
            }

            td.classList.remove('selected', 'indeterminate');
            td.firstElementChild.setAttribute('aria-checked', false);
        });

        if (selectAllCheckbox) {
            selectAllCheckbox.classList.remove('indeterminate', 'selected');
            selectAllCheckbox.firstElementChild.setAttribute('aria-checked', false);
        }

        that._selectedIds = [];

        if (fireEvent) {
            that._updateState('selected');
            that.$.fireEvent('change', { type: 'programmatic' });
        }
    }

    /**
     * Re-evaluates the cell values of cells with formulas.
     */
    _updateCellsWithFormulas(propertyChangedHandler) {
        const that = this,
            formulas = that.formulas,
            cellsWithFormulas = that._cellsWithFormulas;

        if (!formulas && !propertyChangedHandler) {
            return;
        }

        for (let cellSignature in cellsWithFormulas) {
            const result = /(.+):(.+)/.exec(cellSignature),
                column = that.columnByDataField[result[1]],
                rowObject = that.rowById[result[2]];

            if (!column || !rowObject) {
                continue;
            }

            const cell = that.$.tableContainer.querySelector(
                `tr[row-id="${rowObject.data.$.id}"]:not([unused]) td[data-field="${column.dataField}"]`);

            if (cell) {
                that._setCellContent(cell, that._formatCellValue(rowObject, column, cell), cell.classList.contains('tree-cell'));
            }
        }
    }

    /**
     * Creates Table data rows when virtualization is enabled.
     */
    _createVirtualDataRows(tbody) {
        const that = this,
            rowDetailTemplate = that.rowDetailTemplate,
            selection = that.selection,
            hierarchical = that.hasAttribute('hierarchy'),
            fragment = document.createDocumentFragment(),
            virtualizationContainer = that.$.virtualizationContainer,
            tableContainer = that.$.tableContainer,
            rowHeight = that._rowHeight;

        if (that.isRendered) {
            virtualizationContainer.scrollWidth = 0;
            virtualizationContainer.scrollHeight = 0;
            virtualizationContainer.$.scrollViewerContainer.classList.remove('hscroll', 'vscroll');
        }

        const viewHeight = virtualizationContainer.$.scrollViewerContainer.offsetHeight - tableContainer.firstElementChild.offsetHeight -
            (that.filtering && that.filterRow ? rowHeight : 0) -
            (that.footerRow ? tableContainer.lastElementChild.offsetHeight : 0),
            tableAutoHeight = viewHeight < 5, // height of Table is close to height of header => height of Table is 'auto'
            rowsVirtual = that._getVirtualRecords(hierarchical, tableAutoHeight),
            numberOfVirtualRows = rowsVirtual.length;
        let maxHeight = hierarchical ? viewHeight * 2 : viewHeight + 3 * rowHeight,
            scrollHeight = rowHeight * numberOfVirtualRows,
            accumulatedHeight = 0;

        that._rowsVirtual = rowsVirtual;
        that._rowsInDOM = [];

        for (let i = 0; i < numberOfVirtualRows; i++) {
            const rowObject = rowsVirtual[i],
                data = rowObject.data;

            if (rowObject.detail) {
                continue;
            }

            if (data.groupDataField) {
                that._rowsInDOM.push(that._createGroupHeader(data, fragment));
            }
            else {
                const newDataRow = that._createDataRow(
                    rowObject,
                    fragment,
                    {
                        hierarchical: hierarchical, rowDetailTemplate: rowDetailTemplate,
                        selection: selection, virtualization: true
                    }
                );

                that._rowsInDOM.push(newDataRow.row);

                if (newDataRow.detail) {
                    that._rowsInDOM.push(newDataRow.detail);
                    accumulatedHeight += that._rowDetailHeight;
                    maxHeight += that._rowDetailHeight;
                }
            }

            accumulatedHeight += rowHeight;

            if (!tableAutoHeight && accumulatedHeight > maxHeight) {
                // do not create more rows than can be shown in the view + necessary "padding"
                break;
            }
        }

        tbody.appendChild(fragment);
        that._updateState('expanded');

        if (!tbody.parentElement) {
            that.$.tableContainer.insertBefore(tbody, that.$.tableContainer.querySelector('tfoot'));
        }

        virtualizationContainer.refresh();

        if (rowDetailTemplate) {
            const rowDetailHeightCorrection = that._expandedRowDetailIds.length * (that._rowDetailHeight - rowHeight);

            scrollHeight += rowDetailHeightCorrection;
        }

        let verticalScrollBarMax = Math.max(0, scrollHeight - viewHeight);

        if (verticalScrollBarMax > 0 &&
            virtualizationContainer.computedHorizontalScrollBarVisibility) {
            verticalScrollBarMax += virtualizationContainer.$.horizontalScrollBar.offsetHeight;
        }

        virtualizationContainer.$.scrollViewerContentContainer.style.top = 0;
        virtualizationContainer.$.verticalScrollBar.max = verticalScrollBarMax;

        that._scrollHeight = scrollHeight;
        that._start = { view: 0, data: 0 };

        if (!tableAutoHeight && that._rowsInDOM.length > 0 &&
            virtualizationContainer.$.scrollViewerContentContainer.offsetHeight <
            virtualizationContainer.$.scrollViewerContainer.offsetHeight) {
            that._rowsInDOM[that._rowsInDOM.length - 1].classList.add('last-row');
        }

        that._fixFrozenHeaderFirefox();
        that._focusEquivalentCell();
    }

    /**
     * Gets virtual records.
     */
    _getVirtualRecords(hierarchical, tableAutoHeight) {
        const that = this,
            records = hierarchical && !tableAutoHeight ?
                that.rows.filter(row => row.data.level === 0 || !that._isCollapsed(row.data)) : that.rows;

        if (hierarchical || !that.rowDetailTemplate) {
            return records;
        }

        const updatedRecords = [];

        records.forEach(record => {
            updatedRecords.push(record);

            if (that._expandedRowDetailIds.indexOf(record.data.$.id) !== -1) {
                updatedRecords.push({ detail: true, data: record.data });
            }
        });

        return updatedRecords;
    }

    /**
     * Virtualization container vertical scrolling handler.
     */
    _onVerticalChange(event, toggle) {
        const that = this;

        if (that._ignoreVerticalChange) {
            return;
        }

        const rows = that.rows,
            rowHeight = that._rowHeight,
            virtualizationContainer = that.$.virtualizationContainer;
        let value = event.detail.value;

        if (Smart.Utilities.Core.Browser.Firefox && that.virtualization) {
            virtualizationContainer.$.scrollViewerContentContainer.style.top = null;
        }

        that.setAttribute('ignore-detail-animation', '');

        if (that._rowsInDOM.length === rows.length ||
            virtualizationContainer.$.verticalScrollBar.max === 0) {
            // no virtual items
            const start = Math.floor(value / rowHeight);

            that._start = { view: start, data: start };
            virtualizationContainer.$.scrollViewerContentContainer.style.top = -value + 'px';
            requestAnimationFrame(() => that.removeAttribute('ignore-detail-animation'));
            that._fixFrozenHeaderFirefox();
            return;
        }

        let startOfView, startOfData;

        if (that._expandedRowDetailIds.length > 0) {
            // when there are expanded row details
            let height = 0,
                difference;
            startOfView = 1;

            for (let i = 0; i < that._rowsVirtual.length; i++) {
                const previousHeight = height;

                if (that._rowsVirtual[i].detail) {
                    height += that._rowDetailHeight;
                }
                else {
                    height += that._rowHeight;
                }

                if (startOfData === undefined && value <= height) {
                    startOfData = i;
                    difference = value - previousHeight;
                    break;
                }
            }

            //NOTE: Scrolls only when the vScroll is visible. This should only happend when the Table height is not 'auto'
            if (virtualizationContainer.computedVerticalScrollBarVisibility) {
                value = difference + that._rowHeight;
            }
            else {
                //Resets the start view item index to 0 because there was not vScroll
                startOfView = 0;
            }
        }
        else {
            value = value % (2 * rowHeight) + rowHeight;

            if (value < rowHeight) {
                value += rowHeight;
            }

            while (value + virtualizationContainer.$.scrollViewerContainer.offsetHeight > that.$.tableContainer.offsetHeight) {
                value -= rowHeight;
            }

            startOfView = Math.floor(value / rowHeight);
            startOfData = Math.floor(event.detail.value / rowHeight);

            if (startOfView < 0) {
                startOfData -= startOfView;
                startOfView = 0;
            }
        }

        virtualizationContainer.$.scrollViewerContentContainer.style.top = -value + 'px';

        that._updateVisibleRows(startOfView, startOfData, toggle || that._expandedRowDetailIds.length > 0);


        that._fixFrozenHeaderFirefox();

        requestAnimationFrame(() => that.removeAttribute('ignore-detail-animation'));
    }

    /**
     * Applies a fix for bug in Firefox with position: sticky
     */
    _fixFrozenHeaderFirefox() {
        const that = this;

        if (that.virtualization) {
            if (that.$.virtualizationContainer && that.$.virtualizationContainer.$.scrollViewerContentContainer) {
                that._tableHeader.style.top = -parseFloat(that.$.virtualizationContainer.$.scrollViewerContentContainer.style.top) + 'px';
            }
        }

        if (Smart.Utilities.Core.Browser.Firefox && that.virtualization) {
            //      that.$.tableContainer.firstElementChild.style.top = 0;
            //      requestAnimationFrame(() => that.$.tableContainer.firstElementChild.style.top = null);
        }
    }

    /**
     * Focuses the cell in the DOM equivalent to the previously focused cell.
     */
    _focusEquivalentCell(focusedCellInfo) {
        const that = this,
            focusedCell = that._focusedCell;

        if (!focusedCellInfo && !focusedCell) {
            return;
        }

        let equivalentCell;

        if (!focusedCellInfo) {
            const focusedCellParentRow = focusedCell.parentElement;

            if (!focusedCellParentRow) {
                return;
            }

            focusedCellInfo = {
                rowId: focusedCell.parentElement.data.$.id,
                dataField: focusedCell.getAttribute('data-field')
            };
        }

        if (focusedCellInfo.dataField) {
            equivalentCell = that.$.tableContainer.querySelector(
                `tr[row-id="${focusedCellInfo.rowId}"]:not([unused]) td[data-field="${focusedCellInfo.dataField}"]`
            );
        }
        else {
            equivalentCell = that.$.tableContainer.querySelector(
                `tr[row-id="${focusedCellInfo.rowId}"]:not([unused]) td.group-header`
            );
        }

        that._focusCell(equivalentCell);
    }

    _detachCachedTemplates() {
        const that = this;

        if (!that._cachedTemplates) {
            return;
        }

        delete that._cachedTemplates;
        if (that._tableCachedTemplates) {
            that._tableCachedTemplates.remove();
            delete that._tableCachedTemplates;
        }
    }

    _clearCachedTemplates() {
        const that = this;

        if (!that._cachedTemplates) {
            return;
        }

        if (Object.keys(that._cachedTemplates).length > 0) {
            if (!that._tableCachedTemplates) {
                that._tableCachedTemplates = document.createElement('div');
                that._tableCachedTemplates.style.display = 'none';
                document.body.appendChild(that._tableCachedTemplates);
            }

            const fragment = document.createDocumentFragment();

            for (let key in that._cachedTemplates) {
                fragment.appendChild(that._cachedTemplates[key]);
            }

            that._tableCachedTemplates.appendChild(fragment);
        }
    }
    /**
     * Updates visible rows (when virtualization is enabled).
     */
    _updateVisibleRows(startOfView, startOfData, forceUpdate) {
        const that = this,
            startCoefficient = startOfData - startOfView,
            numberOfVirtualRows = that._rowsVirtual.length,
            tableSettings = { hierarchical: that.hasAttribute('hierarchy'), selection: that.selection };
        let focusedCellInfo;

        forceUpdate = forceUpdate &&
            (tableSettings.hierarchical || !!that.rowDetailTemplate);

        if (tableSettings.hierarchical && !that.grouping) {
            forceUpdate = true;
        }

        if (that._sortColumns && that._sortColumns.length > 0) {
            forceUpdate = true;
        }

        if (that._focusedCell) {
            const focusedCellParentRow = that._focusedCell.parentElement;

            if (focusedCellParentRow) {
                focusedCellInfo = {
                    rowId: focusedCellParentRow.data.$.id,
                    dataField: that._focusedCell.getAttribute('data-field')
                };
            }
        }

        for (let i = 0; i < startOfView; i++) {
            const tr = that._rowsInDOM[i];
            let newIndex = startCoefficient + i;

            if (newIndex >= 0 && (forceUpdate || tr.data.$.index !== newIndex || tr.data.detail)) {
                that._updateVisibleRow(tr, newIndex, tableSettings);
            }

            tr.setAttribute('unused', '');
            tr.setAttribute('aria-hidden', true);
            tr.classList.remove('smart-table-row-detail');
        }

        for (let i = startOfView; i < that._rowsInDOM.length; i++) {
            const tr = that._rowsInDOM[i],
                newIndex = startCoefficient + i;

            if (newIndex < numberOfVirtualRows) {
                tr.removeAttribute('unused');
                tr.removeAttribute('aria-hidden');

                if (forceUpdate || tr.data.$.index !== newIndex || tr.data.parent) {
                    that._updateVisibleRow(tr, newIndex, tableSettings);
                }
            }
            else {
                tr.setAttribute('aria-hidden', true);
            }
        }

        that._start = { view: startOfView, data: startOfData };
        that._focusEquivalentCell(focusedCellInfo);
    }

    /**
     * Updates a visible row with new data (when virtualization is enabled).
     */
    _updateVisibleRow(rowElement, newIndex, tableSettings) {
        const that = this,
            columns = that._columns.filter(col => col.visible);

        if (!columns.length) {
            return
        }

        const rowObject = that._rowsVirtual[newIndex],
            data = rowObject.data,
            id = data.$.id,
            selectionCoefficient = Number(tableSettings.selection),
            update = !data.groupDataField && !rowElement.firstElementChild.classList.contains('group-header') &&
                !rowObject.detail && !rowElement.classList.contains('smart-table-row-detail') && rowElement.childElementCount > 1;

        rowElement.className = '';

        if (update) {
            const attributes = rowElement.attributes;

            while (attributes.length > 0) {
                rowElement.removeAttribute(attributes[0].name);
            }
        }
        else {
            /* To do perf. test.
            while (rowElement.childNodes.length > 0) {
                rowElement.childNodes[0].remove();
            }*/
            rowElement.innerHTML = '';
        }

        if (data.groupDataField) {
            that._createGroupHeader(data, undefined, rowElement);
            return;
        }

        if (rowObject.detail) {
            that._createRowDetailOnDemand(rowElement, rowObject, data);
            return;
        }

        rowElement.setAttribute('aria-rowindex', data.$.index + 1);

        that._processAndRenderSelection(data, rowElement, tableSettings.hierarchical, update);

        for (let j = 0; j < columns.length; j++) {
            const column = columns[j];
            let td = update ? rowElement.children[j + selectionCoefficient] :
                document.createElement('td');
            let isNewCell = false;

            if (td && ((that.grouping && !data.groupDataField) || (that.dataSource && that.dataSource.groupBy && that.dataSource.groupBy.length > 0))) {
                td.removeAttribute('colspan');
            }

            if (!td) {
                if (update) {
                    td = document.createElement('td');
                    isNewCell = true;
                    rowElement.appendChild(td);
                }
                else {
                    continue;
                }
            }

            if (update) {
                td.className = '';
            }

            td.setAttribute('data-field', column.dataField);
            td.setAttribute('aria-colindex', j + 1 + selectionCoefficient);

            let value = that._formatCellValue(rowObject, column, td);
            let isTreeCell;

            if (isNewCell) {
                that._setCellContent(td, value, isTreeCell);
            }

            if (column.freeze) {
                td.classList.add('freeze-' + (column.freeze === 'far' ? 'far' : 'near'));
            }

            if (column.responsivePriority) {
                td.classList.add('priority-' + column.responsivePriority);
            }

            if (column.allowEdit === false) {
                td.classList.add('no-edit');
                td.setAttribute('aria-readonly', true);
            }
            else {
                td.removeAttribute('aria-readonly');
            }

            if (j === 0 && tableSettings.hierarchical) {
                const childrenFiltered = that._areChildrenFiltered(data);

                if (!data.leaf) {
                    td.classList.add('tree-cell');
                    isTreeCell = childrenFiltered;
                }

                if (data.level) {
                    td.classList.add('outline-level-' + Math.min(data.level, 10));

                    if (data.leaf || !childrenFiltered) {
                        td.classList.add('tree-leaf');
                    }
                }
            }

            if (column.templateElement) {
                if (isNewCell && that.grouping) {
                    const templateElement = column.templateElement + '';
                    const templateChild = td;

                    if (templateElement.indexOf('{{value}}') >= 0) {
                        templateChild.innerHTML = templateElement.replace(/{{value}}/ig, '<div class="smart-table-cell-template">' + data[column.dataField] + '</div>');
                    }
                    else {
                        templateChild.innerHTML = templateElement;
                    }
                }
                else if (tableSettings.hierarchical && that.grouping && data.leaf) {
                    const templateElement = column.templateElement + '';
                    const templateChild = td;

                    const shouldUpdate = templateChild.firstElementChild && (templateChild.firstElementChild.hasAttribute('ng-version') || templateChild.innerHTML.indexOf('ng-version') >= 0) ? false : true;

                    if (shouldUpdate) {
                        if (templateChild.firstElementChild && !templateChild.firstElementChild.classList.contains('.smart-table-cell-template')) {
                            const html = templateChild.innerHTML;
                            const template = templateElement.substring(templateElement.lastIndexOf('</'));
                            const updateHTML = template !== html.substring(html.lastIndexOf('</'));

                            if (updateHTML) {
                                if (templateElement.indexOf('{{value}}') >= 0) {
                                    templateChild.innerHTML = templateElement.replace(/{{value}}/ig, '<div class="smart-table-cell-template">' + data[column.dataField] + '</div>');
                                }
                                else {
                                    templateChild.innerHTML = templateElement;
                                }
                            }
                        }
                    }
                }

                if (isTreeCell && !td.querySelector('.hierarchy-arrow')) {
                    that._setCellContent(td, value, isTreeCell);

                    const templateChild = td.children[0].children[1];
                    const templateElement = column.templateElement + '';

                    if (templateElement.indexOf('{{value}}') >= 0) {
                        templateChild.innerHTML = templateElement.replace(/{{value}}/ig, '<div class="smart-table-cell-template">' + data[column.dataField] + '</div>');
                    }
                    else {
                        templateChild.innerHTML = templateElement;
                    }
                }
                else if (tableSettings.hierarchical && !that.grouping && data.leaf) {
                    const templateChild = td;
                    const shouldUpdate = templateChild.firstElementChild && (templateChild.firstElementChild.hasAttribute('ng-version') || templateChild.innerHTML.indexOf('ng-version') >= 0) ? false : true;

                    if (shouldUpdate) {
                        that._setCellContent(td, value, false);

                        const templateElement = column.templateElement + '';

                        if (templateElement.indexOf('{{value}}') >= 0) {
                            templateChild.innerHTML = templateElement.replace(/{{value}}/ig, '<div class="smart-table-cell-template">' + data[column.dataField] + '</div>');
                        }
                        else {
                            templateChild.innerHTML = templateElement;
                        }
                    }
                }

                if (!update) {
                    const templateElement = column.templateElement + '';

                    const templateChild = !isTreeCell ? td : td.children[0].children[1];

                    if (templateElement.indexOf('{{value}}') >= 0) {
                        templateChild.innerHTML = templateElement.replace(/{{value}}/ig, '<div class="smart-table-cell-template">' + data[column.dataField] + '</div>');
                    }
                    else {
                        templateChild.innerHTML = templateElement;
                    }
                }

                let templateFirstChild = !isTreeCell ? td.firstElementChild : td.children[0].children[1].firstElementChild;

                if (!templateFirstChild && tableSettings.hierarchical) {
                    that._setCellContent(td, value, false);

                    const templateChild = td;
                    const templateElement = column.templateElement + '';

                    if (templateElement.indexOf('{{value}}') >= 0) {
                        templateChild.innerHTML = templateElement.replace(/{{value}}/ig, '<div class="smart-table-cell-template">' + data[column.dataField] + '</div>');
                    }
                    else {
                        templateChild.innerHTML = templateElement;
                    }

                    templateFirstChild = !isTreeCell ? td.firstElementChild : td.children[0].children[1].firstElementChild;
                }

                if (column.templateElementSettings) {
                    column.templateElementSettings(data[column.dataField], id, templateFirstChild);
                }
                else if (column.templateElement.indexOf('{{value}}') >= 0) {
                    const templateElement = td.querySelector('.smart-table-cell-template');

                    templateElement.textContent = data[column.dataField];
                }
            }
            else {
                if (column.formatFunction) {
                    that._setCellContent(td, value, isTreeCell);
                }
                else {
                    that._setCellContent(td, value, isTreeCell);
                }
            }

            if (that.onCellRender) {
                that.onCellRender(data, column.dataField, data[column.dataField], td);
            }

            that._applyConditionalFormattingToCell(td, column.dataField, data.$.index);

            if (!update) {
                rowElement.appendChild(td);
            }
        }

        rowElement.data = data;
        rowElement.setAttribute('row-id', id);

        if (that._disabledSelection.indexOf(id) !== -1) {
            rowElement.removeAttribute('aria-selected');
            rowElement.classList.add('disable-select');

            if (tableSettings.selection) {
                rowElement.firstElementChild.firstElementChild.setAttribute('aria-disabled', true);
            }
        }

        if (data.expanded) {
            if (that._expandedIds.indexOf(id) === -1) {
                that._expandedIds.push(id);
            }

            rowElement.setAttribute('aria-expanded', true);
            rowElement.classList.add('expanded');
        }
        else if (data.expanded === false) {
            rowElement.setAttribute('aria-expanded', false);
        }

        if (data.level && that._isCollapsed(data)) {
            rowElement.setAttribute('aria-hidden', true);
            rowElement.classList.add('collapsed', 'smart-hidden');
        }
    }

    /**
     * Creates row detail on demand.
     */
    _createRowDetailOnDemand(rowElement, rowObject, data) {
        const that = this,
            colspan = Number(that.selection) + that._columns.filter(col => col.visible).length;

        rowElement.data = Object.assign(data, { detail: true });
        rowElement.classList.add('smart-table-row-detail');
        rowElement.removeAttribute('aria-rowindex');
        rowElement.removeAttribute('row-id');
        rowElement.innerHTML = `<td colspan="${colspan}"><div class="smart-table-detail-container">${that._applyRowDetailTemplate(rowObject)}</div></td>`;
    }

    /**
     * Expand/collapse arrow click handler (when virtualization is enabled).
     */
    _hierarchyArrowClickHandlerVirtualization(groupHeader, doNotFireEvent) {
        const that = this,
            isTreeMode = !that.grouping,
            tableContainer = that.$.tableContainer,
            htmlContext = { nextRow: groupHeader.nextElementSibling, tbody: tableContainer.children[1] },
            groupData = groupHeader.data,
            completedChildren = [],
            newRows = [],
            maxNewRows = Math.ceil((that.$.virtualizationContainer.$.scrollViewerContainer.offsetHeight - tableContainer.firstElementChild.offsetHeight) / that._rowHeight);

        function complete() {
            that._ignoreVerticalChange = true;
            groupData.expanded = !groupData.expanded;

            if (isTreeMode) {
                if (groupData.expanded) {
                    if (that._expandedIds.indexOf(groupData.$.id) === -1) {
                        that._expandedIds.push(groupData.$.id);
                    }

                    that.$.fireEvent('expand', { id: groupData.$.id, record: groupData });
                }
                else {
                    that._expandedIds = that._expandedIds.filter(id => id !== groupData.$.id);
                    that.$.fireEvent('collapse', { id: groupData.$.id, record: groupData });
                }

                that._updateState('expanded');
            }
            else if (doNotFireEvent !== true) {
                const findItem = (items) => {
                    for (let i = 0; i < items.length; i++) {
                        const item = items[i];

                        if (item.$.id === groupData.$.id) {
                            return item;
                        }

                        if (item.children) {
                            let subItem = findItem(item.children);

                            if (subItem) {
                                return subItem;
                            }
                        }
                    }

                    return null;
                }

                const currentDataItem = findItem(that.dataSource.boundHierarchy);

                if (currentDataItem) {
                    currentDataItem.expanded = groupData.expanded;
                }

                let path = '' + groupData.$.id;
                path = path.replace('Item', '').replace(/_/ig, '.');

                if (groupData.expanded) {
                    that.$.fireEvent('group', { action: 'expand', path: path, dataField: groupData.groupDataField, label: groupData.label });
                }
                else {
                    that.$.fireEvent('group', { action: 'collapse', path: path, dataField: groupData.groupDataField, label: groupData.label });
                }
            }

            for (const newRow of newRows) {
                newRow.remove();
            }

            let scrollbar = that.$.virtualizationContainer.$.verticalScrollBar,
                scrollbarValue = that.$.virtualizationContainer.$.verticalScrollBar.value;

            that._refreshDataRows();

            scrollbarValue = Math.min(scrollbar.max, scrollbarValue);
            scrollbar.value = scrollbarValue;
            delete that._ignoreVerticalChange;
            that._onVerticalChange({ detail: { value: scrollbarValue } }, true);
        }

        function check() {
            if (completedChildren.length === 0) {
                complete();
            }
            else {
                requestAnimationFrame(() => check());
            }
        }

        function expandChildren(siblings) {
            for (const child of siblings) {
                if (newRows.length >= maxNewRows) {
                    break;
                }

                if (child.$.filtered === false) {
                    continue;
                }

                newRows.push(
                    that._expandSingleChildRowVirtualization(child, htmlContext, completedChildren)
                );

                if (child.children && child.expanded) {
                    expandChildren(child.children);
                    //requestAnimationFrame(() => expandChildren(child.children));
                }
            }
        }

        function collapseChildren(siblings) {
            siblings.forEach(child => {
                that._collapseSingleChildRow(tableContainer.querySelector(`tr[row-id="${child.$.id}"]:not([unused])`), completedChildren);

                if (child.children) {
                    collapseChildren(child.children);
                }
            });
        }

        if (groupData.expanded) {
            collapseChildren(groupData.children);
        }
        else {
            requestAnimationFrame(() => expandChildren(groupData.children));
        }

        groupHeader.setAttribute('aria-expanded', !groupData.expanded);
        groupHeader.classList.toggle('expanded', !groupData.expanded);
        requestAnimationFrame(() => check());
    }

    /**
     * Creates a single DOM row and expands it.
     */
    _expandSingleChildRowVirtualization(data, htmlContext, completedChildren) {
        const that = this,
            rowObject = that.rowById[data.$.id],
            fragment = document.createDocumentFragment();
        let childRow;

        if (!rowObject) {
            return;
        }

        if (rowObject.data.groupDataField) {
            childRow = that._createGroupHeader(rowObject.data, fragment);
        }
        else {
            childRow = that._createDataRow(rowObject, fragment, { virtualization: true, hierarchical: true, selection: that.selection }).row;
        }

        if ([...htmlContext.tbody.children].indexOf(htmlContext.nextRow) === -1) {
            let skipAppend = false;

            if (data.children && data.children.length === 0) {
                skipAppend = true;
            }

            if (!data.children) {
                skipAppend = true;
            }

            if (that._rowsInDOM && that._rowsInDOM.length === that.rows.length) {
                skipAppend = true;
            }

            if (!skipAppend) {
                htmlContext.tbody.appendChild(fragment);
            }
        }
        else {
            htmlContext.tbody.insertBefore(fragment, htmlContext.nextRow);
        }

        that._expandSingleChildRow(childRow, completedChildren);

        return childRow;
    }

    /**
     * Gets what part of max has been scrolled (when virtualization is enabled).
     */
    _getFractionOfMax() {
        const that = this;

        if (!that.isRendered || !that.virtualization) {
            return null;
        }

        function getVertical() {
            const verticalScrollBar = that.$.virtualizationContainer.$.verticalScrollBar,
                max = verticalScrollBar.max;

            if (max === 0) {
                return 0;
            }

            return verticalScrollBar.value / max;
        }

        function getHorizontal() {
            const horizontalScrollBar = that.$.virtualizationContainer.$.horizontalScrollBar,
                max = horizontalScrollBar.max;

            if (max === 0) {
                return 0;
            }

            return horizontalScrollBar.value / max;
        }

        return { vertical: getVertical(), horizontal: getHorizontal() };
    }

    /**
     * Scrolls to a fraction of max (when virtualization is enabled).
     */
    _setFractionOfMax(fractionOfMax) {
        const that = this;

        if (!that.virtualization || fractionOfMax === null) {
            return;
        }

        const virtualizationContainer = this.$.virtualizationContainer,
            verticalScrollBar = virtualizationContainer.$.verticalScrollBar,
            horizontalScrollBar = virtualizationContainer.$.horizontalScrollBar;

        verticalScrollBar.value = verticalScrollBar.max * fractionOfMax.vertical;
        horizontalScrollBar.value = horizontalScrollBar.max * fractionOfMax.horizontal;
    }

    /**
     * Refreshes horizontal scrollbar (when virtualization is enabled).
     */
    _refreshHorizontalScrollbar() {
        const virtualizationContainer = this.$.virtualizationContainer;

        if (!virtualizationContainer) {
            return;
        }

        const scrollViewerContainer = virtualizationContainer.$.scrollViewerContainer,
            horizontalScrollBar = virtualizationContainer.$.horizontalScrollBar,
            verticalScrollBar = virtualizationContainer.$.verticalScrollBar,
            scrollWidth = virtualizationContainer.$.scrollViewerContentContainer.offsetWidth - scrollViewerContainer.offsetWidth;
        let operation, horizontalScrollBarOffsetHeight;

        if (scrollWidth > 0 && !scrollViewerContainer.classList.contains('hscroll')) {
            scrollViewerContainer.classList.add('hscroll');
            operation = 'add';
        }
        else if (scrollWidth <= 0 && scrollViewerContainer.classList.contains('hscroll')) {
            horizontalScrollBarOffsetHeight = horizontalScrollBar.offsetHeight;
            scrollViewerContainer.classList.remove('hscroll');
            operation = 'subtract';
        }

        if (virtualizationContainer.scrollWidth !== scrollWidth) {
            virtualizationContainer.scrollWidth = scrollWidth;
        }

        if (!virtualizationContainer.computedVerticalScrollBarVisibility) {
            return;
        }

        if (operation === 'add') {
            horizontalScrollBarOffsetHeight = horizontalScrollBar.offsetHeight;
            verticalScrollBar.max += horizontalScrollBarOffsetHeight;
        }
        else if (operation === 'subtract') {
            verticalScrollBar.max -= horizontalScrollBarOffsetHeight;
        }
    }

    /**
     * Scrolls to a cell (when virtualization is enabled).
     */
    _scrollToVirtualization(key, sibling) {
        const that = this;

        if (!that.virtualization) {
            return;
        }

        const virtualizationContainer = that.$.virtualizationContainer,
            scrollViewerContentContainer = virtualizationContainer.$.scrollViewerContentContainer,
            verticalScrollBar = virtualizationContainer.$.verticalScrollBar,
            horizontalScrollBar = virtualizationContainer.$.horizontalScrollBar,
            tableContainer = that.$.tableContainer,
            scrollViewerContentContainerOffsetLeft = scrollViewerContentContainer.offsetLeft,
            scrollViewerContentContainerOffsetTop = scrollViewerContentContainer.offsetTop,
            previousValue = verticalScrollBar.value;
        let siblingOffsetLeft, siblingOffsetTop;

        if (sibling) {
            siblingOffsetLeft = sibling.offsetLeft;
            siblingOffsetTop = sibling.offsetTop;
        }

        switch (key) {
            case 'nextArrow': {
                if (!sibling || !virtualizationContainer.computedHorizontalScrollBarVisibility) {
                    return;
                }

                const difference = scrollViewerContentContainerOffsetLeft + siblingOffsetLeft +
                    sibling.offsetWidth - virtualizationContainer.offsetWidth;

                if (difference > 0) {
                    horizontalScrollBar.value += difference + verticalScrollBar.offsetWidth;
                }

                break;
            }
            case 'prevArrow': {
                if (!sibling ||
                    !virtualizationContainer.computedHorizontalScrollBarVisibility ||
                    siblingOffsetLeft >= -scrollViewerContentContainerOffsetLeft) {
                    return;
                }

                horizontalScrollBar.value = siblingOffsetLeft - scrollViewerContentContainerOffsetLeft - horizontalScrollBar.value;
                break;
            }
            case 'ArrowUp': {
                const headerHeight = tableContainer.firstElementChild.offsetHeight,
                    difference = headerHeight - scrollViewerContentContainerOffsetTop - siblingOffsetTop;

                if (difference <= 0) {
                    return;
                }

                let focusedCellInfo;

                if (that._focusedCell) {
                    const focusedCellParentRow = that._focusedCell.parentElement;

                    if (focusedCellParentRow) {
                        focusedCellInfo = {
                            rowId: focusedCellParentRow.data.$.id,
                            dataField: that._focusedCell.getAttribute('data-field')
                        };
                    }
                }

                const newValue = Math.max(0, previousValue - difference);

                if (newValue !== previousValue) {
                    verticalScrollBar.value = newValue;
                    that._focusEquivalentCell(focusedCellInfo);
                }

                break;
            }
            case 'ArrowDown': {
                const difference = scrollViewerContentContainerOffsetTop + siblingOffsetTop +
                    sibling.offsetHeight - virtualizationContainer.offsetHeight;

                if (difference <= 0) {
                    return;
                }

                const newValue = Math.min(verticalScrollBar.max, previousValue + difference);

                if (newValue !== previousValue) {
                    verticalScrollBar.value = newValue;
                }

                break;
            }
            case 'Home':
            case 'End':
                if (!virtualizationContainer.computedHorizontalScrollBarVisibility) {
                    return;
                }

                horizontalScrollBar.value = key === 'Home' ? 0 : horizontalScrollBar.max;
                break;
        }
    }

    /**
     * Gets expanded groups.
     */
    _getExpandedGroups(boundHierarchy) {
        const that = this,
            expandedGroups = [];

        if (!boundHierarchy) {
            return [];
        }

        function process(siblings) {
            siblings.forEach(sibling => {
                if (sibling.expanded) {
                    expandedGroups.push({
                        groupDataField: sibling.groupDataField,
                        label: sibling.label,
                        ancestorSignature: that._getGroupAncestorSignature(sibling)
                    });
                }

                if (sibling.children && sibling.children.length > 0 &&
                    sibling.children[0].leaf === false) {
                    process(sibling.children);
                }
            });
        }

        process(boundHierarchy);
        return expandedGroups;
    }

    /**
     * Gets a group's ancestor "signature".
     */
    _getGroupAncestorSignature(group) {
        const signature = [];
        let parent = group.parent;

        while (parent) {
            signature.push({
                groupDataField: parent.groupDataField, label: parent.label
            });
            parent = parent.parent;
        }

        return JSON.stringify(signature);
    }

    /**
     * Restores expanded groups.
     */
    _restoreExpandedGroups(previouslyExpandedGroups) {
        if (previouslyExpandedGroups.length === 0) {
            return;
        }

        const that = this,
            dataSource = that.dataSource,
            groupIndexesToExpand = [];

        function process(siblings) {
            if (!siblings) {
                return;
            }

            siblings.forEach((sibling, index) => {
                if (previouslyExpandedGroups.some(group => {
                    return group.groupDataField === sibling.groupDataField &&
                        group.label === sibling.label &&
                        group.ancestorSignature === that._getGroupAncestorSignature(sibling)
                })) {
                    let id = sibling.$.id;

                    if (typeof id === 'string') {
                        //NOTE: When items do not have ids set, the DataAdapter sets a prefix 'Item' + uid
                        //Handles when the id begins with the default 'Item' name
                        id = id.replace('Item', '').replace(/_/g, '.');
                    }

                    if (sibling.level === 0) {
                        groupIndexesToExpand.push(index);
                    }
                    else {
                        groupIndexesToExpand.push(id);
                    }
                }

                if (sibling.children && sibling.children.length > 0 &&
                    sibling.children[0].leaf === false) {
                    process(sibling.children);
                }
            });
        }

        process(dataSource.boundHierarchy);
        const fireEvent = that._doNotFireEvent;
        that._doNotFireEvent = true;
        groupIndexesToExpand.forEach(groupIndex => that.expandGroup(groupIndex));
        that._doNotFireEvent = fireEvent;
    }
});
