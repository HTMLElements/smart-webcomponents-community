/// <reference path="../../../source/typescript/smart.elements.d.ts" />
window.onload = function () {
    const app = new smartApp({
        data: {
            counter: 0,
            click: function (event) {
                this.counter++;
            }
        }
    });
};
