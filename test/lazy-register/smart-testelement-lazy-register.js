/**
* TestElement custom element. Purely for Testing Purposes !
*/
Smart('smart-test-element-3', class TestElement3 extends Smart.BaseElement {
    // TestElement's properties.
    static get properties() {
        return {
            'arrayNoDefault': { // array start
                type: 'array'
            },
            'arrayDefault': {
                value: [],
                type: 'array'
            },
            'arrayNoDefaultNoReflectToAttribute': {
                type: 'array',
                reflectToAttribute: false
            },
            'arrayNoReflectToAttribute': {
                value: [1, 2, 3, 4, 5],
                type: 'array',
                reflectToAttribute: false
            },
            'booleanNoDefault': { // boolean start
                type: 'boolean'
            },
            'booleanDefault': {
                value: false,
                type: 'boolean'
            },
            'booleanNoDefaultNoReflectToAttribute': {
                type: 'boolean',
                reflectToAttribute: false
            },
            'booleanNoReflectToAttribute': {
                value: false,
                type: 'boolean',
                reflectToAttribute: false
            },
            'booleanNullNoDefault': { // nullable boolean start
                type: 'boolean?'
            },
            'booleanNullDefault': {
                value: null,
                type: 'boolean?'
            },
            'booleanNullNoDefaultNoReflectToAttribute': {
                type: 'boolean?',
                reflectToAttribute: false
            },
            'booleanNullNoReflectToAttribute': {
                value: null,
                type: 'boolean?',
                reflectToAttribute: false
            },
            'dateNoDefault': { // date start
                type: 'date'
            },
            'dateDefault': {
                value: new Date(2017, 1, 1),
                type: 'date'
            },
            'dateNoDefaultNoReflectToAttribute': {
                type: 'boolean',
                reflectToAttribute: new Date(2017, 1, 1),
            },
            'dateNoReflectToAttribute': {
                value: new Date(2017, 1, 1),
                type: 'date',
                reflectToAttribute: false
            },
            'numberNoDefault': { // number start
                type: 'number'
            },
            'numberDefault': {
                value: 5,
                type: 'number'
            },
            'numberDefault0': {
                value: 0,
                type: 'number'
            },
            'numberNoDefaultNoReflectToAttribute': {
                type: 'number',
                reflectToAttribute: false
            },
            'numberNoReflectToAttribute': {
                value: 5,
                type: 'number',
                reflectToAttribute: false
            },
            'objectNoDefault': { // object start
                type: 'object'
            },
            'objectDefault': {
                value: {},
                type: 'object'
            },
            'objectNoDefaultNoReflectToAttribute': {
                type: 'object',
                reflectToAttribute: false
            },
            'objectNoReflectToAttribute': {
                value: { a: 'a', b: 'b' },
                type: 'object',
                reflectToAttribute: false
            },
            'stringNoDefault': { // string start
                type: 'string'
            },
            'stringDefault': {
                value: '',
                type: 'string'
            },
            'stringAllowedValues': {
                value: '',
                type: 'string',
                allowedValues: ['', 'value', 'loooooooooooooooooooooooooooooooooooooooooooooooooongValue', 'CAPITALIZEDVALUE', '0123656789']
            },
            'stringNoDefaultNoReflectToAttribute': {
                type: 'string',
                reflectToAttribute: false
            },
            'stringNoReflectToAttribute': {
                value: '',
                type: 'string',
                reflectToAttribute: false
            },
            'stringAllowedValuesNoreflectToAttribute': {
                value: '',
                type: 'string',
                allowedValues: ['', 'value', 'looooooooooooooooooooooooooooooooooooooooooooooooooooongValue', 'CAPITALIZEDVALUE', '0123656789'],
                reflectToAttribute: false
            },
            'stringNullNoDefault': { // nullable string start
                type: 'string?'
            },
            'stringNullDefault': {
                value: '',
                type: 'string?'
            },
            'stringNullAllowedValues': {
                value: '',
                type: 'string?',
                allowedValues: ['', 'value', 'loooooooooooooooooooooooooooooooooooooooooooooooooongValue', 'CAPITALIZEDVALUE', '0123656789']
            },
            'stringNullNoDefaultNoReflectToAttribute': {
                type: 'string?',
                reflectToAttribute: false
            },
            'stringNullNoReflectToAttribute': {
                value: '',
                type: 'string?',
                reflectToAttribute: false
            },
            'stringNullAllowedValuesNoreflectToAttribute': {
                value: '',
                type: 'string?',
                allowedValues: ['', 'value', 'looooooooooooooooooooooooooooooooooooooooooooooooooooongValue', 'CAPITALIZEDVALUE', '0123656789'],
                reflectToAttribute: false
            },
            'inputPlaceholder': {
                value: '',
                type: 'string'
            }
        };
    }

    /** TestElement's template. */
    template() {
        return `<div id="container" (click)="containerClickHandler">
                    <input id="innerInput" placeholder="{{inputPlaceholder}}" value="{{::change}}" />
                </div>`;
    }

    static get listeners() {
        return {
            'mouseenter': '_itemOnMouseEnter',
            'mouseleave': '_itemOnMouseLeave',
            'mousemove': '_itemOnMouseMove'
        };
    }

    /**
    * Called when a property is changed.
    */
    propertyChangedHandler(propertyName, oldValue, newValue) {
        super.propertyChangedHandler(propertyName, oldValue, newValue);
    }

    ready() {
        super.ready();

        //this.ownerElement = document.body;
    }

    containerClickHandler() {

    }
});
