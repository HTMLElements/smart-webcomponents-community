var describe,
    it,
    expect,
    document,
    beforeAll,
    afterAll;

describe('Testing high-precision DateTime object ', function () {
    function createProperty(value) {
        var _value = value;

        function _get() {
            return _value;
        }

        function _set(v) {
            _value = v;
        }

        return {
            "get": _get,
            "set": _set
        };
    };

    function makePropertyWritable(objBase, objScopeName, propName, initValue) {
        var newProp,
            initObj;

        if (objBase && objScopeName in objBase && propName in objBase[objScopeName]) {
            if (typeof initValue === "undefined") {
                initValue = objBase[objScopeName][propName];
            }

            newProp = createProperty(initValue);

            try {
                Object.defineProperty(objBase[objScopeName], propName, newProp);
            } catch (e) {
                initObj = {};
                initObj[propName] = newProp;
                try {
                    objBase[objScopeName] = Object.create(objBase[objScopeName], initObj);
                } catch (e) {

                }
            }
        }
    };

    describe('if it could create new instance of TestElement2', function () {
        it(' if it exists in DOM', function () {
            const testElement = document.createElement('smart-test-scroll');
            document.body.appendChild(testElement);

            testElement.$.horizontalScrollBar.max = 60;
            testElement.$.verticalScrollBar.max = 60;

            makePropertyWritable(window, "navigator", "userAgent");

            const userAgent = window.navigator.userAgent;

            window.navigator.userAgent = "iphone";

            let scrollTest = new Smart.Utilities.Scroll(testElement, testElement.$.horizontalScrollBar, testElement.$.verticalScrollBar);

            expect(scrollTest.scrollWidth).toBe(60);
            expect(scrollTest.scrollHeight).toBe(60);
            expect(scrollTest.scrollLeft).toBe(0);
            expect(scrollTest.scrollTop).toBe(0);


            scrollTest.scrollWidth = 5;
            scrollTest.scrollHeight = 5;
            scrollTest.scrollLeft = 5;
            scrollTest.scrollTop = 5;

            expect(scrollTest.scrollWidth).toBe(5);
            expect(scrollTest.scrollHeight).toBe(5);
            expect(scrollTest.scrollLeft).toBe(5);
            expect(scrollTest.scrollTop).toBe(5);

            expect(scrollTest.vScrollBar).not.toBe(undefined);
            expect(scrollTest.hScrollBar).not.toBe(undefined);

            scrollTest.inputEvents.handlers.down({});
            scrollTest.inputEvents.handlers.move({});
            scrollTest.inputEvents.handlers.up();

            expect(function () {
                scrollTest.scrollTo(3);
                scrollTest.unlisten();
            }).not.toThrow();

            document.body.removeChild(document.querySelector('smart-test-scroll'));
            expect(testElement).not.toBeInDOM();

            window.navigator.userAgent = userAgent;
        });
    });
});
