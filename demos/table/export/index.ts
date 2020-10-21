/// <reference path="../../../source/typescript/smart.elements.d.ts" />

import { Button, Table } from "../../../source/typescript/smart.elements"

declare global {
    export interface Window {
        generateData: (rowscount: number) => any[];
    }
}

window.Smart('#table', class {
    get properties() {
        return {
            dataSource: new window.Smart.DataAdapter(
                {
                    dataSource: window.generateData(50),
                    dataFields:
                        [
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
    const table = <Table>document.getElementById('table');

    (<Button>document.getElementById('csv')).addEventListener('click', function () {
        table.exportData('csv', 'table');
    });
    (<Button>document.getElementById('html')).addEventListener('click', function () {
        table.exportData('html', 'table');
    });
    (<Button>document.getElementById('json')).addEventListener('click', function () {
        table.exportData('json', 'table');
    });
    (<Button>document.getElementById('pdf')).addEventListener('click', function () {
        table.exportData('pdf', 'table');
    });
    (<Button>document.getElementById('tsv')).addEventListener('click', function () {
        table.exportData('tsv', 'table');
    });
    (<Button>document.getElementById('xlsx')).addEventListener('click', function () {
        table.exportData('xlsx', 'table');
    });
    (<Button>document.getElementById('xml')).addEventListener('click', function () {
        table.exportData('xml', 'table');
    });
};