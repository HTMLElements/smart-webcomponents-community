var describe,
    it,
    expect,
    document,
    beforeAll,
    afterAll;

describe('Testing privete functions of smart-scroll-bar', function () {
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

    describe('if it created dynamicaly', function () {
        it('exists in DOM', function () {
            expect(smartScrollBar).toBeInDOM();
        });
    });

    describe('if is clicked far button', function () {
        it('once, then the value is increased with 1 step (50->60)', function () {
            smartScrollBar._farButtonClickHandler();

            expect(smartScrollBar.value).toBe(60);
            expect(smartScrollBar.getAttribute('value')).toBe('60');

        });

        it('twice, then the value is increased with 2 times with steps (50->70)', function () {
            smartScrollBar._farButtonClickHandler();

            expect(smartScrollBar.value).toBe(60);
            expect(smartScrollBar.getAttribute('value')).toBe('60');

            smartScrollBar._farButtonClickHandler();

            expect(smartScrollBar.value).toBe(70);
            expect(smartScrollBar.getAttribute('value')).toBe('70');
        });

        it(' and value == max, the value remains unchanged', function () {
            smartScrollBar.value = 100;
            smartScrollBar._farButtonClickHandler();

            expect(smartScrollBar.value).toBe(100);
            expect(smartScrollBar.getAttribute('value')).toBe('100');
        });

        it(' and value + step > max, the value goes equal to max', function () {
            smartScrollBar.value = 99;
            smartScrollBar._farButtonClickHandler();

            expect(smartScrollBar.value).toBe(100);
            expect(smartScrollBar.getAttribute('value')).toBe('100');
        });

        it(' and the widget is disabled, value remains unchanged', function () {
            smartScrollBar.disabled = true;
            smartScrollBar._farButtonClickHandler();

            expect(smartScrollBar.value).toBe(50);
            expect(smartScrollBar.getAttribute('value')).toBe('50');
        });
    });

    describe('if is clicked near button', function () {
        it('once, then the value is decreased with 1 step (50->40)', function () {
            smartScrollBar._nearButtonClickHandler();

            expect(smartScrollBar.value).toBe(40);
            expect(smartScrollBar.getAttribute('value')).toBe('40');

        });

        it('twice, then the value is increased with 2 times with steps (50->30)', function () {
            smartScrollBar.value = 50;
            smartScrollBar._nearButtonClickHandler();

            expect(smartScrollBar.value).toBe(40);
            expect(smartScrollBar.getAttribute('value')).toBe('40');

            smartScrollBar._nearButtonClickHandler();

            expect(smartScrollBar.value).toBe(30);
            expect(smartScrollBar.getAttribute('value')).toBe('30');
        });

        it(' and value == min, the value remains unchanged', function () {
            smartScrollBar.value = 0;
            smartScrollBar._nearButtonClickHandler();

            expect(smartScrollBar.value).toBe(0);
            expect(smartScrollBar.getAttribute('value')).toBe('0');
        });

        it(' and value - step < min, the value goes equal to min', function () {
            smartScrollBar.value = 1;
            smartScrollBar._nearButtonClickHandler();

            expect(smartScrollBar.value).toBe(0);
            expect(smartScrollBar.getAttribute('value')).toBe('0');
        });

        it(' and the widget is disabled, value remains unchanged', function () {
            smartScrollBar.disabled = true;
            smartScrollBar._nearButtonClickHandler();

            expect(smartScrollBar.value).toBe(50);
            expect(smartScrollBar.getAttribute('value')).toBe('50');
        });
    });

    describe('the thumb is dragged', function () {
        it('on horizontal scrollbar to right, the value increases', function () {
            let event = { clientX: 300, clientY: 70 };
            smartScrollBar._dragStartHandler(event);

            smartScrollBar.thumbCapture = true;
            event = { clientX: 600, clientY: 50 };
            smartScrollBar._dragHandler(event);

            smartScrollBar._dragEndHandler();

            expect(smartScrollBar.value).toBe(100);
            expect(smartScrollBar.getAttribute('value')).toBe('100');
        });

        it('on horizontal scrollbar to left, the value decreases', function () {
            let event = { clientX: 300, clientY: 70 };
            smartScrollBar._dragStartHandler(event);

            smartScrollBar.thumbCapture = true;
            event = { clientX: 0, clientY: 50 };
            smartScrollBar._dragHandler(event);

            smartScrollBar._dragEndHandler();

            expect(smartScrollBar.value).toBe(0);
            expect(smartScrollBar.getAttribute('value')).toBe('0');
        });

        it('on horizontal scrollbar to top, the value increases', function () {
            smartScrollBar.orientation = 'vertical';
            smartScrollBar.style.width = '100px';
            smartScrollBar.style.height = '500px';

            let event = { clientX: 70, clientY: 300 };
            smartScrollBar._dragStartHandler(event);

            smartScrollBar.thumbCapture = true;
            event = { clientX: 70, clientY: 0 };
            smartScrollBar._dragHandler(event);

            smartScrollBar._dragEndHandler();

            expect(smartScrollBar.value).toBe(0);
            expect(smartScrollBar.getAttribute('value')).toBe('0');
        });

        it('on horizontal scrollbar to left, the value decreases', function () {
            let event = { clientX: 70, clientY: 300 };
            smartScrollBar._selectStartHandler(event);
            smartScrollBar.orientation = 'vertical';
            smartScrollBar.style.width = '100px';
            smartScrollBar.style.height = '500px';

            smartScrollBar._dragStartHandler(event);

            smartScrollBar.thumbCapture = true;
            event = { clientX: 70, clientY: 600 };
            smartScrollBar._dragHandler(event);

            smartScrollBar._dragEndHandler();

            expect(smartScrollBar.value).toBe(100);
            expect(smartScrollBar.getAttribute('value')).toBe('100');
        });
    });

    describe('the track is clicked', function () {
        it('on horizontal scrollbar close to the left side, the value decreases', function () {
            let event = { target: smartScrollBar.$.track, pageX: 50, pageY: 70 };
            smartScrollBar._trackDownHandler(event);
            smartScrollBar._trackClickHandler(event);

            expect(smartScrollBar.value).toBe(0);
            expect(smartScrollBar.getAttribute('value')).toBe('0');
        });

        it('on horizontal scrollbar close to the right side, the value increases', function () {
            let event = { target: smartScrollBar.$.track, pageX: 500, pageY: 70 };
            smartScrollBar._trackDownHandler(event);
            smartScrollBar._trackClickHandler(event);

            expect(smartScrollBar.value).toBe(100);
            expect(smartScrollBar.getAttribute('value')).toBe('100');
        });
    });

    describe('the widget is resized', function () {
        it('on horizontal scrollbar value remains unchanged', function () {
            smartScrollBar.style.width = '800px';
            smartScrollBar.style.height = '100px';

            smartScrollBar._resizeHandler();

            expect(smartScrollBar.value).toBe(50);
            expect(smartScrollBar.getAttribute('value')).toBe('50');
        });

        it('on vertical scrollbar value remains unchanged', function () {
            smartScrollBar.orientation = 'vertical';
            smartScrollBar.style.width = '100px';
            smartScrollBar.style.height = '800px';

            smartScrollBar._resizeHandler();

            expect(smartScrollBar.value).toBe(50);
            expect(smartScrollBar.getAttribute('value')).toBe('50');
        });
    });

    describe(' testing _calculateThumbSize ', function () {
        it(' with minimal min-max range', function () {
            smartScrollBar.min = 1;
            smartScrollBar.max = 1;

            smartScrollBar._calculateThumbSize();

            expect(smartScrollBar.$.thumb.className.indexOf('smart-hidden') > -1).toBe(true);
        });
        it(' with normal min-max range', function () {
            smartScrollBar.min = 1;
            smartScrollBar.max = 2;
            smartScrollBar._calculateThumbSize();

            smartScrollBar.min = 1;
            smartScrollBar.max = 5;
            smartScrollBar._calculateThumbSize();

            expect(smartScrollBar.$.thumb.className.indexOf('smart-hidden') === -1).toBe(true);
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
