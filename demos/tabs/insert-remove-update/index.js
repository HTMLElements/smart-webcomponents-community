/// <reference path="../../../source/typescript/smart.elements.d.ts" />
window.onload = function () {
    const tabs = document.getElementById('tabs'), index = document.getElementById('index');
    document.getElementById('insert').addEventListener('click', function () {
        tabs.insert(parseInt(index.value), { label: 'New TAB', content: 'New content' });
    });
    document.getElementById('remove').addEventListener('click', function () {
        tabs.removeAt(parseInt(index.value));
    });
    document.getElementById('update').addEventListener('click', function () {
        tabs.update(parseInt(index.value), 'Updated TAB', 'Updated content');
    });
};
