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
            let radioButton = document.createElement('smart-radio-button');
            document.body.appendChild(radioButton);
            expect(radioButton).toBeInDOM();

            document.body.removeChild(document.querySelector('smart-radio-button'));
            expect(radioButton).not.toBeInDOM();
        });
    });

    describe('testing the click handler', function () {
        it('in switchMode="click" after click to change the state from null to true', function () {
            let radioButton = document.createElement('smart-radio-button');
            document.body.appendChild(radioButton);
            radioButton.clickMode = 'press';
            expect(radioButton.clickMode).toEqual('press');

            document.body.removeChild(document.querySelector('smart-radio-button'));
            expect(radioButton).not.toBeInDOM();
        });

        it('in clickMode="press" on press to change the state from true to false', function () {
            let radioButton = document.createElement('smart-radio-button');
            document.body.appendChild(radioButton);

            radioButton.clickMode = 'press';
            radioButton._downHandler({ originalEvent: { target: radioButton.$.radioButtonInput } });
            expect(radioButton.clickMode).toEqual('press');

            document.body.removeChild(document.querySelector('smart-radio-button'));
            expect(radioButton).not.toBeInDOM();
        });

        it('in clickMode="release" on release to change the state from true to false', function () {
            let radioButton = document.createElement('smart-radio-button');
            document.body.appendChild(radioButton);

            radioButton.clickMode = 'release';
            radioButton._downHandler({ originalEvent: { target: radioButton.$.radioButtonInput } });
            expect(radioButton.clickMode).toEqual('release');

            document.body.removeChild(document.querySelector('smart-radio-button'));
            expect(radioButton).not.toBeInDOM();
        });

        it('in clickMode="pressAndRelease" on press and release to change the state from true to false', function () {
            let radioButton = document.createElement('smart-radio-button');
            document.body.appendChild(radioButton);

            radioButton.clickMode = 'pressAndRelease';
            radioButton._downHandler({ originalEvent: { target: radioButton.$.radioButtonInput } });
            expect(radioButton.clickMode).toEqual('pressAndRelease');

            document.body.removeChild(document.querySelector('smart-radio-button'));
            expect(radioButton).not.toBeInDOM();
        });

        it('in clickMode="press" and disabled checked cannot be changed', function () {
            let radioButton = document.createElement('smart-radio-button');
            document.body.appendChild(radioButton);

            radioButton.checked = true;
            radioButton.clickMode = 'press';
            radioButton.disabled = true;
            radioButton._downHandler({ originalEvent: { target: radioButton.$.radioButtonInput } });
            expect(radioButton.checked).toBe(true);

            document.body.removeChild(document.querySelector('smart-radio-button'));
            expect(radioButton).not.toBeInDOM();
        });
    });
    describe('testing the "changeCheckState" function', function () {
        it('when the changeType is "pointer"', function () {
            let radioButton = document.createElement('smart-radio-button');

            document.body.appendChild(radioButton);
            radioButton.groupName = 'first';
            radioButton.checked = false;
            radioButton._changeCheckState('pointer');
            expect(radioButton.checked).toBe(true);

            radioButton.checked = true;
            radioButton._changeCheckState('pointer');
            expect(radioButton.groupName).toEqual('first');
            expect(radioButton.checked).toBe(true);

            document.body.removeChild(document.querySelector('smart-radio-button'));
            expect(radioButton).not.toBeInDOM();
        });
    });

    describe('testing the rest of event handlers', function () {
        it('mouse enter event handler', function () {
            let radioButton = document.createElement('smart-radio-button');

            document.body.appendChild(radioButton);
            radioButton.clickMode = 'hover';
            radioButton._mouseenterHandler();
            expect(radioButton.clickMode).toEqual('hover');

            document.body.removeChild(document.querySelector('smart-radio-button'));
            expect(radioButton).not.toBeInDOM();
        });
        it('radio button down event handler', function () {
            let radioButton = document.createElement('smart-radio-button'),
                event = { stopPropagation: function () { } };

            document.body.appendChild(radioButton);

            radioButton._preventAction = true;
            radioButton._downHandler({ originalEvent: { target: radioButton.$.radioButtonInput } });
            expect(radioButton.checked).toBe(false);


            radioButton._preventAction = true;
            radioButton._downHandler({ originalEvent: { target: radioButton.$.radioButtonInput } });
            radioButton._documentUpHandler({ target: undefined});
            expect(radioButton.checked).toBe(false);

            radioButton._pressed = true;
            radioButton._downHandler({ originalEvent: { target: radioButton.$.radioButtonInput } });
            radioButton._documentUpHandler({ target: undefined});
            expect(radioButton.checked).toBe(true);

            document.body.removeChild(document.querySelector('smart-radio-button'));
            expect(radioButton).not.toBeInDOM();
        });
        it('radio button label down event handler', function () {
            let radioButton = document.createElement('smart-radio-button'),
                event = { stopPropagation: function () { }, originalEvent: { target: radioButton.$.radioButtonLabel } };

            document.body.appendChild(radioButton);
            radioButton._downHandler(event);
            expect(radioButton.enableContainerClick).toBe(false);

            document.body.removeChild(document.querySelector('smart-radio-button'));
            expect(radioButton).not.toBeInDOM();
        });
        it('document up event handler', function () {
            let radioButton = document.createElement('smart-radio-button');

            document.body.appendChild(radioButton);
            radioButton.clickMode = 'release';
            radioButton._downHandler({ originalEvent: { target: radioButton.$.radioButtonInput } });
            radioButton._documentUpHandler({ target: undefined });
            expect(radioButton.clickMode).toEqual('release');

            radioButton.clickMode = 'pressAndRelease';
            radioButton._downHandler({ originalEvent: { target: radioButton.$.radioButtonInput } });
            radioButton._documentUpHandler({ target: undefined});
            expect(radioButton.clickMode).toEqual('pressAndRelease');

            document.body.removeChild(document.querySelector('smart-radio-button'));
            expect(radioButton).not.toBeInDOM();
        });
    });
});
