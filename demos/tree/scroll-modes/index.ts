/// <reference path="../../../source/typescript/smart.elements.d.ts" />

import {Tree, Overflow} from "../../../source/typescript/smart.elements"

window.onload = function () {
    const tree1 = <Tree>document.getElementById('tree1'),
        tree2 = <Tree>document.getElementById('tree2');

    document.getElementById('auto')!.addEventListener('change', function () {
        tree1.overflow = 'auto';
        tree2.overflow = 'auto';
    });

    document.getElementById('hidden')!.addEventListener('change', function () {
        tree1.overflow = 'hidden';
        tree2.overflow = 'hidden';
    });

    document.getElementById('scroll')!.addEventListener('change', function () {
        tree1.overflow = 'scroll';
        tree2.overflow = 'scroll';
    });
}