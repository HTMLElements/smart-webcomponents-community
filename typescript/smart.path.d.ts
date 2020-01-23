import  {BaseElement} from "./smart.element"

/**
 Path component is used to display the path to url.
*/
export interface Path extends BaseElement {
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation: "none" | "simple" | "advanced";
  /**
   * Determines the data source for the item that will be displayed inside the drop down.
   * Default value: null
   */
  dataSource: any;
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled: boolean;
  /**
   * Sets or gets the displayMember. The displayMember specifies the name of an object property to display. The name is contained in the collection specified by the 'dataSource' property.
   * Default value: """"
   */
  displayMember: string;
  /**
   * Sets the parent container of the dropDown (the popup). Used when a CSS property of unknown parent is interfering with the visibility of the dropDown.
   * Default value: null
   */
  dropDownAppendTo: any;
  /**
   * Sets the height of the drop down. Default value of empty string means that CSS variables are used. This property should be used when the browser doesn't support CSS variables.
   * Default value: 
   */
  dropDownHeight: string | number;
  /**
   * Sets the max height of the drop down. Default value of empty string means that CSS variables are used. This property should be used when the browser doesn't support CSS variables.
   * Default value: 
   */
  dropDownMaxHeight: string | number;
  /**
   * Sets the max width of the drop down. Default value of empty string means that CSS variables are used. This property should be used when the browser doesn't support CSS variables.
   * Default value: 
   */
  dropDownMaxWidth: string | number;
  /**
   * Sets the min height of the drop down. Default value of empty string means that CSS variables are used. This property should be used when the browser doesn't support CSS variables.
   * Default value: 
   */
  dropDownMinHeight: string | number;
  /**
   * Sets the min width of the drop down. Default value of empty string means that CSS variables are used. This property should be used when the browser doesn't support CSS variables.
   * Default value: 
   */
  dropDownMinWidth: string | number;
  /**
   * If this property is enabled, when the element's dropdown is opened, a transparent overlay is positioned between the dropdown and the rest of the document.
   * Default value: false
   */
  dropDownOverlay: boolean;
  /**
   * Determines the vertical position of the dropDown. 'Auto' means its automatically determined depending on the viewport size.
   * Default value: auto
   */
  dropDownPosition: "auto" | "top" | "bottom" | "overlay-top" | "overlay-center" | "overlay-bottom" | "center-bottom" | "center-top";
  /**
   * Sets the width of the drop down. Default value of empty string means that CSS variables are used. This property should be used when the browser doesn't support CSS variables.
   * Default value: 
   */
  dropDownWidth: string | number;
  /**
   * Sets additional helper text below the element. 
   * Default value: ""
   */
  hint: string;
  /**
   * Sets the element as an indicator.
   * Default value: false
   */
  indicator: boolean;
  /**
   * A getter that returns an array of all Path items.
   * Default value: 
   */
  items: any[];
  /**
   * Sets label above the element. 
   * Default value: ""
   */
  label: string;
  /**
   * Sets or gets the language. Used in conjunction with the property messages. 
   * Default value: "en"
   */
  locale: string;
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
   *     "invalidNode": "."
   *   }
   * }
   */
  messages: any;
  /**
   * The name of the control.
   * Default value: ""
   */
  name: string;
  /**
   * Determines whether the popup is opened or closed
   * Default value: false
   */
  opened: boolean;
  /**
   * Determines the element's placeholder.
   * Default value: ""
   */
  placeholder: string;
  /**
   * Determines the format of the path. Follows specific operation system criteria by changing the drive,folder separators. 
   * Default value: windows
   */
  pathFormat: "windows" | "unix";
  /**
   * Disables user interaction with the element.
   * Default value: false
   */
  readonly: boolean;
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
   * Determines the value member of an item. Stored as value in the item object.
   * Default value: """"
   */
  valueMember: string;
  /**
   * Determines whether or not the element wraps to a new line if overflows. If set the Path can be wrapped on multiple lines. 
   * Default value: false
   */
  wrap: boolean;
  /** 
   * This event is triggered when user clicks on the browse button.
   * @param ev. The custom event.    */
  onbrowsebuttonclick: ((this: Window, ev: Event) => any) | null;
  /** 
   * This event is triggered when the value is changed.
   * @param ev. The custom event.    */
  onchange: ((this: Window, ev: Event) => any) | null;
  /** 
   * This event is triggered when the drop down is closed.
   * @param ev. The custom event.    */
  onclose: ((this: Window, ev: Event) => any) | null;
  /** 
   * This event is triggered when the drop down is closing.
   * @param ev. The custom event.    */
  onclosing: ((this: Window, ev: Event) => any) | null;
  /** 
   * This event is triggered when user clicks on the drop down button.
   * @param ev. The custom event.    */
  ondropdownbuttonclick: ((this: Window, ev: Event) => any) | null;
  /** 
   * This event is triggered when the drop down is opened.
   * @param ev. The custom event.    */
  onopen: ((this: Window, ev: Event) => any) | null;
  /** 
   * This event is triggered when the drop down is opening.
   * @param ev. The custom event.    */
  onopening: ((this: Window, ev: Event) => any) | null;
  /**
   * Closes the dropDown.
   */
  close(): void;
  /**
   * Opens the dropDown.
   */
  open(): void;
  /**
   * Set's the Path element to 'emptyPath' state and changes the value to '////'.
   */
  setToEmptyPath(): void;
  /**
   * Set's the Path element to 'notAPath' state and changes the value to '//'.
   */
  setToNotAPath(): void;
}

declare global {    
    interface Document {
        createElement(tagName: "smart-path"): Path;
    }
}

