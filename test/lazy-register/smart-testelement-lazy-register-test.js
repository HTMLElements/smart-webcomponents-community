var describe,
    it,
    expect,
    document,
    beforeAll,
    afterAll;

describe('Testing lazyRegister functionality', function () {
    it('lazyRegister ie enabled', function () {
        expect(Smart.Elements.lazyRegister).toBe(true);

        expect(Smart.Elements.toRegister instanceof Array).toBe(true);
        expect(Smart.Elements.toRegister[0].tagName).toBe('smart-test-element-3');
    });

    it('elements are successfully registered on demand', function () {
        expect(function () {
            Smart.Elements.whenRegistered();
        }).toThrow();

        const dynamicTestElement31 = document.createElement('smart-test-element-3'),
            dynamicTestElement32 = document.createElement('smart-test-element-3');
        let smartTestElement3Registered = false;

        Smart.Elements.whenRegistered('smart-test-element-3', function () {
            smartTestElement3Registered = true;
        });

        document.body.appendChild(dynamicTestElement31);
        document.body.appendChild(dynamicTestElement32);

        expect(dynamicTestElement31.isReady).not.toBe(true);
        expect(dynamicTestElement31.isCompleted).not.toBe(true);
        expect(dynamicTestElement32.isReady).not.toBe(true);
        expect(dynamicTestElement32.isCompleted).not.toBe(true);

        Smart.Elements.registerElements();

        expect(dynamicTestElement31.isReady).toBe(true);
        expect(dynamicTestElement31.isCompleted).toBe(true);
        expect(dynamicTestElement32.isReady).toBe(true);
        expect(dynamicTestElement32.isCompleted).toBe(true);
        expect(smartTestElement3Registered).toBe(true);
    });
});
