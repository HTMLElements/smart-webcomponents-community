/// <reference path="../../../source/typescript/smart.elements.d.ts" />

import {Menu} from "../../../source/typescript/smart.elements"

window.onload = function () {
    const menu = <Menu>document.getElementById('menu');

    document.addEventListener('contextmenu', function (event) {
        event.preventDefault();
    });

    document.addEventListener('mousedown', function (event) {
        if (!menu.contains(event.target as HTMLElement)) {
            menu.close();
        }
    });

    document.addEventListener('mouseup', function (event) {
        if (event.which === 3 && !menu.contains(event.target as HTMLElement)) {
            menu.open(event.pageX, event.pageY);
        }
    });
}