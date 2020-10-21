/// <reference path="../../../source/typescript/smart.elements.d.ts" />

import {Tree, TreeSelectionDisplayMode} from "../../../source/typescript/smart.elements"

window.onload = function () {
    const tree = <Tree>document.querySelector('smart-tree');

    document.getElementById('row')!.addEventListener('change', function () {
        tree.selectionDisplayMode = 'row';
    });

    document.getElementById('label')!.addEventListener('change', function () {
        tree.selectionDisplayMode = 'label';
    });
}