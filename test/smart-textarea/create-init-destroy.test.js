var describe,
    it,
    expect,
    document,
    beforeAll,
    afterAll;
describe('Testing smart-text-area created dynamicaly and destroyed', function () {
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

    describe('if the value can be set ', function () {
        it('via val() method', function () {
            let textArea = createTextArea();

            textArea.val('New value');
            expect(textArea.$.textarea.value.toString()).toBe('New value');

            removeTextArea(textArea)
        });

        it('via value property', function () {
            let textArea = createTextArea();

            textArea.value = 'New value';
            expect(textArea.$.textarea.value.toString()).toBe('New value');

            removeTextArea(textArea)
        });

        it('via value property in escaped mode', function () {
            let textArea = createTextArea();

            textArea.displayMode = 'escaped';
            textArea.value = ' ';
            expect(textArea.$.textarea.value.toString()).toBe('\\s');

            removeTextArea(textArea)
        });
    });

    describe('if the display mode is changed ', function () {
        it('from default mode to escaped mode', function () {
            let textArea = createTextArea();

            textArea.value = ' ';
            textArea.displayMode = 'escaped';
            expect(textArea.$.textarea.value.toString()).toBe('\\s');

            removeTextArea(textArea)
        });

        it('from escaped mode to default mode', function () {
            let textArea = createTextArea();

            textArea.value = ' ';
            textArea.displayMode = 'escaped';
            textArea.displayMode = 'default';
            expect(textArea.$.textarea.value.toString()).toBe(' ');

            removeTextArea(textArea)
        });
    });

    describe('if property is changed ', function () {
        it('readonly affect to inner text area\'s readonly ', function () {
            let textArea = createTextArea();

            textArea.readonly = true;
            expect(textArea.$.textarea.readonly).toBe(true);

            textArea.readonly = false;
            expect(textArea.$.textarea.readonly).toBe(false);

            removeTextArea(textArea);
        });
    });

    describe('if rows and cols properties are changed ', function () {
        it(' on rows changed the internal text area\'s rows is changed ', function () {
            let textArea = createTextArea();

            textArea.cols = 5;
            expect(textArea.$.textarea.cols).toBe(5);

            removeTextArea(textArea);
        });

        it(' on rows changed the internal text area\'s rows is changed ', function () {
            let textArea = createTextArea();

            textArea.rows = 5;
            expect(textArea.$.textarea.rows).toBe(5);

            removeTextArea(textArea);
        });
    });


    describe('if selectionStart and selectionEnd properties are changed ', function () {
        it(' on rows changed the internal text area\'s rows is changed ', function () {
            let textArea = createTextArea();

            textArea.value = 'Test';
            textArea.selectionStart = 0;
            textArea.selectionEnd = 2;
            textArea.focus();

            expect(textArea.getSelected()).toBe('Te');

            removeTextArea(textArea);
        });
    });

    describe('testing vertical scrollbar\'s appearance ', function () {
        it(' by default, text area do not have scrollbar when the text fits in the text area', function () {
            let textArea = createTextArea();
            textArea.value = 'Test';
            textArea.style.width = '50px';
            textArea.style.height = '50px';
            let scrollbarStyles = window.getComputedStyle(textArea.$.verticalScrollBar);

            expect(scrollbarStyles.getPropertyValue('display')).toBe('none');
            removeTextArea(textArea);
        });
        it(' by default, text area do not have scrollbar when the text is longer and not fits in the text area', function () {
            let textArea = createTextArea();
            textArea.value = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at mattis urna. Morbi quis nulla accumsan metus gravida ultricies.';
            textArea.style.width = '50px';
            textArea.style.height = '50px';
            let scrollbarStyles = window.getComputedStyle(textArea.$.verticalScrollBar);

            expect(scrollbarStyles.getPropertyValue('display')).toBe('none');
            removeTextArea(textArea);
        });
        it(' by allowVerticalScrollbar=true, text area do not have scrollbar when the text fits in the text area', function () {
            let textArea = createTextArea();
            textArea.value = 'Test';
            textArea.style.width = '50px';
            textArea.style.height = '50px';
            textArea.allowVerticalScrollbar = true;
            let scrollbarStyles = window.getComputedStyle(textArea.$.verticalScrollBar);

            expect(scrollbarStyles.getPropertyValue('display')).toBe('none');
            removeTextArea(textArea);
        });
       /* it(' by allowVerticalScrollbar=true, text area to have scrollbar when the text is longer and not fits in the text area', function () { // not working as expected, because of the timeout
            let textArea = createTextArea();
            textArea.value = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at mattis urna. Morbi quis nulla accumsan metus gravida ultricies.';
            textArea.style.width = '50px';
            textArea.style.height = '50px';
            textArea.allowVerticalScrollbar = true;
            textArea.value = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at mattis urna. Morbi quis nulla accumsan metus gravida';
            let scrollbarStyles = window.getComputedStyle(textArea.$.verticalScrollBar);

            expect(scrollbarStyles.getPropertyValue('display')).toBe('none');
            removeTextArea(textArea);
        });*/
    });
});
