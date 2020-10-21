/// <reference path="../../../source/typescript/smart.elements.d.ts" />

import {Framework} from "../../../source/typescript/smart.elements"

window.onload = function() {
	const app = new smartApp(
		{
			data: {
				details: {
					subject: "About Transaction",
					message: "Hey, Peter. Take a look at the items, I sent you earlier."
				}						
			}
		}
	)				
}