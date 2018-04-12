var describe,
    jasmine,
    beforeEach,
    loadFixtures,
    it,
    expect,
    document;
describe('Testing if smart-switch-button loaded from fixture could set content properties', function () {
    'use strict';
    let switchButton;
    jasmine.getFixtures().fixturesPath = 'base/test/smart-switchbutton/fixtures';
    jasmine.getFixtures().preload('smart-switch-button-content-properties-inner-html.htm');
    beforeEach(function () {
        loadFixtures('smart-switch-button-content-properties-inner-html.htm');
        switchButton = document.querySelector('smart-switch-button');
    });
    describe('if it ', function () {
        it('exists in DOM', function () {
            expect(document.querySelector('smart-switch-button')).toBeInDOM();
        });
    });

    describe('if is correctly set', function () {
        it(' trueContent property ', function () {
            expect(switchButton.trueContent).toBe('<span class="smart-true-content">Hello</span>');
        });
        it(' falseContent property ', function () {
            expect(switchButton.falseContent).toBe('<span class="smart-false-content">Bye</span>');
        });
    });

    describe('if is correctly set at the right place the innerHTML of', function () {
        it(' trueContent property ', function () {
            expect(switchButton.$.trueContentContainer.innerHTML).toBe('<span class="smart-true-content">Hello</span>');
        });
        it(' falseContent property ', function () {
            expect(switchButton.$.falseContentContainer.innerHTML).toBe('<span class="smart-false-content">Bye</span>');
        });
    });

    describe('if changes are applied well about', function () {
        it(' trueContent property ', function () {
            switchButton.trueContent = '<span class="smart-true-content">True</span>';
            expect(switchButton.$.trueContentContainer.innerHTML).toBe('<span class="smart-true-content">True</span>');
        });
        it(' falseContent property ', function () {
            switchButton.falseContent = '<span class="smart-false-content">False</span>';
            expect(switchButton.$.falseContentContainer.innerHTML).toBe('<span class="smart-false-content">False</span>');
        });
    });
});
