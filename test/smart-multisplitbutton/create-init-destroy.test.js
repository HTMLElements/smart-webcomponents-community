var describe,
    it,
    expect,
    document,
    beforeAll,
    afterAll;
describe('Testing smart-multi-split-button created dynamicaly and destroyed', function () {
    'use strict';
    function createMultiSplitButton() {
        const multiSplitButton = document.createElement('smart-multi-split-button');

        multiSplitButton.dataSource = ['Btn1', 'Btn2', 'Btn3'];
        document.body.appendChild(multiSplitButton);

        expect(multiSplitButton).toBeInDOM();

        return multiSplitButton;
    }

    function removeMultiSplitButton(multiSplitButton) {
        document.body.removeChild(document.querySelector('smart-multi-split-button'));
        expect(multiSplitButton).not.toBeInDOM();
    }

    describe('if the dataSource could be updated ', function () {
        it('with array of strings, first item to be used as button, all others to populate the drop down list ', function () {
            let multiSplitButton = createMultiSplitButton();

            expect(multiSplitButton.buttons.length).toBe(1);
            expect(multiSplitButton.items.length).toBe(2);

            multiSplitButton.dataSource = ['New Btn1', 'New Btn2', 'New Btn3', 'New Btn4', 'New Btn5'];

            expect(multiSplitButton.buttons.length).toBe(1);
            expect(multiSplitButton.items.length).toBe(4);

            removeMultiSplitButton(multiSplitButton);
        });
        it('with array of objects, all items with button property set to true to be rendered as buttons, others as drop down items ', function () {
           let multiSplitButton = createMultiSplitButton();

             expect(multiSplitButton.buttons.length).toBe(1);
            expect(multiSplitButton.items.length).toBe(2);

            multiSplitButton.dataSource = [{ "value": "1", "label": "Btn 1", "button": true }, { "value": "2", "label": "Btn 2", "button": true }, { "value": "3", "label": "Btn 3", "button": true }, { "value": "4", "label": "Btn 4", "button": true }, { "value": "5", "label": "Btn 5", "button": true }, { "value": "6", "label": "Btn 6", "button": true }, { "value": "7", "label": "Btn 7" }, { "value": "8", "label": "Btn 8" }, { "value": "9", "label": "Btn 9" }];

            expect(multiSplitButton.buttons.length).toBe(6);
            expect(multiSplitButton.items.length).toBe(3);

            removeMultiSplitButton(multiSplitButton);
        });
    });

    describe('if the element could be enabled/disabled properly ', function () {
        it('with array of strings, first item to be used as button, all others to populate the drop down list ', function () {
            let multiSplitButton = createMultiSplitButton();

            expect(multiSplitButton.buttons[0].disabled).toBe(false);
            expect(multiSplitButton.$.listBox.disabled).toBe(false);

            multiSplitButton.selectedValues = [0];
            multiSplitButton.disabled = true;

            expect(multiSplitButton.buttons[0].disabled).toBe(true);
            expect(multiSplitButton.$.listBox.disabled).toBe(true);

            multiSplitButton.disabled = false;

            expect(multiSplitButton.buttons[0].disabled).toBe(false);
            expect(multiSplitButton.$.listBox.disabled).toBe(false);

            removeMultiSplitButton(multiSplitButton);
        });
    });
});
