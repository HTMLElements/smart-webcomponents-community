/**
* TestElement custom element. Purely for Testing Purposes !
*/
Smart('smart-test-element', class TestElement extends Smart.BaseElement {
    // Button's properties.
    static get properties() {
        return {
            'property1': {
                type: 'string', //Test with invalid type, expect to throw
                value: '',
                validator: '_validateProperty'
            },
            'property2': { //Test with invalid value, outside of AllowedValues array
                type: 'string',
                value: 'value1',
                allowedValues: ['value1']
            },
            'placeholder': {
                value: '',
                type: 'string'

            }
        };
    }

    /** Button's template. */
    template() {
        return `<div id="container">
                    <input placeholder="{{placeholder}}"/>
                </div>`;
    }

    static get listeners() {
        return {

        };
    }


    /**
* Called when a property is changed.
*/
    propertyChangedHandler(propertyName, oldValue, newValue) {
        super.propertyChangedHandler(propertyName, oldValue, newValue);

        const that = this;

    }

    ready() {
        const that = this;

        super.ready();
        console.log('ready');
    }

    /**
    * Property validator.
    */

    _validateProperty(oldValue, value) {
        //validate property
        let validValue;

        if (value.length > 10) {
            validValue = value.substr(0, 10);
        }

        return validValue;
    }
});