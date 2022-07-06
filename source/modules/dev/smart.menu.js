
/* Smart UI v14.1.1 (2022-07-04) 
Copyright (c) 2011-2022 jQWidgets. 
License: https://htmlelements.com/license/ */ //

/**
 * Menu Item custom element.
 */
Smart('smart-menu-item', class MenuItem extends Smart.BaseElement {
    // Menu Item's properties.
    static get properties() {
        return {
            'checked': {
                value: false,
                type: 'boolean'
            },
            'label': {
                value: '',
                type: 'any'
            },
            'level': {
                value: null,
                type: 'number?'
            },
            'separator': {
                value: false,
                type: 'boolean'
            },
            'shortcut': {
                value: '',
                type: 'string'
            },
            'value': {
                value: null,
                type: 'any'
            }
        };
    }

    get enableShadowDOM() {
        return false;
    }

    /**
     * Menu Items Group's HTML template.
     */
    template() {
        return '';
    }

    ready() {
        const that = this;

        super.ready();

        that.$.addClass('smart-unselectable');
        that.setAttribute('role', 'menuitem');

        if (that.checked) {
            that.setAttribute('aria-checked', true);
        }

        if (that.isDirty === false) {
            return;
        }

        const parentElement = that.closest('smart-menu, smart-tree');

        if (parentElement && parentElement.isRendered) {
            cancelAnimationFrame(Smart.Menu.processTimer);

            Smart.Menu.processTimer = requestAnimationFrame(() => {
                parentElement._lazyInitItems();
            });
        }
    }

    propertyChangedHandler(propertyName, oldValue, newValue) {
        const that = this;

        super.propertyChangedHandler(propertyName, oldValue, newValue);

        if (that.tagName.toLowerCase() === 'smart-tree-item') {
            return;
        }

        const parentMenu = that.menu,
            parentItem = that.parentItem,
            parentObject = parentItem || parentMenu;

        if (propertyName === 'label') {
            if (newValue === '') {
                that.label = oldValue;
                return;
            }

            that.setAttribute('aria-label', newValue);

            if (parentMenu) {
                parentMenu._setItemLabel(that, newValue);
            }

            return;
        }

        if (!parentMenu) {
            return;
        }

        if (propertyName === 'separator') {
            parentMenu._refreshCheckableItems(parentObject);
            return;
        }

        if (propertyName !== 'disabled' || newValue === false || !that.checked) {
            return;
        }

        super.propertyChangedHandler(propertyName, oldValue, newValue);

        that.checked = false;

        const checkMode = parentObject.checkMode;

        if (checkMode === 'radioButton') {
            parentMenu._validateRadioButtonSelection(parentItem, that.level, []);
        }
        else if (checkMode !== 'checkbox') {
            parentMenu._refreshCheckableItems(parentObject);
        }
    }
});

/**
 * Menu Items Group custom element.
 */
Smart('smart-menu-items-group', class MenuItemsGroup extends Smart.BaseElement {
    // Menu Items Group's properties.
    static get properties() {
        return {
            'checkable': {
                value: false,
                type: 'boolean'
            },
            'checked': {
                value: false,
                type: 'boolean'
            },
            'checkMode': {
                value: 'checkbox',
                type: 'string'
            },
            'dropDownHeight': {
                value: null,
                type: 'number?'
            },
            'expanded': {
                value: false,
                type: 'boolean'
            },
            'label': {
                value: '',
                type: 'any'
            },
            'level': {
                value: null,
                type: 'number?'
            },
            'separator': {
                value: false,
                type: 'boolean'
            },
            'value': {
                value: null,
                type: 'any'
            }
        };
    }

    get enableShadowDOM() {
        return false;
    }

    /**
     * Menu Items Group's HTML template.
     */
    template() {
        return '';
    }

    ready() {
        const that = this;

        super.ready();

        that.$.addClass('smart-unselectable');
        that.setAttribute('role', 'menuitem');

        that.setAttribute('aria-haspopup', true);
        that.setAttribute('aria-expanded', that.expanded);

        if (that.checked) {
            that.setAttribute('aria-checked', true);
        }

        if (that.isDirty === false) {
            return;
        }

        const parentElement = that.closest('smart-menu, smart-tree');

        if (parentElement && parentElement.isRendered) {
            cancelAnimationFrame(Smart.Menu.processTimer);

            Smart.Menu.processTimer = requestAnimationFrame(() => {
                parentElement._lazyInitItems();
            });
        }
    }

    propertyChangedHandler(propertyName, oldValue, newValue) {
        const that = this;

        super.propertyChangedHandler(propertyName, oldValue, newValue);

        if (that.tagName.toLowerCase() === 'smart-tree-items-group') {
            return;
        }

        const parentMenu = that.menu,
            parentItem = that.parentItem,
            parentObject = parentItem || parentMenu;

        if (propertyName === 'label') {
            if (newValue === '') {
                that.label = oldValue;
                return;
            }

            that.setAttribute('aria-label', newValue);

            if (parentMenu) {
                parentMenu._setItemLabel(that, newValue);
            }

            return;
        }

        if (!parentMenu) {
            return;
        }

        if (['checkable', 'checkMode', 'disabled', 'separator'].indexOf(propertyName) === -1) {
            return;
        }

        switch (propertyName) {
            case 'checkable':
                if (newValue) {
                    that.itemContainer.setAttribute('checkable', '');
                }
                else {
                    that.itemContainer.removeAttribute('checkable');
                }

                if (parentMenu._isContainerOpened(that.container.level, that.container) &&
                    parentMenu.mode !== 'tree' && !parentMenu._minimized) {
                    parentMenu._closeSubContainers(that.level + 2);
                }

                parentMenu._updateItemRoles(that);
                break;
            case 'checkMode':
                that.itemContainer.setAttribute('check-mode', newValue);
                parentMenu._changeToRadioButtonMode(newValue, that.itemContainer, that);
                parentMenu._updateItemRoles(that);
                break;
            case 'disabled': {
                if (Smart.ListMenu && parentMenu instanceof Smart.ListMenu) {
                    if (parentMenu._view) {
                        while (that.contains(parentMenu._view)) {
                            parentMenu._backButtonClickHandler();
                        }
                    }
                }
                else if (parentMenu._isContainerOpened(that.container.level, that.container)) {
                    parentMenu._closeSubContainers(that.level + 1, that.container);
                }

                if (!that.checked) {
                    return;
                }

                that.checked = false;

                const checkMode = parentObject.checkMode;

                if (checkMode === 'radioButton') {
                    parentMenu._validateRadioButtonSelection(parentItem, that.level, []);
                }
                else if (checkMode !== 'checkbox') {
                    parentMenu._refreshCheckableItems(parentObject);
                }

                break;
            }
            case 'separator':
                parentMenu._refreshCheckableItems(parentObject);
                break;
        }
    }
});

/**
 * Menu custom element.
 */
Smart('smart-menu', class Menu extends Smart.BaseElement {
    // Menu's properties.
    static get properties() {
        return {
            'autoCloseDelay': {
                value: 100,
                type: 'number'
            },
            'autoFocusOnMouseenter': {
                value: false,
                type: 'boolean'
            },
            'checkable': {
                value: false,
                type: 'boolean'
            },
            'checkboxes': {
                value: false,
                type: 'boolean'
            },
            'checkMode': {
                value: 'checkbox',
                type: 'string'
            },
            'closeAction': {
                value: 'up',
                allowedValues: ['up', 'down', 'none'],
                type: 'string'
            },
            'dataSource': {
                value: null,
                type: 'array?',
                reflectToAttribute: false
            },
            'displayMember': {
                value: 'label',
                type: 'string'
            },
            'dropDownAppendTo': {
                value: null,
                type: 'any?'
            },
            'dropDownOverlay': {
                value: false,
                type: 'boolean'
            },
            'dropDownPosition': {
                value: 'auto',
                allowedValues: ['top-left', 'top-right', 'bottom-left', 'bottom-right', 'overlay-left', 'overlay-right', 'auto'],
                type: 'string'
            },
            'enableMouseWheelAction': {
                value: false,
                type: 'boolean'
            },
            'innerHTML': {
                type: 'string',
                reflectToAttribute: false
            },
            'itemsMember': {
                value: 'items',
                type: 'string'
            },
            'minimizeIconTemplate': {
                value: null,
                type: 'string?'
            },
            'minimizeWidth': {
                value: null,
                type: 'number?'
            },
            'mode': {
                value: 'horizontal',
                allowedValues: ['horizontal', 'vertical', 'dropDown', 'tree'],
                type: 'string'
            },
            'opened': {
                value: false,
                type: 'boolean'
            },
            'overflow': {
                value: 'auto',
                allowedValues: ['auto', 'hidden', 'scroll'],
                type: 'string'
            },
            'preventCloseOnCheck': {
                value: false,
                type: 'boolean'
            },
            'selectionMode': {
                value: 'click',
                allowedValues: ['click', 'mouseenter'],
                type: 'string'
            },
            'valueMember': {
                value: 'value',
                type: 'string'
            }
        };
    }

    /**
     * Menu's event listeners.
     */
    static get listeners() {
        return {
            'container.click': '_selectionHandler',
            'keydown': '_keydownHandler',
            'mouseenter': '_mouseenterHandler',
            'mouseleave': '_mouseleaveHandler',
            'container.mouseout': '_mouseoutMouseoverHandler',
            'container.mouseover': '_mouseoutMouseoverHandler',
            'resize': '_resizeHandler',
            'transitionend': '_transitionendHandler',
            'hamburgerIcon.click': '_hamburgerIconClickHandler',
            'mainContainer.click': '_mainContainerHandler',
            'mainContainer.mouseleave': '_mainContainerHandler',
            'mainContainer.mouseout': '_mainContainerHandler',
            'mainContainer.mouseover': '_mainContainerHandler',
            'document.down': '_documentDownHandler',
            'document.up': '_documentUpHandler'
        };
    }

    /**
     * Menu's required files.
     */
    static get requires() {
        return {
            'Smart.RepeatButton': 'smart.button.js'
        }
    }

    /**
     * CSS files needed for the element (ShadowDOM)
     */
    static get styleUrls() {
        return [
            'smart.button.css',
            'smart.menu.css'
        ]
    }

    /**
     * Menu's items.
     */
    get items() {
        return this._menuItems;
    }

    /**
     * Menu's HTML template.
     */
    template() {
        return `<div id="container" role="presentation">
                    <div id="minimizedHeader" class="smart-header smart-minimized-header smart-hidden" role="presentation">
                        <div id="hamburgerIcon" class="smart-hamburger-icon smart-hidden" role="button" aria-label="Toggle minimized menu" aria-haspopup="true">
                            <div id="hamburgerIconLineTop" class="smart-hamburger-icon-line smart-hamburger-icon-line-top" role="presentation"></div>
                            <div id="hamburgerIconLineCenter" class="smart-hamburger-icon-line smart-hamburger-icon-line-center" role="presentation"></div>
                            <div id="hamburgerIconLineBottom" class="smart-hamburger-icon-line smart-hamburger-icon-line-bottom" role="presentation"></div>
                            <div id="customIconContainer" class="smart-hamburger-icon-custom-container smart-hidden" role="presentation"></div>
                        </div>
                    </div>
                    <smart-repeat-button id="scrollButtonNear" class="smart-menu-scroll-button smart-spin-button smart-scroll-button-near smart-hidden" animation="[[animation]]" unfocusable right-to-left="[[rightToLeft]]">
                        <div id="arrowNear" class="smart-arrow" aria-hidden="true"></div>
                    </smart-repeat-button>
                    <div id="mainContainer" class="smart-menu-main-container" role="presentation">
                        <content></content>
                    </div>
                    <smart-repeat-button id="scrollButtonFar" class="smart-menu-scroll-button smart-spin-button smart-scroll-button-far smart-hidden" animation="[[animation]]" unfocusable right-to-left="[[rightToLeft]]">
                        <div id="arrowFar" class="smart-arrow" aria-hidden="true"></div>
                    </smart-repeat-button>
                </div>`;
    }

    /**
     * Called when the element is attached to the DOM.
     */
    attached() {
        const that = this;

        super.attached();

        if (!that.isCompleted || !that.isRendered ||
            that._element === 'tree' || Smart.ListMenu && that instanceof Smart.ListMenu) {
            return;
        }

        const scrollInfo = that._scrollInfo;

        if (that.dropDownAppendTo !== null) {
            if (that._minimized) {
                that._dropDownParent.appendChild(that.$.mainContainer);
            }
            else {
                for (let i = 0; i < that._containersInBody.length; i++) {
                    that._dropDownParent.appendChild(that._containersInBody[i]);
                }
            }

            if (that.mode === 'dropDown') {
                if (that._dropDownParent === that.parentElement) {
                    if (that._dynamicallyReparented) {
                        delete that._dynamicallyReparented;
                    }
                    else {
                        that._positionRelativeTo = null;
                    }
                }
                else {
                    that._positionRelativeTo = that.parentElement;
                    that._dynamicallyReparented = true;
                    setTimeout(function () {
                        that._dropDownParent.appendChild(that);
                    }, 0);
                }
            }
        }

        if (scrollInfo) {
            scrollInfo.forEach(function (settings, element) {
                element.scrollLeft = settings.left;
                element.scrollTop = settings.top;
            });
        }
    }

    /**
     * Called when the element is detached from the DOM.
     */
    detached() {
        const that = this;

        super.detached();

        if (that._element === 'tree' || Smart.ListMenu && that instanceof Smart.ListMenu) {
            return;
        }

        that._close();

        if (that.dropDownAppendTo !== null) {
            if (that._minimized) {
                that._dropDownParent.removeChild(that.$.mainContainer);
            }
            else {
                that._removeContainersInBody();
            }
        }
    }

    /**
     * Called when the element is ready. Used for one-time configuration of the Menu.
     */
    ready() {
        super.ready();
    }

    render() {
        const that = this;

        that._element = 'menu';
        that._edgeMacFF = Smart.Utilities.Core.Browser.Edge ||
            Smart.Utilities.Core.Browser.Firefox && navigator.platform.toLowerCase().indexOf('mac') !== -1;
        that._containers = [];
        that._containersInBody = [];
        that._openedContainers = [];
        that._containersFixedHeight = [];
        that._menuItemsGroupsToExpand = [];
        that._additionalScrollButtons = [];
        that._scrollInfo = new Map();

        that._createElement();
        super.render();
    }

    /**
     * Adds an item.
     *
     * @param {HTMLElement} item A smart-menu-item to add to the Menu.
     * @param {HTMLElement/String} parent Optional The smart-menu-items-group (or its id or numeric path) to add the item to.
     */
    addItem(item, parent) {
        const that = this;

        if (!(item instanceof Smart.MenuItem || item instanceof Smart.MenuItemsGroup)) {
            if (typeof item === 'string') {
                const menuItem = document.createElement('smart-menu-item');

                menuItem.label = item;
                item = menuItem;
            }
            else if (item && item.label) {
                const menuItem = document.createElement('smart-menu-item');

                menuItem.label = item.label;
                item = menuItem;
            }
            else {
                return;
            }
        }

        let parentObject, level, container;

        item.isDirty = false;

        if (parent === undefined) {
            parent = that.$.mainContainer;
            parentObject = that;
            level = 1;
            container = parent;
        }
        else {
            parent = that.getItem(parent);

            if (parent instanceof Smart.MenuItemsGroup === false) {
                return;
            }

            parentObject = parent;
            level = parent.level + 1;
            container = parent.itemContainer;
        }

        that._createItemHTMLStructure(item, level, parent, container.childElementCount, 0);

        if (item instanceof Smart.MenuItemsGroup) {
            that._processHTML(item, level + 1);
            that._checkContainersLength();
        }

        container.appendChild(item);
        that._checkOverflowAddRemove(item.level, container);

        if (item instanceof Smart.MenuItemsGroup && (that.mode === 'tree' || that._minimized)) {
            const arrows = item.getElementsByClassName('smart-menu-items-group-arrow');

            for (let i = 0; i < arrows.length; i++) {
                arrows[i].className = 'smart-menu-items-group-arrow down smart-arrow-down';
            }

            that._expandItemsByDefault();
        }

        that._refreshCheckableItems(parentObject);
    }

    /**
     * Checks an item.
     *
     * @param {HTMLElement/String} item smart-menu-item/smart-menu-items-group (or its id or numeric path).
     */
    checkItem(item) {
        const that = this;

        item = that.getItem(item);

        if (item === undefined || item.checked || item.disabled || item.templateApplied) {
            return;
        }

        that._toggleItem(item);
    }

    /**
     * Clears all Menu items.
     */
    clear() {
        const that = this;

        that.$.mainContainer.innerHTML = '';
        that._removeContainersInBody();
        that._menuItems = {};
        that._containers = [];
        that._containersInBody = [];
        that._openedContainers = [];
        that._containersFixedHeight = [];
        that._menuItemsGroupsToExpand = [];
        that._additionalScrollButtons = [];
    }

    /**
     * Clicks on a MenuItem element
     * @param {HTMLElement | string} item - smartMenuItem, smartMenuItemGroup or it's id/path
     * @returns 
     */
    clickItem(item) {
        const that = this;

        if (typeof item === 'string') {
            item = that.getItem(item);
        }

        if (!item || !item.nodeName) {
            return
        }

        that._selectionHandler({
            type: 'click',
            isTrusted: true,
            target: item,
            stopPropagation: () => { },
            preventDefault: () => { }
        });
    }

    /**
     * Closes the Menu when "mode" is 'dropDown'.
     */
    close() {
        const that = this;

        if (that.mode !== 'dropDown' || that.opened === false && that.$.hasClass('smart-visibility-hidden')) {
            return;
        }

        const closingEvent = that.$.fireEvent('closing', arguments[0] || { trigger: 'programmatic' });

        if (!closingEvent.defaultPrevented) {
            that.opened = false;
            that.$.addClass('smart-visibility-hidden');
            that._close();
            that.$.fireEvent('close');
        }
        else {
            that.opened = true;
        }
    }

    /**
     * Collapses an item.
     *
     * @param {HTMLElement/String} item Optional smart-menu-item/smart-menu-items-group (or its id or numeric path).
     * @param {Boolean} animation Optional If set to false, disables collapse animation even if animation is enabled for the element.
     */
    collapseItem(item, animation) {
        const that = this,
            animationType = that.animation,
            restoreAnimation = animation === false && that.hasAnimation;

        if (item !== undefined) {
            item = that.getItem(item);

            if (item === undefined || item instanceof Smart.MenuItem) {
                return;
            }
        }
        else {
            // collapse all
            if (restoreAnimation) {
                that.animation = 'none';
            }

            that._close();

            if (restoreAnimation) {
                setTimeout(function () {
                    that.animation = animationType;
                }, 0);
            }

            return;
        }

        const level = item.level;

        if (that._openedContainers[level + 1] && that._isContainerOpened(level + 1, item.container)) {
            const mode = that.mode;

            if (restoreAnimation) {
                that.animation = 'none';
            }

            that._closeSubContainers(level + 1, item.container, undefined, arguments[2] !== false);

            if (level === 1 || mode === 'tree') {
                that._checkOverflow(that.$.mainContainer, mode === 'horizontal', [that.$.scrollButtonNear, that.$.scrollButtonFar]);
            }

            if (restoreAnimation) {
                that.animation = animationType;
            }
        }
    }

    /**
     * Expands an item.
     *
     * @param {HTMLElement/String} item smart-menu-item/smart-menu-items-group (or its id or numeric path).
     * @param {Boolean} animation Optional If set to false, disables expand animation even if animation is enabled for the element.
     */
    expandItem(item, animation) {
        const that = this;

        item = that.getItem(item);

        if (item === undefined ||
            (item instanceof Smart.MenuItemsGroup &&
                that._isContainerOpened(item.level + 1, item.container) &&
                that._isBranchExpanded(item))) {
            return;
        }

        //Checks whether the item is lazy loaded or not yet
        if (Smart.Menu.processTimer !== undefined) {
            that._lazyInitItems();
        }

        const stack = [item],
            animationType = that.animation,
            restoreAnimation = animation === false && that.hasAnimation;
        let stackItem = item.parentItem;

        if (restoreAnimation) {
            that.animation = 'none';
        }

        that._discardKeyboardHover();

        while (stackItem) {
            stack.unshift(stackItem);
            stackItem = stackItem.parentItem;
        }

        for (let i = 0; i < stack.length; i++) {
            const currentStackItem = stack[i];

            if (i === stack.length - 1 && currentStackItem instanceof Smart.MenuItem) {
                if (!(currentStackItem.disabled || currentStackItem.templateApplied)) {
                    that._hoverViaKeyboard(currentStackItem);
                }

                break;
            }

            if (!that._isContainerOpened(currentStackItem.container.level, currentStackItem.container)) {
                that._menuItemsGroupSelectionHandler(currentStackItem, { target: currentStackItem, type: 'expand', isTrusted: true }, arguments[2]);
            }
        }

        if (restoreAnimation) {
            that.animation = animationType;
        }
    }

    /**
     * Gets an item by its id or numeric path.
     *
     * @param {String} id The id or numeric path of an item.
     */
    getItem(id) {
        const that = this;
        let item;

        if (id === undefined || id === null) {
            return;
        }

        if (!that._menuItems) {
            return;
        }

        if (typeof id === 'string') {
            if (/^[0-9]*([.]?[0-9]*)*$/gm.test(id)) {
                return that._menuItems[id];
            }

            //Note: that.$.mainContainer.querySelector('#' + id) This will fail in cases where the id starts with a number
            //Reference: Search StackOverflow -> "using-queryselector-with-ids-that-are-numbers"
            item = that.$.mainContainer.querySelector('[id="' + id + '"]');

            if (item === null) {
                return that._menuItems[id];
            }
        }
        else if (!isNaN(id)) {
            return that._menuItems[id.toString()];
        }
        else {
            item = id;
        }

        if (!(item instanceof Smart.MenuItem || item instanceof Smart.MenuItemsGroup) ||
            !(that.contains(item) || that.$.mainContainer.contains(item) || item.parentElement.parentElement.ownerElement === that)) {
            return;
        }

        return item;
    }

    /**
     * Maximizes the Menu.
     */
    maximize() {
        const that = this;

        if (!that._minimized) {
            return;
        }

        const animationType = that.animation;

        that.$.mainContainer.style.marginTop = '';
        that.$.mainContainer.style.marginLeft = '';

        if (that.enableShadowDOM && !that.$.mainContainer.id) {
            that.$.mainContainer.id = that.$.mainContainer.getAttribute('smart-id');
        }

        if (animationType !== 'none') {
            that.animation = 'none';
        }

        that._positionDetection.removeOverlay();
        that._closeSubContainers(2);
        that.$minimizedHeader.addClass('smart-hidden');

        that._minimized = false;

        if (that._minimizedDropDownOpened) {
            that.$hamburgerIcon.removeClass('smart-close-button');
            that._minimizedDropDownOpened = false;
        }

        if (that.dropDownAppendTo !== null) {
            that._appendMinimizedContainerToMenu(that.$.mainContainer, that.$.scrollButtonFar);
        }

        if (that.mode !== 'tree') {
            that.$mainContainer.addClass('smart-menu-main-container');
            that.$mainContainer.removeClass('smart-menu-minimized-items-container');

            const arrows = that.$.mainContainer.getElementsByClassName('smart-menu-items-group-arrow');

            for (let i = 0; i < arrows.length; i++) {
                that._setArrowDirection(arrows[i], arrows[i].parentElement.parentElement.level + 1);
            }

            if (that.dropDownAppendTo !== null) {
                that._moveDropDownsToExternalContainer();
            }

            that._applyContainerFixedHeight();
        }

        that.$mainContainer.removeClass('smart-visibility-hidden');
        that.$hamburgerIcon.addClass('smart-hidden');

        that.removeAttribute('minimized');

        that._checkOverflow(that.$.mainContainer, that.mode === 'horizontal', [that.$.scrollButtonNear, that.$.scrollButtonFar]);

        if (animationType !== 'none') {
            setTimeout(function () {
                that.animation = animationType;
            }, 0);
        }

        that.$.mainContainer.removeAttribute('drop-down');

        that.$.hamburgerIcon.removeAttribute('aria-expanded');
        that.$.hamburgerIcon.removeAttribute('aria-owns');
        that.$.mainContainer.setAttribute('role', 'presentation');
        that.$.mainContainer.removeAttribute('aria-orientation');
        that.setAttribute('role', 'menu');
        that.setAttribute('aria-orientation', that.mode === 'horizontal' ? 'horizontal' : 'vertical');
    }

    /**
     * Minimizes the Menu.
     */
    minimize() {
        const that = this;

        if (that._minimized || that.mode === 'dropDown') {
            return;
        }

        that.$minimizedHeader.removeClass('smart-hidden');

        const differentDropDownParent = that.dropDownAppendTo !== null,
            animationType = that.animation,
            restoreAnimation = that.hasAnimation;

        if (restoreAnimation) {
            that.animation = 'none';
        }

        that._positionDetection.removeOverlay();
        that._closeSubContainers(2);

        if (restoreAnimation && differentDropDownParent) {
            that.animation = animationType;
        }

        if (that.mode !== 'tree') {
            if (differentDropDownParent) {
                that._moveDropDownsToMenu();
            }

            that._removeContainerFixedHeight();
        }

        that._hideMainContainerScrollButtons();

        that.$mainContainer.removeClass('smart-menu-main-container');
        that.$mainContainer.addClass('smart-visibility-hidden');

        if (that.enableShadowDOM) {
            that.$.mainContainer.removeAttribute('id');
        }

        if (that._edgeMacFF) {
            that.$.mainContainer.style.left = '';
            that.$.mainContainer.style.top = '';
            that.$mainContainer.addClass('not-in-view');
        }

        that.$hamburgerIcon.removeClass('smart-hidden');

        if (differentDropDownParent) {
            that._appendMinimizedContainerToExternalElement(that.$.mainContainer);
        }

        setTimeout(function () {
            that.$mainContainer.addClass('smart-menu-minimized-items-container');

            if (restoreAnimation && !differentDropDownParent) {
                that.animation = animationType;
            }
        }, 0);

        that._minimized = true;
        that.setAttribute('minimized', '');

        if (that.mode !== 'tree') {
            for (let i = 0; i < that._containers.length; i++) {
                const container = that._containers[i];

                if (container.level > 2) {
                    that._setArrowDirection(container.menuItemsGroup.children[0].children[1], container.level);
                }
            }
        }

        that.$.mainContainer.setAttribute('drop-down', '');

        that.setAttribute('role', 'presentation');
        that.removeAttribute('aria-orientation');
        that.$.hamburgerIcon.setAttribute('aria-expanded', false);
        that.$.hamburgerIcon.setAttribute('aria-owns', that.$.mainContainer.id);
        that.$.mainContainer.setAttribute('role', 'menu');
        that.$.mainContainer.setAttribute('aria-orientation', 'vertical');
    }

    /**
     * Opens the Menu when "mode" is 'dropDown'.
     *
     * @param {Number} left Horizontal position.
     * @param {Number} top Vertical position.
     */
    open(left, top) {
        const that = this;

        if (that.mode !== 'dropDown') {
            return;
        }

        const openingEvent = that.$.fireEvent('opening');

        if (openingEvent.defaultPrevented) {
            that.opened = false;
            return;
        }

        let actualParentRect;

        that.opened = true;

        if (that._positionRelativeTo) {
            const targetRect = that._positionRelativeTo.getBoundingClientRect();

            left += targetRect.left;
            top += targetRect.top;

            if (that._positionedParent) {
                actualParentRect = that._positionedParent.getBoundingClientRect();

                left -= actualParentRect.left;
                top -= actualParentRect.top;
            }
            else {
                left += window.pageXOffset;
                top += window.pageYOffset;
            }
        }

        // browser bounds detection
        let overflowLeft = left + that.offsetWidth - document.documentElement.clientWidth,
            overflowTop = top + that.offsetHeight - document.documentElement.clientHeight;

        if (actualParentRect) {
            overflowLeft += actualParentRect.left;
            overflowTop += actualParentRect.top;
        }
        else {
            overflowLeft -= window.pageXOffset;
            overflowTop -= window.pageYOffset;
        }

        if (overflowLeft > 0) {
            left -= overflowLeft;
        }
        else if (actualParentRect) {
            left = Math.max(left, -actualParentRect.left);
        }
        else {
            left = Math.max(left, window.pageXOffset);
        }

        if (overflowTop > 0) {
            top -= overflowTop;
        }
        else if (actualParentRect) {
            top = Math.max(top, -actualParentRect.top);
        }
        else {
            top = Math.max(top, window.pageYOffset);
        }
        // browser bounds detection end

        that.style.right = '';

        if (!isNaN(left)) {
            if (that.rightToLeft) {
                that.style.right = 'initial';
            }

            that.style.left = left + 'px';
        }

        if (!isNaN(top)) {
            that.style.top = top + 'px';
        }

        that.$.removeClass('smart-visibility-hidden');
        that.$.fireEvent('open');

        if (!that.hasAnimation) {
            if (that._checkOverflowOnOpen) {
                that._checkOverflow(that.$.mainContainer, false, [that.$.scrollButtonNear, that.$.scrollButtonFar]);
                delete that._checkOverflowOnOpen;
            }

            if (!that._noAutoFocus) {
                that.focus();
            }
        }
    }

    /**
     * Removes an item.
     *
     * @param {HTMLElement/String} item The smart-menu-item/smart-menu-items-group (or its id or numeric path) to remove.
     */
    removeItem(item) {
        const that = this;

        item = that.getItem(item);

        if (item === undefined) {
            return;
        }

        const itemParent = item.parentElement,
            parentObject = item.parentItem || that;

        if (item instanceof Smart.MenuItemsGroup) {
            const container = item.container;

            if (that._isContainerOpened(container.level, container)) {
                that._closeSubContainers(container.level, container);
            }

            if (item.level === 1) {
                const index = that._containersInBody.indexOf(container);

                if (index !== -1) {
                    that._containersInBody.splice(index, 1);

                    if (that.dropDownAppendTo !== null && that.mode !== 'tree' && !that._minimized) {
                        that._dropDownParent.removeChild(container);
                    }
                }
            }
        }

        itemParent.removeChild(item);
        that._refreshContainersArrays();
        that._menuItems = {};
        that._refreshItemPaths(that.$.mainContainer, true);
        that._checkOverflowAddRemove(item.level, itemParent);
        that._refreshCheckableItems(parentObject);
    }

    /**
     * Unchecks an item.
     *
     * @param {HTMLElement/String} item smart-menu-item/smart-menu-items-group (or its id or numeric path).
     */
    uncheckItem(item) {
        const that = this;

        item = that.getItem(item);

        if (item === undefined || !item.checked || item.disabled || item.templateApplied) {
            return;
        }

        that._toggleItem(item);
    }

    /**
     * Called when a property is changed.
     */
    propertyChangedHandler(propertyName, oldValue, newValue) {
        super.propertyChangedHandler(propertyName, oldValue, newValue);

        const that = this;

        if (that._element === 'tree') {
            return;
        }

        function checkOverflow() {
            if (that.dropDownAppendTo !== null || that.mode === 'tree') {
                that._checkOverflow(that.$.mainContainer, that.mode === 'horizontal', [that.$.scrollButtonNear, that.$.scrollButtonFar]);
            }
        }

        function updateAttribute(attribute, container, setAttribute) {
            if (setAttribute) {
                container.setAttribute(attribute, '');
            }
            else {
                container.removeAttribute(attribute);
            }
        }

        switch (propertyName) {
            case 'animation':
                that.$.mainContainer.setAttribute('animation', newValue);
                that._additionalScrollButtons.forEach(function (element) {
                    element[0].animation = newValue;
                    element[1].animation = newValue;
                });

                if (that._dropDownParent !== null) {
                    that._containers.forEach(function (element) {
                        element.setAttribute('animation', newValue);
                    });
                }

                break;
            case 'checkable':
                if (that.mode !== 'tree' && !that._minimized) {
                    that._closeSubContainers(2);
                }
                else if (that._minimized && that.dropDownAppendTo !== null) {
                    updateAttribute('checkable', that.$.mainContainer, newValue);
                }

                that._updateItemRoles(that);
                break;
            case 'checkboxes':
                that._close();

                if (that.dropDownAppendTo !== null) {
                    for (let i = 0; i < that._containers.length; i++) {
                        const container = that._containers[i];

                        updateAttribute('checkboxes', container, newValue);
                    }

                    if (that._minimized) {
                        updateAttribute('checkboxes', that.$.mainContainer, newValue);
                    }
                }

                that._updateItemRoles();
                break;
            case 'checkMode':
                that._changeToRadioButtonMode(newValue, that.$.mainContainer);

                if (that._minimized && that.dropDownAppendTo !== null) {
                    that.$.mainContainer.setAttribute('check-mode', newValue);
                }

                that._updateItemRoles(that);
                break;
            case 'dataSource': {
                let toMinimize = false;

                if (that._minimized) {
                    that.maximize();
                    toMinimize = true;
                }

                that._removeContainersInBody();
                that._containersInBody = [];
                that._menuItems = {};
                that._processDataSource();
                that._checkContainersLength();

                if (toMinimize) {
                    that.minimize();
                }
                else {
                    checkOverflow();
                }

                that._expandItemsByDefault();
                that._refreshCheckableItems();

                that._suppressResizeHandler = true;
                setTimeout(() => delete that._suppressResizeHandler, 500);
                break;
            }
            case 'innerHTML': {
                that.$.mainContainer.innerHTML = newValue;
                that._lazyInitItems();
                break;
            }
            case 'dropDownAppendTo': {
                const oldDropDownParent = that._dropDownParent;

                that._positionDetection.getDropDownParent();

                if (that._dropDownParent === oldDropDownParent || (that.mode === 'tree' && !that._minimized)) {
                    return;
                }

                that._close();

                if (that._minimized) {
                    if (newValue === null) {
                        that._appendMinimizedContainerToMenu(that.$.mainContainer, that.$.scrollButtonFar);
                    }
                    else {
                        that._appendMinimizedContainerToExternalElement(that.$.mainContainer);
                    }

                    return;
                }

                if (that._dropDownParent !== null && oldDropDownParent === null) {
                    that._moveDropDownsToExternalContainer();
                }
                else if (that._dropDownParent === null && oldDropDownParent !== null) {
                    that._moveDropDownsToMenu();
                }
                else if (that._dropDownParent !== null && oldDropDownParent !== null) {
                    for (let i = 0; i < that._containersInBody.length; i++) {
                        that._dropDownParent.appendChild(that._containersInBody[i]);
                    }
                }

                if (newValue === null && !that.$mainContainer.hasClass('simple')) {
                    that._hideMainContainerScrollButtons();
                }
                else {
                    that._checkOverflow(that.$.mainContainer, that.mode === 'horizontal', [that.$.scrollButtonNear, that.$.scrollButtonFar]);
                }

                for (let i = 0; i < that._containersFixedHeight.length; i++) {
                    that._containersFixedHeight[i].itemContainer.checkOverflow = true;
                }

                if (that.mode === 'dropDown') {
                    that.close({ trigger: 'internal' });
                    that._reparentMenu(true, oldDropDownParent);
                }

                break;
            }
            case 'dropDownOverlay':
                if (!newValue) {
                    that._positionDetection.removeOverlay();
                }

                break;
            case 'disabled':
                if (newValue) {
                    that._close();
                }

                that._setFocusable();
                that.$.scrollButtonNear.disabled = newValue;
                that.$.scrollButtonFar.disabled = newValue;

                if (!newValue && (that.dropDownAppendTo !== null || that.$mainContainer.hasClass('simple') || that.mode === 'tree')) {
                    that._updateScrollButtonVisibility(that.$.mainContainer, that.mode === 'horizontal', [that.$.scrollButtonNear, that.$.scrollButtonFar]);
                }

                break;
            case 'dropDownPosition':
            case 'mode': {
                if (propertyName === 'mode') {
                    delete that._dynamicallyReparented;

                    if (oldValue === 'tree' || that._minimized) {
                        that._closeSubContainersTreeMode(2, undefined, undefined, undefined, true);
                        that._openedContainers = [];
                    }
                    else {
                        that._closeSubContainersDefaultMode(2);
                    }

                    that._discardKeyboardHover(true);

                    if (that._minimized && that._minimizedDropDownOpened) {
                        that.$mainContainer.addClass('smart-visibility-hidden');
                        that.$hamburgerIcon.removeClass('smart-close-button');
                        that.$.hamburgerIcon.setAttribute('aria-expanded', false);
                        that._minimizedDropDownOpened = false;
                    }

                    if (newValue === 'horizontal' || oldValue === 'horizontal') {
                        that._changeScrollButtonsArrows();
                    }

                    if (that._minimized) {
                        if (newValue === 'dropDown') {
                            that.mode = oldValue;
                        }

                        return;
                    }

                    that.setAttribute('aria-orientation', that.mode === 'horizontal' ? 'horizontal' : 'vertical');

                    if (that.opened === false) {
                        if (newValue === 'dropDown') {
                            that.$.addClass('smart-visibility-hidden');
                        }
                        else if (oldValue === 'dropDown') {
                            that.$.removeClass('smart-visibility-hidden');
                        }
                    }

                    if (oldValue === 'tree') {
                        if (that.dropDownAppendTo !== null) {
                            that._moveDropDownsToExternalContainer();
                        }

                        that.$mainContainer.addClass('smart-menu-main-container');
                        that.$mainContainer.removeClass('smart-menu-minimized-items-container');

                        that._applyContainerFixedHeight();
                    }
                    else if (newValue === 'tree') {
                        if (that.dropDownAppendTo !== null) {
                            that._moveDropDownsToMenu();
                        }

                        that._applyTreeMode();
                    }

                    if (that.overflow === 'auto') {
                        that._hideMainContainerScrollButtons();
                    }

                    checkOverflow();
                }

                if (that.mode === 'tree' || that._minimized) {
                    if (that._minimizedDropDownOpened) {
                        that._close();
                    }

                    if (that._minimized && that.dropDownAppendTo !== null) {
                        that.$.mainContainer.setAttribute(that.properties[propertyName].attributeName, newValue);
                    }

                    return;
                }
                else if (propertyName === 'dropDownPosition') {
                    that._close();
                }

                const menuItemsGroups = that._containers.map(container => container.menuItemsGroup);

                for (let i = 0; i < menuItemsGroups.length; i++) {
                    const currentMenuItemsGroup = menuItemsGroups[i];

                    that._setArrowDirection(currentMenuItemsGroup.children[0].children[1], currentMenuItemsGroup.level + 1);
                }

                if (that.dropDownAppendTo !== null) {
                    for (let i = 0; i < that._containers.length; i++) {
                        const container = that._containers[i];

                        container.setAttribute(Smart.Utilities.Core.toDash(propertyName), newValue);

                        if (container.level > 2) {
                            that._setArrowDirection(container.menuItemsGroup.children[0].children[1], container.level);
                        }
                    }
                }

                break;
            }
            case 'minimizeIconTemplate':
                that._applyMinimizeIconTemplate(newValue, oldValue);
                break;
            case 'minimizeWidth':
                that._resizeHandler();
                break;
            case 'opened':
                if (newValue) {
                    that.open();
                }
                else {
                    that.close({ trigger: 'internal' });
                }

                break;
            case 'overflow':
                that._handleOverflowChange();
                break;
            case 'rightToLeft': {
                if (that.mode !== 'tree') {
                    const menuItemsGroups = that._containers.map(container => container.menuItemsGroup);

                    for (let i = 0; i < menuItemsGroups.length; i++) {
                        const currentMenuItemsGroup = menuItemsGroups[i];

                        that._setArrowDirection(currentMenuItemsGroup.children[0].children[1], currentMenuItemsGroup.level + 1);
                    }

                    if (that.dropDownAppendTo !== null) {
                        if (newValue) {
                            that.$.mainContainer.setAttribute('right-to-left', '');
                        }
                        else {
                            that.$.mainContainer.removeAttribute('right-to-left');
                        }

                        for (let i = 0; i < that._containers.length; i++) {
                            const container = that._containers[i];

                            newValue ? container.setAttribute('right-to-left', '') : container.removeAttribute('right-to-left');

                            if (container.level > 2) {
                                that._setArrowDirection(container.menuItemsGroup.children[0].children[1], container.level);
                            }
                        }
                    }
                }

                break;
            }
            case 'theme':
                if (that.dropDownAppendTo === null || Smart.ListMenu && that instanceof Smart.ListMenu) {
                    return;
                }

                if (that._minimized) {
                    if (oldValue !== '') {
                        that.$mainContainer.removeClass(oldValue);
                    }

                    if (newValue !== '') {
                        that.$mainContainer.addClass(newValue);
                    }
                }
                else {
                    for (let i = 0; i < that._containers.length; i++) {
                        const container = that._containers[i];

                        if (oldValue !== '') {
                            container.classList.remove(oldValue);
                        }

                        if (newValue !== '') {
                            container.classList.add(newValue);
                        }
                    }
                }

                break;
            case 'unfocusable':
                that._setFocusable();
                break;
        }
    }

    /**
     * Adds a container to the "_openedContainers" array.
     */
    _addOpenedContainer(level, container) {
        const that = this;

        if (that.mode === 'tree' || that._minimized) {
            if (!that._openedContainers[level]) {
                that._openedContainers[level] = [];
            }

            const menuItemsGroup = container.menuItemsGroup;

            menuItemsGroup.set('expanded', true);
            menuItemsGroup.setAttribute('aria-expanded', true);

            if (that._updateState) {
                that._updateState('expanded', menuItemsGroup.id, true);
            }

            return that._openedContainers[level].push(container);
        }
        else {
            that._openedContainers[level] = container;
        }
    }

    /**
     * Appends the minimized items container to external element.
     */
    _appendMinimizedContainerToExternalElement(itemsContainer) {
        const that = this;

        itemsContainer.ownerElement = that;
        that._dropDownParent.appendChild(itemsContainer);
        itemsContainer.setAttribute('animation', that.animation);

        if (that.theme !== '') {
            itemsContainer.$.addClass(that.theme);
        }

        itemsContainer.$.addClass('smart-menu-drop-down smart-drop-down');
        itemsContainer.$.addClass('smart-drop-down-repositioned');
        itemsContainer.setAttribute('check-mode', that.checkMode);
        itemsContainer.setAttribute('drop-down-position', that.dropDownPosition);
        itemsContainer.setAttribute('mode', that.mode);
        itemsContainer.setAttribute('loading-indicator-position', that.loadingIndicatorPosition);

        if (that.rightToLeft) {
            itemsContainer.setAttribute('right-to-left', '');
        }

        if (that.checkable) {
            itemsContainer.setAttribute('checkable', '');
        }

        if (that.checkboxes) {
            itemsContainer.setAttribute('checkboxes', '');
        }

        if (that.$.view && that.detachedChildren.indexOf(that.$.view)) {
            that.detachedChildren.push(that.$.view);
        }
    }

    /**
     * Appends the minimized items container to Menu.
     */
    _appendMinimizedContainerToMenu(itemsContainer, sibling) {
        const that = this;

        delete itemsContainer.ownerElement;
        that.$.container.insertBefore(itemsContainer, sibling);

        itemsContainer.removeAttribute('animation');

        if (that.theme !== '') {
            itemsContainer.$.removeClass(that.theme);
        }

        itemsContainer.$.removeClass('smart-menu-drop-down smart-drop-down');
        itemsContainer.$.removeClass('smart-drop-down-repositioned');
        itemsContainer.removeAttribute('checkable');
        itemsContainer.removeAttribute('checkboxes');
        itemsContainer.removeAttribute('check-mode');
        itemsContainer.removeAttribute('drop-down-position');
        itemsContainer.removeAttribute('mode');
        itemsContainer.removeAttribute('loading-indicator-position');
        itemsContainer.removeAttribute('style');
        itemsContainer.removeAttribute('right-to-left');
    }

    /**
     * Applies fixed heights to containers.
     */
    _applyContainerFixedHeight() {
        const that = this;

        for (let i = 0; i < that._containers.length; i++) {
            const container = that._containers[i];

            if (that._containersFixedHeight.indexOf(container) !== -1) {
                container.style.height = container.menuItemsGroup.dropDownHeight + 'px';
                container.itemContainer.checkOverflow = true;
            }
            else {
                container.style.height = '';
            }
        }
    }

    /**
     * Applies grouping.
     */
    _applyGrouping(item, noRecursion) {
        const that = this;
        let itemChildren;

        if (item === that.$.mainContainer) {
            itemChildren = Array.from(item.children);
        }
        else {
            itemChildren = Array.from(item.container.firstElementChild.children);
        }

        for (let i = 0; i < itemChildren.length; i++) {
            const currentItem = itemChildren[i];

            currentItem.originalIndex = i;

            if (currentItem instanceof Smart.MenuItemsGroup && noRecursion === undefined) {
                that._applyGrouping(currentItem);
            }
        }

        that._sortItems(item);
    }

    /**
     * Applies minimize icon template.
     */
    _applyMinimizeIconTemplate(newValue, oldValue) {
        const that = this;

        if (newValue === null) {
            if (oldValue === null) {
                return;
            }

            that.$customIconContainer.addClass('smart-hidden');
            that.$.customIconContainer.innerHTML = '';

            that.$hamburgerIconLineTop.removeClass('smart-hidden');
            that.$hamburgerIconLineCenter.removeClass('smart-hidden');
            that.$hamburgerIconLineBottom.removeClass('smart-hidden');
        }
        else {
            const potentialHTMLTemplate = document.getElementById(newValue);

            if (potentialHTMLTemplate !== null && potentialHTMLTemplate.tagName.toLowerCase() === 'template') {
                // label is the id of an HTML template
                const templateContent = document.importNode(potentialHTMLTemplate.content, true);

                that.$hamburgerIconLineTop.addClass('smart-hidden');
                that.$hamburgerIconLineCenter.addClass('smart-hidden');
                that.$hamburgerIconLineBottom.addClass('smart-hidden');

                that.$.customIconContainer.innerHTML = '';
                that.$.customIconContainer.appendChild(templateContent);
                that.$customIconContainer.removeClass('smart-hidden');
            }
            else {
                that.minimizeIconTemplate = oldValue;
            }
        }
    }

    /**
     * Applies mode: 'tree'.
     */
    _applyTreeMode() {
        const that = this,
            arrows = that.$.mainContainer.getElementsByClassName('smart-menu-items-group-arrow');

        that.$mainContainer.removeClass('smart-menu-main-container');
        that.$mainContainer.addClass('smart-menu-minimized-items-container');

        if (that.isCompleted && that.isRendered) {
            for (let i = 0; i < arrows.length; i++) {
                arrows[i].className = 'smart-menu-items-group-arrow down';
            }
        }

        that._removeContainerFixedHeight();
    }

    /**
     * Default left arrow handler.
     */
    _arrowLeftHandler(level, mode, focusedItem, lastOpenedContainer) {
        const that = this;

        if (level === 1) {
            if (mode === 'horizontal') {
                that._levelOneNavigate('_getLastEnabledChild', focusedItem, lastOpenedContainer);
            }
        }
        else if (level === 2) {
            that._levelOneNavigateFromLowerLevel('_getPreviousEnabledChild', focusedItem);
        }
        else {
            that._escapeHandler(focusedItem, level, lastOpenedContainer);
        }
    }

    /**
     * Default right arrow handler.
     */
    _arrowRightHandler(level, mode, focusedItem, lastOpenedContainer) {
        const that = this;

        if (level === 1) {
            if (mode === 'horizontal') {
                that._levelOneNavigate('_getFirstEnabledChild', focusedItem, lastOpenedContainer);
            }
            else {
                that._levelOneOpenDropDown(focusedItem);
            }
        }
        else {
            if (focusedItem instanceof Smart.MenuItemsGroup) {
                that._selectionHandler({ target: focusedItem, isTrusted: true });
            }
            else {
                that._levelOneNavigateFromLowerLevel('_getNextEnabledChild', focusedItem);
            }
        }
    }

    /**
     * Repositions container if it intersects with browser bounds.
     */
    _browserBoundsDetection(container) {
        const that = this;

        if (that.mode === 'tree' && !that._minimized) {
            return;
        }

        container.style.marginTop = '';
        container.style.marginLeft = '';

        if (that.dropDownPosition !== 'auto') {
            return;
        }
        // to do - when minimized and height is greater than doc height - do nothing
        const windowWidth = window.devicePixelRatio === 1 ? document.documentElement.clientWidth : window.innerWidth,
            windowHeight = window.devicePixelRatio === 1 ? document.documentElement.clientHeight : window.innerHeight,
            containerBoundingRect = container.getBoundingClientRect(),
            horizontalCorrection = windowWidth - containerBoundingRect.left - container.offsetWidth,
            verticalCorrection = windowHeight - containerBoundingRect.top - container.offsetHeight;

        if (horizontalCorrection < 10) {
            container.style.marginLeft = Math.min(horizontalCorrection - 10, -10) + 'px';
        }

        if (verticalCorrection < 10) {
            container.style.marginTop = Math.min(verticalCorrection - 10, -10) + 'px';
        }
    }

    /**
     * Changes the direction of scroll button arrows.
     */
    _changeScrollButtonsArrows() {
        const that = this;

        if (that.mode === 'horizontal') {
            that.$.scrollButtonNear.setAttribute('aria-label', 'Scroll left');
            that.$.scrollButtonFar.setAttribute('aria-label', 'Scroll right');
            that.$arrowNear.removeClass('smart-arrow-up');
            that.$arrowFar.removeClass('smart-arrow-down');
            that.$arrowNear.addClass('smart-arrow-left');
            that.$arrowFar.addClass('smart-arrow-right');
        }
        else {
            that.$.scrollButtonNear.setAttribute('aria-label', 'Scroll up');
            that.$.scrollButtonFar.setAttribute('aria-label', 'Scroll down');
            that.$arrowNear.removeClass('smart-arrow-left');
            that.$arrowFar.removeClass('smart-arrow-right');
            that.$arrowNear.addClass('smart-arrow-up');
            that.$arrowFar.addClass('smart-arrow-down');
        }
    }

    /**
     * Changes to checkMode: 'radioButton'.
     */
    _changeToRadioButtonMode(newValue, container, item) {
        if (newValue === 'radioButton') {
            const checkedChildren = [];

            for (let i = 0; i < container.childElementCount; i++) {
                const currentItem = container.children[i];

                if (currentItem.checked && !currentItem.disabled && !currentItem.templateApplied) {
                    checkedChildren.push(currentItem);
                }
            }

            this._validateRadioButtonSelection(item, item ? item.level + 1 : 1, checkedChildren);
        }
    }

    /**
     * Checks the number of dropdowns.
     */
    _checkContainersLength(initialization) {
        const that = this;

        if (that._containers.length === 0) {
            that.$mainContainer.addClass('simple');

            if (!initialization) {
                that._checkOverflow(that.$.mainContainer, that.mode === 'horizontal', [that.$.scrollButtonNear, that.$.scrollButtonFar]);
            }
        }
        else if (!initialization) {
            that.$mainContainer.removeClass('simple');

            if (that.dropDownAppendTo === null && that.mode !== 'tree') {
                that.$mainContainer.removeClass('scroll-buttons-shown one-button-shown');
            }
        }
    }

    /**
     * Checks if items overflow and shows/hides scroll buttons.
     */
    _checkOverflow(element, horizontal, scrollButtons) {
        const that = this,
            mainContainer = that.$.mainContainer,
            overflow = element === mainContainer ? that.overflow : 'auto';

        if (that._minimized || overflow === 'hidden' ||
            (that.dropDownAppendTo === null && that.mode !== 'tree' && element === mainContainer && !mainContainer.classList.contains('simple'))) {
            return;
        }

        if (that.mode === 'dropDown' && !that.opened) {
            that._checkOverflowOnOpen = true;
            return;
        }

        const oldScrollLeft = element.scrollLeft,
            scrollLeftRatio = oldScrollLeft / (element.scrollWidth - element.offsetWidth),
            oldScrollTop = element.scrollTop,
            scrollTopRatio = oldScrollTop / (element.scrollHeight - element.offsetHeight);

        if (overflow === 'auto') {
            element.classList.remove('scroll-buttons-shown');
            element.classList.remove('one-button-shown');
            scrollButtons[0].$.addClass('smart-hidden');
            scrollButtons[1].$.addClass('smart-hidden');
        }

        let overflowing, showNear, showFar;

        if (horizontal) {
            overflowing = Math.round(element.scrollWidth) > Math.round(element.offsetWidth);
            showNear = scrollLeftRatio > 0;
            showFar = scrollLeftRatio < 1;
        }
        else {
            overflowing = Math.round(element.scrollHeight) > Math.round(element.offsetHeight);
            showNear = scrollTopRatio > 0;
            showFar = scrollTopRatio < 1;
        }

        if (overflowing) {
            if (overflow === 'auto') {
                element.classList.add('scroll-buttons-shown');

                if (showNear) {
                    scrollButtons[0].$.removeClass('smart-hidden');
                }

                if (showFar) {
                    scrollButtons[1].$.removeClass('smart-hidden');
                }

                if ((showNear && showFar) === false) {
                    element.classList.add('one-button-shown');
                }

                if (!that.disabled) {
                    scrollButtons[0].disabled = false;
                    scrollButtons[1].disabled = false;
                }

                element.scrollLeft = oldScrollLeft;
                element.scrollTop = oldScrollTop;
            }
            else {
                scrollButtons[0].$.removeClass('smart-hidden');
                scrollButtons[1].$.removeClass('smart-hidden');

                if (that.disabled) {
                    scrollButtons[0].disabled = true;
                    scrollButtons[1].disabled = true;
                }
                else {
                    scrollButtons[0].disabled = !showNear;
                    scrollButtons[1].disabled = !showFar;
                }
            }
        }
        else if (overflow === 'scroll') {
            scrollButtons[0].disabled = true;
            scrollButtons[1].disabled = true;
        }

        if (element === mainContainer && that.mode !== 'tree') {
            that._close();
        }

        that._scrollInfo.set(element, { left: element.scrollLeft, top: element.scrollTop });
    }

    /**
     * Checks overflow after "addItem" or "removeItem" has been called.
     */
    _checkOverflowAddRemove(level, itemParent) {
        const that = this;

        if (level === 1 && that.dropDownAppendTo !== null || that.mode === 'tree') {
            that._checkOverflow(that.$.mainContainer, that.mode === 'horizontal', [that.$.scrollButtonNear, that.$.scrollButtonFar]);
        }
        else if (level > 1 && itemParent.dropDownHeightSet) {
            if (that._isContainerOpened(level, itemParent.container)) {
                that._checkOverflow(itemParent, false, [itemParent.container.children[0], itemParent.container.children[2]]);
            }
            else {
                itemParent.checkOverflow = true;
            }
        }
    }

    /**
     * Closes any open dropdown containers.
     */
    _close() {
        const that = this;

        that._positionDetection.removeOverlay();
        that._closeSubContainers(2);
        that._discardKeyboardHover(true);

        if (that._minimized && that._minimizedDropDownOpened) {
            that.$mainContainer.addClass('smart-visibility-hidden');

            if (that._edgeMacFF) {
                that.$.mainContainer.style.left = '';
                that.$.mainContainer.style.top = '';
                that.$mainContainer.addClass('not-in-view');
            }

            that.$hamburgerIcon.removeClass('smart-close-button');
            that.$.hamburgerIcon.setAttribute('aria-expanded', false);
            that._minimizedDropDownOpened = false;
        }
    }

    /**
     * Closes sub-containers.
     */
    _closeSubContainers(level, container, preserveClass, fireEvent) {
        const that = this;

        if (that.mode !== 'tree' && !that._minimized) {
            that._closeSubContainersDefaultMode(level, container, preserveClass);
        }
        else {
            that._closeSubContainersTreeMode(level, container, preserveClass, fireEvent);
        }
    }

    /**
     * Closes sub-containers (in horizontal/vertical/dropDown mode).
     */
    _closeSubContainersDefaultMode(level, container, preserveClass) {
        const that = this,
            openedContainers = that._openedContainers;

        function applyClasses(i) {
            const menuItemsGroup = openedContainers[i].menuItemsGroup;

            if (!(preserveClass && i === level)) {
                menuItemsGroup.$.removeClass('focus');
                menuItemsGroup.removeAttribute('focus');
                menuItemsGroup.$.removeClass('hover');
                menuItemsGroup.removeAttribute('hover');

            }

            menuItemsGroup.$.removeClass('smart-menu-items-group-opened');
            menuItemsGroup.$.removeClass('smart-menu-items-group-expanded');
            menuItemsGroup.setAttribute('aria-expanded', false);
            openedContainers[i].$.addClass('smart-visibility-hidden');

            if (that._edgeMacFF && i === 2 && !that.hasAnimation) {
                openedContainers[i].style.left = '';
                openedContainers[i].style.top = '';
                openedContainers[i].$.addClass('not-in-view');
            }

            if (that._minimized) {
                that._browserBoundsDetection(that.$.mainContainer);
            }

            that.$.fireEvent('collapse', {
                'item': menuItemsGroup,
                'label': menuItemsGroup.label,
                'path': menuItemsGroup.path,
                'value': menuItemsGroup.value,
                'children': menuItemsGroup.itemContainer.children
            });

            openedContainers[i] = undefined;
        }

        for (let i = openedContainers.length - 1; i >= level; i--) {
            if (openedContainers[i] === undefined) {
                continue;
            }

            applyClasses(i, true);
        }
    }

    /**
     * Closes sub-containers (in tree/minimized mode).
     */
    _closeSubContainersTreeMode(level, container, preserveClass, fireEvent, modeChanged) {
        const that = this;

        if (fireEvent) {
            const menuItemsGroup = container.menuItemsGroup,
                collapsingEvent = that.$.fireEvent('collapsing', {
                    'item': menuItemsGroup,
                    'label': menuItemsGroup.label,
                    'path': menuItemsGroup.path,
                    'value': menuItemsGroup.value,
                    'children': container.itemContainer.children
                });

            if (collapsingEvent.defaultPrevented) {
                return;
            }
        }

        if (container === undefined) {
            that._collapseAll(false, modeChanged);
            return;
        }

        const menuItemsGroup = container.menuItemsGroup;

        menuItemsGroup.set('expanded', false);
        menuItemsGroup.setAttribute('aria-expanded', false);

        if (that._element === 'menu') {
            if (preserveClass) {
                const currentFocus = that.$.mainContainer.getElementsByClassName('focus')[0];

                if (currentFocus) {
                    currentFocus.$.removeClass('focus');
                    currentFocus.removeAttribute('focus');
                }

                menuItemsGroup.$.addClass('focus');
                menuItemsGroup.setAttribute('focus', '');
                that._focusedViaKeyboard = menuItemsGroup;
            }
            else {
                menuItemsGroup.$.removeClass('focus');
                menuItemsGroup.removeAttribute('focus');
            }
        }
        else {
            that._updateState('expanded', menuItemsGroup.id, false);
        }

        menuItemsGroup.$.removeClass('smart-' + that._element + '-items-group-opened');

        if (modeChanged || !that.hasAnimation) {
            menuItemsGroup.$.removeClass('smart-' + that._element + '-items-group-expanded');
            menuItemsGroup.setAttribute('aria-expanded', false);
            container.$.addClass('smart-visibility-hidden');

            if (that._minimized) {
                that._browserBoundsDetection(that.$.mainContainer);
            }
        }
        else {
            that._collapseSection(container);
        }

        if (fireEvent) {
            const eventDetail = {
                'item': menuItemsGroup,
                'label': menuItemsGroup.label,
                'path': menuItemsGroup.path,
                'value': menuItemsGroup.value,
                'children': menuItemsGroup.itemContainer.children
            };

            if (that.toggleCallback) {
                eventDetail.type = 'collapse';
                that.toggleCallback(eventDetail);
            }
            else {
                that.$.fireEvent('collapse', eventDetail);
            }
        }

        if (!that._openedContainers[level]) {
            return;
        }

        const index = that._openedContainers[level].indexOf(container);

        if (index !== -1) {
            that._openedContainers[level].splice(index, 1);
        }
    }

    /**
     * Collapses all items (in tree/minimized mode).
     */
    _collapseAll(fireEvent, modeChanged) {
        const that = this;

        for (let i = that._openedContainers.length - 1; i >= 2; i--) {
            if (that._openedContainers[i] === undefined) {
                break;
            }

            for (let j = that._openedContainers[i].length - 1; j >= 0; j--) {
                that._closeSubContainersTreeMode(i, that._openedContainers[i][j], undefined, fireEvent, modeChanged);
            }
        }

        if (!that.hasAnimation) {
            that._checkOverflow(that.$.mainContainer, false, [that.$.scrollButtonNear, that.$.scrollButtonFar]);
        }

        for (let i = that._openedContainers.length - 1; i >= 2; i--) {
            const currentSet = that._openedContainers[i];

            if (currentSet === undefined || currentSet.length === 0) {
                that._openedContainers.splice(i, 1);
            }
            else {
                break;
            }
        }

        if (that._openedContainers.length === 2) {
            that._openedContainers = [];
        }
    }

    /**
     * Collapses a section (in tree/minimized mode).
     */
    _collapseSection(element) {
        const that = this,
            sectionHeight = element.scrollHeight + 'px';

        that._treeAnimationInProgress = element;
        element.style.transition = 'none';

        requestAnimationFrame(function () {
            if (that.mode !== 'tree' && !that._minimized) {
                element.style.transition = '';
                return;
            }

            element.style.height = sectionHeight;
            element.style.transition = '';

            requestAnimationFrame(function () {
                element.style.height = '0px';

                if (that.tagName.toLowerCase() === 'smart-tree') {
                    element.$.addClass('smart-visibility-hidden');
                }

                if (sectionHeight === '0px') {
                    that._transitionendHandlerCollapse(that, element);
                }
            });
        });

        element.addEventListener('transitionend', that._transitionendHandlerCollapse);
    }

    /**
     * Applies initial settings to the Menu element.
     */
    _createElement() {
        const that = this,
            mode = that.mode;

        that.setAttribute('role', 'menu');
        that.$.mainContainer.id = that.id + 'MainContainer';
        that.setAttribute('aria-orientation', that.mode === 'horizontal' ? 'horizontal' : 'vertical');

        that._positionDetection = new Smart.Utilities.PositionDetection(that);
        that._positionDetection.getDropDownParent();
        that._reparentMenu();

        if (that.disabled) {
            that.$.scrollButtonNear.disabled = true;
            that.$.scrollButtonFar.disabled = true;
        }

        if (that.dataSource === null && that.$.mainContainer.firstElementChild instanceof HTMLUListElement) {
            that._processUList();
        }

        const items = (that.shadowRoot || that).querySelectorAll('smart-menu-item, smart-menu-items-group');

        const itemsReady = function () {
            const animationType = that.animation;

            that._changeScrollButtonsArrows();

            that._setFocusable();

            if (mode === 'dropDown' && that.opened === false) {
                if (that.hasAnimation) {
                    that.animation = 'none';
                    that.$.addClass('smart-visibility-hidden');
                    that.animation = animationType;
                }
                else {
                    that.$.addClass('smart-visibility-hidden');
                }
            }

            that._menuItems = {};

            that.$.mainContainer.setAttribute('animation', animationType);

            if (that.dataSource === null) {
                that._processHTML(that.$.mainContainer, 1);
            }
            else {
                that._processDataSource();
            }

            that._checkContainersLength(true);

            if ((that.dropDownAppendTo !== null || that.$mainContainer.hasClass('simple') || that.mode === 'tree') && that.overflow === 'scroll') {
                that.$mainContainer.addClass('scroll-buttons-shown');
                that.$scrollButtonNear.removeClass('smart-hidden');
                that.$scrollButtonFar.removeClass('smart-hidden');
                that._updateScrollButtonVisibility(that.$.mainContainer, mode === 'horizontal', [that.$.scrollButtonNear, that.$.scrollButtonFar]);
            }

            that._applyMinimizeIconTemplate(that.minimizeIconTemplate, null);

            if (mode === 'tree') {
                that._applyTreeMode();
            }

            if (that.minimizeWidth !== null && that.offsetWidth <= that.minimizeWidth) {
                that.minimize();
            }
            else {
                that._checkOverflow(that.$.mainContainer, mode === 'horizontal', [that.$.scrollButtonNear, that.$.scrollButtonFar]);
            }

            that._expandItemsByDefault();
            that._refreshCheckableItems();

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

    _ensureItemsReady(nodes, callback) {
        const that = this;

        const contextCallback = function () {
            const setContext = function (context) {
                for (let i = 0; i < nodes.length; i++) {
                    nodes[i].context = context === 'node' ? nodes[i] : document;
                }
            }

            setContext('node');
            callback();
            setContext();
        }

        if (nodes.length === 0) {
            contextCallback();
        }
        else {
            that._nodesReadyListeners = 0;

            for (let i = 0; i < nodes.length; i++) {
                const node = nodes[i];

                const readyEventHandler = function () {
                    const oldContext = that.context;

                    that.context = that;
                    that._nodesReadyListeners--;
                    if (that._nodesReadyListeners === 0) {
                        contextCallback();

                        delete that._nodesReadyListeners;
                    }
                    that.context = oldContext;
                }.bind(that);

                if (!node.isCompleted) {
                    that._nodesReadyListeners++;
                    node.completeHandlers = [];
                    node._onCompleted = readyEventHandler;
                }
            }

            if (that._nodesReadyListeners === 0) {
                contextCallback();
            }
        }
    }

    /**
     * Creates the necessary HTML structure for a smart-menu-item/smart-menu-items-group.
     */
    _createItemHTMLStructure(currentItem, level, item, index) {
        const that = this,
            labelContainerClassName = 'smart-' + that._element + '-item-label-container',
            labelElementClassName = 'smart-' + that._element + '-item-label-element',
            labelFragment = document.createDocumentFragment(),
            itemChildren = currentItem.children;
        let labelContainer, labelElement, currentItemPath, parentObject;

        for (let i = 0; i < itemChildren.length; i++) {
            const child = itemChildren[i];

            if (!child.classList) {
                continue;
            }

            if (child.classList && child.classList.contains(labelContainerClassName)) {
                labelContainer = child;
            }
            else if (child.classList && child.classList.contains(labelElementClassName)) {
                labelElement = child;
            }

            if (labelContainer && labelElement) {
                break;
            }
        }

        if (labelContainer) {
            // when we lazy-load items, set innerHTML or dynamically append a child, we need to first unwrap MenuGroup/TreeGroup.
            const label = labelContainer.querySelector('.' + labelElementClassName);

            if (label !== null) {
                currentItem.insertBefore(label.firstElementChild, currentItem.children[0]);

                const dropDownContainerClassName = 'smart-' + that._element + '-drop-down',
                    dropDownItemContainerClassName = 'smart-' + that._element + '-item-container';

                const dropDown = currentItem.querySelector('.' + dropDownContainerClassName);

                if (dropDown) {
                    const contentElement = currentItem.querySelector('.' + dropDownItemContainerClassName);

                    while (contentElement.childNodes.length) {
                        currentItem.appendChild(contentElement.firstChild);
                    }

                    dropDown.remove();
                }
            }

            labelContainer.remove();
        }

        if (labelElement) {
            labelElement.remove();
        }

        labelContainer = document.createElement('div');
        labelElement = document.createElement('div');

        let innerSpan = document.createElement('span');

        currentItem.menu = that;

        if (level > 1) {
            currentItem.originalIndex = index;
            currentItemPath = item.path + '.' + currentItem.originalIndex;
            currentItem.parentItem = item;
            parentObject = item;
        }
        else {
            currentItem.originalIndex = index;
            currentItemPath = '' + index;
            parentObject = that;
        }

        if (that.checkboxes && parentObject.checkable) {
            if (parentObject.checkMode === 'checkbox') {
                currentItem.setAttribute('role', 'menuitemcheckbox');
            }
            else if (parentObject.checkMode === 'radioButton') {
                currentItem.setAttribute('role', 'menuitemradio');
            }
        }

        currentItem.path = currentItemPath;
        that._menuItems[currentItemPath] = currentItem;

        labelContainer.className = labelContainerClassName;
        labelElement.className = labelElementClassName;

        if (that._element === 'tree') {
            // Tree item indentation
            that._setIndentation(labelContainer, level, that.rightToLeft ? 'paddingRight' : 'paddingLeft');
        }

        const currentItemChildNodes = Array.from(currentItem.childNodes);

        for (let i = 0; i < currentItemChildNodes.length; i++) {
            const currentNode = currentItemChildNodes[i];

            if (currentNode instanceof Smart.MenuItem || currentNode instanceof Smart.MenuItemsGroup) {
                break;
            }

            innerSpan.appendChild(currentNode);
        }

        if (innerSpan.innerHTML.trim() === '') {
            const currentItemLabel = currentItem.label || currentItem.getAttribute('label');

            if (currentItemLabel && currentItemLabel !== '') {
                that._setLabel(currentItemLabel, innerSpan, currentItem, true);
            }
            else {
                currentItem.set('label', 'Item ' + index);
                innerSpan.innerHTML = 'Item ' + index;
            }
        }
        else {
            currentItem.set('label', innerSpan.innerHTML.trim());
        }

        currentItem.setAttribute('aria-label', currentItem.label);

        if (currentItem instanceof Smart.MenuItemsGroup && currentItem.titleLabel === undefined) {
            currentItem.titleLabel = currentItem.label;
        }

        labelElement.appendChild(innerSpan);
        labelFragment.appendChild(labelElement);

        currentItem.set('level', level);
        currentItem.set('shortcut', currentItem.shortcut || currentItem.getAttribute('shortcut') || '');

        if (currentItem.shortcut && currentItem instanceof Smart.MenuItem) {
            const shortcutElement = document.createElement('div');

            shortcutElement.id = currentItem.id + 'Shortcut';
            shortcutElement.className = 'smart-' + that._element + '-item-shortcut';
            shortcutElement.innerHTML = currentItem.shortcut;

            labelFragment.appendChild(shortcutElement);
            currentItem.setAttribute('aria-describedby', shortcutElement.id);
        }

        labelContainer.appendChild(labelFragment);
        currentItem.insertBefore(labelContainer, currentItem.children[0]);

        if (!currentItem.id) {
            currentItem.id = that.id + 'ItemP' + currentItem.path.replace(/\./g, '_') + 'L' + currentItem.label.replace(/[^a-zA-Z0-9\-\_]/g, '');
        }
    }

    /**
     * Creates the dropdown container of smart-menu-items-group.
     */
    _createMenuItemsGroupContainer(item, level) {
        const that = this,
            itemChildren = item.children,
            containerClassName = 'smart-' + that._element + '-drop-down',
            itemContainerClassName = 'smart-' + that._element + '-item-container';
        let container, itemContainer;

        for (let i = 0; i < itemChildren.length; i++) {
            const child = itemChildren[i];

            if (!child.classList) {
                continue;
            }

            if (child.classList && child.classList.contains(containerClassName)) {
                container = child;
            }
            else if (child.classList && child.classList.contains(itemContainerClassName)) {
                itemContainer = child;
            }

            if (container && itemContainer) {
                break;
            }
        }

        if (!container) {
            container = document.createElement('div');
        }

        if (!itemContainer) {
            itemContainer = document.createElement('div');
        }

        container.innerHTML = itemContainer.innerHTML = '';

        container.id = item.id + 'Container';
        container.className = 'smart-' + that._element + '-drop-down smart-visibility-hidden';

        if (that._edgeMacFF && level === 2 && that.mode !== 'tree') {
            container.className += ' not-in-view';
        }

        if (!container.$) {
            container.$ = Smart.Utilities.Extend(container);
        }

        container.level = level;
        container.setAttribute('level', level);

        if (that._element === 'menu') {
            item.setAttribute('aria-owns', container.id);
            container.setAttribute('role', 'menu');
        }
        else {
            container.setAttribute('role', 'group');
        }

        container.menuItemsGroup = item;

        itemContainer.className = itemContainerClassName;

        if (!itemContainer.$) {
            itemContainer.$ = Smart.Utilities.Extend(itemContainer);
        }

        itemContainer.container = container;
        itemContainer.menuItemsGroup = item;

        if (item.checkable) {
            itemContainer.setAttribute('checkable', '');
        }

        itemContainer.setAttribute('check-mode', item.checkMode);
        itemContainer.setAttribute('role', 'presentation');

        container.itemContainer = itemContainer;

        if (!container.contains(itemContainer)) {
            container.appendChild(itemContainer);
        }

        if (item.dropDownHeight !== null) {
            let repeatButtonNear = container.querySelector('.smart-spin-button.smart-scroll-button-near'),
                repeatButtonFar = container.querySelector('.smart-spin-button.smart-scroll-button-far');

            if (!repeatButtonNear) {
                repeatButtonNear = document.createElement('smart-repeat-button');
            }

            if (!repeatButtonFar) {
                repeatButtonFar = document.createElement('smart-repeat-button');
            }

            repeatButtonNear.className = 'smart-menu-scroll-button smart-spin-button smart-scroll-button-near smart-hidden';
            repeatButtonNear.setAttribute('aria-label', 'Scroll up');
            repeatButtonNear.innerHTML = '<div class="smart-arrow smart-arrow-up" aria-hidden="true"></div>';
            repeatButtonNear.animation = that.animation;
            repeatButtonNear.unfocusable = true;
            repeatButtonNear.rightToLeft = that.rightToLeft;
            repeatButtonFar.className = 'smart-menu-scroll-button smart-spin-button smart-scroll-button-far smart-hidden';
            repeatButtonFar.setAttribute('aria-label', 'Scroll down');
            repeatButtonFar.innerHTML = '<div class="smart-arrow smart-arrow-down" aria-hidden="true"></div>';
            repeatButtonFar.animation = that.animation;
            repeatButtonFar.unfocusable = true;
            repeatButtonFar.rightToLeft = that.rightToLeft;

            if (!container.contains(repeatButtonNear)) {
                container.insertBefore(repeatButtonNear, itemContainer);
            }

            if (!container.contains(repeatButtonFar)) {
                container.appendChild(repeatButtonFar);
            }

            container.$.addClass('drop-down-height-set');
            itemContainer.dropDownHeightSet = true;
            itemContainer.checkOverflow = true;
            container.style.height = item.dropDownHeight + 'px';
            that._containersFixedHeight.push(container);
            that._additionalScrollButtons.push([repeatButtonNear, repeatButtonFar]);
        }

        return container;
    }

    /**
     * Removes "focused" class added by keyboard navigation.
     */
    _discardKeyboardHover(overrideCheck) {
        const that = this;

        if (!that._focusedViaKeyboard) {
            return;
        }

        if (!overrideCheck &&
            that._focusedViaKeyboard instanceof Smart.MenuItemsGroup &&
            that._isContainerOpened(that._focusedViaKeyboard.level + 1, that._focusedViaKeyboard.container)) {
            return;
        }

        that._focusedViaKeyboard.$.removeClass('focus');
        that._focusedViaKeyboard.removeAttribute('focus');
        that._focusedViaKeyboard.$.removeClass('hover');
        that._focusedViaKeyboard.removeAttribute('hover');

        that._focusedViaKeyboard = undefined;
    }

    /**
     * Document down handler.
     */
    _documentDownHandler(event) {
        const that = this;

        if (that.closeAction === 'down') {
            that._closeOnDocumentInteraction(event.originalEvent);
        }
    }

    /**
     * Document up handler.
     */
    _documentUpHandler(event) {
        const that = this,
            target = event.originalEvent.target;

        if (that.disabled || that.displayLoadingIndicator || !target.closest) {
            return;
        }

        const closed = that.closeAction === 'up' ? that._closeOnDocumentInteraction(event.originalEvent) : false;

        if (closed) {
            return;
        }

        let activeElement, isInsideElement;

        if (that.isInShadowDOM) {
            activeElement = that.isInShadowDOM ? that.getRootNode().activeElement :
                (that.shadowRoot ? that.shadowRoot.activeElement || document.activeElement : document.activeElement);
            isInsideElement = that.$.container.contains(event.originalEvent.composedPath()[0]);
        }
        else {
            activeElement = document.activeElement;
            isInsideElement = that.contains(target);
        }

        if (!closed && that !== activeElement && activeElement.closest('[template-applied]') === null) {
            if (isInsideElement || target.closest('.smart-list-menu-view') === that.$.view) {
                that.focus();
                return;
            }

            const closestDropDown = target.closest('.smart-drop-down-repositioned');

            if (closestDropDown && closestDropDown.ownerElement === that) {
                that.focus();
            }
        }
    }

    /**
     * Closes Menu drop downs on interaction with the document.
     */
    _closeOnDocumentInteraction(event) {
        const that = this,
            target = event.target;
        let shadowRootTarget, isInsideElement;

        if (that.isInShadowDOM) {
            shadowRootTarget = event.composedPath()[0];
            isInsideElement = that.$.container.contains(shadowRootTarget);
        }
        else {
            isInsideElement = that.contains(target);
        }

        if (that.mode === 'dropDown' && that.opened) {
            const closestDropDown = target.closest('.smart-drop-down-repositioned');

            if (!isInsideElement && (!closestDropDown || closestDropDown.ownerElement !== that)) {
                that.close({ trigger: 'interaction', target: that.isInShadowDOM ? shadowRootTarget : target });
                return true;
            }
        }

        const closestInputDropDown = (shadowRootTarget || target).closest('.smart-input-drop-down-menu');

        if (closestInputDropDown && that.contains(closestInputDropDown.ownerElement)) {
            return false;
        }

        if (!isInsideElement && target.closest('.smart-menu-drop-down') === null ||
            shadowRootTarget && shadowRootTarget === that.$.mainContainer || target === that.$.mainContainer) {
            if (that.mode === 'tree') {
                return true;
            }

            that._close();
            return true;
        }
    }

    /**
     * Makes sure a smart-menu-item/smart-menu-items-group is visible by scrolling to it.
     */
    _ensureVisible(scrollTarget) {
        const that = this;

        if (that._minimized) {
            return;
        }

        const mode = that.mode,
            mainContainer = that.$.mainContainer;
        let parent, scrollButtons;

        if (mode !== 'tree' && scrollTarget.parentElement !== mainContainer) {
            if (scrollTarget.dropDownHeight === null) {
                return;
            }

            parent = scrollTarget.parentElement;
            scrollButtons = [parent.container.children[0], parent.container.children[2]];
        }
        else {
            parent = mainContainer;
            scrollButtons = [that.$.scrollButtonNear, that.$.scrollButtonFar];
        }

        if (parent === mainContainer &&
            (that.dropDownAppendTo === null && that.mode !== 'tree' && !mainContainer.classList.contains('simple') ||
                !parent.$.hasClass('scroll-buttons-shown') && that.overflow !== 'hidden')) {
            return;
        }

        const parentBoundingRect = parent.getBoundingClientRect(),
            scrollTargetBoundingRect = scrollTarget.getBoundingClientRect();

        if (mode === 'tree') {
            that._ensureVisibleTreeMode(scrollTarget, scrollTargetBoundingRect, parent, parentBoundingRect, 0);
            return;
        }

        function setTargetScrollValue(scrollValue, scrollDimension, dimension) {
            let targetScrollValue = scrollTarget.firstElementChild[dimension] + scrollValue - parent[dimension];

            if (targetScrollValue < 0) {
                targetScrollValue = scrollValue;
            }

            parent['scroll' + scrollDimension] = targetScrollValue;
        }

        function scrollTo(scrollDimension, dimension) {
            let scrollValue = scrollTarget['offset' + scrollDimension],
                oldParentDimension = parent[dimension];

            if (scrollDimension === 'Top' && parent !== mainContainer && !scrollButtons[0].$.hasClass('smart-hidden')) {
                scrollValue -= scrollButtons[0][dimension];
            }

            setTargetScrollValue(scrollValue, scrollDimension, dimension);
            that._updateScrollButtonVisibility(parent, scrollDimension === 'Left', scrollButtons);

            if (oldParentDimension !== parent[dimension]) {
                setTargetScrollValue(scrollValue, scrollDimension, dimension);
            }
        }

        if ((parent === mainContainer && mode === 'horizontal') &&
            (parentBoundingRect.left > scrollTargetBoundingRect.left || parentBoundingRect.right < scrollTargetBoundingRect.right)) {
            scrollTo('Left', 'offsetWidth');
        }
        else if (parentBoundingRect.top > scrollTargetBoundingRect.top || parentBoundingRect.bottom < scrollTargetBoundingRect.bottom) {
            scrollTo('Top', 'offsetHeight');
        }

        that._scrollInfo.set(parent, { left: parent.scrollLeft, top: parent.scrollTop });
    }

    /**
     * Makes sure a smart-menu-item/smart-menu-items-group is visible by scrolling to it (when "mode" is 'tree').
     */
    _ensureVisibleTreeMode(item, scrollTargetBoundingRect, parent, parentBoundingRect, padding) {
        const that = this;

        if ((that._element === 'menu' || that.scrollMode === 'scrollButtons') && !parent.$.hasClass('scroll-buttons-shown') && that.overflow !== 'hidden') {
            return;
        }

        const oldHeight = parent.offsetHeight,
            scrollButtonNearHidden = that.$scrollButtonNear.hasClass('smart-hidden');
        let newScrollTop;

        if (parentBoundingRect.top > scrollTargetBoundingRect.top) {
            newScrollTop = that._getOffsetTop(item);
        }
        else {
            let itemHeight = !item.expanded ?
                item.offsetHeight :
                item.firstElementChild.offsetHeight + parseInt(window.getComputedStyle(item.children[1]).marginTop, 10);

            if (that._element === 'tree') {
                itemHeight += parseFloat(getComputedStyle(that).getPropertyValue('--smart-tree-item-vertical-offset')) || 0;
            }

            if (parentBoundingRect.bottom < scrollTargetBoundingRect.top + itemHeight) {
                newScrollTop = that._getOffsetTop(item) - oldHeight + itemHeight + padding;
            }
            else {
                return;
            }
        }

        if (that._element === 'tree' && item.path === '0') {
            newScrollTop -= parseFloat(getComputedStyle(that).getPropertyValue('--smart-tree-item-vertical-offset'));
        }

        parent.scrollTop = newScrollTop;

        if (that._element === 'menu' || that.scrollMode === 'scrollButtons') {
            that._updateScrollButtonVisibility(parent, false, [that.$.scrollButtonNear, that.$.scrollButtonFar]);
        }

        if (that.overflow === 'auto' && scrollButtonNearHidden && !that.$scrollButtonNear.hasClass('smart-hidden')) {
            parent.scrollTop += oldHeight - parent.offsetHeight;
        }

        that._scrollInfo.set(parent, { left: parent.scrollLeft, top: parent.scrollTop });
    }

    /**
     * Escape key handler.
     */
    _escapeHandler(focusedItem, level, lastOpenedContainer) {
        const that = this;

        if (focusedItem) {
            focusedItem.$.removeClass('focus');
            focusedItem.removeAttribute('focus');
        }

        that._closeSubContainers(level, undefined, undefined, true);
        that._hoverViaKeyboard(lastOpenedContainer.menuItemsGroup);
    }

    /**
     * Expand items by default.
     */
    _expandItemsByDefault(collapseBeforehand) {
        const that = this;

        if (that._menuItemsGroupsToExpand.length === 0 && !collapseBeforehand ||
            that.mode !== 'tree' && !that._minimized) {
            return;
        }

        const restoreAnimation = that.hasAnimation,
            animationType = that.animation;

        if (restoreAnimation) {
            that.animation = 'none';
        }

        if (collapseBeforehand) {
            that._collapseAll(false);
        }

        for (let i = 0; i < that._menuItemsGroupsToExpand.length; i++) {
            that.expandItem(that._menuItemsGroupsToExpand[i].path, undefined, false);
        }

        if (restoreAnimation) {
            that.animation = animationType;
        }

        that._menuItemsGroupsToExpand = [];
    }

    /**
     * Expands a section (in tree/minimized mode).
     */
    _expandSection(element) {
        const that = this,
            oldHeight = element.style.height,
            sectionHeight = element.scrollHeight + 'px';

        element.style.height = sectionHeight;
        that._treeAnimationInProgress = element;

        if (oldHeight === sectionHeight ||
            !parseFloat(oldHeight) && !parseFloat(sectionHeight)) {
            that._transitionendHandlerExpand(that, element);
            return;
        }

        element.addEventListener('transitionend', that._transitionendHandlerExpand);
    }

    /**
     * Filter input keyup handler.
     */
    _filterInputKeyupHandler() {
        const that = this;

        if (that._filterTimer) {
            clearTimeout(that._filterTimer);
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
     * Finds an item based on filter criteria.
     */
    _findItem(item, filterQuery) {
        if (filterQuery === '') {
            return item;
        }

        const that = this,
            filerValue = item[that.filterMember || 'label'];

        if (typeof filerValue !== 'string') {
            return null
        }

        switch (that.filterMode) {
            case 'startsWith':
                if (filerValue.indexOf(filterQuery) === 0) {
                    return item;
                }

                break;
            case 'startsWithIgnoreCase':
                if (filerValue.toLowerCase().indexOf(filterQuery.toLowerCase()) === 0) {
                    return item;
                }

                break;
            case 'doesNotContain':
                if (filerValue.indexOf(filterQuery) < 0) {
                    return item;
                }

                break;
            case 'doesNotContainIgnoreCase':
                if (filerValue.toLowerCase().indexOf(filterQuery.toLowerCase()) < 0) {
                    return item;
                }

                break;
            case 'contains':
                if (filerValue.indexOf(filterQuery) > -1) {
                    return item;
                }

                break;
            case 'containsIgnoreCase':
                if (filerValue.toLowerCase().indexOf(filterQuery.toLowerCase()) > -1) {
                    return item;
                }

                break;
            case 'equals':
                if (filerValue.localeCompare(filterQuery) === 0) {
                    return item;
                }

                break;
            case 'equalsIgnoreCase':
                if (filerValue.toLowerCase().localeCompare(filterQuery.toLowerCase()) === 0) {
                    return item;
                }

                break;
            case 'endsWith':
                if (filerValue.endsWith(filterQuery)) {
                    return item;
                }

                break;
            case 'endsWithIgnoreCase':
                if (filerValue.toLowerCase().endsWith(filterQuery.toLowerCase())) {
                    return item;
                }

                break;
        }

        return null;
    }

    /**
     * Returns the first MenuItem/MenuItemsGroup that is not disabled.
     */
    _getFirstEnabledChild(parent) {
        const children = parent.children;

        for (let i = 0; i < children.length; i++) {
            if (this._isChildEnabled(children[i])) {
                return children[i];
            }
        }
    }

    /**
     * Returns the last MenuItem/MenuItemsGroup that is not disabled.
     */
    _getLastEnabledChild(parent) {
        const children = parent.children;

        for (let i = children.length - 1; i >= 0; i--) {
            if (this._isChildEnabled(children[i])) {
                return children[i];
            }
        }
    }

    /**
     * Returns the next MenuItem/MenuItemsGroup that is not disabled.
     */
    _getNextEnabledChild(child) {
        if (!child) {
            return;
        }

        while (child.nextElementSibling) {
            const nextElementSibling = child.nextElementSibling;

            if (this._isChildEnabled(nextElementSibling)) {
                return nextElementSibling;
            }

            child = nextElementSibling;
        }
    }

    /**
     * Gets an item's offset from the top of the main container.
     */
    _getOffsetTop(target) {
        let offsetTop = target.offsetTop;

        while (target.offsetParent !== this.$.mainContainer) {
            target = target.offsetParent;
            offsetTop += target.offsetTop;
        }

        return offsetTop;
    }

    /**
     * Returns the previous MenuItem/MenuItemsGroup that is not disabled.
     */
    _getPreviousEnabledChild(child) {
        if (!child) {
            return;
        }

        while (child.previousElementSibling) {
            const previousElementSibling = child.previousElementSibling;

            if (this._isChildEnabled(previousElementSibling)) {
                return previousElementSibling;
            }

            child = previousElementSibling;
        }
    }

    /**
     * Hamburger icon click handler.
     */
    _hamburgerIconClickHandler(event, itemContainer) {
        if (event) {
            event.stopPropagation();
        }

        const that = this;

        if (itemContainer === undefined) {
            if (Smart.ListMenu && that instanceof Smart.ListMenu) {
                itemContainer = that.$.view;
            }
            else {
                itemContainer = that.$.mainContainer;
            }
        }

        if (that.disabled) {
            return;
        }

        if (!that._minimizedDropDownOpened) {
            that._positionDetection.placeOverlay();

            if (that.dropDownAppendTo !== null) {
                const dropDownPosition = that.dropDownPosition,
                    menuBoundingRect = that.getBoundingClientRect(),
                    dropDownOffset = that._positionDetection.getDropDownOffset();

                if (dropDownPosition.indexOf('right') !== -1 || dropDownPosition === 'auto') {
                    if (that.rightToLeft) {
                        itemContainer.style.right = 'initial';
                        itemContainer.style.left = (menuBoundingRect.left + menuBoundingRect.width - itemContainer.offsetWidth - dropDownOffset.x) + 'px';
                    }
                    else {
                        itemContainer.style.left = menuBoundingRect.left + dropDownOffset.x + 'px';
                        itemContainer.style.right = 'initial';
                    }
                }
                else if (dropDownPosition.indexOf('left') !== -1) {
                    itemContainer.style.left = menuBoundingRect.right - itemContainer.offsetWidth + dropDownOffset.x + 'px';
                    itemContainer.style.right = 'initial';
                }

                if (dropDownPosition.indexOf('bottom') !== -1 || dropDownPosition.indexOf('overlay') !== -1 || dropDownPosition === 'auto') {
                    itemContainer.style.top = menuBoundingRect.bottom + dropDownOffset.y + 'px';
                }
                else if (dropDownPosition.indexOf('top') !== -1) {
                    itemContainer.style.top = menuBoundingRect.top + dropDownOffset.y + 'px';
                }
            }
            else {
                itemContainer.style.right = '';
            }

            if (that._edgeMacFF) {
                itemContainer.$.removeClass('not-in-view');
            }

            itemContainer.$.removeClass('smart-visibility-hidden');
            that.$hamburgerIcon.addClass('smart-close-button');
            that.$.hamburgerIcon.setAttribute('aria-expanded', true);
            that._minimizedDropDownOpened = true;

            that._browserBoundsDetection(itemContainer);
        }
        else {
            that._close();
        }
    }

    /**
     * Handles change to the "overflow" property.
     */
    _handleOverflowChange() {
        const that = this,
            mainContainer = that.$.mainContainer;

        if ((that._minimized || that.dropDownAppendTo === null && !mainContainer.classList.contains('simple') && that.mode !== 'tree') && !(Smart.ListMenu && that instanceof Smart.ListMenu)) {
            return;
        }

        const overflow = that.overflow;
        let horizontal;

        if (that.mode === 'horizontal') {
            horizontal = true;
            mainContainer.scrollLeft = 0;
        }
        else {
            horizontal = false;
            mainContainer.scrollTop = 0;
        }

        if (overflow === 'hidden') {
            mainContainer.classList.remove('scroll-buttons-shown');
            that.$scrollButtonNear.addClass('smart-hidden');
            that.$scrollButtonFar.addClass('smart-hidden');
        }
        else {
            that.$.scrollButtonNear.disabled = that.disabled;
            that.$.scrollButtonFar.disabled = that.disabled;

            if (overflow === 'auto') {
                that.$scrollButtonNear.addClass('smart-hidden');
                that.$scrollButtonFar.addClass('smart-hidden');
                that._checkOverflow(mainContainer, horizontal, [that.$.scrollButtonNear, that.$.scrollButtonFar]);
            }
            else {
                mainContainer.classList.add('scroll-buttons-shown');
                mainContainer.classList.remove('one-button-shown');
                that.$scrollButtonNear.removeClass('smart-hidden');
                that.$scrollButtonFar.removeClass('smart-hidden');
                that._updateScrollButtonVisibility(mainContainer, horizontal, [that.$.scrollButtonNear, that.$.scrollButtonFar]);
            }
        }

        that._scrollInfo.set(mainContainer, { left: mainContainer.scrollLeft, top: mainContainer.scrollTop });
    }

    /**
     * Hides main container scroll buttons.
     */
    _hideMainContainerScrollButtons() {
        const that = this;

        that.$scrollButtonNear.addClass('smart-hidden');
        that.$scrollButtonFar.addClass('smart-hidden');
        that.$mainContainer.removeClass('scroll-buttons-shown');
        that.$mainContainer.removeClass('one-button-shown');
    }

    /**
     * Hovers an item via the keyboard.
     */
    _hoverViaKeyboard(item) {
        if (!item) {
            return;
        }

        const that = this;

        item.$.addClass('focus');
        item.setAttribute('focus', '');

        that._focusedViaKeyboard = item;
        that._ensureVisible(item);
    }

    /**
     * Checks if all items in a tree branch are expanded.
     */
    _isBranchExpanded(item) {
        const that = this;

        if (that.mode !== 'tree') {
            return true;
        }

        let expanded = true;

        while (item.parentItem) {
            expanded = expanded && item.parentItem.expanded;
            item = item.parentItem;
        }

        return expanded;
    }

    /**
     * Checks if an item can be focused.
     */
    _isChildEnabled(child) {
        return !(child.disabled || child.templateApplied || child.hidden || child instanceof HTMLDivElement || child.offsetHeight === 0);
    }

    /**
     * Checks if a container is opened.
     */
    _isContainerOpened(level, container) {
        const that = this;

        if (that.mode === 'tree' || that._minimized) {
            if (!that._openedContainers[level]) {
                that._openedContainers[level] = [];
            }

            return that._openedContainers[level].indexOf(container) !== -1;
        }
        else {
            return that._openedContainers[level] === container;
        }
    }

    /**
     * Keydown event handler.
     */
    _keydownHandler(event) {
        const that = this;
        let key = event.key;

        if (that.getRootNode().activeElement !== that ||
            ['ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'End', 'Enter', 'Escape', 'Home', ' '].indexOf(key) === -1 ||
            that.disabled) {
            return;
        }

        event.preventDefault();

        const mode = that.mode;

        if (mode === 'tree' || that._minimized) {
            that._keydownHandlerTreeMode(key);
            return;
        }

        const dropDownPosition = that.dropDownPosition,
            leftOrientation = dropDownPosition.indexOf('left') !== -1,
            topOrientation = dropDownPosition === 'top-left' || dropDownPosition === 'top-right',
            openedContainers = that._openedContainers;
        let lastOpenedContainer = that.$.mainContainer,
            level = 1,
            focusedItem;

        for (let i = openedContainers.length - 1; i >= 0; i--) {
            if (openedContainers[i] !== undefined) {
                lastOpenedContainer = openedContainers[i];
                level = lastOpenedContainer.level;
                lastOpenedContainer = lastOpenedContainer.itemContainer;
                break;
            }
        }

        focusedItem = lastOpenedContainer.querySelector('[focus][level="' + level + '"]');

        if (that.rightToLeft) {
            if (key === 'ArrowLeft') {
                key = 'ArrowRight';
            }
            else if (key === 'ArrowRight') {
                key = 'ArrowLeft';
            }
        }

        switch (key) {
            case 'ArrowDown':
                if (level === 1) {
                    if (mode === 'horizontal' && !topOrientation) {
                        that._levelOneOpenDropDown(focusedItem);
                    }
                    else if (mode !== 'horizontal') {
                        that._levelOneNavigate('_getFirstEnabledChild', focusedItem, lastOpenedContainer);
                    }
                }
                else {
                    that._navigate('_getNextEnabledChild', focusedItem, lastOpenedContainer);
                }

                break;
            case 'ArrowLeft':
                if (!leftOrientation) {
                    that._arrowLeftHandler(level, mode, focusedItem, lastOpenedContainer);
                }
                else {
                    if (level === 1) {
                        if (mode === 'horizontal') {
                            that._levelOneNavigate('_getLastEnabledChild', focusedItem, lastOpenedContainer);
                        }
                        else {
                            that._levelOneOpenDropDown(focusedItem);
                        }
                    }
                    else {
                        if (focusedItem instanceof Smart.MenuItemsGroup) {
                            that._selectionHandler({ target: focusedItem, isTrusted: true });
                        }
                        else {
                            that._levelOneNavigateFromLowerLevel('_getPreviousEnabledChild', focusedItem);
                        }
                    }
                }
                break;
            case 'ArrowRight':
                if (!leftOrientation) {
                    that._arrowRightHandler(level, mode, focusedItem, lastOpenedContainer);
                }
                else {
                    if (level === 1) {
                        if (mode === 'horizontal') {
                            that._levelOneNavigate('_getFirstEnabledChild', focusedItem, lastOpenedContainer);
                        }
                    }
                    else {
                        if (level === 2) {
                            that._levelOneNavigateFromLowerLevel('_getNextEnabledChild', focusedItem);
                        }
                        else {
                            that._escapeHandler(focusedItem, level, lastOpenedContainer);
                        }
                    }
                }
                break;
            case 'ArrowUp':
                if (level === 1) {
                    if (mode === 'horizontal' && topOrientation) {
                        that._levelOneOpenDropDown(focusedItem);
                    }
                    else if (mode !== 'horizontal') {
                        that._levelOneNavigate('_getLastEnabledChild', focusedItem, lastOpenedContainer);
                    }
                }
                else {
                    that._navigate('_getPreviousEnabledChild', focusedItem, lastOpenedContainer);
                }

                break;
            case 'End':
            case 'Home': {
                const enabledChild = key === 'End' ?
                    that._getLastEnabledChild(lastOpenedContainer) :
                    that._getFirstEnabledChild(lastOpenedContainer);

                if (!enabledChild || focusedItem === enabledChild) {
                    return;
                }

                if (focusedItem) {
                    focusedItem.$.removeClass('focus');
                    focusedItem.removeAttribute('focus');
                }

                that._hoverViaKeyboard(enabledChild);
                break;
            }
            case 'Enter':
                if (focusedItem) {
                    that._selectionHandler({ target: focusedItem, isTrusted: true });
                }

                break;
            case 'Escape':
                if (level > 1) {
                    if (level === 2) {
                        that._positionDetection.removeOverlay();
                    }

                    that._escapeHandler(focusedItem, level, lastOpenedContainer);
                }
                else if (mode === 'dropDown' && that.opened) {
                    that.close({ trigger: 'interaction', target: 'Escape' });
                }

                break;
            case ' ':
                if (focusedItem) {
                    that._toggleItem(focusedItem);
                }

                break;
        }
    }

    /**
     * Keydown event handler.
     */
    _keydownHandlerTreeMode(key) {
        const that = this,
            menuItems = Array.from(that.$.mainContainer.querySelectorAll('smart-menu-item, smart-menu-items-group')),
            focusedItem = that.$.mainContainer.getElementsByClassName('focus')[0];

        function canItemBefocused(item) {
            const level = item.level;

            return item.disabled === false &&
                item.templateApplied !== true &&
                (level === 1 ||
                    level > 1 &&
                    that._isContainerOpened(level, item.parentElement.container) &&
                    item.getBoundingClientRect().height > 0);
        }

        function moveDown(startIndex) {
            for (let i = startIndex; i < menuItems.length; i++) {
                const currentItem = menuItems[i];

                if (canItemBefocused(currentItem)) {
                    if (focusedItem) {
                        if (focusedItem === currentItem) {
                            break;
                        }

                        focusedItem.$.removeClass('focus');
                        focusedItem.removeAttribute('focus');
                    }

                    that._hoverViaKeyboard(currentItem);
                    break;
                }
            }
        }

        function moveUp(startIndex) {
            for (let i = startIndex; i >= 0; i--) {
                const currentItem = menuItems[i];

                if (canItemBefocused(currentItem)) {
                    if (focusedItem) {
                        if (focusedItem === currentItem) {
                            break;
                        }

                        focusedItem.$.removeClass('focus');
                        focusedItem.removeAttribute('focus');
                    }

                    that._hoverViaKeyboard(currentItem);
                    break;
                }
            }
        }

        function navigateToParentItem() {
            if (focusedItem.level > 1) {
                focusedItem.$.removeClass('focus');
                focusedItem.removeAttribute('focus');
                that._hoverViaKeyboard(focusedItem.parentItem);
            }
        }

        let startIndex;

        switch (key) {
            case 'ArrowDown':
                if (focusedItem) {
                    startIndex = menuItems.indexOf(focusedItem) + 1;
                }
                else {
                    startIndex = 0;
                }

                moveDown(startIndex);
                break;
            case 'ArrowLeft':
                if (!focusedItem) {
                    return;
                }

                if (focusedItem instanceof Smart.MenuItem) {
                    navigateToParentItem();
                }
                else {
                    if (that._isContainerOpened(focusedItem.level + 1, focusedItem.container)) {
                        that._closeSubContainers(focusedItem.level + 1, focusedItem.container, true, true);
                        return;
                    }

                    navigateToParentItem();
                }
                break;
            case 'ArrowRight':
                if (!focusedItem || focusedItem instanceof Smart.MenuItem) {
                    return;
                }

                if (that._isContainerOpened(focusedItem.level + 1, focusedItem.container)) {
                    focusedItem.$.removeClass('focus');
                    focusedItem.removeAttribute('focus');
                    that._hoverViaKeyboard(that._getFirstEnabledChild(focusedItem.itemContainer));
                }
                else {
                    that._selectionHandler({ target: focusedItem, type: 'keydown', isTrusted: true }, focusedItem);
                }

                break;
            case 'ArrowUp':
                if (focusedItem) {
                    startIndex = menuItems.indexOf(focusedItem) - 1;
                }
                else {
                    startIndex = menuItems.length - 1;
                }

                moveUp(startIndex);
                break;
            case 'End':
                moveUp(menuItems.length - 1);
                break;
            case 'Enter':
                if (that._minimized && !that._minimizedDropDownOpened) {
                    that._hamburgerIconClickHandler(undefined, that.$.mainContainer);
                }
                else if (focusedItem) {
                    that._selectionHandler({ target: focusedItem, type: 'keydown', isTrusted: true });
                }

                break;
            case 'Escape':
                if (that._minimized && that._minimizedDropDownOpened) {
                    that._close();
                }

                break;
            case 'Home':
                moveDown(0);
                break;
            case ' ':
                if (focusedItem) {
                    that._toggleItem(focusedItem);
                }

                break;
        }
    }

    /**
     * Initializes the content of the Menu when the content has been changed dynamically via ng-for (Angular)
     */
    _lazyInitItems() {
        const that = this;

        if (that._inLazyInit) {
            return;
        }

        that._inLazyInit = true;
        that._menuItems = {};
        that._processHTML(that.$.mainContainer, 1);

        that._expandItemsByDefault();
        that._refreshCheckableItems();
        cancelAnimationFrame(Smart.Menu.processTimer);
        delete Smart.Menu.processTimer
        that._inLazyInit = false;

        if (that.$.scrollViewer) {
            that.$.scrollViewer.refresh();
        }
    }

    /**
     * Navigates through first-level items.
     */
    _levelOneNavigate(method, focusedItem, lastOpenedContainer) {
        const that = this;

        if (!focusedItem) {
            const enabledChild = that[method](lastOpenedContainer);

            if (enabledChild) {
                that._hoverViaKeyboard(enabledChild);
            }
        }
        else {
            if (method === '_getLastEnabledChild') {
                that._navigate('_getPreviousEnabledChild', focusedItem, lastOpenedContainer);
            }
            else {
                that._navigate('_getNextEnabledChild', focusedItem, lastOpenedContainer);
            }
        }
    }

    /**
     * Navigates to a first-level item.
     */
    _levelOneNavigateFromLowerLevel(method, focusedItem) {
        const that = this,
            firstLevelItem = that[method](that._openedContainers[2].menuItemsGroup);

        if (firstLevelItem) {
            if (focusedItem) {
                focusedItem.$.removeClass('focus');
                focusedItem.removeAttribute('focus');
            }

            that._closeSubContainers(2);

            if (firstLevelItem instanceof Smart.MenuItemsGroup) {
                that._selectionHandler({ target: firstLevelItem, isTrusted: true });
            }
            else {
                that._hoverViaKeyboard(firstLevelItem);
            }
        }
    }

    /**
     * Opens first-level dropdown containers via the keyboard.
     */
    _levelOneOpenDropDown(focusedItem) {
        if (focusedItem && focusedItem instanceof Smart.MenuItemsGroup) {
            this._selectionHandler({ target: focusedItem, isTrusted: true });
        }
    }

    /**
     * External main container handler.
     */
    _mainContainerHandler(event) {
        const that = this;

        if (!that._minimized || that.dropDownAppendTo === null) {
            return;
        }

        switch (event.type) {
            case 'click':
                that._selectionHandler(event);
                break;
            case 'mouseleave':
                that._mouseleaveHandler(event);
                break;
            case 'mouseout':
                that._mouseoutMouseoverHandler(event);
                break;
            case 'mouseover':
                that._mouseoutMouseoverHandler(event);
                break;
        }
    }

    /**
     * smart-menu-item selection handler.
     */
    _menuItemSelectionHandler(closestItem, event) {
        const that = this;

        function focus() {
            if (that.enableShadowDOM && ((that.shadowRoot.activeElement || document.activeElement) !== that &&
                that.dropDownAppendTo !== null && event.type === 'click' && !that.shadowRoot.contains(closestItem))) {
                that.focus();
            }
            else if (document.activeElement !== that && that.dropDownAppendTo !== null && event.type === 'click' && !that.contains(closestItem)) {
                that.focus();
            }
        }

        if (closestItem.disabled || closestItem.templateApplied) {
            focus();
            return;
        }

        if (!that._toggleItem(closestItem)) {
            that.$.fireEvent('itemClick', { 'item': closestItem, 'label': closestItem.label, 'value': closestItem.value });

            if (event.target && event.target.nodeName !== 'A') {
                const anchor = closestItem.querySelector('a');

                if (anchor) {
                    anchor.click();
                }
            }

            if (that.mode !== 'tree') {
                that._close();

                if (that.mode === 'dropDown') {
                    that._ripple(closestItem, event);
                    that.close({ trigger: 'interaction', target: closestItem });
                    return;
                }
            }
        }

        that._ripple(closestItem, event);
        focus();
    }

    /**
     * smart-menu-items-group selection handler.
     */
    _menuItemsGroupSelectionHandler(closestItemsGroup, event, fireEvent) {
        const that = this,
            mode = that.mode,
            container = closestItemsGroup.container,
            level = container.level,
            defaultView = mode !== 'tree' && !that._minimized;

        if (that._treeAnimationInProgress === container) {
            return;
        }

        that._discardKeyboardHover();

        if (that.getRootNode().activeElement !== that && that.dropDownAppendTo !== null && event.type === 'click' && !that.contains(event.target)) {
            that.focus();
        }

        if (event.type === 'click' &&
            ((!event.target.classList.contains('smart-' + that._element + '-items-group-arrow') && that._toggleItem(closestItemsGroup)) ||
                (that.selectionMode === 'mouseenter' && mode !== 'tree' && !that._minimized))) {
            return;
        }

        let animation = that.hasAnimation;

        if (that._isContainerOpened(level, container)) {
            that._closeSubContainers(level, container, true, fireEvent !== false);

            if (defaultView && closestItemsGroup.hasAttribute('focus')) {
                that._focusedViaKeyboard = closestItemsGroup;
            }
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

            that._positionDetection.placeOverlay();

            if (defaultView) {
                that._closeSubContainers(level);
            }

            if (animation && !defaultView) {
                if (event.type !== 'expand') {
                    that._ensureVisibleOnTransitionend = closestItemsGroup;
                }

                that._expandSection(container);
            }

            if (that._edgeMacFF && level === 2 && defaultView) {
                container.$.removeClass('not-in-view');
            }

            container.$.removeClass('smart-visibility-hidden');

            if (defaultView || event.type !== 'expand') {
                if (!defaultView) {
                    const currentFocus = that.$.mainContainer.getElementsByClassName('focus')[0];

                    if (currentFocus) {
                        currentFocus.$.removeClass('focus');
                        currentFocus.removeAttribute('focus');
                    }

                    that._focusedViaKeyboard = closestItemsGroup;
                }
                else if (event.type === 'keydown') {
                    that._focusedViaKeyboard = closestItemsGroup;
                }

                closestItemsGroup.$.addClass('focus');
                closestItemsGroup.setAttribute('focus', '');
            }

            closestItemsGroup.$.addClass('smart-' + that._element + '-items-group-opened');
            closestItemsGroup.$.addClass('smart-' + that._element + '-items-group-expanded');
            closestItemsGroup.setAttribute('aria-expanded', true);

            that._addOpenedContainer(level, container);

            if (defaultView) {
                that._ensureVisible(closestItemsGroup);

                if (closestItemsGroup.level > 1 && closestItemsGroup.parentElement.dropDownHeightSet) {
                    const dropDownPosition = that.dropDownPosition,
                        top = closestItemsGroup.getBoundingClientRect().top - closestItemsGroup.parentElement.container.getBoundingClientRect().top;

                    if (dropDownPosition.indexOf('bottom') !== -1 || dropDownPosition === 'auto') {
                        container.style.top = top + 'px';
                    }
                    else if (dropDownPosition.indexOf('top') !== -1) {
                        container.style.top = top + closestItemsGroup.offsetHeight + 'px';
                    }
                    else {
                        container.style.top = (top + closestItemsGroup.offsetHeight / 2) + 'px';
                    }
                }

                if (container.itemContainer.checkOverflow && container.itemContainer.dropDownHeightSet) {
                    that._checkOverflow(container.itemContainer, false, [container.children[0], container.children[2]]);
                    delete container.itemContainer.checkOverflow;
                }
            }

            that._positionExternalContainer(container, closestItemsGroup);

            if (mode !== 'tree' && !that._minimized) {
                that._browserBoundsDetection(container);
            }
            else if (!animation) {
                that._browserBoundsDetection(that.$.mainContainer);
            }

            if (event.type === undefined) {
                that._hoverViaKeyboard(that._getFirstEnabledChild(closestItemsGroup.itemContainer));
            }

            if (fireEvent !== false) {
                that.$.fireEvent('expand', {
                    'item': closestItemsGroup,
                    'label': closestItemsGroup.label,
                    'path': closestItemsGroup.path,
                    'value': closestItemsGroup.value,
                    'children': closestItemsGroup.itemContainer.children
                });
            }
        }

        if (defaultView) {
            that._ripple(closestItemsGroup, event);
        }
        else if (mode === 'tree' && !animation) {
            that._checkOverflow(that.$.mainContainer, false, [that.$.scrollButtonNear, that.$.scrollButtonFar]);

            if (!that._minimized && event.type !== 'expand') {
                that._ensureVisible(closestItemsGroup);
            }
        }
    }

    /**
     * Mouseenter handler.
     */
    _mouseenterHandler() {
        const that = this;

        if (that.autoFocusOnMouseenter && that.getRootNode().activeElement !== that) {
            that.focus();
        }
    }

    /**
     * Mouseleave handler.
     */
    _mouseleaveHandler(event) {
        const that = this;

        if (that.selectionMode === 'mouseenter' && that.mode !== 'tree' && !that._minimized) {
            if (that.dropDownAppendTo !== null && event.relatedTarget) {
                if (that.contains(event.target)) {
                    const externalContainer = event.relatedTarget.closest('.smart-menu-drop-down');

                    if (externalContainer && externalContainer.ownerElement === that) {
                        return;
                    }
                }
                else if (that.contains(event.relatedTarget)) {
                    return;
                }
            }

            that._isElementHovered = false;

            that._autoCloseTimeout = setTimeout(function () {
                const context = that.context;

                clearTimeout(that._autoCloseTimeout);

                if (!that._isElementHovered) {
                    that.context = that;
                    that._close();
                    that.context = context;
                }
            }, that.autoCloseDelay);
        }
    }

    /**
     * Mouseout/mouseover handler.
     */
    _mouseoutMouseoverHandler(event) {
        const that = this;

        if (that.disabled || that.displayLoadingIndicator) {
            return;
        }

        let closestItem = event.target.closest('smart-menu-item') || event.target.closest('smart-menu-items-group');

        if (that.enableShadowDOM) {
            closestItem = event.composedPath()[0].closest('smart-menu-item') || event.composedPath()[0].closest('smart-menu-items-group') || closestItem;
        }

        if (event.type === 'mouseover') {
            that._isElementHovered = true;
        }

        if (closestItem === null || closestItem.disabled || closestItem.templateApplied) {
            return;
        }

        if ((that.mode === 'tree' || that._minimized) && closestItem.hasAttribute('focus') && event.relatedTarget &&
            (event.target.parentElement === event.relatedTarget || event.relatedTarget.parentElement === event.target)) {
            return;
        }

        that._discardKeyboardHover(false);

        if (event.type === 'mouseover') {
            if (that.selectionMode === 'mouseenter' && that.mode !== 'tree' && !that._minimized) {
                if (closestItem instanceof Smart.MenuItemsGroup && !closestItem.hasAttribute('hover')) {
                    that._selectionHandler(event, closestItem);
                }
                else if (closestItem instanceof Smart.MenuItem) {
                    that._closeSubContainers(closestItem.level + 1);
                }
            }

            const closestDropDown = event.target.closest('.smart-menu-drop-down');

            if (!closestDropDown || closestDropDown && !closestItem.contains(closestDropDown)) {
                closestItem.$.addClass('hover');
                closestItem.setAttribute('hover', '');
                that._discardKeyboardHover(true);
            }
        }
        else {
            if (that.mode !== 'tree' && !that._minimized) {
                if (that.selectionMode === 'mouseenter' && event.relatedTarget === that.$.mainContainer) {
                    that._close();
                }

                if (closestItem instanceof Smart.MenuItemsGroup &&
                    closestItem.container &&
                    !closestItem.container.$.hasClass('smart-visibility-hidden')) {
                    return;
                }
            }

            closestItem.$.removeClass('hover');
            closestItem.removeAttribute('hover');
        }
    }

    /**
     * Moves dropdowns to external container.
     */
    _moveDropDownsToExternalContainer() {
        const that = this;

        for (let i = 0; i < that._containersInBody.length; i++) {
            const container = that._containersInBody[i];

            that._dropDownParent.appendChild(container);

            container.$.listen('click', that._selectionHandler.bind(that));
            container.$.listen('mouseleave', that._mouseleaveHandler.bind(that));
            container.$.listen('mouseout', that._mouseoutMouseoverHandler.bind(that));
            container.$.listen('mouseover', that._mouseoutMouseoverHandler.bind(that));
        }

        for (let i = 0; i < that._containers.length; i++) {
            const container = that._containers[i];

            container.ownerElement = that;

            if (that.theme !== '') {
                container.classList.add(that.theme);
            }

            if (that.rightToLeft) {
                container.setAttribute('right-to-left', '');
            }

            container.classList.add('smart-drop-down-repositioned');
            container.setAttribute('mode', that.mode);
            container.setAttribute('drop-down-position', that.dropDownPosition);

            if (that.checkboxes) {
                container.setAttribute('checkboxes', '');
            }
        }
    }

    /**
     * Moves dropdowns to the Menu.
     */
    _moveDropDownsToMenu() {
        const that = this;

        for (let i = 0; i < that._containersInBody.length; i++) {
            const container = that._containersInBody[i];

            container.$.unlisten('click');
            container.$.unlisten('mouseleave');
            container.$.unlisten('mouseout');
            container.$.unlisten('mouseover');

            container.style.left = '';
            container.style.right = '';
            container.style.top = '';
            container.style.marginLeft = '';
            container.style.marginTop = '';

            container.menuItemsGroup.appendChild(container);
        }

        for (let i = 0; i < that._containers.length; i++) {
            const container = that._containers[i];

            if (that.theme !== '') {
                container.classList.remove(that.theme);
            }

            container.classList.remove('smart-drop-down-repositioned');
            container.removeAttribute('mode');
            container.removeAttribute('drop-down-position');
            container.removeAttribute('checkboxes');
            container.removeAttribute('right-to-left');
        }
    }

    /**
     * Navigates to an item via the keyboard.
     */
    _navigate(method, focusedItem, lastOpenedContainer) {
        const that = this;

        if (!focusedItem) {
            if (method === '_getNextEnabledChild') {
                that._hoverViaKeyboard(that._getFirstEnabledChild(lastOpenedContainer));
            }
            else {
                that._hoverViaKeyboard(that._getLastEnabledChild(lastOpenedContainer));
            }

            return;
        }

        const navigateToChild = that[method](focusedItem);

        if (navigateToChild) {
            focusedItem.$.removeClass('focus');
            focusedItem.removeAttribute('focus');

            that._hoverViaKeyboard(navigateToChild);
        }
    }

    /**
     * Positions an external dropdown container.
     */
    _positionExternalContainer(container, menuItemsGroup) {
        const that = this;

        if (that.dropDownAppendTo === null || container.level !== 2) {
            return;
        }

        const dropDownPosition = that.dropDownPosition,
            mode = that.mode,
            menuItemsGroupRect = menuItemsGroup.getBoundingClientRect(),
            dropDownOffset = that._positionDetection.getDropDownOffset(),
            top = menuItemsGroupRect.top + dropDownOffset.y,
            bottom = menuItemsGroupRect.bottom + dropDownOffset.y;
        let left = menuItemsGroupRect.left + dropDownOffset.x;
        let right = menuItemsGroupRect.right + dropDownOffset.x;

        container.style.top = container.style.left = container.style.right = '';

        if (that.rightToLeft) {
            container.style.right = 'initial';
        }

        if (dropDownPosition.indexOf('left') !== -1) {
            left -= container.offsetWidth;

            if (mode === 'horizontal' || dropDownPosition === 'overlay-left') {
                left += menuItemsGroupRect.width;
            }

            container.style.left = left + 'px';
            container.style.right = 'initial';
        }
        else if (mode === 'horizontal' || dropDownPosition === 'overlay-right') {
            container.style.left = left + 'px';
        }
        else {
            if (that.rightToLeft) {
                container.style.left = (right - container.offsetWidth) + 'px';
            }
            else {
                container.style.left = (left + menuItemsGroupRect.width) + 'px';
            }
        }

        switch (dropDownPosition) {
            case 'bottom-right':
            case 'bottom-left':
            case 'auto':
                if (mode === 'horizontal') {
                    container.style.top = bottom + 'px';
                }
                else {
                    container.style.top = top + 'px';
                }

                break;
            case 'top-right':
            case 'top-left':
                if (mode === 'horizontal') {
                    container.style.top = (top - container.offsetHeight) + 'px';
                }
                else {
                    container.style.top = (bottom - container.offsetHeight) + 'px';
                }

                break;
            case 'overlay-right':
            case 'overlay-left':
                container.style.top = (top + menuItemsGroupRect.height / 2) + 'px';
                break;
        }
    }

    /**
     * Processes "dataSource" object.
     */
    _processDataSource() {
        const that = this,
            dataSource = that.dataSource,
            displayMember = that.displayMember,
            itemsMember = that.itemsMember,
            valueMember = that.valueMember,
            mainContainer = that.$.mainContainer,
            fragment = document.createDocumentFragment();

        function processItem(item, parent) {
            let element;

            if (Array.isArray(item[itemsMember]) && item[itemsMember].length > 0) {
                element = document.createElement('smart-' + that._element + '-items-group');

                if (item.checkable === true) {
                    element.set('checkable', true);
                }

                if (typeof item.checkMode === 'string') {
                    element.set('checkMode', item.checkMode);
                }

                if (item.dropDownHeight) {
                    element.set('dropDownHeight', item.dropDownHeight);
                }

                if (item.expanded === true && that.mode === 'tree') {
                    element.set('expanded', true);
                    element.setAttribute('aria-expanded', true);
                }

                for (let i = 0; i < item[itemsMember].length; i++) {
                    processItem(item[itemsMember][i], element);
                }
            }
            else {
                element = document.createElement('smart-' + that._element + '-item');

                if (item.shortcut !== undefined) {
                    element.set('shortcut', item.shortcut);
                }

                if (item.customAttribute) {
                    element.setAttribute(item.customAttribute, '');
                }
            }

            element.isDirty = false;

            if (item.id !== undefined && /^[A-Za-z]+[\w\-\:\.]*$/.test(item.id)) {
                element.id = item.id;
            }

            if (item.checked === true) {
                element.set('checked', true);
                element.setAttribute('aria-checked', true);
            }

            if (item.disabled === true) {
                element.set('disabled', true);
            }

            if (item[displayMember] !== undefined) {
                element.set('label', item[displayMember]);
            }
            else if (typeof item[itemsMember] === 'string') {
                element.set('label', item[itemsMember]);
            }

            if (item.selected === true) {
                element.set('selected', true);
            }

            if (item.separator === true) {
                element.set('separator', true);
            }

            if (item[valueMember] !== undefined) {
                element.set('value', item[valueMember]);
            }

            parent.appendChild(element);
        }

        mainContainer.innerHTML = '';

        //Make sure the content is removed
        if (mainContainer instanceof Smart.ScrollViewer) {
            mainContainer.removeAll();
        }

        for (let i = 0; i < dataSource.length; i++) {
            const currentItem = dataSource[i];

            processItem(currentItem, fragment);
        }

        that.$.mainContainer.appendChild(fragment);
        that._processHTML(that.$.mainContainer, 1);
    }

    /**
     * Processes initial HTML structure.
     */
    _processHTML(item, level, autoSort) {
        const that = this;
        let container, itemContainer;

        if (level > 1) {
            container = that._createMenuItemsGroupContainer(item, level);
            itemContainer = container.itemContainer;

            if ((item.expanded || item.hasAttribute('expanded')) && that.mode === 'tree') {
                that._menuItemsGroupsToExpand.push(item);
            }
            else {
                item.set('expanded', false);
                item.removeAttribute('expanded');
                item.setAttribute('aria-expanded', false);
            }
        }

        const itemChildren = Array.from(item.children),
            checkedChildren = [],
            itemFragment = document.createDocumentFragment();
        let pathOffset = 0;

        for (let i = 0; i < itemChildren.length; i++) {
            if (level > 1 && i === 0) {
                pathOffset++;
                continue;
            }

            const currentItem = itemChildren[i];

            if (!(currentItem instanceof Smart.MenuItem || currentItem instanceof Smart.MenuItemsGroup)) {
                currentItem.parentElement.removeChild(currentItem);
                pathOffset++;
                continue;
            }

            that._createItemHTMLStructure(currentItem, level, item, i - pathOffset);

            if (currentItem.checked || currentItem.hasAttribute('checked')) {
                if (!currentItem.disabled && !currentItem.hasAttribute('disabled') && !currentItem.templateApplied) {
                    checkedChildren.push(currentItem);
                }
                else {
                    currentItem.set('checked', false);
                    currentItem.removeAttribute('checked');
                    currentItem.removeAttribute('aria-checked');
                }
            }

            if (level > 1) {
                itemFragment.appendChild(currentItem);
            }

            if (currentItem instanceof Smart.MenuItemsGroup) {
                that._processHTML(currentItem, level + 1);
            }
        }

        if (level > 1) {
            itemContainer.appendChild(itemFragment);
            item.container = container;
            item.itemContainer = itemContainer;

            if (item instanceof Smart.MenuItemsGroup) {
                const arrowElement = document.createElement('div');

                arrowElement.className = 'smart-' + that._element + '-items-group-arrow';

                if (that._element === 'menu') {
                    arrowElement.setAttribute('role', 'presentation');
                }
                else {
                    arrowElement.setAttribute('role', 'button');
                    arrowElement.setAttribute('aria-label', 'Toggle');
                }

                that._setArrowDirection(arrowElement, level);

                item.firstElementChild.appendChild(arrowElement);
            }

            that._containers.push(container);

            if (level === 2) {
                that._containersInBody.push(container);

                if (that._edgeMacFF) {
                    container.addEventListener('transitionend', function (event) {
                        if (event.target === this && this.$.hasClass('smart-visibility-hidden')) {
                            this.style.left = '';
                            this.style.top = '';
                            this.$.addClass('not-in-view');
                        }
                    });
                }
            }

            if (that.dropDownAppendTo === null || that.mode === 'tree' || that._minimized) {
                item.appendChild(container);
            }
            else {
                container.ownerElement = that;

                that.rightToLeft ? container.setAttribute('right-to-left', '') : container.removeAttribute('right-to-left');
                container.classList.add('smart-drop-down-repositioned');
                container.setAttribute('mode', that.mode);
                container.setAttribute('drop-down-position', that.dropDownPosition);

                if (that.checkboxes) {
                    container.setAttribute('checkboxes', '');
                }

                if (that.theme !== '') {
                    container.$.addClass(that.theme);
                }

                container.setAttribute('animation', that.animation);

                if (level === 2) {
                    that._dropDownParent.appendChild(container);

                    container.$.listen('click', that._selectionHandler.bind(that));
                    container.$.listen('mouseleave', that._mouseleaveHandler.bind(that));
                    container.$.listen('mouseout', that._mouseoutMouseoverHandler.bind(that));
                    container.$.listen('mouseover', that._mouseoutMouseoverHandler.bind(that));
                }
                else {
                    item.appendChild(container);
                }
            }
        }

        that._validateRadioButtonSelection(item, level, checkedChildren);

        if (that._sortItems && autoSort !== false) {
            that._sortItems(item);
        }
    }

    /**
     * Processes initial HTML structure with <ul> element.
     */
    _processUList() {
        const that = this,
            menuItemsGroupOpeningTagRegex = new RegExp(/<li>(.(?!<\/li>)|\n)*?<ul>/),
            menuItemsGroupClosingTagRegex = new RegExp(/<\/ul>(.|\n)*?<\/li>/);
        let innerHTML = that.$.mainContainer.firstElementChild.innerHTML;

        innerHTML = innerHTML.replace(/\r?\n|\r/g, '');
        innerHTML = innerHTML.replace(/<li(.|\n)*?>/g, '<li>');
        innerHTML = innerHTML.replace(/<li><\/li>/g, '<li> </li>');
        innerHTML = innerHTML.replace(/<ul(.|\n)*?>/g, '<ul>');

        while (menuItemsGroupOpeningTagRegex.test(innerHTML)) {
            const match = menuItemsGroupOpeningTagRegex.exec(innerHTML),
                content = '<smart-' + that._element + '-items-group>' + match[0].slice(4, match[0].length - 4);

            innerHTML = innerHTML.replace(match[0], content);
        }

        while (menuItemsGroupClosingTagRegex.test(innerHTML)) {
            const match = menuItemsGroupClosingTagRegex.exec(innerHTML),
                content = '</smart-' + that._element + '-items-group>';

            innerHTML = innerHTML.replace(match[0], content);
        }

        innerHTML = innerHTML.replace(/li>/g, 'smart-' + that._element + '-item>');

        that.$.mainContainer.innerHTML = innerHTML;
    }

    /**
     * Refreshes the "_containers" and "_containersFixedHeight" arrays.
     */
    _refreshContainersArrays() {
        const that = this;

        for (let i = that._containers.length - 1; i >= 0; i--) {
            const container = that._containers[i];

            if (!document.body.contains(container)) {
                that._containers.splice(i, 1);

                const index = that._containersFixedHeight.indexOf(container);

                if (index > -1) {
                    that._containersFixedHeight.splice(index, 1);
                    that._additionalScrollButtons.splice(index, 1);
                }
            }
        }

        that._checkContainersLength();
    }

    /**
     * Refreshes numeric item paths.
     */
    _refreshItemPaths(item, firstLevel, getChildren, resetOriginalIndex) {
        const that = this;
        let container;

        if (firstLevel) {
            container = item;
        }
        else {
            container = item.container.itemContainer;
        }

        const children = getChildren ? getChildren(item) : container.children;

        for (let i = 0; i < children.length; i++) {
            const currentItem = children[i];
            let currentItemPath;

            if (resetOriginalIndex) {
                currentItem.originalIndex = i;
            }

            if (!firstLevel) {
                currentItemPath = item.path + '.' + i;
            }
            else {
                currentItemPath = '' + i;
            }

            currentItem.path = currentItemPath;
            that._menuItems[currentItemPath] = currentItem;

            if (currentItem instanceof Smart.MenuItemsGroup) {
                that._refreshItemPaths(currentItem, undefined, getChildren, resetOriginalIndex);
            }
        }
    }

    /**
     * Removes fixed heights of containers.
     */
    _removeContainerFixedHeight() {
        const that = this;

        for (let i = 0; i < that._containersFixedHeight.length; i++) {
            const container = that._containersFixedHeight[i];

            container.style.height = '';
            container.itemContainer.$.removeClass('scroll-buttons-shown');
            container.itemContainer.$.removeClass('one-button-shown');
            container.children[0].$.addClass('smart-hidden');
            container.children[2].$.addClass('smart-hidden');
            container.itemContainer.checkOverflow = true;
        }
    }

    /**
     * Removes containers added to the body or a custom external element.
     */
    _removeContainersInBody() {
        const that = this;

        if (that.dropDownAppendTo !== null && !that._minimized) {
            for (let i = 0; i < that._containersInBody.length; i++) {
                that._containersInBody[i].remove();
            }
        }
    }

    /**
     * Changes the parent of a Menu in 'dropDown' mode.
     */
    _reparentMenu(dynamicChange, oldDropDownParent) {
        const that = this;

        if (that.mode !== 'dropDown' ||
            that._dropDownParent === null && !dynamicChange ||
            that._dropDownParent === that.parentElement) {
            return;
        }

        if (!dynamicChange || oldDropDownParent === null) {
            that._positionRelativeTo = that.parentElement;
        }
        else if (that._dropDownParent === null) {
            that._positionRelativeTo.appendChild(that);
            that._positionRelativeTo = null;
            return;
        }

        that._dropDownParent.appendChild(that);
    }

    /**
    * Refreshes the UI Component.
    */
    refresh() {
        const that = this;

        if (that._suppressResizeHandler) {
            delete that._suppressResizeHandler;
            return;
        }

        const minimizeWidth = that.minimizeWidth,
            mode = that.mode;

        if (minimizeWidth !== null && mode !== 'dropDown') {
            if (that.offsetWidth <= minimizeWidth && !that._minimized) {
                that.minimize();
                return;
            }
            else if (that.offsetWidth > minimizeWidth) {
                that.maximize();
            }
        }

        if (that.dropDownAppendTo !== null || mode === 'tree' || that.$mainContainer.hasClass('simple')) {
            that._checkOverflow(that.$.mainContainer, mode === 'horizontal', [that.$.scrollButtonNear, that.$.scrollButtonFar]);
        }
    }
    /**
     * Resize handler.
     */
    _resizeHandler() {
        this.refresh();
    }

    /**
     * Triggers ripple effect.
     */
    _ripple(target, event) {
        const that = this;

        if (that.hasRippleAnimation && event.type === 'click') {
            Smart.Utilities.Animation.Ripple.animate(target, event.pageX, event.pageY);
            return true;
        }
    }

    /**
     * Scrolls using scroll buttons.
     */
    _scroll(scrollButton) {
        if (scrollButton.closest('[template-applied]')) {
            return;
        }

        const that = this,
            mainContainer = that.$.mainContainer,
            mode = that.mode,
            scrollCoefficient = scrollButton.classList.contains('smart-scroll-button-near') ? -1 : 1;
        let parent;

        if (scrollButton.parentElement === that.$.container) {
            parent = mainContainer;

            if (mode !== 'tree') {
                that._closeSubContainers(2);
            }

            if (that.mode === 'horizontal') {
                mainContainer.scrollLeft = mainContainer.scrollLeft + scrollCoefficient * 10;
                that._updateScrollButtonVisibility(mainContainer, true, [that.$.scrollButtonNear, that.$.scrollButtonFar]);
            }
            else {
                mainContainer.scrollTop = mainContainer.scrollTop + scrollCoefficient * 10;
                that._updateScrollButtonVisibility(mainContainer, false, [that.$.scrollButtonNear, that.$.scrollButtonFar]);
            }
        }
        else {
            const container = scrollButton.parentElement,
                itemContainer = container.itemContainer;

            parent = itemContainer;

            that._closeSubContainers(container.level + 1);

            itemContainer.scrollTop = itemContainer.scrollTop + scrollCoefficient * 10;
            that._updateScrollButtonVisibility(itemContainer, false, [container.children[0], container.children[2]]);
        }

        that._scrollInfo.set(parent, { left: parent.scrollLeft, top: parent.scrollTop });
    }

    /**
     * Selection handler.
     */
    _selectionHandler(event, closestItemsGroup) {
        const that = this,
            target = event.target;

        if (target.closest('[template-applied]')) {
            event.stopPropagation();
        }

        if (that.disabled || that.displayLoadingIndicator) {
            return;
        }

        if (closestItemsGroup === undefined) {
            if (event.type === 'click') {
                const closestScrollButton = target.closest('smart-repeat-button');

                if (closestScrollButton) {
                    that._scroll(closestScrollButton, event);
                    return;
                }
            }

            if (!event.isTrusted) {
                return;
            }

            const closestItem = target.closest('smart-' + that._element + '-item');

            if (closestItem) {
                that._menuItemSelectionHandler(closestItem, event);
                return;
            }

            closestItemsGroup = target.closest('smart-' + that._element + '-items-group');

            if (closestItemsGroup && (target === closestItemsGroup.container || target === closestItemsGroup.container.firstElementChild)) {
                return;
            }
        }

        if (closestItemsGroup && !closestItemsGroup.disabled) {
            that._menuItemsGroupSelectionHandler(closestItemsGroup, event);
        }
    }

    /**
     * Sets direction of arrows.
     */
    _setArrowDirection(arrowElement, level) {
        const that = this,
            mode = that.mode;

        if (mode === 'tree' || that._minimized) {
            arrowElement.className = 'smart-' + that._element + '-items-group-arrow down smart-arrow-down';
            return;
        }

        if (that.dropDownPosition.slice(0, 7) !== 'overlay') {
            if (level === 2 && mode === 'horizontal') {
                if (that.dropDownPosition.slice(0, 3) !== 'top') {
                    arrowElement.className = 'smart-menu-items-group-arrow down smart-arrow-down';
                }
                else {
                    arrowElement.className = 'smart-menu-items-group-arrow up smart-arrow-up';
                }
            }
            else {
                arrowElement.className = 'smart-menu-items-group-arrow ' + (that.rightToLeft ? 'left smart-arrow-left' : 'right smart-arrow-right');
            }
        }
        else {
            arrowElement.className = 'smart-menu-items-group-arrow minus';
        }
    }

    /**
     * Sets whether the element can be focused.
     */
    _setFocusable() {
        const that = this;

        if (that.disabled || that.unfocusable) {
            that.removeAttribute('tabindex');
            return;
        }

        const tabindex = that.getAttribute('tabindex');

        if (tabindex === null || tabindex < 0) {
            that.setAttribute('tabindex', 0);
        }
    }

    /**
     * Sets the label of a smart-menu-item/smart-menu-items-group.
     */
    _setItemLabel(item, label) {
        const that = this,
            oldContext = that.context,
            labelElement = item.querySelector('.smart-menu-item-label-element>span');

        that.context = that;

        that._setLabel(label, labelElement, item, true);

        that._checkOverflow(that.$.mainContainer, that.mode === 'horizontal', [that.$.scrollButtonNear, that.$.scrollButtonFar]);

        that.context = oldContext;
    }

    /**
     * Sets the HTML content of an item's label or shortcut.
     */
    _setLabel(label, labelElement, item, labelSet) {
        const potentialHTMLTemplate = document.getElementById(label);

        if (potentialHTMLTemplate !== null && potentialHTMLTemplate.tagName.toLowerCase() === 'template') {
            // label is the id of an HTML template
            const templateContent = document.importNode(potentialHTMLTemplate.content, true);

            if (item instanceof Smart.MenuItem) {
                labelElement.appendChild(templateContent);

                if (labelSet) {
                    item.setAttribute('template-applied', '');
                    item.templateApplied = true;
                }
            }
            else if (Smart.ListMenu && this instanceof Smart.ListMenu) {
                const regex = new RegExp(/{{title="(.*)"}}/);

                for (let i = 0; i < templateContent.childNodes.length; i++) {
                    if (regex.test(templateContent.childNodes[i].innerHTML)) {
                        item.titleLabel = regex.exec(templateContent.childNodes[i].innerHTML)[1];
                        templateContent.childNodes[i].innerHTML = templateContent.childNodes[i].innerHTML.replace(regex, '');
                    }
                    else if (regex.test(templateContent.childNodes[i].textContent)) {
                        item.titleLabel = regex.exec(templateContent.childNodes[i].textContent)[1];
                        templateContent.childNodes[i].textContent = templateContent.childNodes[i].textContent.replace(regex, '');
                    }
                }

                if (item.titleLabel === undefined) {
                    item.titleLabel = templateContent.textContent;
                }

                labelElement.appendChild(templateContent);
            }
            else {
                labelElement.innerHTML = label;
                item.titleLabel = label;
            }
        }
        else {
            labelElement.innerHTML = label;

            if (item instanceof Smart.MenuItemsGroup) {
                item.titleLabel = label;
            }
        }
    }

    /**
     * Toggles an item's checked state.
     */
    _toggleItem(item) {
        const that = this;

        if (that.checkboxes) {
            const parent = item.level === 1 ? that : item.parentItem;

            if (parent.checkable) {
                const itemCheckableInfo = that._getItemCheckableInfo(item, parent);
                let fireItemClick = false;

                if (itemCheckableInfo.checkMode === 'none') {
                    return false;
                }

                if (itemCheckableInfo.checkMode === 'checkbox') {
                    fireItemClick = true;
                    item.set('checked', !item.checked);

                    if (item.checked) {
                        item.setAttribute('aria-checked', true);
                    }
                    else {
                        item.removeAttribute('aria-checked');
                    }

                    that.$.fireEvent('itemCheckChange', { 'item': item, 'label': item.label, 'value': item.value, checked: item.checked });
                }
                else if (itemCheckableInfo.checkMode === 'radioButton' && !item.checked) {
                    fireItemClick = true;
                    item.set('checked', true);
                    item.setAttribute('aria-checked', true);
                    that._uncheckSiblings(item, itemCheckableInfo.siblings);
                    that.$.fireEvent('itemCheckChange', { 'item': item, 'label': item.label, 'value': item.value, checked: true });
                }

                if (item instanceof Smart.MenuItem && fireItemClick) {
                    that.$.fireEvent('itemClick', { 'item': item, 'label': item.label, 'value': item.value });
                }

                if (that.mode !== 'tree' && that.elementName !== 'ListMenu' &&
                    !that.preventCloseOnCheck) {
                    that._close();
                    that.close();
                }

                return true;
            }
        }

        return false;
    }

    /**
     * Gets information about whether an item can be checked and its parent's check mode. Accounts for mixed check modes.
     */
    _getItemCheckableInfo(item, parent) {
        const allSiblings = Array.from(item.parentElement.children),
            parentCheckMode = parent.checkMode.replace(/\s/g, '').split(',');
        let checkMode, siblings;

        if (parentCheckMode.length === 1) {
            checkMode = parentCheckMode[0];
            siblings = allSiblings;
        }
        else {
            let group = 0,
                stop = false;

            siblings = [];

            for (let i = 0; i < allSiblings.length; i++) {
                const currentSibling = allSiblings[i];

                siblings.push(currentSibling);

                if (currentSibling === item) {
                    stop = true;
                }

                if (currentSibling.separator) {
                    if (stop === true) {
                        break;
                    }

                    group++;
                    siblings = [];
                }
            }

            checkMode = parentCheckMode[group];
        }

        return { checkMode: checkMode, siblings: siblings };
    }

    /**
     * Refreshes checkable items.
     */
    _refreshCheckableItems(parent) {
        const that = this,
            noCheckboxes = !that.checkboxes,
            parents = parent ? [parent] : [that].concat(that._containers.map(container => container.menuItemsGroup));

        parents.forEach(parent => {
            const allSiblings = Array.from((parent === that ? that.$.mainContainer : parent.itemContainer).children);
            let parentCheckMode = parent.checkMode.replace(/\s/g, '').split(',');

            if (noCheckboxes || !parent.checkable || parentCheckMode.length === 1) {
                allSiblings.forEach(currentSibling => currentSibling.removeAttribute('check-type'));
                return;
            }

            let group = 0;

            parentCheckMode = parentCheckMode.map(checkMode => {
                if (['checkbox', 'radioButton', 'none'].indexOf(checkMode) === -1) {
                    return 'none';
                }

                return checkMode;
            });

            let radioSiblings = [],
                checkedRadioSiblings = [];

            for (let i = 0; i < allSiblings.length; i++) {
                const currentSibling = allSiblings[i];
                let checkMode = parentCheckMode[group];

                if (checkMode === undefined) {
                    checkMode = parentCheckMode[group] = 'none';
                }

                if (checkMode === 'none' || !that._isChildEnabled(currentSibling)) {
                    currentSibling.checked = false;
                    currentSibling.removeAttribute('aria-checked');
                }

                if (checkMode === 'none') {
                    currentSibling.setAttribute('role', 'menuitem');
                }
                else if (checkMode === 'checkbox') {
                    currentSibling.setAttribute('role', 'menuitemcheckbox');
                }
                else if (checkMode === 'radioButton') {
                    currentSibling.setAttribute('role', 'menuitemradio');
                    radioSiblings.push(currentSibling);

                    if (currentSibling.checked) {
                        checkedRadioSiblings.push(currentSibling);
                    }
                }

                currentSibling.setAttribute('check-type', checkMode);

                if (currentSibling.separator) {
                    if (radioSiblings.length > 0) {
                        if (checkedRadioSiblings.length > 1) {
                            for (let j = 0; j < checkedRadioSiblings.length - 1; j++) {
                                checkedRadioSiblings[j].checked = false;
                            }
                        }
                        else if (checkedRadioSiblings.length === 0) {
                            for (let j = 0; j < radioSiblings.length; j++) {
                                if (that._isChildEnabled(radioSiblings[j])) {
                                    radioSiblings[j].checked = true;
                                    break;
                                }
                            }
                        }
                    }

                    radioSiblings = [];
                    checkedRadioSiblings = [];
                    group++;
                }
            }

            parent.checkMode = parentCheckMode.join(', ');
        });
    }

    /**
     * transitionend handler.
     */
    _transitionendHandler(event) {
        const that = this;

        if (that.mode === 'dropDown' && that.opened && event.target === that && event.propertyName === 'opacity') {
            if (that._checkOverflowOnOpen) {
                that._checkOverflow(that.$.mainContainer, false, [that.$.scrollButtonNear, that.$.scrollButtonFar]);
                delete that._checkOverflowOnOpen;
            }

            if (that.getRootNode().activeElement !== that && !that._noAutoFocus) {
                that.focus();
            }
        }
    }

    /**
     * Collapse animation transitionend handler.
     */
    _transitionendHandlerCollapse() {
        let menu, container;

        if (arguments.length === 1) {
            if (arguments[0].propertyName === 'visibility') {
                return;
            }

            container = this;
            menu = container.menuItemsGroup.menu;
        }
        else {
            menu = arguments[0];
            container = arguments[1];
        }

        container.menuItemsGroup.$.removeClass('smart-' + menu._element + '-items-group-expanded');
        container.menuItemsGroup.setAttribute('aria-expanded', false);
        container.removeEventListener('transitionend', menu._transitionendHandlerCollapse);
        container.style.height = null;
        container.$.addClass('smart-visibility-hidden');
        menu._checkOverflow(menu.$.mainContainer, false, [menu.$.scrollButtonNear, menu.$.scrollButtonFar]);

        if (menu._minimized) {
            menu._browserBoundsDetection(menu.$.mainContainer);
        }

        delete menu._treeAnimationInProgress;
    }

    /**
     * Expand animation transitionend handler.
     */
    _transitionendHandlerExpand() {
        let menu, container;

        if (arguments.length === 1) {
            if (arguments[0].propertyName === 'visibility') {
                return;
            }

            container = this;
            menu = container.menuItemsGroup.menu;
        }
        else {
            menu = arguments[0];
            container = arguments[1];
        }

        container.removeEventListener('transitionend', menu._transitionendHandlerExpand);
        container.style.height = null;
        menu._checkOverflow(menu.$.mainContainer, false, [menu.$.scrollButtonNear, menu.$.scrollButtonFar]);

        if (menu._minimized) {
            menu._browserBoundsDetection(menu.$.mainContainer);
        }

        if (menu._ensureVisibleOnTransitionend) {
            menu._ensureVisible(menu._ensureVisibleOnTransitionend);
            delete menu._ensureVisibleOnTransitionend;
        }

        delete menu._treeAnimationInProgress;
    }

    /**
     * Unchecks siblings (when "checkMode" is 'radioButton').
     */
    _uncheckSiblings(item, siblings) {
        for (let i = 0; i < siblings.length; i++) {
            const currentItem = siblings[i];

            if (currentItem !== item && currentItem.checked) {
                currentItem.set('checked', false);
                currentItem.removeAttribute('aria-checked');
                this.$.fireEvent('itemCheckChange', { 'item': currentItem, 'label': currentItem.label, 'value': currentItem.value, checked: false });
            }
        }
    }

    /**
     * Unsorts items.
     */
    _unsortItems(item, noRecursion) {
        const that = this;
        let itemChildren,
            parent,
            originalOrder = [];

        if (item === that.$.mainContainer) {
            parent = item;
            itemChildren = item.children;
        }
        else {
            parent = item.container.firstElementChild;
            itemChildren = parent.children;
        }

        for (let i = 0; i < itemChildren.length; i++) {
            const currentItem = itemChildren[i];

            originalOrder[currentItem.originalIndex] = currentItem;

            if (currentItem instanceof Smart.MenuItemsGroup && noRecursion === undefined) {
                that._unsortItems(currentItem);
            }
        }

        if (originalOrder.length < 2) {
            return;
        }

        for (let i = 0; i < originalOrder.length; i++) {
            parent.appendChild(originalOrder[i]);
        }
    }

    /**
     * Updates the WAI-ARIA roles of smart-menu-items and smart-menu-items-groups.
     */
    _updateItemRoles(context) {
        const that = this;

        for (let path in that._menuItems) {
            const item = that._menuItems[path],
                parent = item.parentItem || that;

            if (context && parent !== context) {
                continue;
            }

            if (that.checkboxes) {
                if (parent.checkable) {
                    item.setAttribute('role', parent.checkMode === 'checkbox' ? 'menuitemcheckbox' : 'menuitemradio');
                }
                else {
                    item.setAttribute('role', 'menuitem');
                }
            }
            else {
                item.setAttribute('role', 'menuitem');
            }
        }

        that._refreshCheckableItems(context);
    }

    /**
     * Updates scroll button visibility.
     */
    _updateScrollButtonVisibility(element, horizontal, scrollButtons) {
        const that = this,
            overflow = that.overflow,
            mainContainer = element === that.$.mainContainer;

        if (mainContainer && overflow === 'hidden') {
            return;
        }

        let showNear = true,
            showFar = true,
            scrollDirection, dimension, scrollDimension;

        if (horizontal) {
            scrollDirection = 'scrollLeft';
            dimension = 'offsetWidth';
            scrollDimension = 'scrollWidth';
        }
        else {
            scrollDirection = 'scrollTop';
            dimension = 'offsetHeight';
            scrollDimension = 'scrollHeight';
        }

        if (Math.round(element[scrollDirection]) === 0) {
            showNear = false;
        }

        if (Math.round(element[dimension] + element[scrollDirection]) >= Math.round(element[scrollDimension])) {
            showFar = false;
        }

        if (!mainContainer || overflow === 'auto') {
            if (showNear && showFar) {
                scrollButtons[0].$.removeClass('smart-hidden');
                scrollButtons[1].$.removeClass('smart-hidden');
                element.classList.remove('one-button-shown');
                return;
            }

            if (showNear) {
                scrollButtons[0].$.removeClass('smart-hidden');
            }
            else {
                scrollButtons[0].$.addClass('smart-hidden');
            }

            if (showFar) {
                scrollButtons[1].$.removeClass('smart-hidden');
            }
            else {
                scrollButtons[1].$.addClass('smart-hidden');
            }

            element.classList.add('one-button-shown');
        }
        else if (overflow === 'scroll' && !that.disabled) {
            scrollButtons[0].disabled = !showNear;
            scrollButtons[1].disabled = !showFar;
        }
    }

    /**
     * Validates radio button selection.
     */
    _validateRadioButtonSelection(item, level, checkedChildren) {
        const that = this;

        if (that.checkboxes) {
            let parentItem, parentElement;

            if (level === 1) {
                parentItem = that;
                parentElement = that.$.mainContainer;
            }
            else {
                parentItem = item;
                parentElement = item.itemContainer;
            }

            if (parentItem.checkMode === 'radioButton' && parentItem.checkable) {
                if (checkedChildren.length > 1) {
                    for (let i = checkedChildren.length - 2; i >= 0; i--) {
                        checkedChildren[i].set('checked', false);
                        checkedChildren[i].removeAttribute('aria-checked');
                    }
                }
                else if (checkedChildren.length === 0) {
                    const firstEnabledChild = that._getFirstEnabledChild(parentElement);

                    if (firstEnabledChild) {
                        firstEnabledChild.set('checked', true);
                        firstEnabledChild.setAttribute('aria-checked', true);
                    }
                }
            }
        }
    }
});
