/// <reference path="../../../source/typescript/smart.elements.d.ts" />

import { Table } from "../../../source/typescript/smart.elements"

window.onload = function () {
    const table = <Table>document.getElementById('table');

    table.select(1);
    table.select(2);
    table.select(5);
}