import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {
  packages = [
    {
      packageId: '5510527885db16f1d7ae72ecfa8e6567',
      name: 'Industry Day IV Change of Location',
      type: 'Other (Draft RFPs/RFIs, Responses to Questions, etc..)',
      postedDate: 'Apr 07, 2015',
      access: 'Public',
      resources: [
        {
          resourceId: '862178b04be2db1778a697464f186836',
          name: 'J.pdf',
          type: 'file',
          description: 'Industry Day IV change of conference room.',
          size: '83 kB',
          downloadUrl: 'http://fakesite.com/download/4444',
          typeInfo: {
            name: 'PDF document',
            iconClass: 'file-pdf'
          }
        }
      ],
      accordionState: 'collapsed',
      downloadUrl: 'http://fakesite.com/download/3333'
    }
  ];
  downloadAllUrl = 'http://fakesite.com/download/1234';

  constructor() { }

  ngOnInit() {
  }

}
