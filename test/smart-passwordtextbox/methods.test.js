var describe,
    it,
    expect,
    document;
describe('Testing smart-password-text-box methods', function () {
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
    describe('Testing "unfocusable" property - ', function () {
        it('setting to false to have tabindex', function () {
            const passwordTextBox = createPasswordTextBox();

            passwordTextBox.unfocusable = false;

            expect(passwordTextBox.$.input.getAttribute('tabindex')).toBe(null);
            removePasswordTextBox(passwordTextBox);
        });

        it('setting to false to not have tabindex', function () {
            const passwordTextBox = createPasswordTextBox();

            passwordTextBox.unfocusable = true;

            expect(passwordTextBox.$.input.getAttribute('tabindex')).toBe('-1');
            removePasswordTextBox(passwordTextBox);
        });
    });

    describe('Testing reset() method ', function () {
        it(' in default displayMode', function () {
            const passwordTextBox = createPasswordTextBox();

            passwordTextBox.value = 'New value';
            passwordTextBox.reset();

            expect(passwordTextBox.value).toBe('');
            removePasswordTextBox(passwordTextBox);
        });

    });

    describe('Testing _checkMissingModules() ', function () {
        it(' if a reference to the textBox is missing', function () {
            const passwordTextBox = createPasswordTextBox(),
                textBox = Smart.TextBox;
            Smart.TextBox = undefined;

            expect(function () { passwordTextBox._checkMissingModules(); }).toThrow();

            Smart.TextBox = textBox;
            removePasswordTextBox(passwordTextBox);
        });

        it(' if a reference to the tooltip is missing', function () {
            const passwordTextBox = createPasswordTextBox(),
                tooltip = Smart.Tooltip;
            Smart.Tooltip = undefined;

            expect(function () { passwordTextBox._checkMissingModules(); }).toThrow();

            Smart.Tooltip = tooltip;
            removePasswordTextBox(passwordTextBox);
        });
    });

    describe('Testing _showPassword() ', function () {
        it(' by default the type of the input remains "password"', function () {
            const passwordTextBox = createPasswordTextBox();

            passwordTextBox._showPassword();
            expect(passwordTextBox.$.input.type).toBe('password');

            removePasswordTextBox(passwordTextBox);
        });
        it(' if showPasswordIcon is true the type of the input correctly to "text"', function () {
            const passwordTextBox = createPasswordTextBox();

            passwordTextBox.showPasswordIcon = true;
            passwordTextBox._showPassword();
            expect(passwordTextBox.$.input.type).toBe('text');

            removePasswordTextBox(passwordTextBox);
        });
    });

    describe('Testing _documentUpHandler() ', function () {
        it(' by default the type of the input remains "password"', function () {
            const passwordTextBox = createPasswordTextBox();

            passwordTextBox._showPassword();
            passwordTextBox._documentUpHandler();
            expect(passwordTextBox.$.input.type).toBe('password');

            removePasswordTextBox(passwordTextBox);
        });

        it(' if showPasswordIcon is true the type of the input is reverted to "password"', function () {
            const passwordTextBox = createPasswordTextBox();

            passwordTextBox.showPasswordIcon = true;
            passwordTextBox._showPassword();
            passwordTextBox._documentUpHandler();
            expect(passwordTextBox.$.input.type).toBe('password');

            removePasswordTextBox(passwordTextBox);
        });
    });

    describe('Testing _evaluatePasswordStrength() ', function () {
        it('om empty passwordTextBox to return "short"', function () {
            const passwordTextBox = createPasswordTextBox(),
                passwordStrength = passwordTextBox._evaluatePasswordStrength();

            expect(passwordStrength).toBe('short');

            removePasswordTextBox(passwordTextBox);
        });

        it('with password with 1 character repeated more than 8 times to return "weak"', function () {
            const passwordTextBox = createPasswordTextBox();

            passwordTextBox.value = 'aaaaaaaa';
            const passwordStrength = passwordTextBox._evaluatePasswordStrength();

            expect(passwordStrength).toBe('weak');

            removePasswordTextBox(passwordTextBox);
        });

        it('with password with 10 different letters to return "far"', function () {
            const passwordTextBox = createPasswordTextBox();

            passwordTextBox.value = 'abhscsdfde';
            const passwordStrength = passwordTextBox._evaluatePasswordStrength();

            expect(passwordStrength).toBe('far');

            removePasswordTextBox(passwordTextBox);
        });

        it('with password with combination of 11 letters, numbers and special characters to return "good"', function () {
            const passwordTextBox = createPasswordTextBox();

            passwordTextBox.value = 'ab13c$%fd92';
            const passwordStrength = passwordTextBox._evaluatePasswordStrength();

            expect(passwordStrength).toBe('good');

            removePasswordTextBox(passwordTextBox);
        });

        it('with password with combination of 15 letters, numbers and special characters to return "strong"', function () {
            const passwordTextBox = createPasswordTextBox();

            passwordTextBox.value = 'ab13c$%fd92df';
            const passwordStrength = passwordTextBox._evaluatePasswordStrength();

            expect(passwordStrength).toBe('strong');

            removePasswordTextBox(passwordTextBox);
        });


        it('with custom passwordStrength callback', function () {
            const passwordTextBox = createPasswordTextBox();

            passwordTextBox.value = 'ab13c$%fd92df';
            passwordTextBox.passwordStrength = function () { return 'weak' };
            const passwordStrength = passwordTextBox._evaluatePasswordStrength();

            expect(passwordStrength).toBe('weak');

            removePasswordTextBox(passwordTextBox);
        });
    });

    describe('Testing _updateLocalization() ', function () {
        it(' when user changes localization property', function () {
            const passwordTextBox = createPasswordTextBox();

            passwordTextBox.localization = { passwordStrength: 'Passwortstärke', short: 'kurz', weak: 'schwach', far: 'weit', good: 'gut', strong: 'stark', showPassword: 'Passwort anzeigen' };
            expect(passwordTextBox._localization.short).toBe('kurz');

            removePasswordTextBox(passwordTextBox);
        });
    });
});
