var describe,
    it,
    expect,
    document,
    beforeAll,
    afterAll;
describe('Testing smart-accordion create-with-script', function () {
    'use strict';
    let accordion;
    beforeAll(function () {
        accordion = document.createElement('smart-accordion');
        accordion.rightToLeft = true;
        document.body.appendChild(accordion);
    });

    afterAll(function () {
        document.body.removeChild(document.querySelector('smart-accordion'));
    });

    describe('if it ', function () {
        it('exists in DOM', function () {
            expect(accordion).toBeInDOM();
        });
    });

    describe('expect default values on empty accordion', function () {
        it('disabled', function () {
            expect(accordion.reorder).toBe(false);
        });
        it('expandedIndexes=[]', function () {
            expect(typeof accordion.expandedIndexes).toBe('object');
            expect(accordion.expandedIndexes.length).toBe(0);
        });
        it('expandMode="singleFitHeight"', function () {
            expect(accordion.expandMode).toBe('singleFitHeight');
        });
        it('readonly', function () {
            expect(accordion.readonly).toBe(false);
        });
        it('reorder', function () {
            expect(accordion.reorder).toBe(false);
        });
    });

    describe(' if it\'s possible to dynamically set the property', function () {
        it('disabled to "true"', function () {
            accordion.disabled = true;
            expect(accordion).toHaveAttr('disabled');
        });
        it('expandedIndexes to [0]', function () {
            accordion.expandedIndexes = [0];

            expect(typeof accordion.expandedIndexes).toBe('object');
            expect(accordion.expandedIndexes.length).toBe(0);
        });
        it('expandMode', function () { 
            const allowedValues = ['single', 'singleFitHeight', 'multiple', 'toggle', 'none'];

            for (let i = 0; i < allowedValues.length; i++) {
                accordion.expandMode = allowedValues[i];
                expect(accordion.expandMode).toBe(allowedValues[i]);
                expect(accordion.getAttribute('expand-mode')).toBe(allowedValues[i]);
            }
        });

        it('reorder to "true"', function () {
            accordion.reorder = true;
            expect(accordion).toHaveAttr('reorder');
        });
    });

    describe('if it\'s possible to dynamically(using setAttribute()) set the property', function () {
        it('disabled to "true"', function () {
            accordion.setAttribute('disabled', '');

            expect(accordion.disabled).toBe(true);
            expect(accordion).toHaveAttr('disabled');
        });
        it('expandedIndexes to [0]', function () {
            accordion.setAttribute('expanded-indexes', '[0]');

            expect(typeof accordion.expandedIndexes).toBe('object');
            expect(accordion.expandedIndexes.length).toBe(0);
        });
        it('expandMode', function () {
            const allowedValues = ['single', 'singleFitHeight', 'multiple', 'toggle', 'none'];

            for (let i = 0; i < allowedValues.length; i++) {
                accordion.setAttribute('expand-mode', allowedValues[i]);

                expect(accordion.expandMode).toBe(allowedValues[i]);
                expect(accordion.getAttribute('expand-mode')).toBe(allowedValues[i]);
            }
        });
        it('reorder to "true"', function () {
            accordion.setAttribute('reorder', '');

            expect(accordion.reorder).toBe(true);
            expect(accordion).toHaveAttr('reorder');
        });
    });
});
