var describe,
    it,
    expect,
    document,
    beforeEach;
describe('Testing smart-button create-multiple-with-script', function () {
    'use strict';
    let button;
    jasmine.getFixtures().fixturesPath = 'base/test/smartbutton/fixtures';
    jasmine.getFixtures().preload('smart-button-attributes-synchronization.htm');
    beforeEach(function () {
        loadFixtures('smart-button-attributes-synchronization.htm');
        button = document.querySelector('smart-button');
    });
    describe('if it', function () {
        it('exists in DOM', function () {
            expect(document.querySelector('smart-button')).toBeInDOM();
        });
    });

    // Create N more elements of each kind and set them properties
    let createElements = function (selector, count) {
        let doc = document;
        while (count > 0) {
            count--;
            selector = document.createElement('smart-button');
            doc.body.appendChild(selector);

            // Applying properties
            selector.value = 'button1';
            selector.name = 'mybutton';
            selector.type = 'submit';
            selector.clickMode = 'hover';

            //Checking if properties are set
            expect(selector.value).toEqual('button1');
            expect(selector.name).toEqual('mybutton');
            expect(selector.type).toEqual('submit');
            expect(selector.clickMode).toEqual('hover');
        }
    }

    //Removing the elements from the DOM
    let removeElements = function () {
        let buttons = document.getElementsByTagName('smart-button'),
        count = buttons.length;
        //expect(count).toBe(11);

        while (count > 1) {
            count--;
            document.body.removeChild(buttons[count]);
        }
    }

    describe('Creating other elements while test is running,', function () {
        it('set properties to them and before the test ends we remove them', function () {
            let doc = document,
                switchButton2;

            //Setting the setings of the switch button created with the fixture
            button.value = 'button';
            button.name = 'button';
            button.type = 'submit';
            button.clickMode = 'press';

            createElements(switchButton2, 10)
            removeElements();

            expect(button.value).toEqual('button');
            expect(button.name).toEqual('button');
            expect(button.type).toEqual('submit');
            expect(button.clickMode).toEqual('press');

            expect(doc.getElementsByTagName('smart-button').length).toBe(1);
        });
    });
    describe('Creating and destroying other elements while the test is running,', function () {
        it('set properties to them and before the test ends we remove them', function () {
            let doc = document,
                switchButton2;

            createElements(switchButton2, 10)
            removeElements();

            //Setting the setings of the switch button created with the fixture
            button.value = 'button';
            button.name = 'button';
            button.type = 'submit';
            button.clickMode = 'release';

            createElements(switchButton2, 10)
            removeElements();

            expect(button.value).toEqual('button');
            expect(button.name).toEqual('button');
            expect(button.type).toEqual('submit');
            expect(button.clickMode).toEqual('release');
            expect(doc.getElementsByTagName('smart-button').length).toBe(1);
        });
    });
});
