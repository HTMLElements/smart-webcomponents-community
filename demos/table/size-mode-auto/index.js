/// <reference path="../../../source/typescript/smart.elements.d.ts" />
window.Smart('#table', class {
    get properties() {
        return {
            columnMinWidth: '50px',
            columnSizeMode: 'auto',
            dataSource: new window.Smart.DataAdapter({
                dataSource: window.generateData(50),
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
            selection: true,
            tooltip: true,
            columns: [
                { label: 'id', dataField: 'id', dataType: 'number', width: 50 },
                { label: 'First Name', dataField: 'firstName', dataType: 'string' },
                { label: 'Last Name', dataField: 'lastName', dataType: 'string' },
                { label: 'Product Name', dataField: 'productName', dataType: 'string' },
                { label: 'Quantity', dataField: 'quantity', dataType: 'number' },
                { label: 'Price', dataField: 'price', dataType: 'number' },
                { label: 'Total', dataField: 'total', dataType: 'number' }
            ]
        };
    }
});
