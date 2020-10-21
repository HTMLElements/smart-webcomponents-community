/// <reference path="../../../source/typescript/smart.elements.d.ts" />

import {Tree, TreeItem, TreeItemsGroup} from "../../../source/typescript/smart.elements"

window.onload = function () {
    function handleSwipe(event: any) {
        const originalTarget = event.originalEvent.target,
            closestItem = originalTarget.closest('smart-tree-item') || originalTarget.closest('smart-tree-items-group');

        if (closestItem && closestItem.level > 1 && closestItem.label !== 'editorTemplate') {
            const remove = window.confirm('Do you wish to remove item "' + closestItem.label + '"?');

            if (remove) {
                tree.removeItem(closestItem);
            }
        }
    }

    const tree = <Tree>document.getElementById('tree');

    tree.addEventListener('swipeleft', function (event) {
        handleSwipe(event);
    });

    tree.addEventListener('swiperight', function (event) {
        handleSwipe(event);
    });

    tree.addEventListener('click', function (event) {
        const target = <HTMLElement>event.target;
        const button = target.closest('smart-button');

        if (!button) {
            return;
        }

        const input = <HTMLInputElement>button.previousElementSibling,
            editorItem = <HTMLElement>button.closest('smart-tree-item'),
            treeItemsGroup = <TreeItemsGroup>button.closest('smart-tree-items-group');

        if (input.value) {
            const newItem = <TreeItem>document.createElement('smart-tree-item');

            newItem.innerHTML = input.value;
            tree.addBefore(newItem, editorItem);
            input.value = '';
        }
    });
}