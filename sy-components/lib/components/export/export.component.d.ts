import { Renderer2 } from '@angular/core';
export interface DataConfiguration {
    EmailFieldName: string;
    StreetAddressFieldName: string;
    CityFieldName: string;
    StateCodeFieldName: string;
    ZipCodeFieldName: string;
}
export declare class ExportComponent {
    private renderer;
    fileName: string;
    datasource: any[];
    data: any[];
    isIpad: boolean;
    constructor(renderer: Renderer2);
    exportAsExcelFile(): void;
}
