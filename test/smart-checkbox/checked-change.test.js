var describe,
    jasmine,
    beforeEach,
    loadFixtures,
    it,
    expect,
    document;
describe('Testing changing the checked state of a smart-check-box', function () {
    'use strict';
    let checkbox, checkboxInput, checkboxLabel;

    jasmine.getFixtures().fixturesPath = 'base/test/smart-checkbox/fixtures';
    jasmine.getFixtures().preload('smart-check-box-with-label.htm');
    beforeEach(function () {
        loadFixtures('smart-check-box-with-label.htm');
        checkbox = document.querySelector('smart-check-box');
        checkboxInput = checkbox.querySelector('.smart-input');
        checkboxLabel = checkbox.querySelector('.smart-label');
    });

    describe('when "enableContainerClick" is disabled', function () {
        it('and when "clickMode" is "press"', function () {
            expect(checkbox.checked).toBe(false);

            checkbox.clickMode = 'press';

            checkbox._downHandler({ originalEvent: { target: checkboxLabel } });
            checkbox._documentUpHandler({ target: checkboxLabel, preventDefault: function () { }, stopPropagation: function () { } });

            expect(checkbox.checked).toBe(false);

            checkbox._downHandler({ originalEvent: { target: checkboxInput } });
            checkbox._documentUpHandler({ target: checkboxInput, preventDefault: function () { }, stopPropagation: function () { } });

            expect(checkbox.checked).toBe(true);
        });

        it('and when "clickMode" is "pressAndRelease"', function () {
            expect(checkbox.checked).toBe(false);

            checkbox.clickMode = 'pressAndRelease';

            checkbox._downHandler({ originalEvent: { target: checkboxLabel } });

            expect(checkbox.checked).toBe(false);

            checkbox._documentUpHandler({ target: checkboxLabel, preventDefault: function () { }, stopPropagation: function () { } });

            expect(checkbox.checked).toBe(false);

            checkbox._downHandler({ originalEvent: { target: checkboxInput } });

            expect(checkbox.checked).toBe(true);

            checkbox._documentUpHandler({ target: checkboxInput, preventDefault: function () { }, stopPropagation: function () { } });

            expect(checkbox.checked).toBe(false);
        });

        it('and when "clickMode" is "release"', function () {
            expect(checkbox.checked).toBe(false);

            checkbox.clickMode = 'release';

            checkbox._downHandler({ originalEvent: { target: checkboxLabel } });

            expect(checkbox.checked).toBe(false);

            checkbox._documentUpHandler({ target: checkboxLabel, preventDefault: function () { }, stopPropagation: function () { } });

            expect(checkbox.checked).toBe(false);

            checkbox._downHandler({ originalEvent: { target: checkboxInput } });

            expect(checkbox.checked).toBe(false);

            checkbox._documentUpHandler({ target: checkboxInput, preventDefault: function () { }, stopPropagation: function () { } });

            expect(checkbox.checked).toBe(true);
        });
    });

    describe('when "enableContainerClick" is enabled', function () {
        it('and when "clickMode" is "press"', function () {
            expect(checkbox.checked).toBe(false);

            checkbox.clickMode = 'press';
            checkbox.enableContainerClick = true;

            checkbox._downHandler({ originalEvent: { target: checkboxLabel } });
            checkbox._documentUpHandler({ target: checkboxLabel, preventDefault: function () { }, stopPropagation: function () { } });

            expect(checkbox.checked).toBe(true);

            checkbox._downHandler({ originalEvent: { target: checkboxInput } });
            checkbox._documentUpHandler({ target: checkboxInput, preventDefault: function () { }, stopPropagation: function () { } });

            expect(checkbox.checked).toBe(false);
        });

        it('and when "clickMode" is "pressAndRelease"', function () {
            expect(checkbox.checked).toBe(false);

            checkbox.clickMode = 'pressAndRelease';
            checkbox.enableContainerClick = true;

            checkbox._downHandler({ originalEvent: { target: checkboxLabel } });

            expect(checkbox.checked).toBe(true);

            checkbox._documentUpHandler({ target: checkboxLabel, preventDefault: function () { }, stopPropagation: function () { } });

            expect(checkbox.checked).toBe(false);

            checkbox._downHandler({ originalEvent: { target: checkboxInput } });

            expect(checkbox.checked).toBe(true);

            checkbox._documentUpHandler({ target: checkboxInput, preventDefault: function () { }, stopPropagation: function () { } });

            expect(checkbox.checked).toBe(false);
        });

        it('and when "clickMode" is "release"', function () {
            expect(checkbox.checked).toBe(false);

            checkbox.clickMode = 'release';
            checkbox.enableContainerClick = true;

            checkbox._downHandler({ originalEvent: { target: checkboxLabel } });

            expect(checkbox.checked).toBe(false);

            checkbox._documentUpHandler({ target: checkboxLabel, preventDefault: function () { }, stopPropagation: function () { } });

            expect(checkbox.checked).toBe(true);

            checkbox._downHandler({ originalEvent: { target: checkboxInput } });

            expect(checkbox.checked).toBe(true);

            checkbox._documentUpHandler({ target: checkboxInput, preventDefault: function () { }, stopPropagation: function () { } });

            expect(checkbox.checked).toBe(false);
        });
    });
});
