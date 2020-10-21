/// <reference path="../../../source/typescript/smart.elements.d.ts" />

import {Tabs, RadioButton} from "../../../source/typescript/smart.elements"

declare var google: any;
declare global {
    export interface Window {
        initializeMaps: any;
    }
}

window.initializeMaps = function() {
		new google.maps.Map(document.getElementById('map-canvas-3'), {
			center: new google.maps.LatLng(-10.516768, 119.680272),
			zoom: 8,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		});
}

window.onload = function () {
    const tabs = <Tabs>document.getElementById('tabs'),
        script = document.createElement('script'),
        initialized = [false, false, false, true],
        mapCoordinates = [{ lat: 40.7590403, long: -74.0392705 }, { lat: 22.257983, long: 114.1696828 }, { lat: 42.8863169, long: 24.7089964 }];

    tabs.addEventListener('change', function (event: Event) {
        const index: number = (event as CustomEvent).detail.index;

        if (!initialized[index]) {
            new google.maps.Map(document.getElementById('map-canvas-' + index), {
                center: new google.maps.LatLng(mapCoordinates[index].lat, mapCoordinates[index].long),
                zoom: 10,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });
            initialized[index] = true;
        }
    });

    [].slice.call(document.querySelectorAll('smart-radio-button')).map(function (button: RadioButton) {
        button.addEventListener('change', function (event) {
            const target = event.target as RadioButton;
            tabs[target.groupName!] = target.id;
        });
    });

    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDLNo8WFhrz_4zuLdl423WX9h5Kh0SedHQ&callback=initializeMaps';
    document.body.appendChild(script);
}