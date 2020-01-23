import  {BaseElement} from "./smart.element"

/**
 Tooltip is an alternate for the html title. It displays a popup with details on hover.
*/
export interface Tooltip extends BaseElement {
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation: "none" | "simple" | "advanced";
  /**
   * Gets or sets whether a tooltip's arrow will be shown.
   * Default value: false
   */
  arrow: boolean;
  /**
   * Sets the position of the arrow.
   * Default value: bottom
   */
  arrowDirection: "bottom" | "top" | "left" | "right";
  /**
   * Gets or sets whether a tooltip's arrow will be shown.
   * Default value: 0
   */
  delay: number;
  /**
   * Enables or disables the tooltip.
   * Default value: false
   */
  disabled: boolean;
  /**
   * Sets an offset by X and Y.
   * Default value: 0,0
   */
  offset: number[];
  /**
   * Sets or gets the language. Used in conjunction with the property messages. 
   * Default value: "en"
   */
  locale: string;
  /**
   * Callback, related to localization module. 
   * Default value: null
   */
  localizeFormatFunction: any;
  /**
   * Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property language. 
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
   *     "invalidSelector": "' must be a string, an HTMLElement or null.",
   *     "invalidNode": "."
   *   }
   * }
   */
  messages: any;
  /**
   * Sets or gets the way of triggering the tooltip.
   * Default value: hover
   */
  openMode: "click" | "focus" | "hover" | "manual";
  /**
   * Gets or sets the position of the tooltip.
   * Default value: top
   */
  position: "bottom" | "top" | "left" | "right" | "absolute";
  /**
   * Sets the element which triggers the tooltip.
   * Default value: null
   */
  selector: any;
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme: string;
  /**
   * Sets custom tooltip template.
   * Default value: null
   */
  tooltipTemplate: any;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable: boolean;
  /**
   * Sets or gets the widget's value.
   * Default value: """"
   */
  value: string;
  /**
   * Sets or gets the visibility of the tooltip.
   * Default value: false
   */
  visible: boolean;
  /** 
   * This event is triggered when the tooltip is opened.
   * @param ev. The custom event.    */
  onopen: ((this: Window, ev: Event) => any) | null;
  /** 
   * This event is triggered when the tooltip is closed.
   * @param ev. The custom event.    */
  onclose: ((this: Window, ev: Event) => any) | null;
  /**
   * Closes smart-tooltip. 
   */
  close(): void;
  /**
   * Opens smart-tooltip. 
   */
  open(): void;
  /**
   * Toggles smart-tooltip. 
   */
  toggle(): void;
}

declare global {    
    interface Document {
        createElement(tagName: "smart-tooltip"): Tooltip;
    }
}

