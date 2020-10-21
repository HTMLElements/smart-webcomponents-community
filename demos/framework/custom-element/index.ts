/// <reference path="../../../source/typescript/smart.elements.d.ts" />

import {Framework} from "../../../source/typescript/smart.elements"

Smart('smart-greeting', class SmartGreeting extends smartBaseElement {  
  // Declare properties
  static get properties() {  
    return {
      'name': 
        {
           value: 'World!',
           type: 'string'
        }
    };
  }
 
  // Define a template
  template() {
     return '<p>Hello, <span>{{name}}</span></p>';
  }
});