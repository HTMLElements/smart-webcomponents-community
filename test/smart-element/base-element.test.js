var describe,
    it,
    expect,
    document,
    beforeAll,
    afterAll;

describe('Testing high-precision DateTime object ', function () {

    describe('if it could create new instance of TestElement2', function () {
        it(' if it exists in DOM', function () {
            const testElement = document.createElement('smart-test-element-2');
            document.body.appendChild(testElement);

            expect(testElement.properties.toString()).toEqual('');
            expect(testElement.parents).not.toBe(undefined);

            document.body.removeChild(document.querySelector('smart-test-element-2'));
            expect(testElement).not.toBeInDOM();
        });
    });
});
