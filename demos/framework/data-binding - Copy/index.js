/// <reference path="../../../source/typescript/smart.elements.d.ts" />
window.onload = function () {
    const app = new Smart.App({
        data: {
            firstName: 'test',
            items: ['item2']
        }
    });
    // app.data.items = ['item1'];
};
