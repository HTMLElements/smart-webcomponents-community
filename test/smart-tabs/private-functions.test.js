var describe,
    it,
    expect,
    document,
    beforeAll,
    afterAll,
    onReady = function () { };

jQuery(document).ready(onReady);

describe('Testing event handler and other private functions of smart-tabs', function () {
    'use strict';

    onReady();

    let smartTabs;
    jasmine.getFixtures().fixturesPath = 'base/test/smarttabs/fixtures';
    jasmine.getFixtures().preload('smart-tabs-simple.htm');
    beforeEach(function () {
        loadFixtures('smart-tabs-simple.htm');
        smartTabs = document.querySelector('smart-tabs');
    });

    it('"_keydownHandler" works as expected', function () {
        smartTabs.focus();

        expect(smartTabs.selectedIndex).toBe(1);

        const event = { preventDefault: function () { }, key: 'ArrowRight' };

        smartTabs._keydownHandler(event);

        expect(smartTabs.selectedIndex).toBe(2);

        event.key = 'Home';
        smartTabs._keydownHandler(event);

        expect(smartTabs.selectedIndex).toBe(0);

        event.key = 'End';
        smartTabs._keydownHandler(event);

        expect(smartTabs.selectedIndex).toBe(3);

        event.key = 'ArrowRight';
        smartTabs._keydownHandler(event);

        expect(smartTabs.selectedIndex).toBe(3);

        event.key = 'ArrowUp';
        smartTabs._keydownHandler(event);

        expect(smartTabs.selectedIndex).toBe(2);
    });

    it('"_tabStripHandler" works as expected', function () {
        expect(smartTabs.selectedIndex).toBe(1);

        const tabLabelContainers = smartTabs._tabLabelContainers;

        const event = { stopPropagation: function () { }, type: 'down', which: 1 };
        let target = tabLabelContainers[0];

        smartTabs._tabStripHandler(target, event);
        event.type = 'up';
        smartTabs._tabStripHandler(target, event);

        expect(smartTabs.selectedIndex).toBe(0);

        event.originalEvent = { target: tabLabelContainers[3] };
        smartTabs.disabled = true;
        event.type = 'down';
        smartTabs._containerHandler(event);
        event.type = 'up';
        smartTabs._containerHandler(event);

        expect(smartTabs.selectedIndex).toBe(0);

        smartTabs.disabled = false;
        event.type = 'down';
        smartTabs._containerHandler(event);
        event.type = 'up';
        smartTabs._containerHandler(event);

        expect(smartTabs.selectedIndex).toBe(3);

        event.type = 'mouseover';
        target = tabLabelContainers[1];
        smartTabs._tabStripHandler(target, event);

        expect(tabLabelContainers[1]).toHaveClass('smart-tab-hovered');

        smartTabs.selectionMode = 'mouseenter';
        target = tabLabelContainers[2];
        smartTabs._tabStripHandler(target, event);

        expect(smartTabs.selectedIndex).toBe(2);

        smartTabs.selectionMode = 'dblclick';
        event.type = 'dblclick';
        target = tabLabelContainers[3];
        smartTabs._tabStripHandler(target, event);

        expect(smartTabs.selectedIndex).toBe(3);

        smartTabs.collapsible = true;
        event.type = 'down';
        smartTabs._tabStripHandler(target, event);
        event.type = 'up';
        smartTabs._tabStripHandler(target, event);

        expect(smartTabs.collapsed).toBe(true);

        event.type = 'down';
        smartTabs._tabStripHandler(target, event);
        event.type = 'up';
        smartTabs._tabStripHandler(target, event);

        expect(smartTabs.collapsed).toBe(false);

        smartTabs.addNewTab = true;
        expect(smartTabs._addNewTab).toBeInDOM();

        event.type = 'down';
        target = smartTabs._addNewTab;
        smartTabs._tabStripHandler(target, event);
        event.type = 'up';
        smartTabs._tabStripHandler(target, event);

        expect(smartTabs._tabs.length).toBe(5);

        event.type = 'mouseover';
        smartTabs._tabStripHandler(target, event);

        expect(smartTabs._addNewTab).toHaveClass('smart-tab-hovered');

        event.type = 'mouseout';
        smartTabs._tabStripHandler(target, event);

        expect(smartTabs._addNewTab).not.toHaveClass('smart-tab-hovered');

        smartTabs.addNewTab = false;
        expect(smartTabs._addNewTab).not.toBeInDOM();
    });

    it('reordering works as expected', function () {
        expect(smartTabs._tabs[0].label).toBe('TAB 1');

        smartTabs.reorder = true;

        const tabLabelContainers = smartTabs._tabLabelContainers,
            event = { stopPropagation: function () { }, type: 'down', which: 1 };
        let target = tabLabelContainers[0];

        smartTabs._tabStripHandler(target, event);

        expect(smartTabs._reordering).toBe(true);

        smartTabs._documentMoveHandler({ pageX: 85, pageY: 25 });
        smartTabs._documentUpHandler({ originalEvent: { target: document } });

        expect(smartTabs._tabs[0].label).toBe('TAB 2');
        expect(smartTabs._tabs[1].label).toBe('TAB 1');

        smartTabs.reorder = false;

        target = tabLabelContainers[2];
        smartTabs._tabStripHandler(target, event);

        expect(smartTabs._reordering).toBe(false);

        smartTabs._documentMoveHandler({ pageX: 175, pageY: 25 });
        smartTabs._documentUpHandler({ originalEvent: { target: document } });

        expect(smartTabs._tabs[2].label).toBe('TAB 3');
        expect(smartTabs._tabs[3].label).toBe('template1');
    });

    it('"_dropDownButtonHandler" works as expected', function () {
        smartTabs.focus();

        let event = { preventDefault: function () { }, type: 'mouseover' },
            target = smartTabs.$.tabHeaderSection;

        smartTabs._dropDownButtonHandler(target, event);
        expect(smartTabs.$.dropDownButtonDropDown.firstChild).not.toHaveClass('smart-tab-hovered');

        event.type = 'down';
        smartTabs._dropDownButtonHandler(target, event);
        expect(smartTabs.$.dropDownButtonDropDown.firstChild).not.toHaveClass('smart-tab-hovered');

        event.type = 'up';
        smartTabs._dropDownButtonHandler(target, event);
        expect(smartTabs.$.dropDownButtonDropDown.firstChild).not.toHaveClass('smart-tab-hovered');

        event.type = 'mouseout';
        smartTabs._dropDownButtonHandler(target, event);
        expect(smartTabs.$.dropDownButtonDropDown.firstChild).not.toHaveClass('smart-tab-hovered');


        target = smartTabs.$.dropDownButtonDropDown.firstChild;

        event.type = 'mouseover';
        smartTabs._dropDownButtonHandler(target, event);
        expect(smartTabs.$.dropDownButtonDropDown.firstChild).toHaveClass('smart-tab-hovered');

        event.type = 'down';
        smartTabs._dropDownButtonHandler(target, event);
        expect(smartTabs.$.dropDownButtonDropDown.firstChild).toHaveClass('smart-tab-hovered');

        event.type = 'up';
        smartTabs._dropDownButtonHandler(target, event);
        expect(smartTabs.$.dropDownButtonDropDown.firstChild).toHaveClass('smart-tab-hovered');
        expect(smartTabs.$dropDownButtonDropDown).not.toHaveClass('smart-tab-hovered');
        smartTabs._dropDownButtonDropDownOpened = false;

        event.type = 'mouseout';
        smartTabs._dropDownButtonHandler(target, event);
        expect(smartTabs.$.dropDownButtonDropDown.firstChild).not.toHaveClass('smart-tab-hovered');

    });

    it('"_selectStartHandler" works as expected', function () {
        smartTabs.focus();

        let event = { preventDefault: function () { }, type: 'mouseover' },
            target = smartTabs.$.tabHeaderSection;

        smartTabs._reordering = true;
        smartTabs._selectStartHandler(event);

    });

    it('"labelSize" change handler', function () {
        smartTabs._tabs[0].labelSize = 50;

        let correspondingLabelContainer = smartTabs._tabs[0].tabLabelContainer;

        expect(correspondingLabelContainer.style.width).toBe('50px');

    });

    it('"_tabStripMoveHandler" works as expected', function () {
        smartTabs.focus();

        let event = { preventDefault: function () { }, pageX: 50, pageY: 50 };
        smartTabs.resize = true;
        smartTabs._orientationSettings = { coordinate: 'pageX' };


        smartTabs._tabStripMoveHandler(event);
        expect(smartTabs.hasAttribute('resizing')).toBe(false);
    });

    it('"_tabStripMouseleaveHandler" works as expected', function () {
        smartTabs.focus();

        let event = { preventDefault: function () { }, type: 'mouseleave' },
            target = smartTabs.$.tabHeaderSection;

        smartTabs.resize = true;
        smartTabs.setAttribute('resizing', '');

        smartTabs._tabStripMouseleaveHandler(event);

        expect(smartTabs.hasAttribute('resizing')).toBe(false);
    });

    it('"_resize" works as expected', function () {
        smartTabs.focus();

        let event = { preventDefault: function () { }, pageX: 50, pageY: 50 };

        smartTabs.resize = true;
        smartTabs._resizing = true;
        smartTabs._tabToResize = smartTabs.$.tabStrip.firstChild;
        smartTabs._orientationSettings = { coordinate: 'pageX' };

        smartTabs._resize(event);
        expect(smartTabs.hasAttribute('resizing')).toBe(false);
    });
});
