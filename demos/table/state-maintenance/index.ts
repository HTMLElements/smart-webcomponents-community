/// <reference path="../../../source/typescript/smart.elements.d.ts" />

import { Table, Button } from "../../../source/typescript/smart.elements"

declare global {
    export interface Window {
        generateData: (rowscount: number) => any[];
    }
}

window.Smart('#table', class {
    get properties() {
        return {
            dataSource: new window.Smart.DataAdapter({
                dataSource: window.generateData(15),
                dataFields: [
                    'id: number',
                    'productName: string',
                    'quantity: number',
                    'price: number',
                    'date: date'
                ]
            }),
            columnReorder: true,
            selection: true,
            sortMode: 'many',
            columns: [
                { label: 'id', dataField: 'id', dataType: 'number' },
                { label: 'Product Name', dataField: 'productName', dataType: 'string' },
                {
                    label: 'Quantity', dataField: 'quantity', dataType: 'number', formatFunction(settings: { value: any, row: string | number, column: string, cell: HTMLTableCellElement, template?: any }) {
                        settings.template = settings.value + ' cups';
                    }
                },
                { label: 'Price', dataField: 'price', dataType: 'number' },
                { label: 'Date Purchased', dataField: 'date', dataType: 'date' }
            ]
        };
    }
});

window.onload = function () {
    const table = <Table>document.getElementById('table'),
        loadState = <Button>document.getElementById('loadState'),
        getState = <Button>document.getElementById('getState'),
        saveState = <Button>document.getElementById('saveState');

    if (window.localStorage.getItem('smartTabletable')) {
        loadState.disabled = false;
    }

    getState.addEventListener('click', function () {
        const state = table.getState();

        alert(JSON.stringify(state));
    });

    loadState.addEventListener('click', function () {
        table.loadState();
    });

    saveState.addEventListener('click', function () {
        table.saveState();
        loadState.disabled = false;
    });
};