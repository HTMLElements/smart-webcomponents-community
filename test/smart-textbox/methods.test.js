var describe,
    it,
    expect,
    document;
describe('Testing smart-text-box methods', function () {
    'use strict';

    function createTextBox() {
        const textBox = document.createElement('smart-text-box'),
            listItem1 = document.createElement('smart-list-item'),
            listItem2 = document.createElement('smart-list-item');

        document.body.appendChild(textBox);
        listItem1.label = 'Iitem 1';
        listItem2.label = 'Iitem 2';
        textBox.$.listBox.appendChild(listItem1);
        textBox.$.listBox.appendChild(listItem2);

        expect(textBox).toBeInDOM();

        return textBox;
    }

    function removeTextBox(textBox) {
        document.body.removeChild(document.querySelector('smart-text-box'));
        expect(textBox).not.toBeInDOM();
    }

    describe('Testing "unfocusable" property - ', function () {
        it('setting to false to have tabindex', function () {
            const textBox = createTextBox();

            textBox.unfocusable = false;

            expect(textBox.$.input.getAttribute('tabindex')).toBe(null);
            removeTextBox(textBox);
        });

        it('setting to false to not have tabindex', function () {
            const textBox = createTextBox();

            textBox.unfocusable = true;

            expect(textBox.$.input.getAttribute('tabindex')).toBe('-1');
            removeTextBox(textBox);
        });
    });

    describe('Testing reset method ', function () {
        it(' in default displayMode', function () {
            const textBox = createTextBox();

            textBox.value = 'New value';
            textBox.reset();

            expect(textBox.value).toBe('');
            removeTextBox(textBox);
        });

        it(' in escaped displayMode', function () {
            const textBox = createTextBox();

            textBox.value = 'New value';
            textBox.displayMode = 'escaped';
            textBox.reset();

            expect(textBox.value).toBe('');
            removeTextBox(textBox);
        });
    });

    describe('Testing open method ', function () {
        it(' if autoComplete is none', function () {
            const textBox = createTextBox();

            textBox.autoComplete = 'none';

            textBox.open();
            expect(window.getComputedStyle(textBox, null).getPropertyValue("height")).toBe('30px');

            textBox.close();
            expect(window.getComputedStyle(textBox, null).getPropertyValue("height")).toBe('30px');

            removeTextBox(textBox);
        });


        it(' if data source is not set', function () {
            const textBox = createTextBox();

            textBox.open();
            expect(window.getComputedStyle(textBox, null).getPropertyValue("height")).toBe('30px');

            textBox.close();
            expect(window.getComputedStyle(textBox, null).getPropertyValue("height")).toBe('30px');

            removeTextBox(textBox);
        });

        it(' in escaped displayMode', function () {
            const textBox = createTextBox();

            textBox.dataSource = ['one', 'two'];
            textBox.autoComplete = 'manual';
            textBox.open();
            expect(window.getComputedStyle(textBox, null).getPropertyValue("height")).toBe('30px');

            textBox.close();
            expect(window.getComputedStyle(textBox, null).getPropertyValue("height")).toBe('30px');

            removeTextBox(textBox);
        });
    });

    describe('Testing _handleSelectedText private function ', function () {
        it(' in default displayMode', function () {
            const textBox = createTextBox();

            textBox.value = 'New value';
            textBox.selectionStart = 0;
            textBox.selectionEnd = 5;
            textBox._handleSelectedText();

            removeTextBox(textBox);
        });
    });

    describe('Testing _handlePointerInEscapedSymbol private function ', function () {
        it(' in escaped displayMode without selection', function () {
            const textBox = createTextBox();

            textBox.value = 'New value';
            textBox.displayMode = 'escaped';
            textBox.$.input.selectionStart = textBox.$.input.selectionEnd = 4;

            textBox._handlePointerInEscapedSymbol('next');

            expect(textBox.$.input.selectionStart).toBe(5);
            expect(textBox.$.input.selectionEnd).toBe(5);

            removeTextBox(textBox);
        });

        it(' in escaped displayMode with selection', function () {
            const textBox = createTextBox();

            textBox.value = 'New value';
            textBox.displayMode = 'escaped';
            textBox.$.input.selectionStart = 4;
            textBox.$.input.selectionEnd = 5;

            textBox._handlePointerInEscapedSymbol('next');

            expect(textBox.$.input.selectionStart).toBe(3);
            expect(textBox.$.input.selectionEnd).toBe(5);

            removeTextBox(textBox);
        });
    });
});
