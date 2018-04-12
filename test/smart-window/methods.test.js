var describe,
    jasmine,
    beforeEach,
    loadFixtures,
    it,
    expect,
    document;
describe('Testing smart-window\'s methods', function () {
    'use strict';
    let smartWindow;

    jasmine.getFixtures().fixturesPath = 'base/test/smart-window/fixtures';
    jasmine.getFixtures().preload('smart-window-methods.htm');
    beforeEach(function () {
        //setStyleFixtures('#jasmine-fixtures { width: 700px; height: 700px; }');
        loadFixtures('smart-window-methods.htm');
        smartWindow = document.querySelector('smart-window');
    });
    describe('if it ', function () {
        it('exists in DOM', function () {
            expect(document.querySelector('smart-window')).toBeInDOM();
        });
    });
    describe('if public methods work as expected', function () {
        it('collapse', function () {
            smartWindow.collapse();

            expect(smartWindow.collapsed).toBe(true);
            expect(smartWindow.offsetHeight).toBe(35);
        });

        it('expand', function () {
            smartWindow.windowParent = 'body';

            smartWindow.collapse();
            smartWindow.expand();

            expect(smartWindow.collapsed).toBe(false);
            expect(smartWindow.offsetHeight).toBe(400);

            smartWindow.collapse();
            smartWindow.maximize();

            expect(smartWindow.maximized).toBe(true);

            smartWindow.expand();

            expect(smartWindow.offsetHeight).toBe(document.documentElement.clientHeight);

            smartWindow.windowParent = null;
        });

        it('open', function () {
            smartWindow.open();

            expect(smartWindow.opened).toBe(true);
            expect(smartWindow).not.toHaveClass('smart-visibility-hidden');
        });

        it('close', function () {
            smartWindow.open();
            smartWindow.close();

            expect(smartWindow.opened).toBe(false);
            expect(smartWindow).toHaveClass('smart-visibility-hidden');
        });

        it('maximize', function () {
            smartWindow.windowParent = document.body;
            smartWindow.maximize();

            expect(smartWindow.maximized).toBe(true);
            expect(smartWindow.offsetWidth).toBe(document.documentElement.scrollWidth);
            expect(smartWindow.offsetHeight).toBe(document.documentElement.scrollHeight);

            smartWindow.windowParent = 'jasmine-fixtures';
        });

        it('restore', function () {
            smartWindow.windowParent = 'body';

            var event = {
                originalEvent: {
                    target: smartWindow
                },
                clientX: smartWindow.$.header.offsetLeft + 2.5,
                clientY: smartWindow.$.header.offsetTop + 2.5,
                pageX: smartWindow.$.header.offsetLeft + 2.5,
                pageY: smartWindow.$.header.offsetTop + 2.5,
                preventDefault: function () { }
            };

            smartWindow.open();
            smartWindow.maximize();
            smartWindow.restore();

            expect(smartWindow.maximized).toBe(false);
            expect(smartWindow.offsetWidth).toBe(400);
            expect(smartWindow.offsetHeight).toBe(400);

            smartWindow.resizable = true;

            smartWindow._moveHandler(event);
            smartWindow._downHandler(event);

            event.pageY += 20;
            smartWindow._documentMoveHandler(event);

            smartWindow.maximize();
            smartWindow.restore();

            expect(smartWindow.offsetWidth).toBe(400);
            expect(smartWindow.offsetHeight).toBe(380);

            smartWindow.collapse();

            expect(smartWindow.collapsed).toBe(true);
            expect(smartWindow.offsetHeight).toBe(35);
            expect(smartWindow.offsetWidth).toBe(400);

            smartWindow.maximize();

            expect(smartWindow.maximized).toBe(true);
            expect(smartWindow.offsetWidth).toBe(document.documentElement.scrollWidth);
            expect(smartWindow.offsetHeight).toBe(35);

            smartWindow.restore()

            expect(smartWindow.maximized).toBe(false);
            expect(smartWindow.offsetWidth).toBe(400);
            expect(smartWindow.offsetHeight).toBe(35);

            smartWindow.windowParent = null;
        });

        it('pin', function () {
            smartWindow.pin();

            expect(smartWindow.pinned).toBe(true);
        });

        it('unpin', function () {
            smartWindow.pin();
            smartWindow.unpin();

            expect(smartWindow.pinned).toBe(false);
        });

        it('appendChild', function () {
            var div = document.createElement('div');

            div.innerHTML = '<p>This is just some ordinary text to fill in the window content section.</p>'
            
            expect(smartWindow.getElementsByClassName('smart-content')[0].children.length).toBe(2);

            smartWindow.appendChild(div);

            expect(smartWindow.getElementsByClassName('smart-content')[0].children.length).toBe(3);
        });

        it('removeChild', function () {
            var firstSection = smartWindow.querySelector('section');

            expect(smartWindow.getElementsByClassName('smart-content')[0].children.length).toBe(2);

            smartWindow.removeChild(firstSection);

            expect(smartWindow.getElementsByClassName('smart-content')[0].children.length).toBe(1);
        });
    });

    describe('if private methods work as expected ', function () {
        it('_applyLayoutTemplate', function () {
            smartWindow.headerTemplate = 'headerTemplate';

            expect(smartWindow.$.header.textContent.trim()).toEqual('This is the header Template.');
        });

        it('_downHandler', function () {
            var event = {
                originalEvent: {
                    target: smartWindow.$.closeButton
                },
                clientX: smartWindow.$.header.offsetLeft + 5,
                clientY: smartWindow.$.header.offsetTop + 5,
                pageX: smartWindow.$.header.offsetLeft + 5,
                pageY: smartWindow.$.header.offsetTop + 5
            };

            //Close buttonm
            smartWindow.open();

            expect(smartWindow).not.toHaveClass('smart-visibility-hidden');

            smartWindow._downHandler(event);

            expect(smartWindow).toHaveClass('smart-visibility-hidden');

            //Pin button
            smartWindow.open();

            event.originalEvent.target = smartWindow.$.pinButton;

            smartWindow._downHandler(event);

            expect(smartWindow.pinned).toBe(true);
            expect(smartWindow).not.toHaveClass('smart-visibility-hidden');

            smartWindow._downHandler(event);
            expect(smartWindow.pinned).toBe(false);

            //Collapse button
            event.originalEvent.target = smartWindow.$.collapseButton;

            smartWindow._downHandler(event);

            expect(smartWindow.collapsed).toBe(true);
            expect(smartWindow).not.toHaveClass('smart-visibility-hidden');

            smartWindow._downHandler(event);
            expect(smartWindow.collapsed).toBe(false);

            //Maximize button
            event.originalEvent.target = smartWindow.$.maximizeButton;

            smartWindow.windowParent = document.body;
            smartWindow._downHandler(event);

            expect(smartWindow.offsetWidth).toBeGreaterThan(400);
            expect(smartWindow.offsetHeight).toBeGreaterThan(400);

            expect(smartWindow.maximized).toBe(true);
            expect(smartWindow).not.toHaveClass('smart-visibility-hidden');

            smartWindow._downHandler(event);
            expect(smartWindow.maximized).toBe(false);
            smartWindow.windowParent = 'jasmine-fixtures';
        });

        it('_documentMoveHandler', function () {
            smartWindow.opened = true;
            smartWindow.windowParent = document.body;

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

            //Dragging
            smartWindow._downHandler(event);

            event.pageY += 2;
            smartWindow._documentMoveHandler(event);

            expect(smartWindow.offsetTop).toBe(expectedTop);

            //Resizing
            event.originalEvent.target = smartWindow;
            event.clientX = smartWindow.offsetLeft + 2.5;
            event.clientY = smartWindow.offsetTop + smartWindow.offsetHeight / 2;
            event.pageX = smartWindow.offsetLeft + 2.5;
            event.pageY = smartWindow.offsetTop + smartWindow.offsetHeight / 2;

            var expectedLeft = smartWindow.offsetLeft - 5;

            smartWindow.resizable = true;

            smartWindow._moveHandler(event); //Set the resizing side
            smartWindow._downHandler(event);

            event.pageX -= 5;

            smartWindow._documentMoveHandler(event);

            smartWindow._documentUpHandler();

            expect(smartWindow.offsetLeft).toBe(expectedLeft);

            smartWindow.windowParent = null;
        });

        it('_moveHandler', function () {
            smartWindow.opened = true;
            smartWindow.windowParent = document.body;

            var event = {
                originalEvent: {
                    target: smartWindow
                },
                clientX: smartWindow.offsetLeft + 2.5,
                clientY: smartWindow.offsetTop + smartWindow.offsetHeight / 2
            };

            smartWindow.resizable = true;

            //Left
            smartWindow._moveHandler(event);

            expect(smartWindow.$.container.classList.contains('smart-window-resizing-left')).toBe(true);

            event.clientX = smartWindow.offsetLeft + smartWindow.offsetWidth - 2.5;

            //Right
            smartWindow._moveHandler(event);

            expect(smartWindow.$.container.classList.contains('smart-window-resizing-left')).toBe(false);
            expect(smartWindow.$.container.classList.contains('smart-window-resizing-right')).toBe(true);

            //Top
            event.clientX = smartWindow.offsetLeft + smartWindow.offsetWidth / 2;
            event.clientY = smartWindow.offsetTop - 2.5;

            smartWindow._moveHandler(event);

            expect(smartWindow.$.container.classList.contains('smart-window-resizing-right')).toBe(false);
            expect(smartWindow.$.container.classList.contains('smart-window-resizing-top')).toBe(true);

            //Bottom
            event.clientX = smartWindow.offsetLeft + smartWindow.offsetWidth / 2;
            event.clientY = smartWindow.offsetTop + smartWindow.offsetHeight - 2.5;

            smartWindow._moveHandler(event);

            expect(smartWindow.$.container.classList.contains('smart-window-resizing-top')).toBe(false);
            expect(smartWindow.$.container.classList.contains('smart-window-resizing-bottom')).toBe(true);

            smartWindow.windowParent = null;
        });

        it('_documentUpHandler', function () {
            smartWindow.opened = true;

            var event = {
                originalEvent: {
                    target: smartWindow.$.header
                },
                clientX: smartWindow.$.header.offsetLeft + 5,
                clientY: smartWindow.$.header.offsetTop + 5,
                pageX: smartWindow.$.header.offsetLeft + 5,
                pageY: smartWindow.$.header.offsetTop + 5
            };

            smartWindow._downHandler(event);

            expect(smartWindow._dragDetails).not.toBeUndefined();
            expect(smartWindow._dragDetails.started).toBe(true);
        });

        it('_dragStartHandler', function () {
            smartWindow.opened = true;

            var event = {
                originalEvent: {
                    target: smartWindow.$.header
                },
                clientX: smartWindow.$.header.offsetLeft + 5,
                clientY: smartWindow.$.header.offsetTop + 5,
                pageX: smartWindow.$.header.offsetLeft + 5,
                pageY: smartWindow.$.header.offsetTop + 5,
                preventDefault: function () { }
            };

            smartWindow._downHandler(event);
            smartWindow._dragStartHandler(event)
        });

        it('_keyDownHandler', function () {
            smartWindow.opened = true;
            smartWindow.windowParent = document.body;

            var event = {
                key: 'ArrowUp',
                altKey: true,
                ctrlKey: false,
                preventDefault: function () { }
            };

            //Maximize
            smartWindow._keyDownHandler(event);

            expect(smartWindow.maximized).toBe(true);

            //Restore
            event.key = 'ArrowDown';
            smartWindow._keyDownHandler(event);

            expect(smartWindow.maximized).toBe(false);

            //Drag
            //Right
            var initialLeft = smartWindow.offsetLeft;

            event.key = 'ArrowRight';
            event.altKey = false;
            smartWindow._keyDownHandler(event);

            expect(smartWindow.offsetLeft).toBe(initialLeft + 10);

            //Left
            event.key = 'ArrowLeft';
            event.altKey = false;
            smartWindow._keyDownHandler(event);

            expect(smartWindow.offsetLeft).toBe(initialLeft);

            var initialTop = smartWindow.offsetTop;

            //Up
            event.key = 'ArrowUp';
            event.altKey = false;
            smartWindow._keyDownHandler(event);

            expect(smartWindow.offsetTop).toBe(initialTop - 10);

            //Down
            event.key = 'ArrowDown';
            event.altKey = false;
            smartWindow._keyDownHandler(event);

            expect(smartWindow.offsetTop).toBe(initialTop);

            //Resize
            //Enlarge Horizontally
            var initialWidth = smartWindow.offsetWidth;

            event.ctrlKey = true;
            event.key = 'ArrowRight';
            smartWindow._keyDownHandler(event);

            expect(smartWindow.offsetWidth).toBe(initialWidth + 10);

            //Enlarge Vertically
            var initialHeight = smartWindow.offsetHeight;

            event.ctrlKey = true;
            event.key = 'ArrowDown';
            smartWindow._keyDownHandler(event);

            expect(smartWindow.offsetHeight).toBe(initialHeight + 10);

            //Shrink Horizontally
            event.key = 'ArrowLeft';
            smartWindow._keyDownHandler(event);

            expect(smartWindow.offsetWidth).toBe(initialWidth);

            //Shrink Vertically
            event.ctrlKey = true;
            event.key = 'ArrowUp';
            smartWindow._keyDownHandler(event);

            expect(smartWindow.offsetHeight).toBe(initialHeight);

            //Pin
            event.ctrlKey = false;
            event.altKey = true;
            event.key = 'p';

            smartWindow._keyDownHandler(event);

            expect(smartWindow.pinned).toBe(true);

            //Unpin
            smartWindow._keyDownHandler(event);

            expect(smartWindow.pinned).toBe(false);

            //Collapse
            event.key = 'c';

            smartWindow._keyDownHandler(event);

            expect(smartWindow.collapsed).toBe(true);

            //Expand
            smartWindow._keyDownHandler(event);

            expect(smartWindow.collapsed).toBe(false);

            smartWindow.windowParent = null;

            //Close
            event.key = 'Escape';

            smartWindow._keyDownHandler(event);

            expect(smartWindow.opened).toBe(false);
        });

        it('_mouseWheelHandler', function () {
            smartWindow.opened = true;

            var event = {
                originalEvent: {
                    target: smartWindow.$.header
                },
                clientX: smartWindow.$.header.offsetLeft + 5,
                clientY: smartWindow.$.header.offsetTop + 5,
                pageX: smartWindow.$.header.offsetLeft + 5,
                pageY: smartWindow.$.header.offsetTop + 5,
                preventDefault: function () { },
                deltaY: 100
            };

            smartWindow._moveHandler();
            smartWindow._downHandler(event);

            smartWindow._mouseWheelHandler(event);

            smartWindow._documentUpHandler(event);
        });

        it('_focusHandler', function () {
            var event = { type: 'focus' };

            smartWindow._focusHandler(event);

            expect(smartWindow).toHaveAttr('focused', '');

            event.type = 'blur';

            smartWindow._focusHandler(event);

            expect(smartWindow).not.toHaveAttr('focused');
        });

        it('_resize', function () {
            smartWindow.opened = true;
            smartWindow.windowParent = document.body;

            var event = {
                originalEvent: {
                    target: smartWindow
                },
                clientX: smartWindow.offsetLeft + 2.5,
                clientY: smartWindow.offsetTop + smartWindow.offsetHeight / 2,
                pageX: smartWindow.offsetLeft + 2.5,
                pageY: smartWindow.offsetTop + smartWindow.offsetHeight / 2
            },
            expectedLeft = smartWindow.offsetLeft - 5,
            expectedWidth = smartWindow.offsetWidth,
            expectedHeight = smartWindow.offsetHeight;

            smartWindow.resizable = true;

            //Left side
            smartWindow._moveHandler(event); //Set the resizing side
            smartWindow._downHandler(event);

            event.pageX -= 5;

            smartWindow._documentMoveHandler(event);

            smartWindow._documentUpHandler();

            expect(smartWindow.offsetLeft).toBe(expectedLeft);
            expect(smartWindow.offsetWidth).toBe(expectedWidth + 5);

            //Left-Top corner
            event.clientX = smartWindow.offsetLeft - 2.5;
            event.clientY = smartWindow.offsetTop - 2.5;
            event.pageX = smartWindow.offsetLeft - 2.5;
            event.pageY = smartWindow.offsetTop - 2.5;

            smartWindow._moveHandler(event); //Set the resizing side
            smartWindow._downHandler(event);

            event.pageX += 5;
            event.pageY += 5;

            smartWindow._documentMoveHandler(event);

            smartWindow._documentUpHandler();

            expect(smartWindow.offsetWidth).toBe(expectedWidth);
            expect(smartWindow.offsetHeight).toBe(expectedHeight - 5);

            //Left-Bottom corner
            event.clientX = smartWindow.offsetLeft - 2.5;
            event.clientY = smartWindow.offsetTop + smartWindow.offsetHeight - 2.5;
            event.pageX = smartWindow.offsetLeft - 2.5;
            event.pageY = smartWindow.offsetTop + smartWindow.offsetHeight - 2.5;

            smartWindow._moveHandler(event); //Set the resizing side
            smartWindow._downHandler(event);

            event.pageX -= 5;
            event.pageY += 5;

            smartWindow._documentMoveHandler(event);

            smartWindow._documentUpHandler();

            expect(smartWindow.offsetWidth).toBe(expectedWidth + 5);
            expect(smartWindow.offsetHeight).toBe(expectedHeight);

            //Right side
            event.clientX = event.pageX = smartWindow.offsetLeft + smartWindow.offsetWidth - 2.5;
            event.clientY = event.pageY = smartWindow.offsetTop + smartWindow.offsetHeight / 2;

            smartWindow._moveHandler(event); //Set the resizing side
            smartWindow._downHandler(event);

            event.pageX -= 5;

            smartWindow._documentMoveHandler(event);

            smartWindow._documentUpHandler();

            expect(smartWindow.offsetLeft).toBe(expectedLeft);
            expect(smartWindow.offsetWidth).toBe(expectedWidth);

            //Right-Top corner
            event.clientX = smartWindow.offsetLeft + smartWindow.offsetWidth - 2.5;
            event.clientY = smartWindow.offsetTop - 2.5;
            event.pageX = smartWindow.offsetLeft + smartWindow.offsetWidth - 2.5;
            event.pageY = smartWindow.offsetTop - 2.5;

            smartWindow._moveHandler(event); //Set the resizing side
            smartWindow._downHandler(event);

            event.pageX -= 5;
            event.pageY += 5;

            smartWindow._documentMoveHandler(event);

            smartWindow._documentUpHandler();

            expect(smartWindow.offsetWidth).toBe(expectedWidth - 5);
            expect(smartWindow.offsetHeight).toBe(expectedHeight - 5);

            //Right-Bottom corner
            event.clientX = smartWindow.offsetLeft + smartWindow.offsetWidth - 2.5;
            event.clientY = smartWindow.offsetTop + smartWindow.offsetHeight - 2.5;
            event.pageX = smartWindow.offsetLeft + smartWindow.offsetWidth - 2.5;
            event.pageY = smartWindow.offsetTop + smartWindow.offsetHeight - 2.5;

            smartWindow._moveHandler(event); //Set the resizing side
            smartWindow._downHandler(event);

            event.pageX -= 5;
            event.pageY -= 5;

            smartWindow._documentMoveHandler(event);

            smartWindow._documentUpHandler();

            expect(smartWindow.offsetWidth).toBe(expectedWidth - 10);
            expect(smartWindow.offsetHeight).toBe(expectedHeight - 10);

            //ResizeMode  "corner"

            smartWindow.resizeMode = 'corner';

            //Right-Bottom corner
            event.clientX = smartWindow.offsetLeft + smartWindow.offsetWidth - 2.5;
            event.clientY = smartWindow.offsetTop + smartWindow.offsetHeight - 2.5;
            event.pageX = smartWindow.offsetLeft + smartWindow.offsetWidth - 2.5;
            event.pageY = smartWindow.offsetTop + smartWindow.offsetHeight - 2.5;

            smartWindow._moveHandler(event); //Set the resizing side
            smartWindow._downHandler(event);

            event.pageX += 5;
            event.pageY += 5;

            smartWindow._documentMoveHandler(event);

            smartWindow._documentUpHandler();

            expect(smartWindow.offsetWidth).toBe(expectedWidth - 5);
            expect(smartWindow.offsetHeight).toBe(expectedHeight - 5);

            //Left-Bottom corner
            event.clientX = smartWindow.offsetLeft - 2.5;
            event.clientY = smartWindow.offsetTop + smartWindow.offsetHeight - 2.5;
            event.pageX = smartWindow.offsetLeft - 2.5;
            event.pageY = smartWindow.offsetTop + smartWindow.offsetHeight - 2.5;

            smartWindow._moveHandler(event); //Set the resizing side
            smartWindow._downHandler(event);

            event.pageX -= 5;
            event.pageY += 5;

            smartWindow._documentMoveHandler(event);

            smartWindow._documentUpHandler();

            expect(smartWindow.offsetWidth).toBe(expectedWidth - 5);
            expect(smartWindow.offsetHeight).toBe(expectedHeight - 5);

            smartWindow.windowParent = null;

            //Top side
            smartWindow.resizeMode = 'default';

            event.clientX = event.pageX = smartWindow.offsetLeft + smartWindow.offsetWidth / 2;
            event.clientY = event.pageY = smartWindow.offsetTop - 2.5;

            smartWindow._moveHandler(event); //Set the resizing side
            smartWindow._downHandler(event);

            event.pageY -= 5;

            smartWindow._documentMoveHandler(event);

            smartWindow._documentUpHandler();

            expect(smartWindow.offsetWidth).toBe(expectedWidth - 5);
            expect(smartWindow.offsetHeight).toBe(expectedHeight);

            //Bottom side
            event.clientX = event.pageX = smartWindow.offsetLeft + smartWindow.offsetWidth / 2;
            event.clientY = event.pageY = smartWindow.offsetTop + smartWindow.offsetHeight;

            smartWindow._moveHandler(event); //Set the resizing side
            smartWindow._downHandler(event);

            event.pageY += 5;

            smartWindow._documentMoveHandler(event);
            
            smartWindow._documentUpHandler();

            expect(smartWindow.offsetWidth).toBe(expectedWidth - 5);
            expect(smartWindow.offsetHeight).toBe(expectedHeight);

            smartWindow.windowParent = null;
        });

        it('_setElementParent', function () {
            var container = document.createElement('div');

            container.id = 'windowContainer';
            document.body.appendChild(container);

            smartWindow.windowParent = container;

            expect(smartWindow.parentElement).toEqual(container);

            smartWindow.windowParent = 'body';

            expect(smartWindow.parentElement).toEqual(document.body);

            smartWindow.windowParent = 'windowContainer';
            expect(smartWindow.parentElement).toEqual(container);

            smartWindow.windowParent = document.body;

            expect(smartWindow.parentElement).toEqual(document.body)

            smartWindow.windowParent = 'jasmine-fixtures';
            document.body.removeChild(container);
        });

        it('_setModal', function () {
            smartWindow.opened = true;
            smartWindow.modal = true;

            var modals = document.getElementsByClassName('smart-modal');

            expect(smartWindow.modal).toBe(true);
            expect(modals.length).toBe(1);
            expect(modals[0].classList.contains('smart-visibility-hidden')).not.toBe(true);

            smartWindow.modal = false;

            expect(smartWindow.modal).toBe(false);
            expect(modals.length).toBe(0);
        });
    });
});
