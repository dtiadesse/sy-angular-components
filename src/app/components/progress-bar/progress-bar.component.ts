import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  constructor() { }
  percentExample: any = {
    type: 'percent',
    min: 0,
    max: 100,
    value: 0,
    valueAsText: '0%'
  };

  ngOnInit() {
    this.startPercentage ();
  }

  private startPercentage (): void {
    const intervalId = setInterval(
      (percentExample: any) => {
        // Stop interval on completion
        if (percentExample.value === 100) {
          clearInterval(intervalId);
        } else {
        // Update values
          percentExample.value = percentExample.value + 25;
          percentExample.valueAsText = `${percentExample.value}%`;
        }
      },
      250,
      this.percentExample
    );
  }

  codeScript=`percentExample: any = {
    type: 'percent,
    min: 0,
    max: 100,
    value: 0,
    valueAsText: '0%'
  };

  ngOnInit() {
    this.startPercentage ();
  }

  private startPercentage (): void {
    const intervalId = setInterval(
      (percentExample: any) => {
        // Stop interval on completion
        if (percentExample.value === 100) {
          clearInterval(intervalId);
        } else {
     
          percentExample.value = percentExample.value + 25;
          percentExample.valueAsText = \`\${percentExample.value}%\`\;
        }
      },
      250,
      this.percentExample
    );
  }
`;

  codeExample=`<sy-progress-bar [type]="percentExample.type"
      [min]="percentExample.min"
      [max]="percentExample.max"
      [value]="percentExample.value"
      [valueAsText]="percentExample.valueAsText">
    </sy-progress-bar>`;
}
