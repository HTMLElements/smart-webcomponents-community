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
        it('can set dynamically the "checked" property', function () {
            let radioButton = document.createElement('smart-radio-button');
            document.body.appendChild(radioButton);

            radioButton.checked = true;
            expect(radioButton.checked).toBe(true);
            expect(radioButton.getAttribute('checked')).toBe('');

            radioButton.checked = false;
            expect(radioButton.checked).toBe(true);
            expect(radioButton.getAttribute('checked')).toBe('');

            document.body.removeChild(document.querySelector('smart-radio-button'));
            expect(radioButton).not.toBeInDOM();
        });

        it('can set dynamically the "checked" attribute', function () {
            let radioButton = document.createElement('smart-radio-button');
            document.body.appendChild(radioButton);

            radioButton.setAttribute('checked', 'true');
            expect(radioButton.checked).toBe(true);
            expect(radioButton.getAttribute('checked')).toBe('true');

            document.body.removeChild(document.querySelector('smart-radio-button'));
            expect(radioButton).not.toBeInDOM();
        });

        it('can set dynamically the "name" property', function () {
            let radioButton = document.createElement('smart-radio-button');
            document.body.appendChild(radioButton);

            radioButton.name = 'Name';
            expect(radioButton.name).toBe('Name');
            expect(radioButton.getAttribute('name')).toBe('Name');

            document.body.removeChild(document.querySelector('smart-radio-button'));
            expect(radioButton).not.toBeInDOM();
        });

        it('can set the "name" property via setAttribute', function () {
            let radioButton = document.createElement('smart-radio-button');
            document.body.appendChild(radioButton);

            radioButton.setAttribute('name', 'Name');
            expect(radioButton.name).toBe('Name');
            expect(radioButton.getAttribute('name')).toBe('Name');

            document.body.removeChild(document.querySelector('smart-radio-button'));
            expect(radioButton).not.toBeInDOM();
        });

        it('can set dynamically the "value" property', function () {
            let radioButton = document.createElement('smart-radio-button');
            document.body.appendChild(radioButton);

            radioButton.value = 'Value';
            expect(radioButton.value).toBe('Value');
            expect(radioButton.getAttribute('value')).toBe('Value');

            document.body.removeChild(document.querySelector('smart-radio-button'));
            expect(radioButton).not.toBeInDOM();
        });
        it('can set the "value" property via setAttribute', function () {
            let radioButton = document.createElement('smart-radio-button');
            document.body.appendChild(radioButton);

            radioButton.setAttribute('value', 'Value');
            expect(radioButton.value).toBe('Value');
            expect(radioButton.getAttribute('value')).toBe('Value');

            document.body.removeChild(document.querySelector('smart-radio-button'));
            expect(radioButton).not.toBeInDOM();
        });

        it('can set dynamically the "disabled" property', function () {
            let radioButton = document.createElement('smart-radio-button');
            document.body.appendChild(radioButton);

            radioButton.disabled = true;
            expect(radioButton.disabled).toBe(true);
            expect(radioButton.getAttribute('disabled')).toBe('');

            radioButton.disabled = false;
            expect(radioButton.disabled).toBe(false);
            expect(radioButton.getAttribute('disabled')).toBe(null);

            document.body.removeChild(document.querySelector('smart-radio-button'));
            expect(radioButton).not.toBeInDOM();
        });
        it('can set the "disabled" property via setAttribute', function () {
            let radioButton = document.createElement('smart-radio-button');
            document.body.appendChild(radioButton);

            radioButton.setAttribute('disabled', 'true');
            expect(radioButton.disabled).toBe(true);
            expect(radioButton.getAttribute('disabled')).toBe('true');

            radioButton.removeAttribute('disabled');
            expect(radioButton.disabled).toBe(false);
            expect(radioButton.getAttribute('disabled')).toBe(null);

            document.body.removeChild(document.querySelector('smart-radio-button'));
            expect(radioButton).not.toBeInDOM();
        });

        it(' set properties in following sequence "checked", "disabled", "name", "value"', function () {
            let radioButton = document.createElement('smart-power-button');
            document.body.appendChild(radioButton);

            radioButton.setAttribute('checked', 'true');
            radioButton.setAttribute('disabled', 'true');
            radioButton.setAttribute('name', 'Name');
            radioButton.setAttribute('value', 'Value');

            expect(radioButton.checked).toBe(true);
            expect(radioButton.disabled).toBe(true);
            expect(radioButton.name).toBe('Name');
            expect(radioButton.value).toBe('Value');

            document.body.removeChild(document.querySelector('smart-power-button'));
            expect(radioButton).not.toBeInDOM();
        });

        it(' set properties in following sequence "name", "disabled", "value", "checked"', function () {
            let radioButton = document.createElement('smart-power-button');
            document.body.appendChild(radioButton);

            radioButton.setAttribute('name', 'Name');
            radioButton.setAttribute('disabled', 'true');
            radioButton.setAttribute('value', 'Value');
            radioButton.setAttribute('checked', 'true');

            expect(radioButton.checked).toBe(true);
            expect(radioButton.disabled).toBe(true);
            expect(radioButton.name).toBe('Name');
            expect(radioButton.value).toBe('Value');

            document.body.removeChild(document.querySelector('smart-power-button'));
            expect(radioButton).not.toBeInDOM();
        });

        it('can set dynamically dynamically button group', function () {
            let radioButton1 = document.createElement('smart-radio-button');
            let radioButton2 = document.createElement('smart-radio-button');
            radioButton1.groupName = 'group';
            radioButton2.groupName = 'group';
            document.body.appendChild(radioButton1);
            document.body.appendChild(radioButton2);


            expect(radioButton1.checked).toBe(false);
            expect(radioButton1.getAttribute('checked')).toBe(null);
            expect(radioButton2.checked).toBe(false);
            expect(radioButton2.getAttribute('checked')).toBe(null);

            radioButton1.checked = true;
            expect(radioButton1.checked).toBe(true);
            expect(radioButton1.getAttribute('checked')).toBe('');
            expect(radioButton2.checked).toBe(false);
            expect(radioButton2.getAttribute('checked')).toBe(null);

           /* radioButton2.checked = true;
            expect(radioButton1.checked).toBe(false);//
            expect(radioButton1.getAttribute('checked')).toBe(null);//
            expect(radioButton2.checked).toBe(true);
            expect(radioButton2.getAttribute('checked')).toBe('');

            radioButton1.checked = true;
            expect(radioButton1.checked).toBe(true);
            expect(radioButton1.getAttribute('checked')).toBe('');
            expect(radioButton2.checked).toBe(false);//
            expect(radioButton2.getAttribute('checked')).toBe(null);//*/

            document.body.removeChild(radioButton1);
            document.body.removeChild(radioButton2);
            expect(radioButton1).not.toBeInDOM();
            expect(radioButton2).not.toBeInDOM();
        });
    });
});
