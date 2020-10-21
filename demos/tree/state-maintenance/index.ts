/// <reference path="../../../source/typescript/smart.elements.d.ts" />

import {Tree, CheckBox, Button} from "../../../source/typescript/smart.elements"

window.onload = function () {
    const tree = <Tree>document.getElementById('tree');
    const loadState = <Button>document.getElementById('loadState');
    const getState = <Button>document.getElementById('getState');
    const saveState = <Button>document.getElementById('saveState');
    
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

        (document.getElementById('sorted') as CheckBox).checked = tree.sorted;
    });

    saveState.addEventListener('click', function () {
        tree.saveState();
        loadState.disabled = false;
    });

    document.getElementById('sorted')!.addEventListener('change', function (event) {
        tree.sorted = (event as CustomEvent).detail.value;
    });
}