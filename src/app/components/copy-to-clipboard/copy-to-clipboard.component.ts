import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copy-to-clipboard',
  templateUrl: './copy-to-clipboard.component.html',
  styleUrls: ['./copy-to-clipboard.component.scss']
})
export class CopyToClipboardComponent {

  data = [
    {
      DateTimeChanged: Date.now(),
      SummaryReason: 'changed test1',
      DetailField: 'Street Address changed1',
      DetailOld: 'Street1',
      DetailNew: 'Street ts1',
      DetailChangedBy: 'Shilpa Yerram1'
    },
    {
      DateTimeChanged: Date.now(),
      SummaryReason: '1changed test',
      DetailField: '1Street Address changed',
      DetailOld: '1Street',
      DetailNew: '1Street ts',
      DetailChangedBy: 'Yerram'
    }
  ];
  codeScript = `data = [
    {
      DateTimeChanged: Date.now(),
      SummaryReason: 'changed test',
      DetailField: 'Street Address changed',
      DetailOld: 'Street',
      DetailNew: 'Street ts',
      DetailChangedBy: 'Shilpa Yerram'
    },
    {
      DateTimeChanged: Date.now(),
      SummaryReason: '1changed test',
      DetailField: '1Street Address changed',
      DetailOld: '1Street',
      DetailNew: '1Street ts',
      DetailChangedBy: 'Yerram'
    }
  ];`;

  codeExample = `<sy-copy-clipboard [datasource]="data"></sy-copy-clipboard> `;

  apiRefences = `
  Data Source to export
  @Input() datasource: any[] = [];`;

}
