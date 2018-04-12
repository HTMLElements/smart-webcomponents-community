var describe,
    it,
    expect,
    document,
    beforeAll,
    afterAll;

describe('Testing smart-led, created via script and dynamicaly changed it\'s properties', function () {
    'use strict';

    describe('if it created dynamicaly', function () {
        it('exists in DOM', function () {
            let LED = document.createElement('smart-led');
            document.body.appendChild(LED);
            expect(LED).toBeInDOM();

            document.body.removeChild(document.querySelector('smart-led'));
            expect(LED).not.toBeInDOM();
        });
        it('can set dynamically the "checked" property', function () {
            let LED = document.createElement('smart-led');
            document.body.appendChild(LED);

            LED.checked = true;
            expect(LED.checked).toBe(true);

            LED.checked = false;
            expect(LED.checked).toBe(false);

            document.body.removeChild(document.querySelector('smart-led'));
            expect(LED).not.toBeInDOM();
        });

        it('can set dynamically the "name" property', function () {
            let LED = document.createElement('smart-led');
            document.body.appendChild(LED);

            LED.name = 'Name';
            expect(LED.name).toBe('Name');
            expect(LED.getAttribute('name')).toBe('Name');

            document.body.removeChild(document.querySelector('smart-led'));
            expect(LED).not.toBeInDOM();
        });

        it('can set dynamically the "name" property', function () {
            let LED = document.createElement('smart-led');
            document.body.appendChild(LED);

            LED.setAttribute('name', 'Name');
            expect(LED.name).toBe('Name');
            expect(LED.getAttribute('name')).toBe('Name');

            document.body.removeChild(document.querySelector('smart-led'));
            expect(LED).not.toBeInDOM();
        });

        it('can set dynamically the "value" property', function () {
            let LED = document.createElement('smart-led');
            document.body.appendChild(LED);

            LED.value = 'Value';
            expect(LED.value).toBe('Value');
            expect(LED.getAttribute('value')).toBe('Value');

            document.body.removeChild(document.querySelector('smart-led'));
            expect(LED).not.toBeInDOM();
        });
        it('can set dynamically the "value" property', function () {
            let LED = document.createElement('smart-led');
            document.body.appendChild(LED);

            LED.setAttribute('value', 'Value');
            expect(LED.value).toBe('Value');
            expect(LED.getAttribute('value')).toBe('Value');

            document.body.removeChild(document.querySelector('smart-led'));
            expect(LED).not.toBeInDOM();
        });

        it('can set dynamically the "disabled" property', function () {
            let LED = document.createElement('smart-led');
            document.body.appendChild(LED);

            LED.disabled = true;
            expect(LED.disabled).toBe(true);

            LED.disabled = false;
            expect(LED.disabled).toBe(false);

            document.body.removeChild(document.querySelector('smart-led'));
            expect(LED).not.toBeInDOM();
        });

        it(' set properties in following sequence "checked", "disabled", "name", "value"', function () {
            let LED = document.createElement('smart-led');
            document.body.appendChild(LED);

            LED.setAttribute('checked', 'true');
            LED.setAttribute('disabled', 'true');
            LED.setAttribute('name', 'Name');
            LED.setAttribute('value', 'Value');

            expect(LED.checked).toBe(true);
            expect(LED.disabled).toBe(true);
            expect(LED.name).toBe('Name');
            expect(LED.value).toBe('Value');

            document.body.removeChild(document.querySelector('smart-led'));
            expect(LED).not.toBeInDOM();
        });

        it(' set properties in following sequence "name", "disabled", "value", "checked"', function () {
            let LED = document.createElement('smart-led');
            document.body.appendChild(LED);

            LED.setAttribute('name', 'Name');
            LED.setAttribute('disabled', 'true');
            LED.setAttribute('value', 'Value');
            LED.setAttribute('checked', 'true');

            expect(LED.checked).toBe(true);
            expect(LED.disabled).toBe(true);
            expect(LED.name).toBe('Name');
            expect(LED.value).toBe('Value');

            document.body.removeChild(document.querySelector('smart-led'));
            expect(LED).not.toBeInDOM();
        });
    });
});
