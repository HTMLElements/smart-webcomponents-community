/// <reference path="../../../source/typescript/smart.elements.d.ts" />
window.onload = function () {
    const tree = document.getElementById('tree');
    const loadState = document.getElementById('loadState');
    const getState = document.getElementById('getState');
    const saveState = document.getElementById('saveState');
    tree.addEventListener('collapse', function () {
        console.log('collapse');
    });
    tree.addEventListener('expand', function () {
        console.log('expand');
    });
    getState.addEventListener('click', function () {
        const state = tree.getState();
        alert(JSON.stringify(state));
    });
    loadState.addEventListener('click', function () {
        tree.loadState();
        document.getElementById('sorted').checked = tree.sorted;
    });
    saveState.addEventListener('click', function () {
        tree.saveState();
        loadState.disabled = false;
    });
    document.getElementById('sorted').addEventListener('change', function (event) {
        tree.sorted = event.detail.value;
    });
};
