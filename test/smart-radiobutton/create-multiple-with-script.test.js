var describe,
    it,
    expect,
    document,
    beforeEach;
describe('Testing smart-progress-bar create-with-script', function () {
    'use strict';
    let radioButton;
    jasmine.getFixtures().fixturesPath = 'base/test/smart-radiobuttton/fixtures';
    jasmine.getFixtures().preload('smart-radio-button-attributes-synchronization.htm');
    beforeEach(function () {
        loadFixtures('smart-radio-button-attributes-synchronization.htm');
        radioButton = document.querySelector('smart-radio-button');
    });
    describe('if it ', function () {
        it('exists in DOM', function () {
            expect(document.querySelector('smart-radio-button')).toBeInDOM();
        });
    });
    describe('Creating other widgets while test is running,', function () {
        it('set properties to them and before the test ends we remove them', function () {

            //Setting the setings of the progress bars created with the fixture
            radioButton.checked = true;
            radioButton.enableContainerClick = false;
            radioButton.value = 'On';
            radioButton.name = 'Checkbox1';
            radioButton.clickMode = 'hover';
            radioButton.groupName = 'First';

            expect(radioButton.checked).toBe(true);
            expect(radioButton).toHaveAttr('checked');
            expect(radioButton.enableContainerClick).toBe(false);
            expect(radioButton.value).toEqual('On');
            expect(radioButton.name).toEqual('Checkbox1');
            expect(radioButton.clickMode).toEqual('hover');
            expect(radioButton.groupName).toEqual('First');
            expect(radioButton).toHaveAttr('name');

            // Create 10 more widgets of each kind
            let count = 10,
                radioButton2;
            while (count > 0) {
                count--;
                radioButton2 = document.createElement('smart-radio-button');
                document.body.appendChild(radioButton2);
                document.body.appendChild(radioButton2);

                // Applying properties
                radioButton2.checked = true;
                radioButton2.enableContainerClick = false;
                radioButton2.value = 'On';
                radioButton2.name = 'Checkbox1';
                radioButton2.clickMode = 'hover';
                radioButton2.groupName = 'First';

                //Checking if properties are set
                expect(radioButton2.checked).toBe(true);
                expect(radioButton2).toHaveAttr('checked');
                expect(radioButton2.enableContainerClick).toBe(false);
                expect(radioButton2.value).toEqual('On');
                expect(radioButton2.name).toEqual('Checkbox1');
                expect(radioButton2.clickMode).toEqual('hover');
                expect(radioButton2.groupName).toEqual('First');
                expect(radioButton2).toHaveAttr('name');
            }

            //Removing the elements from the DOM
            let radioButtons = document.getElementsByTagName('smart-radio-button');
            count = radioButtons.length;
            expect(count).toBe(11);

            while (count > 1) {
                count--;
                document.body.removeChild(radioButtons[count]);
            }
            expect(document.getElementsByTagName('smart-radio-button').length).toBe(1);
        });
    });
});
