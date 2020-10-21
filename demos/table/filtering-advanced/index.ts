/// <reference path="../../../source/typescript/smart.elements.d.ts" />

import { Table, Menu, MenuItem, Button, Input } from "../../../source/typescript/smart.elements"

const emails: any[] = [
    { name: 'Walter Stewart', email: 'walter.stewart@example.com', permission: 'Owner' },
    { name: 'Manuel Smith', email: 'manuel.smith@example.com', permission: 'Owner' },
    { name: 'Annette Gray', email: 'annette.gray@example.com', permission: 'Restricted' },
    { name: 'Candice Murphy', email: 'candice.murphy@example.com', permission: 'Owner' },
    { name: 'Theresa Reynolds', email: 'theresa.reynolds@example.com', permission: 'Restricted' },
    { name: 'Wyatt Silva', email: 'wyatt.silva@example.com', permission: 'Restricted' },
    { name: 'April Hayes', email: 'april.hayes@example.com', permission: 'Owner' },
    { name: 'Brayden Henry', email: 'brayden.henry@example.com', permission: 'Restricted' },
    { name: 'Clayton Rice', email: 'clayton.rice@example.com', permission: 'Restricted' },
    { name: 'Alberto Day', email: 'alberto.day@example.com', permission: 'Restricted' },
    { name: 'Jeremy Marshall', email: 'jeremy.marshall@example.com', permission: 'Owner' },
    { name: 'Ivan Kennedy', email: 'ivan.kennedy@example.com', permission: 'Restricted' },
    { name: 'Sofia Grant', email: 'sofia.grant@example.com', permission: 'Restricted' },
    { name: 'Felicia Moore', email: 'felicia.moore@example.com', permission: 'Restricted' },
    { name: 'Carolyn White', email: 'carolyn.white@example.com', permission: 'Restricted' },
    { name: 'Leo Austin', email: 'leo.austin@example.com', permission: 'Restricted' },
    { name: 'Derrick Larson', email: 'derrick.larson@example.com', permission: 'Restricted' },
    { name: 'Carla James', email: 'carla.james@example.com', permission: 'Restricted' },
    { name: 'Vickie Cruz', email: 'vickie.cruz@example.com', permission: 'Owner' },
    { name: 'Brianna Torres', email: 'brianna.torres@example.com', permission: 'Restricted' },
    { name: 'Kristen Cruz', email: 'kristen.cruz@example.com', permission: 'Restricted' },
    { name: 'Terrance Holt', email: 'terrance.holt@example.com', permission: 'Restricted' },
    { name: 'Marlene Reed', email: 'marlene.reed@example.com', permission: 'Restricted' },
    { name: 'Beatrice Nichols', email: 'beatrice.nichols@example.com', permission: 'Restricted' },
    { name: 'Scarlett Walker', email: 'scarlett.walker@example.com', permission: 'Restricted' },
    { name: 'Scott Oliver', email: 'scott.oliver@example.com', permission: 'Restricted' },
    { name: 'Joe Castillo', email: 'joe.castillo@example.com', permission: 'Restricted' },
    { name: 'Florence Sanders', email: 'florence.sanders@example.com', permission: 'Owner' },
];

window.Smart('#table', class {
    get properties() {
        return {
            dataSource: new window.Smart.DataAdapter(
                {
                    dataSource: emails,
                    dataFields:
                        [
                            'name: string',
                            'email: string',
                            'permission: string'
                        ]
                }),
            paging: true,
            sortMode: 'one',
            columns: [
                {
                    label: 'Name', dataField: 'name', dataType: 'string', width: 275, formatFunction(settings: { value: any, row: number | string, column: string, cell: HTMLTableCellElement, template?: string }) {
                        if (settings.value === 'Candice Murphy') {
                            settings.template = `<strong>${settings.value} (you)</strong>`;
                        }
                    }
                },
                { label: 'Email', dataField: 'email', dataType: 'string', width: 275 },
                { label: 'Permission', dataField: 'permission', dataType: 'string', width: 200 },
                {
                    label: '', dataField: 'action', dataType: 'string', allowSort: false, formatFunction(settings: { value: any, row: number | string, column: string, cell: HTMLTableCellElement, template?: string }) {
                        settings.template = `<smart-button row-id="${settings.row}" class="remove-button"><span class="material-icons">more_vert</span></smart-button>`;
                    }
                }
            ]
        };
    }
});

const conditions: { value: string, label: string }[] = [
    { value: 'CONTAINS', label: 'Contains' },
    { value: 'DOES_NOT_CONTAIN', label: 'Does not contain' },
    { value: 'STARTS_WITH', label: 'Starts with' },
    { value: 'ENDS_WITH', label: 'Ends with' },
    { value: 'EQUAL', label: 'Equals' }
],
    filterRows: any = {};
let appliedFilters: any = {};

function createCustomFilterRow(columnLabel: string) {
    const row = document.createElement('div'),
        conditionInput = document.createElement('smart-input'),
        valueInput = document.createElement('smart-input'),
        confirmButton = document.createElement('smart-button');

    conditionInput.dataSource = conditions;
    conditionInput.dropDownButtonPosition = 'right';
    conditionInput.placeholder = 'Condition';
    conditionInput.classList.add('underlined');
    valueInput.placeholder = 'Filter by ' + columnLabel;
    valueInput.classList.add('underlined');
    confirmButton.innerHTML = 'Done';
    confirmButton.classList.add('primary');
    confirmButton.classList.add('confirm');
    confirmButton.dataField = columnLabel;

    row.className = 'filter-row filter-row-' + columnLabel;
    row.appendChild(conditionInput);
    row.appendChild(valueInput);
    row.appendChild(confirmButton);
    document.getElementById('filterRowsContainer')!.appendChild(row);

    filterRows[columnLabel] = row;
}

window.onload = function () {
    const table = <Table>document.getElementById('table'),
        numberOfAppliedFilters = document.getElementById('numberOfAppliedFilters')!,
        filterIcon = document.getElementById('filterIcon')!,
        filterRowsContainer = document.getElementById('filterRowsContainer')!,
        filterMenu = <Menu>document.getElementById('filterMenu'),
        removeMenu = <Menu>document.getElementById('removeMenu');
    let rowToRemove: any;

    table.sortBy('name', 'asc');

    table.addEventListener('click', function (event) {
        const removeButton = (event.target as HTMLElement).closest('.remove-button');

        if (removeButton) {
            const rect = removeButton.getBoundingClientRect();

            rowToRemove = table.rowById[removeButton.getAttribute('row-id')!];

            if (rowToRemove.data.permission === 'Restricted') {
                removeMenu.items[0].label = 'Allow access';
                removeMenu.items[0].value = 'Owner';
            }
            else {
                removeMenu.items[0].label = 'Remove access';
                removeMenu.items[0].value = 'Restricted';
            }

            removeMenu.open(rect.right - removeMenu.offsetWidth, rect.bottom);
        }
    });

    removeMenu.addEventListener('itemClick', function (event) {
        rowToRemove.data.permission = (event as CustomEvent).detail.value;
    });

    filterIcon.addEventListener('pointerup', function (event) {
        event.stopPropagation();
    });

    filterIcon.addEventListener('click', function () {
        const rect = filterIcon.getBoundingClientRect();

        if (filterMenu.opened) {
            filterMenu.close();
        }
        else {
            filterMenu.open(rect.right - filterMenu.offsetWidth, rect.bottom);
        }

        removeMenu.close();
    });

    (<MenuItem>(document.getElementById('clearFilters'))).addEventListener('click', function (event) {
        if ((event.target as HTMLElement).closest('smart-button')) {
            table.clearFilters();

            for (let index in filterMenu.items) {
                const menuItem: MenuItem = filterMenu.items[index];

                menuItem.checked = false;
                menuItem.classList.remove('filtered');
            }

            Array.from(document.querySelectorAll('.filter-row')).forEach(row => row.remove());
            numberOfAppliedFilters.classList.add('smart-visibility-hidden');
            numberOfAppliedFilters.innerHTML = '0';
            appliedFilters = {};
            filterMenu.close();
        }
    });

    filterMenu.addEventListener('itemCheckChange', function (event) {
        const filterRow = filterRows[(event as CustomEvent).detail.value];

        if ((event as CustomEvent).detail.checked) {
            if (filterRow) {
                filterRowsContainer.appendChild(filterRow);
            }
            else {
                createCustomFilterRow((event as CustomEvent).detail.value);
            }
        }
        else {
            filterRow.remove();
        }
    });

    filterRowsContainer.addEventListener('click', function (event) {
        const confirmButton = <Button>((event.target as HTMLElement).closest('.confirm'));

        if (confirmButton) {
            const filterRow = confirmButton.parentElement!,
                conditionInput = <Input>filterRow.firstElementChild,
                valueInput = <Input>filterRow.children[1],
                dataField = confirmButton.dataField,
                condition = conditionInput.$.input.dataValue,
                value = valueInput.value,
                menuItem = <MenuItem>filterMenu.querySelector(`smart-menu-item[value="${dataField}"]`);

            if (!condition || !value) {
                delete appliedFilters[dataField];
                table.removeFilter(dataField);
                menuItem.classList.remove('filtered');
            }
            else {
                const filterGroup = new window.Smart.Utilities.FilterGroup(),
                    filterObject = filterGroup.createFilter('string', value, condition);

                filterGroup.addFilter('or', filterObject);
                table.addFilter(dataField, filterGroup);
                appliedFilters[dataField] = filterGroup;
                menuItem.classList.add('filtered');
            }

            const numberOfFilters = Object.keys(appliedFilters).length;

            numberOfAppliedFilters.classList.toggle('smart-visibility-hidden', numberOfFilters === 0);
            numberOfAppliedFilters.innerHTML = numberOfFilters.toString();

            menuItem.checked = false;
            filterRow.remove();
        }
    });
};
