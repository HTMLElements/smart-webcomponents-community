/// <reference path="../../../source/typescript/smart.elements.d.ts" />

import {Tabs} from "../../../source/typescript/smart.elements"

window.onload = function () {
    const selectTabRadioButtons = document.querySelectorAll('[group-name="selectTab"]'),
        hiddenTabs = <Tabs>document.getElementById('hiddenTabs');

    selectTabRadioButtons[0].addEventListener('change', function () {
        hiddenTabs.select(0);
    });
    selectTabRadioButtons[1].addEventListener('change', function () {
        hiddenTabs.select(1);
    });
    selectTabRadioButtons[2].addEventListener('change', function () {
        hiddenTabs.select(2);
    });
}