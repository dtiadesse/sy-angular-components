import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-point-of-contact',
  templateUrl: './point-of-contact.component.html',
  styleUrls: ['./point-of-contact.component.scss']
})
export class POCComponent {

  pointOfContact = {
    fullName: 'John Doe',
    address: '1234 Waterway Rd',
    city: 'Norfolk',
    state: 'VA',
    zip: '12345',
    email: 'jdoe@test.gov',
    phone: '222-222-2222',
    website: 'www.testsite.gov'
  };

  codeScript=`pointOfContact = {
    fullName: 'John Doe',
    address: '1234 Waterway Rd',
    city: 'Norfolk',
    state: 'VA',
    zip: '12345',
    email: 'jdoe@test.gov',
    phone: '222-222-2222',
    website: 'www.testsite.gov'
  };`;

  codeExample=`<sy-poc [data]="pointOfContact"></sy-poc>`;

  apiRefences = `@Input() data: PointOfContactType;

    PointOfContactType {
  
    fullName?: string; --  Sets the full name property
 
    title?: string; -- Sets the title property
    
    address?: string; -- Sets the primary address property
   
    address2?: string; -- Sets the secondary address property
   
    city?: string; -- Sets the city name property
  
    state?: string; -- Sets the state property
   
    zip?: string; -- Sets the zip code property
   
    email?: string; -- Sets the email property
   
    phone?: string; --  Sets the primary phone property
   
    phone2?: string; -- Sets the secondary phone property
   
    fax?: string; -- Sets the fax number property
  
    website?: string; -- Sets the website url
  }
  `;
}
