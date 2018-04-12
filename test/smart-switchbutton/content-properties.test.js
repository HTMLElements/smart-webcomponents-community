var describe,
    it,
    expect,
    document,
    beforeAll,
    afterAll;

describe('Testing Switch Button\'s content propertie', function () {
    'use strict';

    describe('if it created dynamicaly', function () {
        it('exists in DOM', function () {
            let switchButton = document.createElement('smart-switch-button');
            document.body.appendChild(switchButton);
            expect(switchButton).toBeInDOM();

            document.body.removeChild(document.querySelector('smart-switch-button'));
            expect(switchButton).not.toBeInDOM();
        });
    });

    describe('if it created dynamicaly', function () {
        it('could set content properties by setting switch button\'s innerHTML', function () {
            let switchButton = document.createElement('smart-switch-button');
            switchButton.innerHTML = '<span class="smart-true-content">Hello</span><span class="smart-false-content">Bye</span>';
            document.body.appendChild(switchButton);
            expect(switchButton).toBeInDOM();

            expect(switchButton.trueContent).toBe('<span class="smart-true-content">Hello</span>');
            expect(switchButton.falseContent).toBe('<span class="smart-false-content">Bye</span>');

            expect(switchButton.$.trueContentContainer.innerHTML).toBe('<span class="smart-true-content">Hello</span>');
            expect(switchButton.$.falseContentContainer.innerHTML).toBe('<span class="smart-false-content">Bye</span>');

            document.body.removeChild(document.querySelector('smart-switch-button'));
            expect(switchButton).not.toBeInDOM();
        });
    });

    describe('if content properties are empty by default', function () {
        it(' trueContent, falseContent ', function () {
            let switchButton = document.createElement('smart-switch-button');
            document.body.appendChild(switchButton);

            expect(switchButton.trueContent).toBe('');
            expect(switchButton.falseContent).toBe('');

            expect(switchButton.$.trueContentContainer.innerHTML).toBe('');
            expect(switchButton.$.falseContentContainer.innerHTML).toBe('');

            document.body.removeChild(document.querySelector('smart-switch-button'));
            expect(switchButton).not.toBeInDOM();
        });
    });


    describe('if properties could be changed', function () {
        it(' trueContent, falseContent ', function () {
            let switchButton = document.createElement('smart-switch-button');
            document.body.appendChild(switchButton);

            switchButton.trueContent = '<span class="smart-true-content">True</span>';
            switchButton.falseContent = '<span class="smart-false-content">False</span>';

            expect(switchButton.$.trueContentContainer.innerHTML).toBe('<span class="smart-true-content">True</span>');
            expect(switchButton.$.falseContentContainer.innerHTML).toBe('<span class="smart-false-content">False</span>');

            document.body.removeChild(document.querySelector('smart-switch-button'));
            expect(switchButton).not.toBeInDOM();
        });
    });
});
