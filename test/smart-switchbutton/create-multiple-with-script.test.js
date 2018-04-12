var describe,
    it,
    expect,
    document,
    beforeEach;
describe('Testing smart-progress-bar create-with-script', function () {
    'use strict';
    let switchButton;
    jasmine.getFixtures().fixturesPath = 'base/test/smartswitchbutton/fixtures';
    jasmine.getFixtures().preload('smart-switch-button-attributes-synchronization.htm');
    beforeEach(function () {
        loadFixtures('smart-switch-button-attributes-synchronization.htm');
        switchButton = document.querySelector('smart-switch-button');
    });
    describe('if it', function () {
        it('exists in DOM', function () {
            expect(document.querySelector('smart-switch-button')).toBeInDOM();
        });
    });

    // Create N more elements of each kind and set them properties
    let createElemnets = function (selector, count) {
        let doc = document;
        while (count > 0) {
            count--;
            selector = document.createElement('smart-switch-button');
            doc.body.appendChild(selector);

            // Applying properties
            selector.checked = true;
            selector.orientation = 'horizontal';
            selector.inverted = true;
            selector.switchMode = 'drag';

            //Checking if properties are set
            expect(selector.checked).toBe(true);
            expect(selector.orientation).toBe('horizontal');
            expect(selector.inverted).toBe(true);
            expect(selector.switchMode).toEqual('drag');
        }
    }

    //Removing the elements from the DOM
    let removeElements = function () {
        let switchButtons = document.getElementsByTagName('smart-switch-button'),
        count = switchButtons.length;
        //expect(count).toBe(11);

        while (count > 1) {
            count--;
            document.body.removeChild(switchButtons[count]);
        }
    }

    describe('Creating other elements while test is running,', function () {
        it('set properties to them and before the test ends we remove them', function () {
            let doc = document,
                switchButton2;
            //Setting the setings of the switch button created with the fixture
            switchButton.checked = true;
            switchButton.orientation = 'vertical';
            switchButton.inverted = false;
            switchButton.switchMode = 'click';

            createElemnets(switchButton2, 10)
            removeElements();

            expect(switchButton.checked).toBe(true);
            expect(switchButton.orientation).toBe('vertical');
            expect(switchButton.switchMode).toBe('click');
            expect(switchButton.inverted).toBe(false);

            expect(doc.getElementsByTagName('smart-switch-button').length).toBe(1);
        });
    });
    describe('Creating and destroying other elements while the test is running,', function () {
        it('set properties to them and before the test ends we remove them', function () {
            let doc = document,
                switchButton2;

            //Setting the setings of the switch button created with the fixture
            switchButton.checked = true;
            switchButton.orientation = 'vertical';
            switchButton.inverted = false;
            switchButton.switchMode = 'click';

            createElemnets(switchButton2, 10)
            removeElements();

            expect(switchButton.checked).toBe(true);
            expect(switchButton.orientation).toBe('vertical');
            expect(switchButton.switchMode).toBe('click');
            expect(switchButton.inverted).toBe(false);
            expect(doc.getElementsByTagName('smart-switch-button').length).toBe(1);
        });
    });
});
