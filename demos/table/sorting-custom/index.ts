/// <reference path="../../../source/typescript/smart.elements.d.ts" />

import { Table } from "../../../source/typescript/smart.elements"

const chemicalElementsData: {
    number: number;
    name: string;
    symbol: string;
    weight: number;
    abundance: number;
}[] = [
        { number: 1, name: 'Hydrogen', symbol: 'H', weight: 1.008, abundance: 1400 },
        { number: 2, name: 'Helium', symbol: 'He', weight: 4.002602, abundance: 0.008 },
        { number: 3, name: 'Lithium', symbol: 'Li', weight: 6.94, abundance: 20 },
        { number: 4, name: 'Beryllium', symbol: 'Be', weight: 9.0121831, abundance: 2.8 },
        { number: 5, name: 'Boron', symbol: 'B', weight: 10.81, abundance: 10 },
        { number: 6, name: 'Carbon', symbol: 'C', weight: 12.011, abundance: 200 },
        { number: 7, name: 'Nitrogen', symbol: 'N', weight: 14.007, abundance: 19 },
        { number: 8, name: 'Oxygen', symbol: 'O', weight: 15.999, abundance: 461000 },
        { number: 9, name: 'Fluorine', symbol: 'F', weight: 18.998403163, abundance: 585 },
        { number: 10, name: 'Neon', symbol: 'Ne', weight: 20.1797, abundance: 0.005 }
    ],
    dictionary: any = {
        'Hydrogen': 'Wasserstoff',
        'Helium': 'Helium',
        'Lithium': 'Lithium',
        'Beryllium': 'Beryllium',
        'Boron': 'Bor',
        'Carbon': 'Kohlenstoff',
        'Nitrogen': 'Stickstoff',
        'Oxygen': 'Sauerstoff',
        'Fluorine': 'Fluor',
        'Neon': 'Neon'
    };

window.Smart('#table', class {
    get properties() {
        return {
            dataSource: new window.Smart.DataAdapter({
                dataSource: chemicalElementsData,
                dataFields: [
                    'number: number',
                    'name: string',
                    'symbol: string',
                    'weight: number',
                    'abundance: number'
                ]
            }),
            sortMode: 'one',
            sort(dataSource: any, sortColumns: string[], directions: string[], defaultCompareFunctions: { (firstRecord: any, secondRecord: any): number }[]) {
                dataSource.sort(function (a: any, b: any) {
                    for (let i = 0; i < sortColumns.length; i++) {
                        const direction = directions[i],
                            directionCoefficient = direction === undefined || direction === 'asc' || direction === 'ascending' ? 1 : -1;
                        let result: number;

                        if (sortColumns[i] === 'name') {
                            const localizedA = dictionary[a.name],
                                localizedB = dictionary[b.name];

                            result = new Intl.Collator().compare(localizedA, localizedB);
                        }
                        else {
                            result = defaultCompareFunctions[i](a[sortColumns[i]], b[sortColumns[i]]);
                        }

                        if (result === 0) {
                            if (sortColumns[i + 1]) {
                                continue;
                            }
                            else {
                                // makes sorting stable
                                return (a.$.index - b.$.index) * directionCoefficient;
                            }
                        }

                        return result * directionCoefficient;
                    }
                });
            },
            columns: [
                { label: 'Ordnungszahl', dataField: 'number', dataType: 'number' },
                {
                    label: 'Name', dataField: 'name', dataType: 'string', formatFunction(settings: { value: any, row: string | number, column: string, cell: HTMLTableCellElement, template?: any }) {
                        settings.template = dictionary[settings.value];
                    }
                },
                { label: 'Symbol', dataField: 'symbol', dataType: 'string' },
                { label: 'Atommasse', dataField: 'weight', dataType: 'number' },
                {
                    label: 'Fülle', dataField: 'abundance', dataType: 'number', formatFunction(settings: { value: any, row: string | number, column: string, cell: HTMLTableCellElement, template?: any }) {
                        settings.template = settings.value + ' mg/kg';
                    }
                }
            ]
        };
    }
});

window.onload = function () {
    (<Table>document.getElementById('table')).sortBy('name', 'desc');
};
