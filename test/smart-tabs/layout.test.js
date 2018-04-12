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

describe('Testing programmatic reorder functionality of smart-tabs', function () {
    'use strict';

    onReady();

    let tabsScroll, tabsDropdown, tabsWrap, tabsShrink;
    jasmine.getFixtures().fixturesPath = 'base/test/smarttabs/fixtures';
    jasmine.getFixtures().preload('smart-tabs-layout.htm');
    beforeEach(function () {
        loadFixtures('smart-tabs-layout.htm');
        tabsScroll = document.querySelector('smart-tabs[tab-layout="scroll"]');
        tabsDropdown = document.querySelector('smart-tabs[tab-layout="dropdown"]');
        tabsWrap = document.querySelector('smart-tabs[tab-layout="wrap"]');
        tabsShrink = document.querySelector('smart-tabs[tab-layout="shrink"]');
    });

    it('tab-layout="scroll" works as expected', function () {
        const tabsHeaderItems = tabsScroll.$.tabsHeaderItems,
            tabStrip = tabsScroll.$.tabStrip;
        let oldTabStripScroll = tabStrip.scrollLeft;

        expect(window.getComputedStyle(tabsScroll.$.scrollButtonFar).display).not.toBe('none');
        expect(window.getComputedStyle(tabsScroll.$.scrollButtonNear).display).toBe('none');
        tabsScroll._scrollButtonFarClickHandler();

        expect(oldTabStripScroll).toBeLessThan(tabStrip.scrollLeft);
        expect(window.getComputedStyle(tabsScroll.$.scrollButtonFar).display).not.toBe('none');
        expect(window.getComputedStyle(tabsScroll.$.scrollButtonNear).display).not.toBe('none');

        tabsScroll._scrollButtonNearClickHandler();

        expect(oldTabStripScroll).toBe(tabsScroll.scrollLeft);
        expect(window.getComputedStyle(tabsScroll.$.scrollButtonFar).display).not.toBe('none');
        expect(window.getComputedStyle(tabsScroll.$.scrollButtonNear).display).toBe('none');

        expect(tabsHeaderItems.children[0]).toBe(tabsScroll.$.scrollButtonNear);
        expect(tabsHeaderItems.children[2]).toBe(tabsScroll.$.scrollButtonFar);

        tabsScroll.scrollButtonsPosition = 'near';

        expect(tabsHeaderItems.children[0]).toBe(tabsScroll.$.scrollButtonNear);
        expect(tabsHeaderItems.children[1]).toBe(tabsScroll.$.scrollButtonFar);

        tabsScroll.scrollButtonsPosition = 'far';

        expect(tabsHeaderItems.children[1]).toBe(tabsScroll.$.scrollButtonNear);
        expect(tabsHeaderItems.children[2]).toBe(tabsScroll.$.scrollButtonFar);

        tabsScroll.scrollButtonsPosition = 'near';

        expect(tabsHeaderItems.children[0]).toBe(tabsScroll.$.scrollButtonNear);
        expect(tabsHeaderItems.children[1]).toBe(tabsScroll.$.scrollButtonFar);

        tabsScroll.scrollButtonsPosition = 'both';

        expect(tabsHeaderItems.children[0]).toBe(tabsScroll.$.scrollButtonNear);
        expect(tabsHeaderItems.children[2]).toBe(tabsScroll.$.scrollButtonFar);

        tabsScroll.scrollButtonsPosition = 'far';

        expect(tabsHeaderItems.children[1]).toBe(tabsScroll.$.scrollButtonNear);
        expect(tabsHeaderItems.children[2]).toBe(tabsScroll.$.scrollButtonFar);

        tabsScroll.scrollButtonsPosition = 'both';

        expect(tabsHeaderItems.children[0]).toBe(tabsScroll.$.scrollButtonNear);
        expect(tabsHeaderItems.children[2]).toBe(tabsScroll.$.scrollButtonFar);

        tabsScroll.tabPosition = 'right';
        oldTabStripScroll = tabStrip.scrollTop;
        tabsScroll._scrollButtonFarClickHandler();

        expect(oldTabStripScroll).toBeLessThan(tabStrip.scrollTop);

        tabsScroll._scrollButtonNearClickHandler();

        expect(oldTabStripScroll).toBe(tabsScroll.scrollTop);

        tabsScroll.tabLayout = 'dropdown';
        expect(window.getComputedStyle(tabsScroll.$.scrollButtonFar).display).toBe('none');
        expect(window.getComputedStyle(tabsScroll.$.scrollButtonNear).display).toBe('none');
        expect(window.getComputedStyle(tabsScroll.$.scrollButtonNear).dropDownButton).not.toBe('none');
    });

    it('tab-layout="wrap" works as expected', function () {
        tabsWrap._firefox = true;
        tabsWrap.tabTextOrientation = 'vertical';

        expect(window.getComputedStyle(tabsWrap.$.scrollButtonFar).display).toBe('none');
        expect(window.getComputedStyle(tabsWrap.$.scrollButtonNear).display).toBe('none');
        expect(window.getComputedStyle(tabsWrap.$.dropDownButton).display).toBe('none');

        tabsWrap._firefox = false;
        tabsWrap.tabTextOrientation = 'horizontal';
        tabsWrap.tabTextOrientation = 'vertical';

        tabsWrap.tabLayout = 'scroll';
        expect(window.getComputedStyle(tabsWrap.$.scrollButtonFar).display).not.toBe('none');
        expect(window.getComputedStyle(tabsWrap.$.scrollButtonNear).display).toBe('none');
        expect(window.getComputedStyle(tabsWrap.$.dropDownButton).display).toBe('none');
    });

    it('tab-layout="dropdown" works as expected', function () {
        expect(window.getComputedStyle(tabsDropdown.$.scrollButtonFar).display).toBe('none');
        expect(window.getComputedStyle(tabsDropdown.$.scrollButtonNear).display).toBe('none');

        tabsShrink.tabTextOrientation = 'vertical';
        tabsShrink.tabPosition = 'left';

        expect(window.getComputedStyle(tabsDropdown.$.scrollButtonFar).display).toBe('none');
        expect(window.getComputedStyle(tabsDropdown.$.scrollButtonNear).display).toBe('none');

        tabsShrink._firefox = true;
        tabsShrink.tabLayout = 'scroll';
        tabsShrink.tabLayout = 'dropdown';

    });

    it('tab-layout="shrink" works as expected', function () {
        const tabStrip = tabsShrink.$.tabStrip;

        expect(tabStrip.offsetWidth).toBe(tabStrip.scrollWidth);

        expect(window.getComputedStyle(tabsShrink.$.scrollButtonFar).display).toBe('none');
        expect(window.getComputedStyle(tabsShrink.$.scrollButtonNear).display).toBe('none');

        tabsShrink.tabTextOrientation = 'vertical';

        tabsShrink.tabLayout = 'dropdown';

        expect(tabStrip.offsetWidth).not.toBe(tabStrip.scrollWidth);

        expect(window.getComputedStyle(tabsShrink.$.scrollButtonFar).display).toBe('none');
        expect(window.getComputedStyle(tabsShrink.$.scrollButtonNear).display).toBe('none');

        tabsShrink.tabLayout = 'shrink';

        expect(tabStrip.offsetWidth).toBe(tabStrip.scrollWidth);

        tabsShrink.tabPosition = 'left';
        tabsShrink.tabTextOrientation = 'vertical';

        expect(window.getComputedStyle(tabsShrink._tabLabelContainers[0].firstElementChild.children[0]).writingMode).toBe('vertical-lr');
    });
});
