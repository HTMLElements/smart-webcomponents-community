/// <reference path="../../../source/typescript/smart.elements.d.ts" />

import {Framework} from "../../../source/typescript/smart.elements"

window.onload = function () {
    const app = new Smart.App(
		{
		    data: {
		        firstName: 'test',
		        items: ['item2']
		    }
		}
	)

    // app.data.items = ['item1'];
}