var describe,
    it,
    expect,
    document;

describe('Testing smart-accordion event handlers', function () {
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

    describe(' testing _containerResizeHandler', function () {
        it(' to resize the whole textarea and to controll scrollbars', function () {
            const textArea = createTextArea();

            textArea._containerResizeHandler();

            removeTextArea(textArea);
        });
    });

    describe(' testing _focusHandler', function () { //  that.focused = event.type === 'focus' ? true : false; (is this necessairy?)
        it(' with selectAllOnFocus on enabled Text Area the whole text to be selected', function () {
            const textArea = createTextArea(),
                event = { type: 'focus' };

            textArea.value = 'test';
            textArea.selectAllOnFocus = true;
            textArea._focusHandler(event);

            expect(textArea.getSelected()).toBe('test');

            removeTextArea(textArea);
        });

        it(' with selectAllOnFocus on disabled Text Area the text do not be selected', function () {
            const textArea = createTextArea(),
                event = { type: 'focus' };

            textArea.disabled = true;
            textArea.value = 'test';
            textArea.selectAllOnFocus = true;
            textArea._focusHandler(event);

            expect(textArea.getSelected()).toBe('');

            removeTextArea(textArea);
        });
    });

   describe(' testing _horizontalScrollbarHandler and _verticalScrollbarHandler', function () {
        it(' ', function () {
            const textArea = createTextArea(),
                event = { type: 'focus' };

            textArea._horizontalScrollbarHandler(event);
            textArea._verticalScrollbarHandler(event);

            removeTextArea(textArea);
        });

         it(' ', function () {
             const textArea = createTextArea(),
                 event = { type: 'focus', stopPropagation: function () { }, detail: { value: 0 } };

            textArea.style.width = '50px';
            textArea.style.height = '50px';

            textArea.value = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.';
            textArea.allowHorizontalScrollbar = true;
            textArea.allowVerticalScrollbar = true;

            textArea._horizontalScrollbarHandler(event);
            textArea._verticalScrollbarHandler(event);

            removeTextArea(textArea);
        });
    });

    describe(' testing _textAreaSelectHandler', function () {
        it(' after select in the textarea  to be returned the right selection ', function () {
            const textArea = createTextArea();

            textArea.value = 'test';
            textArea.$.textarea.selectionStart = 0;
            textArea.$.textarea.selectionEnd = 2;
            textArea._textAreaSelectHandler();

            expect(textArea.getSelected()).toBe('te');

            removeTextArea(textArea);
        });
    });

    describe(' testing resize handlers', function () {
        it(' if the widget is not resizable it\'s dimmensions to remain unchanged', function () {
            const textArea = createTextArea(),
                event = { clientX: 60, clientY: 60, originalEvent: {} };

            textArea.style.width = '50px';
            textArea.style.height = '50px';

            textArea._resizeDownHandler();
            textArea._resizeMoveHandler(event);
            textArea._upHandler(event);

            expect(textArea.style.width).toBe('50px');
            expect(textArea.style.height).toBe('50px');

            removeTextArea(textArea);
        });

        it(' if the widget is resizable it\'s dimmensions to be changed', function () {
            const textArea = createTextArea(),
                event = { clientX: 68, clientY: 68, originalEvent: {} };

            textArea.style.width = '50px';
            textArea.style.height = '50px';

            textArea.resizable = true;

            textArea._resizeDownHandler();
            textArea._resizeMoveHandler(event);
            textArea._upHandler(event);

            expect(textArea.style.width).toBe('60px');
            expect(textArea.style.height).toBe('60px');

            removeTextArea(textArea);
        });
    });

    describe(' testing _mouseWheelHandler', function () {
        it(' ', function () {
            const textArea = createTextArea(),
                event = { deltaX: 20, deltaY: 15 };

            textArea.allowVerticalScrollbar = true;
            textArea._mouseWheelHandler(event);

            removeTextArea(textArea);
        });
    });

    describe(' testing _mouseEventsHandler', function () {
        it(' ', function () {
            const textArea = createTextArea();
            let event = { type: 'mouseenter' };

            textArea._mouseEventsHandler(event);

            event = { type: 'mouseleave' };

            textArea._mouseEventsHandler(event);

            removeTextArea(textArea);
        });
    });

    describe(' testing _keyUpHandler', function () {
        it(' ', function () {
            const textArea = createTextArea();
            let event = { key: 'ArrowLeft' };

            textArea.selectionStart = 1;
            textArea.selectionEnd = 1;
            textArea.displayMode = 'escaped';
            textArea._keyUpHandler(event);

            textArea.displayMode = 'default';
           // expect(textArea.selectionStart).toBe(0);

            textArea.displayMode = 'escaped';
            event.key = 'ArrowRight';
            textArea._keyUpHandler(event);

            textArea.displayMode = 'default';
          //  expect(textArea.selectionStart).toBe(1);

            removeTextArea(textArea);
        });
    });

    describe(' testing _keyDownHandler', function () {
        it(' PageUp moves the text to the beginning ', function () {
            const textArea = createTextArea(),
                event = { key: 'PageUp' };

            textArea._keyDownHandler(event);

            removeTextArea(textArea);
        });

        it(' PageUp moves the text to the beginning ', function () {
            const textArea = createTextArea(),
                event = { key: 'PageDown' };

            textArea._keyDownHandler(event);

            removeTextArea(textArea);
        });

        it(' PageUp moves the text to the beginning ', function () {
            const textArea = createTextArea(),
                event = { key: 'Enter' };

            textArea._keyDownHandler(event);

            removeTextArea(textArea);
        });

        it(' PageUp moves the text to the beginning ', function () {
            const textArea = createTextArea(),
                event = { key: ' ' };

            textArea._keyDownHandler(event);

            removeTextArea(textArea);
        });

        it(' PageUp moves the text to the beginning ', function () {
            const textArea = createTextArea(),
                event = { key: 'Backspace' };

            textArea._keyDownHandler(event);

            removeTextArea(textArea);
        });
    });

    describe(' testing _keyDownHandler in escaped displaymode', function () {
        it(' PageUp moves the text to the beginning ', function () {
            const textArea = createTextArea(),
                event = { key: 'PageUp' };

            textArea.displayMode = 'escaped';
            textArea._keyDownHandler(event);

            removeTextArea(textArea);
        });

        it(' PageUp moves the text to the beginning ', function () {
            const textArea = createTextArea(),
                event = { key: 'PageDown' };

            textArea.displayMode = 'escaped';
            textArea._keyDownHandler(event);

            removeTextArea(textArea);
        });

        it(' PageUp moves the text to the beginning ', function () {
            const textArea = createTextArea(),
                event = { key: 'Enter', preventDefault: function () { } };

            textArea.displayMode = 'escaped';
            textArea._keyDownHandler(event);

            removeTextArea(textArea);
        });

        it(' PageUp moves the text to the beginning ', function () {
            const textArea = createTextArea(),
                event = { key: ' ', preventDefault: function () { } };

            textArea.displayMode = 'escaped';
            textArea._keyDownHandler(event);

            removeTextArea(textArea);
        });

        it(' PageUp moves the text to the beginning ', function () {
            const textArea = createTextArea(),
                event = { key: 'Backspace' };

            textArea.displayMode = 'escaped';
            textArea._keyDownHandler(event);

            removeTextArea(textArea);
        });
    });

    describe(' testing _textAreaChangeHandler', function () {
        it(' ', function () {
            const textArea = createTextArea(),
                event = { clipboardData: { getData: function () { return 'Clipboard data'; } }, preventDefault: function () { } };

            textArea.value = 'Test value';
            textArea.displayMode = 'escaped';
            textArea.$.textarea.selectionStart = 0;
            textArea.$.textarea.selectionEnd = 5;
            textArea._textAreaChangeHandler(event);

            removeTextArea(textArea);
        });
    });

    describe(' testing _upHandler', function () {
        it(' on disabled ', function () {
            const textArea = createTextArea();

            textArea.disabled = true;
            textArea._upHandler();

            removeTextArea(textArea);
        });

        it(' when the event is triggered over the textarea', function () {
            const textArea = createTextArea(),
                event = { originalEvent: { target: textArea.$.textarea } };

            textArea._upHandler(event);

            removeTextArea(textArea);
        });
    });
});
