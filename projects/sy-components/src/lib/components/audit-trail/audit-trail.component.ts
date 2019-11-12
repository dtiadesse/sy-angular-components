import { Component, Input } from '@angular/core';
import { AuditTrailInfo } from '../../types';

@Component({
  selector: 'sy-audit-trail',
  templateUrl: './audit-trail.component.html',
  styleUrls: ['./audit-trail.component.scss']
})
export class AuditTrailComponent {
  @Input() lastModifiedByEmail: string;
  @Input() createdByEmail: string;
  @Input() created: any;
  @Input() lastModified: any;
  @Input() dateFormat : string = 'MMM dd, yyyy hh:mm:ss a';
}
