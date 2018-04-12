//var describe,
//    it,
//    expect,
//    document,
//    beforeEach;
//describe('Testing smart-list-box create-multiple-with-script', function () {
//    'use strict';
//    let listbox;

//    jasmine.getFixtures().fixturesPath = 'base/test/smart-listbox/fixtures';
//    jasmine.getFixtures().preload('smart-list-box-attributes-synchronization.htm');
//    beforeEach(function () {
//        loadFixtures('smart-list-box-attributes-synchronization.htm');
//        listbox = document.querySelector('smart-list-box');
//    });
//    describe('if it', function () {
//        it('exists in DOM', function () {
//            expect(document.querySelector('smart-list-box')).toBeInDOM();
//        });
//    });

//    // Create N more elements of each kind and set them properties
//    let createElemnets = function (selector, count) {
//        let doc = document;

//        while (count > 0) {
//            count--;
//            selector = document.createElement('smart-list-box');
//            doc.body.appendChild(selector);

//            //Applying properties
//            selector.dataSource = [1,2,3,4,5,6];
//            selector.selectedIndexes = [0, 1];
//            selector.sorted = true;

//            //Checking if properties are set
//            expect(selector.dataSource).toEqual([1,2,3,4,5,6]);
//            expect(selector.selectedIndexes).toEqual([0]);
//            expect(selector.selectedValues).toEqual(['1']);
//            expect(selector.sorted).toBe(true);
//        }
//    }

//    //Removing the elements from the DOM
//    let removeElements = function () {
//        let listboxes = document.getElementsByTagName('smart-list-box'),
//            count = listboxes.length;

//        while (count > 1) {
//            count--;
//            document.body.removeChild(listboxes[count]);
//        }
//    }

//    describe('Creating other elements while test is running,', function () {
//        it('set properties to them and before the test ends we remove them', function () {
//            let doc = document,
//                listbox2;

//            //Setting the setings of the switch button created with the fixture
//            listbox.dataSource = ['One', 'Two', 'Three'];
//            listbox.selectedValues = ['One'];
//            listbox.sorted = true;

//            createElemnets(listbox2, 10)

//            expect(listbox.dataSource).toEqual(['One', 'Two', 'Three']);
//            expect(listbox.selectedValues).toEqual(['One']);
//            expect(listbox.selectedIndexes).toEqual([0]);
//            expect(listbox.sorted).toBe(true);

//            removeElements();
//            expect(doc.getElementsByTagName('smart-list-box').length).toBe(1);
//        });
//    });
//    describe('Creating and destroying other elements while the test is running,', function () {
//        it('set properties to them and before the test ends we remove them', function () {
//            let doc = document,
//                listbox2;

//            createElemnets(listbox2, 10)

//            //Setting the setings of the switch button created with the fixture
//            listbox.dataSource = [{ name: 'A', value: 1}, {name: 'B', value: 2}, {name: 'C', value: 3}];
//            listbox.displayMember = 'name';
//            listbox.valueMember = 'value';
//            listbox.selectedIndexes = [0, 1, 2];
//            listbox.sorted = true;

//            expect(listbox.dataSource).toEqual([{ name: 'A', value: 1 }, { name: 'B', value: 2 }, { name: 'C', value: 3 }]);
//            expect(listbox.displayMember).toEqual('name');
//            expect(listbox.valueMember).toEqual('value');
//            expect(listbox.selectedIndexes).toEqual([0]);
//            expect(listbox.sorted).toBe(true);

//            removeElements();
//            expect(doc.getElementsByTagName('smart-list-box').length).toBe(1);
//        });
//    });
//});
