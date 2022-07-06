
/* Smart UI v14.1.1 (2022-07-04) 
Copyright (c) 2011-2022 jQWidgets. 
License: https://htmlelements.com/license/ */ //

/**
 * Tree Item custom element.
 */
Smart('smart-tree-item', class TreeItem extends Smart.MenuItem {
    // Tree Item's properties.
    static get properties() {
        return {
            'selected': {
                value: false,
                type: 'boolean'
            }
        };
    }

    ready() {
        const that = this;

        Object.defineProperty(that, 'hasStyleObserver', {
            get: function () {
                return false;
            }
        });

        super.ready();

        that.setAttribute('role', 'treeitem');
        that.setAttribute('aria-label', that.label);
    }

    propertyChangedHandler(propertyName, oldValue, newValue) {
        const that = this,
            parentTree = that.menu;

        super.propertyChangedHandler(propertyName, oldValue, newValue);

        if (propertyName === 'level') {
            that.level = oldValue;
            return;
        }

        if (propertyName === 'disabled' || propertyName === 'separator' || !parentTree) {
            return;
        }

        const oldContext = parentTree.context;

        parentTree.context = parentTree;

        switch (propertyName) {
            case 'label': {
                const restoreSorting = parentTree.sorted && parentTree.autoSort;

                that.firstElementChild.firstElementChild.firstElementChild.innerHTML = newValue;

                if (restoreSorting) {
                    parentTree._unsortItems(parentTree.$.mainContainer);
                    parentTree._applyGrouping(parentTree.$.mainContainer);
                }

                if (parentTree._state.filter) {
                    parentTree._applyFilter(parentTree._state.filter);
                }

                that.setAttribute('aria-label', newValue);
                break;
            }
            case 'selected':
                that.selected = oldValue;

                if (newValue) {
                    parentTree.select(that);
                }
                else {
                    parentTree.unselect(that);
                }

                break;
            case 'shortcut': {
                let shortcutElement = that.firstElementChild.children[1];

                if (!shortcutElement) {
                    shortcutElement = document.createElement('div');
                    shortcutElement.className = 'smart-tree-item-shortcut';
                    that.firstElementChild.appendChild(shortcutElement);
                }

                shortcutElement.innerHTML = newValue;
                break;
            }
            case 'value':
                if (parentTree.sort && parentTree.sorted && parentTree.autoSort) {
                    parentTree._refreshSorting();
                }

                break;
        }

        parentTree.context = oldContext;
    }

    /**
     * overridden BaseElement method.
     */
    _setId() { }
});

/**
 * Tree Items Group custom element.
 */
Smart('smart-tree-items-group', class TreeItemsGroup extends Smart.MenuItemsGroup {
    // Tree Items Group's properties.
    static get properties() {
        return {
            'selected': {
                value: false,
                type: 'boolean'
            }
        };
    }

    ready() {
        const that = this;

        Object.defineProperty(that, 'hasStyleObserver', {
            get: function () {
                return false;
            }
        });

        super.ready();

        that.setAttribute('role', 'treeitem');
        that.removeAttribute('aria-haspopup');
        that.setAttribute('aria-label', that.label);
    }

    propertyChangedHandler(propertyName, oldValue, newValue) {
        const that = this,
            parentTree = that.menu;

        super.propertyChangedHandler(propertyName, oldValue, newValue);

        if (propertyName === 'level') {
            that.level = oldValue;
            return;
        }

        if (propertyName === 'disabled' || propertyName === 'separator' || !parentTree) {
            return;
        }

        const oldContext = parentTree.context;

        parentTree.context = parentTree;

        switch (propertyName) {
            case 'expanded': {
                that.expanded = oldValue;

                if (newValue) {
                    parentTree.expandItem(that);
                }
                else {
                    parentTree.collapseItem(that);
                }

                break;
            }
            case 'label': {
                const restoreSorting = parentTree.sorted && parentTree.autoSort;

                that.firstElementChild.firstElementChild.firstElementChild.innerHTML = newValue;

                if (restoreSorting) {
                    parentTree._unsortItems(parentTree.$.mainContainer);
                    parentTree._applyGrouping(parentTree.$.mainContainer);
                }

                if (parentTree._state.filter) {
                    parentTree._applyFilter(parentTree._state.filter);
                }

                that.setAttribute('aria-label', newValue);
                break;
            }
            case 'selected':
                that.selected = oldValue;

                if (newValue) {
                    parentTree.select(that);
                }
                else {
                    parentTree.unselect(that);
                }

                break;
            case 'value':
                if (parentTree.sort && parentTree.sorted && parentTree.autoSort) {
                    parentTree._refreshSorting();
                }

                break;
        }

        parentTree.context = oldContext;
    }

    /**
     * overridden BaseElement method.
     */
    _setId() { }
});

/**
 * Tree custom element.
 */
Smart('smart-tree', class Tree extends Smart.Menu {
    // Tree's properties.
    static get properties() {
        return {
            'allowDrag': {
                value: false,
                type: 'boolean'
            },
            'allowDrop': {
                value: false,
                type: 'boolean'
            },
            'autoHideToggleElement': {
                value: false,
                type: 'boolean'
            },
            'autoLoadState': {
                value: false,
                type: 'boolean'
            },
            'autoSaveState': {
                value: false,
                type: 'boolean'
            },
            'autoSort': {
                value: true,
                type: 'boolean'
            },
            'displayLoadingIndicator': {
                value: false,
                type: 'boolean'
            },
            'dragFeedbackFormatFunction': {
                value: null,
                type: 'function?'
            },
            'dragOffset': {
                value: [10, 10],
                type: 'array'
            },
            'editable': {
                value: false,
                type: 'boolean'
            },
            'expandMode': {
                value: 'multiple',
                allowedValues: ['multiple', 'single'],
                type: 'string'
            },
            'filterable': {
                value: false,
                type: 'boolean'
            },
            'filterOnEnter': {
                value: false,
                type: 'boolean'
            },
            'filterInputPlaceholder': {
                value: '',
                type: 'string'
            },
            'filterMember': {
                value: 'label',
                type: 'string'
            },
            'filterMode': {
                value: 'containsIgnoreCase',
                allowedValues: ['contains', 'containsIgnoreCase', 'doesNotContain', 'doesNotContainIgnoreCase', 'equals', 'equalsIgnoreCase', 'startsWith', 'startsWithIgnoreCase', 'endsWith', 'endsWithIgnoreCase'],
                type: 'string'
            },
            'hasThreeStates': {
                value: false,
                type: 'boolean'
            },
            'loadingIndicatorPlaceholder': {
                value: 'Loading...',
                type: 'string'
            },
            'loadingIndicatorPosition': {
                value: 'center',
                allowedValues: ['bottom', 'center', 'top'],
                type: 'string'
            },
            'messages': {
                value: {
                    'en': {
                        'noId': 'smart-tree: Saving and loading the element\'s state are not available if the element has no id.'
                    }
                },
                type: 'object',
                extend: true
            },
            'scrollMode': {
                value: 'scrollbar',
                allowedValues: ['scrollbar', 'scrollButtons'],
                type: 'string'
            },
            'selectedIndexes': {
                value: [],
                type: 'array'
            },
            'selectionDisplayMode': {
                value: 'row',
                allowedValues: ['row', 'label'],
                type: 'string'
            },
            'selectionMode': {
                value: 'one',
                allowedValues: ['none', 'oneOrManyExtended', 'zeroOrMany', 'oneOrMany', 'zeroOrOne', 'zeroAndOne', 'one', 'checkBox', 'radioButton'],
                type: 'string'
            },
            'selectionTarget': {
                value: 'all',
                allowedValues: ['all', 'leaf'],
                type: 'string'
            },
            'showLines': {
                value: false,
                type: 'boolean'
            },
            'showRootLines': {
                value: false,
                type: 'boolean'
            },
            'sort': {
                value: null,
                type: 'function?',
                reflectToAttribute: false
            },
            'sortDirection': {
                value: 'asc',
                allowedValues: ['asc', 'desc'],
                type: 'string'
            },
            'sorted': {
                value: false,
                type: 'boolean'
            },
            'toggleElementPosition': {
                value: 'near',
                allowedValues: ['near', 'far'],
                type: 'string'
            },
            'toggleMode': {
                value: 'dblclick',
                allowedValues: ['click', 'dblclick', 'arrow'],
                type: 'string'
            }
        };
    }

    /**
     * Tree's event listeners.
     */
    static get listeners() {
        return {
            'blur': '_blurHandler',
            'focus': '_focusHandler',
            'keydown': '_keydownHandler',
            'mouseenter': '_mouseenterHandler',
            'mouseleave': '_mouseleaveHandler',
            'resize': '_checkOverflow',
            'styleChanged': '_styleChangedHandler',
            'transitionend': '_overriddenMenuHandler',
            'container.click': '_overriddenMenuHandler',
            'container.mouseout': '_overriddenMenuHandler',
            'container.mouseover': '_overriddenMenuHandler',
            'container.pointerover': '_pointeroverHandler',
            'editInput.blur': '_editInputBlurHandler',
            'filterInput.keydown': '_filterInputKeydownHandler',
            'filterInput.keyup': '_filterInputKeyupHandler',
            'mainContainer.click': '_overriddenMenuHandler',
            'mainContainer.mouseleave': '_overriddenMenuHandler',
            'mainContainer.mouseout': '_overriddenMenuHandler',
            'mainContainer.mouseover': '_overriddenMenuHandler',
            'mainContainer.swipeleft': '_mainContainerSwipeHandler',
            'mainContainer.swiperight': '_mainContainerSwipeHandler',
            'scrollButtonFar.click': '_scrollButtonFarClickHandler',
            'scrollButtonNear.click': '_scrollButtonNearClickHandler',
            'scrollViewer.down': '_scrollViewerDownHandler',
            'scrollViewer.kineticScroll': '_scrollViewerWheelHandler',
            'scrollViewer.touchmove': '_scrollViewerTouchmoveHandler',
            'mainContainer.wheel': '_scrollViewerWheelHandler',
            'document.move': '_moveHandler',
            'document.selectstart': '_selectstartHandler',
            'document.up': '_documentUpHandler'
        };
    }

    /**
     * Tree's required files.
     */
    static get requires() {
        return {
            'Smart.ScrollBar': 'smart.scrollbar.js'
        }
    }

    /**
    * CSS files needed for the element (ShadowDOM)
    */
    static get styleUrls() {
        return [
            'smart.scrollbar.css',
            'smart.scrollviewer.css',
            'smart.tree.css'
        ]
    }

    /**
     * Tree's HTML template.
     */
    template() {
        return `<div id="container" role="presentation">
                    <div class="smart-tree-filter-input-container" role="presentation"><input id="filterInput" class="smart-filter-input" disabled="[[disabled]]" placeholder="[[filterInputPlaceholder]]" type="text" role="searchbox" aria-label="[[filterInputPlaceholder]]" /></div>
                    <smart-repeat-button id="scrollButtonNear" class="smart-tree-scroll-button smart-spin-button smart-scroll-button-near smart-hidden" animation="[[animation]]" unfocusable aria-label="Scroll up">
                        <div id="arrowNear" class="smart-arrow smart-arrow-up"></div>
                    </smart-repeat-button>
                    <smart-scroll-viewer id="scrollViewer" animation="[[animation]]" horizontal-scroll-bar-visibility="hidden" right-to-left="[[rightToLeft]]">
                        <div id="mainContainer" inner-h-t-m-l=\'[[innerHTML]]\' class="smart-tree-main-container" role="presentation">
                            <content></content>
                        </div>
                        <input type="text" id="editInput" class="smart-tree-edit-input smart-hidden" />
                    </smart-scroll-viewer>
                    <smart-repeat-button id="scrollButtonFar" class="smart-tree-scroll-button smart-spin-button smart-scroll-button-far smart-hidden" animation="[[animation]]" unfocusable aria-label="Scroll down">
                        <div id="arrowFar" class="smart-arrow smart-arrow-down"></div>
                    </smart-repeat-button>
                    <div id="loadingIndicatorContainer" class="smart-loader-container smart-hidden" role="presentation">
                        <span id="loadingIndicator" class="smart-loader" role="img" aria-label="[[loadingIndicatorPlaceholder]]"></span>
                        <span id="loadingIndicatorPlaceHolder" class="smart-loader-label smart-hidden">[[loadingIndicatorPlaceholder]]</span>
                    </div>
                </div>`;
    }

    /**
     * Called when the element is detached from the DOM.
     */
    detached() {
        const that = this,
            dragDetails = that._dragDetails;

        super.detached();

        if (!dragDetails) {
            return;
        }

        const targetTree = Smart.Tree.hoveredTree,
            targetItem = Smart.Tree.hoveredItem;

        delete that._dragDetails;
        delete Smart.Tree.treeItemDragged;
        delete Smart.Tree.hoveredTree;
        delete Smart.Tree.hoveredItem;
        that.$.scrollViewer._scrollView.disableSwipeScroll = false;

        if (!dragDetails.FeedbackShown) {
            return;
        }

        targetItem.classList.remove('drop-target', 'top', 'bottom');

        document.body.classList.remove('smart-dragging');
        dragDetails.Feedback.remove();

        if (targetTree) {
            clearInterval(targetTree._dragInterval);
        }
    }

    /**
     * Adds an item after another item as a sibling.
     *
     * @param {HTMLElement} item A smart-tree-item/smart-tree-items-group to add to the Tree.
     * @param {HTMLElement/String} sibling The smart-tree-item/smart-tree-items-group (or its id or numeric path) to add the item after.
     */
    addAfter(item, sibling) {
        const that = this;

        sibling = that.getItem(sibling);

        if (sibling === undefined) {
            return;
        }

        that.addTo(item, sibling.parentItem, sibling, true);
    }

    /**
     * Adds an item before another item as a sibling.
     *
     * @param {HTMLElement} item A smart-tree-item/smart-tree-items-group to add to the Tree.
     * @param {HTMLElement/String} sibling The smart-tree-item/smart-tree-items-group (or its id or numeric path) to add the item before.
     */
    addBefore(item, sibling) {
        const that = this;

        sibling = that.getItem(sibling);

        if (sibling === undefined) {
            return;
        }

        that.addTo(item, sibling.parentItem, sibling);
    }

    /**
     * Adds an item as the last child of a parent item.
     *
     * @param {HTMLElement} item A smart-tree-item/smart-tree-items-group to add to the Tree.
     * @param {HTMLElement/String} parent Optional The smart-tree-items-group (or its id or numeric path) to add the item to.
     */
    addTo(item, parent) {
        const that = this;

        if (!(item instanceof Smart.TreeItem || item instanceof Smart.TreeItemsGroup)) {
            if (typeof item === 'string') {
                const treeItem = document.createElement('smart-tree-item');

                treeItem.label = item;
                item = treeItem;
            }
            else if (item && item.label) {
                const treeItem = document.createElement('smart-tree-item');

                treeItem.label = item.label;
                item = treeItem;
            }
            else {
                return;
            }
        }

        let level, container;

        item.isDirty = false;

        if (parent === undefined) {
            parent = that.$.mainContainer;
            level = 1;
            container = parent;
        }
        else {
            parent = that.getItem(parent);

            if (parent instanceof Smart.TreeItemsGroup === false) {
                // creates a new tree items group and inserts the new item to it.
                const newGroup = document.createElement('smart-tree-items-group');

                newGroup.innerHTML = parent.innerHTML;
                newGroup.appendChild(item);

                that.addBefore(newGroup, parent);
                parent.remove();
                return;
            }

            level = parent.level + 1;
            container = parent.itemContainer;
        }

        that._createItemHTMLStructure(item, level, parent, container.childElementCount, 0);

        const restoreSorting = that.sorted && that.autoSort,
            filterQuery = that._state.filter,
            oldSelectedIndexes = that.selectedIndexes.slice(0);

        if (restoreSorting) {
            that._unsortItems(that.$.mainContainer);
        }

        if (item instanceof Smart.TreeItemsGroup) {
            Array.from(item.querySelectorAll('smart-tree-item, smart-tree-items-group')).forEach(subItem => subItem.isDirty = false);
            that._processHTML(item, level + 1, false);
        }

        let sibling = arguments[2];

        if (sibling && arguments[3]) {
            sibling = sibling.nextElementSibling;
        }

        if (sibling) {
            container.insertBefore(item, sibling);
            that._menuItems = {};
            that._refreshItemPaths(that.$.mainContainer, true, undefined, that.sorted && !that.autoSort);
        }
        else {
            container.appendChild(item);
        }

        if (restoreSorting) {
            that._applyGrouping(that.$.mainContainer);
        }

        if (filterQuery) {
            that._applyFilter(filterQuery);
        }

        that._checkOverflow();
        that._expandItemsByDefault();

        that.selectedIndexes = [];
        that._applySelection(true, oldSelectedIndexes);
    }

    getSelectedValues() {
        const that = this;
        const values = [];

        for (let i = 0; i < that.selectedIndexes.length; i++) {
            const item = that._menuItems[that.selectedIndexes[i]];

            if (item.hasAttribute('value')) {
                values.push(item.getAttribute('value'));
            }
            else if (item.hasAttribute('label')) {
                values.push(item.getAttribute('label'));
            }

        }

        return values;
    }

    unselectValues(values) {
        const that = this;

        if (!values) {
            return;
        }

        Object.keys(that._menuItems).forEach((key) => {
            const item = that._menuItems[key];
            let itemValue = null;

            if (item.hasAttribute('value')) {
                itemValue = item.getAttribute('value');
            }
            else if (item.hasAttribute('label')) {
                itemValue = item.getAttribute('label');
            }

            if (typeof values === 'string') {
                if (values === itemValue) {
                    that.unselect(key);
                }
            }
            else {
                if (values.indexOf(itemValue) >= 0) {
                    that.unselect(key);
                }
            }
        });
    }

    setSelectedValues(values) {
        const that = this;

        if (!values) {
            return;
        }

        Object.keys(that._menuItems).forEach((key) => {
            const item = that._menuItems[key];
            let itemValue = null;

            if (item.hasAttribute('value')) {
                itemValue = item.getAttribute('value');
            }
            else if (item.hasAttribute('label')) {
                itemValue = item.getAttribute('label');
            }

            if (typeof values === 'string') {
                if (values === itemValue) {
                    if (that._canItemBeSelected(item)) {
                        that._handleSelection(item, { type: 'programmatic' });
                    }
                }
            }
            else {
                if (values.indexOf(itemValue) >= 0) {
                    if (that._canItemBeSelected(item)) {
                        that._handleSelection(item, { type: 'programmatic' });
                    }
                }
            }
        });
    }

    /**
     * Clears selection.
     */
    clearSelection() {
        const that = this,
            oldSelectedIndexes = that.selectedIndexes.slice(0);

        that.selectedIndexes = [];
        that._applySelection(false, oldSelectedIndexes);
    }

    /**
     * Collapses all items.
     *
     * @param {Boolean} animation Optional If set to false, disables collapse animation even if animation is enabled for the element.
     */
    collapseAll(animation) {
        const that = this,
            animationType = that.animation,
            restoreAnimation = animation === false && that.hasAnimation;

        if (restoreAnimation) {
            that.animation = 'none';
        }

        that._collapseAll(true);

        if (restoreAnimation) {
            that.animation = animationType;
        }
    }

    /**
     * Makes sure an item is visible by scrolling to it.
     *
     * @param {HTMLElement/String} item smart-tree-item/smart-tree-items-group (or its id or numeric path).
     */
    ensureVisible(item) {
        const that = this;

        item = that.getItem(item);

        if (item === undefined || item.hidden) {
            return;
        }

        let animation = false;

        if (item.level > 1 && !that._isBranchExpanded(item)) {
            super.expandItem(item.parentItem, undefined, true);
            animation = that.hasAnimation;

            if (animation) {
                that._ensureVisibleOnTransitionend = item;
            }
        }

        if (!animation) {
            that._ensureVisible(item);
        }
    }

    /**
     * Expands all items.
     *
     * @param {Boolean} animation Optional If set to false, disables expand animation even if animation is enabled for the element.
     */
    expandAll(animation) {
        const that = this,
            animationType = that.animation,
            restoreAnimation = animation === false && that.hasAnimation;
        let level = 1,
            treeItemsGroups = (that.enableShadowDOM ? that.shadowRoot : that).querySelectorAll('smart-tree-items-group[level="1"]');

        if (restoreAnimation) {
            that.animation = 'none';
        }

        while (treeItemsGroups.length > 0) {
            for (let i = 0; i < treeItemsGroups.length; i++) {
                const currentTreeItemsGroup = treeItemsGroups[i];

                if (currentTreeItemsGroup.expanded) {
                    continue;
                }

                that._menuItemsGroupSelectionHandler(currentTreeItemsGroup, { target: currentTreeItemsGroup, type: 'expand' });
            }

            level++;
            treeItemsGroups = (that.enableShadowDOM ? that.shadowRoot : that).querySelectorAll('smart-tree-items-group[level="' + level + '"]');
        }

        if (restoreAnimation) {
            that.animation = animationType;
        }
    }

    /**
     * Expands an item.
     *
     * @param {HTMLElement/String} item smart-tree-item/smart-tree-items-group (or its id or numeric path).
     * @param {Boolean} animation Optional If set to false, disables expand animation even if animation is enabled for the element.
     */
    expandItem(item, animation) {
        const that = this;

        item = that.getItem(item);

        if (item === undefined || item instanceof Smart.TreeItemsGroup === false ||
            (item && item.container && that._isContainerOpened(item.container.level, item.container))) {
            return;
        }

        //Checks whether the item is lazy loaded or not yet
        if (Smart.Menu.processTimer !== undefined) {
            that._lazyInitItems();
        }

        const restoreAnimation = animation === false && that.hasAnimation,
            animationType = that.animation;

        if (restoreAnimation) {
            that.animation = 'none';
        }

        that._discardKeyboardHover();

        that._menuItemsGroupSelectionHandler(item, { target: item, type: 'expand' }, arguments[2]);

        if (restoreAnimation) {
            that.animation = animationType;
        }
    }

    /**
     * Filters the Tree.
     *
     * @param {String} filterQuery Filter query.
     */
    filter(filterQuery) {
        const that = this;

        if (that.filterable) {
            that._applyFilter(filterQuery);
            that.$.filterInput.value = filterQuery;
        }
    }

    /**
     * Gets the Tree's state.
     */
    getState() {
        return JSON.parse(JSON.stringify(this._state));
    }

    /**
     * Inserts an item at the given position.
     *
     * @param {HTMLElement/Object} item A smart-tree-item/smart-tree-items-group (or an Object to create an item from) to add to the Tree.
     * @param {String} path Optional The path to insert the item at.
     */
    insert(item, path) {
        const that = this;
        let element;

        function createTreeItem(item) {
            const subItems = item[that.itemsMember],
                tagName = item.tagName === 'smart-tree-items-group' || Array.isArray(subItems) ? 'smart-tree-items-group' : 'smart-tree-item',
                element = document.createElement(tagName);

            element.isDirty = false;

            if (item.disabled) {
                element.disabled = true;
            }

            if (item[that.displayMember]) {
                element.label = item[that.displayMember];
            }

            if (item.selected) {
                element.selected = true;
            }

            if (item.separator) {
                element.separator = true;
            }

            if (item[that.valueMember]) {
                element.value = item[that.valueMember];
            }

            if (tagName === 'smart-tree-items-group') {
                if (item.expanded) {
                    element.expanded = true;
                }

                if (subItems) {
                    for (let i = 0; i < subItems.length; i++) {
                        element.appendChild(createTreeItem(subItems[i]));
                    }
                }
            }
            else if (item.shortcut) {
                element.shortcut = item.shortcut;
            }

            return element;
        }

        if (item instanceof Smart.TreeItem || item instanceof Smart.TreeItemsGroup) {
            if (that.contains(item)) {
                return;
            }

            item.isDirty = false;
            element = item;
        }
        else if (typeof item === 'object' && item.constructor === Object) {
            element = createTreeItem(item);
        }
        else {
            return;
        }

        if (path === undefined) {
            that.addTo(element);
            return;
        }

        if (typeof path === 'number') {
            path = path.toString();
        }
        else if (path instanceof Smart.TreeItem || path instanceof Smart.TreeItemsGroup) {
            if (!that.contains(path)) {
                return;
            }

            path = path.path;
        }
        else if (typeof path !== 'string') {
            return;
        }

        const pathParts = path.split('.');
        let parent, sibling;

        if (pathParts.length === 1) {
            sibling = that._menuItems[pathParts[0]];

            if (!sibling) {
                that.addTo(element);
            }
            else {
                that.addBefore(element, sibling);
            }
        }
        else {
            sibling = that._menuItems[path];
            parent = that._menuItems[pathParts.slice(0, pathParts.length - 1).join('.')];

            if (sibling) {
                that.addBefore(element, sibling);
            }
            else if (parent && parent instanceof Smart.TreeItemsGroup) {
                that.addTo(element, parent);
            }
        }
    }

    /**
     * Loads the Tree's state.
     *
     * @param {Object} state Optional An object returned by one of the methods getState or saveState.
     */
    loadState(state) {
        const that = this,
            oldSelectedIndexes = that.selectedIndexes.slice(0),
            selectedIndexes = [];

        if (!state) {
            if (!that.id) {
                that.warn(that.localize('noId'));
                return;
            }

            state = window.localStorage.getItem('smartTree' + that.id);

            if (!state) {
                return;
            }
        }

        if (typeof state === 'string') {
            state = JSON.parse(state);
        }

        if (state.filter && !that.filterable) {
            state.filter = '';
        }

        let filteringChanged = state.filter !== that._state.filter,
            sortingChanged = state.sorted !== that.sorted;

        if (sortingChanged) {
            that.sorted = state.sorted;
            that._updateState('sorted', that.sorted);

            if (state.sorted) {
                that._applyGrouping(that.$.mainContainer);
            }
            else {
                that._unsortItems(that.$.mainContainer);
            }

            if (state.filter || filteringChanged) {
                that._applyFilter(state.filter);
                that.$.filterInput.value = state.filter;
            }
        }
        else if (filteringChanged) {
            that._applyFilter(state.filter);
            that.$.filterInput.value = state.filter;
        }

        that._menuItemsGroupsToExpand = [];

        for (let i = 0; i < state.expanded.length; i++) {
            const originallyExpandedItem = that.getItem(state.expanded[i]);

            if (originallyExpandedItem) {
                that._menuItemsGroupsToExpand.push(originallyExpandedItem);
            }
        }

        that._expandItemsByDefault(true);

        for (let i = 0; i < state.selected.length; i++) {
            const originallySelectedItem = that.getItem(state.selected[i]);

            if (originallySelectedItem) {
                selectedIndexes.push(originallySelectedItem.path);
            }
        }

        that.selectedIndexes = selectedIndexes;
        that._applySelection(false, oldSelectedIndexes);
    }

    /**
     * Moves an item down relative to its siblings.
     *
     * @param {HTMLElement/String} item The smart-tree-item/smart-tree-items-group (or its id or numeric path) to remove.
     */
    moveDown(item) {
        const that = this;

        item = that.getItem(item);

        const nextSibling = item.nextElementSibling;

        if (item === undefined || !nextSibling || that.sorted) {
            return;
        }

        that._moveTreeItem(item, nextSibling, 2, [that]);

        if (that.filterable && that._state.filter) {
            that._applyFilter(that._state.filter);
        }
    }

    /**
     * Moves an item up relative to its siblings.
     *
     * @param {HTMLElement/String} item The smart-tree-item/smart-tree-items-group (or its id or numeric path) to remove.
     */
    moveUp(item) {
        const that = this;

        item = that.getItem(item);

        const previousSibling = item.previousElementSibling;

        if (item === undefined || !previousSibling || that.sorted) {
            return;
        }

        that._moveTreeItem(item, previousSibling, 0, [that]);

        if (that.filterable && that._state.filter) {
            that._applyFilter(that._state.filter);
        }
    }

    /**
     * Refreshes the layout of the Tree
     */
    refresh() {
        this._checkOverflow();
    }

    /**
     * Removes an item.
     *
     * @param {HTMLElement/String} item The smart-tree-item/smart-tree-items-group (or its id or numeric path) to remove.
     */
    removeItem(item) {
        const that = this;

        item = that.getItem(item);

        if (item === undefined) {
            return;
        }

        if (item instanceof Smart.TreeItemsGroup) {
            const container = item.container;

            if (that._isContainerOpened(container.level, container)) {
                that._closeSubContainersTreeMode(container.level, container);
            }
        }

        const restoreSorting = that.sorted && that.autoSort;

        if (restoreSorting) {
            that._unsortItems(that.$.mainContainer);
        }

        const itemParentGroup = item.closest('smart-tree-items-group');

        item.parentElement.removeChild(item);
        that._menuItems = {};

        that._refreshItemPaths(that.$.mainContainer, true, undefined, that.sorted && !that.autoSort);

        if (restoreSorting) {
            that._applyGrouping(that.$.mainContainer);
        }

        const filterQuery = that._state.filter,
            oldSelectedIndexes = that.selectedIndexes.slice(0);

        if (filterQuery) {
            that._applyFilter(filterQuery);
        }

        that._checkOverflow();

        that.selectedIndexes = [];
        that._applySelection(true, oldSelectedIndexes);
        delete that._treeAnimationInProgress;

        if (!itemParentGroup.querySelector('smart-tree-item')) {
            const newItem = document.createElement('smart-tree-item');
            newItem.innerHTML = itemParentGroup.innerHTML;
            that.addBefore(newItem, itemParentGroup);
            itemParentGroup.remove();
            return;
        }
    }

    /**
     * Saves the Tree's state.
     */
    saveState() {
        const that = this;

        if (!that.id) {
            that.warn(that.localize('noId'));
        }
        else {
            window.localStorage.setItem('smartTree' + that.id, JSON.stringify(that._state));
        }

        return JSON.parse(JSON.stringify(that._state));
    }

    /**
     * Selects an item.
     *
     * @param {HTMLElement/String} item smart-tree-item/smart-tree-items-group (or its id or numeric path).
     */
    select(item) {
        const that = this;

        item = that.getItem(item);

        if (item === undefined || item.selected || !that._canItemBeSelected(item)) {
            return;
        }

        that._handleSelection(item, { type: 'programmatic' });
    }

    /**
     * Unselects an item.
     *
     * @param {HTMLElement/String} item smart-tree-item/smart-tree-items-group (or its id or numeric path).
     */
    unselect(item) {
        const that = this;

        item = that.getItem(item);

        if (item === undefined || !item.selected || item.templateApplied) {
            return;
        }

        that._handleSelection(item, { type: 'programmatic' });
    }

    /**
     * Updates an item.
     *
     * @param {HTMLElement/String} item smart-tree-item/smart-tree-items-group (or its id or numeric path).
     * @param {Object} newItem An object with updated properties.
     */
    updateItem(item, newItem) {
        const that = this;

        item = that.getItem(item);

        if (item === undefined || newItem === undefined) {
            return;
        }

        const treeItem = item instanceof Smart.TreeItem;

        for (let prop in newItem) {
            if (Object.prototype.hasOwnProperty.call(newItem, prop)) {
                if (treeItem) {
                    if (['disabled', 'label', 'level', 'selected', 'separator', 'shortcut', 'value'].indexOf(prop) === -1) {
                        continue;
                    }
                }
                else if (['disabled', 'expanded', 'label', 'level', 'selected', 'separator', 'value'].indexOf(prop) === -1) {
                    continue;
                }

                item[prop] = newItem[prop];
            }
        }
    }

    /**
     * Called when a property is changed.
     */
    propertyChangedHandler(propertyName, oldValue, newValue) {
        const that = this;

        super.propertyChangedHandler(propertyName, oldValue, newValue);

        switch (propertyName) {
            case 'allowDrag':
            case 'allowDrop':
            case 'autoLoadState':
            case 'autoSort':
            case 'editable':
            case 'filterInputPlaceholder':
            case 'loadingIndicatorPlaceholder':
            case 'selectionDisplayMode':
            case 'showLines':
            case 'showRootLines':
            case 'toggleElementPosition':
            case 'toggleMode':
                break;
            case 'autoHideToggleElement':
                if (newValue) {
                    that.$mainContainer.addClass('hidden-arrows');
                }
                else {
                    that.$mainContainer.removeClass('hidden-arrows');
                }

                break;
            case 'autoSaveState':
                if (!newValue) {
                    return;
                }

                if (!that.id) {
                    that.warn(that.localize('noId'));
                    that.autoSaveState = false;
                    return;
                }

                window.localStorage.setItem('smartTree' + that.id, JSON.stringify(that._state));
                break;
            case 'dataSource': {
                const oldSelectedIndexes = that.selectedIndexes.slice(0);

                that.selectedIndexes = [];
                that._menuItems = {};
                that._processDataSource();
                that._checkOverflow();
                that._expandItemsByDefault();
                that._applySelection(true, oldSelectedIndexes);

                const filterQuery = that._state.filter;

                if (filterQuery) {
                    that._applyFilter(filterQuery);
                }

                break;
            }
            case 'disabled':
                that._setFocusable();
                that.$.scrollButtonNear.disabled = newValue;
                that.$.scrollButtonFar.disabled = newValue;

                if (!newValue) {
                    that._updateScrollButtonVisibility();
                }

                break;
            case 'displayLoadingIndicator':
                if (newValue) {
                    that._discardKeyboardHover(true);
                    that.$loadingIndicatorContainer.removeClass('smart-hidden');
                }
                else {
                    that.$loadingIndicatorContainer.addClass('smart-hidden');
                }

                break;
            case 'expandMode':
                if (newValue === 'single') {
                    const expanded = that._state.expanded.map(id => Object.values(that._menuItems).find(item => item.id === id)),
                        processedBranches = {};

                    for (let i = 0; i < expanded.length; i++) {
                        const currentItem = expanded[i],
                            currentItemParent = currentItem.parentItem;

                        if (processedBranches[currentItemParent]) {
                            continue;
                        }

                        processedBranches[currentItemParent] = true;

                        const expandedSiblings = expanded.filter(item => item !== currentItem && item.parentItem === currentItemParent);

                        if (expandedSiblings.length > 0) {
                            expandedSiblings.forEach(item => that.collapseItem(item));
                        }
                    }
                }

                break;
            case 'filterable':
                if (newValue === false) {
                    that._applyFilter('');
                    that.$.filterInput.value = '';
                }

                that._checkOverflow();
                break;
            case 'filterMode':
                if (that.filterable && that._state.filter) {
                    that._applyFilter(that._state.filter);
                }

                break;
            case 'hasThreeStates':
                if (that.selectionMode !== 'checkBox') {
                    return;
                }

                if (newValue) {
                    that._applySelection(false);
                }
                else {
                    const indeterminateItems = (that.enableShadowDOM ? that.shadowRoot : that).querySelectorAll('[indeterminate]');

                    for (let i = 0; i < indeterminateItems.length; i++) {
                        indeterminateItems[i].removeAttribute('indeterminate');
                    }
                }

                break;
            case 'innerHTML': {
                that.$.mainContainer.innerHTML = newValue;
                that._lazyInitItems();
                break;
            }
            case 'loadingIndicatorPosition':
                if (newValue === 'center') {
                    that.$loadingIndicatorPlaceHolder.addClass('smart-hidden');
                }
                else {
                    that.$loadingIndicatorPlaceHolder.removeClass('smart-hidden');
                }

                break;
            case 'overflow':
                if (that.scrollMode === 'scrollbar') {
                    if (newValue === 'hidden') {
                        that.$.scrollViewer.$.verticalScrollBar.setAttribute('aria-hidden', true);
                    }
                    else {
                        that.$.scrollViewer.$.verticalScrollBar.removeAttribute('aria-hidden');
                    }

                    if (newValue === 'scroll') {
                        that.$.scrollViewer.verticalScrollBarVisibility = 'visible';
                    }
                    else {
                        that.$.scrollViewer.verticalScrollBarVisibility = 'auto';
                    }

                    return;
                }

                that.$.scrollViewer.scrollTop = 0;

                if (newValue === 'hidden') {
                    that.$scrollViewer.removeClass('scroll-buttons-shown');
                    that.$scrollButtonNear.addClass('smart-hidden');
                    that.$scrollButtonFar.addClass('smart-hidden');
                }
                else {
                    that.$.scrollButtonNear.disabled = that.disabled;
                    that.$.scrollButtonFar.disabled = that.disabled;

                    if (newValue === 'auto') {
                        that.$scrollButtonNear.addClass('smart-hidden');
                        that.$scrollButtonFar.addClass('smart-hidden');
                        that._checkOverflow();
                    }
                    else {
                        that.$scrollViewer.addClass('scroll-buttons-shown');
                        that.$scrollViewer.removeClass('one-button-shown');
                        that.$scrollButtonNear.removeClass('smart-hidden');
                        that.$scrollButtonFar.removeClass('smart-hidden');
                        that._updateScrollButtonVisibility();
                    }
                }

                that.$.scrollViewer.refresh();
                break;
            case 'rightToLeft': {
                let oldPadding, newPadding;

                if (newValue) {
                    oldPadding = 'paddingLeft';
                    newPadding = 'paddingRight';
                }
                else {
                    oldPadding = 'paddingRight';
                    newPadding = 'paddingLeft';
                }

                for (let path in that._menuItems) {
                    if (Object.prototype.hasOwnProperty.call(that._menuItems, path)) {
                        const item = that._menuItems[path],
                            labelContainer = item.firstElementChild;

                        labelContainer.style[oldPadding] = '';
                        that._setIndentation(labelContainer, item.level, newPadding);
                    }
                }

                break;
            }
            case 'scrollMode':
                if (that.overflow === 'hidden') {
                    return;
                }

                that.$.scrollViewer.scrollTop = 0;

                if (newValue === 'scrollButtons') {
                    if (that.overflow === 'scroll') {
                        that.$scrollViewer.addClass('scroll-buttons-shown');
                        that.$scrollButtonNear.removeClass('smart-hidden');
                        that.$scrollButtonFar.removeClass('smart-hidden');
                    }

                    that.$.scrollViewer.$.verticalScrollBar.setAttribute('aria-hidden', true);
                    that.$.scrollViewer.verticalScrollBarVisibility = 'auto';
                    that._checkOverflow();
                    return;
                }

                that.$.scrollViewer.$.verticalScrollBar.removeAttribute('aria-hidden');
                that.$scrollViewer.removeClass('scroll-buttons-shown');
                that.$scrollViewer.removeClass('one-button-shown');
                that.$scrollButtonNear.addClass('smart-hidden');
                that.$scrollButtonFar.addClass('smart-hidden');

                if (that.overflow === 'auto') {
                    that.$.scrollViewer.verticalScrollBarVisibility = 'auto';
                }
                else {
                    that.$.scrollViewer.verticalScrollBarVisibility = 'visible';
                }


                break;
            case 'selectedIndexes':
                that._applySelection(false, oldValue);
                break;
            case 'selectionMode':
                that.setAttribute('aria-multiselectable', ['oneOrManyExtended', 'zeroOrMany', 'oneOrMany', 'checkBox', 'radioButton'].indexOf(newValue) !== -1);

                if (that._menuItems['0'] === undefined) {
                    return;
                }

                if ((oldValue === 'one' && newValue !== 'none' && newValue !== 'checkBox' && newValue !== 'radioButton') ||
                    (oldValue.indexOf('oneOrMany') !== -1 && newValue.indexOf('oneOrMany') !== -1) ||
                    (oldValue === 'none' && (newValue.indexOf('zero') !== -1 || newValue === 'checkBox')) ||
                    (newValue === 'zeroOrMany' && oldValue !== 'checkBox') ||
                    (oldValue === 'radioButton' && newValue.indexOf('Many') !== -1) ||
                    (!that.hasThreeStates && (newValue === 'checkBox' ||
                        oldValue === 'checkBox' && newValue === 'zeroOrMany'))) {

                    if (newValue === 'one' || newValue === 'oneOrManyExtended') {
                        that._lastSelectedItem = that._menuItems[that.selectedIndexes[that.selectedIndexes.length - 1]];
                    }
                    else {
                        that._lastSelectedItem = undefined;
                    }

                    that._applyAriaSelected();
                    return;
                }

                if (that.hasThreeStates && oldValue === 'checkBox') {
                    const indeterminateItems = (that.enableShadowDOM ? that.shadowRoot : that).querySelectorAll('[indeterminate]');

                    for (let i = 0; i < indeterminateItems.length; i++) {
                        indeterminateItems[i].removeAttribute('indeterminate');
                    }
                }

                that._applySelection(false);
                break;
            case 'sort': {
                if (!that.sorted) {
                    return;
                }

                that._refreshSorting();
                break;
            }
            case 'sortDirection':
                if (that.sorted && !that.sort) {
                    that._unsortItems(that.$.mainContainer);
                    that._applyGrouping(that.$.mainContainer);
                }

                break;
            case 'sorted': {
                if (!newValue && !that.autoSort) {
                    that._refreshItemPathsAndSelection();
                    that._updateState('sorted', false);
                    return;
                }

                if (newValue) {
                    that._applyGrouping(that.$.mainContainer);
                }
                else {
                    that._unsortItems(that.$.mainContainer);
                }

                const filterQuery = that._state.filter;

                if (filterQuery) {
                    that._applyFilter(filterQuery);
                }

                that._updateState('sorted', newValue);
                that._checkOverflow();
                break;
            }
            case 'unfocusable':
                that._setFocusable();
                break;
        }
    }

    /**
     * Adds drag feedback.
     */
    _addDragFeedback() {
        const that = this,
            feedback = document.createElement('div');

        feedback.className = 'smart-tree-item-feedback';
        feedback.setAttribute('parent-tree-id', that.id);

        if (that.theme) {
            feedback.setAttribute('theme', that.theme);
        }

        if (that.dragFeedbackFormatFunction) {
            feedback.innerHTML = that.dragFeedbackFormatFunction(that._dragDetails.Items);
        }
        else if (that._dragDetails.Items.length === 1) {
            feedback.innerHTML = that._dragDetails.Item.label;
        }
        else {
            feedback.classList.add('multiple');
            feedback.innerHTML = '&#xf0c5;';
        }

        document.body.appendChild(feedback);
        return feedback;
    }

    /**
     * Applies filter.
     */
    _applyFilter(filterQuery) {
        const that = this;

        function hide(filteredItem, item) {
            if (filteredItem) {
                if (item.hidden) {
                    item.$.removeClass('smart-hidden');
                }

                item.hidden = false;
            }
            else {
                if (!item.hidden) {
                    item.$.addClass('smart-hidden');
                }

                item.hidden = true;
            }
        }

        function filter(item, childItems) {
            let shownChildren = false,
                numberOfShownChildren = 0,
                lastShownChild;

            childItems = Array.from(childItems);

            // filter children
            for (let i = 0; i < childItems.length; i++) {
                const currentChild = childItems[i];

                if (currentChild instanceof Smart.TreeItem) {
                    hide(that._findItem(currentChild, filterQuery), currentChild);
                }
                else {
                    filter(currentChild, currentChild.itemContainer.children);
                }

                if (!currentChild.hidden) {
                    numberOfShownChildren++;
                    lastShownChild = currentChild;
                }

                shownChildren = shownChildren || !currentChild.hidden;
            }

            // filter the item itself
            if (item !== that.$.mainContainer) {
                const filteredItem = that._findItem(item, filterQuery);

                hide(shownChildren || filteredItem, item);

                if (shownChildren && filteredItem === null) {
                    item.$.addClass('filtered-child');
                }
                else {
                    item.$.removeClass('filtered-child');
                }

                if (!shownChildren && childItems.length > 0) {
                    item.hiddenChildren = true;
                    item.$.addClass('hidden-children');
                    that.collapseItem(item, undefined, false);
                }
                else {
                    item.hiddenChildren = false;
                    item.$.removeClass('hidden-children');
                }
            }

            if (filterQuery !== '' && numberOfShownChildren > 0) {
                lastShownChild.$.addClass('last-filtered-child');
            }
        }

        if (filterQuery === '' && !that.hasAttribute('filter-applied')) {
            return;
        }

        const lastFilteredChildren = Array.from(that.$.mainContainer.getElementsByClassName('last-filtered-child'));

        for (let i = 0; i < lastFilteredChildren.length; i++) {
            lastFilteredChildren[i].$.removeClass('last-filtered-child');
        }

        filter(that.$.mainContainer, that.$.mainContainer.children);

        if (filterQuery !== '') {
            that.setAttribute('filter-applied', '');
        }
        else {
            that.removeAttribute('filter-applied');
        }

        that._updateState('filter', filterQuery);
        that._checkOverflow();
    }

    /**
     * Applies hierarchical checkbox selection.
     */
    _applyHierarchicalSelection(item, validatedSelection) {
        const that = this,
            branch = item !== that.$.mainContainer,
            children = branch ? item.itemContainer.children : item.children;
        let selectedChildren = 0, indeterminateChildren = 0;

        for (let i = 0; i < children.length; i++) {
            const currentChild = children[i];

            if (item.selected) {
                currentChild.set('selected', true);
            }

            if (currentChild instanceof Smart.TreeItemsGroup) {
                that._applyHierarchicalSelection(currentChild, validatedSelection);
            }
            else if (currentChild.selected) {
                validatedSelection.push(currentChild.path);
            }

            if (branch) {
                if (currentChild.selected) {
                    selectedChildren++;
                }
                else if (currentChild.hasAttribute('indeterminate')) {
                    indeterminateChildren++;
                }
            }
        }

        if (!branch) {
            return;
        }

        that._setThreeStateCheckbox(item, selectedChildren, indeterminateChildren);

        if (item.selected) {
            validatedSelection.push(item.path);
        }
    }

    /**
     * Applies radio button selection.
     */
    _applyRadioButtonSelection(item, initiallySelected, validatedSelection) {
        const that = this,
            children = item !== that.$.mainContainer ? item.itemContainer.children : item.children,
            selectedChildren = [];
        let selectedSibling;

        for (let i = 0; i < children.length; i++) {
            const currentChild = children[i];

            if (currentChild instanceof Smart.TreeItemsGroup) {
                that._applyRadioButtonSelection(currentChild, initiallySelected, validatedSelection);
            }

            currentChild.set('selected', false);

            if (initiallySelected.indexOf(currentChild.path) !== -1) {
                selectedChildren.push(currentChild);
            }
        }

        if (selectedChildren.length === 0) {
            selectedSibling = children[0];
        }
        else {
            selectedSibling = selectedChildren[selectedChildren.length - 1];
        }

        selectedSibling.set('selected', true);
        validatedSelection.push(selectedSibling.path);
    }

    /**
     * Applies selection.
     */
    _applySelection(combine, oldSelectedIndexes) {
        const that = this;
        let selected = that.selectedIndexes.slice(0);

        function getFirstSelectable(level) {
            const itemsInLevel = Object.values(that._menuItems).filter(item => item.level === level);

            if (itemsInLevel.length === 0) {
                return;
            }

            for (let i = 0; i < itemsInLevel.length; i++) {
                if (that._canItemBeSelected(itemsInLevel[i])) {
                    return itemsInLevel[i].path;
                }
            }

            return getFirstSelectable(level + 1);
        }

        if (oldSelectedIndexes === undefined) {
            oldSelectedIndexes = selected.slice(0);
        }

        if (that._menuItems['0'] === undefined) {
            // no items in Tree
            that.selectedIndexes = [];
            that._lastSelectedItem = undefined;

            if (that.isRendered && JSON.stringify(oldSelectedIndexes) !== JSON.stringify([])) {
                that.$.fireEvent('change', {
                    'selectedIndexes': that.selectedIndexes,
                    'oldSelectedIndexes': oldSelectedIndexes
                });
            }

            return;
        }

        const selectionMode = that.selectionMode,
            itemsWithSelectedAttr = Array.from((that.shadowRoot || that).querySelectorAll('smart-tree-item[selected], smart-tree-items-group[selected]'));

        for (let i = selected.length - 1; i >= 0; i--) {
            const currentMatchingItem = that._menuItems[selected[i]];

            if (currentMatchingItem === undefined ||
                !that._canItemBeSelected(currentMatchingItem)) {
                selected.splice(i, 1);
            }
        }

        if (combine) {
            for (let i = 0; i < itemsWithSelectedAttr.length; i++) {
                if (!that._canItemBeSelected(itemsWithSelectedAttr[i])) {
                    itemsWithSelectedAttr[i].set('selected', false);
                    continue;
                }

                if (selected.indexOf(itemsWithSelectedAttr[i].path) === -1) {
                    selected.push(itemsWithSelectedAttr[i].path);
                }
            }
        }
        else {
            for (let i = 0; i < itemsWithSelectedAttr.length; i++) {
                itemsWithSelectedAttr[i].set('selected', false);
            }

            itemsWithSelectedAttr.length = 0;
        }

        that._sortPathCollection(selected);

        switch (selectionMode) {
            case 'none':
                selected.length = 0;

                for (let i = 0; i < itemsWithSelectedAttr.length; i++) {
                    itemsWithSelectedAttr[i].set('selected', false);
                }

                break;
            case 'one':
            case 'zeroAndOne':
            case 'zeroOrOne':
                if (selectionMode === 'one' && selected.length === 0) {
                    selected.push(getFirstSelectable(1));
                }

                for (let i = 0; i < selected.length; i++) {
                    const currentMatchingItem = that._menuItems[selected[i]];

                    if (i === selected.length - 1) {
                        currentMatchingItem.set('selected', true);
                        selected = [selected[i]];
                        break;
                    }

                    if (itemsWithSelectedAttr.indexOf(currentMatchingItem) !== -1) {
                        currentMatchingItem.set('selected', false);
                    }
                }

                break;
            case 'oneOrMany':
            case 'oneOrManyExtended':
                if (selected.length === 0) {
                    selected.push(getFirstSelectable(1));
                }

                for (let i = 0; i < selected.length; i++) {
                    that._menuItems[selected[i]].set('selected', true);
                }

                break;
            case 'zeroOrMany':
            case 'checkBox':
                for (let i = 0; i < selected.length; i++) {
                    that._menuItems[selected[i]].set('selected', true);
                }

                if (selectionMode === 'checkBox' && that.hasThreeStates) {
                    const validatedSelection = [];

                    that._applyHierarchicalSelection(that.$.mainContainer, validatedSelection);
                    that._sortPathCollection(validatedSelection);
                    selected = validatedSelection;
                }

                break;
            case 'radioButton': {
                const validatedSelection = [];

                that._applyRadioButtonSelection(that.$.mainContainer, selected, validatedSelection);
                that._sortPathCollection(validatedSelection);
                selected = validatedSelection;
                break;
            }
        }

        that.selectedIndexes = selected;
        that._updateState('selected');

        if (selectionMode === 'one' || selectionMode === 'oneOrManyExtended') {
            that._lastSelectedItem = that._menuItems[selected[selected.length - 1]];
        }
        else {
            that._lastSelectedItem = undefined;
        }

        if (that.isRendered && arguments[2] !== false &&
            JSON.stringify(oldSelectedIndexes) !== JSON.stringify(selected)) {
            that.$.fireEvent('change', {
                'selectedIndexes': that.selectedIndexes,
                'oldSelectedIndexes': oldSelectedIndexes
            });
        }

        that._applyAriaSelected();
    }

    /**
     * Applies "aria-selected" attribute to items (related to WAI-ARIA support).
     */
    _applyAriaSelected() {
        const that = this,
            selectionMode = that.selectionMode;

        for (let path in that._menuItems) {
            const item = that._menuItems[path];

            if (item.selected) {
                item.setAttribute('aria-selected', true);
            }
            else if (!that._canItemBeSelected(item) ||
                ['oneOrManyExtended', 'zeroOrMany', 'oneOrMany', 'checkBox', 'radioButton'].indexOf(selectionMode) === -1) {
                item.removeAttribute('aria-selected');
            }
            else {
                item.setAttribute('aria-selected', false);
            }
        }
    }

    /**
     * Automatically loads stored state.
     */
    _autoLoadState(state) {
        const that = this,
            selectedIndexes = [];

        for (let i = 0; i < that._menuItemsGroupsToExpand.length; i++) {
            that._menuItemsGroupsToExpand[i].set('expanded', false);
        }

        that._menuItemsGroupsToExpand = [];

        for (let i = 0; i < state.expanded.length; i++) {
            const originallyExpandedItem = that.getItem(state.expanded[i]);

            if (originallyExpandedItem) {
                that._menuItemsGroupsToExpand.push(originallyExpandedItem);
            }
        }

        if (that.filterable && state.filter) {
            that._applyFilter(state.filter);
            that.$.filterInput.value = state.filter;
        }

        for (let i = 0; i < state.selected.length; i++) {
            const originallySelectedItem = that.getItem(state.selected[i]);

            if (originallySelectedItem) {
                selectedIndexes.push(originallySelectedItem.path);
            }
        }

        that.selectedIndexes = selectedIndexes;
    }

    /**
     * blur handler.
     */
    _blurHandler() {
        this._discardKeyboardHover(true);
    }

    /**
     * Checks if an item can be hovered.
     */
    _canItemBeHovered(item) {
        const level = item.level;

        return item.disabled === false &&
            item.templateApplied !== true &&
            item.hidden !== true &&
            (level === 1 ||
                level > 1 &&
                this._isContainerOpened(level, item.parentElement.container) &&
                item.getBoundingClientRect().height > 0);
    }

    /**
     * Checks if an item can be selected.
     */
    _canItemBeSelected(item, ignoreSelectionTarget) {
        if (ignoreSelectionTarget !== true &&
            this.selectionTarget === 'leaf' &&
            item instanceof Smart.TreeItemsGroup) {
            return false;
        }

        return item.disabled === false && item.templateApplied !== true;
    }

    /**
     * Checks if items overflow and shows/hides scroll buttons.
     */
    _checkOverflow() {
        const that = this,
            scrollViewer = that.$.scrollViewer,
            overflow = that.overflow;

        if (that.scrollMode === 'scrollbar' || overflow === 'hidden') {
            scrollViewer.refresh();
            return;
        }

        const oldScrollTop = scrollViewer.scrollTop;

        if (overflow === 'auto') {
            scrollViewer.$.removeClass('scroll-buttons-shown');
            scrollViewer.$.removeClass('one-button-shown');
            that.$scrollButtonNear.addClass('smart-hidden');
            that.$scrollButtonFar.addClass('smart-hidden');
        }

        const overflowing = Math.round(scrollViewer.$.scrollViewerContentContainer.offsetHeight) >
            Math.round(scrollViewer.$.scrollViewerContainer.offsetHeight),
            showNear = Math.round(scrollViewer.scrollTop) > 0,
            showFar = Math.round(scrollViewer.$.scrollViewerContainer.offsetHeight + scrollViewer.scrollTop) <
                Math.round(scrollViewer.$.scrollViewerContentContainer.offsetHeight);

        if (overflowing) {
            if (overflow === 'auto') {
                scrollViewer.$.addClass('scroll-buttons-shown');

                if (showNear) {
                    that.$scrollButtonNear.removeClass('smart-hidden');
                }

                if (showFar) {
                    that.$scrollButtonFar.removeClass('smart-hidden');
                }

                if ((showNear && showFar) === false) {
                    scrollViewer.$.addClass('one-button-shown');
                }

                if (!that.disabled) {
                    that.$.scrollButtonNear.disabled = false;
                    that.$.scrollButtonFar.disabled = false;
                }

                scrollViewer.scrollTop = oldScrollTop;
            }
            else {
                that.$scrollButtonNear.removeClass('smart-hidden');
                that.$scrollButtonFar.removeClass('smart-hidden');

                if (that.disabled) {
                    that.$.scrollButtonNear.disabled = true;
                    that.$.scrollButtonFar.disabled = true;
                }
                else {
                    that.$.scrollButtonNear.disabled = !showNear;
                    that.$.scrollButtonFar.disabled = !showFar;
                }
            }
        }
        else if (overflow === 'scroll') {
            that.$.scrollButtonNear.disabled = true;
            that.$.scrollButtonFar.disabled = true;
        }

        scrollViewer.refresh();
    }

    /**
     * Applies initial settings to the Tree element.
     */
    _createElement() {
        const that = this,
            scrollViewerStyle = window.getComputedStyle(that.$.scrollViewer);

        that.setAttribute('role', 'tree');
        that.setAttribute('aria-multiselectable', ['oneOrManyExtended', 'zeroOrMany', 'oneOrMany', 'checkBox', 'radioButton'].indexOf(that.selectionMode) !== -1);
        that.setAttribute('aria-orientation', 'vertical');

        that.$.scrollViewer.onVerticalChange = that._verticalScrollbarHandler;

        if (!that.isRendered) {
            Object.defineProperty(that, 'dataSource', {
                get: function () {
                    if (that.context === that) {
                        return that.properties.dataSource.value;
                    }
                    else {
                        return that._getDataSource();
                    }
                },
                set(value) {
                    that.updateProperty(that, that._properties.dataSource, value);
                }
            });
        }

        if (!that.id && (that.autoLoadState || that.autoSaveState)) {
            that.warn(that.localize('noId'));
            that.autoLoadState = false;
            that.autoSaveState = false;
        }

        that.mode = 'tree';
        that._element = 'tree';
        that._isMobile = Smart.Utilities.Core.isMobile;
        that._edgeMacFF = false;
        that._autoScrollCoefficient = Smart.Utilities.Core.Browser.Firefox ? 4 : Smart.Utilities.Core.Browser.Edge ? 8 : 2;
        that._scrollViewerPadding = (parseFloat(scrollViewerStyle.paddingTop) + parseFloat(scrollViewerStyle.paddingBottom)) || 0;
        that._state = { expanded: [], filter: '', selected: [] };
        that._dblclickObject = { numberOfClicks: 0 };

        if (that.autoHideToggleElement) {
            that.$mainContainer.addClass('hidden-arrows');
        }

        if (that.disabled) {
            that.$.scrollButtonNear.disabled = true;
            that.$.scrollButtonFar.disabled = true;
        }

        if (that.scrollMode === 'scrollbar' && that.overflow === 'scroll') {
            that.$.scrollViewer.verticalScrollBarVisibility = 'visible';
        }

        if (that.dataSource === null && that.$.mainContainer.firstElementChild instanceof HTMLUListElement) {
            that._processUList();
        }

        if (that.isRendered) {
            that._menuItems = {};

            if (that.dataSource === null) {
                that._processHTML(that.$.mainContainer, 1);
            }
            else {
                that._processDataSource();
            }
            return;
        }
        const items = (that.shadowRoot || that).querySelectorAll('smart-tree-item, smart-tree-items-group');

        const itemsReady = function () {
            let previousState;

            if (that.autoLoadState) {
                previousState = window.localStorage.getItem('smartTree' + that.id);

                if (previousState) {
                    previousState = JSON.parse(previousState);
                    that.sorted = previousState.sorted;
                }
            }

            that._setFocusable();

            that._menuItems = {};

            if (that.dataSource === null) {
                that._processHTML(that.$.mainContainer, 1);
            }
            else {
                that._processDataSource();
            }

            if (that.scrollMode === 'scrollButtons' || that.overflow === 'hidden') {
                that.$.scrollViewer.$.verticalScrollBar.setAttribute('aria-hidden', true);
            }

            if (that.scrollMode === 'scrollButtons' && that.overflow === 'scroll') {
                that.$scrollViewer.addClass('scroll-buttons-shown');
                that.$scrollButtonNear.removeClass('smart-hidden');
                that.$scrollButtonFar.removeClass('smart-hidden');
                that._updateScrollButtonVisibility();
            }

            that._checkOverflow();

            if (previousState) {
                that._autoLoadState(previousState);
            }

            that._expandItemsByDefault();
            that._applySelection(true);

            that._updateState('sorted', that.sorted);

            if (that.displayLoadingIndicator) {
                that.$loadingIndicatorContainer.removeClass('smart-hidden');
            }

            if (that.loadingIndicatorPosition !== 'center') {
                that.$loadingIndicatorPlaceHolder.removeClass('smart-hidden');
            }

            if (that.__onCompleted) {
                that._onCompleted = that.__onCompleted;
                that.__onCompleted = null;
                that._onCompleted();
            }
        }

        if (items.length === 0 || that.enableShadowDOM || that.isInShadowDOM) {
            itemsReady();
        }
        else {
            if (that._onCompleted) {
                that.__onCompleted = that._onCompleted;
                that._onCompleted = null;
            }
            that._ensureItemsReady(items, itemsReady);
        }

    }

    appendChild(node) {
        const that = this;

        if (!that.isCompleted) {
            const args = Array.prototype.slice.call(arguments, 2);
            return HTMLElement.prototype.appendChild.apply(that, args.concat(Array.prototype.slice.call(arguments)));
        }

        if (that.$.mainContainer) {
            that.$.mainContainer.appendChild(node);
        }
    }

    /**
     * dblclick handler.
     */
    _dblclickHandler(pressedItem, arrow, event) {
        const that = this;

        if (that.toggleMode !== 'dblclick' || pressedItem instanceof Smart.TreeItem || arrow) {
            return;
        }

        that._menuItemsGroupSelectionHandler(pressedItem, event);
    }

    /**
     * Removes "focused" class added by keyboard navigation.
     */
    _discardKeyboardHover(overrideCheck, mouseoutMouseover) {
        const that = this;

        if (mouseoutMouseover || !that._hoveredViaKeyboard) {
            return;
        }

        if (!overrideCheck &&
            that._hoveredViaKeyboard instanceof Smart.MenuItemsGroup &&
            that._isContainerOpened(that._hoveredViaKeyboard.level + 1, that._hoveredViaKeyboard.container)) {
            return;
        }

        that._hoveredViaKeyboard.removeAttribute('focus');
        that._hoveredViaKeyboard = undefined;
    }

    /**
     * Document up handler.
     */
    _documentUpHandler(event) {
        if (event.originalEvent.type === 'pointercancel') {
            return;
        }

        const that = this,
            downTimeoutInfo = that._downTimeoutInfo,
            dragDetails = that._dragDetails;

        if (downTimeoutInfo && (!dragDetails || !dragDetails.FeedbackShown)) {
            clearTimeout(downTimeoutInfo.timeout);

            if (that.$.scrollViewer.scrollTop === downTimeoutInfo.scrollTop ||
                that.getBoundingClientRect().top !== downTimeoutInfo.top) {
                that._continueSelection(downTimeoutInfo.target, downTimeoutInfo.event);
            }
        }

        delete that._downTimeoutInfo;

        const downItem = that._downItem,
            upTarget = that.isInShadowDOM ? event.originalEvent.composedPath()[0] : event.originalEvent.target;

        delete that._downItem;

        if (that._editedItem && !that._editInputDown &&
            (!that._isMobile && upTarget !== that.$.editInput ||
                that._isMobile && (that.getRootNode().elementFromPoint(event.clientX, event.clientY) !== that.$.editInput))) {

            that._endEditing();
            return;
        }

        delete that._editInputDown;

        if (downItem) {
            const pressedItem = upTarget.closest('smart-tree-item') || upTarget.closest('smart-tree-items-group');

            if (pressedItem && pressedItem.selected && pressedItem === downItem &&
                (!that._dragDetails || !that._dragDetails.FeedbackShown) &&
                !(pressedItem instanceof Smart.TreeItemsGroup && (upTarget.closest('.smart-tree-items-group-arrow') ||
                    upTarget === pressedItem.container || upTarget === pressedItem.container.firstElementChild))) {

                that._handleSelection(pressedItem, event);
            }
        }


        if (!dragDetails) {
            return;
        }

        const targetTree = Smart.Tree.hoveredTree,
            targetItem = Smart.Tree.hoveredItem;

        delete that._dragDetails;
        delete Smart.Tree.treeItemDragged;
        delete Smart.Tree.hoveredTree;
        delete Smart.Tree.hoveredItem;
        that.$.scrollViewer._scrollView.disableSwipeScroll = false;

        if (!dragDetails.FeedbackShown) {
            return;
        }

        const dropTarget = targetTree || that.getRootNode().elementFromPoint(event.clientX, event.clientY);
        let position;

        document.body.classList.remove('smart-dragging');
        document.body.removeChild(dragDetails.Feedback);

        if (targetTree) {
            clearInterval(targetTree._dragInterval);
        }

        const draggedItem = dragDetails.Item,
            draggedItems = dragDetails.Items,
            validDraggedItems = dragDetails.ValidItems;

        if (!dropTarget) {
            return;
        }

        if (!targetItem || draggedItem.contains(targetItem)) {
            // drops item somewhere in the DOM
            that.$.fireEvent('dragEnd', {
                'item': draggedItem,
                'items': draggedItems,
                'target': dropTarget,
                'data': dragDetails,
                'previousContainer': that,
                'container': targetTree || dropTarget,
                'originalEvent': event
            });
            return;
        }

        if (!(targetTree && targetTree.allowDrop && !targetTree.disabled)) {
            return;
        }

        const affectedTrees = [targetTree];
        let dropDetailsPosition;

        targetItem.classList.remove('drop-target');

        if (targetItem.classList.contains('top')) {
            targetItem.classList.remove('top');
            dropDetailsPosition = 'top';
            position = 0;
        }
        else if (targetItem.classList.contains('bottom')) {
            targetItem.classList.remove('bottom');
            dropDetailsPosition = 'bottom';
            position = 2;
        }
        else {
            dropDetailsPosition = 'inside';
            position = 1;
        }

        dragDetails.DropDetails = { item: targetItem, position: dropDetailsPosition };

        if (targetTree !== that) {
            affectedTrees.push(that);
        }
        else if (dragDetails.ValidateOnDrop) {
            // drop inside the same tree
            for (let i = 0; i < validDraggedItems.length; i++) {
                if (validDraggedItems[i].contains(targetItem)) {
                    return;
                }
            }
        }

        const dragEndEvent = that.$.fireEvent('dragEnd', {
            'item': draggedItem,
            'items': draggedItems,
            'target': targetItem,
            'data': dragDetails,
            'previousContainer': that,
            'container': targetTree,
            'originalEvent': event
        });

        if (dragEndEvent.defaultPrevented) {
            return;
        }

        if (targetTree.sorted && targetTree.autoSort) {
            targetTree._unsortItems(targetTree.$.mainContainer);
        }

        for (let i = 0; i < validDraggedItems.length; i++) {
            that._moveTreeItem(validDraggedItems[i], targetItem, position, affectedTrees);
        }

        if (targetTree.sorted && targetTree.autoSort) {
            targetTree._applyGrouping(targetTree.$.mainContainer);
        }

        if (targetTree !== that && targetTree._state.filter) {
            targetTree._applyFilter(targetTree._state.filter);
        }
    }

    /**
     * editInput blur handler.
     */
    _editInputBlurHandler() {
        this._endEditing();
    }

    /**
     * Ends editing operation.
     */
    _endEditing(discardChanges) {
        const that = this,
            editedItem = that._editedItem;

        if (!editedItem) {
            return;
        }

        delete that._editedItem;
        that.$editInput.addClass('smart-hidden');
        that.focus();

        if (discardChanges) {
            return;
        }

        const newValue = that.$.editInput.value,
            restoreSorting = that.sorted && that.autoSort,
            filterQuery = that._state.filter;

        if (newValue === editedItem.label) {
            return;
        }

        editedItem.set('label', newValue);
        editedItem.setAttribute('aria-label', newValue);
        editedItem.firstElementChild.firstElementChild.firstElementChild.innerHTML = newValue;

        if (restoreSorting) {
            that._unsortItems(that.$.mainContainer);
            that._applyGrouping(that.$.mainContainer);
        }

        if (filterQuery) {
            that._applyFilter(filterQuery);
        }
    }

    /**
     * Makes sure an item is visible by scrolling to it.
     */
    _ensureVisible(item) {
        const that = this;

        that._ensureVisibleTreeMode(item, item.getBoundingClientRect(), that.$.scrollViewer,
            that.$.scrollViewer.getBoundingClientRect(), that._scrollViewerPadding);

        //Used in GanttChart to ensure the TaskBar inside the Timeline is also visible
        if (that._ensureVisibleCallback) {
            that._ensureVisibleCallback(item);
        }
    }

    /**
     * pointerover handler.
     */
    _pointeroverHandler(event) {
        const that = this,
            target = that.isInShadowDOM ? event.composedPath()[0] : event.target,
            textContentElement = target.closest('.smart-tree-item-label-element>span');

        if (!textContentElement) {
            return;
        }

        const previousHoveredElement = that.$.container.querySelector('.tooltip');

        if (previousHoveredElement) {
            previousHoveredElement.classList.remove('tooltip');
            previousHoveredElement.removeAttribute('title');
        }

        if (textContentElement.scrollWidth > textContentElement.offsetWidth) {
            textContentElement.classList.add('tooltip');
            textContentElement.title = textContentElement.innerText;
        }
    }

    /**
 * Filter input keyup handler.
 */
    _filterInputKeyupHandler(event) {
        const that = this;

        if (that._filterTimer) {
            clearTimeout(that._filterTimer);
        }

        if (that.filterOnEnter) {
            if (event.key === 'Enter') {
                const context = that.context;

                that.context = that;
                that._applyFilter(that.$.filterInput.value, that._view);
                that._checkOverflow();
                that.context = context;
            }
            else {
                return;
            }
        }

        that._filterTimer = setTimeout(function () {
            const context = that.context;

            that.context = that;
            that._applyFilter(that.$.filterInput.value, that._view);
            that._checkOverflow();
            that.context = context;
        }, 300);
    }

    /**
     * filterInput keydown handler.
     */
    _filterInputKeydownHandler(event) {
        if (event.key !== 'PageDown') {
            if (event.key === 'PageUp') {
                event.preventDefault();
                event.stopPropagation();
            }

            return;
        }

        const that = this;
        let itemToHighlight;

        event.preventDefault();
        event.stopPropagation();

        if (that.selectedIndexes.length > 0) {
            const oldSelectedIndexes = that.selectedIndexes.slice(0);

            itemToHighlight = that._lastSelectedItem || that._menuItems[that.selectedIndexes[that.selectedIndexes.length - 1]];

            if (that.selectionMode !== 'checkBox' && that.selectionMode !== 'radioButton') {
                that.selectedIndexes = [itemToHighlight.path];
                that._applySelection(false, oldSelectedIndexes);
            }

            that.focus();
        }
        else {
            itemToHighlight = that._getFirstEnabledChild(that.$.mainContainer);
            that.focus();

            if (itemToHighlight) {
                that._hoverViaKeyboard(itemToHighlight);
            }
        }

        that._ensureVisible(itemToHighlight);
    }

    /**
     * focus handler.
     */
    _focusHandler() {
        const that = this;

        if (that.selectedIndexes.length > 0 && !that._hoveredViaKeyboard) {
            if (that._lastSelectedItem) {
                that._hoverViaKeyboard(that._lastSelectedItem, false, undefined, false);
            }
            else {
                that._hoverViaKeyboard(that._menuItems[that.selectedIndexes[that.selectedIndexes.length - 1]], false, undefined, false);
            }
        }
    }

    /**
     * Gets a JSON representation of the current Tree state.
     */
    _getDataSource() {
        const that = this,
            dataSource = [];

        function recursion(children, itemsArray) {
            for (let i = 0; i < children.length; i++) {
                const currentChild = children[i],
                    dataSourceItem = { label: currentChild.label };

                if (currentChild.disabled) {
                    dataSourceItem.disabled = true;
                }

                if (currentChild.selected) {
                    dataSourceItem.selected = true;
                }

                if (currentChild.separator) {
                    dataSourceItem.separator = true;
                }

                if (currentChild.value !== null) {
                    dataSourceItem.value = currentChild.value;
                }

                if (currentChild instanceof Smart.TreeItem) {
                    if (currentChild.shortcut) {
                        dataSourceItem.shortcut = currentChild.shortcut;
                    }
                }
                else {
                    if (currentChild.expanded) {
                        dataSourceItem.expanded = true;
                    }

                    dataSourceItem.items = [];
                    recursion(currentChild.itemContainer.children, dataSourceItem.items);
                }

                itemsArray.push(dataSourceItem);
            }
        }

        recursion(that.$.mainContainer.children, dataSource);

        return dataSource;
    }

    /**
     * Handles hierarchical checkbox selection.
     */
    _handleHierarchicalSelection(item, selectedIndexes) {
        function checkUncheckChildren(item, check) {
            const children = item.itemContainer.children;

            for (let i = 0; i < children.length; i++) {
                const currentChild = children[i];

                currentChild.set('selected', check);
                currentChild.setAttribute('aria-selected', check);
                currentChild.removeAttribute('indeterminate');

                if (currentChild instanceof Smart.TreeItemsGroup) {
                    checkUncheckChildren(currentChild, check);
                }
            }
        }

        const that = this;
        let currentItem = item;

        if (item.selected) {
            item.set('selected', false);
            item.setAttribute('aria-selected', false);
        }
        else {
            item.set('selected', true);
            item.setAttribute('aria-selected', true);
            item.removeAttribute('indeterminate');
        }

        while (currentItem.parentItem) {
            const parent = currentItem.parentItem,
                children = parent.itemContainer.children;
            let selectedChildren = 0, indeterminateChildren = 0;

            for (let i = 0; i < children.length; i++) {
                if (children[i].selected) {
                    selectedChildren++;
                }
                else if (children[i].hasAttribute('indeterminate')) {
                    indeterminateChildren++;
                }
            }

            that._setThreeStateCheckbox(parent, selectedChildren, indeterminateChildren);

            currentItem = parent;
        }

        if (item instanceof Smart.TreeItemsGroup) {
            checkUncheckChildren(item, item.selected);
        }

        selectedIndexes.length = 0;

        const selectedItems = Array.from((that.enableShadowDOM ? that.shadowRoot : that).querySelectorAll('[selected]'));

        for (let i = 0; i < selectedItems.length; i++) {
            selectedIndexes.push(selectedItems[i].path);
        }

        that._sortPathCollection(selectedIndexes);
    }

    /**
     * Handles item selection.
     */
    _handleSelection(item, event) {
        const that = this,
            selectionMode = that.selectionMode;

        if (selectionMode === 'none' ||
            (event.type !== 'programmatic' && !that._canItemBeSelected(item))) {
            return;
        }

        const selected = item.selected;

        if (selected && event.type === 'down') {
            return;
        }

        const oldSelectedIndexes = that.selectedIndexes.slice(0);
        let selectedIndexes = oldSelectedIndexes.slice(0);

        switch (selectionMode) {
            case 'one':
            case 'zeroAndOne':
                if (selected) {
                    return;
                }

                if (that._menuItems[selectedIndexes[0]]) {
                    that._menuItems[selectedIndexes[0]].set('selected', false);
                    that._menuItems[selectedIndexes[0]].removeAttribute('aria-selected');
                }
                that.selectedIndexes = [item.path];
                item.set('selected', true);
                item.setAttribute('aria-selected', true);
                that._lastSelectedItem = item;
                break;
            case 'zeroOrOne':
                if (selected) {
                    that.selectedIndexes = [];
                    item.set('selected', false);
                    item.removeAttribute('aria-selected');
                }
                else {
                    if (selectedIndexes[0] !== undefined) {
                        that._menuItems[selectedIndexes[0]].set('selected', false);
                        that._menuItems[selectedIndexes[0]].removeAttribute('aria-selected');
                    }

                    that.selectedIndexes = [item.path];
                    item.set('selected', true);
                    item.setAttribute('aria-selected', true);
                }

                break;
            case 'oneOrMany':
            case 'zeroOrMany':
                if (selected) {
                    if (selectedIndexes.length === 1 && selectionMode !== 'zeroOrMany') {
                        return;
                    }

                    selectedIndexes.splice(selectedIndexes.indexOf(item.path), 1);
                    item.set('selected', false);
                    item.setAttribute('aria-selected', false);
                }
                else {
                    selectedIndexes.push(item.path);
                    that._sortPathCollection(selectedIndexes);
                    item.set('selected', true);
                    item.setAttribute('aria-selected', true);
                }

                that.selectedIndexes = selectedIndexes;
                break;
            case 'oneOrManyExtended': {
                const ctrlKey = event.ctrlKey || event.metaKey,
                    shiftKey = event.shiftKey;

                if (!ctrlKey && !shiftKey ||
                    shiftKey && item === that._lastSelectedItem) {
                    for (let i = 0; i < selectedIndexes.length; i++) {
                        that._menuItems[selectedIndexes[i]].set('selected', false);
                        that._menuItems[selectedIndexes[i]].setAttribute('aria-selected', false);
                    }

                    selectedIndexes = [item.path];
                    item.set('selected', true);
                    item.setAttribute('aria-selected', true);
                    that._lastSelectedItem = item;
                }
                else if (ctrlKey) {
                    if (item.selected && selectedIndexes.length > 1) {
                        selectedIndexes.splice(selectedIndexes.indexOf(item.path), 1);
                        item.set('selected', false);
                        item.setAttribute('aria-selected', false);
                    }
                    else if (!item.selected) {
                        selectedIndexes.push(item.path);
                        that._sortPathCollection(selectedIndexes);
                        item.set('selected', true);
                        item.setAttribute('aria-selected', true);
                        that._lastSelectedItem = item;
                    }
                }
                else if (shiftKey) {
                    for (let i = 0; i < selectedIndexes.length; i++) {
                        that._menuItems[selectedIndexes[i]].set('selected', false);
                        that._menuItems[selectedIndexes[i]].setAttribute('aria-selected', false);
                    }

                    selectedIndexes = that._selectItemRange(that._lastSelectedItem, item);
                }

                that.selectedIndexes = selectedIndexes;
                break;
            }
            case 'checkBox':
                if (that.hasThreeStates) {
                    that._handleHierarchicalSelection(item, selectedIndexes);
                }
                else {
                    if (selected) {
                        selectedIndexes.splice(selectedIndexes.indexOf(item.path), 1);
                        item.set('selected', false);
                        item.setAttribute('aria-selected', false);
                    }
                    else {
                        selectedIndexes.push(item.path);
                        that._sortPathCollection(selectedIndexes);
                        item.set('selected', true);
                        item.setAttribute('aria-selected', true);
                    }
                }

                that.selectedIndexes = selectedIndexes;
                break;
            case 'radioButton': {
                if (item.selected) {
                    return;
                }

                let selectedSibling;

                for (let i = 0; i < item.parentElement.children.length; i++) {
                    const currentSibling = item.parentElement.children[i];

                    if (currentSibling.selected) {
                        selectedSibling = currentSibling;
                        break;
                    }
                }

                const selectedSiblingIndex = selectedIndexes.indexOf(selectedSibling.path);

                selectedSibling.set('selected', false);
                item.setAttribute('aria-selected', false);
                item.set('selected', true);
                item.setAttribute('aria-selected', true);
                selectedIndexes.splice(selectedSiblingIndex, 1);
                selectedIndexes.push(item.path);
                that._sortPathCollection(selectedIndexes);
                that.selectedIndexes = selectedIndexes;
                break;
            }
        }

        that._discardKeyboardHover(true);
        that._hoverViaKeyboard(item, false, undefined, !that._treeAnimationInProgress);
        that._updateState('selected');

        if (JSON.stringify(oldSelectedIndexes) !== JSON.stringify(that.selectedIndexes)) {
            //Will prevent 'change' firing on ready() of the ownerElement
            if (that.ownerElement && !that.ownerElement.isRendered) {
                return;
            }

            that.$.fireEvent('change', {
                'item': item,
                'selectedIndexes': that.selectedIndexes,
                'oldSelectedIndexes': oldSelectedIndexes
            });
        }
    }

    /**
     * Highlights an item via the keyboard.
     */
    _hoverViaKeyboard(item, selectOnHover, event, ensureVisible) {
        if (!item) {
            return;
        }

        const that = this;

        item.setAttribute('focus', '');
        that._hoveredViaKeyboard = item;

        if (ensureVisible !== false) {
            that._ensureVisible(item);
        }

        if (selectOnHover) {
            that._handleSelection(item, event);
        }

        //NOTE: Used in GanttChart in order to handle Task Tree item focus state
        if (that._hoverViaKeyboardCallback) {
            that._hoverViaKeyboardCallback(item);
        }
    }

    /**
     * Keydown event handler.
     */
    _keydownHandler(event) {
        const that = this,
            key = event.key;

        if (that._editedItem) {
            if (key === 'Enter') {
                that._endEditing();
            }
            else if (key === 'Escape') {
                that._endEditing(true);
            }

            return;
        }

        if (that.getRootNode().activeElement !== that ||
            ['ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'End', 'Enter', 'F2', 'Home', 'PageDown', 'PageUp', ' '].indexOf(key) === -1 ||
            that.disabled || that.displayLoadingIndicator) {
            return;
        }

        if (key !== 'Enter') {
            event.preventDefault();
        }

        const treeItems = Array.from(that.$.mainContainer.querySelectorAll('smart-tree-item, smart-tree-items-group')),
            selectOnHover = that.selectionMode === 'one' || that.selectionMode === 'oneOrManyExtended' && !event.ctrlKey && !event.metaKey,
            highlightedItem = that.$.mainContainer.querySelector('[focus]');

        function moveDown(startIndex) {
            for (let i = startIndex; i < treeItems.length; i++) {
                const currentItem = treeItems[i];

                if (that._canItemBeHovered(currentItem)) {
                    if (highlightedItem) {
                        if (highlightedItem === currentItem) {
                            break;
                        }

                        highlightedItem.removeAttribute('focus');
                    }

                    that._hoverViaKeyboard(currentItem, selectOnHover, event);
                    break;
                }
            }
        }

        function moveUp(startIndex) {
            for (let i = startIndex; i >= 0; i--) {
                const currentItem = treeItems[i];

                if (that._canItemBeHovered(currentItem)) {
                    if (highlightedItem) {
                        if (highlightedItem === currentItem) {
                            break;
                        }

                        highlightedItem.removeAttribute('focus');
                    }

                    that._hoverViaKeyboard(currentItem, selectOnHover, event);
                    break;
                }
            }
        }

        function navigateToParentItem() {
            if (highlightedItem.level > 1 && that._canItemBeSelected(highlightedItem.parentItem)) {
                highlightedItem.removeAttribute('focus');
                that._hoverViaKeyboard(highlightedItem.parentItem, selectOnHover, event);
            }
        }

        let startIndex;

        switch (key) {
            case 'ArrowDown':
                if (highlightedItem) {
                    startIndex = treeItems.indexOf(highlightedItem) + 1;
                }
                else {
                    startIndex = 0;
                }

                moveDown(startIndex);
                break;
            case 'ArrowLeft':
                if (!highlightedItem) {
                    return;
                }

                if (highlightedItem instanceof Smart.TreeItem) {
                    navigateToParentItem();
                }
                else {
                    if (that._isContainerOpened(highlightedItem.level + 1, highlightedItem.container)) {
                        that._closeSubContainersTreeMode(highlightedItem.level + 1, highlightedItem.container, true, true);
                        return;
                    }

                    navigateToParentItem();
                }
                break;
            case 'ArrowRight':
                if (!highlightedItem || highlightedItem instanceof Smart.TreeItem) {
                    return;
                }

                if (that._isContainerOpened(highlightedItem.level + 1, highlightedItem.container)) {
                    const firstEnabledChild = that._getFirstEnabledChild(highlightedItem.itemContainer);

                    if (firstEnabledChild) {
                        highlightedItem.removeAttribute('focus');
                        that._hoverViaKeyboard(firstEnabledChild, selectOnHover, event);
                    }
                }
                else {
                    that._menuItemsGroupSelectionHandler(highlightedItem, { target: highlightedItem, type: 'keydown' });
                }

                break;
            case 'ArrowUp':
                if (highlightedItem) {
                    startIndex = treeItems.indexOf(highlightedItem) - 1;
                }
                else {
                    startIndex = treeItems.length - 1;
                }

                moveUp(startIndex);
                break;
            case 'End':
                moveUp(treeItems.length - 1);
                break;
            case 'Enter':
                if (highlightedItem && highlightedItem instanceof Smart.TreeItemsGroup) {
                    that._menuItemsGroupSelectionHandler(highlightedItem, { target: highlightedItem, type: 'keydown' });
                }

                break;
            case 'F2':
                if (that.editable) {
                    that._startEditing(highlightedItem);
                }

                break;
            case 'Home':
                moveDown(0);
                break;
            case 'PageDown':
                that._pageDownHandler(treeItems, highlightedItem, selectOnHover, event);
                break;
            case 'PageUp':
                that._pageUpHandler(treeItems, highlightedItem, selectOnHover, event);
                break;
            case ' ':
                if (highlightedItem) {
                    that._handleSelection(highlightedItem, event);
                }

                break;
        }
    }

    /**
     * mainContainer swipeleft/swiperight handler.
     */
    _mainContainerSwipeHandler(event) {
        if (Smart.Tree.treeItemDragged) {
            event.stopPropagation();
        }
    }

    /**
     * smart-menu-items-group selection handler.
     */
    _menuItemsGroupSelectionHandler(closestItemsGroup, event, fireEvent) {
        const that = this,
            toggleMode = that.toggleMode,
            arrow = event.originalEvent ? event.originalEvent.target.classList.contains('smart-tree-items-group-arrow') : false,
            container = closestItemsGroup.container;

        if (that._waitAnimation && that._treeAnimationInProgress) {
            return;
        }

        if (event.type === 'down' && !arrow && (toggleMode !== 'dblclick' || that._dblclickObject.numberOfClicks === 1)) {
            that._handleSelection(closestItemsGroup, event);
        }

        if (event.type === 'down' && !arrow &&
            (toggleMode === 'dblclick' && that._dblclickObject.numberOfClicks !== 2 ||
                toggleMode === 'click' && that._dblclickObject.numberOfClicks > 1 ||
                toggleMode === 'arrow') ||
            closestItemsGroup.hiddenChildren) {
            return;
        }

        const level = container.level;
        let animation = that.hasAnimation;

        if (event.type === 'keydown') {
            that._discardKeyboardHover();
        }

        if (that._treeAnimationInProgress) {
            container.removeEventListener('transitionend', that._transitionendHandlerExpand);
            container.removeEventListener('transitionend', that._transitionendHandlerCollapse);
        }

        if (that._isContainerOpened(level, container)) {
            that._closeSubContainersTreeMode(level, container, true, fireEvent !== false);
        }
        else {
            const expandingEvent = that.$.fireEvent('expanding', {
                'item': closestItemsGroup,
                'label': closestItemsGroup.label,
                'path': closestItemsGroup.path,
                'value': closestItemsGroup.value,
                'children': closestItemsGroup.itemContainer.children
            });

            if (expandingEvent.defaultPrevented) {
                return;
            }

            that._handleSingleExpandMode(closestItemsGroup);

            if (animation) {
                if (event.type !== 'expand') {
                    that._ensureVisibleOnTransitionend = closestItemsGroup;
                }

                that._expandSection(container);
            }

            container.$.removeClass('smart-visibility-hidden');

            if (event.type === 'keydown') {
                closestItemsGroup.setAttribute('focus', '');
                that._hoveredViaKeyboard = closestItemsGroup;
            }

            closestItemsGroup.$.addClass('smart-tree-items-group-opened');
            closestItemsGroup.$.addClass('smart-tree-items-group-expanded');

            that._addOpenedContainer(level, container);

            if (event.type === undefined) {
                that._hoverViaKeyboard(that._getFirstEnabledChild(closestItemsGroup.itemContainer));
            }

            if (fireEvent !== false) {
                const eventDetail = {
                    'item': closestItemsGroup,
                    'label': closestItemsGroup.label,
                    'path': closestItemsGroup.path,
                    'value': closestItemsGroup.value,
                    'children': closestItemsGroup.itemContainer.children
                };

                if (that.toggleCallback) {
                    eventDetail.type = 'expand';
                    that.toggleCallback(eventDetail);
                }
                else {
                    that.$.fireEvent('expand', eventDetail);
                }
            }
        }

        if (!animation) {
            that._checkOverflow();

            if (event.type !== 'expand') {
                that._ensureVisible(closestItemsGroup);
            }
        }
    }

    /**
     * Handles the behavior of expandMode: 'single'.
     */
    _handleSingleExpandMode(treeItemsGroup) {
        const that = this;

        if (that.expandMode !== 'single') {
            return;
        }

        const currentItemParent = treeItemsGroup.parentItem,
            expanded = that._state.expanded.map(id => Object.values(that._menuItems).find(item => item.id === id)),
            expandedSiblings = expanded.filter(item => item.parentItem === currentItemParent);

        if (expandedSiblings.length > 0) {
            expandedSiblings.forEach(item => that.collapseItem(item));
        }
    }

    /**
     * mouseenter handler.
     */
    _mouseenterHandler() {
        const that = this;

        if (that.autoHideToggleElement) {
            that.$mainContainer.removeClass('hidden-arrows');
        }

        if (Smart.Tree.treeItemDragged && that.allowDrop && !that.disabled) {
            Smart.Tree.hoveredTree = that;
        }
    }

    /**
     * mouseleave handler.
     */
    _mouseleaveHandler() {
        const that = this;

        if (that.autoHideToggleElement) {
            that.$mainContainer.addClass('hidden-arrows');
        }

        if (Smart.Tree.treeItemDragged) {
            if (Smart.Tree.hoveredTree) {
                clearInterval(Smart.Tree.hoveredTree._dragInterval);
                delete Smart.Tree.hoveredTree;
            }

            const hoveredItem = Smart.Tree.hoveredItem;

            if (hoveredItem) {
                hoveredItem.classList.remove('drop-target');
                hoveredItem.classList.remove('top');
                hoveredItem.classList.remove('bottom');
                delete Smart.Tree.hoveredItem;
            }
        }
    }

    /**
     * Move handler.
     */
    _moveHandler(event) {
        const that = this,
            dragDetails = that._dragDetails;

        if (!dragDetails) {
            return;
        }

        if (!dragDetails.FeedbackShown) {
            if (Math.abs(dragDetails.StartPosition.left - event.pageX) > 5 ||
                Math.abs(dragDetails.StartPosition.top - event.pageY) > 5) {

                const dragStartEvent = that.$.fireEvent('dragStart', {
                    'item': dragDetails.Item,
                    'items': dragDetails.Items,
                    'data': dragDetails,
                    'container': that,
                    'previousContainer': that,
                    'originalEvent': dragDetails.OriginalEvent
                });

                if (dragStartEvent.defaultPrevented) {
                    delete that._dragDetails;
                    delete Smart.Tree.treeItemDragged;
                    delete Smart.Tree.hoveredTree;
                    delete Smart.Tree.hoveredItem;
                    that.$.scrollViewer._scrollView.disableSwipeScroll = false;
                    return;
                }

                document.body.classList.add('smart-dragging');
                dragDetails.Feedback = that._addDragFeedback();
                dragDetails.FeedbackShown = true;
            }
            else {
                return;
            }
        }

        const dragOffset = that.dragOffset;
        let hoveredTree, target, hoveredItem;

        that.$.fireEvent('dragging', {
            'item': dragDetails.Item,
            'items': dragDetails.Items,
            'data': dragDetails,
            'originalEvent': event
        });

        dragDetails.Feedback.style.left = (event.pageX + dragOffset[0]) + 'px';
        dragDetails.Feedback.style.top = (event.pageY + dragOffset[1]) + 'px';

        if (that._isMobile) {
            const oldHoveredItem = Smart.Tree.hoveredItem;

            if (oldHoveredItem) {
                oldHoveredItem.classList.remove('drop-target');
                oldHoveredItem.classList.remove('top');
                oldHoveredItem.classList.remove('bottom');
                delete Smart.Tree.hoveredItem;
            }

            const realTarget = that.getRootNode().elementFromPoint(event.clientX, event.clientY);

            if (Smart.Tree.hoveredTree) {
                clearInterval(Smart.Tree.hoveredTree._dragInterval);
                delete Smart.Tree.hoveredTree;
            }

            if (realTarget) {
                hoveredTree = realTarget.closest('smart-tree');

                if (hoveredTree && hoveredTree.allowDrop) {
                    Smart.Tree.hoveredTree = hoveredTree;
                    target = realTarget.closest('smart-tree-item') || realTarget.closest('smart-tree-items-group');

                    if (target) {
                        hoveredItem = target;
                    }
                    else {
                        target = realTarget;
                    }
                }
            }
        }

        hoveredTree = Smart.Tree.hoveredTree;

        if (!hoveredTree) {
            return;
        }

        const filterInputHeight = hoveredTree.filterable ? hoveredTree.$.filterInput.offsetHeight + 10 : 0;

        clearInterval(hoveredTree._dragInterval);
        hoveredTree._dragInterval = setInterval(function () {
            const rect = hoveredTree.getBoundingClientRect();

            if (hoveredTree.$.scrollViewer.scrollHeight > 0 &&
                rect.left <= event.clientX && rect.left + rect.width >= event.clientX) {
                if (event.clientY >= rect.top + filterInputHeight && event.clientY <= rect.top + 20 + filterInputHeight) {
                    hoveredTree.$.scrollViewer.scrollTop -= that._autoScrollCoefficient;

                    if (hoveredTree.scrollMode === 'scrollButtons') {
                        hoveredTree._updateScrollButtonVisibility();
                    }
                }
                else if (event.clientY >= rect.top + rect.height - 20 && event.clientY <= rect.top + rect.height) {
                    hoveredTree.$.scrollViewer.scrollTop += that._autoScrollCoefficient;

                    if (hoveredTree.scrollMode === 'scrollButtons') {
                        hoveredTree._updateScrollButtonVisibility();
                    }
                }
                else {
                    clearInterval(hoveredTree._dragInterval);
                }
            }
            else {
                clearInterval(hoveredTree._dragInterval);
            }
        }, 1);

        if (!that._isMobile) {
            target = event.originalEvent.target;

            if (target && target.enableShadowDOM) {
                target = event.originalEvent.composedPath()[0];
            }

            if (target && target.closest) {
                hoveredItem = target.closest('smart-tree-item') || target.closest('smart-tree-items-group');
            }
        }

        if (hoveredItem) {
            if (Smart.Tree.hoveredItem && hoveredItem !== Smart.Tree.hoveredItem) {
                Smart.Tree.hoveredItem.classList.remove('drop-target');
                Smart.Tree.hoveredItem.classList.remove('top');
                Smart.Tree.hoveredItem.classList.remove('bottom');
            }

            Smart.Tree.hoveredItem = hoveredItem;

            if (dragDetails.Item.contains(hoveredItem)) {
                return;
            }

            const hoveredItemRect = hoveredItem.getBoundingClientRect();

            if (hoveredItem instanceof Smart.TreeItem) {
                if (event.clientY - hoveredItemRect.top <= hoveredItemRect.height / 2) {
                    hoveredItem.classList.remove('bottom');
                    hoveredItem.classList.add('top');
                }
                else {
                    hoveredItem.classList.remove('top');
                    hoveredItem.classList.add('bottom');
                }
            }
            else {
                if (event.clientY - hoveredItemRect.top <= 10) {
                    hoveredItem.classList.remove('bottom');
                    hoveredItem.classList.add('top');
                }
                else if (!hoveredItem.expanded && hoveredItemRect.bottom - event.clientY <= 10) {
                    hoveredItem.classList.remove('top');
                    hoveredItem.classList.add('bottom');
                }
                else {
                    hoveredItem.classList.remove('top');
                    hoveredItem.classList.remove('bottom');
                }
            }

            hoveredItem.classList.add('drop-target');
        }
        else {
            if (Smart.Tree.hoveredItem) {
                Smart.Tree.hoveredItem.classList.remove('drop-target');
                Smart.Tree.hoveredItem.classList.remove('top');
                Smart.Tree.hoveredItem.classList.remove('bottom');
            }

            if (target === hoveredTree.$.scrollViewer.$.scrollViewerContainer) {
                if (hoveredTree._menuItems['0']) {
                    let lastVisibleItem = hoveredTree.$.mainContainer.lastElementChild,
                        i = hoveredTree.$.mainContainer.childElementCount - 1;

                    while (lastVisibleItem.hidden) {
                        i--;
                        lastVisibleItem = hoveredTree.$.mainContainer.children[i];

                        if (!lastVisibleItem) {
                            break;
                        }
                    }

                    if (lastVisibleItem) {
                        if (dragDetails.Item === lastVisibleItem) {
                            return;
                        }

                        Smart.Tree.hoveredItem = lastVisibleItem;
                        Smart.Tree.hoveredItem.classList.add('bottom');
                    }
                    else {
                        Smart.Tree.hoveredItem = hoveredTree.$.container;
                    }

                    Smart.Tree.hoveredItem.classList.add('drop-target');
                }
                else {
                    Smart.Tree.hoveredItem = hoveredTree.$.container;
                    Smart.Tree.hoveredItem.classList.add('drop-target');
                }
            }
            else {
                delete Smart.Tree.hoveredItem;
            }
        }
    }

    /**
     * Moves the sub-items of a smart-tree-items-group.
     */
    _moveSubItems(children, targetTree, padding) {
        const that = this;

        for (let i = 0; i < children.length; i++) {
            const currentChild = children[i];

            currentChild.menu = targetTree;
            currentChild.set('level', currentChild.parentItem.level + 1);
            currentChild.firstElementChild.style.paddingLeft = '';
            currentChild.firstElementChild.style.paddingRight = '';
            that._setIndentation(currentChild.firstElementChild, currentChild.level, padding);
            // restore filtered state
            currentChild.hidden = false;
            currentChild.$.removeClass('smart-hidden');
            currentChild.$.removeClass('filtered-child');
            currentChild.$.removeClass('last-filtered-child');

            if (currentChild instanceof Smart.TreeItemsGroup) {
                currentChild.$.removeClass('hidden-children');
                currentChild.container.level = currentChild.level + 1;
                that._moveSubItems(currentChild.itemContainer.children, targetTree, padding);

                if (targetTree !== that && currentChild.expanded) {
                    targetTree._menuItemsGroupsToExpand.push(currentChild);
                    that._updateState('expanded', currentChild.id, false);
                }
            }
        }
    }

    /**
     * Moves a smart-tree-item.
     */
    _moveTreeItem(draggedItem, targetItem, position, affectedTrees) {
        const that = this,
            oldLevel = draggedItem.level;

        if (position === 0) {
            if (targetItem.previousElementSibling === draggedItem) {
                return;
            }

            targetItem.parentElement.insertBefore(draggedItem, targetItem);
            draggedItem.set('level', targetItem.level);
            draggedItem.parentItem = targetItem.parentItem;
        }
        else if (position === 2) {
            if (targetItem.nextElementSibling === draggedItem) {
                return;
            }

            targetItem.parentElement.insertBefore(draggedItem, targetItem.nextElementSibling || null);
            draggedItem.set('level', targetItem.level);
            draggedItem.parentItem = targetItem.parentItem;
        }
        else if (targetItem === affectedTrees[0].$.container) {
            affectedTrees[0].$.mainContainer.appendChild(draggedItem);
            draggedItem.set('level', 1);
            draggedItem.parentItem = undefined;
        }
        else {
            if (targetItem.itemContainer.lastElementChild === draggedItem) {
                return;
            }

            targetItem.itemContainer.appendChild(draggedItem);
            draggedItem.set('level', targetItem.level + 1);
            draggedItem.parentItem = targetItem;
        }

        const padding = affectedTrees[0].rightToLeft ? 'paddingRight' : 'paddingLeft';

        draggedItem.menu = affectedTrees[0];
        draggedItem.parentItem = draggedItem.parentElement.menuItemsGroup;
        draggedItem.firstElementChild.style.paddingLeft = '';
        draggedItem.firstElementChild.style.paddingRight = '';
        that._setIndentation(draggedItem.firstElementChild, draggedItem.level, padding);
        // restore filtered state
        draggedItem.hidden = false;
        draggedItem.$.removeClass('smart-hidden');
        draggedItem.$.removeClass('filtered-child');
        draggedItem.$.removeClass('last-filtered-child');

        if (draggedItem instanceof Smart.TreeItemsGroup) {
            draggedItem.$.removeClass('hidden-children');
            draggedItem.container.level = draggedItem.level + 1;
            that._moveSubItems(draggedItem.itemContainer.children, affectedTrees[0], padding);

            if (draggedItem.expanded) {
                const index = that._openedContainers[oldLevel + 1].indexOf(draggedItem.container);

                if (index !== -1) {
                    that._openedContainers[oldLevel + 1].splice(index, 1);
                }

                affectedTrees[0]._menuItemsGroupsToExpand.push(draggedItem);

                if (affectedTrees.length === 2) {
                    that._updateState('expanded', draggedItem.id, false);
                }
            }
        }

        for (let i = 0; i < affectedTrees.length; i++) {
            const tree = affectedTrees[i],
                oldContext = tree.context,
                oldSelectedIndexes = tree.selectedIndexes.slice(0);

            tree.context = tree;
            tree._menuItems = {};
            tree._refreshItemPaths(tree.$.mainContainer, true, undefined, tree.sorted && !tree.autoSort);
            tree.selectedIndexes = [];
            tree._applySelection(true, oldSelectedIndexes, false);
            tree._checkOverflow();
            tree.context = oldContext;
        }

        affectedTrees[0]._expandItemsByDefault();
    }

    /**
     * An empty handler used to override unnecessarily inherited Menu handlers.
     */
    _overriddenMenuHandler() { }

    /**
     * Handles PgDn navigation.
     */
    _pageDownHandler(treeItems, highlightedItem, selectOnHover, event) {
        const that = this,
            scrollViewer = that.$.scrollViewer;

        function getLastItemInView() {
            for (let i = treeItems.length - 1; i >= 0; i--) {
                const currentItem = treeItems[i];

                if (that._canItemBeHovered(currentItem) &&
                    that._getOffsetTop(currentItem) + currentItem.firstElementChild.offsetHeight <=
                    scrollViewer.scrollTop + scrollViewer.$.container.offsetHeight) {
                    return currentItem;
                }
            }
        }

        if (!highlightedItem) {
            return;
        }

        let lastItemInView = getLastItemInView();

        if (!lastItemInView) {
            return;
        }

        if (highlightedItem !== lastItemInView) {
            highlightedItem.removeAttribute('focus');
            that._hoverViaKeyboard(lastItemInView, selectOnHover, event);
        }
        else if (scrollViewer.scrollTop + scrollViewer.$.container.offsetHeight !==
            scrollViewer.$.scrollViewerContentContainer.offsetHeight) {

            that.$.scrollViewer.scrollTop += scrollViewer.$.container.offsetHeight;

            if (that.scrollMode === 'scrollButtons') {
                that._updateScrollButtonVisibility();
            }

            lastItemInView = getLastItemInView();
            highlightedItem.removeAttribute('focus');
            that._hoverViaKeyboard(lastItemInView, selectOnHover, event);
        }
    }

    /**
     * Handles PgUp navigation.
     */
    _pageUpHandler(treeItems, highlightedItem, selectOnHover, event) {
        const that = this,
            scrollViewer = that.$.scrollViewer;

        function getFirstItemInView() {
            for (let i = 0; i < treeItems.length; i++) {
                const currentItem = treeItems[i];

                if (that._canItemBeHovered(currentItem) &&
                    that._getOffsetTop(currentItem) >= scrollViewer.scrollTop) {
                    return currentItem;
                }
            }
        }

        if (!highlightedItem) {
            return;
        }

        let firstItemInView = getFirstItemInView();

        if (!firstItemInView) {
            return;
        }

        if (highlightedItem !== firstItemInView) {
            highlightedItem.removeAttribute('focus');
            that._hoverViaKeyboard(firstItemInView, selectOnHover, event);
        }
        else if (scrollViewer.scrollTop !== 0) {
            that.$.scrollViewer.scrollTop -= scrollViewer.$.container.offsetHeight;

            if (that.scrollMode === 'scrollButtons') {
                that._updateScrollButtonVisibility();
            }

            firstItemInView = getFirstItemInView();
            highlightedItem.removeAttribute('focus');
            that._hoverViaKeyboard(firstItemInView, selectOnHover, event);
        }
        else if (that.filterable) {
            that.$.filterInput.focus();
        }
    }

    /**
     * Refreshes item paths and selection.
     */
    _refreshItemPathsAndSelection() {
        const that = this,
            oldSelectedIndexes = that.selectedIndexes.slice(0);

        that._menuItems = {
        };
        that._refreshItemPaths(that.$.mainContainer, true);
        that.selectedIndexes = [];
        that._applySelection(true, oldSelectedIndexes);
    }

    /**
     * Refreshes sorting.
     */
    _refreshSorting() {
        const that = this;

        that._unsortItems(that.$.mainContainer);
        that._applyGrouping(that.$.mainContainer);

        const filterQuery = that._state.filter;

        if (filterQuery) {
            that._applyFilter(filterQuery);
        }

        that._checkOverflow();
    }

    /**
     * Scrolls using scroll buttons.
     */
    _scroll(scrollCoefficient) {
        const that = this;

        that.$.scrollViewer.scrollTop = that.$.scrollViewer.scrollTop + scrollCoefficient * 10;
        that._updateScrollButtonVisibility();
        that.focus();
    }

    /**
     * Far scroll button click handler.
     */
    _scrollButtonFarClickHandler() {
        const that = this;

        if (that.$.scrollButtonFar.disabled) {
            return;
        }

        that._scroll(1);
    }

    /**
     * Near scroll button click handler.
     */
    _scrollButtonNearClickHandler() {
        const that = this;

        if (that.$.scrollButtonNear.disabled) {
            return;
        }

        that._scroll(-1);
    }

    /**
     * scrollViewer down handler.
     */
    _scrollViewerDownHandler(event) {
        const that = this;

        if (event.target !== that.$.scrollViewer || that.disabled || that.displayLoadingIndicator || (!that._isMobile && event.which !== 1)) {
            return;
        }

        const target = event.originalEvent.target;

        if (target === that.$.editInput) {
            that._editInputDown = true;
            return;
        }

        if (that._isMobile) {
            const currentScroll = that.$.scrollViewer.scrollTop,
                currentTop = that.getBoundingClientRect().top,
                timeout = setTimeout(function () {
                    if (that._dragDetails ||
                        that.$.scrollViewer.scrollTop !== currentScroll ||
                        that.getBoundingClientRect().top !== currentTop) {
                        return;
                    }
                    else {
                        const oldContext = that.context;

                        that.context = that;
                        that._continueSelection(target, event);
                        that.context = oldContext;
                    }
                }, 250);

            that._downTimeoutInfo = { target: target, event: event, scrollTop: currentScroll, top: currentTop, timeout: timeout };
        }
        else {
            that._continueSelection(target, event);
        }
    }

    /**
     * Continues selection.
     */
    _continueSelection(target, event) {
        const that = this,
            pressedItem = target.closest('smart-tree-item') || target.closest('smart-tree-items-group');

        if (!(pressedItem && pressedItem.parentElement && that._canItemBeSelected(pressedItem, true))) {
            return;
        }

        const arrow = target.closest('.smart-tree-items-group-arrow');
        let selectionHandler;

        if (pressedItem instanceof Smart.TreeItem) {
            selectionHandler = '_handleSelection';
        }
        else {
            if (target === pressedItem.container || target === pressedItem.container.firstElementChild) {
                return;
            }

            selectionHandler = '_menuItemsGroupSelectionHandler';
        }

        clearTimeout(that._dblclickTimeout);

        if (pressedItem !== that._dblclickObject.target) {
            that._dblclickObject.numberOfClicks = 0;
        }

        that._dblclickObject.target = pressedItem;
        that._dblclickObject.numberOfClicks++;

        that._dblclickTimeout = setTimeout(function () {
            that._dblclickObject.numberOfClicks = 0;
        }, 300);

        if (that._dblclickObject.numberOfClicks === 2) {
            if (!that.editable) {
                that._dblclickHandler(pressedItem, arrow, event);
                that._dblclickObject.numberOfClicks = 0;
            }
            else {
                that._startEditing(pressedItem);
                return;
            }
        }

        if (pressedItem.selected) {
            that._downItem = pressedItem;
        }

        that[selectionHandler](pressedItem, event);
        that._discardKeyboardHover(true);
        that._hoverViaKeyboard(pressedItem, false, undefined, false);

        if (!arrow) {
            that._startDragging(pressedItem, event);
        }
    }

    /**
     * scrollViewer touchmove handler.
     */
    _scrollViewerTouchmoveHandler(event) {
        if (this._dragDetails && event.cancelable) {
            event.preventDefault();
            event.stopPropagation();
        }
    }

    /**
     * scrollViewer wheel handler.
     */
    _scrollViewerWheelHandler() {
        const that = this;

        if (that.scrollMode === 'scrollButtons' && that.overflow !== 'hidden') {
            that._updateScrollButtonVisibility();
        }
    }

    /**
     * Selects a range of items.
     */
    _selectItemRange(from, to) {
        const that = this,
            treeItems = Array.from(that.$.mainContainer.querySelectorAll('smart-tree-item, smart-tree-items-group')),
            indexOfFrom = treeItems.indexOf(from),
            indexOfTo = treeItems.indexOf(to),
            selectedIndexes = [];

        for (let i = Math.min(indexOfFrom, indexOfTo); i <= Math.max(indexOfFrom, indexOfTo); i++) {
            const currentItem = treeItems[i];

            if (that._canItemBeHovered(currentItem)) {
                selectedIndexes.push(currentItem.path);
                currentItem.set('selected', true);
            }
        }

        return selectedIndexes;
    }

    /**
     * selectstart handler.
     */
    _selectstartHandler(event) {
        if (this._dragDetails) {
            event.preventDefault();
        }
    }

    /**
     * Sets whether the element can be focused.
     */
    _setFocusable() {
        super._setFocusable();

        const that = this;

        if (that.disabled || that.unfocusable) {
            that.$.filterInput.tabIndex = -1;
            return;
        }

        that.$.filterInput.removeAttribute('tabindex');
    }

    /**
     * Sets item indentation.
     */
    _setIndentation(labelContainer, level, padding) {
        const that = this;

        let paddingSize = that._paddingSize;

        if (paddingSize === undefined) {
            paddingSize = parseFloat(getComputedStyle(that).getPropertyValue('--smart-tree-indent'));

            if (isNaN(paddingSize)) {
                paddingSize = 20;
            }
            else {
                paddingSize += 4;
            }

            that._paddingSize = paddingSize;
        }

        labelContainer.style[padding] = (level * paddingSize - paddingSize / 2) + 'px';
    }

    /**
     * Sets checked, unchecked, or indeterminate state to a checkbox.
     */
    _setThreeStateCheckbox(item, selectedChildren, indeterminateChildren) {
        if (selectedChildren === item.itemContainer.childElementCount && selectedChildren > 0) {
            item.removeAttribute('indeterminate');
            item.set('selected', true);
            item.setAttribute('aria-selected', true);
        }
        else if (selectedChildren === 0 && indeterminateChildren === 0) {
            item.removeAttribute('indeterminate');
            item.set('selected', false);
            item.setAttribute('aria-selected', false);
        }
        else {
            item.setAttribute('indeterminate', '');
            item.set('selected', false);
            item.setAttribute('aria-selected', false);
        }
    }

    /**
     * Sorts items.
     */
    _sortItems(item) {
        const that = this;

        if (!that.sorted) {
            return;
        }

        let parent;

        if (item instanceof Smart.TreeItemsGroup) {
            parent = item.container.firstElementChild;
        }
        else if (item === that.$.mainContainer) {
            parent = item;
        }

        let children = Array.from(parent.children);

        if (that.sort) {
            // custom sorting
            const customSortingResult = that.sort(children, item);

            if (Array.isArray(customSortingResult)) {
                children = customSortingResult;
            }
        }
        else if (that.sortDirection === 'asc') {
            children.sort(function (a, b) {
                return (a.label).localeCompare(b.label);
            });
        }
        else {
            children.sort(function (a, b) {
                return (b.label).localeCompare(a.label);
            });
        }

        // sort items in DOM
        for (let i = children.length - 1; i >= 0; i--) {
            parent.insertBefore(children[i], parent.firstElementChild);
        }
    }

    /**
     * Sorts a collection of item paths.
     */
    _sortPathCollection(collection) {
        collection.sort(function (a, b) {
            const aSplit = a.split('.'),
                bSplit = b.split('.'),
                maxLength = Math.max(aSplit.length, bSplit.length);

            for (let i = 0; i < maxLength; i++) {
                const aCurrent = parseFloat(aSplit[i]),
                    bCurrent = parseFloat(bSplit[i]);

                if (isNaN(aCurrent)) {
                    return -1;
                }

                if (isNaN(bCurrent)) {
                    return 1;
                }

                if (aCurrent < bCurrent) {
                    return -1;
                }

                if (aCurrent > bCurrent) {
                    return 1;
                }
            }
        });
    }

    /**
     * starts dragging operation
     */
    _startDragging(pressedItem, event) {
        const that = this,
            selectionMode = that.selectionMode;

        if (!that.allowDrag || that._editedItem || selectionMode === 'none') {
            return;
        }

        const items = [],
            validItems = [];
        let validateOnDrop;

        if (['one', 'zeroAndOne', 'zeroOrOne', 'checkBox', 'radioButton'].indexOf(selectionMode) !== -1) {
            validateOnDrop = false;
            items.push(pressedItem);
            validItems.push(pressedItem);
        }
        else {
            // selectionModes 'oneOrManyExtended', 'zeroOrMany', 'oneOrMany'
            validateOnDrop = true;

            for (let i = 0; i < that.selectedIndexes.length; i++) {
                items.push(that._menuItems[that.selectedIndexes[i]]);
                validItems.push(items[i]);
            }

            for (let i = 0; i < items.length; i++) {
                const item = items[i];

                if (validItems.indexOf(item) === -1) {
                    continue;
                }

                for (let j = validItems.length - 1; j >= 0; j--) {
                    const nextItem = validItems[j];

                    if (nextItem === item) {
                        break;
                    }

                    if (item.contains(nextItem)) {
                        validItems.splice(j, 1);
                    }
                }
            }
        }

        that._dragDetails = {
            StartPosition: {
                left: event.pageX, top: event.pageY
            },
            Items: items,
            ValidItems: validItems,
            Item: pressedItem,
            FeedbackShown: false,
            ValidateOnDrop: validateOnDrop,
            OriginalEvent: event,
            StartTime: new Date(),
            Dragging: true
        };

        Smart.Tree.treeItemDragged = true;
        that.$.scrollViewer._scrollView.disableSwipeScroll = true;

        if (that.allowDrop) {
            Smart.Tree.hoveredTree = that;
            Smart.Tree.hoveredItem = pressedItem;
        }
    }

    /**
     * Starts editing operation.
     */
    _startEditing(item) {
        const that = this,
            editInput = that.$.editInput;
        let getOffset, padding;

        if (!that._canItemBeSelected(item, true)) {
            return;
        }

        const labelContainer = item.firstElementChild,
            labelElement = labelContainer.firstElementChild;

        if (!that.rightToLeft) {
            getOffset = function () {
                return labelElement.offsetLeft + parseFloat(window.getComputedStyle(labelContainer).borderLeftWidth);
            };
            padding = 'paddingLeft';
        }
        else {
            getOffset = function () {
                return labelContainer.offsetWidth - labelElement.offsetLeft - labelElement.offsetWidth;
            };
            padding = 'paddingRight';
        }

        if (item instanceof Smart.TreeItemsGroup) {
            editInput.style[padding] = getOffset() + (that.showLines ? parseFloat(window.getComputedStyle(labelElement.firstElementChild).paddingLeft) : 0) - 1 + 'px';
            editInput.style.height = labelContainer.offsetHeight + 'px';
        }
        else {
            editInput.style[padding] = item.offsetWidth + parseInt(labelContainer.style[padding], 10) - labelContainer.offsetWidth + parseFloat(window.getComputedStyle(labelElement.firstElementChild).paddingLeft) - 2 + 'px';
            editInput.style.height = item.offsetHeight + 'px';
        }

        editInput.style.top = that._getOffsetTop(item) + 'px';
        that.$editInput.removeClass('smart-hidden');
        editInput.value = item.label;
        that._editedItem = item;
        editInput.setAttribute('aria-label', 'Edit item ' + item.label);

        setTimeout(function () {
            editInput.focus();
        }, 0)
    }

    /**
     * styleChanged event handler.
     */
    _styleChangedHandler(event) {
        if (event.detail.styleProperties && event.detail.styleProperties['font-size']) {
            this._checkOverflow();
        }
    }

    /**
     * Updates scroll button visibility.
     */
    _updateScrollButtonVisibility() {
        const that = this,
            overflow = that.overflow;

        if (that.scrollMode === 'scrollbar' || overflow === 'hidden') {
            return;
        }

        let showNear = true,
            showFar = true;

        if (Math.round(that.$.scrollViewer.scrollTop) === 0) {
            showNear = false;
        }

        if (Math.round(that.$.scrollViewer.$.scrollViewerContainer.offsetHeight + that.$.scrollViewer.scrollTop) >=
            Math.round(that.$.scrollViewer.$.scrollViewerContentContainer.offsetHeight)) {
            showFar = false;
        }

        if (overflow === 'auto') {
            if (showNear && showFar) {
                that.$scrollButtonNear.removeClass('smart-hidden');
                that.$scrollButtonFar.removeClass('smart-hidden');
                that.$scrollViewer.removeClass('one-button-shown');
                that.$.scrollViewer.refresh();
                return;
            }

            if (showNear) {
                that.$scrollButtonNear.removeClass('smart-hidden');
            }
            else {
                that.$scrollButtonNear.addClass('smart-hidden');
            }

            if (showFar) {
                that.$scrollButtonFar.removeClass('smart-hidden');
            }
            else {
                that.$scrollButtonFar.addClass('smart-hidden');
            }

            that.$scrollViewer.addClass('one-button-shown');
            that.$.scrollViewer.refresh();
        }
        else if (overflow === 'scroll' && !that.disabled) {
            that.$.scrollButtonNear.disabled = !showNear;
            that.$.scrollButtonFar.disabled = !showFar;
        }
    }

    /**
     * Updates stored state.
     */
    _updateState(field, value, add) {
        const that = this;

        switch (field) {
            case 'expanded': {
                const index = that._state.expanded.indexOf(value);

                if (add && index === -1) {
                    that._state.expanded.push(value);
                }
                else if (!add && index !== -1) {
                    that._state.expanded.splice(index, 1);
                }
                else {
                    return;
                }

                break;
            }
            case 'filter':
                that._state.filter = value !== undefined ? value : that.$.filterInput.value;
                break;
            case 'selected':
                that._state.selected = [];

                for (let i = 0; i < that.selectedIndexes.length; i++) {
                    const currentSelectedItem = that._menuItems[that.selectedIndexes[i]];

                    that._state.selected.push(currentSelectedItem.id);
                }
                break;
            case 'sorted':
                that._state.sorted = value;
                break;
        }

        if (that.autoSaveState) {
            window.localStorage.setItem('smartTree' + that.id, JSON.stringify(that._state));
        }
    }

    /**
     * Vertical Scroll Bar handler
     */
    _verticalScrollbarHandler() {
        const scrollViewer = this,
            verticalScrollBar = scrollViewer.$.verticalScrollBar,
            value = verticalScrollBar.value;

        if (scrollViewer.disabled) {
            return;
        }

        if (verticalScrollBar.max === value) {
            if (!scrollViewer._bottomReached) {
                scrollViewer.$.fireEvent('scrollBottomReached');
                delete scrollViewer._topReached;
                scrollViewer._bottomReached = true;
            }

            return;
        }

        if (verticalScrollBar.min === value) {
            if (!scrollViewer._topReached) {
                scrollViewer.$.fireEvent('scrollTopReached');
                delete scrollViewer._bottomReached;
                scrollViewer._topReached = true;
            }
            return;
        }

        delete scrollViewer._topReached;
        delete scrollViewer._bottomReached;
    }
});
