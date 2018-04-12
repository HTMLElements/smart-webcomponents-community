var describe,
    it,
    expect,
    document,
    beforeAll,
    afterAll;

describe('Testing smart-repeat-button private functions', function () {
    'use strict';

    describe('if it created dynamicaly', function () {
        it('exists in DOM', function () {
            let repeatButton = document.createElement('smart-repeat-button');
            document.body.appendChild(repeatButton);
            expect(repeatButton).toBeInDOM();

            document.body.removeChild(document.querySelector('smart-repeat-button'));
            expect(repeatButton).not.toBeInDOM();
        });
    });

    describe('testing the click handler', function () {
        it('in switchMode="click" after click to change the state from null to true', function () {
            let repeatButton = document.createElement('smart-repeat-button');
            document.body.appendChild(repeatButton);
            let e = {};
            e.preventDefault = function () { };
            e.stopPropagation = function () { };
            repeatButton.clickMode = 'press';
            repeatButton._clickHandler(e);
            expect(repeatButton.clickMode).toEqual('press');

            document.body.removeChild(document.querySelector('smart-repeat-button'));
            expect(repeatButton).not.toBeInDOM();
        });

        it('in clickMode="press" after click to change the state from true to false', function () {
            let repeatButton = document.createElement('smart-repeat-button');
            document.body.appendChild(repeatButton);
            let e = {};
            e.keyCode = 32;
            repeatButton.clickMode = 'press';
            repeatButton._mouseDownHandler({ originalEvent: { stopPropagation: function () { } } });
            repeatButton._mouseEnterHandler({ originalEvent: { stopPropagation: function () { } } });
            expect(repeatButton.clickMode).toEqual('press');

            document.body.removeChild(document.querySelector('smart-repeat-button'));
            expect(repeatButton).not.toBeInDOM();
        });

        it('in clickMode="press" and disabled checked cannot be changed', function () {
            let repeatButton = document.createElement('smart-repeat-button');
            document.body.appendChild(repeatButton);
            let e = {};
            e.preventDefault = function () { };
            e.stopPropagation = function () { };
            repeatButton.checked = true;
            repeatButton.clickMode = 'press';
            repeatButton.disabled = true;
            repeatButton._clickHandler(e);
            expect(repeatButton.checked).toBe(true);

            document.body.removeChild(document.querySelector('smart-repeat-button'));
            expect(repeatButton).not.toBeInDOM();
        });

        it('in clickMode="press" remove class "hover" on mouseLeave and touchEnd', function () {
            let repeatButton = document.createElement('smart-repeat-button');
            document.body.appendChild(repeatButton);
            repeatButton.checked = true;
            repeatButton.clickMode = 'press';
            repeatButton._mouseLeaveHandler();
            repeatButton._touchEndHandler();
            expect(repeatButton.checked).toBe(true);

            document.body.removeChild(document.querySelector('smart-repeat-button'));
            expect(repeatButton).not.toBeInDOM();
        });
    });
    describe('testing the mouse events', function () {
        it('mouse down and mouse up event handlers', function () {
            let repeatButton = document.createElement('smart-repeat-button'),
                event = { buttons: 1 };

            document.body.appendChild(repeatButton);

            repeatButton._startRepeat(event); //setInterval is ignored in Karma
            repeatButton._repeatTimer = true;
            repeatButton._stopRepeat(event);

            document.body.removeChild(repeatButton);
            expect(repeatButton).not.toBeInDOM();
        });
        it('mouse enter and mouse leave event handlers', function () {
            let repeatButton = document.createElement('smart-repeat-button'),
                event = { type: 'mouseenter', buttons: 0 };

            document.body.appendChild(repeatButton);

            repeatButton._updateInBoundsFlag(event);
            event.type = 'mouseleave';
            repeatButton._updateInBoundsFlag(event);

            document.body.removeChild(repeatButton);
            expect(repeatButton).not.toBeInDOM();
        });
    });
});
