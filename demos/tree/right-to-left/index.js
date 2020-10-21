/// <reference path="../../../source/typescript/smart.elements.d.ts" />
window.onload = function () {
    const tree = document.getElementById('tree4');
    document.getElementById('showLines').addEventListener('change', function (event) {
        const checked = event.detail.value;
        tree.showLines = checked;
    });
    document.getElementById('showRootLines').addEventListener('change', function () {
        const checked = event.detail.value;
        tree.showRootLines = checked;
    });
};
