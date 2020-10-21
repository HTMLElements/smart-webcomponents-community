/// <reference path="../../../source/typescript/smart.elements.d.ts" />
import {App} from "../../../source/smart.core.js"
window.onload = function () {
    const app = new App({
        id: 'app',
        data: {
            checkedNames: ['Peter']
        }
    });
};
