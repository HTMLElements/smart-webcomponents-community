var describe,
    it,
    expect,
    document;

describe('Testing smart-tooltip event handlers', function () {
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


    describe(' testing _eventsHandler', function () {
        it('on disabled tooltip', function () {
            const tooltip = createTooltip(),
                event = {type:'click'};

            tooltip.disabled = true;
            tooltip._eventsHandler(event);
            expect(tooltip.visible).toBe(false);

            tooltip._eventsHandler(event);
            expect(tooltip.visible).toBe(false);

            removeTooltip(tooltip);
        });

        it('on "click"', function () {
            const tooltip = createTooltip(),
                event = { type: 'click' };

            tooltip.visible = false;
            tooltip.openMode = 'click';
            tooltip._eventsHandler(event);
            expect(tooltip._isOpening).not.toBe(null);

            tooltip._eventsHandler(event);
            expect(tooltip.visible).toBe(false);

            removeTooltip(tooltip);
        });


        it('on "hover"', function () {
            const tooltip = createTooltip(),
                event = { type: 'mouseenter' };

            tooltip.visible = false;
            tooltip.openMode = 'click';
            tooltip.openMode = 'hover';
            tooltip.openMode = 'focus';
            tooltip.openMode = 'click';
            tooltip.openMode = 'hover';
            tooltip._eventsHandler(event);
            expect(tooltip._isOpening).not.toBe(null);

            event.type = 'mouseout';
            tooltip._eventsHandler(event);
            expect(tooltip.visible).toBe(false);

            removeTooltip(tooltip);
        });
    });
});
