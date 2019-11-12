import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.scss']
})
export class ExportComponent {
  data = [
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

  codeExample = `<sy-export [datasource]="data"></sy-export>
  <sy-export [datasource]="data" [fileName]="test-data"></sy-export>
  `;

  apiRefences = `
  File name
  @Input() fileName default name  'export-data';

  Data Source to export
  @Input() datasource: any[] = [];`;
}

