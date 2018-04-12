var describe,
    it,
    expect,
    document,
    beforeEach;
describe('Testing smart-power-button create-multiple-with-script', function () {
    'use strict';
    let powerButton;
    jasmine.getFixtures().fixturesPath = 'base/test/smartpowerbutton/fixtures';
    jasmine.getFixtures().preload('smart-power-button-attributes-synchronization.htm');
    beforeEach(function () {
        loadFixtures('smart-power-button-attributes-synchronization.htm');
        powerButton = document.querySelector('smart-power-button');
    });
    describe('if it', function () {
        it('exists in DOM', function () {
            expect(document.querySelector('smart-power-button')).toBeInDOM();
        });
    });

    // Create N more elements of each kind and set them properties
    let createElements = function (selector, count) {
        let doc = document;
        while (count > 0) {
            count--;
            selector = document.createElement('smart-power-button');
            doc.body.appendChild(selector);

            // Applying properties
            selector.checked = true;
            selector.value = 'powerButton1';
            selector.name = 'myPowerbutton1';
            selector.type = 'submit';
            selector.clickMode = 'hover';

            //Checking if properties are set
            expect(selector.checked).toBe(true);
            expect(selector.value).toEqual('powerButton1');
            expect(selector.name).toEqual('myPowerbutton1');
            expect(selector.type).toEqual('submit');
            expect(selector.clickMode).toEqual('hover');
        }
    }

    //Removing the elements from the DOM
    let removeElements = function () {
        let powerButtons = document.getElementsByTagName('smart-power-button'),
        count = powerButtons.length;

        while (count > 1) {
            count--;
            document.body.removeChild(powerButtons[count]);
        }
    }

    describe('Creating other elements while test is running,', function () {
        it('set properties to them and before the test ends we remove them', function () {
            let doc = document,
                powerButton2;

            //Setting the setings of the power button created with the fixture
            powerButton.checked = true;
            powerButton.value = 'powerButton';
            powerButton.name = 'myPowerbutton';
            powerButton.type = 'submit';
            powerButton.clickMode = 'press';

            createElements(powerButton2, 10)
            removeElements();

            expect(powerButton.checked).toBe(true);
            expect(powerButton.value).toEqual('powerButton');
            expect(powerButton.name).toEqual('myPowerbutton');
            expect(powerButton.type).toEqual('submit');
            expect(powerButton.clickMode).toEqual('press');

            expect(doc.getElementsByTagName('smart-power-button').length).toBe(1);
        });
    });
    describe('Creating and destroying other elements while the test is running,', function () {
        it('set properties to them and before the test ends we remove them', function () {
            let doc = document,
                powerButton2;

            createElements(powerButton2, 10)
            removeElements();

            //Setting the setings of the switch button created with the fixture
            powerButton.checked = true;
            powerButton.value = 'powerButton2';
            powerButton.name = 'myPowerbutton2';
            powerButton.type = 'submit';
            powerButton.clickMode = 'release';

            createElements(powerButton2, 10)
            removeElements();

            expect(powerButton.checked).toBe(true);
            expect(powerButton.value).toEqual('powerButton2');
            expect(powerButton.name).toEqual('myPowerbutton2');
            expect(powerButton.type).toEqual('submit');
            expect(powerButton.clickMode).toEqual('release');
            expect(doc.getElementsByTagName('smart-power-button').length).toBe(1);
        });
    });
});
