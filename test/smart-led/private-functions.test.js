var describe,
    it,
    expect,
    document,
    beforeAll,
    afterAll;

describe('Testing smart-led, private functions', function () {
    'use strict';

    describe('if it created dynamicaly', function () {
        it('exists in DOM', function () {
            let led = document.createElement('smart-led');
            document.body.appendChild(led);
            expect(led).toBeInDOM();

            document.body.removeChild(document.querySelector('smart-led'));
            expect(led).not.toBeInDOM();
        });
    });

    describe('testing the event handlers', function () {
        it('document up handler', function () {
            let led = document.createElement('smart-led'),
                e = { preventDefault: function () { }, stopPropagation: function () { } };

            document.body.appendChild(led);

            led.clickMode = 'press';
            led._mouseDownHandler();
            led._documentUpHandler(e);
            expect(led.clickMode).toEqual('press');

            led.clickMode = 'release';
            led._mouseDownHandler();
            expect(led._pressed).toBe(true);
            led._documentUpHandler(e);
            expect(led.clickMode).toEqual('release');
            expect(led.indeterminate).toBe(false);
            expect(led._pressed).toBe(false);

            document.body.removeChild(document.querySelector('smart-led'));
            expect(led).not.toBeInDOM();
        });

        it('mouse down handler', function () {
            let led = document.createElement('smart-led');

            document.body.appendChild(led);

            led.clickMode = 'press';
            led._mouseDownHandler();
            expect(led._pressed).toBe(true);
            expect(led.clickMode).toEqual('press');
            expect(led.indeterminate).toBe(false);

            document.body.removeChild(document.querySelector('smart-led'));
            expect(led).not.toBeInDOM();
        });
    });
});
