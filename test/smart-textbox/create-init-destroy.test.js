var describe,
    it,
    expect,
    document,
    beforeAll,
    afterAll;
describe('Testing smart-text-box created dynamicaly and destroyed', function () {
    'use strict';
    function createTextBox() {
        const textBox = document.createElement('smart-text-box');

        document.body.appendChild(textBox);
        expect(textBox).toBeInDOM();

        return textBox;
    }

    function removeTextBox(textBox) {
        document.body.removeChild(document.querySelector('smart-text-box'));
        expect(textBox).not.toBeInDOM();
    }

    describe('if the value can be set ', function () {
        it('via value property', function () {
            let textBox = createTextBox();

            textBox.value = 'New value';
            expect(textBox.$.input.value.toString()).toBe('New value');

            removeTextBox(textBox);
        });
    });

    describe('if new hint could be set ', function () {
        it('as text', function () {
            let textBox = createTextBox();

            textBox.hint = 'New hint';
            textBox.hint = null;

            expect(textBox.$.hint.innerHTML).toBe('');

            removeTextBox(textBox);
        });

        it('as callback function', function () {
            let textBox = createTextBox();

            textBox.hint = function (value, container) {
                container.innerHTML = 'Error message';
                return true;
            };

            expect(textBox.$.hint.innerHTML).toBe('Error message');

            removeTextBox(textBox);
        });
    });
});
