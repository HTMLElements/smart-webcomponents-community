/// <reference path="../../../source/typescript/smart.elements.d.ts" />
window.onload = function () {
    const tree1 = document.getElementById('tree1');
    tree1.addEventListener('dragStart', function (event) {
        if (event.detail.items[0].label === 'Communities') {
            event.preventDefault();
        }
    });
    tree1.addEventListener('dragEnd', function (event) {
        if (event.detail.items[0].label === 'Financial services') {
            event.preventDefault();
            return;
        }
        if (!event.detail.container.closest('smart-tree')) {
            const textBox = event.detail.target.closest('smart-multiline-text-box');
            if (textBox) {
                textBox.value = event.detail.items[0].label;
            }
        }
    });
};
