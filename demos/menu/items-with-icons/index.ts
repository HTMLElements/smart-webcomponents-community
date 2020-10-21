/// <reference path="../../../source/typescript/smart.elements.d.ts" />

import {Menu} from "../../../source/typescript/smart.elements"

window.onload = function () {
    const menu = <Menu>document.getElementById('menu');

    menu.addEventListener('itemClick', function (event) {
        window.open('https://en.wikipedia.org/wiki/' + (event as CustomEvent).detail.value, '_blank');
    });
}