var describe,
    it,
    expect,
    document,
    beforeAll,
    afterAll,
    onReady = function () { };

jQuery(document).ready(onReady);

function getContent(tab) {
    return tab.firstElementChild.innerHTML.trim();
}

describe('Testing the overriden methods "appendChild", "insertBefore" and "removeChild"', function () {
    'use strict';

    onReady();

    let smartTabs;
    jasmine.getFixtures().fixturesPath = 'base/test/smarttabs/fixtures';
    jasmine.getFixtures().preload('smart-tabs-simple.htm');
    beforeEach(function () {
        loadFixtures('smart-tabs-simple.htm');
        smartTabs = document.querySelector('smart-tabs');
    });

    it('"appendChild" and "insertBefore" work as expected', function () {
        const tabs = smartTabs._tabs;

        const newTabItem1 = document.createElement('smart-tab-item');
        newTabItem1.label = 'Appended TAB';
        newTabItem1.content = 'Appended content';

        smartTabs.appendChild(newTabItem1);

        expect(smartTabs.getElementsByTagName('smart-tab-item').length).toBe(5);
        expect(tabs.length).toBe(5);
        expect(tabs[4].label).toBe('Appended TAB');
        expect(getContent(tabs[4])).toBe('Appended content');

        let errorTest = function () {
            const testItem = document.createElement('div');

            smartTabs.appendChild(testItem);
        };

        expect(errorTest).toThrow('smart-tabs: The method "appendChild" requires a "smart-tab-item" element to be passed as an argument.');

        const newTabItem2 = document.createElement('smart-tab-item');
        newTabItem2.label = 'Inserted TAB';
        newTabItem2.content = 'Inserted content';

        smartTabs.insertBefore(newTabItem2, newTabItem1);

        expect(smartTabs.getElementsByTagName('smart-tab-item').length).toBe(6);
        expect(tabs.length).toBe(6);
        expect(tabs[4].label).toBe('Inserted TAB');
        expect(getContent(tabs[4])).toBe('Inserted content');
        expect(tabs[5].label).toBe('Appended TAB');
        expect(getContent(tabs[5])).toBe('Appended content');

        const newTabItem3 = document.createElement('smart-tab-item');
        newTabItem3.label = 'Last TAB';
        newTabItem3.content = 'Last content';

        smartTabs.insertBefore(newTabItem3);

        expect(smartTabs.getElementsByTagName('smart-tab-item').length).toBe(7);
        expect(tabs.length).toBe(7);
        expect(tabs[6].label).toBe('Last TAB');
        expect(getContent(tabs[6])).toBe('Last content');

        const newTabItem4 = document.createElement('smart-tab-item');
        newTabItem4.label = 'First TAB';
        newTabItem4.content = 'First content';

        smartTabs.insertBefore(newTabItem4, tabs[0]);

        expect(smartTabs.getElementsByTagName('smart-tab-item').length).toBe(8);
        expect(tabs.length).toBe(8);
        expect(tabs[0].label).toBe('First TAB');
        expect(getContent(tabs[0])).toBe('First content');
        expect(tabs[1].label).toBe('TAB 1');
        expect(getContent(tabs[1])).toBe('Content 1');

        smartTabs.update(0, 'Updated TAB', 'Updated Content');
        expect(tabs[0].label).toBe('Updated TAB');
        expect(getContent(tabs[0])).toBe('Updated Content');

        smartTabs.select(7);
        smartTabs.insertBefore(tabs[7], tabs[0]);

        expect(smartTabs.selectedIndex).toBe(0);
        expect(tabs[0].selected).toBe(true);
        expect(tabs[0].label).toBe('Last TAB');
        expect(getContent(tabs[0])).toBe('Last content');

        errorTest = function () {
            const testItem1 = document.createElement('smart-tab-item'),
                testItem2 = document.createElement('smart-tab-item');

            smartTabs.insertBefore(testItem2, testItem1);
        };

        expect(errorTest).toThrow('smart-tabs: Passed referenceNode is not part of this smart-tabs element.');
    });

    it('"removeChild" works as expected', function () {
        const tabs = smartTabs._tabs;

        smartTabs.removeChild(tabs[0]);

        expect(smartTabs.getElementsByTagName('smart-tab-item').length).toBe(3);
        expect(tabs.length).toBe(3);
        expect(tabs[0].label).toBe('TAB 2');
        expect(getContent(tabs[0])).toBe('Content 2');

        const errorTest = function () {
            const testItem1 = document.createElement('smart-tab-item');

            smartTabs.removeChild(testItem1);
        }

        expect(errorTest).toThrow('smart-tabs: Passed node is not part of this smart-tabs element.');

        smartTabs.removeChild(tabs[0]);
        smartTabs.removeChild(tabs[0]);
        smartTabs.removeChild(tabs[0]);

        expect(smartTabs.getElementsByTagName('smart-tab-item').length).toBe(0);
        expect(tabs.length).toBe(0);
    });

    it('no longer exists in DOM', function () {
        smartTabs.parentElement.removeChild(smartTabs);
        expect(smartTabs).not.toBeInDOM();
    });
});
