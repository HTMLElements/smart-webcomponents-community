var describe,
    jasmine,
    beforeEach,
    loadFixtures,
    it,
    expect,
    document;
describe('Testing smartAccordion attributes-synchronization fixture', function () {
    'use strict';
    let accordion;
    jasmine.getFixtures().fixturesPath = 'base/test/smart-accordion/fixtures';
    jasmine.getFixtures().preload('smart-accordion-with-items-attributes-synchronization.htm');
    beforeEach(function () {
        loadFixtures('smart-accordion-with-items-attributes-synchronization.htm');
        accordion = document.querySelector('smart-accordion');
    });
    describe('if it ', function () {
        it('exists in DOM', function () {
            expect(document.querySelector('smart-accordion')).toBeInDOM();
        });
    });

    describe('expect default values on empty accordion', function () {
        it('disabled', function () {
            expect(accordion.reorder).toBe(false);
        });
        it('expandedIndexes=[]', function () {
            expect(typeof accordion.expandedIndexes).toBe('object');
            expect(accordion.expandedIndexes.length).toBe(1);
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
});
