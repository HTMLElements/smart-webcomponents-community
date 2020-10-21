/// <reference path="../../../source/typescript/smart.elements.d.ts" />

import { Table, DropDownList } from "../../../source/typescript/smart.elements"

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
                    dataSource: window.generateData(10),
                    dataFields:
                        [
                            'id: number',
                            'productName: string',
                            'quantity: number',
                            'price: number',
                            'date: date'
                        ]
                }),
            editing: true,
            editMode: 'cell',
            columns: [
                { label: 'id', dataField: 'id', dataType: 'number' },
                {
                    label: 'Product Name', dataField: 'productName', dataType: 'string', editor: {
                        template: '<smart-drop-down-list></smart-drop-down-list>',
                        onInit(row: string | number, column: string, editor: DropDownList, value: any) {
                            editor.dataSource =
                                ["Black Tea", "Green Tea", "Caffe Espresso", "Doubleshot Espresso", "Caffe Latte", "White Chocolate Mocha", "Caramel Latte", "Caffe Americano", "Cappuccino", "Espresso Truffle", "Espresso con Panna", "Peppermint Mocha Twist"];
                            editor.dropDownAppendTo = 'body';
                        },
                        onRender(row: string | number, column: string, editor: DropDownList, value: any) {
                            editor.selectedValues = [value];
                        },
                        getValue(editor: DropDownList) {
                            return editor.selectedValues![0];
                        }
                    }
                },
                { label: 'Quantity', dataField: 'quantity', dataType: 'number' },
                { label: 'Price', dataField: 'price', dataType: 'number' },
                { label: 'Date Purchased', dataField: 'date', dataType: 'date' }
            ]
        };
    }
});
