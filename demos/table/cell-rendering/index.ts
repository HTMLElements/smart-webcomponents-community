/// <reference path="../../../source/typescript/smart.elements.d.ts" />

import { Table } from "../../../source/typescript/smart.elements"

declare global {
    export interface Window {
        smartTable: any;
    }
}

let data: any[];

fetch('https://randomuser.me/api/?results=50')
    .then(response => response.json())
    .then(json => {
        (document.getElementById('loading') as HTMLElement).remove();

        data = json.results.map((dataPoint: any) => {
            const result: { name: string, country: string, countryCode: string, mobile: string, landline: string, address: string, proficiency?: number, skills?: string } = {
                name: dataPoint.name.first + ' ' + dataPoint.name.last,
                country: dataPoint.location.country,
                countryCode: dataPoint.nat,
                mobile: dataPoint.cell,
                landline: dataPoint.phone,
                address: dataPoint.location.street.number + ' ' + dataPoint.location.street.name + ', ' + dataPoint.location.postcode + ' ' + dataPoint.location.city
            },
                skills = [];

            result.proficiency = Math.floor(Math.random() * Math.floor(99)) + 1;

            if (dataPoint.dob.age % 2 === 0) {
                if (dataPoint.dob.age % 4 === 0) {
                    skills.push('javascript');
                }

                skills.push('html-5');
                skills.push('css3');
            }
            else if (dataPoint.registered.age % 2) {
                skills.push('python');
            }

            if (dataPoint.registered.age % 3 === 0) {
                skills.push('react-native');
            }

            if (dataPoint.registered.age % 2 === 0) {
                skills.push('angularjs');
            }
            else {
                skills.push('android-os');
            }

            result.skills = skills.join(',');
            return result;
        });

        new window.smartTable('#table', {
            dataSource: new window.Smart.DataAdapter(
                {
                    dataSource: data,
                    dataFields:
                        [
                            'name: string',
                            'country: string',
                            'skills: string',
                            'proficiency: number',
                            'mobile: string',
                            'landline: string',
                            'address: string'
                        ]
                }),
            columnReorder: true,
            selection: true,
            sortMode: 'one',
            columns: [
                { label: 'Name', dataField: 'name', dataType: 'string' },
                {
                    label: 'Country', dataField: 'country', dataType: 'string', formatFunction(settings: { value: any, row: number | string, column: string, cell: HTMLTableCellElement, template?: string }) {
                        settings.template =
                            `<div class="country-container">
                                <img class="flag" style="width: 40px; height: 27px;" src="../../grid/live-update-countries/flags/${data[settings.row as number].countryCode}.svg" />
                                ${settings.value}
                            </div>`;
                    }
                },
                {
                    label: 'Skills', dataField: 'skills', dataType: 'string', allowSort: false, formatFunction(settings: { value: any, row: number | string, column: string, cell: HTMLTableCellElement, template?: string }) {
                        const skills: string[] = settings.value.split(',');
                        let template: string = '<div class="skill-container">';

                        skills.forEach(skill => template += `<img src="https://img.icons8.com/color/48/000000/${skill}.png" title="${skill}" />`);
                        settings.template = template + '</div>';
                    }
                },
                {
                    label: 'Proficiency', dataField: 'proficiency', dataType: 'number', formatFunction(settings: { value: any, row: number | string, column: string, cell: HTMLTableCellElement, template?: string }) {
                        const value: number = settings.value;
                        let className: string;

                        if (settings.value >= 60) {
                            className = 'high';
                        }
                        else if (value >= 20) {
                            className = 'mid';
                        }
                        else {
                            className = 'low';
                        }

                        settings.template = `<smart-progress-bar class="${className}" show-progress-value value="${value}"></smart-progress-bar>`;
                    }
                },
                { label: 'Mobile', dataField: 'mobile', dataType: 'string' },
                { label: 'Landline', dataField: 'landline', dataType: 'string' },
                { label: 'Address', dataField: 'address', dataType: 'string', width: 300 }
            ]
        });
    }); 