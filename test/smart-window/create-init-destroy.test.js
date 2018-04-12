var describe,
    it,
    expect,
    document;

describe('Testing smart-window, created via script and dynamicaly changed it\'s properties', function () {
    'use strict';

    describe('if it created dynamicaly', function () {
        it('exists in DOM', function () {
            let smartWindow = document.createElement('smart-window');

            document.body.appendChild(smartWindow);
            expect(smartWindow).toBeInDOM();

            document.body.removeChild(document.querySelector('smart-window'));
            expect(smartWindow).not.toBeInDOM();
        });

        it('can set dynamically the innerHTML property', function () { 
            let smartWindow = document.createElement('smart-window');

            smartWindow.innerHTML = '<smart-button>BUTTON 1</smart-button><smart-button>BUTTON 2</smart-button>'
            document.body.appendChild(smartWindow);
            
            expect(smartWindow.$.content.children.length).toBe(2);
            expect(smartWindow.$.content.children[0] instanceof Smart.Button).toBe(true);
            expect(smartWindow.$.content.children[1] instanceof Smart.Button).toBe(true);
            smartWindow.parentElement.removeChild(smartWindow);
            expect(smartWindow).not.toBeInDOM();
        });

        it('can set dynamically the "resizable, modal and opened" properties', function () {
            let smartWindow = document.createElement('smart-window');

            document.body.appendChild(smartWindow);

            smartWindow.resizable = true;
            smartWindow.modal = true;
            smartWindow.opened = true;

            expect(smartWindow.resizable).toBe(true);
            expect(smartWindow.modal).toBe(true);
            expect(smartWindow.opened).toBe(true);
            expect(smartWindow).not.toHaveClass('smart-visibility-hidden');
            expect(document.getElementsByClassName('smart-modal').length).toBe(1);
            smartWindow.parentElement.removeChild(smartWindow);
            expect(smartWindow).not.toBeInDOM();
        });

        it('can set dynamically the windowParent, resizable, pinned and opened" properties', function () {
            let smartWindow = document.createElement('smart-window'),
                container = document.createElement('div');

            container.style.width = '500px';
            container.style.height = '750px';

            document.body.appendChild(smartWindow);
            document.body.appendChild(container);

            smartWindow.windowParent = container;
            smartWindow.resizable = true;
            smartWindow.pinned = true;
            smartWindow.opened = true;

            expect(smartWindow.resizable).toBe(true);
            expect(smartWindow.pinned).toBe(true);
            expect(smartWindow.opened).toBe(true);
            expect(smartWindow).not.toHaveClass('smart-visibility-hidden');
            expect(smartWindow.parentElement).toEqual(container);

            smartWindow.windowParent = null;
            smartWindow.resizable = false;
            smartWindow.pinned = false;
            smartWindow.opened = false;

            expect(smartWindow.resizable).toBe(false);
            expect(smartWindow.pinned).toBe(false);
            expect(smartWindow.opened).toBe(false);
            expect(smartWindow).toHaveClass('smart-visibility-hidden');
            expect(smartWindow.parentElement).toEqual(document.body);

            smartWindow.parentElement.removeChild(smartWindow);
            container.parentElement.removeChild(container);

            expect(smartWindow).not.toBeInDOM();
        });

        it('can set dynamically the maximized, collapsed, opened', function () {
            let smartWindow = document.createElement('smart-window');

            document.body.appendChild(smartWindow);

            smartWindow.maximized = true;
            smartWindow.opened = true;

            expect(smartWindow.maximized).toBe(true);
            expect(smartWindow.opened).toBe(true);
            expect(smartWindow).not.toHaveClass('smart-visibility-hidden');
            expect(smartWindow.offsetWidth).toBe(document.documentElement.scrollWidth);
            expect(smartWindow.offsetHeight).toBe(document.documentElement.scrollHeight);

            smartWindow.collapsed = true;

            expect(smartWindow.collapsed).toBe(true);
            expect(smartWindow.offsetHeight).toBe(35);

            smartWindow.opened = false;
            expect(smartWindow).toHaveClass('smart-visibility-hidden');

            smartWindow.parentElement.removeChild(smartWindow);
            expect(smartWindow).not.toBeInDOM();
        });

        it('can set dynamically the label, headerTemplate, opened', function () {
            let smartWindow = document.createElement('smart-window'),
                template = document.createElement('template');

            template.innerHTML = '<label>Window Template Header</label>';

            document.body.appendChild(smartWindow);
            document.body.appendChild(template);

            smartWindow.label = 'Window';
            smartWindow.opened = true;

            expect(smartWindow.label).toEqual('Window');
            expect(smartWindow.$.header.textContent).toEqual('Window');
            expect(smartWindow.opened).toBe(true);
            expect(smartWindow).not.toHaveClass('smart-visibility-hidden');

            smartWindow.headerTemplate = template;

            expect(smartWindow.$.header.textContent).toEqual('Window Template Header');

            smartWindow.opened = false;
            expect(smartWindow).toHaveClass('smart-visibility-hidden');

            smartWindow.parentElement.removeChild(smartWindow);
            template.parentElement.removeChild(template);
            expect(smartWindow).not.toBeInDOM();
        });
    });
});
