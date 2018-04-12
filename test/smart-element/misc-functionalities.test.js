var describe,
    it,
    expect,
    document,
    beforeAll,
    afterAll;

window.testFunction = function () { };
window.testItem = { 'test': "" };

describe('Testing additional functionalities of smart.element.js - ', function () {
    let TestElement2;
    jasmine.getFixtures().fixturesPath = 'base/test/smart-element/fixtures';
    jasmine.getFixtures().preload('smart-test-element.htm');
    beforeEach(function () {
        loadFixtures('smart-test-element.htm');
        TestElement2 = document.querySelector('smart-test-element-2');
    });

    describe('isReady', function () {
        it('', function () {
            const dynamicTestElement2 = document.createElement('smart-test-element-2');
            let readyFlag = false,
                completedFlag = false;

            dynamicTestElement2.onReady = function () {
                readyFlag = true;
            }

            dynamicTestElement2.onCompleted = function () {
                completedFlag = true;
            }

            document.body.appendChild(dynamicTestElement2);

            expect(dynamicTestElement2).toBeInDOM();
            expect(dynamicTestElement2.isCreated).toBe(true);
            expect(dynamicTestElement2.isReady).toBe(true);
            expect(readyFlag).toBe(true);
            expect(dynamicTestElement2.isCompleted).toBe(true);
            expect(completedFlag).toBe(true);

            document.body.removeChild(dynamicTestElement2);
        });
    });

    describe('related to a test custom element - ', function () {
        it('is in DOM', function () {
            expect(TestElement2).toBeInDOM();
        });

        it('event binding through template is applied', function () {
            expect(TestElement2.templateListeners).toBeDefined();
            expect(TestElement2.templateListeners['container.click']).toBe('containerClickHandler');
        });

        it('two-way data binding to native element is applied', function () {
            TestElement2.inputPlaceholder = 'Test';

            expect(TestElement2.$.innerInput.placeholder).toBe('Test');

            TestElement2.$.innerInput.placeholder = 'Test 2';

            expect(TestElement2.$.innerInput.placeholder).toBe('Test 2');
        });
    });

    describe('related to modules and classes', function () {
        it('testing "BindingModule"', function () {
            TestElement2.modules[2].clearCache();

            expect(TestElement2.modules[2].cache).toEqual({});
        });

        it('testing "Core" class', function () {
            core = Smart.Utilities.Core;

            const div = document.createElement('div');

            div.innerHTML = 'My div';
            core.html(div, 'New div');

            expect(div.innerHTML).toBe('New div');

            const browser = core.Browser;

            expect(navigator.userAgent.indexOf(browser.version)).not.toBe(-1);
            expect(navigator.userAgent.indexOf('Firefox') !== -1).toBe(!!browser.Firefox);
            expect(navigator.userAgent.indexOf('Chrome') !== -1).toBe(!!browser.Chrome);
        });
    });

    describe('property ', function () {
        it('validator', function () {
            expect(TestElement2.properties).toBeDefined();

            const customValue = TestElement2.properties.customValue;

            expect(customValue).toBeDefined();
            expect(customValue.validator).toBeDefined();

            TestElement2.customValue = 'b';

            expect(TestElement2.customValue).toBe('b');

            TestElement2.customValue = 'b';

            expect(TestElement2.customValue).toBe('b');

            TestElement2.customValue = 'invalid';

            expect(TestElement2.customValue).toBe('a');
        });

        it('observer', function () {
            const customValue = TestElement2.properties.customValue;

            expect(customValue).toBeDefined();
            expect(customValue.observer).toBeDefined();

            spyOn(TestElement2, '_customValueObserver');

            TestElement2.customValue = 'v';

            expect(TestElement2.customValue).toBe('v');

            expect(TestElement2._customValueObserver).toHaveBeenCalled();
        });

        it('-related validations', function () {
            expect(function () {
                TestElement2.numberNoDefault = 'string value';
            }).toThrow();

            TestElement2.booleanDefault = true;

            expect(TestElement2.booleanDefault).toBe(true);
            expect(TestElement2).toHaveAttr('boolean-default');
        });
    });

    describe('methods ', function () {
        it('watch', function () {
            expect(TestElement2._watch).toBeUndefined();

            TestElement2.watch(['customValue'], function () { });

            expect(TestElement2._watch).toBeDefined();
            expect(TestElement2._watch.properties).toBeDefined();
            expect(TestElement2._watch.properties[0]).toBe('customValue');

            TestElement2.watch(null);

            expect(TestElement2._watch).toBeNull();
        });

        it('unwatch', function () {
            expect(TestElement2._watch).toBeUndefined();

            TestElement2.watch(['customValue'], function () { });

            expect(TestElement2._watch).toBeDefined();
            expect(TestElement2._watch.properties).toBeDefined();
            expect(TestElement2._watch.properties[0]).toBe('customValue');

            TestElement2.unwatch();

            expect(TestElement2._watch).toBeNull();
        });

        it('serialize', function () {
            const extendedTestElement2 = TestElement2.$;

            expect(extendedTestElement2.serialize('test')).toBe('test');
            expect(extendedTestElement2.serialize(155, 'number')).toBe('155');
            expect(extendedTestElement2.serialize({ a: 5 }, 'object')).toBe('{"a":5}');
            expect(extendedTestElement2.serialize([], 'array')).toBe('[]');
            expect(extendedTestElement2.serialize('12<3', 'other')).toBeUndefined();
        });

        it('deserialize', function () {
            const extendedTestElement2 = TestElement2.$;

            expect(extendedTestElement2.deserialize('test', 'string')).toBe('test');
            expect(extendedTestElement2.deserialize('155', 'number')).toBe(155);
            expect(extendedTestElement2.deserialize('{"a":5}', 'object')).toEqual({ a: 5 });
            expect(extendedTestElement2.deserialize('[]', 'array')).toEqual([]);
            expect(extendedTestElement2.deserialize('null', 'number', true)).toBeNull();
            expect(isNaN(extendedTestElement2.deserialize('NaN', 'number'))).toBe(true);
            expect(extendedTestElement2.deserialize('Infinity', 'number')).toBe(Infinity);
            expect(isNaN(extendedTestElement2.deserialize('NaN', 'int'))).toBe(true);
            expect(extendedTestElement2.deserialize('Infinity', 'integer')).toBe(Infinity);
            expect(extendedTestElement2.deserialize('testFunction', 'function')).toBe(testFunction);
            expect(extendedTestElement2.deserialize('testItem', 'object')).toEqual(testItem);
            expect(extendedTestElement2.deserialize('12<3', 'other')).toBeUndefined();

            const deserializedDate = extendedTestElement2.deserialize('2016, 2, 5', 'date');

            expect(deserializedDate.getFullYear()).toBe(2016);
            expect(deserializedDate.getMonth()).toBe(1);
            expect(deserializedDate.getDate()).toBe(5);
        });
    });
});
