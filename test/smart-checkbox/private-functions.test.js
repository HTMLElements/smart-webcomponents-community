var describe,
    it,
    expect,
    document,
    beforeAll,
    afterAll;

describe('Testing smart-check-box private functions', function () {
    'use strict';

    describe('if it created dynamicaly', function () {
        it('exists in DOM', function () {
            let checkbox = document.createElement('smart-check-box');
            document.body.appendChild(checkbox);
            expect(checkbox).toBeInDOM();

            document.body.removeChild(document.querySelector('smart-check-box'));
            expect(checkbox).not.toBeInDOM();
        });
    });

    describe('testing the document up handler', function () {
        it('in switchMode="click" after click to change the state from null to true', function () {
            let checkbox = document.createElement('smart-check-box'),
                e = { stopPropagation: function () { }, preventDefault: function () { }, target: checkbox.$.checkboxLabel };

            document.body.appendChild(checkbox);

            checkbox.clickMode = 'press';
            checkbox._mouseDownHandler(e);
            checkbox._documentUpHandler(e);
            expect(checkbox.clickMode).toEqual('press');

            checkbox.clickMode = 'release';
            checkbox._mouseDownHandler(e);
            checkbox._documentUpHandler(e);
            expect(checkbox.clickMode).toEqual('release');

            document.body.removeChild(document.querySelector('smart-check-box'));
            expect(checkbox).not.toBeInDOM();
        });
    });
});
