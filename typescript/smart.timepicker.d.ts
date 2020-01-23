import  {BaseElement} from "./smart.element"

/**
 Time Picker component allows the user to select time from spinners.
*/
export interface TimePicker extends BaseElement {
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation: "none" | "simple" | "advanced";
  /**
   * Sets or gets whether after selecting hours, the element will automatically switch to minute selection.
   * Default value: false
   */
  autoSwitchToMinutes: boolean;
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled: boolean;
  /**
   * Determines whether the footer section of the element is visible or not.
   * Default value: false
   */
  footer: boolean;
  /**
   * Sets or gets the footer template. The value of this property can be the id of an HTMLTemplateElement or the HTMLTemplateElement itself. If set to null, a default, empty, template is applied.
   * Default value: null
   */
  footerTemplate: string | HTMLTemplateElement;
  /**
   * Determines the hour selection format.
   * Default value: 12-hour
   */
  format: "12-hour" | "24-hour";
  /**
   * Sets or gets the language. Used in conjunction with the property messages. 
   * Default value: "en"
   */
  locale: string;
  /**
   * Callback used to customize the format of the messages that are returned from the Localization Module.
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
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM."
   *   }
   * }
   */
  messages: any;
  /**
   * Sets or gets the step when selecting minutes.
   * Default value: 1
   */
  minuteInterval: number;
  /**
   * Sets or gets the name attribute for the element. Name is used when submiting HTML forms.
   * Default value: ""
   */
  name: string;
  /**
   * Disables user interaction with the element.
   * Default value: false
   */
  readonly: boolean;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft: boolean;
  /**
   * Determines the view that is currently being shown. By default the hours view is visible.
   * Default value: hour
   */
  selection: "hour" | "minute";
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
   * Sets or gets the value of the element. The value can be a valid Date object or a string representing a valid time.
   * Default value: new Date()
   */
  value: any;
  /**
   * Determines whether the element is in landscape or portrait mode.
   * Default value: portrait
   */
  view: "landscape" | "portrait";
  /** 
   * This event is triggered when the value is changed.
   * @param ev. The custom event. Custom data event was created with: ev.detail(oldValue, value)
   *  oldValue - The old value before it was changed presented as a Date object.
   *  value - The new value presented as a Date object.
   */
  onchange: ((this: Window, ev: Event) => any) | null;
  /**
   * Sets the hours.
   * @param {number} hours. The hours to set.
   */
  setHours(hours: number): void;
  /**
   * Sets the minutes.
   * @param {number} minutes. The minutes to set.
   */
  setMinutes(minutes: number): void;
}

declare global {    
    interface Document {
        createElement(tagName: "smart-time-picker"): TimePicker;
    }
}

