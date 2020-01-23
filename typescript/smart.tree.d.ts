import  {BaseElement} from "./smart.element"

/**
 Treeview component is a user interface that is used to represent hierarchical data in a tree structure.
*/
export interface Tree extends BaseElement {
  /**
   * Allows drag operation in current tree. When enabled, items can be dragged and dropped to a tree with enabled allowDrop.
   * Default value: false
   */
  allowDrag: boolean;
  /**
   * Allows drop operation. Dropped items could originate from the current tree or another tree.
   * Default value: false
   */
  allowDrop: boolean;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation: "none" | "simple" | "advanced";
  /**
   * Automatically hides the tree's toggle element (arrow) on mouseleave and shows it on mouseenter.
   * Default value: false
   */
  autoHideToggleElement: boolean;
  /**
   * Enables or disables auto load state from the browser's localStorage. Information about filtering, sorting, expanded and selected items is loaded.
   * Default value: false
   */
  autoLoadState: boolean;
  /**
   * Enables or disables auto save state to the browser's localStorage. Information about filtering, sorting, expanded and selected items is saved.
   * Default value: false
   */
  autoSaveState: boolean;
  /**
   * Enables or disables auto sorting. If modifications are made to a sorted tree, but autoSort is false, the tree will not be re-sorted automatically.
   * Default value: true
   */
  autoSort: boolean;
  /**
   * Determines the data source that will be loaded to the Tree.
   * Default value: null
   */
  dataSource: {label: string, selected: boolean, items: []}[];
  /**
   * Enables or disables smartTree.
   * Default value: false
   */
  disabled: boolean;
  /**
   * Shows or hides loading indicator.
   * Default value: false
   */
  displayLoadingIndicator: boolean;
  /**
   * Determines the field in the data source that corresponds to an item's label.
   * Default value: "label"
   */
  displayMember: string;
  /**
   * A callback function for customizing the HTML of the drag feedback. It receives one parameter - an array of the currently dragged items.
   * Default value: null
   */
  dragFeedbackFormatFunction: any;
  /**
   * Determines the offset of the drag feedback element from the mouse cursor when dragging items. The first member of the array is the horizontal offset and the second one - the vertical offset.
   * Default value: 10,10
   */
  dragOffset: number[];
  /**
   * Enables or disables item's editting. An edit operation can be initiated by double-clicking a tree item or pressing F2 while an item is selected.
   * Default value: false
   */
  editable: boolean;
  /**
   * Enables or disables filtering. Shows or hides filter input.
   * Default value: false
   */
  filterable: boolean;
  /**
   * Sets custom text for placeholder in the filter input.
   * Default value: ""
   */
  filterInputPlaceholder: string;
  /**
   * Sets filter mode.
   * Default value: containsIgnoreCase
   */
  filterMode: "contains" | "containsIgnoreCase" | "doesNotContain" | "doesNotContainIgnoreCase" | "equals" | "equalsIgnoreCase" | "startsWith" | "startsWithIgnoreCase" | "endsWith" | "endsWithIgnoreCase";
  /**
   * Sets or gets whether the tree checkboxes have three states - checked, unchecked and indeterminate. Whorks on selectionMode: 'checkBox'
   * Default value: false
   */
  hasThreeStates: boolean;
  /**
   * Determines the field in the data source that corresponds to an item group's subitems collection.
   * Default value: "items"
   */
  itemsMember: string;
  /**
   * Sets custom text for placeholder in the loading indicator if loadingIndicatorPosition is set to 'top' or 'bottom'.
   * Default value: "Loading..."
   */
  loadingIndicatorPlaceholder: string;
  /**
   * Sets the position of the loading indicator.
   * Default value: center
   */
  loadingIndicatorPosition: "bottom" | "center" | "top";
  /**
   * Sets or gets the locale. Used in conjunction with the property messages.
   * Default value: "en"
   */
  locale: string;
  /**
   * Callback, related to localization module. 
   * Default value: null
   */
  localizeFormatFunction: any;
  /**
   * Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.
   * Default value:    * {
   *   "en": {
   *     "propertyUnknownType": "'' property is with undefined 'type' member!",
   *     "propertyInvalidValue": "Invalid '!",
   *     "propertyInvalidValueType": "Invalid '!",
   *     "elementNotInDOM": "Element does not exist in DOM! Please, add the element to the DOM, before invoking a method.",
   *     "moduleUndefined": "Module is undefined.",
   *     "missingReference": ".",
   *     "htmlTemplateNotSuported": ": Browser doesn't support HTMLTemplate elements.",
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM.",
   *     "noId": "smart-tree: Saving and loading the element's state are not available if the element has no id."
   *   }
   * }
   */
  messages: any;
  /**
   * Specifies what should happen with the scrollbar (or scroll buttons in scrollMode: 'scrollButtons') if content overflows the element's box.
   * Default value: auto
   */
  overflow: "auto" | "hidden" | "scroll";
  /**
   * If the element is readonly, users cannot interact with it.
   * Default value: false
   */
  readonly: boolean;
  /**
   * Determines whether the right-to-left support is enabled.
   * Default value: false
   */
  rightToLeft: boolean;
  /**
   * Determines whether to use scrollbar or scrollButtons when content overflows an element's box.
   * Default value: scrollbar
   */
  scrollMode: "scrollbar" | "scrollButtons";
  /**
   * An array with indexes (paths) of the selected items.
   * Default value: 
   */
  selectedIndexes: string[];
  /**
   * Determines the way selected items are highlighted.
   * Default value: row
   */
  selectionDisplayMode: "row" | "label";
  /**
   * Determines selection mode.
   * Default value: one
   */
  selectionMode: "none" | "oneOrManyExtended" | "zeroOrMany" | "oneOrMany" | "zeroOrOne" | "one" | "checkBox" | "radioButton";
  /**
   * Shows or hides lines, displaying the relation between elements in group.
   * Default value: false
   */
  showLines: boolean;
  /**
   * Shows or hides lines starting from the root node. Enabled when 'showLines' is set to true.
   * Default value: false
   */
  showRootLines: boolean;
  /**
   * Sets user-defined function about custom sorting.
   * Default value: null
   */
  sort: any;
  /**
   * Determines sort direction - ascending or descending.
   * Default value: asc
   */
  sortDirection: "ascending" | "descending";
  /**
   * Enables or disables sorting.
   * Default value: false
   */
  sorted: boolean;
  /**
   * Sets or gets the element's visual theme.
   * Default value: ""
   */
  theme: string;
  /**
   * Determines togle element (arrow) position.
   * Default value: near
   */
  toggleElementPosition: "near" | "far";
  /**
   * Determines the way to toggle smart-tree-items-groups.
   * Default value: dblclick
   */
  toggleMode: "click" | "dblclick" | "arrow";
  /**
   * Sets or gets if the element can be focused.
   * Default value: false
   */
  unfocusable: boolean;
  /**
   * Determines the field in the data source that corresponds to an item's value.
   * Default value: "value"
   */
  valueMember: string;
  /** 
   * This event is triggered when selection in smart-tree is changed.
   * @param ev. The custom event. Custom data event was created with: ev.detail(item, oldSelectedIndexes, selectedIndexes)
   *  item - The item the user has interacted with to change the selection (only when applicable).
   *  oldSelectedIndexes - The selected indexes before the selection is changed.
   *  selectedIndexes - The selected indexes after the selection is changed.
   */
  onchange: ((this: Window, ev: Event) => any) | null;
  /** 
   * This event is triggered when a smart-tree-items-group is collapsed.
   * @param ev. The custom event. Custom data event was created with: ev.detail(item, label, path, value, children)
   *  item - the collapsed smart-tree-items-group
   *  label - the label of the collapsed smart-tree-items-group
   *  path - the path of the collapsed smart-tree-items-group
   *  value - the value of the collapsed smart-tree-items-group
   *  children - the children of the collapsed smart-tree-items-group
   */
  oncollapse: ((this: Window, ev: Event) => any) | null;
  /** 
   * This event is triggered when a smart-tree-items-group is about to be collapsed. The collapsing operation can be canceled by calling event.preventDefault() in the event handler function.
   * @param ev. The custom event. Custom data event was created with: ev.detail(item, label, path, value, children)
   *  item - the smart-tree-items-group to be collapsed
   *  label - the label of the smart-tree-items-group to be collapsed
   *  path - the path of the smart-tree-items-group to be collapsed
   *  value - the value of the smart-tree-items-group to be collapsed
   *  children - the children of the smart-tree-items-group to be collapsed
   */
  oncollapsing: ((this: Window, ev: Event) => any) | null;
  /** 
   * This event is triggered when a smart-tree-item/smart-tree-items-group is dropped somewhere in the DOM. The dragging operation can be canceled by calling event.preventDefault() in the event handler function.
   * @param ev. The custom event. Custom data event was created with: ev.detail(container, data, item, items, originalEvent, previousContainer, target)
   *  container - the tree the dragged item(s) is dropped to
   *  data - an object with additional drag details
   *  item - the item that is dragged; if multiple items are dragged, this is the item that has been clicked when initiating the drag operation
   *  items - an array with all dragged items
   *  originalEvent - the original, browser, event that initiates the drop operation
   *  previousContainer - the tree the dragged item(s) is dragged from
   *  target - the element the dragged items are dropped to
   */
  ondragend: ((this: Window, ev: Event) => any) | null;
  /** 
   * This event is triggered when a smart-tree-item/smart-tree-items-group is being dragged.
   * @param ev. The custom event. Custom data event was created with: ev.detail(data, item, items, originalEvent)
   *  data - an object with additional drag details
   *  item - the item that is dragged; if multiple items are dragged, this is the item that has been clicked when initiating the drag operation
   *  items - an array with all dragged items
   *  originalEvent - the original, browser, event that initiates the dragging operation
   */
  ondragging: ((this: Window, ev: Event) => any) | null;
  /** 
   * This event is triggered when a dragging operation is started in smart-tree. The dragging operation can be canceled by calling event.preventDefault() in the event handler function.
   * @param ev. The custom event. Custom data event was created with: ev.detail(container, data, item, items, originalEvent, previousContainer)
   *  container - the tree the dragged item(s) is dragged from
   *  data - an object with additional drag details
   *  item - the item that is dragged; if multiple items are dragged, this is the item that has been clicked when initiating the drag operation
   *  items - an array with all dragged items
   *  originalEvent - the original, browser, event that initiates the drag operation
   *  previousContainer - the tree the dragged item(s) is dragged from
   */
  ondragstart: ((this: Window, ev: Event) => any) | null;
  /** 
   * This event is triggered when a smart-tree-items-group is expanded.
   * @param ev. The custom event. Custom data event was created with: ev.detail(item, label, path, value, children)
   *  item - the expanded smart-tree-items-group
   *  label - the label of the expanded smart-tree-items-group
   *  path - the path of the expanded smart-tree-items-group
   *  value - the value of the expanded smart-tree-items-group
   *  children - the children of the expanded smart-tree-items-group
   */
  onexpand: ((this: Window, ev: Event) => any) | null;
  /** 
   * This event is triggered when a smart-tree-items-group is about to be expanded. The expanding operation can be canceled by calling event.preventDefault() in the event handler function.
   * @param ev. The custom event. Custom data event was created with: ev.detail(item, label, path, value, children)
   *  item - the smart-tree-items-group to be expanded
   *  label - the label of the smart-tree-items-group to be expanded
   *  path - the path of the smart-tree-items-group to be expanded
   *  value - the value of the smart-tree-items-group to be expanded
   *  children - the children of the smart-tree-items-group to be expanded
   */
  onexpanding: ((this: Window, ev: Event) => any) | null;
  /** 
   * This event is triggered when the Tree has been scrolled to the bottom.
   * @param ev. The custom event.    */
  onscrollbottomreached: ((this: Window, ev: Event) => any) | null;
  /** 
   * This event is triggered when the Tree has been scrolled to the top.
   * @param ev. The custom event.    */
  onscrolltopreached: ((this: Window, ev: Event) => any) | null;
  /**
   * Adds an item after another item as a sibling.
   * @param {HTMLElement} item. A smart-tree-item/smart-tree-items-group to add to the Tree
   * @param {string | HTMLElement} sibling. The smart-tree-item/smart-tree-items-group (or its id or numeric path) to add the item after.
   */
  addAfter(item: HTMLElement, sibling: string | HTMLElement): void;
  /**
   * Adds an item before another item as a sibling.
   * @param {HTMLElement} item. A smart-tree-item/smart-tree-items-group to add to the Tree
   * @param {string | HTMLElement} sibling. The smart-tree-item/smart-tree-items-group (or its id or numeric path) to add the item before.
   */
  addBefore(item: HTMLElement, sibling: string | HTMLElement): void;
  /**
   * Adds an item as the last child of a parent item.
   * @param {HTMLElement} item. A smart-tree-item/smart-tree-items-group to add to the Tree
   * @param {string | HTMLElement} parent?. The smart-tree-items-group (or its id or numeric path) to add the item to.
   */
  addTo(item: HTMLElement, parent?: string | HTMLElement): void;
  /**
   * Clears selection.
   */
  clearSelection(): void;
  /**
   * Collapses all smart-tree-items-groups.
   * @param {boolean} animation?. If set to false, disables collapse animation even if animation is enabled for the element.
   */
  collapseAll(animation?: boolean): void;
  /**
   * Collapses a smart-tree-items-group.
   * @param {HTMLElement | string} item. smart-tree-items-group (or its id or numeric path).
   * @param {boolean} animation?. If set to false, disables collapse animation even if animation is enabled for the element.
   */
  collapseItem(item: HTMLElement | string, animation?: boolean): void;
  /**
   * Makes sure an item is visible by scrolling to it.
   * @param {HTMLElement | string} item. The id or numeric path of an item
   */
  ensureVisible(item: HTMLElement | string): void;
  /**
   * Expands all smart-tree-items-groups.
   * @param {string} animation?. If set to false, disables expand animation even if animation is enabled for the element.
   */
  expandAll(animation?: string): void;
  /**
   * Expands single smart-tree-items-group.
   * @param {HTMLElement | string} item. smart-tree-items-group (or its id or numeric path).
   * @param {boolean} animation?. If set to false, disables expand animation even if animation is enabled for the element.
   */
  expandItem(item: HTMLElement | string, animation?: boolean): void;
  /**
   * Applies filter to the Tree.
   * @param {string} filterQuery. Filter query.
   */
  filter(filterQuery: string): void;
  /**
   * Gets an item by its id or numeric path.
   * @param {string} id. The id or numeric path of an item.
   * @returns {any}
   */
  getItem(id: string): any;
  /**
   * Returns smartTree's state
   * @returns {any}
   */
  getState(): any;
  /**
   * Inserts an item at the given position.
   * @param {any} item. A smart-tree-item/smart-tree-items-group (or an Object to create an item from) to add to the Tree. If an Object is passed, the available fields are <strong>tagName</strong> (<em>'smart-tree-item'</em> - default - or <em>'smart-tree-items-group'</em>), <strong>disabled</strong>, <strong>expanded</strong> (only if <strong>tagName</strong> is <em>'smart-tree-items-group'</em>), <strong>(items)</strong> (only if <strong>tagName</strong> is <em>'smart-tree-items-group'</em>), <strong>(label)</strong>, <strong>separator</strong>, <strong>shortcut</strong> (only if <strong>tagName</strong> is <em>'smart-tree-item'</em>), and <strong>(value)</strong>. (items), (label), and (value) have to correspond to the values of <strong>itemsMember</strong>, <strong>displayMember</strong>, and <strong>valueMember</strong> respectively.
   * @param {string} path?. The path to insert the item at.
   */
  insert(item: any, path?: string): void;
  /**
   * Loads the Tree's state.
   * @param {any} state?. An object returned by one of the methods <strong>getState</strong> or <strong>saveState</strong>. If a state is not passed, the method tries to load the state from the browser's localStorage.
   */
  loadState(state?: any): void;
  /**
   * Moves an item down relative to its siblings.
   * @param {HTMLElement | string} item. The smart-tree-item/smart-tree-items-group (or its id or numeric path) to remove.
   */
  moveDown(item: HTMLElement | string): void;
  /**
   * Moves an item up relative to its siblings.
   * @param {HTMLElement | string} item. The smart-tree-item/smart-tree-items-group (or its id or numeric path) to remove.
   */
  moveUp(item: HTMLElement | string): void;
  /**
   * Removes an item.
   * @param {HTMLElement | string} item. The smart-tree-item/smart-tree-items-group (or its id or numeric path) to remove.
   */
  removeItem(item: HTMLElement | string): void;
  /**
   * Saves the Tree's state.
   * @returns {any}
   */
  saveState(): any;
  /**
   * Selects an item.
   * @param {HTMLElement | string} item. The smart-tree-item/smart-tree-items-group (or its id or numeric path) to remove.
   */
  select(item: HTMLElement | string): void;
  /**
   * Unselects an item.
   * @param {HTMLElement | string} item. The smart-tree-item/smart-tree-items-group (or its id or numeric path) to remove.
   */
  unselect(item: HTMLElement | string): void;
  /**
   * Updates an item.
   * @param {HTMLElement | string} item. smart-tree-item/smart-tree-items-group (or its id or numeric path).
   * @param {any} newItem. An object with updated properties.
   */
  updateItem(item: HTMLElement | string, newItem: any): void;
}

declare global {    
    interface Document {
        createElement(tagName: "smart-tree"): Tree;
    }
}

/**
 Defines a tree items.
*/
export interface TreeItem extends BaseElement {
  /**
   * 
   * Default value: true
   */
  checked: boolean;
  /**
   * 
   * Default value: 
   */
  label: any;
  /**
   * 
   * Default value: null
   */
  level: number;
  /**
   * 
   * Default value: true
   */
  separator: boolean;
  /**
   * 
   * Default value: ""
   */
  shortcut: string;
  /**
   * 
   * Default value: null
   */
  value: any;
  /**
   * 
   * Default value: false
   */
  selected: boolean;
}

declare global {    
    interface Document {
        createElement(tagName: "smart-tree-item"): TreeItem;
    }
}

/**
 Defines a group of tree items.
*/
export interface TreeItemsGroup extends BaseElement {
  /**
   * 
   * Default value: false
   */
  selected: boolean;
}

declare global {    
    interface Document {
        createElement(tagName: "smart-tree-items-group"): TreeItemsGroup;
    }
}

