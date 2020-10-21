/// <reference path="../../../source/typescript/smart.elements.d.ts" />

import {Tree} from "../../../source/typescript/smart.elements"

window.onload = function () {
    const tree = <Tree>document.getElementById('tree');

    tree.addEventListener("expanding", function (event) {
        if ((event as CustomEvent).detail.label === 'Group 2' && (event as CustomEvent).detail.children.length === 0) {
            const load = window.confirm('Do you wish to load items dynamically?');

            if (!load) {
                event.preventDefault();
            }
        }
    });

    tree.addEventListener("expand", function (event) {
        if ((event as CustomEvent).detail.children.length > 0) {
            return;
        }

        tree.displayLoadingIndicator = true;

        setTimeout(function () {
            const newItem1 = document.createElement('smart-tree-item'),
                newItem2 = document.createElement('smart-tree-item');

            newItem1.label = 'Item ' + (event as CustomEvent).detail.path + '.0';
            newItem2.label = 'Item ' + (event as CustomEvent).detail.path + '.1';

            tree.addTo(newItem1, (event as CustomEvent).detail.item);
            tree.addTo(newItem2, (event as CustomEvent).detail.item);

            if ((event as CustomEvent).detail.item.level < 4) {
                const newItemsGroup = document.createElement('smart-tree-items-group');
                
				newItemsGroup.label = 'Group ' + (event as CustomEvent).detail.path + '.2';
                tree.addTo(newItemsGroup, (event as CustomEvent).detail.item);
            }

            tree.displayLoadingIndicator = false;
        }, 1000);
    });
}