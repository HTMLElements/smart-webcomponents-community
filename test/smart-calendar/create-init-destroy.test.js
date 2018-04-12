var describe,
    it,
    expect,
    document;

describe('Testing smart-calendar, created via script and dynamicaly changing it\'s properties', function () {
    'use strict';

    describe('if it created dynamicaly', function () {
        it('exists in DOM', function () {
            let calendar = document.createElement('smart-calendar');
            document.body.appendChild(calendar);
            expect(calendar).toBeInDOM();

            document.body.removeChild(document.querySelector('smart-calendar'));
            expect(calendar).not.toBeInDOM();
        });

        it('can set dynamically the "animationSettings" property', function () {
            let calendar = document.createElement('smart-calendar');
            calendar.animationSettings = { step: 0.25, startSpeed: 0.4 };
            document.body.appendChild(calendar);

            expect(calendar.animationSettings).toEqual({ step: 0.25, startSpeed: 0.4 });
            document.body.removeChild(document.querySelector('smart-calendar'));
            expect(calendar).not.toBeInDOM();
        });


        it('can set dynamically the "calendarMode"', function () {
            let calendar = document.createElement('smart-calendar');
            document.body.appendChild(calendar);

            calendar.calendarMode = 'classic';
            expect(calendar.calendarMode).toEqual('classic');
            expect(calendar.getAttribute('calendar-mode')).toEqual('classic');

            calendar.calendarMode = 'default';
            expect(calendar.calendarMode).toEqual('default');
            expect(calendar.getAttribute('calendar-mode')).toEqual('default');

            document.body.removeChild(document.querySelector('smart-calendar'));
            expect(calendar).not.toBeInDOM();
        });

        it('can set dynamically the "dayNameFormat"', function () {
            let calendar = document.createElement('smart-calendar');
            document.body.appendChild(calendar);

            calendar.dayNameFormat = 'long';
            expect(calendar.dayNameFormat).toEqual('long');
            expect(calendar.getAttribute('day-name-format')).toEqual('long');

            calendar.dayNameFormat = 'narrow';
            expect(calendar.dayNameFormat).toEqual('narrow');
            expect(calendar.getAttribute('day-name-format')).toEqual('narrow');

            document.body.removeChild(document.querySelector('smart-calendar'));
            expect(calendar).not.toBeInDOM();
        });

        it('can set dynamically the "dateFormatFunction"', function () {
            let calendar = document.createElement('smart-calendar');
            document.body.appendChild(calendar);

            calendar.dateFormatFunction = function (date) { return date.getDate() + " - " + date.getMonth() };
            expect(calendar.dateFormatFunction).not.toBeNull();
            expect(calendar.getAttribute('date-format-function')).toEqual('function (date) { return date.getDate() + " - " + date.getMonth() }');

            calendar.dateFormatFunction = function (date) { return date.getFullYear() };
            expect(calendar.dateFormatFunction).not.toBeNull();
            expect(calendar.getAttribute('date-format-function')).toEqual('function (date) { return date.getFullYear() }');

            document.body.removeChild(document.querySelector('smart-calendar'));
            expect(calendar).not.toBeInDOM();
        });

        it('can set dynamically the "disableAutoNavigation"', function () {
            let calendar = document.createElement('smart-calendar');
            document.body.appendChild(calendar);

            calendar.disableAutoNavigation = true;
            expect(calendar.disableAutoNavigation).toBe(true);
            expect(calendar.getAttribute('disable-auto-navigation')).toBe('');

            calendar.disableAutoNavigation = false;
            expect(calendar.disableAutoNavigation).toBe(false);
            expect(calendar.getAttribute('disable-auto-navigation')).toBeNull();

            document.body.removeChild(document.querySelector('smart-calendar'));
            expect(calendar).not.toBeInDOM();
        });

        it('can set dynamically the "disableAutoNavigation"', function () {
            let calendar = document.createElement('smart-calendar');
            document.body.appendChild(calendar);

            calendar.displayMode = 'year';
            expect(calendar.displayMode).toEqual('year');
            expect(calendar.getAttribute('display-mode')).toBe('year');

            calendar.displayMode = 'decade';
            expect(calendar.displayMode).toEqual('decade');
            expect(calendar.getAttribute('display-mode')).toEqual('decade');

            document.body.removeChild(document.querySelector('smart-calendar'));
            expect(calendar).not.toBeInDOM();
        });

        it('can set dynamically the "displayModeView"', function () {
            let calendar = document.createElement('smart-calendar');
            document.body.appendChild(calendar);

            calendar.displayModeView = 'list';
            expect(calendar.displayModeView).toEqual('list');
            expect(calendar.getAttribute('display-mode-view')).toBe('list');

            calendar.displayModeView = 'table';
            expect(calendar.displayModeView).toEqual('table');
            expect(calendar.getAttribute('display-mode-view')).toEqual('table');

            document.body.removeChild(document.querySelector('smart-calendar'));
            expect(calendar).not.toBeInDOM();
        });

        it('can set dynamically the "firstDayOfWeek"', function () {
            let calendar = document.createElement('smart-calendar');
            document.body.appendChild(calendar);

            calendar.firstDayOfWeek = 2;
            expect(calendar.firstDayOfWeek).toBe(2);
            expect(calendar.getAttribute('first-day-of-week')).toBe('2');

            calendar.firstDayOfWeek = 1;
            expect(calendar.firstDayOfWeek).toBe(1);
            expect(calendar.getAttribute('first-day-of-week')).toBe('1');

            document.body.removeChild(document.querySelector('smart-calendar'));
            expect(calendar).not.toBeInDOM();
        });

        it('can set dynamically the "footerTemplate"', function () {
            let calendar = document.createElement('smart-calendar');
            document.body.appendChild(calendar);

            let template = document.createElement('template');

            document.body.appendChild(template);

            calendar.footerTemplate = template;
            expect(calendar.footerTemplate).not.toBeNull();
            expect(calendar.getAttribute('footer-template')).not.toBeNull();

            calendar.footerTemplate = null;
            expect(calendar.footerTemplate).toBeNull();
            expect(calendar.getAttribute('footer-template')).toBe('null');

            document.body.removeChild(document.querySelector('smart-calendar'));
            expect(calendar).not.toBeInDOM();

            document.body.removeChild(template);
        });

        it('can set dynamically the "headerTemplate"', function () {
            let calendar = document.createElement('smart-calendar');
            document.body.appendChild(calendar);

            let template = document.createElement('template');

            document.body.appendChild(template);

            calendar.headerTemplate = template;
            expect(calendar.headerTemplate).not.toBeNull();
            expect(calendar.getAttribute('header-template')).not.toBeNull();

            calendar.headerTemplate = null;
            expect(calendar.headerTemplate).toBeNull();
            expect(calendar.getAttribute('header-template')).toBe('null');

            document.body.removeChild(document.querySelector('smart-calendar'));
            expect(calendar).not.toBeInDOM();

            document.body.removeChild(template);
        });

        it('can set dynamically the "hideDayNames"', function () {
            let calendar = document.createElement('smart-calendar');
            document.body.appendChild(calendar);

            calendar.hideDayNames = true;
            expect(calendar.hideDayNames).toBe(true);
            expect(calendar.$.weekTitles.offsetHeight).toBe(0);
            expect(calendar.getAttribute('hide-day-names')).toBe('');

            calendar.hideDayNames = false;
            expect(calendar.hideDayNames).toBe(false);
            expect(calendar.$.weekTitles.offsetHeight).toBeGreaterThan(0);
            expect(calendar.getAttribute('hide-day-names')).toBeNull();

            document.body.removeChild(document.querySelector('smart-calendar'));
            expect(calendar).not.toBeInDOM();
        });

        it('can set dynamically the "hideOtherMonthDays"', function () {
            let calendar = document.createElement('smart-calendar');
            document.body.appendChild(calendar);

            const computedStyle = window.getComputedStyle(calendar.$.content.getElementsByClassName('smart-other-month-date')[0]);

            calendar.hideOtherMonthDays = true;
            expect(calendar.hideOtherMonthDays).toBe(true);
            expect(computedStyle.visibility).toBe('hidden');
            expect(calendar.getAttribute('hide-other-month-days')).toBe('');

            calendar.hideOtherMonthDays = false;
            expect(calendar.hideOtherMonthDays).toBe(false);
            expect(computedStyle.visibility).toBe('visible');
            expect(calendar.getAttribute('hide-other-month-days')).toBeNull();

            document.body.removeChild(document.querySelector('smart-calendar'));
            expect(calendar).not.toBeInDOM();
        });

        it('can set dynamically the "hideTooltipArrow"', function () {
            let calendar = document.createElement('smart-calendar');
            document.body.appendChild(calendar);

            calendar.hideTooltipArrow = true;
            expect(calendar.hideTooltipArrow).toBe(true);
            expect(calendar.$.tooltip.arrow).toBe(false);
            expect(calendar.getAttribute('hide-tooltip-arrow')).toBe('');

            calendar.hideTooltipArrow = false;
            expect(calendar.hideTooltipArrow).toBe(false);
            expect(calendar.$.tooltip.arrow).toBe(true);
            expect(calendar.getAttribute('hide-tooltip-arrow')).toBeNull();

            document.body.removeChild(document.querySelector('smart-calendar'));
            expect(calendar).not.toBeInDOM();
        });

        it('can set dynamically the "importantDates"', function () {
            let calendar = document.createElement('smart-calendar');
            document.body.appendChild(calendar);

            calendar.importantDates = ['2017-10-20', '2017-10-25'];
            expect(calendar.importantDates.length).toBe(2);
            expect(calendar.importantDates[0].toDateString()).toEqual(new Date('2017-10-20').toDateString());
            expect(calendar.importantDates[1].toDateString()).toEqual(new Date('2017-10-25').toDateString());

            calendar.importantDates = [];
            expect(calendar.importantDates).toEqual([]);
            expect(calendar.getAttribute('important-dates')).toBeNull();

            document.body.removeChild(document.querySelector('smart-calendar'));
            expect(calendar).not.toBeInDOM();
        });

        it('can set dynamically the "importantDatesTemplate"', function () {
            let calendar = document.createElement('smart-calendar');
            document.body.appendChild(calendar);

            let template = document.createElement('template');

            template.id = 'importantDatesTemplate';

            document.body.appendChild(template);

            calendar.importantDatesTemplate = 'importantDatesTemplate';
            expect(calendar.importantDatesTemplate).toBe(template.id);
            expect(calendar.getAttribute('important-dates-template')).not.toBeNull();

            calendar.importantDatesTemplate = null;
            expect(calendar.importantDatesTemplate).toBeNull();
            expect(calendar.getAttribute('important-dates')).toBeNull();

            document.body.removeChild(template);
            document.body.removeChild(document.querySelector('smart-calendar'));
            expect(calendar).not.toBeInDOM();
        });

        it('can set dynamically the "locale"', function () {
            let calendar = document.createElement('smart-calendar');
            document.body.appendChild(calendar);

            calendar.locale = 'de';
            expect(calendar.locale).toEqual('de');
            expect(calendar.getAttribute('locale')).toEqual('de');

            calendar.locale = 'bg';
            expect(calendar.locale).toEqual('bg');
            expect(calendar.getAttribute('locale')).toEqual('bg');

            document.body.removeChild(document.querySelector('smart-calendar'));
            expect(calendar).not.toBeInDOM();
        });

        it('can set dynamically the "max"', function () {
            let calendar = document.createElement('smart-calendar');
            document.body.appendChild(calendar);

            calendar.max = new Date(2000, 0, 1);
            expect(new Date(calendar.max)).toEqual(new Date(2000, 0, 1));
            expect(calendar.getAttribute('max')).toEqual(calendar.max.toString());

            calendar.max = new Date(2015, 0, 1);
            expect(new Date(calendar.max)).toEqual(new Date(2015, 0, 1));
            expect(calendar.getAttribute('max')).toEqual(calendar.max.toString());

            document.body.removeChild(document.querySelector('smart-calendar'));
            expect(calendar).not.toBeInDOM();
        });

        it('can set dynamically the "min"', function () {
            let calendar = document.createElement('smart-calendar');
            document.body.appendChild(calendar);

            calendar.min = new Date(2000, 0, 1);
            expect(new Date(calendar.min)).toEqual(new Date(2000, 0, 1));
            expect(calendar.getAttribute('min')).toEqual(calendar.min.toString());

            calendar.min = new Date(2015, 0, 1);
            expect(new Date(calendar.min)).toEqual(new Date(2015, 0, 1));
            expect(calendar.getAttribute('min')).toEqual(calendar.min.toString());

            document.body.removeChild(document.querySelector('smart-calendar'));
            expect(calendar).not.toBeInDOM();
        });

        it('can set dynamically the "months"', function () {
            let calendar = document.createElement('smart-calendar');
            document.body.appendChild(calendar);

            calendar.months = 4;
            expect(calendar.months).toBe(4);
            expect(calendar.getAttribute('months')).toBe('4');
            expect(calendar.getElementsByClassName('smart-calendar-month').length).toBe(4);

            calendar.months = 1;
            expect(calendar.months).toBe(1);
            expect(calendar.getAttribute('months')).toBe('1');
            expect(calendar.getElementsByClassName('smart-calendar-month').length).toBe(1);

            document.body.removeChild(document.querySelector('smart-calendar'));
            expect(calendar).not.toBeInDOM();
        });

        it('can set dynamically the "monthNameFormat"', function () {
            let calendar = document.createElement('smart-calendar');
            document.body.appendChild(calendar);

            calendar.monthNameFormat = 'narrow';
            expect(calendar.monthNameFormat).toBe('narrow');
            expect(calendar.getAttribute('month-name-format')).toBe('narrow');

            calendar.monthNameFormat = '2-digit';
            expect(calendar.monthNameFormat).toEqual('2-digit');
            expect(calendar.getAttribute('month-name-format')).toEqual('2-digit');

            document.body.removeChild(document.querySelector('smart-calendar'));
            expect(calendar).not.toBeInDOM();
        });

        it('can set dynamically the "restrictedDates"', function () {
            let calendar = document.createElement('smart-calendar');
            document.body.appendChild(calendar);

            calendar.restrictedDates = ['2017-1-1', '2017-1-2', '2017-1-3'];
            expect(calendar.restrictedDates[0].toDateString()).toEqual(new Date('2017-1-1').toDateString());
            expect(calendar.restrictedDates[1].toDateString()).toEqual(new Date('2017-1-2').toDateString());
            expect(calendar.restrictedDates[2].toDateString()).toEqual(new Date('2017-1-3').toDateString());

            calendar.restrictedDates = [];
            expect(calendar.restrictedDates).toEqual([]);
            expect(calendar.getAttribute('restrictedDates')).toBeNull();

            document.body.removeChild(document.querySelector('smart-calendar'));
            expect(calendar).not.toBeInDOM();
        });

        it('can set dynamically the "scrollButtonsNavigationMode"', function () {
            let calendar = document.createElement('smart-calendar');
            document.body.appendChild(calendar);

            calendar.scrollButtonsNavigationMode = 'portrait';
            expect(calendar.scrollButtonsNavigationMode).toBe('portrait');
            expect(calendar.getAttribute('scroll-buttons-navigation-mode')).toBe('portrait');

            calendar.scrollButtonsNavigationMode = 'landscape';
            expect(calendar.scrollButtonsNavigationMode).toEqual('landscape');
            expect(calendar.getAttribute('scroll-buttons-navigation-mode')).toEqual('landscape');

            document.body.removeChild(document.querySelector('smart-calendar'));
            expect(calendar).not.toBeInDOM();
        });

        it('can set dynamically the "scrollButtonsPosition"', function () {
            let calendar = document.createElement('smart-calendar');
            document.body.appendChild(calendar);

            calendar.scrollButtonsPosition = 'near';
            expect(calendar.scrollButtonsPosition).toEqual('near');
            expect(calendar.getAttribute('scroll-buttons-position')).toEqual('near');

            calendar.scrollButtonsPosition = 'far';
            expect(calendar.scrollButtonsPosition).toEqual('far');
            expect(calendar.getAttribute('scroll-buttons-position')).toEqual('far');

            document.body.removeChild(document.querySelector('smart-calendar'));
            expect(calendar).not.toBeInDOM();
        });

        it('can set dynamically the "selectedDates"', function () {
            let calendar = document.createElement('smart-calendar'),
                date1 = new Date('2017-10-24'),
                date2 = new Date('2017-12-24');

            document.body.appendChild(calendar);

            date1.setHours(0, 0, 0, 0);
            date2.setHours(0, 0, 0, 0);

            calendar.selectedDates = ['2017-10-24', '2017-12-24'];
            expect(calendar.selectedDates[0].toDateString()).toEqual(date1.toDateString());
            expect(calendar.selectedDates[1]).toEqual(date2);
            expect(calendar._selectedDates.length).toBe(1);
            expect(calendar._selectedDates[0].value.toDateString()).toEqual(date2.toDateString());

            date1 = new Date('2017-10-2');

            calendar.selectedDates = ['2017-10-2'];
            expect(calendar.selectedDates[0].toDateString()).toEqual(new Date('2017-10-2').toDateString());
            expect(calendar._selectedDates.length).toBe(1);
            expect(calendar._selectedDates[0].value.toDateString()).toEqual(date1.toDateString());

            document.body.removeChild(document.querySelector('smart-calendar'));
            expect(calendar).not.toBeInDOM();
        });

        it('can set dynamically the "selectionMode"', function () {
            let calendar = document.createElement('smart-calendar');
            document.body.appendChild(calendar);

            calendar.selectionMode = 'zeroOrMany';
            expect(calendar.selectionMode).toEqual('zeroOrMany');
            expect(calendar.getAttribute('selection-mode')).toEqual('zeroOrMany');

            calendar.selectionMode = 'zeroOrOne';
            expect(calendar.selectionMode).toEqual('zeroOrOne');
            expect(calendar.getAttribute('selection-mode')).toEqual('zeroOrOne');

            document.body.removeChild(document.querySelector('smart-calendar'));
            expect(calendar).not.toBeInDOM();
        });

        it('can set dynamically the "selectionMode"', function () {
            let calendar = document.createElement('smart-calendar');
            document.body.appendChild(calendar);

            calendar.selectionMode = 'zeroOrMany';
            calendar.selectedDates = ['2017-10-1', '2017-10-2', '2017-10-5', '2017-10-4'];

            expect(calendar.selectionMode).toEqual('zeroOrMany');
            expect(calendar.selectedDates.length).toBe(4);
            expect(calendar.getAttribute('selection-mode')).toEqual('zeroOrMany');

            calendar.selectionMode = 'zeroOrOne';
            expect(calendar.selectionMode).toEqual('zeroOrOne');
            expect(calendar.selectedDates.length).toBe(1);
            expect(calendar.getAttribute('selection-mode')).toEqual('zeroOrOne');

            document.body.removeChild(document.querySelector('smart-calendar'));
            expect(calendar).not.toBeInDOM();
        });

        it('can set dynamically the "spinButtonsDelay"', function () {
            let calendar = document.createElement('smart-calendar');
            document.body.appendChild(calendar);

            calendar.spinButtonsDelay = 120;
            expect(calendar.spinButtonsDelay).toBe(120);
            expect(calendar.getAttribute('spin-buttons-delay')).toEqual('120');

            calendar.spinButtonsDelay = 50;
            expect(calendar.spinButtonsDelay).toBe(50);
            expect(calendar.getAttribute('spin-buttons-delay')).toEqual('50');

            document.body.removeChild(document.querySelector('smart-calendar'));
            expect(calendar).not.toBeInDOM();
        });

        it('can set dynamically the "spinButtonsInitialDelay"', function () {
            let calendar = document.createElement('smart-calendar');
            document.body.appendChild(calendar);

            calendar.spinButtonsInitialDelay = 100;
            expect(calendar.spinButtonsInitialDelay).toBe(100);
            expect(calendar.getAttribute('spin-buttons-initial-delay')).toEqual('100');

            calendar.spinButtonsInitialDelay = 50;
            expect(calendar.spinButtonsInitialDelay).toBe(50);
            expect(calendar.getAttribute('spin-buttons-initial-delay')).toEqual('50');

            document.body.removeChild(document.querySelector('smart-calendar'));
            expect(calendar).not.toBeInDOM();
        });

        it('can set dynamically the "titleTemplate"', function () {
            let calendar = document.createElement('smart-calendar');
            document.body.appendChild(calendar);

            let template = document.createElement('template');

            template.id = 'titleTemplate';

            document.body.appendChild(template);

            calendar.importantDatesTemplate = 'titleTemplate';
            expect(calendar.importantDatesTemplate).toBe(template.id);
            expect(calendar.getAttribute('important-dates-template')).not.toBeNull();

            calendar.importantDatesTemplate = null;
            expect(calendar.importantDatesTemplate).toBeNull();
            expect(calendar.getAttribute('important-dates')).toBeNull();

            document.body.removeChild(template);
            document.body.removeChild(document.querySelector('smart-calendar'));
            expect(calendar).not.toBeInDOM();
        });

        it('can set dynamically the "tooltip"', function () {
            let calendar = document.createElement('smart-calendar');
            document.body.appendChild(calendar);

            calendar.tooltip = true;
            expect(calendar.tooltip).toBe(true);
            expect(calendar.getAttribute('tooltip')).not.toBeNull();

            calendar.tooltip = false;
            expect(calendar.tooltip).toBe(false);
            expect(calendar.getAttribute('tooltip')).toBeNull();

            document.body.removeChild(document.querySelector('smart-calendar'));
            expect(calendar).not.toBeInDOM();
        });

        it('can set dynamically the "tooltipDelay"', function () {
            let calendar = document.createElement('smart-calendar');
            document.body.appendChild(calendar);

            calendar.tooltipDelay = 500;
            expect(calendar.tooltipDelay).toBe(500);
            expect(calendar.getAttribute('tooltip-delay')).toEqual('500');

            calendar.tooltipDelay = 0;
            expect(calendar.tooltipDelay).toBe(0);
            expect(calendar.getAttribute('tooltip-delay')).toEqual('0');

            document.body.removeChild(document.querySelector('smart-calendar'));
            expect(calendar).not.toBeInDOM();
        });

        it('can set dynamically the "view"', function () {
            let calendar = document.createElement('smart-calendar');
            document.body.appendChild(calendar);

            //calendar.view = ['title', 'header', 'footer'];
            calendar.view = 'portrait';
            expect(calendar.view).toEqual('portrait');
            expect(calendar.getAttribute('view')).toBeNull();

            calendar.view = 'landscape';
            expect(calendar.view).toBe('landscape');
            expect(calendar.getAttribute('view')).toEqual('landscape');

            document.body.removeChild(document.querySelector('smart-calendar'));
            expect(calendar).not.toBeInDOM();
        });

        it('can set dynamically the "viewSections"', function () {
            let calendar = document.createElement('smart-calendar');
            document.body.appendChild(calendar);

            calendar.viewSections = ['title', 'header', 'footer'];
            expect(calendar.viewSections).toEqual(['title', 'header', 'footer']);
            expect(calendar.getAttribute('view-sections')).toEqual('["title","header","footer"]');

            calendar.viewSections = ['title', 'header'];
            expect(calendar.viewSections).toEqual(['title', 'header']);
            expect(calendar.getAttribute('view-sections')).toEqual('["title","header"]');

            document.body.removeChild(document.querySelector('smart-calendar'));
            expect(calendar).not.toBeInDOM();
        });

        it('can set dynamically the "weekNumbers"', function () {
            let calendar = document.createElement('smart-calendar');
            document.body.appendChild(calendar);

            calendar.weekNumbers = true;
            expect(calendar.weekNumbers).toBe(true);
            expect(calendar.getAttribute('week-numbers')).not.toBeNull();

            calendar.weekNumbers = false;
            expect(calendar.weekNumbers).toBe(false);
            expect(calendar.getAttribute('week-numbers')).toBeNull();

            document.body.removeChild(document.querySelector('smart-calendar'));
            expect(calendar).not.toBeInDOM();
        });

        it('can set dynamically the "weeks"', function () {
            let calendar = document.createElement('smart-calendar');
            document.body.appendChild(calendar);

            calendar.weeks = 2;
            expect(calendar.weeks).toBe(2);
            expect(calendar.getAttribute('weeks')).toEqual('2');

            calendar.weeks = 5;
            expect(calendar.weeks).toBe(5);
            expect(calendar.getAttribute('weeks')).toEqual('5');

            document.body.removeChild(document.querySelector('smart-calendar'));
            expect(calendar).not.toBeInDOM();
        });

        it('can set dynamically the "yearFormat"', function () {
            let calendar = document.createElement('smart-calendar');
            document.body.appendChild(calendar);

            calendar.yearFormat = '2-digit';
            expect(calendar.yearFormat).toEqual('2-digit');
            expect(calendar.getAttribute('year-format')).toEqual('2-digit');

            calendar.yearFormat = 'numeric';
            expect(calendar.yearFormat).toEqual('numeric');
            expect(calendar.getAttribute('year-format')).toEqual('numeric');

            document.body.removeChild(document.querySelector('smart-calendar'));
            expect(calendar).not.toBeInDOM();
        });
    });
});
