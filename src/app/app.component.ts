import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const code_example = `<div class="usa-grid-full">
  <div class="usa-width-one-whole">
    <sam-download [packages]="packages" [downloadAllUrl]="downloadAllUrl"></sam-download>
  </div>
</div>`;
export interface NavLink {
  label: string;
  path: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sy-angular-components';
  faCoffee = faCoffee;
  example = code_example;

  navLinks: NavLink[] = [
    // {
    //   label: 'Header',
    //   path: '/header'
    // },
    {
      label: 'Action Button',
      path: '/action-button'
    },
    {
      label: 'Alert',
      path: '/alert'
    },
    {
      label: 'Alert Footer',
      path: '/alert-footer'
    },
    {
      label: 'Audit trail',
      path: '/audit-trail'
    },
    {
      label: 'History',
      path: '/history'
    },
    {
      label: 'History Table',
      path: '/history-table'
    },
    {
      label: 'Listbox',
      path: '/listbox'
    },
    {
      label: 'Progress Bar',
      path: '/progress-bar'
    },
    {
      label: 'Export',
      path: '/export'
    },
    // {
    //   label: 'Download',
    //   path: '/download'
    // },
    {
      label: 'Point Of Contact',
      path: '/poc'
    },
    {
      label: 'Upload',
      path: '/upload'
    },
    {
      label: 'Required Message',
      path: '/required-message'
    },
    {
      label: 'Copy To Clipboard',
      path: './copy-to-clipboard'
    },
    {
      label: 'Video Player',
      path: '/video'
    },
    // {
    //   label: 'Footer',
    //   path: '/footer'
    // }
  ];




  footerSection2: any[] = [
    {
      path: 'https://governor.delaware.gov',
      label: 'Delaware\'s Governor'
    },
    {
      path: 'https://delaware.gov/topics/agencylist_alpha',
      label: 'State Agencies'
    },
    {
      path: 'https://delaware.gov/topics/yourgovernment',
      label: 'Elected Officials'
    },
    {
      path: 'https://legis.delaware.gov/',
      label: 'General Assembly'
    },
    {
      path: 'https://courts.delaware.gov/',
      label: 'Delaware Courts'
    },
    {
      path: 'https://dhr.delaware.gov/personnel/employee-resources.shtml',
      label: 'State Employees'
    },
    {
      path: 'https://delaware.gov/topics/municipalities',
      label: 'Cities &amp; Towns'
    },
    {
      path: 'http://delcode.delaware.gov/',
      label: 'Delaware State Code'
    },
    {
      path: 'http://regulations.delaware.gov/',
      label: 'State Regulations'
    },
    {
      path: 'https://firststeps.delaware.gov/',
      label: 'Business First Steps'
    },
  ];

  openDocumentation() {
    window.open('http://127.0.0.1:8080', '_blank');
  }
}
