/// <reference path="../../../source/typescript/smart.elements.d.ts" />
window.onload = function () {
    const app = new smartApp({
        id: "app1",
        template: {
            "#dateTimePicker": {
                properties: {
                    calendarButton: true
                }
            }
        },
        data: {
            date: new Date('2020-11-15 06:24:00')
        }
    });
    app.notify(function (changes) {
        console.log('data is updated');
    });
};
