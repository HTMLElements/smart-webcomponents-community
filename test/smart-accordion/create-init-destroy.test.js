var describe,
    it,
    expect,
    document,
    beforeAll,
    afterAll;

describe('Testing smart-accordion, created via script and dynamicaly changed it\'s properties', function () {
    'use strict';

    function createAccordion(items) {
        const accordion = document.createElement('smart-accordion');

        for (let i = 0; i < items; i++) {
            const item = document.createElement('smart-accordion-item');

            item.label = 'Item ' + i;
            item.content = 'Content ' + i;

            accordion.appendChild(item);
        }

        document.body.appendChild(accordion);
        expect(accordion).toBeInDOM();

        return accordion;
    }

    function removeAccordion(accordion) {
        document.body.removeChild(document.querySelector('smart-accordion'));
        expect(accordion).not.toBeInDOM();
    }

    function checkPropertyChange(accordion, property, inputValue, outputValue) {
        function toDash(value) {
            return value.split(/(?=[A-Z])/).join('-').toLowerCase();
        }

        const attribute = toDash(property);

        for (var i = 0; i < inputValue.length; i++) {
            accordion[property] = inputValue[i];
            expect(accordion[property]).toEqual(outputValue[i]);

            switch(outputValue[i]) {
                case true:
                    expect(accordion.getAttribute(attribute)).toBe('');
                    break;
                case false:
                    expect(accordion.getAttribute(attribute)).toBe(null);
                    break;
                default:
                    if (Array.isArray(outputValue[i]) && outputValue[i].length === 0) {
                        expect(accordion.getAttribute(attribute)).toBe(null)
                        break;
                    }

                    expect(accordion.getAttribute(attribute)).toEqual(outputValue[i]);
                    break;
            }
        }
    }

    describe('if dynamicaly created empty accordion', function () {
        it('exists in DOM', function () {
            let accordion = document.createElement('smart-accordion');
            document.body.appendChild(accordion);
            expect(accordion).toBeInDOM();

            document.body.removeChild(document.querySelector('smart-accordion'));
            expect(accordion).not.toBeInDOM();
        });

        it('can set dynamically the "disabled"', function () {
            const accordion = createAccordion(0),
                inputValue = [true, false],
                expectedValues = [true, false];

            expect(accordion.disabled).toBe(false);
            checkPropertyChange(accordion, 'disabled', inputValue, expectedValues);

            removeAccordion(accordion);
        });

        it('can set dynamically the "expandedIndexes" property', function () {
            const accordion = createAccordion(0),
                inputValue = [[0], [0, 2, 5]],
                expectedValues = [[], []];

            expect(accordion.expandedIndexes).toEqual([]);
            checkPropertyChange(accordion, 'expandedIndexes', inputValue, expectedValues);

            removeAccordion(accordion);
        });

        it('can set dynamically the "expandMode" property', function () {
            const accordion = createAccordion(0),
                inputValue = ['single', 'multiple', 'toggle', 'none'],
                expectedValues = ['single', 'multiple', 'toggle', 'none'];

            expect(accordion.expandMode).toBe('singleFitHeight');
            checkPropertyChange(accordion, 'expandMode', inputValue, expectedValues);

            accordion.insert(0, { "label": "Item 0", "content": "Content 0" });
            checkPropertyChange(accordion, 'expandMode', inputValue, expectedValues);

            accordion._supportCSSVariables = false;
            accordion.insert(0, { "label": "Item 0", "content": "Content 0" });
            checkPropertyChange(accordion, 'expandMode', inputValue, expectedValues);

            removeAccordion(accordion);
        });

        it('can set dynamically the "expandMode" property in accordion with multiple items', function () {
            const accordion = createAccordion(5);

            accordion.expandMode = 'multiple';
            accordion.expandedIndexes = [];
            accordion.expandMode = 'single';
            expect(accordion.expandedIndexes).toEqual([0]);

            accordion.expandMode = 'toggle';
            accordion.expandedIndexes = [];
            accordion.expandMode = 'single';
            expect(accordion.expandedIndexes).toEqual([0]);

            accordion._supportCSSVariables = false;
            accordion.expandMode = 'multiple';
            accordion.expandedIndexes = [];
            accordion.expandMode = 'single';
            expect(accordion.expandedIndexes).toEqual([0]);

            accordion.expandMode = 'toggle';
            accordion.expandedIndexes = [];
            accordion.expandMode = 'single';
            expect(accordion.expandedIndexes).toEqual([0]);

            removeAccordion(accordion);
        });

        it('can set dynamically the "readonly" property', function () {
            const accordion = createAccordion(0),
                inputValue = [true, false],
                expectedValues = [true, false];

            expect(accordion.readonly).toBe(false);
            checkPropertyChange(accordion, 'readonly', inputValue, expectedValues);

            removeAccordion(accordion);
        });

        it('can set dynamically the "reorder" property', function () {
            const accordion = createAccordion(0),
                inputValue = [true, false],
                expectedValues = [true, false];

            expect(accordion.reorder).toBe(false);
            checkPropertyChange(accordion, 'reorder', inputValue, expectedValues);

            removeAccordion(accordion);
        });
    });
});
