import  {BaseElement} from "./smart.element"

/**
 QueryBuilder allows you to build dynamically queries for filtering.
*/
export interface QueryBuilder extends BaseElement {
  /**
   * Enables the dragging of conditions inside a group or between groups.
   * Default value: false
   */
  allowDrag: boolean;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation: "none" | "simple" | "advanced";
  /**
   * Determines when the value of the element is updated with the new changes.
   * Default value: change
   */
  applyMode: "change" | "immediately";
  /**
   * Adds more operations that can be used to the query bilder's conditions structure. Each custom operation can have the following fields:label - label to be displayed in the operator box. Multiple operations with the same label can exist.name - unique name of the operationeditorTemplate - callback function that creates a custom value editorvalueTemplate - callback function that displays the value after the edior has been closedhandleValue - callback function that handles the value returned by the editor when it is closedhideValue - a boolean condition that specifies whether the operation requires a value or notexpressionTemplate - a string representing a custom Linq expression template. If the value of the element is a string it will be considered as a Linq expression and it will be checked against all expressionTemplates to find a match.expressionReaderCallback - a callback that is used to specify which arguments from the expression are used for the fieldName and value. Used when converting a Linq expression to QueryBuilder value.expressionBuilderCallback - a callback function that is used to specify which arguments from the Linq expression are used for the fieldName and value when building the Linq expression from the current value of the element.
   * Default value: 
   */
  customOperations: {label: string, name: string, hideValue: boolean}[];
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled: boolean;
  /**
   * Sets or gets the dropdown width of the property and operator editors.
   * Default value: "100%"
   */
  dropDownWidth: string;
  /**
   * Array with filter fields and their settings. The available field settings are:label - the field's label, as it will appear in the field selection drop downdataField - the field's data fielddataType - the field's data typefilterOperations - an array of the filter operations applicable to the field; if not set, the default filter operations are appliedlookup - an object with settings for customizing the field's respective value selection input. It has the following settings:autoCompleteDelay - delay between typing in the input and opening the drop down with available optionsdataSource - an array of available options to choose from (appear in a drop down)minLength - minimum number of charactes to type in the input before the options drop down is displayedreadonly - if set to true, the value selection input acts as a drop down list, otherwise it acts as a combo box
   * Default value: null
   */
  fields: any;
  /**
   * Determines whether new fields can be dynamically added by typing in the field (property) box.
   * Default value: dynamic
   */
  fieldsMode: "dynamic" | "static";
  /**
   * Sets or gets the format string of the editor of fields with type 'date'.
   * Default value: "dd-MMM-yy"
   */
  formatStringDate: string;
  /**
   * Sets or gets the format string of the editor of fields with type 'dateTime'.
   * Default value: "dd-MMM-yy HH:mm:ss"
   */
  formatStringDateTime: string;
  /**
   * A callback function called when a field is added dynamically. Used for configuring settings of the new field. Applicable only when fieldsMode is 'dynamic'.
   * Default value: null
   */
  getDynamicField: any;
  /**
   * Defines CSS classes to be applied to each of the built-in operations. Icons for these classes are applied in the smart-query-builder style sheet. This property is applicable only if showIcons is set to true.
   * Default value: { '=': 'equals', '<>': 'notequals', '>': 'greaterthan', '>=': 'greaterthanorequal', '<': 'lessthan', '<=': 'lessthanorequal', 'startswith': 'startswith', 'endswith': 'endswith', 'contains': 'contains', 'notcontains': 'notcontains', 'isblank': 'isblank', 'isnotblank': 'isnotblank' }
   */
  icons: QueryBuilderIcons;
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
   * Defines field names of the filtered element.
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
   *     "addCondition": "Add Condition",
   *     "addGroup": "Add Group",
   *     "and": "And",
   *     "notand": "Not And",
   *     "or": "Or",
   *     "notor": "Not Or",
   *     "=": "Equals",
   *     "<>": "Does not equal",
   *     ">": "Greater than",
   *     ">=": "Greater than or equal to",
   *     "<": "Less than",
   *     "<=": "Less than or equal to",
   *     "startswith": "Starts with",
   *     "endswith": "Ends with",
   *     "contains": "Contains",
   *     "notcontains": "Does not contain",
   *     "isblank": "Is blank",
   *     "isnotblank": "Is not blank",
   *     "wrongParentGroupIndex": "' method.",
   *     "missingFields": ": Fields are required for proper condition's adding. Set \"fields\" source and then conditions will be added as expected.",
   *     "wrongElementNode": "' method.",
   *     "invalidDataStructure": ": Used invalid data structure in updateCondition/updateGroup method."
   *   }
   * }
   */
  messages: any;
  /**
   * Determines the placeholder text used inside the condition's operator box in case an operator is not selected.
   * Default value: "Operator"
   */
  operatorPlaceholder: string;
  /**
   * Determines the placeholder text used inside the condition's field (property) box in case a field is not selected.
   * Default value: "Property"
   */
  propertyPlaceholder: string;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft: boolean;
  /**
   * Shows/Hides the operator icons shown in the operator selection drop down.
   * Default value: false
   */
  showIcons: boolean;
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
   * The value is represented by multidimensional array. The array contains group operators with conditions. Each group can contain multiple conditions.
   * Default value: 
   */
  value: any;
  /**
   * Callback used to format the content of the value fields.
   * Default value: null
   */
  valueFormatFunction: any;
  /**
   * Determines the placeholder text used inside the condition's value box in case a value is not set.
   * Default value: "Value"
   */
  valuePlaceholder: string;
  /** 
   * This event is triggered when the query builder's value is changed.
   * @param ev. The custom event. Custom data event was created with: ev.detail(item, data, originalEvent)
   *  item - The item that is being dragged.
   *  data - The data of the item that is being dragged.
   *  originalEvent - The original event.
   */
  onchange: ((this: Window, ev: Event) => any) | null;
  /** 
   * This event is triggered when a dragged condition is dropped. This action can be canceled by calling event.preventDefault() in the event handler function.
   * @param ev. The custom event. Custom data event was created with: ev.detail(item, data, target, targetData, targetSide)
   *  item - The item that is being dragged.
   *  data - The data of the item that is being dragged.
   *  target - The target item.
   *  targetData - the data of the target item.
   *  targetSide - The side of the target item where the dragged item will be dropped.
   */
  ondragend: ((this: Window, ev: Event) => any) | null;
  /** 
   * This event is triggered when a condition is being dragged.
   * @param ev. The custom event. Custom data event was created with: ev.detail(item, data, originalEvent)
   *  item - The item that is being dragged.
   *  data - The data of the item that is being dragged.
   *  originalEvent - The original event.
   */
  ondragging: ((this: Window, ev: Event) => any) | null;
  /** 
   * This event is triggered when a dragging operation is started in smart-query-builder. This action can be canceled by calling event.preventDefault() in the event handler function.
   * @param ev. The custom event. Custom data event was created with: ev.detail(item, data, originalEvent)
   *  item - The item is going to be dragged.
   *  data - The data of the item that is going to be dragged.
   *  originalEvent - The original event.
   */
  ondragstart: ((this: Window, ev: Event) => any) | null;
  /** 
   * This event is triggered when one of the query builder's building blocks ( oeprator, fieldName, value, close button, etc) is clicked.
   * @param ev. The custom event. Custom data event was created with: ev.detail(id, type, data)
   *  id - The internal id of the clicked item, e.g. '0.1', '1.1', etc.
   *  type - The type of the clicked item ( condition or a group ).
   *  data - The data of the item.
   */
  onitemclick: ((this: Window, ev: Event) => any) | null;
  /** 
   * This event is triggered when a field has been selected.
   * @param ev. The custom event. Custom data event was created with: ev.detail(label, value)
   *  label - The label of the selected property.
   *  value - The value of the selected property.
   */
  onpropertyselected: ((this: Window, ev: Event) => any) | null;
  /**
   * Converts the current value of the element to DynamicLINQ expression.
   */
  getLinq(): void;
}

/**Defines CSS classes to be applied to each of the built-in operations. Icons for these classes are applied in the smart-query-builder style sheet. This property is applicable only if <strong>showIcons</strong> is set to <em>true</em>. */
export interface QueryBuilderIcons {
  /**
   * 
   * Default value: undefined
   */
  0: any;
  /**
   * 
   * Default value: undefined
   */
  1: any;
  /**
   * 
   * Default value: undefined
   */
  2: any;
  /**
   * 
   * Default value: undefined
   */
  3: any;
  /**
   * 
   * Default value: undefined
   */
  4: any;
  /**
   * 
   * Default value: undefined
   */
  5: any;
  /**
   * 
   * Default value: undefined
   */
  6: any;
  /**
   * 
   * Default value: undefined
   */
  7: any;
  /**
   * 
   * Default value: undefined
   */
  8: any;
  /**
   * 
   * Default value: undefined
   */
  9: any;
  /**
   * 
   * Default value: undefined
   */
  10: any;
  /**
   * 
   * Default value: undefined
   */
  11: any;
  /**
   * 
   * Default value: undefined
   */
  12: any;
  /**
   * 
   * Default value: undefined
   */
  13: any;
  /**
   * 
   * Default value: undefined
   */
  14: any;
  /**
   * 
   * Default value: undefined
   */
  15: any;
  /**
   * 
   * Default value: undefined
   */
  16: any;
  /**
   * 
   * Default value: undefined
   */
  17: any;
  /**
   * 
   * Default value: undefined
   */
  18: any;
  /**
   * 
   * Default value: undefined
   */
  19: any;
  /**
   * 
   * Default value: undefined
   */
  20: any;
  /**
   * 
   * Default value: undefined
   */
  21: any;
  /**
   * 
   * Default value: undefined
   */
  22: any;
  /**
   * 
   * Default value: undefined
   */
  23: any;
  /**
   * 
   * Default value: undefined
   */
  24: any;
  /**
   * 
   * Default value: undefined
   */
  25: any;
  /**
   * 
   * Default value: undefined
   */
  26: any;
  /**
   * 
   * Default value: undefined
   */
  27: any;
  /**
   * 
   * Default value: undefined
   */
  28: any;
  /**
   * 
   * Default value: undefined
   */
  29: any;
  /**
   * 
   * Default value: undefined
   */
  30: any;
  /**
   * 
   * Default value: undefined
   */
  31: any;
  /**
   * 
   * Default value: undefined
   */
  32: any;
  /**
   * 
   * Default value: undefined
   */
  33: any;
  /**
   * 
   * Default value: undefined
   */
  34: any;
  /**
   * 
   * Default value: undefined
   */
  35: any;
  /**
   * 
   * Default value: undefined
   */
  36: any;
  /**
   * 
   * Default value: undefined
   */
  37: any;
  /**
   * 
   * Default value: undefined
   */
  38: any;
  /**
   * 
   * Default value: undefined
   */
  39: any;
  /**
   * 
   * Default value: undefined
   */
  40: any;
  /**
   * 
   * Default value: undefined
   */
  41: any;
  /**
   * 
   * Default value: undefined
   */
  42: any;
  /**
   * 
   * Default value: undefined
   */
  43: any;
  /**
   * 
   * Default value: undefined
   */
  44: any;
  /**
   * 
   * Default value: undefined
   */
  45: any;
  /**
   * 
   * Default value: undefined
   */
  46: any;
  /**
   * 
   * Default value: undefined
   */
  47: any;
  /**
   * 
   * Default value: undefined
   */
  48: any;
  /**
   * 
   * Default value: undefined
   */
  49: any;
  /**
   * 
   * Default value: undefined
   */
  50: any;
  /**
   * 
   * Default value: undefined
   */
  51: any;
  /**
   * 
   * Default value: undefined
   */
  52: any;
  /**
   * 
   * Default value: undefined
   */
  53: any;
  /**
   * 
   * Default value: undefined
   */
  54: any;
  /**
   * 
   * Default value: undefined
   */
  55: any;
  /**
   * 
   * Default value: undefined
   */
  56: any;
  /**
   * 
   * Default value: undefined
   */
  57: any;
  /**
   * 
   * Default value: undefined
   */
  58: any;
  /**
   * 
   * Default value: undefined
   */
  59: any;
  /**
   * 
   * Default value: undefined
   */
  60: any;
  /**
   * 
   * Default value: undefined
   */
  61: any;
  /**
   * 
   * Default value: undefined
   */
  62: any;
  /**
   * 
   * Default value: undefined
   */
  63: any;
  /**
   * 
   * Default value: undefined
   */
  64: any;
  /**
   * 
   * Default value: undefined
   */
  65: any;
  /**
   * 
   * Default value: undefined
   */
  66: any;
  /**
   * 
   * Default value: undefined
   */
  67: any;
  /**
   * 
   * Default value: undefined
   */
  68: any;
  /**
   * 
   * Default value: undefined
   */
  69: any;
  /**
   * 
   * Default value: undefined
   */
  70: any;
  /**
   * 
   * Default value: undefined
   */
  71: any;
  /**
   * 
   * Default value: undefined
   */
  72: any;
  /**
   * 
   * Default value: undefined
   */
  73: any;
  /**
   * 
   * Default value: undefined
   */
  74: any;
  /**
   * 
   * Default value: undefined
   */
  75: any;
  /**
   * 
   * Default value: undefined
   */
  76: any;
  /**
   * 
   * Default value: undefined
   */
  77: any;
  /**
   * 
   * Default value: undefined
   */
  78: any;
  /**
   * 
   * Default value: undefined
   */
  79: any;
  /**
   * 
   * Default value: undefined
   */
  80: any;
  /**
   * 
   * Default value: undefined
   */
  81: any;
  /**
   * 
   * Default value: undefined
   */
  82: any;
  /**
   * 
   * Default value: undefined
   */
  83: any;
  /**
   * 
   * Default value: undefined
   */
  84: any;
  /**
   * 
   * Default value: undefined
   */
  85: any;
  /**
   * 
   * Default value: undefined
   */
  86: any;
  /**
   * 
   * Default value: undefined
   */
  87: any;
  /**
   * 
   * Default value: undefined
   */
  88: any;
  /**
   * 
   * Default value: undefined
   */
  89: any;
  /**
   * 
   * Default value: undefined
   */
  90: any;
  /**
   * 
   * Default value: undefined
   */
  91: any;
  /**
   * 
   * Default value: undefined
   */
  92: any;
  /**
   * 
   * Default value: undefined
   */
  93: any;
  /**
   * 
   * Default value: undefined
   */
  94: any;
  /**
   * 
   * Default value: undefined
   */
  95: any;
  /**
   * 
   * Default value: undefined
   */
  96: any;
  /**
   * 
   * Default value: undefined
   */
  97: any;
  /**
   * 
   * Default value: undefined
   */
  98: any;
  /**
   * 
   * Default value: undefined
   */
  99: any;
  /**
   * 
   * Default value: undefined
   */
  100: any;
  /**
   * 
   * Default value: undefined
   */
  101: any;
  /**
   * 
   * Default value: undefined
   */
  102: any;
  /**
   * 
   * Default value: undefined
   */
  103: any;
  /**
   * 
   * Default value: undefined
   */
  104: any;
  /**
   * 
   * Default value: undefined
   */
  105: any;
  /**
   * 
   * Default value: undefined
   */
  106: any;
  /**
   * 
   * Default value: undefined
   */
  107: any;
  /**
   * 
   * Default value: undefined
   */
  108: any;
  /**
   * 
   * Default value: undefined
   */
  109: any;
  /**
   * 
   * Default value: undefined
   */
  110: any;
  /**
   * 
   * Default value: undefined
   */
  111: any;
  /**
   * 
   * Default value: undefined
   */
  112: any;
  /**
   * 
   * Default value: undefined
   */
  113: any;
  /**
   * 
   * Default value: undefined
   */
  114: any;
  /**
   * 
   * Default value: undefined
   */
  115: any;
  /**
   * 
   * Default value: undefined
   */
  116: any;
  /**
   * 
   * Default value: undefined
   */
  117: any;
  /**
   * 
   * Default value: undefined
   */
  118: any;
  /**
   * 
   * Default value: undefined
   */
  119: any;
  /**
   * 
   * Default value: undefined
   */
  120: any;
  /**
   * 
   * Default value: undefined
   */
  121: any;
  /**
   * 
   * Default value: undefined
   */
  122: any;
  /**
   * 
   * Default value: undefined
   */
  123: any;
  /**
   * 
   * Default value: undefined
   */
  124: any;
  /**
   * 
   * Default value: undefined
   */
  125: any;
  /**
   * 
   * Default value: undefined
   */
  126: any;
  /**
   * 
   * Default value: undefined
   */
  127: any;
  /**
   * 
   * Default value: undefined
   */
  128: any;
  /**
   * 
   * Default value: undefined
   */
  129: any;
  /**
   * 
   * Default value: undefined
   */
  130: any;
  /**
   * 
   * Default value: undefined
   */
  131: any;
  /**
   * 
   * Default value: undefined
   */
  132: any;
  /**
   * 
   * Default value: undefined
   */
  133: any;
  /**
   * 
   * Default value: undefined
   */
  134: any;
  /**
   * 
   * Default value: undefined
   */
  135: any;
  /**
   * 
   * Default value: undefined
   */
  136: any;
  /**
   * 
   * Default value: undefined
   */
  137: any;
  /**
   * 
   * Default value: undefined
   */
  138: any;
  /**
   * 
   * Default value: undefined
   */
  139: any;
  /**
   * 
   * Default value: undefined
   */
  140: any;
  /**
   * 
   * Default value: undefined
   */
  141: any;
  /**
   * 
   * Default value: undefined
   */
  142: any;
  /**
   * 
   * Default value: undefined
   */
  143: any;
  /**
   * 
   * Default value: undefined
   */
  144: any;
  /**
   * 
   * Default value: undefined
   */
  145: any;
  /**
   * 
   * Default value: undefined
   */
  146: any;
  /**
   * 
   * Default value: undefined
   */
  147: any;
  /**
   * 
   * Default value: undefined
   */
  148: any;
  /**
   * 
   * Default value: undefined
   */
  149: any;
  /**
   * 
   * Default value: undefined
   */
  150: any;
  /**
   * 
   * Default value: undefined
   */
  151: any;
  /**
   * 
   * Default value: undefined
   */
  152: any;
  /**
   * 
   * Default value: undefined
   */
  153: any;
  /**
   * 
   * Default value: undefined
   */
  154: any;
  /**
   * 
   * Default value: undefined
   */
  155: any;
  /**
   * 
   * Default value: undefined
   */
  156: any;
  /**
   * 
   * Default value: undefined
   */
  157: any;
  /**
   * 
   * Default value: undefined
   */
  158: any;
  /**
   * 
   * Default value: undefined
   */
  159: any;
  /**
   * 
   * Default value: undefined
   */
  160: any;
  /**
   * 
   * Default value: undefined
   */
  161: any;
  /**
   * 
   * Default value: undefined
   */
  162: any;
  /**
   * 
   * Default value: undefined
   */
  163: any;
  /**
   * 
   * Default value: undefined
   */
  164: any;
  /**
   * 
   * Default value: undefined
   */
  165: any;
  /**
   * 
   * Default value: undefined
   */
  166: any;
  /**
   * 
   * Default value: undefined
   */
  167: any;
  /**
   * 
   * Default value: undefined
   */
  168: any;
  /**
   * 
   * Default value: undefined
   */
  169: any;
  /**
   * 
   * Default value: undefined
   */
  170: any;
  /**
   * 
   * Default value: undefined
   */
  171: any;
  /**
   * 
   * Default value: undefined
   */
  172: any;
  /**
   * 
   * Default value: undefined
   */
  173: any;
  /**
   * 
   * Default value: undefined
   */
  174: any;
  /**
   * 
   * Default value: undefined
   */
  175: any;
  /**
   * 
   * Default value: undefined
   */
  176: any;
  /**
   * 
   * Default value: undefined
   */
  177: any;
  /**
   * 
   * Default value: undefined
   */
  178: any;
  /**
   * 
   * Default value: undefined
   */
  179: any;
  /**
   * 
   * Default value: undefined
   */
  180: any;
  /**
   * 
   * Default value: undefined
   */
  181: any;
  /**
   * 
   * Default value: undefined
   */
  182: any;
  /**
   * 
   * Default value: undefined
   */
  183: any;
  /**
   * 
   * Default value: undefined
   */
  184: any;
  /**
   * 
   * Default value: undefined
   */
  185: any;
  /**
   * 
   * Default value: undefined
   */
  186: any;
  /**
   * 
   * Default value: undefined
   */
  187: any;
  /**
   * 
   * Default value: undefined
   */
  188: any;
  /**
   * 
   * Default value: undefined
   */
  189: any;
  /**
   * 
   * Default value: undefined
   */
  190: any;
  /**
   * 
   * Default value: undefined
   */
  191: any;
  /**
   * 
   * Default value: undefined
   */
  192: any;
  /**
   * 
   * Default value: undefined
   */
  193: any;
  /**
   * 
   * Default value: undefined
   */
  194: any;
  /**
   * 
   * Default value: undefined
   */
  195: any;
  /**
   * 
   * Default value: undefined
   */
  196: any;
  /**
   * 
   * Default value: undefined
   */
  197: any;
  /**
   * 
   * Default value: undefined
   */
  198: any;
  /**
   * 
   * Default value: undefined
   */
  199: any;
  /**
   * 
   * Default value: undefined
   */
  200: any;
  /**
   * 
   * Default value: undefined
   */
  201: any;
  /**
   * 
   * Default value: undefined
   */
  202: any;
  /**
   * 
   * Default value: undefined
   */
  203: any;
  /**
   * 
   * Default value: undefined
   */
  204: any;
  /**
   * 
   * Default value: undefined
   */
  205: any;
  /**
   * 
   * Default value: undefined
   */
  206: any;
  /**
   * 
   * Default value: undefined
   */
  207: any;
  /**
   * 
   * Default value: undefined
   */
  208: any;
  /**
   * 
   * Default value: undefined
   */
  209: any;
  /**
   * 
   * Default value: undefined
   */
  210: any;
  /**
   * 
   * Default value: undefined
   */
  211: any;
  /**
   * 
   * Default value: undefined
   */
  212: any;
  /**
   * 
   * Default value: undefined
   */
  213: any;
  /**
   * 
   * Default value: undefined
   */
  214: any;
  /**
   * 
   * Default value: undefined
   */
  215: any;
  /**
   * 
   * Default value: undefined
   */
  216: any;
  /**
   * 
   * Default value: undefined
   */
  217: any;
  /**
   * 
   * Default value: undefined
   */
  218: any;
  /**
   * 
   * Default value: undefined
   */
  219: any;
  /**
   * 
   * Default value: undefined
   */
  220: any;
  /**
   * 
   * Default value: undefined
   */
  221: any;
  /**
   * 
   * Default value: undefined
   */
  222: any;
  /**
   * 
   * Default value: undefined
   */
  223: any;
  /**
   * 
   * Default value: undefined
   */
  224: any;
  /**
   * 
   * Default value: undefined
   */
  225: any;
  /**
   * 
   * Default value: undefined
   */
  226: any;
  /**
   * 
   * Default value: undefined
   */
  227: any;
  /**
   * 
   * Default value: undefined
   */
  228: any;
  /**
   * 
   * Default value: undefined
   */
  229: any;
  /**
   * 
   * Default value: undefined
   */
  230: any;
  /**
   * 
   * Default value: undefined
   */
  231: any;
  /**
   * 
   * Default value: undefined
   */
  232: any;
  /**
   * 
   * Default value: undefined
   */
  233: any;
  /**
   * 
   * Default value: undefined
   */
  234: any;
  /**
   * 
   * Default value: undefined
   */
  235: any;
  /**
   * 
   * Default value: undefined
   */
  236: any;
  /**
   * 
   * Default value: undefined
   */
  237: any;
  /**
   * 
   * Default value: undefined
   */
  238: any;
  /**
   * 
   * Default value: undefined
   */
  239: any;
  /**
   * 
   * Default value: undefined
   */
  240: any;
  /**
   * 
   * Default value: undefined
   */
  241: any;
  /**
   * 
   * Default value: undefined
   */
  242: any;
  /**
   * 
   * Default value: undefined
   */
  243: any;
  /**
   * 
   * Default value: undefined
   */
  244: any;
  /**
   * 
   * Default value: undefined
   */
  245: any;
  /**
   * 
   * Default value: undefined
   */
  246: any;
  /**
   * 
   * Default value: undefined
   */
  247: any;
  /**
   * 
   * Default value: undefined
   */
  248: any;
  /**
   * 
   * Default value: undefined
   */
  249: any;
  /**
   * 
   * Default value: undefined
   */
  250: any;
  /**
   * 
   * Default value: undefined
   */
  251: any;
  /**
   * 
   * Default value: undefined
   */
  252: any;
  /**
   * 
   * Default value: undefined
   */
  253: any;
  /**
   * 
   * Default value: undefined
   */
  254: any;
  /**
   * 
   * Default value: undefined
   */
  255: any;
  /**
   * 
   * Default value: undefined
   */
  256: any;
  /**
   * 
   * Default value: undefined
   */
  257: any;
  /**
   * 
   * Default value: undefined
   */
  258: any;
  /**
   * 
   * Default value: undefined
   */
  259: any;
  /**
   * 
   * Default value: undefined
   */
  260: any;
  /**
   * 
   * Default value: undefined
   */
  261: any;
  /**
   * 
   * Default value: undefined
   */
  262: any;
  /**
   * 
   * Default value: undefined
   */
  263: any;
  /**
   * 
   * Default value: undefined
   */
  264: any;
  /**
   * 
   * Default value: undefined
   */
  265: any;
  /**
   * 
   * Default value: undefined
   */
  266: any;
  /**
   * 
   * Default value: undefined
   */
  267: any;
  /**
   * 
   * Default value: undefined
   */
  268: any;
  /**
   * 
   * Default value: undefined
   */
  269: any;
  /**
   * 
   * Default value: undefined
   */
  270: any;
  /**
   * 
   * Default value: undefined
   */
  271: any;
  /**
   * 
   * Default value: undefined
   */
  272: any;
  /**
   * 
   * Default value: undefined
   */
  273: any;
  /**
   * 
   * Default value: undefined
   */
  274: any;
  /**
   * 
   * Default value: undefined
   */
  275: any;
  /**
   * 
   * Default value: undefined
   */
  276: any;
  /**
   * 
   * Default value: undefined
   */
  277: any;
  /**
   * 
   * Default value: undefined
   */
  278: any;
  /**
   * 
   * Default value: undefined
   */
  279: any;
  /**
   * 
   * Default value: undefined
   */
  280: any;
  /**
   * 
   * Default value: undefined
   */
  281: any;
}

declare global {    
    interface Document {
        createElement(tagName: "smart-query-builder"): QueryBuilder;
    }
}

