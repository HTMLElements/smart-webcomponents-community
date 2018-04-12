var describe,
    it,
    expect,
    document,
    beforeAll,
    afterAll;
describe('Testing smartButton create-with-script', function () {
    'use strict';
    let button;
    beforeAll(function () {
        button = document.createElement('smart-button');
        button.innerHTML = 'Click Me';
        document.body.appendChild(button);
    });

    afterAll(function () {
        document.body.removeChild(document.querySelector('smart-button'));
    });

    describe('if it ', function () {
        it('exists in DOM', function () {
            expect(document.querySelector('smart-button')).toBeInDOM();
        });
    });
    describe('if the property', function () {
        it('value is set to it\'s default value', function () {
            expect(button.value).toBeUndefined();
        });
        it('name is set to it\'s default value', function () {
            expect(button.name).toBeUndefined();
        });
        it('type is set to it\'s default value', function () {
            expect(button.type).toBeUndefined();
        });
        it('clickMode is set to it\'s default value', function () {
            expect(button.clickMode).toEqual('release');
        });
    });
    describe(' if it\'s possible to dynamically set the property', function () {
        it('disabled to "true"', function () {
            button.disabled = true;
            expect(button.firstChild).toHaveAttr('disabled');
        });
        it('value to "myButton"', function () {
            button.value = 'myButton';
            expect(button.value).toEqual('myButton');
        });
        it('name is set to it\'s default value', function () {
            expect(button.name).toBeUndefined();
        });
        it('type is set to it\'s default value', function () {
            expect(button.type).toBeUndefined();
        });
        it('clickMode is set to it\'s default value', function () {
            button.clickMode = 'release';
            expect(button.clickMode).toEqual('release');
        });
        it('rightToLeft to "true"', function () {
            button.rightToLeft = true;
            expect(button).toHaveAttr('right-to-left');
        });
    });
    describe('if it\'s possible to dynamically(using setProperty()) set the property', function () {
        it('disabled to "true"', function () {
            button.setAttribute('disabled', true);
            expect(button.disabled).toBe(true);
            expect(button.firstChild).toHaveAttr('disabled');
        });
        it('value to "myButton"', function () {
            button.setAttribute('value', 'myButton');
            expect(button.value).toEqual('myButton');
        });
        it('name is set to it\'s default value', function () {
            button.setAttribute('name', 'button');
            expect(button.name).toEqual('button');
            expect(button).toHaveAttr('name', 'button');
        });
        it('type is set to it\'s default value', function () {
            button.setAttribute('type', 'reset')
            expect(button.type).toEqual('reset');
        });
        it('clickMode is set to it\'s default value', function () {
            button.setAttribute('click-mode', 'release');
            expect(button.clickMode).toEqual('release');
        });
        it('rightToLeft to "true"', function () {
            button.setAttribute('right-to-left', 'true');
            expect(button).toHaveAttr('right-to-left', 'true');
        });
    });
});
