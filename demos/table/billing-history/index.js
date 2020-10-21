/// <reference path="../../../source/typescript/smart.elements.d.ts" />
const billingData = [];
for (let i = 0; i < 15; i++) {
    billingData.push({
        date: new Date(2019, 15 - i, 19),
        amount: i > 5 ? 11.99 : 13.99,
        description: 'Netflix subscription',
        status: i === 0 ? 'Failed' : 'Successful',
        actions: ''
    });
}
window.Smart('#table', class {
    get properties() {
        return {
            dataSource: new window.Smart.DataAdapter({
                dataSource: billingData,
                dataFields: [
                    'date: date',
                    'amount: number',
                    'description: string',
                    'status: string'
                ]
            }),
            freezeHeader: true,
            selection: true,
            columns: [
                {
                    label: 'Date', dataField: 'date', dataType: 'date', formatFunction(settings) {
                        const formattedValue = new window.Smart.Utilities.DateTime(settings.value).toString('MMM dd, yyyy');
                        if (billingData[settings.row].status === 'Failed') {
                            settings.template = `<div class="icons-container"><span class="material-icons status" style="color: #a80a0a;">cancel</span><span>${formattedValue}</span><span id="errorInfo" class="material-icons info">info</span></div>`;
                        }
                        else {
                            settings.template = `<div class="icons-container"><span class="material-icons status" style="color: #61a617;">check_circle</span><span>${formattedValue}</span></div>`;
                        }
                    }
                },
                {
                    label: '<div class="icons-container">Amount<span id="amountInfo" class="material-icons info">info</span></div>', dataField: 'amount', dataType: 'number', formatFunction(settings) {
                        settings.template = '$' + settings.value;
                    }
                },
                { label: 'Description', dataField: 'description', dataType: 'string' },
                {
                    label: 'Status', dataField: 'status', dataType: 'number', formatFunction(settings) {
                        if (settings.value === 'Failed') {
                            settings.template = `<div class="icons-container"><span class="material-icons status">credit_card</span><strong style="color: #a80a0a;">${settings.value}</strong></div>`;
                        }
                        else {
                            settings.template = `<div class="icons-container"><span class="material-icons status">credit_card</span><strong style="color: #61a617;">${settings.value}</strong></div>`;
                        }
                    }
                },
                {
                    label: 'Actions', dataField: 'actions', dataType: 'string', formatFunction(settings) {
                        if (billingData[settings.row].status === 'Failed') {
                            settings.template = '';
                        }
                        else {
                            settings.template = '<span class="material-icons">print</span><span class="material-icons">remove_red_eye</span><span class="material-icons">email</span>';
                        }
                    }
                }
            ]
        };
    }
});
window.onload = function () {
    const table = document.getElementById('table'), toast = document.getElementById('actionToast'), amountTooltip = document.getElementById('amountTooltip'), errorTooltip = document.getElementById('errorTooltip'), actionIcons = Array.from(document.querySelectorAll('td[data-field="actions"] .material-icons'));
    table.rows[0].allowSelect = false;
    amountTooltip.selector = 'amountInfo';
    errorTooltip.selector = 'errorInfo';
    actionIcons.forEach(icon => {
        icon.addEventListener('click', function (event) {
            const innerHTML = icon.innerHTML;
            let value;
            if (innerHTML === 'print') {
                value = 'Print';
            }
            else if (innerHTML === 'remove_red_eye') {
                value = 'View Document';
            }
            else {
                value = 'Email Document';
            }
            toast.closeAll();
            toast.value = value;
            toast.open();
            event.stopPropagation();
        });
    });
};
