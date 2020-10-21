/// <reference path="../../../source/typescript/smart.elements.d.ts" />
window.Smart('#table', class {
    get properties() {
        return {
            dataSource: new window.Smart.DataAdapter({
                dataSource: window.generateOrdersData(50),
                id: 'id',
                keyDataField: 'id',
                parentDataField: 'parentid',
                dataFields: [
                    'id: string',
                    'name: string',
                    'customer: string',
                    'price: number',
                    'date: date'
                ]
            }),
            filtering: true,
            keyboardNavigation: true,
            columns: [
                { label: 'Order Name', dataField: "name" },
                { label: 'Customer', dataField: "customer" },
                {
                    label: 'Price', dataField: "price", dataType: 'number',
                    formatFunction(settings) {
                        settings.template = '$' + settings.value.toFixed(2);
                    }
                },
                { label: 'Order Date', dataField: "date", dataType: 'date' }
            ]
        };
    }
});
