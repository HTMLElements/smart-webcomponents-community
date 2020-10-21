/// <reference path="../../../source/typescript/smart.elements.d.ts" />

import { Tree } from "../../../source/typescript/smart.elements"

window.onload = function () {
    const tree = <Tree>document.getElementById('tree4');

    document.getElementById('showLines')!.addEventListener('change', function (event) {
        const checked = (event as CustomEvent).detail.value;

        tree.showLines = checked;
    });

    document.getElementById('showRootLines')!.addEventListener('change', function () {
        const checked = (event as CustomEvent).detail.value;

        tree.showRootLines = checked;
    });
}