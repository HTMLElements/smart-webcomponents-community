var describe,
    it,
    expect,
    document,
    beforeAll,
    afterAll;
describe('Testing smart-radio-button create-with-script', function () {
    'use strict';
    let radioButton;
    beforeAll(function () {
        radioButton = document.createElement('smart-radio-button');
        radioButton.rightToLeft = true;
        document.body.appendChild(radioButton);
    });

    afterAll(function () {
        document.body.removeChild(document.querySelector('smart-radio-button'));
    });

    describe('if it ', function () {
        it('exists in DOM', function () {
            expect(document.querySelector('smart-radio-button')).toBeInDOM();
        });
    });
    describe('if the properties are set to their default values', function () {
        it('disabled is set to "false"', function () {
            expect(radioButton.disabled).toBe(false);
        });
        it('checked is set to false', function () {
            expect(radioButton.checked).toBe(false);
        });
        it('groupName is set to ""', function () {
            expect(radioButton.groupName).toEqual('');
        });
        it('enableContainerClick is set to false', function () {
            expect(radioButton.enableContainerClick).toBe(false);
        });
        it('value is undefined', function () {
            expect(radioButton.value).toBeUndefined();
        });
        it('name is undefined', function () {
            expect(radioButton.name).toBeUndefined();
        });
        it('type is undefined', function () {
            expect(radioButton.type).toBeUndefined();
        });
        it('clickMode is set to "release"', function () {
            expect(radioButton.clickMode).toEqual('release');
        });
        it('rightToLeft is set to "true"', function () {
            expect(radioButton.rightToLeft).toBe(true);
        });
    });
    describe(' if it\'s possible to dynamically set the property', function () {
        it('disabled to "true"', function () {
            radioButton.disabled = true;
            expect(radioButton.disabled).toBe(true);
        });
        it('checked to true', function () {
            radioButton.checked = true;
            expect(radioButton.checked).toBe(true);
        });
        it('groupName to "first"', function () {
            radioButton.groupName = 'first';
            expect(radioButton.groupName).toEqual('first');
        });
        it('enableContainerClick to false', function () {
            radioButton.enableContainerClick = false;
            expect(radioButton.enableContainerClick).toBe(false);
        });
        it('value to "radioButton1"', function () {
            radioButton.value = 'radioButton1';
            expect(radioButton.value).toEqual('radioButton1');
        });
        it('name to "myRadioButton" ', function () {
            radioButton.name = 'myRadioButton';
            expect(radioButton.name).toEqual('myRadioButton');
        });
        it('type to "Submit"', function () {
            radioButton.type = 'Submit';
            expect(radioButton.type).toEqual('Submit');
        });
        it('clickMode to "hover"', function () {
            radioButton.clickMode = 'hover';
            expect(radioButton.clickMode).toEqual('hover');
        });
        it('rightToLeft to "true"', function () {
            radioButton.rightToLeft = true;
            expect(radioButton.rightToLeft).toBe(true);
        });
    });
    describe('if it\'s possible to dynamically(using setProperty()) set the property', function () {
        it('disabled to "true"', function () {
            radioButton.setAttribute('disabled', true);
            expect(radioButton.disabled).toBe(true);
            expect(radioButton).toHaveAttr('disabled');
        });
        it('checked to true', function () {
            radioButton.setAttribute('checked', true);
            expect(radioButton.checked).toBe(true);
            expect(radioButton).toHaveAttr('checked');
        });
        it('groupName to "first"', function () {
            radioButton.setAttribute('group-name', 'first');
            expect(radioButton.groupName).toEqual('first');
            expect(radioButton).toHaveAttr('group-name');
        });
        it('enableContainerClick to false', function () {
            radioButton.removeAttribute('enable-container-click');
            expect(radioButton.enableContainerClick).toBe(false);
            expect(radioButton).not.toHaveAttr('enable-container-click');
        });
        it('value to "radioButton1"', function () {
            radioButton.setAttribute('value', 'radioButton1');
            expect(radioButton.value).toEqual('radioButton1');
            expect(radioButton).toHaveAttr('value');
        });
        it('name to "myRadioButton" ', function () {
            radioButton.setAttribute('name', 'myRadioButton');
            expect(radioButton.name).toEqual('myRadioButton');
            expect(radioButton).toHaveAttr('name');
        });
        it('type to "Submit"', function () {
            radioButton.setAttribute('type', 'Submit');
            expect(radioButton.type).toEqual('Submit');
            expect(radioButton).toHaveAttr('type');
        });
        it('clickMode to "hover"', function () {
            radioButton.setAttribute('click-mode', 'hover');
            expect(radioButton.clickMode).toEqual('hover');
            expect(radioButton).toHaveAttr('click-mode');
        });
        it('rightToLeft to "true"', function () {
            radioButton.setAttribute('right-to-left', 'true');
            expect(radioButton.rightToLeft).toBe(true);
            expect(radioButton).toHaveAttr('right-to-left', 'true');
        });
    });
});
