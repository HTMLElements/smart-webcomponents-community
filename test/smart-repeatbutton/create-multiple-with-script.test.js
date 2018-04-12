var describe,
    it,
    expect,
    document,
    beforeEach;
describe('Testing smart-repeat-button create-with-script', function () {
    'use strict';
    let repeatButton;
    jasmine.getFixtures().fixturesPath = 'base/test/smartrepeatbutton/fixtures';
    jasmine.getFixtures().preload('smart-repeat-button-attributes-synchronization.htm');
    beforeEach(function () {
        loadFixtures('smart-repeat-button-attributes-synchronization.htm');
        repeatButton = document.querySelector('smart-repeat-button');
    });
    describe('if it', function () {
        it('exists in DOM', function () {
            expect(document.querySelector('smart-repeat-button')).toBeInDOM();
        });
    });

    // Create N more elements of each kind and set them properties
    let createElements = function (selector, count) {
        let doc = document;
        while (count > 0) {
            count--;
            selector = document.createElement('smart-repeat-button');
            doc.body.appendChild(selector);

            // Applying properties
            selector.value = 'button1';
            selector.delay = 125;
            selector.initialDelay = 250;
            selector.name = 'mybutton';
            selector.type = 'submit';
            selector.clickMode = 'hover';

            //Checking if properties are set
            expect(selector.value).toEqual('button1');
            expect(selector.name).toEqual('mybutton');
            expect(selector.delay).toBe(125);
            expect(selector.initialDelay).toBe(250);
            expect(selector.type).toEqual('submit');
            expect(selector.clickMode).toEqual('hover');
        }
    }

    //Removing the elements from the DOM
    let removeElements = function () {
        let repeatButtons = document.getElementsByTagName('smart-repeat-button'),
        count = repeatButtons.length;
        //expect(count).toBe(11);

        while (count > 1) {
            count--;
            document.body.removeChild(repeatButtons[count]);
        }
    }

    describe('Creating other elements while test is running,', function () {
        it('set properties to them and before the test ends we remove them', function () {
            let doc = document,
                repeatButton2;
            //Setting the setings of the repeat button created with the fixture
            repeatButton.value = 'button';
            repeatButton.delay = 60;
            repeatButton.initialDelay = 101;
            repeatButton.name = 'button';
            repeatButton.type = 'submit';
            repeatButton.clickMode = 'press';

            createElements(repeatButton2, 10)
            removeElements();

            expect(repeatButton.value).toEqual('button');
            expect(repeatButton.name).toEqual('button');
            expect(repeatButton.delay).toBe(60);
            expect(repeatButton.initialDelay).toBe(101);
            expect(repeatButton.type).toEqual('submit');
            expect(repeatButton.clickMode).toEqual('press');

            expect(doc.getElementsByTagName('smart-repeat-button').length).toBe(1);
        });
    });
    describe('Creating and destroying other elements while the test is running,', function () {
        it('set properties to them and before the test ends we remove them', function () {
            let doc = document,
                repeatButtons2;

            createElements(repeatButtons2, 10)
            removeElements();

            //Setting the setings of the repeat button created with the fixture
            repeatButton.value = 'button';
            repeatButton.name = 'button';
            repeatButton.type = 'submit';
            repeatButton.clickMode = 'release';

            createElements(repeatButtons2, 10)
            removeElements();

            expect(repeatButton.value).toEqual('button');
            expect(repeatButton.name).toEqual('button');
            expect(repeatButton.type).toEqual('submit');
            expect(repeatButton.clickMode).toEqual('release');
            expect(doc.getElementsByTagName('smart-repeat-button').length).toBe(1);
        });
    });
});
