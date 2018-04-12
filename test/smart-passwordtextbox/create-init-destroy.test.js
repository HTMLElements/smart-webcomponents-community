var describe,
    it,
    expect,
    document,
    beforeAll,
    afterAll;
describe('Testing smart-password-text-box created dynamicaly and destroyed', function () {
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

    describe('if the value can be set ', function () {
        it('via value property', function () {
            const passwordTextBox = createPasswordTextBox();

            passwordTextBox.value = 'New value';
            expect(passwordTextBox.$.input.value.toString()).toBe('New value');

            removePasswordTextBox(passwordTextBox);
        });
    });

   describe('if tooltipPosition is changed ', function () {
       it(' to "right"', function () {
           const passwordTextBox = createPasswordTextBox();

           passwordTextBox.tooltipPosition = 'right';
           expect(passwordTextBox.$.tooltip.position).toBe('right');
           passwordTextBox.tooltipPosition = 'top';
           expect(passwordTextBox.$.tooltip.position).toBe('top');
           passwordTextBox.tooltipPosition = 'left';
           expect(passwordTextBox.$.tooltip.position).toBe('left');
           passwordTextBox.tooltipPosition = 'bottom';
           expect(passwordTextBox.$.tooltip.position).toBe('bottom');
           removePasswordTextBox(passwordTextBox);
       });
   });

   describe('if tooltipTemplate is changed ', function () {
       it(' to valid template', function () {
           const passwordTextBox = createPasswordTextBox(),
               template = document.createElement('template');

           document.body.appendChild(template);

           template.id = 'passwordStrengthTemplate';
           template.innerHTML = '<span class="test-template">{{strength}}</span>';

           passwordTextBox.tooltipTemplate = 'passwordStrengthTemplate';

           expect(passwordTextBox.$.tooltip.getElementsByClassName('test-template')[0].innerHTML).toBe('<span class="password-strength-label">Password strength:</span><span class="password-strength-value">short</span>');
           removePasswordTextBox(passwordTextBox);
       });
   });
});
