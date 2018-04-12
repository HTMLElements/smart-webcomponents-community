var describe,
    it,
    expect,
    document,
    beforeAll,
    afterAll;
describe('Testing smart-toast created dynamicaly and destroyed', function () {
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

    describe('if appendTo could be updated', function () {
        it('via the id of container', function () {
            const toast = createToast(),
                customContainer = document.createElement('div');

            customContainer.style.width = '100px';
            customContainer.style.height = '100px';
            customContainer.id = 'customContainer';
            document.body.appendChild(customContainer);


            toast.appendTo = 'customContainer';
            toast.open();
            expect(document.querySelectorAll('.smart-toast-item').length).toBe(1);
            expect(customContainer.querySelectorAll('.smart-toast-item').length).toBe(1);

            removeToast(toast);
            expect(document.querySelectorAll('.smart-toast-item').length).toBe(0);
            document.body.removeChild(customContainer);
        });

        it('via reference to an element', function () {
            const toast = createToast(),
                customContainer = document.createElement('div');

            customContainer.style.width = '100px';
            customContainer.style.height = '100px';
            customContainer.id = 'customContainer';
            document.body.appendChild(customContainer);


            toast.appendTo = customContainer;
            toast.open();
            expect(document.querySelectorAll('.smart-toast-item').length).toBe(1);
            expect(customContainer.querySelectorAll('.smart-toast-item').length).toBe(1);

            removeToast(toast);
            expect(document.querySelectorAll('.smart-toast-item').length).toBe(0);
            document.body.removeChild(customContainer);
        });
    });

    describe('if the autoOpen works as expected ', function () {
        it('by default single item to be rendered on TopRight', function () {
            const toast = createAutoOpenToast();

            expect(toast._instances.length).toBe(1);

            removeToast(toast);
        });
    });


    describe('if the value could be updated ', function () {
        it(' the latest toast to be with updated value', function () {
            const toast = createAutoOpenToast();

            toast.open();

            expect(toast._instances[0].innerText).toBe('');
            expect(toast._instances[1].innerText).toBe('');

            toast.value = 'New Value';

            expect(toast._instances[0].innerText).toBe('');
            expect(toast._instances[1].innerText.length>0).toBe(true);


            removeToast(toast);
        });
    });


    describe('if the modal could be changed ', function () {
        it(' to true, the item to be rendered in the modal container', function () {
            const toast = createToast();

            toast.modal = true;
            toast.open();

            expect(toast.$.toastContainerModal.querySelectorAll('.smart-toast-item').length).toBe(1);

            removeToast(toast);
        });

        it(' to true, then to false, the item to be rendered in container according to the set position', function () {
            const toast = createToast();

            toast.modal = true;
            toast.modal = false;
            toast.open();

            expect(toast.$.toastContainerModal.querySelectorAll('.smart-toast-item').length).toBe(0);
            expect(document.querySelectorAll('.smart-toast-container-top-right')[0].querySelectorAll('.smart-toast-item').length).toBe(1);

            removeToast(toast);
        });
    });


    describe('if "position" could be changed ', function () {
        it('to top-left, the new opened item to be rendered in TopLeft container', function () {
            const toast = createAutoOpenToast();

            toast.position = 'top-left';
            toast.open();

            expect(toast.$.toastContainerTopLeft.querySelectorAll('.smart-toast-item').length).toBe(1);

            removeToast(toast);
        });
        it('to bottom-left, the new opened item to be rendered in BottomLeft container', function () {
            const toast = createAutoOpenToast();

            toast.position = 'bottom-left';
            toast.open();
            
            expect(toast.$.toastContainerBottomLeft.querySelectorAll('.smart-toast-item').length).toBe(1);

            removeToast(toast);
        });
        it('to bottom-right, the new opened item to be rendered in BottomRight container', function () {
            const toast = createAutoOpenToast();

            toast.position = 'bottom-right';
            toast.open();
            
            expect(toast.$.toastContainerBottomRight.querySelectorAll('.smart-toast-item').length).toBe(1);

            removeToast(toast);
        });
    });
});
