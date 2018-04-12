var describe,
    it,
    expect,
    document,
    beforeAll,
    afterAll;
describe('Testing smart-progress-bar create-with-script', function () {
    'use strict';
    let progressBarCircular;

    beforeAll(function () {
        progressBarCircular = document.createElement('smart-circular-progress-bar');
        document.body.appendChild(progressBarCircular);
    });

    afterAll(function () {
        document.body.removeChild(progressBarCircular);
    });

    describe('if it ', function () {
        it('exists in DOM', function () {
            expect(document.querySelector('smart-circular-progress-bar')).toBeInDOM();
        });

        it('resizes correctly when width/height changes', function () {
            progressBarCircular.style.width = '250px';
            progressBarCircular.style.height = '350px';
            progressBarCircular._resizeHandler();
            expect(progressBarCircular.$.container.offsetWidth).toEqual(progressBarCircular.$.container.offsetHeight);
            expect(progressBarCircular.$.container.offsetWidth).toBe(250);
        });

        it('updateProgress in IE or EDGE', function () {

            window.StyleMedia = true;
            progressBarCircular.value = 25;
            expect(progressBarCircular.$.value).toHaveAttr('class', 'smart-value');

            progressBarCircular.value = null;
            expect(progressBarCircular.$.value.classList.contains('smart-value-animation-ms')).toBe(true);
            expect(progressBarCircular.$.value.classList.contains('smart-value-animation-ms')).toBe(true);
            delete window.styleMedia;
        });
    });
});
