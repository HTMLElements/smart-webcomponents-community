/// <reference path="../../../source/typescript/smart.elements.d.ts" />

import {Tabs} from "../../../source/typescript/smart.elements"

window.onload = function () {
    document.getElementById('selectFirstTab')!.addEventListener('click', function () {
        (document.getElementById('fourthTabs') as Tabs).select(0);
    })
}