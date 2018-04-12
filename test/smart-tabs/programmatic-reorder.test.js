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

    let tabs1, tabs2;
    jasmine.getFixtures().fixturesPath = 'base/test/smart-tabs/fixtures';
    jasmine.getFixtures().preload('smart-tabs-initial-reorder.htm');
    beforeEach(function () {
        loadFixtures('smart-tabs-initial-reorder.htm');
        tabs1 = document.getElementById('tabs1');
    });

    it('tabs have been initially reordered', function () {
        const tabs = tabs1._tabs;

        expect(tabs[0].label).toBe('TAB 4');
        expect(tabs[0].index).toBe(0);
        expect(tabs[1].label).toBe('TAB 3');
        expect(tabs[1].index).toBe(1);
        expect(tabs[2].label).toBe('TAB 2');
        expect(tabs[2].index).toBe(2);
        expect(tabs[3].label).toBe('TAB 1');
        expect(tabs[3].index).toBe(3);
    });

    it('tabs have been reordered dynamically', function () {
        const tabs = tabs1._tabs;

        tabs[0].index = 2;
        tabs[3].index = 0;

        expect(tabs[0].label).toBe('TAB 1');
        expect(tabs[0].index).toBe(0);
        expect(tabs[1].label).toBe('TAB 3');
        expect(tabs[1].index).toBe(1);
        expect(tabs[2].label).toBe('TAB 2');
        expect(tabs[2].index).toBe(2);
        expect(tabs[3].label).toBe('TAB 4');
        expect(tabs[3].index).toBe(3);

        tabs1.insert(4, { label: 'Grouped TAB', content: 'Sample content', group: 'Group A' });

        expect(tabs[4].label).toBe('Grouped TAB');

        tabs[4].index = 0;

        expect(tabs[0].label).toBe('Grouped TAB');
        expect(tabs[0].index).toBe(0);
        expect(tabs[1].label).toBe('TAB 1');
        expect(tabs[1].index).toBe(1);
        expect(tabs[2].label).toBe('TAB 3');
        expect(tabs[2].index).toBe(2);
        expect(tabs[3].label).toBe('TAB 2');
        expect(tabs[3].index).toBe(3);
        expect(tabs[4].label).toBe('TAB 4');
        expect(tabs[4].index).toBe(4);
        expect(tabs1._groups.length).toBe(0);
    });

    it('Ambiguous tab indexes are not applied', function () {
        const tabs2 = document.getElementById('tabs2'),
            tabs = tabs2._tabs;

        expect(tabs[0].label).toBe('TAB 1');
        expect(tabs[0].index).toBe(0);
        expect(tabs[1].label).toBe('TAB 2');
        expect(tabs[1].index).toBe(1);
        expect(tabs[2].label).toBe('TAB 3');
        expect(tabs[2].index).toBe(2);
        expect(tabs[3].label).toBe('TAB 4');
        expect(tabs[3].index).toBe(3);
    });
});
