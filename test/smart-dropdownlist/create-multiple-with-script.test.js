var describe,
    it,
    expect,
    document,
    beforeEach;
describe('Testing smart-drop-down-list create-multiple-with-script', function () {
    'use strict';
    let dropDownList;

    jasmine.getFixtures().fixturesPath = 'base/test/smart-dropdownlist/fixtures';
    jasmine.getFixtures().preload('smart-drop-down-list-attributes-synchronization.htm');
    beforeEach(function () {
        loadFixtures('smart-drop-down-list-attributes-synchronization.htm');
        dropDownList = document.querySelector('smart-drop-down-list');
    });
    describe('if it', function () {
        it('exists in DOM', function () {
            expect(document.querySelector('smart-drop-down-list')).toBeInDOM();
        });
    });

    // Create N more elements of each kind and set them properties
    let createElemnets = function (selector, count) {
        let doc = document;

        while (count > 0) {
            count--;
            selector = document.createElement('smart-drop-down-list');
            doc.body.appendChild(selector);

            //Applying properties
            selector.dataSource = [1,2,3,4,5,6];
            selector.selectedIndexes = [0, 1];
            selector.sorted = true;

            //Checking if properties are set
            expect(selector.dataSource).toEqual([1,2,3,4,5,6]);
            //expect(selector.selectedIndexes).toEqual([0]);
            //expect(selector.selectedValues).toEqual(['1']);
            expect(selector.sorted).toBe(true);
        }
    }

    //Removing the elements from the DOM
    let removeElements = function () {
        let dropDownLists = document.getElementsByTagName('smart-drop-down-list'),
            count = dropDownLists.length;

        while (count > 1) {
            count--;
            document.body.removeChild(dropDownLists[count]);
        }
    }

    describe('Creating other elements while test is running,', function () {
        it('set properties to them and before the test ends we remove them', function () {
            let doc = document,
                dropDownList2;

            //Setting the setings of the switch button created with the fixture
            dropDownList.dataSource = ['One', 'Two', 'Three'];
            dropDownList.selectedValues = ['One'];
            dropDownList.sorted = true;

            createElemnets(dropDownList2, 10)

            expect(dropDownList.dataSource).toEqual(['One', 'Two', 'Three']);
            //expect(dropDownList.selectedValues).toEqual(['One']);
            //expect(dropDownList.selectedIndexes).toEqual([0]);
            expect(dropDownList.sorted).toBe(true);

            removeElements();
            expect(doc.getElementsByTagName('smart-drop-down-list').length).toBe(1);
        });
    });
    describe('Creating and destroying other elements while the test is running,', function () {
        it('set properties to them and before the test ends we remove them', function () {
            let doc = document,
                dropDownList2;

            createElemnets(dropDownList2, 10)

            //Setting the setings of the switch button created with the fixture
            dropDownList.dataSource = [{ name: 'A', value: 1 }, { name: 'B', value: 2 }, { name: 'C', value: 3 }];
            dropDownList.displayMember = 'name';
            dropDownList.valueMember = 'value';
            dropDownList.selectedIndexes = [0, 1, 2];
            dropDownList.sorted = true;

            expect(dropDownList.dataSource).toEqual([{ name: 'A', value: 1 }, { name: 'B', value: 2 }, { name: 'C', value: 3 }]);
            expect(dropDownList.displayMember).toEqual('name');
            expect(dropDownList.valueMember).toEqual('value');
            //expect(dropDownList.selectedIndexes).toEqual([0]);
            expect(dropDownList.sorted).toBe(true);

            removeElements();
            expect(doc.getElementsByTagName('smart-drop-down-list').length).toBe(1);
        });
    });
});
