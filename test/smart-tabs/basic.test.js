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

describe('Testing basic functionality of smart-tabs', function () {
    'use strict';

    onReady();

    let smartTabs;
    jasmine.getFixtures().fixturesPath = 'base/test/smart-tabs/fixtures';
    jasmine.getFixtures().preload('smart-tabs-simple.htm');
    beforeEach(function () {
        loadFixtures('smart-tabs-simple.htm');
        smartTabs = document.querySelector('smart-tabs');
    });

    it('four tabs have been loaded', function () {
        const tabs = smartTabs._tabs,
            groups = smartTabs._groups;

        expect(tabs.length).toBe(4);
        expect(groups.length).toBe(0);
    });

    it('tab label has been loaded from template', function () {
        expect(smartTabs._tabLabelContainers[3].firstElementChild.children[0].innerHTML.replace(/^\s+|\s+$|\s+(?=\s)/g, '')).toBe('Title from template');
    });

    it('selection is correctly changed', function () {
        const tabs = smartTabs._tabs;

        expect(tabs[1].selected).toBe(true);

        smartTabs.select(3);

        expect(tabs[1].selected).toBe(false);
        expect(tabs[1]).toHaveClass('smart-visibility-hidden');
        expect(tabs[3].selected).toBe(true);
        expect(tabs[3]).not.toHaveClass('smart-hidden');
        expect(smartTabs._tabLabelContainers[3]).toHaveClass('smart-tab-selected');

        smartTabs.selectedIndex = 2;
        expect(tabs[3].selected).toBe(false);
        expect(tabs[3]).toHaveClass('smart-visibility-hidden');
        expect(tabs[2].selected).toBe(true);
        expect(tabs[2]).not.toHaveClass('smart-hidden');
        expect(smartTabs._tabLabelContainers[2]).toHaveClass('smart-tab-selected');

        smartTabs.selectedIndex = null;

        expect(smartTabs.selectedIndex).toBe(2);
        expect(tabs[2].selected).toBe(true);
        expect(tabs[2]).not.toHaveClass('smart-hidden');
        expect(smartTabs._tabLabelContainers[2]).toHaveClass('smart-tab-selected');
    });

    it('position is correctly changed', function () {
        const container = smartTabs.$.container,
            tabsHeaderSection = smartTabs.$.tabsHeaderSection,
            tabContentSection = smartTabs.$.tabContentSection;

        expect(tabsHeaderSection).toBe(container.children[0]);
        expect(tabContentSection).toBe(container.children[1]);

        smartTabs.tabPosition = 'bottom';

        expect(tabsHeaderSection).toBe(container.children[1]);
        expect(tabContentSection).toBe(container.children[0]);

        smartTabs.tabPosition = 'left';

        expect(tabsHeaderSection).toBe(container.children[0]);
        expect(tabContentSection).toBe(container.children[1]);

        smartTabs.tabPosition = 'right';

        expect(tabsHeaderSection).toBe(container.children[1]);
        expect(tabContentSection).toBe(container.children[0]);

        smartTabs.tabPosition = 'hidden';

        expect(tabsHeaderSection).toBe(container.children[0]);
        expect(window.getComputedStyle(tabsHeaderSection).display).toBe('none');
        expect(tabContentSection).toBe(container.children[1]);
    });

    it('close buttons are shown', function () {
        const closeButton = smartTabs.getElementsByClassName('smart-tab-close-button')[0];

        expect(closeButton).toHaveClass('smart-hidden');

        smartTabs.closeButtons = true;

        expect(closeButton).not.toHaveClass('smart-hidden');
    });

    it('"collapse" and "expand" work as expected', function () {
        smartTabs.collapse();

        expect(smartTabs).not.toHaveAttr('collapsed');
        expect(smartTabs.collapsed).toBe(false);

        smartTabs.collapsible = true;
        smartTabs.collapse();

        expect(smartTabs).toHaveAttr('collapsed');
        expect(smartTabs.collapsed).toBe(true);

        smartTabs.expand();

        expect(smartTabs).not.toHaveAttr('collapsed');
        expect(smartTabs.collapsed).toBe(false);

        smartTabs.collapse();
        smartTabs.collapsible = false;

        expect(smartTabs).not.toHaveAttr('collapsed');
        expect(smartTabs.collapsed).toBe(false);

        smartTabs.collapsible = true;
        smartTabs.collapsed = true;

        expect(smartTabs).toHaveAttr('collapsed');

        smartTabs.collapsed = false;

        expect(smartTabs).not.toHaveAttr('collapsed');

        smartTabs.collapsible = false;
        smartTabs.collapsed = true;

        expect(smartTabs.collapsed).toBe(false);
        expect(smartTabs).not.toHaveAttr('collapsed');
    });

    it('"insert" and "update" work as expected', function () {
        // "insert" tests
        smartTabs.insert(0, { label: 'TAB 0', content: 'Content 0' });
        smartTabs.insert(-10, { label: 'TAB -10', content: 'Content -10' });

        const tabs = smartTabs._tabs;

        expect(tabs.length).toBe(6);
        expect(tabs[0].label).toBe('TAB -10');
        expect(tabs[1].label).toBe('TAB 0');

        smartTabs.insert(10, { label: 'template2', content: 'Content 10' });

        expect(tabs.length).toBe(7);
        expect(tabs[6].label).toBe('template2');
        expect(smartTabs._tabLabelContainers[6].firstElementChild.children[0].innerHTML.replace(/^\s+|\s+$|\s+(?=\s)/g, '')).toBe('Title from other template');

        // "update" tests
        smartTabs.update(-2, 'template2', 'Updated content -2');
        smartTabs.update(2, 'Updated label 2', 'Updated content 2');
        smartTabs.update(12, 'Updated label 12', 'Updated content 12');

        expect(tabs[0].label).toBe('template2');
        expect(smartTabs._tabLabelContainers[0].firstElementChild.children[0].innerHTML.replace(/^\s+|\s+$|\s+(?=\s)/g, '')).toBe('Title from other template');
        expect(getContent(tabs[0])).toBe('Updated content -2');

        expect(tabs[2].label).toBe('Updated label 2');
        expect(smartTabs._tabLabelContainers[2].firstElementChild.children[0].innerHTML.replace(/^\s+|\s+$|\s+(?=\s)/g, '')).toBe('Updated label 2');
        expect(getContent(tabs[2])).toBe('Updated content 2');

        expect(tabs[6].label).toBe('Updated label 12');
        expect(smartTabs._tabLabelContainers[6].firstElementChild.children[0].innerHTML.replace(/^\s+|\s+$|\s+(?=\s)/g, '')).toBe('Updated label 12');
        expect(getContent(tabs[6])).toBe('Updated content 12');

        const errorTest = function () {
            smartTabs.insert('noIndex', { label: 'TAB', content: 'Content' });
        }

        expect(errorTest).toThrow('smart-tabs: "insert" method accepts an index of type number.')
    });

    it('"remove" works as expected', function () {
        smartTabs.remove(0);

        const tabs = smartTabs._tabs;

        expect(tabs.length).toBe(3);
        expect(tabs[0].label).toBe('TAB 2');

        smartTabs.remove(10);

        expect(tabs.length).toBe(2);

        smartTabs.remove(0);
        smartTabs.remove(0);
        smartTabs.remove(0);
        smartTabs.remove(0);

        expect(tabs.length).toBe(0);

        smartTabs.addNewTab = true;
        smartTabs.remove(0);

        expect(tabs.length).toBe(0);

        smartTabs.insert(0, { label: 'Extra TAB', content: 'Extra content' });

        expect(tabs.length).toBe(1);
        expect(tabs[0].label).toBe('Extra TAB');
        expect(getContent(tabs[0])).toBe('Extra content');
    });

    it('label text can be positioned vertically', function () {
        const firstTabLabelContainer = smartTabs._tabLabelContainers[0],
            oldWidth = firstTabLabelContainer.offsetWidth,
            oldHeight = firstTabLabelContainer.offsetHeight;

        smartTabs.tabTextOrientation = 'vertical';

        let newWidth = firstTabLabelContainer.offsetWidth,
            newHeight = firstTabLabelContainer.offsetHeight;

        expect(newWidth < oldWidth).toBe(true);
        expect(newHeight > oldHeight).toBe(true);

        smartTabs.tabTextOrientation = 'horizontal';
        newWidth = firstTabLabelContainer.offsetWidth;
        newHeight = firstTabLabelContainer.offsetHeight;

        expect(newWidth).toBe(oldWidth);
        expect(newHeight).toBe(oldHeight);
    });

    it('animations work as expected', function () {
        smartTabs.classList.add('animation');
        smartTabs.classList.add('ripple');

        smartTabs.select(2);

        expect(smartTabs._tabs[1]).toHaveClass('animate');
        expect(smartTabs._tabs[2]).toHaveClass('animate');
        expect(smartTabs.selectedIndex).toBe(2);

        smartTabs.select(0);

        expect(smartTabs._tabs[2]).toHaveClass('animate');
        expect(smartTabs._tabs[0]).toHaveClass('animate');
        expect(smartTabs.selectedIndex).toBe(0);

        smartTabs.tabPosition = 'left';

        smartTabs.select(1);

        expect(smartTabs._tabs[0]).toHaveClass('animate');
        expect(smartTabs._tabs[1]).toHaveClass('animate');
        expect(smartTabs.selectedIndex).toBe(1);

        smartTabs.select(0);

        expect(smartTabs._tabs[1]).toHaveClass('animate');
        expect(smartTabs._tabs[0]).toHaveClass('animate');
        expect(smartTabs.selectedIndex).toBe(0);

        smartTabs._documentUpHandler({ originalEvent: { target: document } });
        smartTabs.classList.remove('animation');
        smartTabs.select(3);

        expect(smartTabs._tabs[3]).not.toHaveClass('animate');
        expect(smartTabs.selectedIndex).toBe(3);
    });

    it('method "getOffsetFromEdgeOfElement" works as expected', function () {
        expect(smartTabs.getOffsetFromEdgeOfElement(0)).toBe(smartTabs.getOffsetFromEdgeOfElement(1));
        expect(smartTabs.getOffsetFromEdgeOfElement(2)).toBe(smartTabs.getOffsetFromEdgeOfElement(3));

        smartTabs.tabPosition = 'hidden';

        expect(smartTabs.getOffsetFromEdgeOfElement(0)).toBe(3);
        expect(smartTabs.getOffsetFromEdgeOfElement(1)).toBe(3);
        expect(smartTabs.getOffsetFromEdgeOfElement(2)).toBe(3);
        expect(smartTabs.getOffsetFromEdgeOfElement(3)).toBe(3);
    });

    it('no longer exists in DOM', function () {
        smartTabs.parentElement.removeChild(smartTabs);
        expect(smartTabs).not.toBeInDOM();
    });
});
