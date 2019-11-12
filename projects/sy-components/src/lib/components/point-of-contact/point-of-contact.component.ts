import { Component, Input } from '@angular/core';
import { PointOfContactType } from '../../types';

@Component({
  selector: 'sy-poc',
  templateUrl: './point-of-contact.component.html',
  styleUrls: ['./point-of-contact.component.scss']
})

export class PointOfContactComponent  {
  /**
   * Populates the component with the provided data
   */
  @Input() data: PointOfContactType;
}
