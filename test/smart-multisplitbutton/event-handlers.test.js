var describe,
    it,
    expect,
    document;

describe('Testing smart-multi-split-button event handlers', function () {
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

    describe(' testing _itemClickHandler', function () {
        it(' when is clicked a button the event to', function () {
            let multiSplitButton = createMultiSplitButton(),
                event = { type: 'click', target: multiSplitButton.buttons[0] };

            multiSplitButton.addEventListener('itemClick', function (event) {
                let details = event.detail;

                expect(details.value).toBe('Btn1');
                expect(details.label).toBe('Btn1');
            });

            multiSplitButton._itemClickHandler(event);

            removeMultiSplitButton(multiSplitButton);
        });

        it(' when is clicked a button the event to', function () {
            let multiSplitButton = createMultiSplitButton(),
                event = { type: 'click', target: multiSplitButton.items[0] };

            multiSplitButton.opened = true;
            multiSplitButton.addEventListener('itemClick', function (event) {
                let details = event.detail;

                expect(details.value).toBe('Btn2');
                expect(details.label).toBe('Btn2');
            });

            multiSplitButton._itemClickHandler(event);

            multiSplitButton.disabled = true;
            multiSplitButton._itemClickHandler(event);

            removeMultiSplitButton(multiSplitButton);
        });


        it(' when is clicked a button the event to', function () {
            let multiSplitButton = createMultiSplitButton(),
                event = { type: 'click', target: multiSplitButton.items[0] };

            multiSplitButton.addEventListener('itemClick', function (event) {
                let details = event.detail;

                expect(details.value).toBe('Btn2');
                expect(details.label).toBe('Btn2');
            });

            multiSplitButton._itemClickHandler(event);

            removeMultiSplitButton(multiSplitButton);
        });
    });
});
