var describe,
    it,
    expect,
    document,
    beforeAll,
    afterAll;

describe('Testing methods in ErrorModule, LocalizationModule and BindingModule', function () {
    describe('ErrorModule : ', function () {
        let errorModuleTest = new Smart.Modules[0];

        it(' testing "log" ', function () {
            expect(function () { errorModuleTest.log('Message Log'); }).toThrow();
        });
        it(' testing "warn" ', function () {
             expect(function () { errorModuleTest.warn('Message Warn'); }).toThrow();
        });
        it(' testing "error" ', function () {
             expect(function () { errorModuleTest.error('Message Error'); }).toThrow();
        });
    });

    describe('localizationModule : ', function () {
        it(' testing "addMessages" ', function () {
            let localizationModuleTest = new Smart.Modules[1];

            expect(function () { localizationModuleTest.addMessages('messageKey', {}); }).toThrow();

        });
    });

    describe('bindingModule : ', function () {
        it(' testing "parseAttributes" ', function () {
            let bindingModuleTest = new Smart.Modules[2];

            const testElement = document.createElement('smart-test-scroll');
            testElement.setAttribute('caseas', 'value');

            bindingModuleTest.parseAttributes(testElement);

        });
    });
});
