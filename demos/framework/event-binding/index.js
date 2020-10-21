/// <reference path="../../../source/typescript/smart.elements.d.ts" />
window.onload = function () {
    const app = new smartApp({
        data: {
            message: "Hello World",
            buttonText: "Submit",
            submit: function (event) {
                alert("Submitting: " + this.message);
            }
        }
    });
};
