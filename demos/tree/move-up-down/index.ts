/// <reference path="../../../source/typescript/smart.elements.d.ts" />

import {Tree} from "../../../source/typescript/smart.elements"

window.onload = function () {
    const tree = <Tree>document.getElementById('tree');

    document.getElementById('moveUp')!.addEventListener('click', function () {
        const selectedItem = tree.getItem(tree.selectedIndexes![0]);

        tree.moveUp(selectedItem);
    });

    document.getElementById('moveDown')!.addEventListener('click', function () {
        const selectedItem = tree.getItem(tree.selectedIndexes![0]);

        tree.moveDown(selectedItem);
    });
}