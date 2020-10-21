/// <reference path="../../../source/typescript/smart.elements.d.ts" />

import { Tree } from "../../../source/typescript/smart.elements"

window.onload = function () {
    const tree1 = <Tree>document.getElementById('tree1');

    tree1.addEventListener('dragStart', function (event) {
        if ((event as CustomEvent).detail.items[0].label === 'Communities') {
            event.preventDefault();
        }
    });

    tree1.addEventListener('dragEnd', function (event) {
        if ((event as CustomEvent).detail.items[0].label === 'Financial services') {
            event.preventDefault();
            return;
        }

        if (!(event as CustomEvent).detail.container.closest('smart-tree')) {
            const textBox = (event as CustomEvent).detail.target.closest('smart-multiline-text-box');

            if (textBox) {
                textBox.value = (event as CustomEvent).detail.items[0].label;
            }
        }
    });
}