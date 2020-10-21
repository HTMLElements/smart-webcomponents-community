/// <reference path="../../../source/typescript/smart.elements.d.ts" />

import {Framework} from "../../../source/typescript/smart.elements"

window.onload = function() {
	const app = new smartApp(
		{
			data: {
				message: "Hello World",
				buttonText: "Submit",
				submit: function(event) {
					alert("Submitting: " + this.message);
				}
			}
		}
	)				
}