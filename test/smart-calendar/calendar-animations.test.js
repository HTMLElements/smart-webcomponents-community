var describe,
    it,
    expect,
    document,
    beforeAll,
    afterAll;

describe('Testing smart-calendar animations', function () {
    'use strict';
    let calendar;
    beforeAll(function () {
        calendar = document.createElement('smart-calendar');
        calendar.$.addClass('animation');
        document.body.appendChild(calendar);
    });

    afterAll(function () {
        document.body.removeChild(document.querySelector('smart-calendar'));
    });

    function createProperty(value) {
        var _value = value;

        function _get() {
            return _value;
        }

        function _set(v) {
            _value = v;
        }

        return {
            'get': _get,
            'set': _set
        };
    }

    function makePropertyWritable(objBase, objScopeName, propName, initValue) {
        var newProp,
            initObj;

        if (objBase && objScopeName in objBase && propName in objBase[objScopeName]) {
            if (typeof initValue === 'undefined') {
                initValue = objBase[objScopeName][propName];
            }

            newProp = createProperty(initValue);

            try {
                Object.defineProperty(objBase[objScopeName], propName, newProp);
            }
            catch (e) {
                initObj = {};
                initObj[propName] = newProp;
                try {
                    objBase[objScopeName] = Object.create(objBase[objScopeName], initObj);
                }
                catch (e) {
                    //stuff
                }
            }
        }
    }

    describe('if it ', function () {
        it('exists in DOM', function () {
            expect(calendar).toBeInDOM();
        });
    });

    describe('month animations', function () {
        it('next/previous month in month view', function () {
            var event = { target: calendar.$.nextMonthButton, stopPropagation: function () { } },
                newDate = new Date(calendar._dateInView[0].getFullYear(), calendar._dateInView[0].getMonth() + 1, calendar._dateInView[0].getDate());

            calendar._headerClickHandler(event);

            event.target = calendar.$.previousMonthButton;
            expect(calendar._dateInView[0].toDateString()).toEqual(newDate.toDateString());

            newDate = new Date(calendar._dateInView[0].getFullYear(), calendar._dateInView[0].getMonth() - 1, calendar._dateInView[0].getDate());

            calendar._headerClickHandler(event);
            expect(calendar._dateInView[0].toDateString()).toEqual(newDate.toDateString());
        });

        it('next/previous in year/decade view', function () {
            var event = { target: calendar.$.nextMonthButton, stopPropagation: function () { } },
                newDate = new Date(calendar._dateInView[0].getFullYear() + 1, 0, calendar._selectedDates[0].value.getDate());

            calendar.displayMode = 'year';
            calendar._headerClickHandler(event);

            expect(calendar.$.nextMonthsContainer.children[0].value.toDateString()).toEqual(newDate.toDateString());
            expect(calendar.displayMode).toEqual('year');

            calendar.displayMode = 'decade';
            calendar._headerClickHandler(event);

            newDate.setFullYear(calendar.$.dateViewContainer.children[1].value.getFullYear() + 10, newDate.getMonth(), calendar._selectedDates[0].value.getDate());

            expect(calendar.$.nextMonthsContainer.children[1].value.toDateString()).toEqual(newDate.toDateString());
            expect(calendar.displayMode).toEqual('decade');
        });

        it('displayMode = "list" animations', function () {
            var event = { originalEvent: { target: calendar.$.dateContainer, stopPropagation: function () { } } },
                newDate = new Date(calendar._dateInView[0].getFullYear() + 1, 0, calendar._dateInView[0].getDate());

            calendar.displayModeView = 'list';
            calendar._downHandler(event);

            expect(calendar.displayModeView).toEqual('list');
        });
        it('animations on mobile', function () {
            var event = {
                originalEvent: {
                    target: calendar._focusedDate,
                    stopPropagation: function () { }
                },
                preventDefault: function () { },
                stopPropagation: function () { },
                pageX: calendar._focusedDate.offsetLeft,
                pageY: calendar._focusedDate.offsetTop
            },
            newDate = new Date(calendar._dateInView[0].getFullYear() + 1, 0, calendar._dateInView[0].getDate());

            calendar.displayModeView = 'table';

            var originalAgent = window.navigator.userAgent;

            makePropertyWritable(window, 'navigator', 'userAgent');
            window.navigator.userAgent = 'android';

            calendar._downHandler(event);

            event.pageX = event.pageX + 20;

            calendar._moveHandler(event);

            calendar._documentUpHandler(event);

            calendar._downHandler(event);

            event.pageX = event.pageX - 40;

            calendar._moveHandler(event);

            calendar._documentUpHandler(event);

            calendar.displayMode = 'year';

            calendar._downHandler(event);

            event.pageX = event.pageX  + 40;

            calendar._moveHandler(event);

            calendar._dragStartDetails.startTime = -200;

            calendar._documentUpHandler(event);

            expect(calendar._dragStartDetails).not.toBeNull();

            window.navigator.userAgent = originalAgent; //reset the userAgent
        });
    });
});
