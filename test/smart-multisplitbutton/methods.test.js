var describe,
    it,
    expect,
    document,
    beforeAll,
    afterAll;
describe('Testing smart-multi-split-button\'s methods', function () {
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

    describe('Testing "insert" method', function () {
        it('to single button at first position', function () {
            let multiSplitButton = createMultiSplitButton();

            expect(multiSplitButton.$.actionButton.querySelectorAll('smart-button').length).toBe(1);
            multiSplitButton.insert(0, 'New Button', true);
            expect(multiSplitButton.$.actionButton.querySelectorAll('smart-button').length).toBe(2);

            removeMultiSplitButton(multiSplitButton);
        });
        it('to add multiple button', function () {
            let multiSplitButton = createMultiSplitButton();

            expect(multiSplitButton.$.actionButton.querySelectorAll('smart-button').length).toBe(1);
            multiSplitButton.insert(2, 'New Button', true);
            multiSplitButton.insert(1, 'New Button', true);
            multiSplitButton.insert(1, 'New Button', true);
            multiSplitButton.insert(-1, 'New Button', true);

            expect(multiSplitButton.$.actionButton.querySelectorAll('smart-button').length).toBe(5);

            removeMultiSplitButton(multiSplitButton);
        });

        it('to add single item at first position', function () {
            let multiSplitButton = createMultiSplitButton();

            expect(multiSplitButton.$.actionButton.querySelectorAll('smart-button').length).toBe(1);
            multiSplitButton.insert(0, 'New Item');
            expect(multiSplitButton.items[0].value).toBe('New Item');

            removeMultiSplitButton(multiSplitButton);
        });
        it('to add multiple items', function () {
            let multiSplitButton = createMultiSplitButton();

            expect(multiSplitButton.$.actionButton.querySelectorAll('smart-button').length).toBe(1);
            multiSplitButton.insert(2, 'New Item');
            multiSplitButton.insert(1, 'New Item');
            multiSplitButton.insert(1, 'New Item');

            expect(multiSplitButton.buttons.length).toBe(1);
            expect(multiSplitButton.items.length).toBe(5);

            removeMultiSplitButton(multiSplitButton);
        });
    });

    describe('Testing "remove" method', function () {
        it('to single button', function () {
            let multiSplitButton = createMultiSplitButton();

            multiSplitButton.insert(0, 'New Button', true);
            expect(multiSplitButton.$.actionButton.querySelectorAll('smart-button').length).toBe(2);

            multiSplitButton.remove(0, true);

            expect(multiSplitButton.$.actionButton.querySelectorAll('smart-button').length).toBe(1);
            expect(multiSplitButton.$.actionButton.querySelectorAll('smart-button')[0].value).toBe('Btn1');

            removeMultiSplitButton(multiSplitButton);
        });

        it('to single item', function () {
            let multiSplitButton = createMultiSplitButton();

            expect(multiSplitButton.items.length).toBe(2);
            multiSplitButton.remove(0);
            expect(multiSplitButton.items.length).toBe(1);

            removeMultiSplitButton(multiSplitButton);
        });
    });

    describe('Testing "update" method', function () {
        it('to change the value and the label of the first button', function () {
            let multiSplitButton = createMultiSplitButton();

            multiSplitButton.update(0, 'Updated', true);
            expect(multiSplitButton.buttons.length).toBe(1);
            expect(multiSplitButton.buttons[0].value).toBe('Updated');
            expect(multiSplitButton.buttons[0].label).toBe('Updated');

            removeMultiSplitButton(multiSplitButton);
        });

        it('to change the value and the label of the first drop down\'s item', function () {
            let multiSplitButton = createMultiSplitButton();

            multiSplitButton.update(0, 'Updated');
            expect(multiSplitButton.items.length).toBe(2);
            expect(multiSplitButton.items[0].label).toBe('Updated');

            removeMultiSplitButton(multiSplitButton);
        });
    });

    describe('Testing "getItem" method', function () {
        it('to return smart-button custom element when the parameter is button\'s value ', function () {
            let multiSplitButton = createMultiSplitButton();

            expect(multiSplitButton.getItem('Btn1').tagName.toLowerCase()).toBe('smart-button');

            removeMultiSplitButton(multiSplitButton);
        });

        it('to return smart-list-item custom element when the parameter is drop down item\'s value ', function () {
            let multiSplitButton = createMultiSplitButton();

            expect(multiSplitButton.getItem('Btn2').tagName.toLowerCase()).toBe('smart-list-item');

            removeMultiSplitButton(multiSplitButton);
        });
    });

    describe('Testing "buttons" method', function () {
        it('to return an array of smart-button custom elements', function () {
            let multiSplitButton = createMultiSplitButton();

            expect(typeof multiSplitButton.buttons).toBe('object');
            expect(multiSplitButton.buttons.length).toBe(1);

            removeMultiSplitButton(multiSplitButton);
        });
    });

    describe('Testing "clearItems" method', function () {
        it('when items are cleared "items" method to return an empty array', function () {
            let multiSplitButton = createMultiSplitButton();

            expect(multiSplitButton.items.length).toBe(2);
            expect(multiSplitButton.buttons.length).toBe(1);

            multiSplitButton.clearSelection();
            multiSplitButton.clearItems();
            expect(multiSplitButton.items.length).toBe(0);
            expect(multiSplitButton.buttons.length).toBe(1);

            removeMultiSplitButton(multiSplitButton);
        });
    });
});
