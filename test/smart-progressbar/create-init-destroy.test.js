var describe,
    it,
    expect,
    document,
    beforeEach,
    afterEach;
describe('Testing smart-progress-bar create-with-script', function () {
    'use strict';
    let progressBarLinear,
    progressBarCircular;

    beforeEach(function () {
        progressBarLinear = document.createElement('smart-progress-bar'),
        progressBarCircular = document.createElement('smart-circular-progress-bar');
        document.body.appendChild(progressBarLinear);
        document.body.appendChild(progressBarCircular);
    });

    afterEach(function () {
        document.body.removeChild(progressBarLinear);
        document.body.removeChild(progressBarCircular);
    });

    describe('if it', function () {
        it('exists in DOM', function () {
            expect(document.querySelector('smart-progress-bar')).toBeInDOM();
            expect(document.querySelector('smart-circular-progress-bar')).toBeInDOM();
        });
    });
    describe('if it\'s possible to set a number of properties to the element after creation', function () {
        it('in a scenario where the user sets min, max and then a value', function () {
            progressBarLinear.min = 50;
            progressBarCircular.min = 50;
            progressBarLinear.max = 100;
            progressBarCircular.max = 100;
            progressBarLinear.value = 70;
            progressBarCircular.value = 70;
            expect(progressBarLinear.min).toBe(50);
            expect(progressBarLinear.max).toBe(100);
            expect(progressBarLinear.value).toBe(70);
            expect(progressBarCircular.min).toBe(50);
            expect(progressBarCircular.max).toBe(100);
            expect(progressBarCircular.value).toBe(70);
        });
        it('in a scenario where the user sets a value then the inverted property', function () {
            progressBarLinear.value = 50;
            progressBarCircular.value = 50;
            progressBarLinear.inverted = true;
            progressBarCircular.inverted = true;
            expect(progressBarLinear.inverted).toBe(true);
            expect(progressBarCircular.inverted).toBe(true);
            expect(progressBarLinear.value).toBe(50);
            expect(progressBarCircular.value).toBe(50);
        });
        it('in a scenario where the user sets min, value and showProgressValue', function () {
            progressBarLinear.min = 10;
            progressBarLinear.value = 30;
            progressBarLinear.showProgressValue = true;
            progressBarCircular.min = 10;
            progressBarCircular.value = 30;
            progressBarCircular.showProgressValue = true;
            expect(progressBarLinear.min).toBe(10);
            expect(progressBarLinear.value).toBe(30);
            expect(progressBarLinear.getElementsByClassName('smart-label')[0].innerHTML).toEqual('22%');
            expect(progressBarCircular.min).toBe(10);
            expect(progressBarCircular.value).toBe(30);
            expect(progressBarCircular.getElementsByClassName('smart-label')[0].innerHTML).toEqual('22%');
        });
        it('in a scenario where the user sets value, showProgressValue and a formatingFunction', function () {
            progressBarLinear.value = 35;
            progressBarCircular.value = 35;
            progressBarCircular.showProgressValue = true;
            progressBarLinear.showProgressValue = true;
            progressBarLinear.formatFunction = function (value) {
                return value + '$';
            }
            progressBarCircular.formatFunction = function (value) {
                return value + '$';
            }
            expect(progressBarLinear.getElementsByClassName('smart-label')[0].innerHTML).toEqual('35$');
            expect(progressBarCircular.getElementsByClassName('smart-label')[0].innerHTML).toEqual('35$');
        });
        it('in a scenario where the user sets a value, showProgressValue and changes the orientation of the linear bar', function () {
            progressBarLinear.value = 50;
            progressBarLinear.showProgressValue = true;
            progressBarLinear.orientation = 'vertical';
            expect(progressBarLinear.value).toBe(50);
            expect(progressBarLinear.showProgressValue).toBe(true);
            expect(progressBarLinear.orientation).toBe('vertical');
        });
        it('in a scenario where the user sets all the values', function () {
            progressBarLinear.value = 50;
            progressBarLinear.min = 20;
            progressBarLinear.max = 200;
            progressBarLinear.orientation = 'vertical';
            progressBarLinear.showProgressValue = true;
            progressBarCircular.value = 50;
            progressBarCircular.min = 20;
            progressBarCircular.max = 200;
            progressBarCircular.showProgressValue = true;
            expect(progressBarLinear.value).toBe(50);
            expect(progressBarLinear.min).toBe(20);
            expect(progressBarLinear.max).toBe(200);
            expect(progressBarLinear.orientation).toEqual('vertical');
            expect(progressBarLinear.showProgressValue).toBe(true);
            expect(progressBarCircular.value).toBe(50);
            expect(progressBarCircular.min).toBe(20);
            expect(progressBarCircular.max).toBe(200);
            expect(progressBarCircular.showProgressValue).toBe(true);
        });
    });
    describe('if it\'s possible to set a property, make other changes and then set it back', function () {
        it('a case when orientation is set, then value and inverted are changed and the orientation is reset', function () {
            progressBarLinear.orientation = 'vertical';
            progressBarLinear.value = 50;
            progressBarLinear.inverted = true;
            progressBarLinear.orientation = 'horizontal';
            expect(progressBarLinear.value).toBe(50);
            expect(progressBarLinear.inverted).toBe(true);
            expect(progressBarLinear.orientation).toEqual('horizontal');
        });
        it('a case when a formatingFunction is set, then showProgressValue and finally value is changed', function () {
            progressBarCircular.value = 50;
            progressBarCircular.formatFunction = function (value) {
                return value + '#';
            };

            expect(progressBarCircular.showProgressValue).toBe(false);

            progressBarCircular.showProgressValue = true;

            expect(progressBarCircular.getElementsByClassName('smart-label')[0].innerHTML).toEqual('50#');

            progressBarCircular.formatFunction = function (value) {
                return value + '%';
            };
            progressBarCircular.inverted = true;

            expect(progressBarCircular.inverted).toBe(true);

            progressBarCircular.inverted = false;

            expect(progressBarCircular.value).toBe(50);
            expect(progressBarCircular.getElementsByClassName('smart-label')[0].innerHTML).toEqual('50%');
            expect(progressBarCircular.showProgressValue).toBe(true);
            expect(progressBarCircular.inverted).toBe(false);
        });
    });
});
