/// <reference path="../../../source/typescript/smart.elements.d.ts" />

import {Tree} from "../../../source/typescript/smart.elements"

window.onload = function () {
    const tree1 = <Tree>document.getElementById('tree1'),
        tree2 = <Tree>document.getElementById('tree2'),
        tree3 = <Tree>document.getElementById('tree3'),
        tree4 = <Tree>document.getElementById('tree4');

    document.getElementById('showLines')!.addEventListener('change', function (event) {
        const checked = (event as CustomEvent).detail.value;

        tree1.showLines = checked;
        tree2.showLines = checked;
        tree3.showLines = checked;
        tree4.showLines = checked;
    });

    document.getElementById('showRootLines')!.addEventListener('change', function () {
        const checked = (event as CustomEvent).detail.value;

        tree1.showRootLines = checked;
        tree2.showRootLines = checked;
        tree3.showRootLines = checked;
        tree4.showRootLines = checked;
    });
}