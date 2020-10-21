/// <reference path="../../../source/typescript/smart.elements.d.ts" />

import {Menu, ListMenu} from "../../../source/typescript/smart.elements"

window.onload = function () {
	  const menu1Container = <HTMLElement>document.getElementById('menu1Container'),
			menu3Container = <HTMLElement>document.getElementById('menu3Container'),
			listMenu2Container = <ListMenu>document.getElementById('listMenu2Container'),
			menuTokens = document.getElementsByClassName('menu-token'),
			menu1 = <Menu>document.getElementById('menu1'),
			menu3 = <Menu>document.getElementById('menu3');
	  
		menu1.classList.remove('animation');
		menu1.open(202, 35);
		menu1.classList.add('animation');
		window.scrollTo(0, 0);

		document.body.addEventListener('contextmenu', function (event) {
			let target = event.target;

			if (menu1Container.contains(target as Node) || menu3Container.contains(target as Node)) {
				event.preventDefault();
			}
		});

		document.addEventListener('mousedown', function (event) {
			if (!menu1.contains(event.target as Node)) {
				menu1.close();
			}

			if (!menu3.contains(event.target as Node)) {
				menu3.close();
			}

		 
		});

		menuTokens[0].addEventListener('mouseup', function (event) {
			menu1.open(202, 35);
		});

   

		menu3Container.addEventListener('mouseup', function (event) {
			let token = <HTMLElement>(event.target as HTMLElement).closest('.menu-token');

			if (token) {
				menu3.open(194, token.offsetTop);
			}
		});
	
}