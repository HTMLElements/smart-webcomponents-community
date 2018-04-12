var describe,
    it,
    expect,
    document,
    beforeAll,
    afterAll;

describe('Testing smart-radio-button, created via script and dynamicaly changed it\'s properties', function () {
    'use strict';

    describe('if it created dynamicaly', function () {
        it('exists in DOM', function () {
            let toggleButton = document.createElement('smart-toggle-button');
            document.body.appendChild(toggleButton);
            expect(toggleButton).toBeInDOM();

            document.body.removeChild(document.querySelector('smart-toggle-button'));
            expect(toggleButton).not.toBeInDOM();
        });
    });

    describe('testing the event handlers', function () {
        it('when some properties are changed', function () {
            let toggleButton = document.createElement('smart-toggle-button');
            document.body.appendChild(toggleButton);
            let e = {};
            e.keyCode = 32;
            toggleButton.clickMode = 'press';
            toggleButton.checked = true;
            toggleButton._keyUpHandler(e);
            e.preventDefault = function () { };
            toggleButton._dragStartHandler(e);
            toggleButton._changeCheckState('keyboard');
            expect(toggleButton.clickMode).toEqual('press');

            document.body.removeChild(document.querySelector('smart-toggle-button'));
            expect(toggleButton).not.toBeInDOM();
        });

        it('when clickMode is set to "press" and disabled is "true"', function () {
            let toggleButton = document.createElement('smart-toggle-button');
            document.body.appendChild(toggleButton);
            let e = {};
            toggleButton.checked = true;
            toggleButton.clickMode = 'press';
            toggleButton.disabled = true;
            e.preventDefault = function () { };
            toggleButton._dragStartHandler(e);
            expect(toggleButton.checked).toBe(true);

            document.body.removeChild(document.querySelector('smart-toggle-button'));
            expect(toggleButton).not.toBeInDOM();
        });
    });
    describe('testing the "changeCheckState" and "clickHandler" function', function () {
        it('when the changeType is "pointer"', function () {
            let toggleButton = document.createElement('smart-toggle-button');
            document.body.appendChild(toggleButton);
            toggleButton.groupName = 'first';
            toggleButton.checked = false;
            toggleButton._changeCheckState('pointer');
            expect(toggleButton.checked).toBe(true);
            toggleButton._clickHandler();
            toggleButton.checked = true;
            toggleButton._changeCheckState('pointer');
            expect(toggleButton.groupName).toEqual('first');
            expect(toggleButton.checked).toBe(false);

            document.body.removeChild(document.querySelector('smart-toggle-button'));
            expect(toggleButton).not.toBeInDOM();
        });
    });
    describe('testing mouse events', function () {
        it('mouse enter event handler on button', function () {
            let toggleButton = document.createElement('smart-toggle-button');

            document.body.appendChild(toggleButton);
            toggleButton.clickMode = 'hover';
            toggleButton._buttonMouseEnterHandler();
            expect(toggleButton.clickMode).toEqual('hover');

            document.body.removeChild(document.querySelector('smart-toggle-button'));
            expect(toggleButton).not.toBeInDOM();
        });
        it('moouse down event handler', function () {
            let toggleButton = document.createElement('smart-toggle-button'),
                event = { preventDefault: function () { }, stopPropagation: function () { } };

            document.body.appendChild(toggleButton);
            toggleButton.clickMode = 'press';
            toggleButton._mouseDownHandler(event);
            expect(toggleButton.clickMode).toEqual('press');

            document.body.removeChild(document.querySelector('smart-toggle-button'));
            expect(toggleButton).not.toBeInDOM();
        });
    });
});
