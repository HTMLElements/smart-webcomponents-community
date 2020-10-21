/// <reference path="../../../source/typescript/smart.elements.d.ts" />
window.onload = function () {
    const menu = document.getElementById('menu');
    let itemCount = 1, subItemCount = 0;
    const removeButton = document.getElementById('removeItem');
    const addItemButton = document.getElementById('addItem');
    const addSubItemButton = document.getElementById('removeItem');
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
};
