var describe,
    it,
    expect,
    document;
describe('Testing smart-tooltip methods', function () {
    'use strict';

    function createTooltip() {
        const tooltip = document.createElement('smart-tooltip'),
            button = document.createElement('smart-button');

        button.id = 'button';
        document.body.appendChild(tooltip);
        document.body.appendChild(button);
        tooltip.selector = 'button';
        expect(tooltip).toBeInDOM();
        expect(button).toBeInDOM();

        return tooltip;
    }

    function removeTooltip(tooltip) {
        document.body.removeChild(document.querySelector('smart-tooltip'));
        document.body.removeChild(document.querySelector('smart-button'));
        expect(tooltip).not.toBeInDOM();
    }

    describe('Testing close() method ', function () {
        it(' on openned tooltip', function () {
            const tooltip = createTooltip();

            tooltip.visible = true;
            tooltip.close();

            expect(tooltip.visible).toBe(false);
            removeTooltip(tooltip);
        });

        it(' on openning tooltip', function () {
            const tooltip = createTooltip();

            tooltip.visible = false;
            tooltip.open();
            tooltip.close();

            expect(tooltip.visible).toBe(false);
            removeTooltip(tooltip);
        });
    });

    describe('Testing open() method ', function () {
        it(' on disabled tooltip', function () {
            const tooltip = createTooltip();

            tooltip.visible = false;
            tooltip.disabled = true;
            tooltip.open();

            expect(tooltip.visible).toBe(false);
            removeTooltip(tooltip);
        });

        it(' on enabled tooltip', function () {
            const tooltip = createTooltip();

            tooltip.visible = false;
            tooltip.open();

            expect(tooltip._isOpening).not.toBe(null);
            removeTooltip(tooltip);
        });

        it(' on position "bottom"', function () {
            const tooltip = createTooltip();

            tooltip.visible = false;
            tooltip.position = 'bottom';
            tooltip.open();

            expect(tooltip._isOpening).not.toBe(null);
            removeTooltip(tooltip);
        });

        it(' on position "left"', function () {
            const tooltip = createTooltip();

            tooltip.visible = false;
            tooltip.position = 'left';
            tooltip.open();

            expect(tooltip._isOpening).not.toBe(null);
            removeTooltip(tooltip);
        });

        it(' on position "right"', function () {
            const tooltip = createTooltip();

            tooltip.visible = false;
            tooltip.position = 'right';
            tooltip.open();

            expect(tooltip._isOpening).not.toBe(null);
            removeTooltip(tooltip);
        });


        it(' on position "absolute"', function () {
            const tooltip = createTooltip();

            tooltip.visible = false;
            tooltip.position = 'absolute';
            tooltip.offset = [20, 5];
            tooltip.open();

           expect(tooltip._isOpening).not.toBe(null);
            removeTooltip(tooltip);
        });

    });

    describe('Testing toggle() method ', function () {
        it(' ', function () {
            const tooltip = createTooltip();

            tooltip.visible = false;
            tooltip.toggle();
            expect(tooltip._isOpening).not.toBe(null);

            tooltip.toggle();
            expect(tooltip.visible).toBe(false);

            removeTooltip(tooltip);
        });
    });


    describe('Testing appendChild() method ', function () {
        it(' without arguments to throw error', function () {
            const tooltip = createTooltip();

            expect(function () { tooltip.appendChild(); }).toThrow();

            removeTooltip(tooltip);
        });

        it(' with correct argument to append child and update the position of the tooltip', function () {
            const tooltip = createTooltip(),
                customContent = document.createElement('span');

            customContent.innerText = 'Span child';
            customContent.className = 'custom-content';

            tooltip.appendChild(customContent);
            expect(tooltip.getElementsByClassName('custom-content')[0].innerHTML).toBe('Span child');

            removeTooltip(tooltip);
        });
    });

    describe('Testing insertBefore() method ', function () {
        it(' with incorrect arguments to throw error', function () {
            const tooltip = createTooltip(),
                customContent = document.createElement('span');

            expect(function () { tooltip.insertBefore(); }).toThrow();
            expect(function () { tooltip.insertBefore(customContent); }).toThrow();
            expect(function () { tooltip.insertBefore(customContent, customContent); }).toThrow();

            removeTooltip(tooltip);
        });

        it(' with correct argument to insert the new node before referenced node if it exists', function () {
            const tooltip = createTooltip(),
                customContent1 = document.createElement('span'),
                customContent2 = document.createElement('span');

            customContent1.innerText = 'Span child 1';
            customContent1.className = 'custom-content-1';
            customContent2.innerText = 'Span child 2';
            customContent2.className = 'custom-content-2';

            tooltip.appendChild(customContent1);
            expect(tooltip.getElementsByClassName('custom-content-1')[0].innerHTML).toBe('Span child 1');
            expect(tooltip.getElementsByClassName('custom-content-2')[0]).toBe(undefined);

            tooltip.insertBefore(customContent2, customContent1);
            expect(tooltip.getElementsByClassName('custom-content-1')[0].innerHTML).toBe('Span child 1');
            expect(tooltip.getElementsByClassName('custom-content-2')[0].innerHTML).toBe('Span child 2');

            removeTooltip(tooltip);
        });

    });

    describe('Testing removeChild() method ', function () {
        it(' without arguments to throw error', function () {
            const tooltip = createTooltip();

            expect(function () { tooltip.removeChild(); }).toThrow();

            removeTooltip(tooltip);
        });

        it(' with correct argument to append child and update the position of the tooltip', function () {
            const tooltip = createTooltip(),
                customContent = document.createElement('span');

            customContent.innerText = 'Span child';
            customContent.className = 'custom-content';

            tooltip.appendChild(customContent);
            expect(tooltip.getElementsByClassName('custom-content')[0].innerHTML).toBe('Span child');

            tooltip.removeChild(customContent);
            expect(tooltip.getElementsByClassName('custom-content')[0]).toBe(undefined);

            removeTooltip(tooltip);
        });

        it(' with correct argument to append child and update the position of the tooltip', function () {
            const tooltip = createTooltip(),
                customContent = document.createElement('span');

            customContent.innerText = 'Span child';
            customContent.className = 'custom-content';

            tooltip.appendChild(customContent);
            expect(tooltip.getElementsByClassName('custom-content')[0].innerHTML).toBe('Span child');

            removeTooltip(tooltip);
        });
    });
});
