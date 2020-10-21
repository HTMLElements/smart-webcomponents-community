/// <reference path="../../../source/typescript/smart.elements.d.ts" />

import { Table } from "../../../source/typescript/smart.elements"

declare global {
    export interface Window {
        generateData: (rowscount: number) => any[];
    }
}

const data: any[] = window.generateData(15);

window.Smart('#table', class {
    get properties() {
        return {
            dataSource: new window.Smart.DataAdapter(
                {
                    dataSource: data,
                    dataFields:
                        [
                            'id: number',
                            'firstName: string',
                            'lastName: string',
                            'productName: string',
                            'quantity: number'
                        ]
                }),
            footerRow: 'customFooterRowTemplate',
            freezeFooter: true,
            freezeHeader: true,
            headerRow: 'customHeaderRowTemplate',
            columns: [
                { label: 'id', dataField: 'id', dataType: 'number' },
                { label: 'First Name', dataField: 'firstName', dataType: 'string' },
                { label: 'Last Name', dataField: 'lastName', dataType: 'string' },
                { label: 'Product Name', dataField: 'productName', dataType: 'string' },
                { label: 'Quantity', dataField: 'quantity', dataType: 'number' }
            ]
        };
    }
});

window.onload = function () {
    let totalQuantity: number = 0;

    data.forEach(dataPoint => totalQuantity += dataPoint.quantity);

    document.getElementById('totalQuantity')!.innerHTML = totalQuantity.toString();
};  