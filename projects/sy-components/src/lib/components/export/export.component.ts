import { Component, Input, Renderer2, ElementRef, } from '@angular/core';

export interface DataConfiguration {
    EmailFieldName: string;
    StreetAddressFieldName: string;
    CityFieldName: string;
    StateCodeFieldName: string;
    ZipCodeFieldName: string;

}

@Component({
    selector: 'sy-export',
    templateUrl: './export.component.html',
    styleUrls: ['./export.component.scss']
})

export class ExportComponent {
    @Input() fileName = 'export-data';
    @Input() datasource: any[] = [];
    data: any[];
    isIpad = false;
    constructor(private renderer: Renderer2) {
    }
 
    exportAsExcelFile(): void {
        if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
            this.isIpad = true;
        } else {
            this.isIpad = false;
            this.data = this.datasource;
            this.fileName = this.fileName + '.csv';
            const csvRows = [];
            const csvheader = [];
            let csvString = '';
            for (const key in this.data[0]) {
                if (key) {
                    csvheader.push(key);
                }
            }
            csvRows.push(csvheader);
            this.data.forEach(item => {
                const csvrow = [];
                for (const i in item) {
                    if (i) {
                        csvrow.push('"' + item[i] + '"');
                    }
                }
                csvRows.push(csvrow);
            });
            csvString = csvRows.join('\r\n');


            if (navigator.msSaveBlob) { // IE 10+
                const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
                navigator.msSaveBlob(blob, this.fileName);
            } else {
                const csvdatacontent = 'data:text/csv;charset=utf-8,' + csvString;
                const encodedUri = encodeURI(csvdatacontent);
                const tempLink = document.createElement('a');
                tempLink.setAttribute('href', encodedUri);
                tempLink.setAttribute('download', this.fileName);
                document.getElementById('container').appendChild(tempLink);
                tempLink.click();
            }
        }
    }

  
}
