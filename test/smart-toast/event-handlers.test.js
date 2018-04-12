var describe,
    it,
    expect,
    document;

describe('Testing smart-toast event handlers', function () {
    'use strict';
    function createToast() {
        const toast = document.createElement('smart-toast');

        document.body.appendChild(toast);

        expect(toast).toBeInDOM();

        return toast;
    }

    function createAutoOpenAlert() {
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

    describe(' testing _containerClickHandler', function () {
        it(' on click over the item to be fired click event', function () {
            const toast = createToast();
            let event = { type: 'click' },
                firedEvent = null;

            toast.open();
            expect(toast._instances.length).toBe(1);

            event.target = toast._instances[0];

            toast.addEventListener('click', function (event) {
                firedEvent = 'click';
            })

            toast._containerClickHandler(event);

            expect(firedEvent).toBe('click');
            expect(toast._instances.length).toBe(1);

            removeToast(toast);
        });

        it(' on click over the item\'s close button to be fired click event and the item to be closed', function () {
            const toast = createToast();
            let event = { type: 'click' },
                firedEvent = null;

            toast.open();
            expect(toast._instances.length).toBe(1);

            event.target = toast._instances[0].querySelectorAll('.smart-toast-item-close-button')[0];

            toast.addEventListener('click', function (event) {
                firedEvent = 'click';
            })

            toast._containerClickHandler(event);

            expect(firedEvent).toBe('click');
            expect(toast._instances.length).toBe(0);

            removeToast(toast);
        });

        it(' on click out of the item do not be fired click event', function () {
            const toast = createToast();
            let event = { type: 'click' },
                firedEvent = null;

            toast.open();
            expect(toast._instances.length).toBe(1);

            event.target = toast._instances[0].parentElement;;

            toast.addEventListener('click', function (event) {
                firedEvent = 'click';
            })

            toast._containerClickHandler(event);

            expect(firedEvent).toBe(null);
            expect(toast._instances.length).toBe(1);

            removeToast(toast);
        });


        it(' on click out of the item on modal mode to be closed the toast', function () {
            const toast = createToast();
            let event = { type: 'click' };

            toast.open();
            expect(toast._instances.length).toBe(1);

            event.target = toast._instances[0].parentElement;
            toast.modal = true;

            toast._containerClickHandler(event);

            expect(toast._instances.length).toBe(0);

            removeToast(toast);
        });

    });

    describe(' testing _swipeHandler', function () {
        it(' on swipeleft over the item to be fired swipeleft event', function () {
            const toast = createToast();
            let event = { type: 'swipeleft', originalEvent: {} },
                firedEvent = null;

            toast.open();
            event.originalEvent.target = toast._instances[0];

            toast.addEventListener('swipeleft', function (event) {
                firedEvent = 'swipeleft';
            })

            toast._swipeHandler(event);

            expect(firedEvent).toBe('swipeleft');

            removeToast(toast);
        });

        it(' on swiperight over the item to be fired swiperight event', function () {
            const toast = createToast();
            let event = { type: 'swiperight', originalEvent: {} },
                firedEvent = null;

            toast.open();
            event.originalEvent.target = toast._instances[0];

            toast.addEventListener('swiperight', function (event) {
                firedEvent = 'swiperight';
            })

            toast._swipeHandler(event);

            expect(firedEvent).toBe('swiperight');

            removeToast(toast);
        });

        it(' on swipe outside of the instances area do not be fired event', function () {
            const toast = createToast();
            let event = { type: 'swiperight', originalEvent: {} },
                firedEvent = null;

            toast.open();
            event.originalEvent.target = toast;

            toast.addEventListener('swiperight', function (event) {
                firedEvent = 'swiperight';
            })

            toast._swipeHandler(event);

            expect(firedEvent).toBe(null);

            removeToast(toast);
        });
    });
});
