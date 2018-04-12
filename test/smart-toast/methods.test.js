var describe,
    it,
    expect,
    document,
    beforeAll,
    afterAll;
describe('Testing smart-toast methods', function () {
    'use strict';
    function createToast() {
        const toast = document.createElement('smart-toast');

        document.body.appendChild(toast);

        expect(toast).toBeInDOM();

        return toast;
    }

    function createAutoOpenToast() {
        const toast = document.createElement('smart-toast');

        toast.autoOpen = true;
        document.body.appendChild(toast);

        expect(toast).toBeInDOM();

        return toast;
    }

    function removeToast(toast) {
        document.body.removeChild(document.querySelector('smart-toast'));
        expect(toast).not.toBeInDOM();
    }

    describe(' testing "open" method', function () {
        it('on disabled toast do not be created new toast instance', function () {
            const toast = createToast();

            toast.disabled=true;
            toast.open();
            expect(toast._instances.length).toBe(0);

            removeToast(toast);
        });

        it('with html element as value', function () {
            const toast = createToast(),
                valueAsHTMLElement = document.createElement('div');

            valueAsHTMLElement.innerHTML = 'custom';
            document.body.appendChild(valueAsHTMLElement);

            toast.value = valueAsHTMLElement;
            toast.open();
            expect(toast._instances.length).toBe(1);

            removeToast(toast);
        });

        it(' on enabled toast each toast.open() to add new toast instance', function () {
            const toast = createToast();

            toast.open();
            expect(toast._instances.length).toBe(1);
            toast.open();
            expect(toast._instances.length).toBe(2);
            toast.open();
            expect(toast._instances.length).toBe(3);
            toast.open();
            expect(toast._instances.length).toBe(4);
            toast.open();
            expect(toast._instances.length).toBe(5);
            toast.open();
            expect(toast._instances.length).toBe(6);

            removeToast(toast);
        });

        it('if showCloseButton is true then close button can be displayed in each new toast item', function () {
            const toast = createToast();

            toast.showCloseButton = true;
            toast.open();

            expect(toast._instances[0].hasAttribute('show-close-button')).toBe(true);

            removeToast(toast);
        });


        it('if toast contains CSS classes, they will can be applyed to the newly opened toast items', function () {
            const toast = createToast();

            toast.classList.add('animation');
            toast.classList.add('blink');
            toast.autoClose = true;
            toast.open();

            expect(toast._instances[0].classList.contains('animation')).toBe(true);
            expect(toast._instances[0].classList.contains('blink')).toBe(true);

            removeToast(toast);
        });

        it('with new applied template', function () {
            const toast = createToast(),
                template = document.createElement('template');

            template.innerHTML = '<b>Toast</b>';
            template.id = 'template';
            document.body.appendChild(template);

            toast.itemTemplate = 'template';
            toast.open();

            expect(toast._instances.length).toBe(1);
            expect(toast._instances[0].innerText).toBe('Toast');

            removeToast(toast);
            document.body.removeChild(template);
        });
    });

    describe(' testing "closeAll" method', function () {
        it('all previously openned toasts to be closed', function () {
            const toast = createToast();

            toast.open();
            toast.open();
            expect(toast._instances.length).toBe(2);

            toast.closeAll();
            expect(toast._instances.length).toBe(0);

            removeToast(toast);
        });
    });

    describe(' testing "closeItem" method', function () {
        it('closeItem method without given parameter do not close nothing', function () {
            const toast = createToast();

            toast.open();
            toast.open();
            expect(toast._instances.length).toBe(2);

            toast.closeItem();
            expect(toast._instances.length).toBe(2);

            removeToast(toast);
        });

        it('closeItem method with wrong parameter do not close nothing', function () {
            const toast = createToast();

            toast.open();
            toast.open();
            expect(toast._instances.length).toBe(2);

            toast.closeItem(toast);
            expect(toast._instances.length).toBe(2);

            removeToast(toast);
        });

        it('the first opened toast item to be closed', function () {
            const toast = createToast();

            toast.open();
            toast.open();
            expect(toast._instances.length).toBe(2);

            toast.closeItem(toast._instances[0]);
            expect(toast._instances.length).toBe(1);

            removeToast(toast);
        });

        it('to close an item by given id', function () {
            const toast = createToast();

            toast.open();
            toast.open();
            expect(toast._instances.length).toBe(2);

            toast._instances[1].id = 'item1';
            expect(toast._instances.length).toBe(2);

            toast.closeItem('item1');
            expect(toast._instances.length).toBe(1);

            removeToast(toast);
        });
    });

    describe(' testing "closeLast" method', function () {
        it('to close the latest opened item', function () {
            const toast = createToast();

            toast.open();
            toast.open();
            toast.open();
            toast.open();
            expect(toast._instances.length).toBe(4);

            toast.closeLast();
            expect(toast._instances.length).toBe(3);

            removeToast(toast);
        });
    });
});
