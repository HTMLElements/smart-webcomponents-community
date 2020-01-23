import  {BaseElement} from "./smart.element"

/**
 PowerButton is On/Off rounded button.
*/
export interface PowerButton extends BaseElement {
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation: "none" | "simple" | "advanced";
  /**
   * Sets or gets the check state.
   * Default value: false
   */
  checked: boolean;
  /**
   * Sets the click mode of the button.
   * Default value: release
   */
  clickMode: "hover" | "press" | "release" | "pressAndRelease";
  /**
   * Enables or disables the power button.
   * Default value: false
   */
  disabled: boolean;
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
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM."
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
   * If the custom element is readonly, it cannot be interacted with.
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
   * Sets or gets the widget's value.
   * Default value: """"
   */
  value: string;
  /** 
   * This event is triggered when the widget is checked/unchecked.
   * @param ev. The custom event.    */
  onchange: ((this: Window, ev: Event) => any) | null;
}

declare global {    
    interface Document {
        createElement(tagName: "smart-power-button"): PowerButton;
    }
}

