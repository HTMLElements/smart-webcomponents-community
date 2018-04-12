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
        it('can set dynamically the "checked" property', function () {
            let switchButton = document.createElement('smart-switch-button');
            document.body.appendChild(switchButton);

            switchButton.checked = true;
            expect(switchButton.checked).toBe(true);
            expect(switchButton).toHaveAttr('checked');

            switchButton.checked = false;
            expect(switchButton.checked).toBe(false);
            expect(switchButton).not.toHaveAttr('checked');

            document.body.removeChild(document.querySelector('smart-switch-button'));
            expect(switchButton).not.toBeInDOM();
        });

        it('can set dynamically the "checked" attribute', function () {
            let switchButton = document.createElement('smart-switch-button');
            document.body.appendChild(switchButton);

            switchButton.setAttribute('checked', 'true');
            expect(switchButton.checked).toBe(true);
            expect(switchButton.getAttribute('checked')).toBe('true');

            document.body.removeChild(document.querySelector('smart-switch-button'));
            expect(switchButton).not.toBeInDOM();
        });

        it('can set dynamically the "name" property', function () {
            let switchButton = document.createElement('smart-switch-button');
            document.body.appendChild(switchButton);

            switchButton.name = 'Name';
            expect(switchButton.name).toBe('Name');
            expect(switchButton.getAttribute('name')).toBe('Name');

            document.body.removeChild(document.querySelector('smart-switch-button'));
            expect(switchButton).not.toBeInDOM();
        });

        it('can set dynamically the "name" property', function () {
            let switchButton = document.createElement('smart-switch-button');
            document.body.appendChild(switchButton);

            switchButton.setAttribute('name', 'Name');
            expect(switchButton.name).toBe('Name');
            expect(switchButton.getAttribute('name')).toBe('Name');

            document.body.removeChild(document.querySelector('smart-switch-button'));
            expect(switchButton).not.toBeInDOM();
        });

        it('can set dynamically the "value" property', function () {
            let switchButton = document.createElement('smart-switch-button');
            document.body.appendChild(switchButton);

            switchButton.value = 'Value';
            expect(switchButton.value).toBe('Value');
            expect(switchButton.getAttribute('value')).toBe('Value');

            document.body.removeChild(document.querySelector('smart-switch-button'));
            expect(switchButton).not.toBeInDOM();
        });
        it('can set dynamically the "value" property', function () {
            let switchButton = document.createElement('smart-switch-button');
            document.body.appendChild(switchButton);

            switchButton.setAttribute('value', 'Value');
            expect(switchButton.value).toBe('Value');
            expect(switchButton.getAttribute('value')).toBe('Value');

            document.body.removeChild(document.querySelector('smart-switch-button'));
            expect(switchButton).not.toBeInDOM();
        });

        it('can set dynamically the "disabled" property', function () {
            let switchButton = document.createElement('smart-switch-button');
            document.body.appendChild(switchButton);

            switchButton.disabled = true;
            expect(switchButton.disabled).toBe(true);
            expect(switchButton).toHaveAttr('disabled');

            switchButton.disabled = false;
            expect(switchButton.disabled).toBe(false);
            expect(switchButton).not.toHaveAttr('disabled');

            document.body.removeChild(document.querySelector('smart-switch-button'));
            expect(switchButton).not.toBeInDOM();
        });
        it('can set the "disabled" property via "disabled" attribute', function () {
            let switchButton = document.createElement('smart-switch-button');
            document.body.appendChild(switchButton);

            switchButton.setAttribute('disabled', 'true');
            expect(switchButton.disabled).toBe(true);
            expect(switchButton.getAttribute('disabled')).toBe('true');

            switchButton.removeAttribute('disabled');
            expect(switchButton.disabled).toBe(false);
			expect(switchButton).not.toHaveAttr('disabled');

            document.body.removeChild(document.querySelector('smart-switch-button'));
            expect(switchButton).not.toBeInDOM();
        });

        it(' set properties in following sequence "checked", "disabled", "name", "value"', function () {
            let switchButton = document.createElement('smart-switch-button');
            document.body.appendChild(switchButton);

            switchButton.setAttribute('checked', 'true');
            switchButton.setAttribute('disabled', 'true');
            switchButton.setAttribute('name', 'Name');
            switchButton.setAttribute('value', 'Value');

            expect(switchButton.checked).toBe(true);
            expect(switchButton.disabled).toBe(true);
            expect(switchButton.name).toBe('Name');
            expect(switchButton.value).toBe('Value');

            document.body.removeChild(document.querySelector('smart-switch-button'));
            expect(switchButton).not.toBeInDOM();
        });

        it(' set properties in following sequence "name", "disabled", "value", "checked"', function () {
            let switchButton = document.createElement('smart-switch-button');
            document.body.appendChild(switchButton);

            switchButton.setAttribute('name', 'Name');
            switchButton.setAttribute('disabled', 'true');
            switchButton.setAttribute('value', 'Value');
            switchButton.setAttribute('checked', 'true');

            expect(switchButton.checked).toBe(true);
            expect(switchButton.disabled).toBe(true);
            expect(switchButton.name).toBe('Name');
            expect(switchButton.value).toBe('Value');

            document.body.removeChild(document.querySelector('smart-switch-button'));
            expect(switchButton).not.toBeInDOM();
        });

        it(' can be created in different check states or indeterminate', function () {
            let switchButton = document.createElement('smart-switch-button');
            switchButton.checked = null;
            document.body.appendChild(switchButton);
            expect(switchButton.getAttribute('checked')).toBe('null');
            document.body.removeChild(document.querySelector('smart-switch-button'));
            expect(switchButton).not.toBeInDOM();

            switchButton.checked = true;
            document.body.appendChild(switchButton);
            expect(switchButton.getAttribute('checked')).toBe('');
            document.body.removeChild(document.querySelector('smart-switch-button'));
            expect(switchButton).not.toBeInDOM();

            switchButton.checked = false;
            document.body.appendChild(switchButton);
            expect(switchButton.getAttribute('checked')).toBe(null);
            document.body.removeChild(document.querySelector('smart-switch-button'));
            expect(switchButton).not.toBeInDOM();

            let indeterminateSwitchButton = document.createElement('smart-switch-button');
            indeterminateSwitchButton.indeterminate = true;
            document.body.appendChild(indeterminateSwitchButton);
            expect(indeterminateSwitchButton.getAttribute('checked')).toBe('null');
            document.body.removeChild(document.querySelector('smart-switch-button'));
            expect(indeterminateSwitchButton).not.toBeInDOM();
        });
    });
});
