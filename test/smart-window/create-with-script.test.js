var describe,
    it,
    expect,
    document,
    beforeAll,
    afterAll;

describe('Testing smart-window created with script', function () {
    'use strict';
    let smartWindow;

    beforeAll(function () {
        smartWindow = document.createElement('smart-window');
        document.body.appendChild(smartWindow);
    });

    afterAll(function () {
        document.body.removeChild(document.querySelector('smart-window'));
    });

    describe('if it ', function () {
        it('exists in DOM', function () {
            expect(smartWindow).toBeInDOM();
        });
    });

    describe('check if properties change their values', function () {
        it('collapsed', function () {
            smartWindow.collapsed = true;

            expect(smartWindow.collapsed).toBe(true);
            expect(smartWindow.offsetHeight).toBe(smartWindow.$.headerSection.offsetHeight);

            smartWindow.collapsed = false;

            expect(smartWindow.collapsed).toBe(false);
            expect(smartWindow.offsetHeight).not.toBe(smartWindow.$.header.offsetHeight);
        });

        it('footerTemplate', function () {
            var footerTemplate = document.createElement('template'),
                label = document.createElement('label');

            label.textContent = 'FOOTER';
            footerTemplate.appendChild(label);

            smartWindow.footerTemplate = footerTemplate;

            expect(smartWindow.footerTemplate).not.toBeNull();
            expect(smartWindow.footerTemplate).toEqual(footerTemplate);

            expect(smartWindow.$.footer.innerHTML).toEqual(footerTemplate.innerHTML);

            smartWindow.footerTemplate = null;

            expect(smartWindow.footerTemplate).toBeNull();
            expect(smartWindow.$.footer.innerHTML).toEqual('');
        });
      
        it('headerTemplate', function () {
            var headerTemplate = document.createElement('template'),
                label = document.createElement('label');

            label.textContent = 'HEADER';
            headerTemplate.appendChild(label);

            smartWindow.headerTemplate = headerTemplate;

            expect(smartWindow.headerTemplate).not.toBeNull();
            expect(smartWindow.headerTemplate).toEqual(headerTemplate);

            expect(smartWindow.$.header.innerHTML).toEqual(headerTemplate.innerHTML);

            smartWindow.headerTemplate = null;

            expect(smartWindow.headerTemplate).toBeNull();
            expect(smartWindow.$.header.innerHTML).toEqual('');
        });

        it('label', function () {
            smartWindow.label = 'New Window';

            expect(smartWindow.label).toEqual('New Window');
            expect(smartWindow.$.header.innerHTML.trim()).toEqual('New Window');
        });

        it('opened', function () {
            smartWindow.opened = true;

            expect(smartWindow.opened).toBe(true);
            expect(smartWindow.classList.contains('smart-visibility-hidden')).toBe(false);

            smartWindow.opened = false;

            expect(smartWindow.opened).toBe(false);
            expect(smartWindow.classList.contains('smart-visibility-hidden')).toBe(true);
        });

        it('maximized', function () {
            var initialWidth = smartWindow.offsetWidth,
                initialHeight = smartWindow.offsetHeight;

            smartWindow.maximized = true;

            expect(smartWindow.maximized).toBe(true);
            expect(smartWindow.offsetHeight).toBe(document.documentElement.scrollHeight);
            expect(smartWindow.offsetWidth).toBe(document.documentElement.scrollWidth);

            smartWindow.maximized = false;

            expect(smartWindow.maximized).toBe(false);
            expect(smartWindow.offsetHeight).toBe(initialHeight);
            expect(smartWindow.offsetWidth).toBe(initialWidth);
        });

        it('modal', function () {
            smartWindow.modal = true;
            smartWindow.opened = true;

            expect(smartWindow.modal).toBe(true);
            expect(document.getElementsByClassName('smart-modal')[0]).not.toBeNull();

            smartWindow.modal = false;
            smartWindow.opened = false;

            expect(smartWindow.modal).toBe(false);
            expect(document.getElementsByClassName('smart-modal')[0]).toBeUndefined();
        });

        it('pinned', function () {
            var event = {
                originalEvent: {
                    target: smartWindow.$.header
                },
                clientX: smartWindow.$.header.offsetLeft + 5,
                clientY: smartWindow.$.header.offsetTop + 5,
                pageX: smartWindow.$.header.offsetLeft + 5,
                pageY: smartWindow.$.header.offsetTop + 5
            },
            expectedTop = smartWindow.offsetTop + 2;

            smartWindow.pinned = true;
            smartWindow.opened = true;

            expect(smartWindow.pinned).toBe(true);

            smartWindow._downHandler(event);

            event.pageY += 2;

            smartWindow._documentMoveHandler(event);

            smartWindow._documentUpHandler(event);

            expect(smartWindow.offsetTop).not.toBe(expectedTop);

            smartWindow.pinned = false;

            expect(smartWindow.pinned).toBe(false);

            smartWindow._downHandler(event);

            event.pageY += 2;

            smartWindow._documentMoveHandler(event);

            smartWindow._documentUpHandler(event);

            expect(smartWindow.offsetTop).toBe(expectedTop);
            smartWindow.opened = false;
        });

        it('resizeMode = "horizontal"', function () {
            var event = {
                originalEvent: {
                    target: smartWindow
                },
                clientX: smartWindow.offsetLeft + 2.5,
                clientY: smartWindow.offsetTop + smartWindow.offsetHeight / 2,
                pageX: smartWindow.offsetLeft + 2.5,
                pageY: smartWindow.offsetTop + smartWindow.offsetHeight / 2
            },
            expectedLeft = smartWindow.offsetLeft - 5;

            smartWindow.resizeMode = 'horizontal';
            smartWindow.opened = true;

            smartWindow.$.container.classList.add('smart-window-resizing-left');

            smartWindow._downHandler(event);

            event.pageX -= 5;

            smartWindow._documentMoveHandler(event);

            smartWindow._documentUpHandler(event);

            expect(smartWindow.offsetLeft).toBe(expectedLeft);

            smartWindow.resizeMode = 'none';

            expect(smartWindow.resizeMode).toBe('none');

            smartWindow._downHandler(event);
            smartWindow._documentMoveHandler(event);
            smartWindow._documentUpHandler(event);

            expect(smartWindow.offsetLeft).toBe(expectedLeft);
            smartWindow.opened = false;
        });

        it('resizeMode', function () {
            var event = {
                originalEvent: {
                    target: smartWindow
                },
                clientX: smartWindow.offsetLeft + 2.5,
                clientY: smartWindow.offsetTop + smartWindow.offsetHeight / 2,
                pageX: smartWindow.offsetLeft + 2.5,
                pageY: smartWindow.offsetTop + smartWindow.offsetHeight / 2
            },
            expectedWidth = smartWindow.offsetWidth;

            smartWindow.resizeMode = 'vertical';
            smartWindow.opened = true;

            expect(smartWindow.resizeMode).toBe('vertical');

            smartWindow._moveHandler(event); //Determines the resizing side
            smartWindow._downHandler(event);

            event.pageX -= 5;

            smartWindow._documentMoveHandler(event);

            smartWindow._documentUpHandler(event);

            expect(smartWindow.offsetWidth).toBe(expectedWidth);

            smartWindow.resizeMode = 'horizontal';

            expect(smartWindow.resizeMode).toBe('horizontal');
            
            event.pageX = event.clientX = smartWindow.offsetLeft + smartWindow.offsetWidth - 2.5;
            event.pageY = event.clientY = smartWindow.offsetTop + smartWindow.offsetHeight - 2.5;

            smartWindow._moveHandler(event); //Determines the resizing side
            smartWindow._downHandler(event);


            event.pageX -= 5;

            smartWindow._documentMoveHandler(event);

            smartWindow._documentUpHandler(event);

            expect(smartWindow.offsetWidth).not.toBe(expectedWidth);
            expect(smartWindow.offsetWidth).toBe(expectedWidth - 5);

            smartWindow.opened = false;
        });

        it('windowParent', function () {
            var parent = document.createElement('div');

            parent.id = 'windowParent';
            document.body.appendChild(parent);

            smartWindow.windowParent = 'windowParent';

            expect(smartWindow.windowParent).toBe('windowParent');
            expect(smartWindow.parentElement).toEqual(parent);

            smartWindow.windowParent = null;

            expect(smartWindow.windowParent).toBe(null);
            expect(smartWindow.parentElement).toEqual(document.body);

            document.body.removeChild(parent);
        });
    });
});
