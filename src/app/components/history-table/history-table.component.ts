import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-table',
  templateUrl: './history-table.component.html',
  styleUrls: ['./history-table.component.scss']
})
export class HistoryTableComponent implements OnInit {

  constructor() { }

  historyConfig ={
    title: 'Channge History',
    dateHeaderText: 'Date',
    detailsHeaderText: 'Change'
  }
  historyData=[
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

  ngOnInit() {
  }

  
  codeScript=`historyData=[
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

  codeExample=`<sy-history-table [historyData]="historyData" [historyConfig]="historyConfig"></sy-history-table>`;

  apiRefences = `
  @Input() historyConfig: HistoryConfig   -- History table Configurations;
 
  @Input()historyData: HistoryDataType[] -- History Data is a list and the type of HistoryDataType;

  @Input() description: string -- Sets the alert description;

  @Input() descriptionList: any[] -- Sets the alert descriptionList
  
  History Configuration interface

  HistoryConfig {
    title: string;
    dateHeaderText: string;
    detailsHeaderText: string;
  }
  
  History data type Interface
  HistoryDataType {
    DateTimeChanged: string;
    SummaryReason: string;
    DetailField: string;
    DetailOld: string;
    DetailNew: string;
    DetailChangedBy: string;
  }
`;
}
