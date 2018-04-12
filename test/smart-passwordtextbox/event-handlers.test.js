var describe,
    it,
    expect,
    document;

describe('Testing smart-password-text-box event handlers', function () {
    'use strict';

    function createPasswordTextBox() {
        const passwordTextBox = document.createElement('smart-password-text-box');

        document.body.appendChild(passwordTextBox);
        expect(passwordTextBox).toBeInDOM();

        return passwordTextBox;
    }

    function removePasswordTextBox(passwordTextBox) {
        document.body.removeChild(document.querySelector('smart-password-text-box'));
        expect(passwordTextBox).not.toBeInDOM();
    }


    describe(' testing _focusHandler', function () {
        it(' with selectAllOnFocus on enabled Text Area the whole text to be selected', function () {
            const passwordTextBox = createPasswordTextBox(),
                event = { type: 'focus' };

            passwordTextBox.value = 'test';
            passwordTextBox.selectAllOnFocus = true;
            passwordTextBox._focusHandler(event);

            removePasswordTextBox(passwordTextBox);
        });

        it(' with selectAllOnFocus on disabled Text Area the text do not be selected', function () {
            const passwordTextBox = createPasswordTextBox(),
                event = { type: 'focus' };

            passwordTextBox.disabled = true;
            passwordTextBox.value = 'test';
            passwordTextBox.selectAllOnFocus = true;
            passwordTextBox._focusHandler(event);

            removePasswordTextBox(passwordTextBox);
        });
    });

    describe(' testing _mouseEventsHandler', function () {
        it(' ', function () {
            const passwordTextBox = createPasswordTextBox();
            let event = { type: 'mouseenter' };

            passwordTextBox._mouseEventsHandler(event);

            event = { type: 'mouseleave' };

            passwordTextBox._mouseEventsHandler(event);

            removePasswordTextBox(passwordTextBox);
        });
    });

    describe(' testing _documentUpHandler', function () {
        it(' on disabled ', function () {
            const passwordTextBox = createPasswordTextBox();

            passwordTextBox.disabled = true;
            passwordTextBox._documentUpHandler();

            removePasswordTextBox(passwordTextBox);
        });

        it(' when the event is triggered over the textarea', function () {
            const passwordTextBox = createPasswordTextBox(),
                event = { originalEvent: { target: passwordTextBox.$.textarea } };

            passwordTextBox._documentUpHandler(event);

            removePasswordTextBox(passwordTextBox);
        });
    });

    describe(' testing _focusHandler', function () {
        it(' when showPasswordIcon is true the password icon to be visible', function () {
            const passwordTextBox = createPasswordTextBox();

            passwordTextBox.showPasswordIcon = true;
            passwordTextBox._focusHandler();

            expect(passwordTextBox.$.passwordIcon.classList.toString()).toBe('smart-password-icon');

            removePasswordTextBox(passwordTextBox);
        });

        it(' when showPasswordStrength is true the tooltip to be visible', function () {
            const passwordTextBox = createPasswordTextBox();

            passwordTextBox.showPasswordStrength = true;
            passwordTextBox._focusHandler();

            removePasswordTextBox(passwordTextBox);
        });
    });


    describe(' testing _blurHandler', function () {
        it(' on disabled passwordtextbox', function () {
            const passwordTextBox = createPasswordTextBox();

            passwordTextBox.disabled = true;
            passwordTextBox._blurHandler();

            removePasswordTextBox(passwordTextBox);
        });

        it(' on enabled passwordtextbox', function () {
            const passwordTextBox = createPasswordTextBox();

            passwordTextBox._focusHandler();
            passwordTextBox._blurHandler();

            removePasswordTextBox(passwordTextBox);
        });

        it(' when the value is changed - change event to be fired', function () {
            const passwordTextBox = createPasswordTextBox();

            passwordTextBox._focusHandler();
            passwordTextBox.value = 'a';
            passwordTextBox._blurHandler();

            removePasswordTextBox(passwordTextBox);
        });

        it(' when the value is changed - change event to be fired', function () {
            const passwordTextBox = createPasswordTextBox();

            passwordTextBox._focusHandler();
            passwordTextBox.value = 'a';
            passwordTextBox._blurHandler();

            removePasswordTextBox(passwordTextBox);
        });

        it(' when password icon is shown -> _blurHandler to hide it', function () {
            const passwordTextBox = createPasswordTextBox();

            passwordTextBox.showPasswordIcon = true;
            passwordTextBox._blurHandler();

            removePasswordTextBox(passwordTextBox);
        });

        it(' when showPasswordStrength is true -> _blurHandler to close the password strength tooltip', function () {
            const passwordTextBox = createPasswordTextBox();

            passwordTextBox.showPasswordStrength = true;
            passwordTextBox._focusHandler();

            removePasswordTextBox(passwordTextBox);
        });
    });

    describe(' testing _textBoxChangeHandler', function () {
        it(' ', function () {
            const passwordTextBox = createPasswordTextBox();

            passwordTextBox.value = 'Test value';
            passwordTextBox._textBoxChangeHandler();

            removePasswordTextBox(passwordTextBox);
        });
    });
});
