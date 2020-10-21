/// <reference path="../../../source/typescript/smart.elements.d.ts" />

import { Menu } from "../../../source/typescript/smart.elements"

window.onload = function () {
    (<Menu>document.getElementById('menu3')).dataSource = [{
        checkable: true,
        checkMode: 'radioButton, none',
        items: [
            {
                label: 'Line',
                value: 'line',
                checked: true
            },
            {
                label: 'Bar',
                value: 'bar'
            },
            {
                label: 'Point',
                value: 'point'
            },
            {
                label: 'Area',
                value: 'area'
            },
            {
                label: 'Hide',
                value: 'hide',
                separator: true
            },
            {
                label: 'Sort',
                checkable: true,
                checkMode: 'radioButton',
                items: [
                    {
                        label: 'Descending',
                        value: 'descending'
                    },
                    {
                        label: 'None',
                        value: 'none',
                        checked: true
                    },
                    {
                        label: 'Ascending',
                        value: 'ascending'
                    }
                ]
            }
        ]
    }];
};