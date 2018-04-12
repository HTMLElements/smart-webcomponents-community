var describe,
    jasmine,
    beforeEach,
    loadFixtures,
    it,
    expect,
    document;
describe('Testing smart-progressbar-demo', function () {
    'use strict';
    let progressBarLinear,
    progressBarCircular;
    jasmine.getFixtures().fixturesPath = 'base/test/smartprogressbar/fixtures';
    jasmine.getFixtures().preload('smart-progress-bar-attribute-synchronization.htm');
    beforeEach(function () {
        loadFixtures('smart-progress-bar-attribute-synchronization.htm');
        progressBarLinear = document.querySelector('smart-progress-bar');
        progressBarCircular = document.querySelector('smart-circular-progress-bar');
    });
    describe('if it ', function () {
        it('exists in DOM', function () {
            expect(document.querySelector('smart-progress-bar')).toBeInDOM();
            expect(document.querySelector('smart-circular-progress-bar')).toBeInDOM();
        });
    });
    describe('if the property', function () {
        it('indeterminate set to it\'s default value of false', function () {
            expect(progressBarLinear.indeterminate).toBe(false);
            expect(progressBarCircular.indeterminate).toBe(false);
        });
        it('inverted is set to it\'s default value of "normal"', function () {
            expect(progressBarLinear.inverted).toBe(false);
            expect(progressBarCircular.inverted).toBe(false);
        });
        it('formatFunction is set to it\'s default value null', function () {
            expect(progressBarLinear.formatFunction).toBe(null);
            expect(progressBarCircular.formatFunction).toBe(null);
        });
        it('max is set to it\'s default value of 100', function () {
            expect(progressBarLinear.max).toBe(100);
            expect(progressBarCircular.max).toBe(100);
        });
        it('min is set to it\'s default value 0', function () {
            expect(progressBarLinear.min).toBe(0);
            expect(progressBarCircular.min).toBe(0);
        });
        it('orientation set to it\'s default value of "horizontal"', function () {
            expect(progressBarLinear.orientation).toEqual('horizontal');
        });
        it('showProgressValue is set to it\'s default value of "false"', function () {
            expect(progressBarLinear.showProgressValue).toBe(false);
            expect(progressBarCircular.showProgressValue).toBe(false);
        });
        it('value set to it\'s default value of 0', function () {
            expect(progressBarLinear.value).toBe(0);
            expect(progressBarCircular.value).toBe(0);
        });
    });
    describe('if it\'s possible to dynamically set the property', function () {
        it('indeterminate to "true"', function () {
            progressBarLinear.indeterminate = true;
            progressBarCircular.indeterminate = true;
            expect(progressBarLinear.indeterminate).toBe(true);
            expect(progressBarCircular.indeterminate).toBe(true);
        });
        it('inverted to "false"', function () {
            progressBarLinear.inverted = true;
            progressBarCircular.inverted = true;
            expect(progressBarLinear.inverted).toBe(true);
            expect(progressBarCircular.inverted).toBe(true);
        });
        it('formatFunction to change the label to "0$"', function () {
            progressBarCircular.showProgressValue = true;
            progressBarLinear.showProgressValue = true;
            progressBarLinear.formatFunction = function (value) {
                return value + '$';
            }
            progressBarCircular.formatFunction = function (value) {
                return value + '$';
            }
            expect(progressBarLinear.getElementsByClassName('smart-label')[0].innerHTML).toEqual('0$');
            expect(progressBarCircular.getElementsByClassName('smart-label')[0].innerHTML).toEqual('0$');
        });
        it('max to 20', function () {
            progressBarLinear.max = 20;
            progressBarCircular.max = 20;
            expect(progressBarLinear.max).toBe(20);
            expect(progressBarCircular.max).toBe(20);
        });
        it('min to 10', function () {
            progressBarLinear.min = 10;
            progressBarCircular.min = 10;
            expect(progressBarLinear.min).toBe(10);
            expect(progressBarCircular.min).toBe(10);
        });
        it('showProgressValue to true', function () {
            progressBarLinear.showProgressValue = true;
            progressBarCircular.showProgressValue = true;
            expect(progressBarLinear.getElementsByClassName('smart-label')[0].innerHTML).toEqual('0%');
            expect(progressBarCircular.getElementsByClassName('smart-label')[0].innerHTML).toEqual('0%');
        });
        it('type to vertical', function () {
            progressBarLinear.orientation = 'vertical';
            expect(progressBarLinear.orientation).toEqual('vertical');
        });
        it('value to 55', function () {
            progressBarLinear.value = 55;
            progressBarCircular.value = 55;
            expect(progressBarLinear.value).toEqual(55);
            expect(progressBarCircular.value).toEqual(55);
        });
    });
});
