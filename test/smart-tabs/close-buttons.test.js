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
    jasmine.getFixtures().preload('smart-tabs-close-buttons.htm');
    beforeEach(function () {
        loadFixtures('smart-tabs-close-buttons.htm');
        smartTabs = document.querySelector('smart-tabs');
    });

    it('exists in DOM', function () {
        expect(smartTabs).toBeInDOM();
    });

    it('close buttons are displayed as specified', function () {
        const tabs = smartTabs._tabs;

        expect(tabs[0].closeButtonHidden).toBe(false);
        expect(smartTabs._tabLabelContainers[0].closeButtonEnabled).toBe(true);
        expect(smartTabs._tabLabelContainers[0].firstElementChild.children[1]).not.toHaveClass('smart-hidden');

        expect(tabs[1].closeButtonHidden).toBe(false);
        expect(smartTabs._tabLabelContainers[1].closeButtonEnabled).toBe(true);
        expect(smartTabs._tabLabelContainers[1].firstElementChild.children[1]).not.toHaveClass('smart-hidden');

        expect(tabs[2].closeButtonHidden).toBe(true);
        expect(smartTabs._tabLabelContainers[2].closeButtonEnabled).toBe(false);
        expect(smartTabs._tabLabelContainers[2].firstElementChild.children[1]).toHaveClass('smart-hidden');
    });

    it('close buttons are shown/hidden correctly', function () {
        const tabs = smartTabs._tabs;

        smartTabs.getElementsByTagName('smart-tab-item')[2].closeButtonHidden = false;
        tabs[0].closeButtonHidden = true;

        expect(tabs[0].closeButtonHidden).toBe(true);
        expect(smartTabs._tabLabelContainers[0].closeButtonEnabled).toBe(false);
        expect(smartTabs._tabLabelContainers[0].firstElementChild.children[1]).toHaveClass('smart-hidden');

        expect(tabs[1].closeButtonHidden).toBe(false);
        expect(smartTabs._tabLabelContainers[1].closeButtonEnabled).toBe(true);
        expect(smartTabs._tabLabelContainers[1].firstElementChild.children[1]).not.toHaveClass('smart-hidden');

        expect(tabs[2].closeButtonHidden).toBe(false);
        expect(smartTabs._tabLabelContainers[2].closeButtonEnabled).toBe(true);
        expect(smartTabs._tabLabelContainers[2].firstElementChild.children[1]).not.toHaveClass('smart-hidden');
    });

    it('closeButtonMode is changed as expected', function () {
        const tabs = smartTabs._tabs;

        // to 'selected'
        smartTabs.closeButtonMode = 'selected';

        expect(tabs[0].closeButtonHidden).toBe(false);
        expect(smartTabs._tabLabelContainers[0].closeButtonEnabled).toBe(false);
        expect(smartTabs._tabLabelContainers[0].firstElementChild.children[1]).toHaveClass('smart-hidden');

        expect(tabs[1].closeButtonHidden).toBe(false);
        expect(smartTabs._tabLabelContainers[1].closeButtonEnabled).toBe(true);
        expect(smartTabs._tabLabelContainers[1].firstElementChild.children[1]).not.toHaveClass('smart-hidden');

        expect(tabs[2].closeButtonHidden).toBe(true);
        expect(smartTabs._tabLabelContainers[2].closeButtonEnabled).toBe(false);
        expect(smartTabs._tabLabelContainers[2].firstElementChild.children[1]).toHaveClass('smart-hidden');

        smartTabs.select(0);

        expect(tabs[0].closeButtonHidden).toBe(false);
        expect(smartTabs._tabLabelContainers[0].closeButtonEnabled).toBe(true);
        expect(smartTabs._tabLabelContainers[0].firstElementChild.children[1]).not.toHaveClass('smart-hidden');

        expect(tabs[1].closeButtonHidden).toBe(false);
        expect(smartTabs._tabLabelContainers[1].closeButtonEnabled).toBe(false);
        expect(smartTabs._tabLabelContainers[1].firstElementChild.children[1]).toHaveClass('smart-hidden');

        expect(tabs[2].closeButtonHidden).toBe(true);
        expect(smartTabs._tabLabelContainers[2].closeButtonEnabled).toBe(false);
        expect(smartTabs._tabLabelContainers[2].firstElementChild.children[1]).toHaveClass('smart-hidden');

        // to 'default'
        smartTabs.closeButtonMode = 'default';

        expect(tabs[0].closeButtonHidden).toBe(false);
        expect(smartTabs._tabLabelContainers[0].closeButtonEnabled).toBe(true);
        expect(smartTabs._tabLabelContainers[0].firstElementChild.children[1]).not.toHaveClass('smart-hidden');

        expect(tabs[1].closeButtonHidden).toBe(false);
        expect(smartTabs._tabLabelContainers[1].closeButtonEnabled).toBe(true);
        expect(smartTabs._tabLabelContainers[1].firstElementChild.children[1]).not.toHaveClass('smart-hidden');

        expect(tabs[2].closeButtonHidden).toBe(true);
        expect(smartTabs._tabLabelContainers[2].closeButtonEnabled).toBe(false);
        expect(smartTabs._tabLabelContainers[2].firstElementChild.children[1]).toHaveClass('smart-hidden');
    });

    describe('tab close button operation', function () {
        it('_tabStripHandler', function () {
            var event = { type: 'down' },
                targetTabHeader = smartTabs._tabLabelContainers[0],
                targetCloseButton = targetTabHeader.firstElementChild.children[1];

            smartTabs._tabStripHandler(targetCloseButton, event);
            expect(smartTabs._downTarget).toEqual(targetCloseButton);

            event.type = 'up';
            smartTabs._tabStripHandler(targetCloseButton, event);
            expect(targetTabHeader).not.toBeInDOM();

            event.type = 'mouseover';
            smartTabs._tabStripHandler(targetCloseButton, event);
            expect(targetCloseButton).toHaveClass('smart-tab-close-button-hovered');

            event.type = 'mouseout';
            smartTabs._tabStripHandler(targetCloseButton, event);
            expect(targetCloseButton).not.toHaveClass('smart-tab-close-button-hovered');
        });
    });

    it('no longer exists in DOM', function () {
        smartTabs.parentElement.removeChild(smartTabs);
        expect(smartTabs).not.toBeInDOM();
    });
});
