var describe,
    it,
    expect,
    document,
    beforeAll,
    afterAll;

describe('Testing smart-switch-button, created via script and dynamicaly changed it\'s properties', function () {
    'use strict';

    describe('if it created dynamicaly', function () {
        it('exists in DOM', function () {
            let switchButton = document.createElement('smart-switch-button');
            document.body.appendChild(switchButton);
            expect(switchButton).toBeInDOM();

            document.body.removeChild(document.querySelector('smart-switch-button'));
            expect(switchButton).not.toBeInDOM();
        });
    });

    describe('testing the click handler', function () {
        it('in switchMode="click" after click to change the state from null to true', function () {
            let switchButton = document.createElement('smart-switch-button');
            document.body.appendChild(switchButton);

            switchButton.checked = null;
            switchButton.switchMode = 'click';
            switchButton._clickHandler();
            expect(switchButton.checked).toBe(true);

            document.body.removeChild(document.querySelector('smart-switch-button'));
            expect(switchButton).not.toBeInDOM();
        });

        it('in switchMode="click" after click to change the state from true to false', function () {
            let switchButton = document.createElement('smart-switch-button');
            document.body.appendChild(switchButton);

            switchButton.checked = false;
            switchButton.switchMode = 'click';
            switchButton._clickHandler();
            expect(switchButton.checked).toBe(true);

            document.body.removeChild(document.querySelector('smart-switch-button'));
            expect(switchButton).not.toBeInDOM();
        });

        it('in switchMode="click" after click to change the state from true to false', function () {
            let switchButton = document.createElement('smart-switch-button');
            document.body.appendChild(switchButton);

            switchButton.checked = true;
            switchButton.switchMode = 'click';
            switchButton._clickHandler();
            expect(switchButton.checked).toBe(false);

            switchButton.orientation = 'vertical';
            switchButton.checked = true;
            switchButton._clickHandler();
            expect(switchButton.checked).toBe(false);

            document.body.removeChild(document.querySelector('smart-switch-button'));
            expect(switchButton).not.toBeInDOM();
        });

        it('in switchMode="click" and disabled checked cannot be changed', function () {
            let switchButton = document.createElement('smart-switch-button');
            document.body.appendChild(switchButton);

            switchButton.checked = true;
            switchButton.switchMode = 'click';
            switchButton.disabled = true;
            switchButton._clickHandler();
            expect(switchButton.checked).toBe(true);

            document.body.removeChild(document.querySelector('smart-switch-button'));
            expect(switchButton).not.toBeInDOM();
        });

        it('in switchMode="drag", just click do not change the value', function () {
            let switchButton = document.createElement('smart-switch-button');
            document.body.appendChild(switchButton);

            switchButton.checked = true;
            switchButton.switchMode = 'drag';
            switchButton._clickHandler();
            expect(switchButton.checked).toBe(true);

            document.body.removeChild(document.querySelector('smart-switch-button'));
            expect(switchButton).not.toBeInDOM();
        });
    });

    describe('testing change the state after pressing space key', function () {
        it('in switchMode="click" after click to change the state from null to true', function () {
            let switchButton = document.createElement('smart-switch-button');
            document.body.appendChild(switchButton);
            let e = {};
            e.keyCode = 32;
            switchButton.checked = null;
            switchButton._keyUpHandler(e);
            expect(switchButton.checked).toBe(true);

            switchButton.orientation = 'vertical';
            switchButton.checked = null;
            switchButton._keyUpHandler(e);
            expect(switchButton.checked).toBe(true);

            switchButton.inverted = true;
            switchButton.checked = null;
            switchButton._keyUpHandler(e);
            expect(switchButton.checked).toBe(true);

            document.body.removeChild(document.querySelector('smart-switch-button'));
            expect(switchButton).not.toBeInDOM();
        });

        it('in switchMode="click" after click to change the state from true to false', function () {
            let switchButton = document.createElement('smart-switch-button');
            document.body.appendChild(switchButton);
            let e = {};
            e.keyCode = 32;
            switchButton.checked = false;
            switchButton._keyUpHandler(e);
            expect(switchButton.checked).toBe(true);

            switchButton.orientation = 'vertical';
            switchButton.checked = false;
            switchButton._keyUpHandler(e);
            expect(switchButton.checked).toBe(true);

            document.body.removeChild(document.querySelector('smart-switch-button'));
            expect(switchButton).not.toBeInDOM();
        });

        it('in switchMode="click" after click to change the state from true to false', function () {
            let switchButton = document.createElement('smart-switch-button');
            document.body.appendChild(switchButton);
            let e = {};
            e.keyCode = 32;
            switchButton.checked = true;
            switchButton._keyUpHandler(e);
            expect(switchButton.checked).toBe(false);

            switchButton.orientation = 'vertical';
            switchButton.checked = true;
            switchButton._keyUpHandler(e);
            expect(switchButton.checked).toBe(false);

            document.body.removeChild(document.querySelector('smart-switch-button'));
            expect(switchButton).not.toBeInDOM();
        });
    });

    describe('testing drag handling', function () {

        it('if the thumb is started to be dragged, on disabled element _mouseDown flag is false', function () {
            let switchButton = document.createElement('smart-switch-button');
            document.body.appendChild(switchButton);
            let e = { pageX: 10, pageY: 20, preventDefault: function () { } };
            switchButton.switchMode = 'click';
            switchButton.checked = null;
            switchButton.disabled = true;
            switchButton._switchThumbDragStartHandler(e);
            expect(switchButton._mouseDown).toBe(false);

            document.body.removeChild(document.querySelector('smart-switch-button'));
            expect(switchButton).not.toBeInDOM();
        });

        it('if the thumb is started to be dragged, on switchMode="click" _mouseDown flag is false', function () {
            let switchButton = document.createElement('smart-switch-button');
            document.body.appendChild(switchButton);
            let e = { pageX: 10, pageY: 20, preventDefault: function () { } };
            switchButton.switchMode = 'click';
            switchButton.checked = null;
            switchButton.disabled = true;
            switchButton._switchThumbDragStartHandler(e);
            expect(switchButton._mouseDown).toBe(false);

            document.body.removeChild(document.querySelector('smart-switch-button'));
            expect(switchButton).not.toBeInDOM();
        });
    });

    describe('testing drag handling on horizontal inverted switch', function () {
        it('if the thumb is dragged, to change the check state on drop', function () {
            let switchButton = document.createElement('smart-switch-button');
            document.body.appendChild(switchButton);
            let e = { pageX: 10, pageY: 20, preventDefault: function () { } };
            switchButton.checked = false;
            switchButton.inverted = true;
            switchButton._switchThumbDragStartHandler(e);
            e = { pageX: 180, pageY: 20 };
            switchButton._switchThumbDragHandler(e);
            switchButton._switchThumbDropHandler(e);

            expect(switchButton.checked).toBe(true);
            document.body.removeChild(document.querySelector('smart-switch-button'));
            expect(switchButton).not.toBeInDOM();
        });
    });
    describe('testing event handling from interatction', function () {
        it('mouse down event handler', function () {
            let switchButton = document.createElement('smart-switch-button'),
                e = { pageX: 10, pageY: 20, preventDefault: function () { } };

            document.body.appendChild(switchButton);

            switchButton.switchMode = 'click';
            switchButton.clickMode = 'press';
            switchButton._mouseDownHandler();

            expect(switchButton.switchMode).toEqual('click');
            expect(switchButton.clickMode).toEqual('press');

            document.body.removeChild(document.querySelector('smart-switch-button'));
            expect(switchButton).not.toBeInDOM();
        });
        it('select start event handler', function () {
            let switchButton = document.createElement('smart-switch-button'),
                e = { preventDefault: function () { } };

            document.body.appendChild(switchButton);

            switchButton._mouseDown = true;
            switchButton._selectStartHandler(e);
            switchButton._mouseDown = false;

            document.body.removeChild(document.querySelector('smart-switch-button'));
            expect(switchButton).not.toBeInDOM();
        });
        it('mouse enter and mouse leave event handlers', function () {
            let switchButton = document.createElement('smart-switch-button');

            document.body.appendChild(switchButton);

            switchButton._switchButtonOnMouseEnter();
            expect(switchButton).toHaveClass('hovered');

            switchButton._switchButtonOnMouseLeave();
            expect(switchButton).not.toHaveClass('hovered');

            document.body.removeChild(document.querySelector('smart-switch-button'));
            expect(switchButton).not.toBeInDOM();
        });

        it('resize handler', function () {
            let switchButton = document.createElement('smart-switch-button');

            document.body.appendChild(switchButton);

            switchButton.style.width = '200px';
            switchButton._supportCSSVariables = false;
            switchButton._resizeHandler();
            switchButton.style.width = '100px';
            switchButton._supportCSSVariables = true;
            switchButton._resizeHandler();

            expect(switchButton.style.width).toEqual('100px');

            document.body.removeChild(document.querySelector('smart-switch-button'));
            expect(switchButton).not.toBeInDOM();
        });
    });

    describe('_changeCheckState', function () {
        it(' with change from null to true', function () {
            let switchButton = document.createElement('smart-switch-button');
            document.body.appendChild(switchButton);

            switchButton.checked = null;
            switchButton._changeCheckState(true);
            expect(switchButton.checked).toEqual(true);

            document.body.removeChild(document.querySelector('smart-switch-button'));
            expect(switchButton).not.toBeInDOM();
        });
    });

    describe('_updateAnimationsCSSvariables', function () {
        it(' when CSS variables are supported', function () {
            let switchButton = document.createElement('smart-switch-button');
            document.body.appendChild(switchButton);

            switchButton._updateAnimationsCSSvariables(200, 200);

            document.body.removeChild(document.querySelector('smart-switch-button'));
            expect(switchButton).not.toBeInDOM();
        });

        it(' when CSS variables are not supported', function () {
            let switchButton = document.createElement('smart-switch-button');
            document.body.appendChild(switchButton);

            switchButton._supportCSSVariables = false;
            switchButton._updateAnimationsCSSvariables(200, 200);

            document.body.removeChild(document.querySelector('smart-switch-button'));
            expect(switchButton).not.toBeInDOM();
        });
    });
});
