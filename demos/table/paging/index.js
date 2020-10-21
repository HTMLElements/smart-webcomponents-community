/// <reference path="../../../source/typescript/smart.elements.d.ts" />
window.Smart('#table', class {
    get properties() {
        return {
            dataSource: new window.Smart.DataAdapter({
                dataSource: window.generateData(100),
                dataFields: [
                    'id: number',
                    'firstName: string',
                    'lastName: string',
                    'productName: string',
                    'quantity: number',
                    'price: number',
                    'total: number'
                ]
            }),
            keyboardNavigation: true,
            paging: true,
            columns: [
                { label: 'id', dataField: 'id', dataType: 'number' },
                { label: 'First Name', dataField: 'firstName', dataType: 'string' },
                { label: 'Last Name', dataField: 'lastName', dataType: 'string' },
                { label: 'Product Name', dataField: 'productName', dataType: 'string' },
                { label: 'Quantity', dataField: 'quantity', dataType: 'number' },
                {
                    label: 'Price', dataField: 'price', dataType: 'number',
                    formatFunction(settings) {
                        settings.template = '$' + settings.value;
                    }
                },
                { label: 'Total', dataField: 'total', dataType: 'number' }
            ]
        };
    }
});
