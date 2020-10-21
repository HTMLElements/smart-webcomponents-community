/// <reference path="../../../source/typescript/smart.elements.d.ts" />
window.onload = function () {
    const tree = document.querySelector('smart-tree');
    document.getElementById('row').addEventListener('change', function () {
        tree.selectionDisplayMode = 'row';
    });
    document.getElementById('label').addEventListener('change', function () {
        tree.selectionDisplayMode = 'label';
    });
};
