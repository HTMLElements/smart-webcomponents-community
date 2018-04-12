var describe,
    it,
    expect,
    document,
    beforeAll,
    afterAll;
describe('Testing smart-check-box create-with-script', function () {
    'use strict';
    let checkbox;
    beforeAll(function () {
        checkbox = document.createElement('smart-check-box');
        checkbox.rightToLeft = true;
        document.body.appendChild(checkbox);
    });

    afterAll(function () {
        document.body.removeChild(document.querySelector('smart-check-box'));
    });

    describe('if it ', function () {
        it('exists in DOM', function () {
            expect(checkbox).toBeInDOM();
        });
    });
    describe('if the classes are properly added when', function () {
        it('the widget is created', function () {
            expect(checkbox.firstChild).toHaveClass('smart-container');
        });
    });
    describe('if the properties are set to their default values', function () {
        it('checked is set to false', function () {
            expect(checkbox.checked).toBe(false);
        });
        it('innerHTML is set to ""', function () {
            expect(checkbox.innerHTML).toEqual('');
        });
    });
    describe(' if it\'s possible to dynamically set the property', function () {
        it('disabled to "true"', function () {
            checkbox.disabled = true;
            expect(checkbox).toHaveAttr('disabled');
        });
        it('checked to true', function () {
            checkbox.checked = true;
            expect(checkbox).toHaveAttr('checked');
        });
        it('innerHTML to "Checkbox1"', function () {
            checkbox.innerHTML = 'Checkbox1';
            expect(checkbox.getElementsByClassName('smart-label')[0].innerHTML).toEqual('Checkbox1');
        });
        it('rightToLeft to "true"', function () {
            checkbox.rightToLeft = true;
            expect(checkbox).toHaveAttr('right-to-left');
        });
    });
    describe('if it\'s possible to dynamically(using setProperty()) set the property', function () {
        it('disabled to "true"', function () {
            checkbox.setAttribute('disabled', true);
            expect(checkbox.disabled).toBe(true);
            expect(checkbox).toHaveAttr('disabled');
        });
        it('checked to true', function () {
            checkbox.setAttribute('checked', true);
            expect(checkbox.checked).toBe(true);
            expect(checkbox).toHaveAttr('checked');
        });
        it('innerHTML to "Checkbox1"', function () {
            checkbox.innerHTML = 'Checkbox1';
            expect(checkbox.getElementsByClassName('smart-label')[0].innerHTML).toEqual('Checkbox1');
        });
        it('rightToLeft to "true"', function () {
            checkbox.setAttribute('right-to-left', true);
            expect(checkbox).toHaveAttr('right-to-left');
        });
    });
});
