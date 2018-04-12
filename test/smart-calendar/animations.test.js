var describe,
    it,
    expect,
    document,
    beforeAll,
    afterAll;

describe('Testing smart-calendar animations', function () {
    'use strict';
    let calendar;
    beforeAll(function () {
        calendar = document.createElement('smart-calendar');
        calendar.$.addClass('animation');
        document.body.appendChild(calendar);
    });

    afterAll(function () {
        document.body.removeChild(document.querySelector('smart-calendar'));
    });

    describe('if it ', function () {
        it('exists in DOM', function () {
            expect(calendar).toBeInDOM();
        });
    });

    describe('month animations', function () {
        it('next/previous month', function () {
            var event = { originalEvent: { target: calendar.$.nextMonthButton, stopPropagation: function () { } } },
                currentDate = calendar._dateInView[0], newDate;

            calendar.selectionMode = 'one';

            newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, currentDate.getDate());

            calendar._downHandler(event);

            expect(currentDate.toDateString()).expect(newDate.toDateString());
        });
    });
});
