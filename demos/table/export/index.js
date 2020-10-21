/// <reference path="../../../source/typescript/smart.elements.d.ts" />
window.Smart('#table', class {
    get properties() {
        return {
            dataSource: new window.Smart.DataAdapter({
                dataSource: window.generateData(50),
                dataFields: [
                    'id: number',
                    'productName: string',
                    'quantity: number',
                    'price: number',
                    'date: date'
                ]
            }),
            columns: [
                { label: 'id', dataField: 'id', dataType: 'number' },
                { label: 'Product Name', dataField: 'productName', dataType: 'string' },
                { label: 'Quantity', dataField: 'quantity', dataType: 'number' },
                { label: 'Price', dataField: 'price', dataType: 'number' },
                { label: 'Date Purchased', dataField: 'date', dataType: 'date' }
            ]
        };
    }
});
window.onload = function () {
    const table = document.getElementById('table');
    document.getElementById('csv').addEventListener('click', function () {
        table.exportData('csv', 'table');
    });
    document.getElementById('html').addEventListener('click', function () {
        table.exportData('html', 'table');
    });
    document.getElementById('json').addEventListener('click', function () {
        table.exportData('json', 'table');
    });
    document.getElementById('pdf').addEventListener('click', function () {
        table.exportData('pdf', 'table');
    });
    document.getElementById('tsv').addEventListener('click', function () {
        table.exportData('tsv', 'table');
    });
    document.getElementById('xlsx').addEventListener('click', function () {
        table.exportData('xlsx', 'table');
    });
    document.getElementById('xml').addEventListener('click', function () {
        table.exportData('xml', 'table');
    });
};
