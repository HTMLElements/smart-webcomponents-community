/**
* TestElement custom element. Purely for Testing Purposes !
*/
Smart('smart-test-scroll', class TestScroll extends Smart.BaseElement {
    // TestElement's properties.
    static get properties() {
        return {

        };
    }

    /** TestElement's template. */
    template() {
        return `<div id="container">
                <smart-scroll-bar id="verticalScrollBar" orientation="vertical"></smart-scroll-bar>
                <smart-scroll-bar id="horizontalScrollBar"></smart-scroll-bar>
            </div>`;
    }

    /**
    * Called when a property is changed.
    */
    propertyChangedHandler(propertyName, oldValue, newValue) {
        super.propertyChangedHandler(propertyName, oldValue, newValue);
    }

    ready() {
        super.ready();
    }  
});
