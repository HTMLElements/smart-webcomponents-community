var describe,
    it,
    expect,
    document;
describe('Testing smart-text-area methods', function () {
    'use strict';

    function createTextArea() {
        const textArea = document.createElement('smart-text-area');

        document.body.appendChild(textArea);
        expect(textArea).toBeInDOM();

        return textArea;
    }

    function removeTextArea(textArea) {
        document.body.removeChild(document.querySelector('smart-text-area'));
        expect(textArea).not.toBeInDOM();
    }

    describe('Testing getSelected() method ', function () {
         it('on empty text area the selection to be empty string', function () {
             const textArea = createTextArea(),
                 selectedText = textArea.getSelected();

             expect(selectedText).toBe('');
             removeTextArea(textArea);
        });

        it('on filled text area without selection to be returned an empty string', function () {
            const textArea = createTextArea();
            textArea.value = 'test';
            const selectedText = textArea.getSelected();

            expect(selectedText).toBe('');
            removeTextArea(textArea);
        });

        it('on filled text area with selection to be returned the swelected text', function () {
            const textArea = createTextArea(),
                testValue = 'Test value';
            let selectedText;

            textArea.value = testValue;
            textArea.select();
            selectedText = textArea.getSelected();

            textArea.select({start:0, end:1});
            selectedText = textArea.getSelected();

            expect(selectedText).toBe(testValue[0]);
            removeTextArea(textArea);
        });
    });

    describe('Testing setFocusable() method ', function () {
        it(' with parameter true to have tabindex', function () {
            const textArea = createTextArea();

            textArea.setFocusable(true);

            expect(textArea.getAttribute('tabindex')).toBe('0');
            removeTextArea(textArea);
        });

        it(' without parameter do not have tabindex', function () {
            const textArea = createTextArea();

            textArea.setFocusable();

            expect(textArea.getAttribute('tabindex')).toBe(null);
            removeTextArea(textArea);
        });
    });

    describe('Testing reset() method ', function () { // the reset method to be updated
        it(' in default displayMode', function () {
            const textArea = createTextArea();

            textArea.value = 'New value';
            textArea.reset();

            expect(textArea.value).toBe('');
            removeTextArea(textArea);
        });

        it(' in escaped displayMode', function () {
            const textArea = createTextArea();

            textArea.value = 'New value';
            textArea.displayMode = 'escaped';
            textArea.reset();

            expect(textArea.value).toBe('');
            removeTextArea(textArea);
        });
    });

    describe('Testing val() method ', function () {
        it(' in default displayMode', function () {
            const textArea = createTextArea();

            textArea.value = 'New value';

            expect(textArea.val()).toBe('New value');
            expect(textArea.val('default')).toBe('New value');
            removeTextArea(textArea);
        });
        it(' in escaped displayMode', function () {
            const textArea = createTextArea();

            textArea.value = 'New value';

            expect(textArea.val('escaped')).toBe('New\\svalue');
            removeTextArea(textArea);
        });
    });

    describe('Testing _checkMissingModules() ', function () {
        it(' in default displayMode', function () {
            const textArea = createTextArea(),
                scrollbar = Smart.ScrollBar;
            Smart.ScrollBar = undefined;

            expect(function () { textArea._checkMissingModules(); }).toThrow();

            Smart.ScrollBar = scrollbar;
            removeTextArea(textArea);
        });
    });

    describe('Testing _handlePointerInEscapedSymbol() ', function () {
        it(' in default displayMode do not do nothing', function () {
            const textArea = createTextArea();

            textArea.value = 'Test value';
            textArea.$.textarea.selectionStart = 0;
            textArea.$.textarea.selectionEnd = 0;
            textArea._handlePointerInEscapedSymbol();

            expect(textArea.$.textarea.selectionStart).toBe(0);
            expect(textArea.$.textarea.selectionEnd).toBe(0);

            removeTextArea(textArea);
        });

        it(' in escaped displayMode do not do nothing if the carret is not in escaped symbol', function () {
            const textArea = createTextArea();

            textArea.value = 'Test value';
            textArea.displayMode = 'escaped';
            textArea._handlePointerInEscapedSymbol();

            expect(textArea.$.textarea.selectionStart).toBe(11);
            expect(textArea.$.textarea.selectionEnd).toBe(11);

            removeTextArea(textArea);
        });

        it(' in escaped displayMode the carret to be moved to left if is in esscaped symbol', function () {
            const textArea = createTextArea();

            textArea.value = 'Test value';
            textArea.displayMode = 'escaped';
            textArea.$.textarea.selectionStart = 5;
            textArea.$.textarea.selectionEnd = 5;
            textArea._handlePointerInEscapedSymbol();

            expect(textArea.$.textarea.selectionStart).toBe(4);
            expect(textArea.$.textarea.selectionEnd).toBe(4);

            removeTextArea(textArea);
        });

        it(' in escaped displayMode if there is a selection - first symbol ', function () {
            const textArea = createTextArea();

            textArea.value = 'Test value';
            textArea.displayMode = 'escaped';
            textArea.$.textarea.selectionStart = 5;
            textArea.$.textarea.selectionEnd = 8;
            textArea._handlePointerInEscapedSymbol();

            expect(textArea.$.textarea.selectionStart).toBe(4);
            expect(textArea.$.textarea.selectionEnd).toBe(8);

            removeTextArea(textArea);
        });
    });
});
