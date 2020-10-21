/// <reference path="../../../source/typescript/smart.elements.d.ts" />

import {Tree, Position} from "../../../source/typescript/smart.elements"

window.onload = function () {
    const tree1 = <Tree>document.getElementById('tree1'),
        tree2 = <Tree>document.getElementById('tree2');

    document.getElementById('near')!.addEventListener('change', function (event) {
        tree1.toggleElementPosition = 'near';
        tree2.toggleElementPosition = 'near';
    });

    document.getElementById('far')!.addEventListener('change', function () {
        tree1.toggleElementPosition = 'far';
        tree2.toggleElementPosition = 'far';
    });

    document.getElementById('autoHideToggleElement')!.addEventListener('change', function (event) {
        const autoHideToggleElement = (event as CustomEvent).detail.value

        tree1.autoHideToggleElement = autoHideToggleElement;
        tree2.autoHideToggleElement = autoHideToggleElement;
    });
}