/// <reference path="../../../source/typescript/smart.elements.d.ts" />

import {Menu, Button} from "../../../source/typescript/smart.elements"

window.onload = function () {
    const menu = <Menu>document.getElementById('menu');
    let itemCount = 1,
        subItemCount = 0;
        const removeButton = document.getElementById('removeItem') as Button;
        const addItemButton = document.getElementById('addItem') as Button;
        const addSubItemButton = document.getElementById('removeItem') as Button;

    addItemButton.addEventListener('click', function () {
        itemCount++;

        const newItem = document.createElement('smart-menu-item');

        newItem.innerHTML = 'Item ' + itemCount;

        menu.addItem(newItem);
    });

    addSubItemButton.addEventListener('click', function () {
        subItemCount++;

        const newItem = document.createElement('smart-menu-item');

        newItem.innerHTML = 'Item 0.' + subItemCount;

        menu.addItem(newItem, '0');
    });

   
    removeButton.addEventListener('click', function () {
        menu.removeItem('1');
        removeButton.disabled = true;
    });
}