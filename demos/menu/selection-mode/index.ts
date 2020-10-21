/// <reference path="../../../source/typescript/smart.elements.d.ts" />

import {Menu, MenuSelectionMode} from "../../../source/typescript/smart.elements"

window.onload = function () {
    const menu = <Menu>document.getElementById('menu'),
        radioButtons = document.getElementsByTagName('smart-radio-button');

    radioButtons[0].addEventListener('change', function (event) {
        menu.selectionMode = 'click';
    });

    radioButtons[1].addEventListener('change', function (event) {
        menu.selectionMode = 'mouseenter';
    });
}