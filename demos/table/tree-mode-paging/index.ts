/// <reference path="../../../source/typescript/smart.elements.d.ts" />

import { Table } from "../../../source/typescript/smart.elements"

declare global {
    export interface Window {
        generateOrdersData: (rowscount: number) => any[];
    }
}

window.Smart('#table', class {
    get properties() {
        return {
            dataSource: new window.Smart.DataAdapter(
                {
                    dataSource: window.generateOrdersData(50),
                    id: 'id',
                    keyDataField: 'id',
                    parentDataField: 'parentid',
                    dataFields:
                        [
                            'id: string',
                            'name: string',
                            'customer: string',
                            'price: number',
                            'date: date'
                        ]
                }),
            keyboardNavigation: true,
            paging: true,
            columns: [
                { label: 'Order Name', dataField: "name" },
                { label: 'Customer', dataField: "customer" },
                {
                    label: 'Price', dataField: "price", dataType: 'number',
                    formatFunction(settings: { value: any, row: number | string, column: string, cell: HTMLTableCellElement, template?: string }) {
                        settings.template = '$' + settings.value.toFixed(2);
                    }
                },
                { label: 'Order Date', dataField: "date", dataType: 'date' }
            ]
        };
    }
});
