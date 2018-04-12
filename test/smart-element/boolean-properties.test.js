var describe,
    it,
    expect,
    document,
    beforeAll,
    afterAll;

describe('Testing TestElement2, properties validation', function () {
    'use strict';
    function createElement(properties, attributes) {
        const testElement = document.createElement('smart-test-element-2');

        if (properties) {
            if (attributes) {
                for (let i = 0; i < properties; i++) {
                    testElement.setAttribute(properties.i.property, '' + properties.i.value);
                }
            }
            else {
                for (let i = 0; i < properties; i++) {
                    testElement[properties.i.property] = properties.i.value;
                }
            }
        }

        document.body.appendChild(testElement);
        expect(testElement).toBeInDOM();

        return testElement;
    }

    function removeElement(testElement) {
        document.body.removeChild(document.querySelector('smart-test-element-2'));
        expect(testElement).not.toBeInDOM();
    }

    describe('if it could create new instance of TestElement2', function () {
        it(' if it exists in DOM', function () {
            let testElement = document.createElement('smart-test-element-2');
            document.body.appendChild(testElement);

            expect(document.querySelector('smart-test-element-2')).toBeInDOM();

            document.body.removeChild(document.querySelector('smart-test-element-2'));
            expect(testElement).not.toBeInDOM();
        });
    });

    describe('testing the behavior of boolean properties after update with valid values', function () {
        describe(' via property change: ', function () {
            function testBoolean(testElement, booleanProperty) {
                const booleanAttribute = booleanProperty.split(/(?=[A-Z])/).join('-').toLowerCase();

                testElement[booleanProperty] = true;
                expect(testElement[booleanProperty]).toBe(true);
                booleanProperty.indexOf('ReflectToAttribute') === -1 ? expect(testElement.getAttribute(booleanAttribute)).toBe('') : expect(testElement.getAttribute(booleanAttribute)).toBe(null);

                testElement[booleanProperty] = false;
                expect(testElement[booleanProperty]).toBe(false);
                expect(testElement.getAttribute(booleanAttribute)).toBe(null);
            }

                it(' boolean without default value', function () {
                    const testElement = createElement();

                    expect(testElement.getAttribute('boolean-no-default')).toBe(null);
                    testBoolean(testElement, 'booleanNoDefault');

                    removeElement(testElement);
                });

                it(' boolean with default value', function () {
                    const testElement = createElement();

                    expect(testElement.getAttribute('boolean-default')).toBe(null);
                    testBoolean(testElement, 'booleanDefault');

                    removeElement(testElement);
                });

               it(' boolean without default value, reflectToAttribute: false', function () {
                    const testElement = createElement();

                    expect(testElement.getAttribute('boolean-no-default-reflect-to-attribute')).toBe(null);
                    testBoolean(testElement, 'booleanNoDefaultNoReflectToAttribute');

                    removeElement(testElement);
                });

                it(' boolean with default value, reflectToAttribute: false', function () {
                    const testElement = createElement();

                    expect(testElement.getAttribute('boolean-no-reflect-to-attribute')).toBe(null);
                    testBoolean(testElement, 'booleanNoReflectToAttribute'); 

                    removeElement(testElement);
                });
        });

        describe(' via attribute change: ', function () {
            describe(' via property change: ', function () {
                function testBoolean(testElement, booleanProperty) {
                    const booleanAttribute = booleanProperty.split(/(?=[A-Z])/).join('-').toLowerCase();

                    testElement.setAttribute(booleanAttribute, '');
                    expect(testElement[booleanProperty]).toBe(true);
                    expect(testElement.getAttribute(booleanAttribute)).toBe('');

                    testElement.removeAttribute(booleanAttribute);
                    expect(testElement[booleanProperty]).toBe(false);
                    expect(testElement.getAttribute(booleanAttribute)).toBe(null);
                }


                it(' boolean without default value', function () {
                    const testElement = createElement();

                    testBoolean(testElement, 'booleanNoDefault');
                    removeElement(testElement);
                });

                it(' boolean with default value', function () {
                    const testElement = createElement();

                    testBoolean(testElement, 'booleanDefault');
                    removeElement(testElement);
                });

                it(' boolean without default value, reflectToAttribute: false', function () {
                    const testElement = createElement();

                    testBoolean(testElement, 'booleanNoDefaultNoReflectToAttribute');
                    removeElement(testElement);
                });

                it(' boolean with default value, reflectToAttribute: false', function () {
                    const testElement = createElement();

                    testBoolean(testElement, 'booleanNoReflectToAttribute');
                    removeElement(testElement);
                });
            });
        });
    });

    describe('testing the behavior of boolean properties after update with invalid values', function () {
        describe(' via property change: ', function () {
            function testBoolean(testElement, booleanProperty) {
                const booleanAttribute = booleanProperty.split(/(?=[A-Z])/).join('-').toLowerCase(),
                    inCorrectTestValues = ['ab', 5, 'true', 'false', '{a:5}', '[1,2,3,4,5]', 'ooooooooooooooo', null];

                for (let i = 0; i < inCorrectTestValues.length; i++) {
                    expect(function () { testElement[booleanProperty] = inCorrectTestValues[i]; console.log(inCorrectTestValues[i] + ' passes; - ' + booleanProperty + ' is ' + testElement[booleanProperty]) }).toThrow();
                }
            }

            it(' boolean without default value', function () {
                const testElement = createElement();

                testBoolean(testElement, 'booleanNoDefault');
                removeElement(testElement);
            });

            it(' boolean with default value', function () {
                const testElement = createElement();

                testBoolean(testElement, 'booleanDefault');
                removeElement(testElement);
            });

            it(' boolean without default value, reflectToAttribute: false', function () {
                const testElement = createElement();

                testBoolean(testElement, 'booleanNoDefaultNoReflectToAttribute');
                removeElement(testElement);
            });

            it(' boolean with default value, reflectToAttribute: false', function () {
                const testElement = createElement();

                testBoolean(testElement, 'booleanNoReflectToAttribute');
                removeElement(testElement);
            });
        });

    });

    describe('testing the behavior of nullable boolean properties after update with valid values', function () {
        describe(' via property change: ', function () {
            function testBoolean(testElement, booleanProperty) {
                const booleanAttribute = booleanProperty.split(/(?=[A-Z])/).join('-').toLowerCase();

                testElement[booleanProperty] = true;
                expect(testElement[booleanProperty]).toBe(true);
                booleanProperty.indexOf('ReflectToAttribute') === -1 ? expect(testElement.getAttribute(booleanAttribute)).toBe('') : expect(testElement.getAttribute(booleanAttribute)).toBe(null);

                testElement[booleanProperty] = false;
                expect(testElement[booleanProperty]).toBe(false);
                expect(testElement.getAttribute(booleanAttribute)).toBe(null);
            }

            it(' boolean without default value', function () {
                const testElement = createElement();

                expect(testElement.getAttribute('boolean-null-no-default')).toBe(null);
                testBoolean(testElement, 'booleanNullNoDefault');

                removeElement(testElement);
            });

            it(' boolean with default value', function () {
                const testElement = createElement();

                expect(testElement.getAttribute('boolean-null-default')).toBe(null);
                testBoolean(testElement, 'booleanNullDefault');

                removeElement(testElement);
            });

            it(' boolean without default value, reflectToAttribute: false', function () {
                const testElement = createElement();

                expect(testElement.getAttribute('boolean-null-no-default-reflect-to-attribute')).toBe(null);
                testBoolean(testElement, 'booleanNullNoDefaultNoReflectToAttribute');

                removeElement(testElement);
            });

            it(' boolean with default value, reflectToAttribute: false', function () {
                const testElement = createElement();

                expect(testElement.getAttribute('boolean-null-no-reflect-to-attribute')).toBe(null);
                testBoolean(testElement, 'booleanNullNoReflectToAttribute');

                removeElement(testElement);
            });
        });

        describe(' via attribute change: ', function () {
            describe(' via property change: ', function () {
                function testBoolean(testElement, booleanProperty) {
                    const booleanAttribute = booleanProperty.split(/(?=[A-Z])/).join('-').toLowerCase();

                    testElement.setAttribute(booleanAttribute, '');
                    expect(testElement[booleanProperty]).toBe(true);
                    expect(testElement.getAttribute(booleanAttribute)).toBe('');

                    testElement.removeAttribute(booleanAttribute);
                    expect(testElement[booleanProperty]).toBe(false);
                    expect(testElement.getAttribute(booleanAttribute)).toBe(null);
                }

                it(' boolean without default value', function () {
                    const testElement = createElement();

                    testBoolean(testElement, 'booleanNullNoDefault');
                    removeElement(testElement);
                });

                it(' boolean with default value', function () {
                    const testElement = createElement();

                    testBoolean(testElement, 'booleanNullDefault');
                    removeElement(testElement);
                });

                it(' boolean without default value, reflectToAttribute: false', function () {
                    const testElement = createElement();

                    testBoolean(testElement, 'booleanNullNoDefaultNoReflectToAttribute');
                    removeElement(testElement);
                });

                it(' boolean with default value, reflectToAttribute: false', function () {
                    const testElement = createElement();

                    testBoolean(testElement, 'booleanNullNoReflectToAttribute');
                    removeElement(testElement);
                });
            });
        });
    });

    describe('testing the behavior of nullable boolean properties after update with invalid values', function () {
        describe(' via property change: ', function () {
            function testBoolean(testElement, booleanProperty) {
                const booleanAttribute = booleanProperty.split(/(?=[A-Z])/).join('-').toLowerCase(),
                    inCorrectTestValues = ['ab', 5, 'true', 'false', '{a:5}', '[1,2,3,4,5]', 'ooooooooooooooo'];

                for (let i = 0; i < inCorrectTestValues.length; i++) {
                    expect(function () { testElement[booleanProperty] = inCorrectTestValues[i]; console.log(inCorrectTestValues[i] + ' passes; - ' + booleanProperty + ' is ' + testElement[booleanProperty]) }).toThrow();
                }
            }

            it(' boolean without default value', function () {
                const testElement = createElement();

                testBoolean(testElement, 'booleanNullNoDefault');
                removeElement(testElement);
            });

            it(' boolean with default value', function () {
                const testElement = createElement();

                testBoolean(testElement, 'booleanNullDefault');
                removeElement(testElement);
            });

            it(' boolean without default value, reflectToAttribute: false', function () {
                const testElement = createElement();

                testBoolean(testElement, 'booleanNullNoDefaultNoReflectToAttribute');
                removeElement(testElement);
            });

            it(' boolean with default value, reflectToAttribute: false', function () {
                const testElement = createElement();

                testBoolean(testElement, 'booleanNullNoReflectToAttribute');
                removeElement(testElement);
            });
        });
    });
});
