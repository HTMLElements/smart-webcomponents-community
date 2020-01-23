import  {BaseElement} from "./smart.element"

/**
 Progress indicators. It can be used to show a user how far along he/she is in a process.
*/
export interface ProgressBar extends BaseElement {
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation: "none" | "simple" | "advanced";
  /**
   * Enables or disables the element. 
   * Default value: false
   */
  disabled: boolean;
  /**
   * Sets the value of the Progress bar to indeterminate state(null) and starts the animation.
   * Default value: false
   */
  indeterminate: boolean;
  /**
   * Sets the filling direction of the Progress Bar.
   * Default value: false
   */
  inverted: boolean;
  /**
   * A callback function defining the new format for the label of the Progress Bar.
   * Default value: null
   */
  formatFunction: any;
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
   * Sets progress bars maximum possible value.
   * Default value: 100
   */
  max: number;
  /**
   * Sets an object with string values, related to the different states of passwords strength.
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
   * Sets progress bars minimum possible value.
   * Default value: 0
   */
  min: number;
  /**
   * Sets the orientation of the progress bar
   * Default value: horizontal
   */
  orientation: "horizontal" | "vertical";
  /**
   * Enables/Disabled the label for the Progress Bar.
   * Default value: false
   */
  showProgressValue: boolean;
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
   * Sets or gets the value of the progress bar
   * Default value: 0
   */
  value: number;
  /** 
   * This event is triggered when the value is changed.
   * @param ev. The custom event.    */
  onchange: ((this: Window, ev: Event) => any) | null;
}

declare global {    
    interface Document {
        createElement(tagName: "smart-progress-bar"): ProgressBar;
    }
}

