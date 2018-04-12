var describe,
    it,
    expect,
    document,
    beforeAll,
    afterAll;

describe('Testing smart-button, created via script and dynamicaly changed it\'s properties', function () {
    'use strict';

    describe('if it created dynamicaly', function () {
        it('exists in DOM', function () {
            let button = document.createElement('smart-button');
            document.body.appendChild(button);
            expect(button).toBeInDOM();

            document.body.removeChild(document.querySelector('smart-button'));
            expect(button).not.toBeInDOM();
        });
    });

    describe('testing the click handler', function () {
        it('in switchMode="click" after click to change the state from null to true', function () {
            let button = document.createElement('smart-button');
            document.body.appendChild(button);
            let e = {};
            e.preventDefault = function () { };
            e.stopPropagation = function () { };
            button.clickMode = 'press';
            button._clickHandler(e);
            expect(button.clickMode).toEqual('press');

            document.body.removeChild(document.querySelector('smart-button'));
            expect(button).not.toBeInDOM();
        });

        it('in clickMode="press" after click to change the state from true to false', function () {
            let button = document.createElement('smart-button');
            document.body.appendChild(button);
            let e = {};
            e.keyCode = 32;
            button.clickMode = 'press';
            button._mouseDownHandler({ originalEvent: { stopPropagation: function () { } } });
            button._mouseEnterHandler({ originalEvent: { stopPropagation: function () { } } });
            expect(button.clickMode).toEqual('press');

            document.body.removeChild(document.querySelector('smart-button'));
            expect(button).not.toBeInDOM();
        });

        it('in clickMode="press" and disabled checked cannot be changed', function () {
            let button = document.createElement('smart-button');
            document.body.appendChild(button);
            let e = {};
            e.preventDefault = function () { };
            e.stopPropagation = function () { };
            button.checked = true;
            button.clickMode = 'press';
            button.disabled = true;
            button._clickHandler(e);
            expect(button.checked).toBe(true);

            document.body.removeChild(document.querySelector('smart-button'));
            expect(button).not.toBeInDOM();
        });
    });
    describe('testing the mouse events', function () {
        it('mouse enter handler', function () {
            let button = document.createElement('smart-button'),
                e = { buttons: 1 };

            document.body.appendChild(button);

            button.clickMode = 'hover';
            button._mouseEnterHandler(e);
            expect(button.clickMode).toEqual('hover');

            button._mouseLeaveHandler();
            button.readonly = true;
            button._mouseEnterHandler(e);
            expect(button.$.button.className.indexOf("hover") > -1).toEqual(false);

            document.body.removeChild(document.querySelector('smart-button'));
            expect(button).not.toBeInDOM();
        });
    });
    describe('testing if the element is focusable', function () {
        it('on disable', function () {
            let button = document.createElement('smart-button');

            document.body.appendChild(button);

            button.disabled = true;
            expect(button.hasAttribute('tabindex')).toEqual(false);

            document.body.removeChild(document.querySelector('smart-button'));
            expect(button).not.toBeInDOM();
        });
        it('on "unfocusable" change', function () {
            let button = document.createElement('smart-button');

            document.body.appendChild(button);

            button.unfocusable = true;
            expect(button.$.button.getAttribute('tabindex')).toEqual('-1');

            button.unfocusable = false;
            expect(button.$.button.getAttribute('tabindex')).toEqual('0');

            document.body.removeChild(document.querySelector('smart-button'));
            expect(button).not.toBeInDOM();
        });
    });
});
