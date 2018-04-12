var describe,
    it,
    expect,
    document,
    beforeEach;
describe('Testing smart-progress-bar create-with-script', function () {
    'use strict';
    let progressBarLinear,
    progressBarCircular;
    jasmine.getFixtures().fixturesPath = 'base/test/GitHub/smartprogressbar/fixtures';
    jasmine.getFixtures().preload('smart-progress-bar-attribute-synchronization.htm');
    beforeEach(function () {
        loadFixtures('smart-progress-bar-attribute-synchronization.htm');
        progressBarLinear = document.querySelector('smart-progress-bar');
        progressBarCircular = document.querySelector('smart-circular-progress-bar');
    });
    describe('if it', function () {
        it('exists in DOM', function () {
            expect(document.querySelector('smart-progress-bar')).toBeInDOM();
            expect(document.querySelector('smart-circular-progress-bar')).toBeInDOM();
        });
    });
    describe('Creating other widgets while test is running,', function () {
        it('set properties to them and before the test ends we remove them', function () {

            //Setting the setings of the progress bars created with the fixture
            progressBarCircular.value = 50;
            progressBarCircular.min = 20;
            progressBarCircular.max = 200;
            progressBarCircular.inverted = true;
            progressBarCircular.showProgressValue = true;
            progressBarLinear.value = 50;
            progressBarLinear.min = 20;
            progressBarLinear.max = 200;
            progressBarLinear.inverted = true;
            progressBarLinear.showProgressValue = true;

            // Create 10 more widgets of each kind
            let count = 10;
            while (count > 0) {
                count--;
                let progressBarLinear2 = document.createElement('smart-progress-bar'),
                    progressBarCircular2 = document.createElement('smart-circular-progress-bar');
                document.body.appendChild(progressBarLinear2);
                document.body.appendChild(progressBarCircular2);

                // Applying properties
                progressBarLinear2.value = 50;
                progressBarLinear2.min = 20;
                progressBarLinear2.max = 200;
                progressBarLinear2.inverted = true;
                progressBarLinear2.showProgressValue = true;
                progressBarCircular2.value = 50;
                progressBarCircular2.min = 20;
                progressBarCircular2.max = 200;
                progressBarCircular2.inverted = true;
                progressBarCircular2.showProgressValue = true;

                //Checking if properties are set
                expect(progressBarLinear2.value).toBe(50);
                expect(progressBarLinear2.min).toBe(20);
                expect(progressBarLinear2.max).toBe(200);
                expect(progressBarLinear2.inverted).toBe(true);
                expect(progressBarLinear2.showProgressValue).toBe(true);
                expect(progressBarCircular2.value).toBe(50);
                expect(progressBarCircular2.min).toBe(20);
                expect(progressBarCircular2.max).toBe(200);
                expect(progressBarCircular2.inverted).toBe(true);
                expect(progressBarCircular2.showProgressValue).toBe(true);
            }

            //Removing the elements from the DOM
            let linearBars = document.getElementsByTagName('smart-progress-bar'),
            circularBars = document.getElementsByTagName('smart-circular-progress-bar');
            count = linearBars.length;
            expect(count).toBe(11);

            while (count > 1) {
                count--;
                document.body.removeChild(linearBars[count]);
                document.body.removeChild(circularBars[count]);
            }
            expect(document.getElementsByTagName('smart-progress-bar').length).toBe(1);
        });
    });
});
