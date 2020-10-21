/// <reference path="../../../source/typescript/smart.elements.d.ts" />
window.onload = function () {
    const tree = document.querySelector('smart-tree'), menu = document.querySelector('smart-menu');
    let item, itemGroup;
    tree.addEventListener('contextmenu', function (event) {
        const target = event.target;
        item = target.closest('smart-tree-item');
        itemGroup = target.closest('smart-tree-items-group');
        if (!item && !itemGroup) {
            return;
        }
        //Prevent default context menu
        event.preventDefault();
        const menuItems = menu.items;
        for (let i in menuItems) {
            const menuItem = menuItems[i];
            if (menuItem.value === 'addTo' && item) {
                menuItem.disabled = true;
            }
            else {
                menuItem.disabled = false;
            }
        }
        //Open Smart.Menu
        menu.open(event.pageX, event.pageY);
    });
    menu.addEventListener('itemClick', function (event) {
        const eventDetail = event.detail, methodName = eventDetail.value;
        switch (methodName) {
            case 'addAfter':
            case 'addTo':
                const newItem = document.createElement('smart-tree-item');
                newItem.label = 'New item';
                tree[methodName](newItem, methodName === 'addTo' ? itemGroup : (item || itemGroup));
                break;
            case 'removeItem':
                tree[methodName](item || itemGroup);
                break;
        }
    });
};
