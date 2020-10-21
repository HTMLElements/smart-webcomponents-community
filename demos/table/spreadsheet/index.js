/// <reference path="../../../source/typescript/smart.elements.d.ts" />
const productNames = [
    "Black Tea", "Green Tea", "Caffe Espresso", "Doubleshot Espresso", "Caffe Latte", "White Chocolate Mocha", "Caramel Latte", "Caffe Americano", "Cappuccino", "Espresso Truffle", "Espresso con Panna", "Peppermint Mocha Twist"
], priceValues = [
    "2.25", "1.5", "3.0", "3.3", "4.5", "3.6", "3.8", "2.5", "5.0", "1.75", "3.25", "4.0"
], data = [], columns = [{
        label: '', dataField: 'rowHeader', width: 50, freeze: 'near', formatFunction(settings) {
            settings.cell.removeAttribute('data-field');
            settings.cell.setAttribute('row-header', '');
        }
    }];
for (let i = 65; i < 91; i++) {
    const letter = String.fromCharCode(i);
    columns.push({
        label: letter, dataField: letter, width: i !== 65 ? 100 : 200, formatFunction(settings) {
            if (settings.row === 0) {
                settings.cell.classList.add('header-cell');
            }
            else if (settings.column === 'B') {
                settings.cell.classList.add('numeric-cell');
                if (!isNaN(settings.value) && settings.value !== '') {
                    settings.template = '$' + settings.value;
                }
            }
        }
    });
}
for (let i = 0; i < 50; i++) {
    const dataPoint = { rowHeader: i + 1 };
    if (i === 0) {
        dataPoint['A'] = 'Product Name';
        dataPoint['B'] = 'Price';
    }
    else if (i < 20) {
        const productIndex = Math.floor(Math.random() * productNames.length);
        dataPoint['A'] = productNames[productIndex];
        dataPoint['B'] = parseFloat(priceValues[productIndex]) * (1 + i % 2);
    }
    for (let j = 67; j < 91; j++) {
        dataPoint[String.fromCharCode(j)] = '';
    }
    data.push(dataPoint);
}
window.Smart('#table', class {
    get properties() {
        return {
            dataSource: new window.Smart.DataAdapter({
                dataSource: data,
            }),
            editing: true,
            freezeHeader: true,
            keyboardNavigation: true,
            columns: columns
        };
    }
});
