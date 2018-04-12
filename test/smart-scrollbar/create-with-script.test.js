var describe,
    it,
    expect,
    document,
    beforeAll,
    afterAll;
describe('Testing smart-scroll-bar created with script', function () {
    'use strict';
    let smartScrollBar;

    describe('if it ', function () {
        it('exists in DOM', function () {
            smartScrollBar = document.createElement('smart-scroll-bar');
            smartScrollBar.style.width = '1000px';
            smartScrollBar.style.height = '50px';
            document.body.appendChild(smartScrollBar);

            expect(smartScrollBar).toBeInDOM();
        });
    });

    describe('to have the following default settings on initialization ', function () {
        it('largeStep => 100', function () {
             expect(smartScrollBar.largeStep).toBe(100);
        });
        it('min => 0', function () {
            expect(smartScrollBar.min).toBe(0);
        });
        it('max => 1000', function () {
            expect(smartScrollBar.max).toBe(1000);
        });
        it('orientation => horizontal', function () {
            expect(smartScrollBar.orientation).toBe('horizontal');
        });
        it('step => 10', function () {
            expect(smartScrollBar.step).toBe(10);
        });
        it('value => 0', function () {
            expect(smartScrollBar.value).toBe(0);
        });
        it('disabled => false', function () {
            expect(smartScrollBar.disabled).toBe(false);
        });
    });

    describe('properties could be changed correctly', function () {
        it('value => 100', function () {
            smartScrollBar.value = 100;
            expect(smartScrollBar.value).toBe(100);
        });
        it('min=> 100', function () {
            smartScrollBar.min = 100;
            expect(smartScrollBar.min).toBe(100);
        });
        it('max => 200', function () {
            smartScrollBar.max = 200;
            expect(smartScrollBar.max).toBe(200);
        });
        it('orientation => vertical', function () {
            smartScrollBar.orientation = 'vertical';
            expect(smartScrollBar.orientation).toBe('vertical');
        });

    });

    describe('could be successfully', function () {
        it('destroyed', function () {
            document.body.removeChild(document.querySelector('smart-scroll-bar'));
            expect(smartScrollBar).not.toBeInDOM();
        });
    });
});
