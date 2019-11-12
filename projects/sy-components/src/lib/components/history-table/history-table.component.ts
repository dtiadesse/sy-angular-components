import { Component, Input } from '@angular/core';
import { HistoryDataType, HistoryConfig } from '../../types';
import { faExpand } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'sy-history-table',
  templateUrl: './history-table.component.html',
  styleUrls: ['./history-table.component.scss']
})
export class HistoryTableComponent {
  faExpand = faExpand;
  @Input() historyConfig: HistoryConfig ={
    title:' Change History',
    dateHeaderText: 'Date',
    detailsHeaderText: 'Change',
  }; 
  @Input() historyData: HistoryDataType[];
  isExpand: boolean = true;
  expand(isExpand: boolean): void {
    this.isExpand = !isExpand;
  }

}

