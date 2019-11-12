import { Component, OnInit } from '@angular/core';
import { faBuilding, faNewspaper, faComments, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'dos-header',
  templateUrl: './dos-header.component.html',
  styleUrls: ['./dos-header.component.scss']
})
export class DosHeaderComponent implements OnInit {
  building = faBuilding;
  faNewspaper= faNewspaper;
  faComments =faComments ;
  faMobileAlt =faMobileAlt;

  constructor() { }

  ngOnInit() {
  }


}
