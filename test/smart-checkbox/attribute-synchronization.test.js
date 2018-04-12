var describe,
    jasmine,
    beforeEach,
    loadFixtures,
    it,
    expect,
    document;
describe('Testing smartCheckBox attributes-synchronization fixture', function () {
    'use strict';
    let checkbox;
    jasmine.getFixtures().fixturesPath = 'base/test/smart-checkbox/fixtures';
    jasmine.getFixtures().preload('smart-check-box-attributes-synchronization.htm');
    beforeEach(function () {
        loadFixtures('smart-check-box-attributes-synchronization.htm');
        checkbox = document.querySelector('smart-check-box');
    });
    describe('if it ', function () {
        it('exists in DOM', function () {
            expect(document.querySelector('smart-check-box')).toBeInDOM();
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
            expect(checkbox.innerHTML).toEqual('Checkbox1');
        });
        it('indeterminate to true', function () {
            checkbox.indeterminate = true;
            expect(checkbox.indeterminate).toBe(true);
        });
        it('rightToLeft to "true"', function () {
            checkbox.rightToLeft = true;
            expect(checkbox).toHaveAttr('right-to-left');
        });
        it('value to "checkBoxInput"', function () {
            checkbox.value = 'checkBoxInput';
            expect(checkbox.value).toEqual('checkBoxInput');
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
        it('enableContainerClick to false', function () {
            checkbox.enableContainerClick = false;
            expect(checkbox.enableContainerClick).toBe(false);
        });
        it('innerHTML to "Checkbox1"', function () {
            checkbox.setAttribute('inner-h-t-m-l', 'Checkbox1');
            expect(checkbox.innerHTML).toEqual('Checkbox1');
        });
        it('rightToLeft to "true"', function () {
            checkbox.setAttribute('right-to-left', 'true');
            expect(checkbox).toHaveAttr('right-to-left', 'true');
        });
        it('name to "CheckBox1"', function () {
            checkbox.name = 'CheckBox1';
            expect(checkbox.name).toEqual('CheckBox1');
            expect(checkbox).toHaveAttr('name', 'CheckBox1');
        });
    });
    describe('If the clickHandler is being called', function () {
        it('when you click on the element', function () {
            checkbox.disabled = false;
            checkbox.enableContainerClick = true;
            checkbox.clickMode = 'press';
            checkbox._downHandler({ originalEvent: { target: checkbox.$.checkBoxInput } });
            expect(checkbox.checked).toBe(true);
        });
    });
});
