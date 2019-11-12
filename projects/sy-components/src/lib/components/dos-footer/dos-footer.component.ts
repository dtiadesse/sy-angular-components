import { Component, Input } from '@angular/core';

export interface SectionInfo {
path: string;
label: string;
}

@Component({
  selector: 'dos-footer',
  templateUrl: './dos-footer.component.html',
  styleUrls: ['./dos-footer.component.scss']
})
export class DosFooterComponent {

  @Input() footerTitle: string = 'Delaware\'s Government';
 
  @Input() footerSection1: SectionInfo[] = [
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
    }
  ];

  @Input() footerSection4: SectionInfo[];
  @Input() imageInfo: SectionInfo = 
    {
      path: 'https://gic.delaware.gov/wp-content/themes/dosgic_GIC_theme/img/portal_footer_seal.png',
      label: 'State Seal of Delaware'
    };
  
  @Input() hasLogo: boolean = true;
  @Input() footerSection3: SectionInfo[] = [
    {
      path: 'https://delaware.gov/help/degov-contact.shtml',
      label: 'Contact Us'
    },
    {
      path: 'https://corp.delaware.gov/',
      label: 'Corporations'
    },
    {
      path: 'https://corp.delaware.gov/paytaxes.shtml',
      label: 'Franchise Tax'
    },
    {
      path: 'https://grossreceiptstax.delaware.gov/grtpublic/',
      label: 'Gross Receipts Tax'
    },
    {
      path: 'https://dorweb.revenue.delaware.gov/EDIOnline/EDIOnline.dll',
      label: 'Withholding Tax'
    },
    {
      path: 'https://delaware.gov/topics/',
      label: 'Delaware Topics'
    },
    {
      path: 'https://delaware.gov/help/',
      label: 'Help Center'
    },
    {
      path: 'https://delaware.gov/topics/apps',
      label: 'Mobile Apps'
    },
    {
      path: 'https://delaware.gov/topics/subscribeemail',
      label: 'E-mail / Text Alerts'
    },
    {
      path: 'https://delaware.gov/topics/socialmedia',
      label: 'Social Media'
    }
  ];


  @Input() footerSection2: SectionInfo[] =[
  {
    path: 'https://phonedirectory.delaware.gov',
    label: 'Phone Directory'
  },
  {
    path: 'https://delaware.gov/locationsdirectory/',
    label: 'Locations Directory'
  },
  {
    path: 'https://publicmeetings.delaware.gov/',
    label: 'Public Meetings'
  },
  {
    path: 'https://elections.delaware.gov',
    label: 'Voting &amp; Elections'
  },
  {
    path: 'https://delaware.gov/topics/transparency',
    label: 'Transparency'
  },
  {
    path: 'https://www.choosehealthde.com/Health-Insurance',
    label: 'Tax Center'
  },
  {
    path: 'https://revenue.delaware.gov/pit_onlinefiling.shtml',
    label: 'Personal Income Tax'
  },
  {
    path: 'https://delaware.gov/help/privacy',
    label: 'Privacy Policy'
  },
  {
    path: 'https://delaware.gov/topics/weatherpage',
    label: 'Weather &amp; Travel'
  }
];
}
