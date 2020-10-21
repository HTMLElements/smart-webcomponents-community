/// <reference path="../../../source/typescript/smart.elements.d.ts" />

import {Tree, TreeItem} from "../../../source/typescript/smart.elements"

window.onload = function () {
    const treeDataSource: any[] = [{
        label: 'Cats',
        selected: true,
        items: [
            {
                label: 'Tiger',
                selected: true
            },
            {
                label: 'Lion'
            },
            {
                label: 'Jaguar'
            },
            {
                label: 'Leopard'
            },
            {
                label: 'Serval'
            },
            {
                label: 'Domestic cat'
            }
        ]
    },
        {
            label: 'Dogs',
         //   expanded: true,
            items: [
                {
                    label: 'Gray wolf'
                },
                {
                    label: 'Ethiopian wolf',
                    selected: true
                },
                {
                    label: 'Arctic fox',
                    selected: true
                },
                {
                    label: 'Dingo'
                },
                {
                    label: 'Domestic dog',
                    selected: true
                }
            ]
        }
    ];

    (document.getElementById('tree') as Tree).dataSource = treeDataSource;
}