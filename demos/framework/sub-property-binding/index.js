/// <reference path="../../../source/typescript/smart.elements.d.ts" />
window.onload = function () {
    const app = new smartApp({
        data: {
            details: {
                subject: "About Transaction",
                message: "Hey, Peter. Take a look at the items, I sent you earlier."
            }
        }
    });
};
