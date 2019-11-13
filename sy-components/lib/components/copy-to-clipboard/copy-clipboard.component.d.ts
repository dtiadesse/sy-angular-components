import { Renderer2 } from '@angular/core';
export declare class CopyClipboardComponent {
    private renderer;
    datasource: any[];
    textArea: any;
    data: any[];
    isIpad: boolean;
    constructor(renderer: Renderer2);
    getText(data: any[]): string;
    removeDuplicate(str: string, separator: string): string;
    copyToClipboard(): void;
    isUserAgentiOS(): any;
    selectText(): void;
}
