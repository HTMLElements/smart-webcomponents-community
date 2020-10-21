/// <reference path="../../../source/typescript/smart.elements.d.ts" />

import { Button, Table, TableColumn } from "../../../source/typescript/smart.elements"

declare global {
    export interface Window {
        generateData: (rowscount: number) => any[];
    }
}

const allColumns: TableColumn[] = [
    { label: 'id', dataField: 'id', dataType: 'number' },
    { label: 'Reports To', dataField: 'reportsto', dataType: 'number' },
    { label: 'First Name', dataField: 'firstName', dataType: 'string' },
    { label: 'Last Name', dataField: 'lastName', dataType: 'string' },
    { label: 'Product Name', dataField: 'productName', dataType: 'string' },
    { label: 'Price', dataField: 'price', dataType: 'number' },
    { label: 'Quantity', dataField: 'quantity', dataType: 'number' },
    { label: 'Total', dataField: 'total', dataType: 'number' },
    { label: 'Date', dataField: 'date', dataType: 'date' },
    { label: 'Available', dataField: 'available', dataType: 'boolean' }
];

window.Smart('#table', class {
    get properties() {
        return {
            dataSource: new window.Smart.DataAdapter(
                {
                    dataSource: window.generateData(15),
                    dataFields:
                        [
                            'id: number',
                            'reportsto: number',
                            'firstName: string',
                            'lastName: string',
                            'productName: string',
                            'price: number',
                            'quantity: number',
                            'total: number',
                            'date: date',
                            'available: boolean'
                        ]
                }),
            columns: [
                { label: 'id', dataField: 'id', dataType: 'number' },
                { label: 'Reports To', dataField: 'reportsto', dataType: 'number' },
                { label: 'First Name', dataField: 'firstName', dataType: 'string' },
                { label: 'Last Name', dataField: 'lastName', dataType: 'string' }
            ]
        };
    }
});

window.onload = function () {
    const table = <Table>document.getElementById('table'),
        add = <Button>document.getElementById('add'),
        remove = <Button>document.getElementById('remove'),
        shuffle = <Button>document.getElementById('shuffle');

    add.addEventListener('click', function () {
        for (let i = 0; i < allColumns.length; i++) {
            if (!table.columns!.find(column => column.dataField === allColumns[i].dataField)) {
                table.columns!.push(allColumns[i]);
                break;
            }
        }

        remove.disabled = false;

        if (table.columns!.length === allColumns.length) {
            add.disabled = true;
        }
    });

    remove.addEventListener('click', function () {
        table.columns!.pop();
        add.disabled = false;

        if (table.columns!.length === 0) {
            remove.disabled = true;
        }
    });

    shuffle.addEventListener('click', function () {
        table.columns = table.columns!.sort(function () {
            return 0.5 - Math.random();
        });
    });
};