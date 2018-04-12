var describe,
    it,
    expect,
    document,
    beforeAll,
    afterAll,
    onReady = function () { };

jQuery(document).ready(onReady);

describe('Testing grouping functionality of smart-tabs', function () {
    'use strict';

    onReady();

    let smartTabs;
    jasmine.getFixtures().fixturesPath = 'base/test/smart-tabs/fixtures';
    jasmine.getFixtures().preload('smart-tabs-grouping.htm');
    beforeEach(function () {
        loadFixtures('smart-tabs-grouping.htm');
        smartTabs = document.querySelector('smart-tabs');
    });

    it('exists in DOM', function () {
        expect(smartTabs).toBeInDOM();
    });

    it('six tabs and two groups have been loaded', function () {
        const tabs = smartTabs._tabs,
            groups = smartTabs._groups;

        expect(tabs.length).toBe(6);
        expect(groups.length).toBe(2);
        expect(groups.length).toBe(smartTabs.getElementsByTagName('smart-tab-items-group').length);
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

    it('selection is correctly changed', function () {
        const tabs = smartTabs._tabs;

        expect(tabs[3].selected).toBe(true);

        smartTabs.select(0);

        expect(tabs[3].selected).toBe(false);
        expect(tabs[3]).toHaveClass('smart-visibility-hidden');
        expect(tabs[0].selected).toBe(true);
        expect(tabs[0]).not.toHaveClass('smart-visibility-hidden');
        expect(smartTabs._tabLabelContainers[0]).toHaveClass('smart-tab-selected');
        expect(smartTabs._selectedGroup.group).toBe('Group 1');
        expect(smartTabs._groupLabels[0]).toHaveClass('smart-tab-group-selected');
    });

    it('"insert" and "update" work as expected', function () {
        const tabs = smartTabs._tabs;

        // insert into existing group
        smartTabs.insert(1, { label: 'TAB half', content: 'Content half' });

        expect(tabs.length).toBe(7);
        expect(tabs[1].label).toBe('TAB half');
        expect(tabs[1].group).toBe('Group 1');

        smartTabs.insert(0, { label: 'Beginning of group TAB', content: 'Beginning of group content', group: 'Group 2' });

        expect(tabs.length).toBe(8);
        expect(tabs[4].label).toBe('Beginning of group TAB');
        expect(tabs[4].group).toBe('Group 2');

        smartTabs.update(4, 'Updated beginning of group TAB', 'Updated content 4');

        expect(tabs[4].label).toBe('Updated beginning of group TAB');

        // insert into new group
        smartTabs.insert(2, { label: 'New group TAB', content: 'New group TAB content', group: 'Group 3' });

        expect(tabs.length).toBe(9);
        expect(tabs[4].label).toBe('New group TAB');
        expect(tabs[4].group).toBe('Group 3');
        expect(tabs[5].label).toBe('Updated beginning of group TAB');

        // insert outside group
        smartTabs.insert(0, { label: 'TAB 0', content: 'Content 0' });

        expect(tabs.length).toBe(10);
        expect(tabs[0].label).toBe('TAB 0');
        expect(tabs[0].group).toBe(null);
        expect(tabs[1].group).toBe('Group 1');
    });

    it('"remove" works as expected', function () {
        const tabs = smartTabs._tabs;

        smartTabs.remove(0);

        expect(tabs.length).toBe(5);
        expect(smartTabs.getElementsByTagName('smart-tab-items-group')[0].children.length).toBe(1);

        smartTabs.remove(0);

        expect(tabs.length).toBe(4);
        expect(tabs[0].group).toBe(null);
        expect(smartTabs.getElementsByTagName('smart-tab-items-group').length).toBe(1);
        expect(smartTabs._groups.length).toBe(1);

        smartTabs.remove(0);
        smartTabs.remove(0);
        smartTabs.remove(0);
        smartTabs.remove(0);
        smartTabs.remove(0);

        expect(tabs.length).toBe(0);
        expect(smartTabs._groups.length).toBe(0);
    });

    it('"_groupContainerHandler" works as expected', function () {
        const groupLabels = smartTabs._groupLabels,
            event = { stopPropagation: function () { }, type: 'mouseover', which: 1 };
        let target = smartTabs._groupLabels[0];

        smartTabs._tabStripHandler(target, event);

        expect(groupLabels[0]).toHaveClass('smart-tab-hovered');

        event.type = 'mouseout';
        smartTabs._tabStripHandler(target, event);

        expect(groupLabels[0]).not.toHaveClass('smart-tab-hovered');

        event.type = 'down';
        smartTabs._tabStripHandler(target, event);
        event.type = 'up';
        smartTabs._tabStripHandler(target, event);

        expect(smartTabs._openDropDown).toBe(groupLabels[0].dropDown);

        event.type = 'down';
        smartTabs._tabStripHandler(target, event);
        event.type = 'up';
        smartTabs._tabStripHandler(target, event);

        expect(smartTabs._openDropDown).toBe(undefined);

        smartTabs.tabPosition = 'bottom';
        event.type = 'down';
        smartTabs._tabStripHandler(target, event);
        event.type = 'up';
        smartTabs._tabStripHandler(target, event);

        const dropDownStyle = window.getComputedStyle(smartTabs._openDropDown);

        expect(dropDownStyle.top).toBe((target.getBoundingClientRect().top - smartTabs.$.container.getBoundingClientRect().top) + 'px');

        smartTabs.tabPosition = 'left';
        event.type = 'down';
        smartTabs._tabStripHandler(target, event);
        event.type = 'up';
        smartTabs._tabStripHandler(target, event);

        expect(dropDownStyle.top).toBe(target.offsetTop - smartTabs.$.tabStrip.scrollTop + 'px');
        expect(dropDownStyle.left).toBe(target.offsetLeft + target.offsetWidth + 'px');

        smartTabs.tabPosition = 'right';
        event.type = 'down';
        smartTabs._tabStripHandler(target, event);
        event.type = 'up';
        smartTabs._tabStripHandler(target, event);

        expect(parseInt(dropDownStyle.top, 10)).toBe(parseInt(target.offsetTop - smartTabs.$.tabStrip.scrollTop), 10);
        expect(parseInt(dropDownStyle.left, 10)).toBe(parseInt(target.getBoundingClientRect().left - smartTabs.$.container.getBoundingClientRect().left), 10);
    });

    it('reordering works as expected', function () {
        smartTabs.reorder = true;

        const group2 = smartTabs.$.tabStrip.children[2],
            tab6 = smartTabs.$.tabStrip.children[3],
            event = { stopPropagation: function () { }, type: 'down', which: 1 };
        let target = group2;

        smartTabs._tabStripHandler(target, event);

        expect(smartTabs._reordering).toBe(true);

        smartTabs._documentMoveHandler({ pageX: 240, pageY: 25 });
        smartTabs._documentUpHandler({ originalEvent: { target: document } });

        expect(group2).toBe(smartTabs.$.tabStrip.children[3]);
        expect(tab6).toBe(smartTabs.$.tabStrip.children[2]);

        const group1 = smartTabs.$.tabStrip.children[0],
            tab3 = smartTabs.$.tabStrip.children[1];

        smartTabs.reorder = false;
        target = smartTabs.$.tabStrip.children[1];
        smartTabs._tabStripHandler(target, event);

        expect(smartTabs._reordering).toBe(false);

        smartTabs._documentMoveHandler({ pageX: 50, pageY: 25 });
        smartTabs._documentUpHandler({ originalEvent: { target: document } });

        expect(group1).toBe(smartTabs.$.tabStrip.children[0]);
        expect(tab3).toBe(smartTabs.$.tabStrip.children[1]);
    });

    it('group label containers are resized as expected', function () {
        const group = smartTabs.getElementsByTagName('smart-tab-items-group')[0],
            label = smartTabs._groupLabels[0],
            oldSize = label.offsetWidth;

        group.labelSize = 50;

        expect(label.offsetWidth).toBe(50);

        group.labelSize = null;

        expect(label.offsetWidth).toBe(oldSize);

        group.labelSize = 50;
        smartTabs.tabPosition = 'right';

        expect(label.offsetHeight).toBe(50);
    });

    it('no longer exists in DOM', function () {
        smartTabs.parentElement.removeChild(smartTabs);
        expect(smartTabs).not.toBeInDOM();
    });
});
