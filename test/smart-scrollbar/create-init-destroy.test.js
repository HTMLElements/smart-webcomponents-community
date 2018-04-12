var describe,
    it,
    expect,
    document,
    beforeAll,
    afterAll;

describe('Testing smart-scroll-bar, dynamicaly created and destroyed multiple times', function () {
    'use strict';

    describe('if it created dynamicaly', function () {
        it('exists in DOM', function () {
            let smartScrollBar = document.createElement('smart-scroll-bar');
            document.body.appendChild(smartScrollBar);
            expect(smartScrollBar).toBeInDOM();

            document.body.removeChild(document.querySelector('smart-scroll-bar'));
            expect(smartScrollBar).not.toBeInDOM();
        });

        it('can set dynamically the "value" property', function () {
            let smartScrollBar = document.createElement('smart-scroll-bar');
            document.body.appendChild(smartScrollBar);

            smartScrollBar.value = 10;
            expect(smartScrollBar.value).toBe(10);
            expect(smartScrollBar.getAttribute('value')).toBe('10');

            smartScrollBar.value = 20;
            expect(smartScrollBar.value).toBe(20);
            expect(smartScrollBar.getAttribute('value')).toBe('20');

            document.body.removeChild(document.querySelector('smart-scroll-bar'));
            expect(smartScrollBar).not.toBeInDOM();
        });

        it('can set dynamically the "value" property via attribute', function () {
            let smartScrollBar = document.createElement('smart-scroll-bar');
            document.body.appendChild(smartScrollBar);

            smartScrollBar.setAttribute('value', 10);
            expect(smartScrollBar.value).toBe(10);
            expect(smartScrollBar.getAttribute('value')).toBe('10');

            smartScrollBar.setAttribute('value', 20);
            expect(smartScrollBar.value).toBe(20);
            expect(smartScrollBar.getAttribute('value')).toBe('20');

            document.body.removeChild(document.querySelector('smart-scroll-bar'));
            expect(smartScrollBar).not.toBeInDOM();
        });


        it('can set dynamically "min" and "max" properties', function () {
            let smartScrollBar = document.createElement('smart-scroll-bar');
            document.body.appendChild(smartScrollBar);

            smartScrollBar.value = 10;
            smartScrollBar.min = 0;
            smartScrollBar.max = 20;
            expect(smartScrollBar.value).toBe(10);
            expect(smartScrollBar.getAttribute('value')).toBe('10');

            smartScrollBar.max = 25;
            smartScrollBar.value = 20;
            smartScrollBar.min = 5;
            expect(smartScrollBar.value).toBe(20);
            expect(smartScrollBar.getAttribute('value')).toBe('20');

            document.body.removeChild(document.querySelector('smart-scroll-bar'));
            expect(smartScrollBar).not.toBeInDOM();
        });
    });
});
