import { Component, Input, Renderer2, ElementRef, } from '@angular/core';

@Component({
    selector: 'sy-copy-clipboard',
    templateUrl: './copy-clipboard.component.html',
    styleUrls: ['./copy-clipboard.component.scss']
})

export class CopyClipboardComponent {
    @Input() datasource: any[] = [];

    textArea;
    data: any[];
    isIpad = false;
    constructor(private renderer: Renderer2) {
    }
    getText(data: any[]): string {
        let copyText = '';
        copyText = JSON.stringify(data) + ',';
       // copyText = this.removeDuplicate(copyText, ',');
        return copyText;
    }
    removeDuplicate(str: string, separator: string): string {
        const a = str.split(separator);
        const x2 = [];
        for (const i in a) {
            if (x2.indexOf(a[i]) == -1) {
                x2.push(a[i]);
            }
        }
        return x2.join(separator);
    }



    copyToClipboard(): void {
        this.data = this.datasource;
        const copyText = this.getText(this.data);
        this.textArea = this.renderer.createElement('textArea');
        this.textArea.textContent = copyText;
        this.renderer.appendChild(document.body, this.textArea);
        this.selectText();
        document.execCommand('copy');
        this.renderer.removeChild(document.body, this.textArea);
    }

    isUserAgentiOS(): any {
        return navigator.userAgent.match(/ipad|iphone/i);
    }
    selectText(): void {
        if (this.isUserAgentiOS()) {
            const range = document.createRange();
            range.selectNodeContents(this.textArea);
            const selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
            this.textArea.setSelectionRange(0, 999999);
        } else {
            this.textArea.select();
        }
    }
}
