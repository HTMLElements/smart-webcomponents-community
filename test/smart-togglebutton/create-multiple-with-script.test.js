var describe,
    it,
    expect,
    document,
    beforeEach;
describe('Testing smart-toggle-button create-with-script', function () {
    'use strict';
    let toggleButton;
    jasmine.getFixtures().fixturesPath = 'base/test/smarttogglebutton/fixtures';
    jasmine.getFixtures().preload('smart-toggle-button-attributes-synchronization.htm');
    beforeEach(function () {
        loadFixtures('smart-toggle-button-attributes-synchronization.htm');
        toggleButton = document.querySelector('smart-toggle-button');
    });
    describe('if it ', function () {
        it('exists in DOM', function () {
            expect(document.querySelector('smart-toggle-button')).toBeInDOM();
        });
    });
    describe('Creating other widgets while test is running,', function () {
        it('set properties to them and before the test ends we remove them', function () {

            //Setting the setings of the progress bars created with the fixture
            toggleButton.checked = true;
            toggleButton.clickMode = 'press';
            toggleButton.value = 'On';
            toggleButton.name = 'ToggleButton1';

            expect(toggleButton.checked).toBe(true);
            expect(toggleButton).toHaveAttr('checked');
            expect(toggleButton.clickMode).toEqual('press');
            expect(toggleButton.value).toEqual('On');
            expect(toggleButton.name).toEqual('ToggleButton1');
            expect(toggleButton).toHaveAttr('name', 'ToggleButton1');

            // Create 10 more widgets of each kind
            let count = 10,
                toggleButton2;
            while (count > 0) {
                count--;
                toggleButton2 = document.createElement('smart-toggle-button');
                document.body.appendChild(toggleButton2);
                document.body.appendChild(toggleButton2);

                // Applying properties
                toggleButton2.checked = true;
                toggleButton2.clickMode = 'press';
                toggleButton2.value = 'On';
                toggleButton2.name = 'ToggleButton-N';

                //Checking if properties are set
                expect(toggleButton.checked).toBe(true);
                expect(toggleButton).toHaveAttr('checked');
                expect(toggleButton.clickMode).toEqual('press');
                expect(toggleButton.value).toEqual('On');
                expect(toggleButton2.name).toEqual('ToggleButton-N');
                expect(toggleButton2).toHaveAttr('name', 'ToggleButton-N');
            }

            //Removing the elements from the DOM
            let toggleButtons = document.getElementsByTagName('smart-toggle-button');
            count = toggleButtons.length;
            expect(count).toBe(11);

            while (count > 1) {
                count--;
                document.body.removeChild(toggleButtons[count]);
            }
            expect(document.getElementsByTagName('smart-toggle-button').length).toBe(1);
        });
    });
});
