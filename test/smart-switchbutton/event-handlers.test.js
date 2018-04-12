var describe,
    it,
    expect,
    document,
    beforeAll,
    afterAll;

describe('Testing smart-switch-button event handlers', function () {
    'use strict';

    function createSwitchButton(checked) {
        let switchButton = document.createElement('smart-switch-button');

        if (checked !== undefined) {
            switchButton.checked = checked;
        }

        document.body.appendChild(switchButton);
        expect(switchButton).toBeInDOM();

        return switchButton;
    }

    function removeSwitchButton(switchButton) {
        document.body.removeChild(document.querySelector('smart-switch-button'));
        expect(switchButton).not.toBeInDOM();
    }

    describe('testing _switchButtonOnMouseEnter', function () {
        it('on disabled switch', function () {
            let switchButton = createSwitchButton();

            switchButton.disabled = true;
            switchButton._switchButtonOnMouseEnter();
            expect(switchButton.classList.contains("hovered")).toBe(false);

            removeSwitchButton(switchButton);
        });
    });

    describe('testing _switchButtonOnMouseLeave', function () {
        it('on disabled switch', function () {
            let switchButton = createSwitchButton();

            switchButton.disabled = true;
            switchButton._switchButtonOnMouseLeave();
            expect(switchButton.classList.contains("hovered")).toBe(false);

            removeSwitchButton(switchButton);
        });
    });

    describe('testing _keyUpHandler', function () {
        it('on disabled switch', function () {
            let switchButton = createSwitchButton(true);

            switchButton.disabled = true;
            switchButton._keyUpHandler();
            expect(switchButton.checked).toBe(true);

            removeSwitchButton(switchButton);
        });
    });

    describe('testing switchThumbDragStartHandler', function () {
        it('on switch with switchMode="click"', function () {
            let switchButton = createSwitchButton(true);

            switchButton.switchMode = 'click';
            switchButton._switchThumbDragStartHandler();
            expect(switchButton.checked).toBe(true);

            removeSwitchButton(switchButton);
        });
    });

    describe('testing _switchThumbDragHandler', function () {
        it('on switch with switchMode="click"', function () {
            let switchButton = createSwitchButton(true);

            switchButton.switchMode = 'click';
            switchButton._switchThumbDragHandler();
            expect(switchButton.checked).toBe(true);

            removeSwitchButton(switchButton);
        });

        it(' without mouse dragging', function () {
            let switchButton = createSwitchButton(true);

            switchButton._mouseDown = false;
            switchButton._switchThumbDragHandler();
            expect(switchButton.checked).toBe(true);

            removeSwitchButton(switchButton);
        });
    });

    describe('testing _switchThumbDropHandler', function () {
        it('on switch with switchMode="click"', function () {
            let switchButton = createSwitchButton(true);

            switchButton.switchMode = 'click';
            switchButton._switchThumbDropHandler();
            expect(switchButton.checked).toBe(true);

            removeSwitchButton(switchButton);
        });

        it(' without mouse dragging', function () {
            let switchButton = createSwitchButton(true);

            switchButton._mouseDown = false;
            switchButton._switchThumbDropHandler();
            expect(switchButton.checked).toBe(true);

            removeSwitchButton(switchButton);
        });
    });

    describe('testing _mouseDownHandler', function () {
        it('on disabled switch', function () {
            let switchButton = createSwitchButton(true);

            switchButton.disabled = true;
            switchButton._mouseDownHandler();
            expect(switchButton.checked).toBe(true);

            removeSwitchButton(switchButton);
        });
    });
});
