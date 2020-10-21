/// <reference path="../../../source/typescript/smart.elements.d.ts" />
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
                    label: 'Quantity', dataField: 'quantity', dataType: 'number', formatFunction(settings) {
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
    const table = document.getElementById('table'), loadState = document.getElementById('loadState'), getState = document.getElementById('getState'), saveState = document.getElementById('saveState');
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
