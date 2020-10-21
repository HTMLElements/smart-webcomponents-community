/// <reference path="../../../source/typescript/smart.elements.d.ts" />

import {Tabs, Button, ToggleButton, TabItem} from "../../../source/typescript/smart.elements"

window.onload = function () {
    const tabs1 = <Tabs>document.getElementById('tabs1');

    document.getElementById('toggleCloseButtons')!.addEventListener('change', function (event: Event) {
        tabs1.closeButtons = (<ToggleButton>event.target).checked;
    });

    const showCloseButton = <Button>document.getElementById('showCloseButton')!,
        hideCloseButton = <Button>document.getElementById('hideCloseButton')!;

    tabs1.addEventListener('close', function (event) {
        showCloseButton!.disabled = true;
        hideCloseButton!.disabled = true;
    });

    showCloseButton.addEventListener('click', function () {
        (tabs1.getElementsByTagName('smart-tab-item')[2] as TabItem).closeButtonHidden = false;
        showCloseButton!.disabled = true;
        hideCloseButton!.disabled = false;
    });

    document.getElementById('hideCloseButton')!.addEventListener('click', function () {
        (tabs1.getElementsByTagName('smart-tab-item')[2] as TabItem).closeButtonHidden = true;
        hideCloseButton.disabled = true;
        showCloseButton.disabled = false;
    });

    document.getElementById('tabs2')!.addEventListener('closing', function (event) {
        const close = window.confirm('Do you wish to close tab with index ' + (event as CustomEvent).detail.index + '?');

        if (!close) {
            event.preventDefault();
        }
    });
}