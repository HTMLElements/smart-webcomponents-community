/// <reference path="../../../source/typescript/smart.elements.d.ts" />

import {Tabs, Button, TabItem} from "../../../source/typescript/smart.elements"

window.onload = function () {
    const tabs = [].slice.call(document.getElementsByTagName('smart-tabs')) as Tabs[],
        reorder = <Button>document.getElementById('reorder'),
        log = <HTMLElement>document.getElementById('log');

    tabs.map(function (t: Tabs) {
        t.addEventListener('reorder', function (event) {
            const target = <HTMLElement>event.target;

            log.innerHTML = 'Moved a tab from position ' + (event as CustomEvent).detail.originalIndex + ' to position ' + (event as CustomEvent).detail.newIndex + ' in <em>' + target.id + '</em>.';
        });
    });

    reorder.addEventListener('click', function () {
        (tabs[0].getElementsByTagName('smart-tab-item')[3] as TabItem).index = 0;
    });
}