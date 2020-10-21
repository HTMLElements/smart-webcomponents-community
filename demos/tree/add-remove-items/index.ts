/// <reference path="../../../source/typescript/smart.elements.d.ts" />

import {Tree, Button} from "../../../source/typescript/smart.elements"

window.onload = function () {
    function handleSwipe(event:any) {
        const originalTarget = event.originalEvent.target,
            closestItem = originalTarget.closest('smart-tree-item') || originalTarget.closest('smart-tree-items-group');

        if (closestItem) {
            const remove = window.confirm('Do you wish to remove item "' + closestItem.label + '"?');

            if (remove) {
                tree.removeItem(closestItem);
            }
        }
    }

    const tree = <Tree>document.getElementById('tree');

    tree.addEventListener('swipeleft', function (event: Event) {
        handleSwipe(event);
    });

    tree.addEventListener('swiperight', function (event: Event) {
        handleSwipe(event);
    });

    document.getElementById('addBefore')!.addEventListener('click', function (event: Event) {
        const newItem = document.createElement('smart-tree-item');

        newItem.label = 'Y';

        tree.addBefore(newItem, 'zed');
        (event.target as Button).disabled = true;
    });

    document.getElementById('addAfter')!.addEventListener('click', function (event: Event) {
        const newItem = document.createElement('smart-tree-item');

        newItem.innerHTML = '0';

        tree.addAfter(newItem, 'three');
        (event.target as Button).disabled = true;
    });

    document.getElementById('addTo')!.addEventListener('click', function (event: Event) {
        const newItem = document.createElement('smart-tree-item');

        newItem.innerHTML = 'D';

        tree.addTo(newItem, 'letters');
        (event.target as Button).disabled = true;
    });

    document.getElementById('addGroupTo')!.addEventListener('click', function (event: Event) {
        const newItemsGroup = document.createElement('smart-tree-items-group');

        newItemsGroup.innerHTML = 'Capital letters<smart-tree-item>Α</smart-tree-item><smart-tree-item>Γ</smart-tree-item><smart-tree-item>Δ</smart-tree-item><smart-tree-item>Σ</smart-tree-item><smart-tree-item>Β</smart-tree-item>';
        newItemsGroup.expanded = true;

        tree.addTo(newItemsGroup, 'greekLetters');
        (event.target as Button).disabled = true;
    });

    document.getElementById('removeItem')!.addEventListener('click', function (event: Event) {
        tree.removeItem('one');
        (event.target as Button).disabled = true;
    });

    document.getElementById('sorted')!.addEventListener('change', function (event: Event) {
        tree.sorted = (event as CustomEvent).detail.value;
    });

    document.getElementById('autoSort')!.addEventListener('change', function (event: Event) {
        tree.autoSort = (event as CustomEvent).detail.value;
    });
}