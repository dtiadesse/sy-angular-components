import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-audit-trail',
  templateUrl: './audit-trail.component.html',
  styleUrls: ['./audit-trail.component.scss']
})
export class AuditTrailComponent {

  constructor() { }
    lastModifiedByEmail= 'dtiadesse@gmail.com';
    createdByEmail= 'dtiadesse@gmail.com';
    created= Date.now();
    lastModified= Date.now();
    dateFormat = 'yy-mm-dddd';

    lastModifiedByEmail1=  'dtiadesse@gmail.com';
    createdByEmail1=  'dtiadesse@gmail.com';
    created1= Date.now();
    lastModified1= Date.now();
   


    codeExample=`<sy-audit-trail 
      [lastModifiedByEmail]="lastModifiedByEmail"
      [createdByEmail]="createdByEmail"
      [created]="created"
      [lastModified]="lastModified"
      [dateFormat]="dateFormat">
    </sy-audit-trail>`


    codeExample1=`<sy-audit-trail 
      [lastModifiedByEmail]="lastModifiedByEmail1"
      [createdByEmail]="createdByEmail1"
      [created]="created1"
      [lastModified]="lastModified1">
    </sy-audit-trail>`

    codeScript=`lastModifiedByEmail= 'dtiadesse@gmail.com';
    createdByEmail= 'dtiadesse@gmail.com';
    created= Date.now();
    lastModified= Date.now();
    dateFormat = 'yy-mm-dddd';`

    codeScript1=`lastModifiedByEmail1=  'dtiadesse@gmail.com';
    createdByEmail1=  'dtiadesse@gmail.com';
    created1= Date.now();
    lastModified1= Date.now();
  `

}
