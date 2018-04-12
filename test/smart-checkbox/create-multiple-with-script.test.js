var describe,
    it,
    expect,
    document,
    beforeEach;
describe('Testing smart-progress-bar create-with-script', function () {
    'use strict';
    let checkbox;
    jasmine.getFixtures().fixturesPath = 'base/test/smart-checkbox/fixtures';
    jasmine.getFixtures().preload('smart-check-box-attributes-synchronization.htm');
    beforeEach(function () {
        loadFixtures('smart-check-box-attributes-synchronization.htm');
        checkbox = document.querySelector('smart-check-box');
    });
    describe('if it ', function () {
        it('exists in DOM', function () {
            expect(document.querySelector('smart-check-box')).toBeInDOM();
        });
    });
    describe('Creating other widgets while test is running,', function () {
        it('set properties to them and before the test ends we remove them', function () {

            //Setting the setings of the progress bars created with the fixture
            checkbox.checked = true;
            checkbox.enableContainerClick = false;
            checkbox.innerHTML = 'Checkbox1';
            checkbox.name = 'Checkbox1';

            expect(checkbox.checked).toBe(true);
            expect(checkbox).toHaveAttr('checked');
            expect(checkbox.enableContainerClick).toBe(false);
            expect(checkbox.innerHTML).toEqual('Checkbox1');
            expect(checkbox.name).toEqual('Checkbox1');
            expect(checkbox).toHaveAttr('name', 'Checkbox1');

            // Create 10 more widgets of each kind
            let count = 10,
                checkbox2;
            while (count > 0) {
                count--;
                checkbox2 = document.createElement('smart-check-box');
                document.body.appendChild(checkbox2);
                document.body.appendChild(checkbox2);

                // Applying properties
                checkbox2.checked = true;
                checkbox2.enableContainerClick = false;
                checkbox2.innerHTML = 'Checkbox-N';
                checkbox2.name = 'Checkbox-N';

                //Checking if properties are set
                expect(checkbox2.checked).toBe(true);
                expect(checkbox2).toHaveAttr('checked');
                expect(checkbox2.enableContainerClick).toBe(false);
                expect(checkbox2.innerHTML).toEqual('Checkbox-N');
                expect(checkbox2.name).toEqual('Checkbox-N');
                expect(checkbox2).toHaveAttr('name', 'Checkbox-N');
            }

            //Removing the elements from the DOM
            let checkboxes = document.getElementsByTagName('smart-check-box');
            count = checkboxes.length;
            expect(count).toBe(11);

            while (count > 1) {
                count--;
                document.body.removeChild(checkboxes[count]);
            }
            expect(document.getElementsByTagName('smart-check-box').length).toBe(1);
        });
    });
});
