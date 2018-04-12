var describe,
    it,
    expect,
    document,
    beforeAll,
    afterAll;
describe('Testing smart-tooltip created dynamicaly and destroyed', function () {
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

    describe('if openMode can be set ', function () {
        it('to "click"', function () {
            const tooltip = createTooltip(),
                event = { type: 'click' };

            tooltip.openMode = 'click';

            tooltip._eventsHandler(event);
            expect(tooltip._isOpening).not.toBe(null);

            removeTooltip(tooltip);
        });
        it('to "manual"', function () {
            const tooltip = createTooltip();

            tooltip.openMode = 'manual';

            removeTooltip(tooltip);
        });
        it('to "focus"', function () {
            const tooltip = createTooltip(),
                event = { type: 'click' };

            tooltip.openMode = 'focus';

            tooltip._eventsHandler(event);
            expect(tooltip._isOpening).not.toBe(null);

            removeTooltip(tooltip);
        });
    });

    describe('if tooltipTemplate can be set ', function () {
        it(' to template\'s id', function () {
            const tooltip = createTooltip(),
                template = document.createElement('template');

            template.innerHTML = '<div class="template-content">Content</div>';
            template.id = 'templateId';
            document.body.appendChild(template);

            tooltip.tooltipTemplate = 'templateId';
            expect(tooltip.getElementsByClassName('template-content')[0].innerHTML).toBe('Content');

            removeTooltip(tooltip);
        });

        it(' multiple times', function () {
            const tooltip = createTooltip(),
                template1 = document.createElement('template'),
                template2 = document.createElement('template');

            template1.innerHTML = '<div class="template-content">Content1</div>';
            template1.id = 'templateId1';
            document.body.appendChild(template1);

            template2.innerHTML = '<div class="template-content">Content2</div>';
            template2.id = 'templateId2';
            document.body.appendChild(template2);

            tooltip.tooltipTemplate = 'templateId1';
            tooltip.tooltipTemplate = 'templateId2';
            expect(tooltip.getElementsByClassName('template-content')[0].innerHTML).toBe('Content2');

            removeTooltip(tooltip);
        });


        it(' on wrong template id to throw an error', function () {
            const tooltip = createTooltip(),
                template = document.createElement('template');

            template.innerHTML = '<div class="template-content">Content</div>';
            template.id = 'templateId';
            document.body.appendChild(template);

            tooltip.tooltipTemplate = 'templateId';
            expect(function () { tooltip.tooltipTemplate = 'wrongTemplateID'; }).toThrow();

            removeTooltip(tooltip);
        });

        it(' to complex template', function () {
            const tooltip = createTooltip(),
                template = document.createElement('template');

            template.innerHTML = '<div><div class="template-content">Content</div><div>{{value}}</div><div>{{value}}</div></div>';
            template.id = 'templateId';
            document.body.appendChild(template);

            tooltip.tooltipTemplate = 'templateId';
            expect(tooltip.getElementsByClassName('template-content')[0].innerHTML).toBe('Content');

            removeTooltip(tooltip);
        });
    });

    describe('if value can be set ', function () {
        it(' to custom string', function () {
            const tooltip = createTooltip();

            tooltip.value= 'New value';
            expect(tooltip.getElementsByClassName('smart-tooltip-content')[0].innerHTML).toBe('New value');

            removeTooltip(tooltip);
        });
    });


    describe('if selector can be set ', function () {
        it(' to custom string', function () {
            const tooltip = createTooltip(),
                customSelector = document.createElement('div');

            document.body.appendChild(customSelector);

            customSelector.id = 'customSelector';
            tooltip.selector = 'customSelector';

            removeTooltip(tooltip);
        });

        it(' to HTML Element', function () {
            const tooltip = createTooltip(),
                customSelector = document.createElement('div');

            document.body.appendChild(customSelector);
            tooltip.selector = customSelector;

            removeTooltip(tooltip);
        });


        it(' to wrong value, to be thrown an error', function () {
            const tooltip = createTooltip();

            expect(function () { tooltip.selector = false; }).toThrow();

            removeTooltip(tooltip);
        });
    });
});
