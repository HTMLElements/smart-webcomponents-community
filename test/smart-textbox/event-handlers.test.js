var describe,
    it,
    expect,
    document;

describe('Testing smart-text-box event handlers', function () {
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


    describe(' testing _focusHandler', function () {
        it(' with selectAllOnFocus on enabled Text Box the whole text to be selected', function () {
            const textBox = createTextBox(),
                event = { type: 'focus' };

            textBox.value = 'test';
            textBox.selectAllOnFocus = true;
            textBox._focusHandler(event);

            expect(textBox.$.input.selectionStart).toBe(0);
            expect(textBox.$.input.selectionEnd).toBe(4);

            removeTextBox(textBox);
        });

        it(' with selectAllOnFocus on disabled Text Box the text do not be selected', function () {
            const textBox = createTextBox(),
                event = { type: 'focus' };

            textBox.disabled = true;
            textBox.value = 'test';
            textBox.selectAllOnFocus = true;
            textBox._focusHandler(event);

            expect(textBox.$.input.selectionStart).toBe(4);
            expect(textBox.$.input.selectionEnd).toBe(4);

            removeTextBox(textBox);
        });

        it(' on blur', function () {
            const textBox = createTextBox(),
                event = { type: 'blur' };

            textBox.disabled = true;
            textBox.value = 'test';
            textBox.selectAllOnFocus = true;
            textBox._focusHandler(event);

            expect(textBox.$.input.selectionStart).toBe(4);
            expect(textBox.$.input.selectionEnd).toBe(4);

            removeTextBox(textBox);
        });

        it(' on blur', function () {
            const textBox = createTextBox(),
                event = { type: 'blur' };

            textBox.disabled = true;
            textBox.value = 'aa';
            textBox.selectAllOnFocus = true;
            textBox.autoComplete = 'auto';
            textBox._focusHandler(event);

            expect(textBox.$.input.selectionStart).toBe(2);
            expect(textBox.$.input.selectionEnd).toBe(2);

            removeTextBox(textBox);
        });
    });

   describe(' testing _textBoxSelectHandler', function () {
       it(' after select in the textBox to be returned the right selection ', function () {
            const textBox = createTextBox();

            textBox.value = 'test';
            textBox.$.input.selectionStart = 0;
            textBox.$.input.selectionEnd = 2;

            textBox.disabled = true;
            textBox._textBoxSelectHandler();

            textBox.disabled = false;
            textBox._textBoxSelectHandler();

            expect(textBox.selectionStart).toBe(0);
            expect(textBox.selectionEnd).toBe(2);

            removeTextBox(textBox);
        });
    });

    describe(' testing _mouseEventsHandler', function () {
        it(' ', function () {
            const textBox = createTextBox();
            let event = { type: 'mouseenter' };

            textBox._mouseEventsHandler(event);

            event = { type: 'mouseleave' };

            textBox._mouseEventsHandler(event);

            removeTextBox(textBox);
        });
    });


    describe(' testing _documentUpHandler', function () {
        it(' on disabled ', function () {
            const textBox = createTextBox();

            textBox.disabled = true;
            textBox._documentUpHandler();

            removeTextBox(textBox);
        });

        it(' when the event is triggered not over the textBox', function () {
            const textBox = createTextBox(),
                event = { originalEvent: { target: null } };

            textBox._documentUpHandler(event);

            removeTextBox(textBox);
        });


        it(' when the event is triggered over the textBox', function () {
            const textBox = createTextBox(),
                event = { originalEvent: { target: textBox.$.input } };

            textBox._documentUpHandler(event);

            removeTextBox(textBox);
        });

        it(' when the event is triggered over the textBox in escaped mode', function () {
            const textBox = createTextBox(),
                event = { originalEvent: { target: textBox.$.input } };

            textBox.displayMode = 'escaped';
            textBox._documentUpHandler(event);

            removeTextBox(textBox);
        });

        it(' when the event is triggered over the textBox in escaped mode', function () {
            const textBox = createTextBox(),
                event = { originalEvent: { target: textBox.$.input } };

            textBox.displayMode = 'escaped';
            textBox._documentUpHandler(event);

            removeTextBox(textBox);
        });

        it(' when the element is readonly', function () {
            const textBox = createTextBox(),
                event = { originalEvent: { target: textBox.$.input } };

            textBox.readonly=true;
            textBox._documentUpHandler(event);

            removeTextBox(textBox);
        });


        it(' when the target is listbox item', function () {
            const textBox = createTextBox(),
                listIitem = document.createElement('smart-list-item'),
                event = { originalEvent: { target: listIitem } };

            textBox.$.listBox.appendChild(listIitem);
            textBox._documentUpHandler(event);

            removeTextBox(textBox);
        });

        it(' when the target is listbox item in escaped mode', function () {
            const textBox = createTextBox(),
                listIitem = document.createElement('smart-list-item'),
                event = { originalEvent: { target: listIitem } };

            textBox.$.listBox.appendChild(listIitem);
            textBox.displayMode = 'escaped';
            textBox._documentUpHandler(event);

            removeTextBox(textBox);
        });
    });




    describe(' testing _textBoxChangeHandler', function () {
        it(' ', function () {
            const textBox = createTextBox();

            textBox.value = 'Test value';
            textBox._textBoxChangeHandler();

            removeTextBox(textBox);
        });

        it(' on escaped displayMode ', function () {
            const textBox = createTextBox(),
                event = { clipboardData: { getData: function () { return ' New data'; } }, preventDefault: function () { } }

            textBox.value = 'Test value';
            textBox.displayMode = 'escaped';
            textBox._textBoxChangeHandler(event);

            expect(textBox.value).toBe('Test value New data');

            removeTextBox(textBox);
        });
    });

    describe(' testing _textBoxKeyUpHandler', function () {
        it(' on disabled text box', function () {
            const textBox = createTextBox(),
                event = { stopPropagation: function () { }, preventDefault: function () { } }

            textBox.disabled = true;
            textBox._textBoxKeyUpHandler(event);

            removeTextBox(textBox);
        });

        it(' if Alt key is pressed', function () {
            const textBox = createTextBox(),
                event = { key: 'Alt', stopPropagation: function () { }, preventDefault: function () { } }

            textBox._textBoxKeyUpHandler(event);

            removeTextBox(textBox);
        });

        it(' in "escaped" displayMode', function () {
            const textBox = createTextBox(),
                event = { key: 'a', stopPropagation: function () { }, preventDefault: function () { } }

            textBox.displayMode = 'escaped';
            textBox._textBoxKeyUpHandler(event);

            removeTextBox(textBox);
        });

        it(' in "default" displayMode', function () {
            const textBox = createTextBox(),
                event = { key: 'a', stopPropagation: function () { }, preventDefault: function () { } }

            textBox._textBoxKeyUpHandler(event);

            removeTextBox(textBox);
        });

        it(' if arrow key is pressed', function () {
            const textBox = createTextBox(),
                event = { key: 'ArrowRight', stopPropagation: function () { }, preventDefault: function () { } }

            textBox._textBoxKeyUpHandler(event);

            removeTextBox(textBox);
        });

        it(' if arrow key is pressed', function () {
            const textBox = createTextBox(),
                event = { key: 'a', stopPropagation: function () { }, preventDefault: function () { } }

            textBox.value = 'value';
            textBox.autoComplete = 'manual';
            textBox._autoComplete(true);

            removeTextBox(textBox);
        });
    });

    describe(' testing _keyDownHandler', function () {
        it(' when the key is ArrowUp', function () {
            const textBox = createTextBox();
            let event = { type: 'keydown', key: 'ArrowUp', stopPropagation: function () { }, preventDefault: function () { } };

            textBox._keyDownHandler(event);

            removeTextBox(textBox);
        });

        it(' when the key is ArrowUp + altKey', function () {
            const textBox = createTextBox();
            let event = { type: 'keydown', key: 'ArrowUp', altKey:true, stopPropagation: function () { }, preventDefault: function () { } };

            textBox._keyDownHandler(event);

            removeTextBox(textBox);
        });

        it(' when the key is PageUp', function () {
            const textBox = createTextBox();
            let event = { type: 'keydown', key: 'PageUp', stopPropagation: function () { }, preventDefault: function () { } };

            textBox._keyDownHandler(event);

            removeTextBox(textBox);
        });

        it(' when the key is PageDown', function () {
            const textBox = createTextBox();
            let event = { type: 'keydown', key: 'PageDown', stopPropagation: function () { }, preventDefault: function () { } };

            textBox._keyDownHandler(event);

            removeTextBox(textBox);
        });

        it(' when the key is Enter', function () {
            const textBox = createTextBox();
            let event = { type: 'keydown', key: 'Enter', stopPropagation: function () { }, preventDefault: function () { } };

            textBox.open();
            textBox.$.listBox._focusedItem = textBox.$.listBox._items[0];
            textBox.$.listBox._focusedItem.focused = true;

            textBox._keyDownHandler(event);

            removeTextBox(textBox);
        });


        it(' when the key is Escape', function () {
            const textBox = createTextBox();
            let event = { type: 'keydown', key: 'Escape', stopPropagation: function () { }, preventDefault: function () { } };

            textBox._keyDownHandler(event);

            removeTextBox(textBox);
        });


        it(' when the key is " " in escaped mode', function () {
            const textBox = createTextBox();
            let event = { type: 'keydown', key: ' ', stopPropagation: function () { }, preventDefault: function () { } };

            textBox.displayMode = 'escaped';
            textBox._keyDownHandler(event);

            removeTextBox(textBox);
        });

        it(' when the key is "Backspace" in escaped mode', function () {
            const textBox = createTextBox();
            let event = { type: 'keydown', key: 'Backspace', stopPropagation: function () { }, preventDefault: function () { } };

            textBox.displayMode = 'escaped';
            textBox._keyDownHandler(event);

            removeTextBox(textBox);
        });
    });
});
