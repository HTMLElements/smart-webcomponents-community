var describe,
    it,
    expect,
    document,
    beforeAll,
    afterAll;

describe('Testing high-precision DateTime object ', function () {

    describe('if it could create new instance of TestElement2', function () {
        it(' if it exists in DOM', function () {
            const testElement = document.createElement('smart-test-element-2'),
                inputEventsTest = new Smart.Utilities.InputEvents(testElement),
                inputEventTypes = ['resize', 'down', 'up', 'move', 'tap', 'taphold', 'swipeleft', 'swiperight', 'swipetop', 'swipebottom'];

            document.body.appendChild(testElement);

            for (let i = 0; i < inputEventTypes.length; i++) {
                inputEventsTest.listen(inputEventTypes[i]);
                inputEventsTest.unlisten(inputEventTypes[i]);
            }

            window.PointerEvent = null;

            for (let i = 0; i < inputEventTypes.length; i++) {
                inputEventsTest.listen(inputEventTypes[i]);
                inputEventsTest.unlisten(inputEventTypes[i]);
            }

            window.ontouchstart = true;

            for (let i = 0; i < inputEventTypes.length; i++) {
                inputEventsTest.listen(inputEventTypes[i]);
                inputEventsTest.unlisten(inputEventTypes[i]);
            }


            Smart.Utilities.InputEvents.prototype.move = function () { };
            Smart.Utilities.InputEvents.prototype.down = function () { };
            Smart.Utilities.InputEvents.prototype.up = function () { };
            Smart.Utilities.InputEvents.prototype.tap = function () { };
            Smart.Utilities.InputEvents.prototype.handlers = ['resize', 'down', 'up', 'move', 'tap', 'taphold', 'swipeleft', 'swiperight', 'swipetop', 'swipebottom'];
            Smart.Utilities.InputEvents.prototype.isInBounds = true;
            Smart.Utilities.InputEvents.prototype.isPressed = true;

            Smart.Utilities.InputEvents.prototype.handleDocumentUp({});
            Smart.Utilities.InputEvents.prototype.createEvent({});
            Smart.Utilities.InputEvents.prototype.fireTap({});
            Smart.Utilities.InputEvents.prototype.initTap({});
            Smart.Utilities.InputEvents.prototype.pointerDown({});
            Smart.Utilities.InputEvents.prototype.mouseDown({});
            Smart.Utilities.InputEvents.prototype.touchStart({});
            Smart.Utilities.InputEvents.prototype.mouseUp({});
            Smart.Utilities.InputEvents.prototype.handleDown({});
            Smart.Utilities.InputEvents.prototype.handleUp({});

            Smart.Utilities.InputEvents.prototype.isPressed = true;
            Smart.Utilities.InputEvents.prototype.handleMove({});
            Smart.Utilities.InputEvents.prototype.touchEnd({});
            Smart.Utilities.InputEvents.prototype.pointerUp({});
            Smart.Utilities.InputEvents.prototype.pointerCancel({});
            Smart.Utilities.InputEvents.prototype.touchCancel({});
            Smart.Utilities.InputEvents.prototype.mouseLeave({});
            Smart.Utilities.InputEvents.prototype.mouseMove({});
            Smart.Utilities.InputEvents.prototype.pointerMove({});

            expect(function () { Smart.Utilities.InputEvents.prototype.touchMove({}); }).toThrow();
            Smart.Utilities.InputEvents.prototype.handleSwipeEvents({});
            Smart.Utilities.InputEvents.prototype.handleVerticalSwipeEvents({});
            Smart.Utilities.InputEvents.prototype.handleHorizontalSwipeEvents({});

            Smart.Utilities.InputEvents.prototype._swipeEvent = false;
            Smart.Utilities.InputEvents.prototype._swipeLocked = false;
            Smart.Utilities.InputEvents.prototype.swipeMin = 40;
            Smart.Utilities.InputEvents.prototype.swiped({}, 50, 'horizontal');
            Smart.Utilities.InputEvents.prototype._swipeEvent = false;
            Smart.Utilities.InputEvents.prototype._swipeLocked = false;
            Smart.Utilities.InputEvents.prototype.swipeMin = 40;
            Smart.Utilities.InputEvents.prototype.swiped({}, 50, 'vertical');
            Smart.Utilities.InputEvents.prototype.resetSwipe({});
            Smart.Utilities.InputEvents.prototype.initSwipe({});

            document.body.removeChild(document.querySelector('smart-test-element-2'));
            expect(testElement).not.toBeInDOM();
        });
    });
});
