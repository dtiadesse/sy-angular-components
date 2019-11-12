import { Component, OnInit, Input } from '@angular/core';
import { HistoryNodeType } from '../types';

@Component({
  selector: 'sy-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {
 /**
   * sets the id for history items
   */
  @Input() id: string;
  /**
   * sets the model for generating nodes
   */
  @Input() data: HistoryNodeType[];
  /**
   * Sets the 'current' node on the id value defined in data
   */
  @Input() currentId: string;

}
