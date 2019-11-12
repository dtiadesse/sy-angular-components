import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {

  descriptionList: any[] = [
    'Sorry, there are no matching results.',
    'Try these search suggestions:',
    'Please check your spelling. This search does not auto-correct spelling.'
  ];


  codeExample = `<sy-alert type="'success'" title="Success Message" description="Success message here">`;

  codeExample1 = `<sy-alert type="info">
  <div main-content>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
    Aperiam, provident. Accusamus doloremque numquam sequi laborum
    odio aspernatur beatae officia quae, fugit aliquid, architecto,
    sapiente tenetur perspiciatis pariatur maxime veniam dolorem.
  </div>
</sy-alert>
`;

  codeExample2 = `<sy-alert type="error" title="Error Message"  [descriptionList]="descriptionList"></sy-alert>`;

  codeScript2 = `descriptionList: any[] = [
  'Sorry, there are no matching results.' ,
  'Try these search suggestions:' ,
  'Please check your spelling. This search does not auto-correct spelling.'
 ];`;

  apiRefences = `
  @Input() type: string  -- Type of Alert Default is Success;

  @Input() title: string -- Sets the alert title;

  @Input() description: string -- Sets the alert description;

  @Input() descriptionList: any[] -- Sets the alert descriptionList`;

}
