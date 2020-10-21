/// <reference path="../../../source/typescript/smart.elements.d.ts" />

import { Button, Table } from "../../../source/typescript/smart.elements"

declare global {
    export interface Window {
        getCountriesData: () => any[];
    }
}

window.Smart('#table', class {
    get properties() {
        return {
            dataSource: new window.Smart.DataAdapter({
                dataSource: window.getCountriesData(),
                dataFields: [
                    'ID: number',
                    'Country: string',
                    'Area: number',
                    'Population_Urban: number',
                    'Population_Rural: number',
                    'Population_Total: number',
                    'GDP_Agriculture: number',
                    'GDP_Industry: number',
                    'GDP_Services: number',
                    'GDP_Total: number'
                ]
            }),
            columns: [
                'Country',
                'Area',
                'Population_Rural',
                'Population_Total',
                'GDP_Total'
            ]
        };
    }
});
window.onload = function () {
    const table = <Table>document.getElementById('table');
    let counter: number = 0;
    (<Button>document.getElementById('add')).onclick = function () {
        counter++;
        table.dataSource.add({ Country: "Bulgaria" + counter, Area: "100000", Population_Rural: "8000000", Population_Total: "8100000", GDP_TOTAL: "12321321" });
    };
    (<Button>document.getElementById('remove')).onclick = function () {
        if (table.dataSource.length > 0) {
            table.dataSource.removeAt(table.dataSource.length - 1);
        }
    };
    (<Button>document.getElementById('update')).onclick = function () {
        if (table.dataSource.length > 0) {
            counter++;
            table.dataSource.update(0, { Country: "Bulgaria" + counter, Area: "100000", Population_Rural: "8000000", Population_Total: "8100000", GDP_TOTAL: "12321321321" });
        }
    };
};
