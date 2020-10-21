/// <reference path="../../../source/typescript/smart.elements.d.ts" />
window.onload = function () {
    document.getElementById('selectFirstTab').addEventListener('click', function () {
        document.getElementById('fourthTabs').select(0);
    });
};
