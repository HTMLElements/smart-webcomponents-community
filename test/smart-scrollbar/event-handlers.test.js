var describe,
    it,
    expect,
    document,
    beforeAll,
    afterAll;

describe('Testing event handlers functions of smart-scroll-bar', function () {
    'use strict';
    let smartScrollBar;
    beforeEach(function () {
        smartScrollBar = document.createElement('smart-scroll-bar');
        smartScrollBar.style.width = '500px';
        smartScrollBar.style.height = '100px';
        smartScrollBar.min = 0;
        smartScrollBar.value = 50;
        smartScrollBar.max = 100;
        smartScrollBar.step = 10;

        document.body.appendChild(smartScrollBar);
    });

    afterEach(function () {
        document.body.removeChild(document.querySelector('smart-scroll-bar'));
    });

    describe(' testing _dragStartHandler', function () {
        it('on disabled element value is not changed on drag', function () {
            const smartScrollBarCoords = smartScrollBar.getBoundingClientRect(),
                valueBeforeDragStart = smartScrollBar.value;
            let event = { clientX: smartScrollBarCoords.left + 50, clientY: smartScrollBarCoords.top + 100 };

            smartScrollBar.disabled = true;

            smartScrollBar._dragStartHandler(event);

            event = { clientX: smartScrollBarCoords.left + 60, clientY: smartScrollBarCoords.top + 110 };
            smartScrollBar._dragHandler(event);
            smartScrollBar._dragEndHandler();

            expect(smartScrollBar.value === valueBeforeDragStart).toBe(true);
        });

        it('on enabled element value is not changed on drag', function () {
            const smartScrollBarCoords = smartScrollBar.getBoundingClientRect(),
                valueBeforeDragStart = smartScrollBar.value;
            let event = { clientX: smartScrollBarCoords.left + 50, clientY: smartScrollBarCoords.top + 100 };

            smartScrollBar._dragStartHandler(event);

            event = { clientX: smartScrollBarCoords.left + 60, clientY: smartScrollBarCoords.top + 110 };
            smartScrollBar._dragHandler(event);
            smartScrollBar._dragEndHandler();

            expect(smartScrollBar.value > valueBeforeDragStart).toBe(true);
        });

        it('on enabled element event is originalEvent', function () {
            const smartScrollBarCoords = smartScrollBar.getBoundingClientRect(),
                valueBeforeDragStart = smartScrollBar.value;
            let event = { clientX: smartScrollBarCoords.left + 50, clientY: smartScrollBarCoords.top + 100, originalEvent: { stopPropagation: function () { }, preventDefault: function () { } } };

            smartScrollBar._dragStartHandler(event);

            event = { clientX: smartScrollBarCoords.left + 60, clientY: smartScrollBarCoords.top + 110 };
            smartScrollBar._dragHandler(event);
            smartScrollBar._dragEndHandler();

            expect(smartScrollBar.value > valueBeforeDragStart).toBe(true);
        });
    });

    describe(' testing _dragHandler', function () {
        it('on rightToLeft mode', function () {
            const smartScrollBarCoords = smartScrollBar.getBoundingClientRect(),
                valueBeforeDragStart = smartScrollBar.value;
            let event = { clientX: smartScrollBarCoords.left + 50, clientY: smartScrollBarCoords.top + 100, originalEvent: { stopPropagation: function () { }, preventDefault: function () { } } };

            smartScrollBar.rightToLeft = true;

            smartScrollBar._dragStartHandler(event);

            event = { clientX: smartScrollBarCoords.left + 60, clientY: smartScrollBarCoords.top + 110, originalEvent: { stopPropagation: function () { }, preventDefault: function () { } } };
            smartScrollBar._dragHandler(event);
            smartScrollBar._dragEndHandler();

            expect(smartScrollBar.value < valueBeforeDragStart).toBe(true);

            smartScrollBar._trackDownTimer = true;
            smartScrollBar._dragEndHandler();
        });
    });

    describe(' testing _selectStartHandler', function () {
        it('on rightToLeft mode', function () {
            const smartScrollBarCoords = smartScrollBar.getBoundingClientRect();
            let event = { clientX: smartScrollBarCoords.left + 50, clientY: smartScrollBarCoords.top + 100, originalEvent: { stopPropagation: function () { }, preventDefault: function () { } }, stopPropagation: function () { }, preventDefault: function () { } };

            smartScrollBar.thumbCapture = true;
            smartScrollBar._selectStartHandler(event);
        });
    });

    describe(' testing _updateValue', function () {
        it('with single parameter', function () {
            const smartScrollBarCoords = smartScrollBar.getBoundingClientRect();
            smartScrollBar._updateValue(50);

            expect(smartScrollBar.value).toBe(50);
        });

        it('without parameters', function () {
            const smartScrollBarCoords = smartScrollBar.getBoundingClientRect();
            smartScrollBar._updateValue();

            expect(smartScrollBar.value).toBe(smartScrollBar.min);
        });
    });

});
