var describe,
    it,
    expect,
    document,
    beforeAll,
    afterAll;

describe('Testing smart-power-button, created via script and dynamicaly changed it\'s properties', function () {
    'use strict';

    describe('if it created dynamicaly', function () {
        it('exists in DOM', function () {
            let powerButton = document.createElement('smart-power-button');
            document.body.appendChild(powerButton);
            expect(powerButton).toBeInDOM();

            document.body.removeChild(document.querySelector('smart-power-button'));
            expect(powerButton).not.toBeInDOM();
        });
        it('can set dynamically the "checked" property', function () {
            let powerButton = document.createElement('smart-power-button');
            document.body.appendChild(powerButton);

            powerButton.checked = true;
            expect(powerButton.checked).toBe(true);
            expect(powerButton).toHaveAttr('checked');

            powerButton.checked = false;
            expect(powerButton.checked).toBe(false);
            expect(powerButton).not.toHaveAttr('checked');

            document.body.removeChild(document.querySelector('smart-power-button'));
            expect(powerButton).not.toBeInDOM();
        });

        it('can set dynamically the "checked" attribute', function () {
            let powerButton = document.createElement('smart-power-button');
            document.body.appendChild(powerButton);

            powerButton.setAttribute('checked', 'true');
            expect(powerButton.checked).toBe(true);
            expect(powerButton).toHaveAttr('checked');

            document.body.removeChild(document.querySelector('smart-power-button'));
            expect(powerButton).not.toBeInDOM();
        });

        it('can set dynamically the "name" property', function () {
            let powerButton = document.createElement('smart-power-button');
            document.body.appendChild(powerButton);

            powerButton.name = 'Name';
            expect(powerButton.name).toBe('Name');
            expect(powerButton.getAttribute('name')).toBe('Name');

            document.body.removeChild(document.querySelector('smart-power-button'));
            expect(powerButton).not.toBeInDOM();
        });

        it('can set dynamically the "name" property', function () {
            let powerButton = document.createElement('smart-power-button');
            document.body.appendChild(powerButton);

            powerButton.setAttribute('name', 'Name');
            expect(powerButton.name).toBe('Name');
            expect(powerButton.getAttribute('name')).toBe('Name');

            document.body.removeChild(document.querySelector('smart-power-button'));
            expect(powerButton).not.toBeInDOM();
        });

        it('can set dynamically the "value" property', function () {
            let powerButton = document.createElement('smart-power-button');
            document.body.appendChild(powerButton);

            powerButton.value = 'Value';
            expect(powerButton.value).toBe('Value');
            expect(powerButton.getAttribute('value')).toBe('Value');

            document.body.removeChild(document.querySelector('smart-power-button'));
            expect(powerButton).not.toBeInDOM();
        });
        it('can set dynamically the "value" property', function () {
            let powerButton = document.createElement('smart-power-button');
            document.body.appendChild(powerButton);

            powerButton.setAttribute('value', 'Value');
            expect(powerButton.value).toBe('Value');
            expect(powerButton.getAttribute('value')).toBe('Value');

            document.body.removeChild(document.querySelector('smart-power-button'));
            expect(powerButton).not.toBeInDOM();
        });

        it('can set dynamically the "disabled" property', function () {
            let powerButton = document.createElement('smart-power-button');
            document.body.appendChild(powerButton);

            powerButton.disabled = true;
            expect(powerButton.disabled).toBe(true);
            expect(powerButton).toHaveAttr('disabled');

            powerButton.disabled = false;
            expect(powerButton.disabled).toBe(false);
            expect(powerButton).not.toHaveAttr('disabled');

            document.body.removeChild(document.querySelector('smart-power-button'));
            expect(powerButton).not.toBeInDOM();
        });
        it('can set the "disabled" property via "disabled" attribute', function () {
            let powerButton = document.createElement('smart-power-button');
            document.body.appendChild(powerButton);

            powerButton.setAttribute('disabled', 'true');
            expect(powerButton.disabled).toBe(true);
            expect(powerButton.getAttribute('disabled')).toBe('true');

            powerButton.removeAttribute('disabled');
            expect(powerButton.disabled).toBe(false);
            expect(powerButton).not.toHaveAttr('disabled');

            document.body.removeChild(document.querySelector('smart-power-button'));
            expect(powerButton).not.toBeInDOM();
        });

        it(' set properties in following sequence "checked", "disabled", "name", "value"', function () {
            let powerButton = document.createElement('smart-power-button');
            document.body.appendChild(powerButton);

            powerButton.setAttribute('checked', 'true');
            powerButton.setAttribute('disabled', 'true');
            powerButton.setAttribute('name', 'Name');
            powerButton.setAttribute('value', 'Value');

            expect(powerButton.checked).toBe(true);
            expect(powerButton.disabled).toBe(true);
            expect(powerButton.name).toBe('Name');
            expect(powerButton.value).toBe('Value');

            document.body.removeChild(document.querySelector('smart-power-button'));
            expect(powerButton).not.toBeInDOM();
        });

        it(' set properties in following sequence "name", "disabled", "value", "checked"', function () {
            let powerButton = document.createElement('smart-power-button');
            document.body.appendChild(powerButton);

            powerButton.setAttribute('name', 'Name');
            powerButton.setAttribute('disabled', 'true');
            powerButton.setAttribute('value', 'Value');
            powerButton.setAttribute('checked', 'true');

            expect(powerButton.checked).toBe(true);
            expect(powerButton.disabled).toBe(true);
            expect(powerButton.name).toBe('Name');
            expect(powerButton.value).toBe('Value');

            document.body.removeChild(document.querySelector('smart-power-button'));
            expect(powerButton).not.toBeInDOM();
        });
    });
});
