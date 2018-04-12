var describe,
    it,
    expect,
    document,
    beforeAll,
    afterAll,
    onReady = function () { };

jQuery(document).ready(onReady);

describe('Testing dynamic creation of smart-tabs', function () {
    'use strict';

    onReady();

    let tabsContainer;
    jasmine.getFixtures().fixturesPath = 'base/test/smarttabs/fixtures';
    jasmine.getFixtures().preload('smart-tabs-dynamic-creation.htm');
    beforeEach(function () {
        loadFixtures('smart-tabs-dynamic-creation.htm');
        tabsContainer = document.getElementById('tabsContainer');
    });

    it('appending using innerHTML', function () {
        const tabsHTMLStructure =
            `<smart-tabs id="smartTabs" selected-index="1">
                <smart-tab-item label="TAB 1">Content 1</smart-tab-item>
                <smart-tab-item label="TAB 2">Content 2</smart-tab-item>
            </smart-tabs>`;

        tabsContainer.innerHTML = tabsHTMLStructure;

        const smartTabs = document.getElementById('smartTabs'),
            tabs = smartTabs._tabs;

        // smartTabs is in DOM 
        expect(smartTabs).toBeInDOM();
        // smartTabs has two initial tab items
        expect(tabs.length).toBe(2);
        // the label of the first tab item is "TAB 2"
        expect(tabs[0].label).toBe('TAB 1');
        expect(tabs[1].label).toBe('TAB 2');

        smartTabs.insert(2, { label: 'TAB 3', content: 'Content 3' });

        // a new tab item has been inserted correctly
        expect(tabs.length).toBe(3);
        expect(tabs[2].label).toBe('TAB 3');
        expect(tabs[2].content).toBe('Content 3');

        smartTabs.remove(1);
        smartTabs.remove(0);

        // old tab items have been removed correctly
        expect(tabs.length).toBe(1);
        expect(tabs[0].label).toBe('TAB 3');
        expect(tabs[0].content).toBe('Content 3');

        smartTabs.insert(1, { label: 'TAB 4', content: 'Content 4' });

        // an addition tab item has been inserted correctly
        expect(tabs.length).toBe(2);
        expect(tabs[1].label).toBe('TAB 4');
        expect(tabs[1].content).toBe('Content 4');
    });

    var content1 = '<div id="tabItem1" style="width: 100%; height: 100%, position: relative; overflow: hidden;" class="pexpipe-tab-item-container"></div>';
    var content2 = '<div id="tabItem2" style="width: 100%; height: 100%, position: relative; overflow: hidden;" class="pexpipe-tab-item-container"></div>';
    it('appending using appendChild', function () {
        const smartTabs2 = document.createElement('smart-tabs');
        document.body.appendChild(smartTabs2);
        expect(smartTabs2).toBeInDOM();

        const smartTabItem1 = document.createElement('smart-tab-item');
        smartTabItem1.label = 'Item 1';
        smartTabItem1.content = content1;

        const smartTabItem2 = document.createElement('smart-tab-item');
        smartTabItem2.label = 'Item 2';
        smartTabItem2.content = content2;

        smartTabs2.appendChild(smartTabItem1);
        smartTabs2.appendChild(smartTabItem2);


        const tabs = smartTabs2._tabs;

        expect(tabs.length).toBe(2);
        expect(tabs[0].label).toBe('Item 1');
        var actualContent = smartTabItem1.querySelector('.pexpipe-tab-item-container');
        expect(actualContent).not.toBe(null);

        expect(tabs[1].label).toBe('Item 2');
        actualContent = smartTabItem2.querySelector('.pexpipe-tab-item-container');
        expect(actualContent).not.toBe(null);

        document.body.removeChild(smartTabs2);

        expect(smartTabs2).not.toBeInDOM();
    });

    it('appending using appendChild', function () {
        const smartTabs3 = document.createElement('smart-tabs');

        const smartTabItem1 = document.createElement('smart-tab-item');
        smartTabItem1.label = 'Item 1';
        smartTabItem1.content = 'Item 1 content';

        const smartTabItem2 = document.createElement('smart-tab-item');
        smartTabItem2.label = 'Item 2';
        smartTabItem2.content = 'Item 2 content';

        smartTabs3.appendChild(smartTabItem1);
        smartTabs3.appendChild(smartTabItem2);
        document.body.appendChild(smartTabs3);

        expect(smartTabs3).toBeInDOM();

        const tabs = smartTabs3._tabs;

        expect(tabs.length).toBe(2);
        expect(tabs[0].label).toBe('Item 1');
        expect(tabs[0].content).toBe('Item 1 content');
        expect(tabs[1].label).toBe('Item 2');
        expect(tabs[1].content).toBe('Item 2 content');

        document.body.removeChild(smartTabs3);

        expect(smartTabs3).not.toBeInDOM();
    });
});
