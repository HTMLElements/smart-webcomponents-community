/// <reference path="../../../source/typescript/smart.elements.d.ts" />
const data = [
    { firstName: 'Jorge', lastName: 'Payne', age: 18, gender: 'male' },
    { firstName: 'Amanda', lastName: 'Burton', age: 23, gender: 'female' },
    { firstName: 'Dolores', lastName: 'Moore', age: 45, gender: 'female' },
    { firstName: 'Tanya', lastName: 'Stone', age: 76, gender: 'female' },
    { firstName: 'Byron', lastName: 'Ramirez', age: 32, gender: 'male' },
    { firstName: 'Felix', lastName: 'Romero', age: 12, gender: 'male' },
    { firstName: 'Brianna', lastName: 'Ford', age: 50, gender: 'female' },
    { firstName: 'Priscilla', lastName: 'Williams', age: 18, gender: 'female' },
    { firstName: 'Elaine', lastName: 'Medina', age: 33, gender: 'female' },
    { firstName: 'Addison', lastName: 'Armstrong', age: 33, gender: 'nonbinary' },
    { firstName: 'Pedro', lastName: 'Curtis', age: 23, gender: 'male' },
];
window.Smart('#table', class {
    get properties() {
        return {
            dataSource: new window.Smart.DataAdapter({
                dataSource: data,
                dataFields: [
                    'firstName: string',
                    'lastName: string',
                    'age: number',
                    'gender: string'
                ]
            }),
            filtering: true,
            filterTemplate: 'customFilterTemplate',
            columns: [
                { label: 'First Name', dataField: 'firstName', dataType: 'string' },
                { label: 'Last Name', dataField: 'lastName', dataType: 'string' },
                { label: 'Age', dataField: 'age', dataType: 'number' },
                { label: 'Gender', dataField: 'gender', dataType: 'string' }
            ]
        };
    }
});
window.onload = function () {
    const table = document.getElementById('table');
    document.getElementById('filterCheckboxesContainer').addEventListener('change', function () {
        const maleChecked = document.getElementById('male').checked, femaleChecked = document.getElementById('female').checked;
        if (maleChecked && femaleChecked) {
            table.clearFilters();
            return;
        }
        const filterGroup = new window.Smart.Utilities.FilterGroup();
        if (!maleChecked) {
            const filterObject1 = filterGroup.createFilter('string', 'male', 'NOT_EQUAL');
            filterGroup.addFilter('and', filterObject1);
        }
        if (!femaleChecked) {
            const filterObject2 = filterGroup.createFilter('string', 'female', 'NOT_EQUAL');
            filterGroup.addFilter('and', filterObject2);
        }
        table.addFilter('gender', filterGroup);
    });
};
