var describe,
    it,
    expect,
    document,
    beforeAll,
    afterAll;
describe('Testing smart-drop-down-list resizing', function () {
    'use strict';
    let dropDownList;
    beforeAll(function () {
        dropDownList = document.createElement('smart-drop-down-list');
        dropDownList.dataSource = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven'];
        document.body.appendChild(dropDownList);
    });

    afterAll(function () {
        document.body.removeChild(document.querySelector('smart-drop-down-list'));
    });

    describe('if it ', function () {
        it('exists in DOM', function () {
            expect(dropDownList).toBeInDOM();
        });
    });

    describe('if it\'s working properly when the popup is below the dropDownList element', function () {
        it('resizeMode = "none"', function () {
            var event = {
                target: document,
                originalEvent: { target: dropDownList.$.resizeBar },
                pageX: dropDownList.$.resizeBar.offsetLeft + 20,
                pageY: dropDownList.$.resizeBar.offsetTop + 5,
                clientX: dropDownList.$.resizeBar.offsetLeft + 20,
                clientY: dropDownList.$.resizeBar.offsetTop + 5
            },
            popupWidth = dropDownList.$.dropDownContainer.offsetWidth,
            popupHeight = dropDownList.$.dropDownContainer.offsetHeight;

            dropDownList.open();
            dropDownList._documentDownHandler(event);

            expect(dropDownList._resizeDetails).toBeUndefined();

            dropDownList._documentMoveHandler(event);

            expect(dropDownList).not.toHaveAttr('resizing', '');
            expect(dropDownList.$.dropDownContainer.offsetHeight).toBe(popupHeight);
            expect(dropDownList.$.dropDownContainer.offsetWidth).toBe(popupWidth);

            event.originalEvent.target = document.body;

            dropDownList._documentUpHandler(event);

            expect(dropDownList.$.dropDownContainer).toHaveClass('smart-visibility-hidden');
        });

        it('resizeMode = "vertical"', function () {
            dropDownList.resizeMode = 'vertical';
            dropDownList.$.dropDownContainer.style.maxHeight = '400px';

            var event = {
                target: document,
                originalEvent: { target: dropDownList.$.resizeBar },
                pageX: dropDownList.$.resizeBar.offsetLeft + 20,
                pageY: dropDownList.$.resizeBar.offsetTop + 5,
                clientX: dropDownList.$.resizeBar.offsetLeft + 20,
                clientY: dropDownList.$.resizeBar.offsetTop + 5
            },
            popupWidth = dropDownList.$.dropDownContainer.offsetWidth,
            popupHeight = dropDownList.$.dropDownContainer.offsetHeight;

            dropDownList.open();
            dropDownList._documentDownHandler(event);

            expect(dropDownList._resizeDetails).not.toBeUndefined();

            event.pageX = event.pageY += 5;

            dropDownList._documentMoveHandler(event);

            expect(dropDownList).toHaveAttr('resizing', '');
            expect(dropDownList.$.dropDownContainer.offsetHeight).toBe(popupHeight + 5);
            expect(dropDownList.$.dropDownContainer.offsetWidth).toBe(popupWidth);

            dropDownList._documentUpHandler(event);

            expect(dropDownList).not.toHaveAttr('resizing');
            expect(dropDownList.$.dropDownContainer).not.toHaveClass('smart-visibility-hidden');
        });

        it('resizeMode = "horizontal"', function () {
            var event = {
                target: document,
                originalEvent: { target: dropDownList.$.resizeBar },
                pageX: dropDownList.$.resizeBar.offsetLeft + 20,
                pageY: dropDownList.$.resizeBar.offsetTop + 5,
                clientX: dropDownList.$.resizeBar.offsetLeft + 20,
                clientY: dropDownList.$.resizeBar.offsetTop + 5
            },
            popupWidth = dropDownList.$.dropDownContainer.offsetWidth,
            popupHeight = dropDownList.$.dropDownContainer.offsetHeight;

            //Resizing from the left side of the resize bar - not allowed
            dropDownList.open();
            dropDownList.resizeMode = 'horizontal';
            dropDownList._documentDownHandler(event);

            expect(dropDownList._resizeDetails).not.toBeUndefined();

            event.pageY += 10;

            dropDownList._documentMoveHandler(event);

            expect(dropDownList).toHaveAttr('resizing', '');
            expect(dropDownList.$.dropDownContainer.offsetHeight).toBe(popupHeight);
            expect(dropDownList.$.dropDownContainer.offsetWidth).toBe(popupWidth);

            dropDownList._documentUpHandler(event);

            expect(dropDownList).not.toHaveAttr('resizing');
            expect(dropDownList.$.dropDownContainer).not.toHaveClass('smart-visibility-hidden');

            //Resizing From the corner - allowed
            event.pageX = event.clientX = dropDownList.offsetLeft + dropDownList.$.resizeBar.offsetLeft + dropDownList.$.resizeBar.offsetWidth - 10;

            dropDownList.open();
            dropDownList.resizeMode = 'horizontal';
            dropDownList._documentDownHandler(event);

            expect(dropDownList._resizeDetails).not.toBeUndefined();

            event.pageX += 10;
            event.pageY += 10;

            dropDownList._documentMoveHandler(event);

            expect(dropDownList).toHaveAttr('resizing', '');
            expect(dropDownList.$.dropDownContainer.offsetHeight).toBe(popupHeight);
            expect(dropDownList.$.dropDownContainer.offsetWidth).toBe(popupWidth + 10);

            dropDownList._documentUpHandler(event);

            expect(dropDownList).not.toHaveAttr('resizing');
            expect(dropDownList.$.dropDownContainer).not.toHaveClass('smart-visibility-hidden');
        });

        it('resizeMode = "both"', function () {
            var event = {
                target: document,
                preventDefault: function() {},
                originalEvent: { target: dropDownList.$.resizeBar },
                pageX: dropDownList.$.resizeBar.offsetLeft + 20,
                pageY: dropDownList.$.resizeBar.offsetTop + 5,
                clientX: dropDownList.$.resizeBar.offsetLeft + 20,
                clientY: dropDownList.$.resizeBar.offsetTop + 5
            },
            popupWidth = dropDownList.$.dropDownContainer.offsetWidth,
            popupHeight = dropDownList.$.dropDownContainer.offsetHeight;

            //Resizing from the left side of the resize bar
            dropDownList.open();
            dropDownList.resizeMode = 'both';
            dropDownList._documentDownHandler(event);

            expect(dropDownList._resizeDetails).not.toBeUndefined();

            event.pageX += 10;
            event.pageY += 10;

            dropDownList._dragStartHandler(event);
            dropDownList._documentMoveHandler(event);

            expect(dropDownList).toHaveAttr('resizing', '');
            expect(dropDownList.$.dropDownContainer.offsetHeight).toBe(popupHeight + 10);
            expect(dropDownList.$.dropDownContainer.offsetWidth).toBe(popupWidth + 10);

            dropDownList._documentUpHandler(event);

            expect(dropDownList).not.toHaveAttr('resizing');
            expect(dropDownList.$.dropDownContainer).not.toHaveClass('smart-visibility-hidden');

            //Resizing From the right corner - allowed
            event.pageX = event.clientX = dropDownList.offsetLeft + dropDownList.$.resizeBar.offsetLeft + dropDownList.$.resizeBar.offsetWidth - 10;

            dropDownList.open();
            dropDownList._documentDownHandler(event);

            expect(dropDownList._resizeDetails).not.toBeUndefined();

            event.pageX += 10;
            event.pageY += 10;

            dropDownList._documentMoveHandler(event);

            expect(dropDownList).toHaveAttr('resizing', '');
            expect(dropDownList.$.dropDownContainer.offsetHeight).toBe(popupHeight + 20);
            expect(dropDownList.$.dropDownContainer.offsetWidth).toBe(popupWidth + 20);

            dropDownList._documentUpHandler(event);

            expect(dropDownList).not.toHaveAttr('resizing');
            expect(dropDownList.$.dropDownContainer).not.toHaveClass('smart-visibility-hidden');
        });
    });

    describe('if it\'s working properly when the popup is over the dropDownList element', function () {
        it('resizeMode = "vertical"', function () {
            var event = {
                target: document,
                originalEvent: { target: dropDownList.$.resizeBar },
                pageX: dropDownList.$.resizeBar.offsetLeft + 20,
                pageY: dropDownList.$.resizeBar.offsetTop + 5,
                clientX: dropDownList.$.resizeBar.offsetLeft + 20,
                clientY: dropDownList.$.resizeBar.offsetTop + 5
            },
            popupWidth = dropDownList.$.dropDownContainer.offsetWidth,
            popupHeight = dropDownList.$.dropDownContainer.offsetHeight;

            dropDownList.style.marginTop = '300px';

            dropDownList._calculateDropDownSize();
            
            dropDownList.dropDownPosition = 'top';
            dropDownList.open();
            dropDownList.resizeMode = 'vertical';
            dropDownList._documentDownHandler(event);
            
            expect(dropDownList._resizeDetails).not.toBeUndefined();
            
            event.pageX = event.pageY += 5;

            dropDownList._documentMoveHandler(event);

            expect(dropDownList).toHaveAttr('resizing', '');
            expect(dropDownList.$.dropDownContainer.offsetHeight).toBe(popupHeight - 5);
            expect(dropDownList.$.dropDownContainer.offsetWidth).toBe(popupWidth);

            dropDownList._documentUpHandler(event);

            expect(dropDownList).not.toHaveAttr('resizing');
            expect(dropDownList.$.dropDownContainer).not.toHaveClass('smart-visibility-hidden');
        });

        it('resizeMode = "horizontal"', function () {
            var event = {
                target: document,
                originalEvent: { target: dropDownList.$.resizeBar },
                pageX: dropDownList.$.resizeBar.offsetLeft + 20,
                pageY: dropDownList.$.resizeBar.offsetTop + 5,
                clientX: dropDownList.$.resizeBar.offsetLeft + 20,
                clientY: dropDownList.$.resizeBar.offsetTop + 5
            },
            popupWidth = dropDownList.$.dropDownContainer.offsetWidth,
            popupHeight = dropDownList.$.dropDownContainer.offsetHeight;

            //Resizing from the left side of the resize bar - not allowed
            dropDownList.dropDownPosition = 'top';
            dropDownList.open();
            dropDownList.resizeMode = 'horizontal';
            dropDownList._documentDownHandler(event);

            expect(dropDownList._resizeDetails).not.toBeUndefined();

            event.pageX += 10; 
            event.pageY += 10;

            dropDownList._documentMoveHandler(event);

            expect(dropDownList).toHaveAttr('resizing', '');
            expect(dropDownList.$.dropDownContainer.offsetHeight).toBe(popupHeight);
            expect(dropDownList.$.dropDownContainer.offsetWidth).toBe(popupWidth + 10);

            dropDownList._documentUpHandler(event);

            expect(dropDownList).not.toHaveAttr('resizing');
            expect(dropDownList.$.dropDownContainer).not.toHaveClass('smart-visibility-hidden');

            //Resizing From the corner - allowed
            event.pageX = event.clientX = dropDownList.offsetLeft + dropDownList.$.resizeBar.offsetLeft + dropDownList.$.resizeBar.offsetWidth - 10;

            dropDownList.open();
            dropDownList.resizeMode = 'both';
            dropDownList._documentDownHandler(event);

            expect(dropDownList._resizeDetails).not.toBeUndefined();

            event.pageY += 10;

            dropDownList._documentMoveHandler(event);

            expect(dropDownList).toHaveAttr('resizing', '');
            expect(dropDownList.$.dropDownContainer.offsetHeight).toBe(popupHeight - 10);
            expect(dropDownList.$.dropDownContainer.offsetWidth).toBe(popupWidth + 10);

            dropDownList._documentUpHandler(event);

            expect(dropDownList).not.toHaveAttr('resizing');
            expect(dropDownList.$.dropDownContainer).not.toHaveClass('smart-visibility-hidden');
        });

        it('resizeMode = "both"', function () {
            var event = {
                target: document,
                preventDefault: function () { },
                originalEvent: { target: dropDownList.$.resizeBar },
                pageX: dropDownList.$.resizeBar.offsetLeft + 20,
                pageY: dropDownList.$.resizeBar.offsetTop + 5,
                clientX: dropDownList.$.resizeBar.offsetLeft + 20,
                clientY: dropDownList.$.resizeBar.offsetTop + 5
            },
            popupWidth = dropDownList.$.dropDownContainer.offsetWidth,
            popupHeight = dropDownList.$.dropDownContainer.offsetHeight;

            //Resizing from the left side of the resize bar
            dropDownList.dropDownPosition = 'top';
            dropDownList.open();
            dropDownList.resizeMode = 'both';
            dropDownList._documentDownHandler(event);

            expect(dropDownList._resizeDetails).not.toBeUndefined();

            event.pageX += 10; 
            event.pageY += 10;

            dropDownList._dragStartHandler(event);
            dropDownList._documentMoveHandler(event);

            expect(dropDownList).toHaveAttr('resizing', '');
            expect(dropDownList.$.dropDownContainer.offsetHeight).toBe(popupHeight - 10);
            expect(dropDownList.$.dropDownContainer.offsetWidth).toBe(popupWidth + 10);

            dropDownList._documentUpHandler(event);

            expect(dropDownList).not.toHaveAttr('resizing');
            expect(dropDownList.$.dropDownContainer).not.toHaveClass('smart-visibility-hidden');

            //Resizing From the right corner - allowed
            event.pageX = event.clientX = dropDownList.offsetLeft + dropDownList.$.resizeBar.offsetLeft + dropDownList.$.resizeBar.offsetWidth - 10;

            dropDownList.open();
            dropDownList._documentDownHandler(event);

            expect(dropDownList._resizeDetails).not.toBeUndefined();

            event.pageX += 10;
            event.pageY += 10;

            dropDownList._documentMoveHandler(event);

            expect(dropDownList).toHaveAttr('resizing', '');
            expect(dropDownList.$.dropDownContainer.offsetHeight).toBe(popupHeight - 20);
            expect(dropDownList.$.dropDownContainer.offsetWidth).toBe(popupWidth + 20);

            dropDownList._documentUpHandler(event);

            expect(dropDownList).not.toHaveAttr('resizing');
            expect(dropDownList.$.dropDownContainer).not.toHaveClass('smart-visibility-hidden');
        });
    });
});
