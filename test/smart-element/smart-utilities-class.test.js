var describe,
    it,
    expect,
    document,
    beforeAll,
    afterAll;
describe('Testing smartElement', function () {
    'use strict';

    describe('BaseElement getters ', function () {
        it('using smart-button instance', function () {
            let button = document.createElement('smart-button');

            button.innerHTML = 'Simple Button';
            document.body.appendChild(button);

            expect(typeof(button.properties)).toBe('object');
            expect(button.properties).toEqual(button._properties);
            expect(button.properties.innerHTML.value).toEqual('Simple Button');

            expect(typeof (button.parents)).toBe('object');
            expect(button.parents.length).toBe(2);
        });
    });
});
