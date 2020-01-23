import  {BaseElement} from "./smart.element"

/**
 Defines a tab item.
*/
export interface TabItem extends BaseElement {
  /**
   * 
   * Default value: false
   */
  closeButtonHidden: boolean;
  /**
   * 
   * Default value: null
   */
  index: number;
  /**
   * 
   * Default value: false
   */
  selected: boolean;
  /**
   * 
   * Default value: ""
   */
  label: string;
  /**
   * 
   * Default value: null
   */
  labelSize: number;
}

declare global {    
    interface Document {
        createElement(tagName: "smart-tab-item"): TabItem;
    }
}

/**
 Defines a group of tab items.
*/
export interface TabItemsGroup extends BaseElement {
  /**
   * 
   * Default value: ""
   */
  label: string;
  /**
   * 
   * Default value: null
   */
  labelSize: number;
}

declare global {    
    interface Document {
        createElement(tagName: "smart-tab-items-group"): TabItemsGroup;
    }
}

/**
 Tabs organize content across different screens, data sets, and other interactions. Tabs can be paired with components like top app bars. Tabs can be displayed horizontally or vertically.
*/
export interface Tabs extends BaseElement {
  /**
   * Sets or gets whether the "Add new tab" button (+) is displayed.
   * Default value: false
   */
  addNewTab: boolean;
  /**
   * Allows toggle. If set to true, **selectedIndex** can be set to null (no selected tab).
   * Default value: false
   */
  allowToggle: boolean;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation: "none" | "simple" | "advanced";
  /**
   * Sets or gets the close button mode.
   * Default value: default
   */
  closeButtonMode: "default" | "selected";
  /**
   * Sets or gets whether close buttons are displayed.
   * Default value: false
   */
  closeButtons: boolean;
  /**
   * Sets or gets whether the Tabs content section is collapsed.
   * Default value: false
   */
  collapsed: boolean;
  /**
   * Enables or disables the collapsible feature.
   * Default value: false
   */
  collapsible: boolean;
  /**
   * Determines the data source that will be loaded to the Tabs.
   * Default value: null
   */
  dataSource: {label: string, content: string}[];
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled: boolean;
  /**
   * Enables or disables scrolling using the mouse wheel through overflowing tab labels in the tab strip. 
   * Default value: false
   */
  enableMouseWheelAction: boolean;
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
   *     "ambiguousIndexes": "smart-tabs: Initially set smart-tab-item indexes are ambiguous and are ignored in favour of the HTML structure.",
   *     "detailsObjectRequired": "smart-tabs: The method \"insert\" requires a details Object to be passed as a second argument.",
   *     "invalidIndex": "smart-tabs: '' method accepts an index of type number.",
   *     "referenceNodeNotChild": "smart-tabs: Passed  is not part of this smart-tabs element.",
   *     "tabItemRequired": "smart-tabs: The method '' requires a \"smart-tab-item\" element to be passed as an argument."
   *   }
   * }
   */
  messages: any;
  /**
   * Sets or gets the widget's name.
   * Default value: """"
   */
  name: string;
  /**
   * Sets or gets the Tabs scroll buttons behavior. Applicable only when tabLayout is 'scroll'.
   * Default value: auto
   */
  overflow: "auto" | "hidden" | "scroll";
  /**
   * Disables user interaction with the element.
   * Default value: false
   */
  readonly: boolean;
  /**
   * Enables or disables the reorder feature. When this feature is enabled, the end-user can drag a tab and drop it over another tab. As a result the tabs will be reordered.
   * Default value: false
   */
  reorder: boolean;
  /**
   * Sets or gets whether tab labels can be resized by dragging with the mouse.
   * Default value: false
   */
  resize: boolean;
  /**
   * Sets or gets the position of the scroll buttons.
   * Default value: both
   */
  scrollButtonsPosition: "near" | "far" | "both";
  /**
   * Sets or gets the behavior when scrolling the tab strip via the scroll buttons.
   * Default value: paging
   */
  scrollMode: "paging" | "continuous";
  /**
   * Sets or gets which tab is selected.
   * Default value: null
   */
  selectedIndex: number | null;
  /**
   * Determines the way the user can switch between tabs.
   * Default value: click
   */
  selectionMode: "click" | "dblclick" | "mouseenter" | "none";
  /**
   * Applies one of four behaviors when the element is not wide enough to display all tab labels.
   * Default value: scroll
   */
  tabLayout: "scroll" | "dropDown" | "wrap" | "shrink";
  /**
   * Sets or gets where the tab strip is positioned.
   * Default value: top
   */
  tabPosition: "top" | "bottom" | "left" | "right" | "hidden";
  /**
   * Sets or gets the orientation of the text in the tabs.
   * Default value: horizontal
   */
  tabTextOrientation: "horizontal" | "vertical";
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme: string;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable: boolean;
  /** 
   * This event is triggered when the tab selection is changed.
   * @param ev. The custom event.    */
  onchange: ((this: Window, ev: Event) => any) | null;
  /** 
   * This event is triggered when a tab is closed.
   * @param ev. The custom event.    */
  onclose: ((this: Window, ev: Event) => any) | null;
  /** 
   * This event is triggered when a tab is about to be closed. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
   * @param ev. The custom event.    */
  onclosing: ((this: Window, ev: Event) => any) | null;
  /** 
   * This event is triggered when a drag operation has ended.
   * @param ev. The custom event.    */
  ondragend: ((this: Window, ev: Event) => any) | null;
  /** 
   * This event is triggered when a drag operation has started.
   * @param ev. The custom event.    */
  ondragstart: ((this: Window, ev: Event) => any) | null;
  /** 
   * This event is triggered when tabs have been reordered.
   * @param ev. The custom event.    */
  onreorder: ((this: Window, ev: Event) => any) | null;
  /**
   * Collapses the content section.
   */
  collapse(): void;
  /**
   * Makes sure a tab is visible by scrolling to it.
   * @param {number} index. The index of the tab to scroll to.
   */
  ensureVisible(index: number): void;
  /**
   * Expands the content section.
   */
  expand(): void;
  /**
   * Returns the offset of the tab item container (smart-tab-item element) from the edge of the Tabs (smart-tabs element) where the tab strip is positioned.
   * @param {number} index. The index of the tab item.
   * @returns {number}
   */
  getOffsetFromEdgeOfElement(index: number): number;
  /**
   * Inserts a new tab and an associated content section.
   * @param {number} index. The index to insert a new tab at.
   * @param {any} details. An Object with the fields "label", "labelSize", "content" and "group".
   */
  insert(index: number, details: any): void;
  /**
   * Refreshes the Tabs header section. Useful when the header contains elements (such as images) loaded slower than the Tabs itself.
   */
  refreshTabHeader(): void;
  /**
   * Removes a tab and its associated content section.
   * @param {number} index. The index of the tab to remove.
   */
  removeAt(index: number): void;
  /**
   * Selects a tab.
   * @param {number} index. The index of the tab to select.
   */
  select(index: number): void;
  /**
   * Updates a tab and its associated content section.
   * @param {number} index. The index of the tab to update.
   * @param {string} label. The new label of the tab. The value can be the id of an HTMLTemplateElement
   * @param {string | HTMLElement} content. The new content of the tab.
   */
  update(index: number, label: string, content: string | HTMLElement): void;
}

declare global {    
    interface Document {
        createElement(tagName: "smart-tabs"): Tabs;
    }
}

