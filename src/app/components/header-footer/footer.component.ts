import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <h2>Dept Of State Footer Example</h2>
 <p>Footer is used in the foorter section as below</p>
  
<h4>HTML</h4>
<pre>
    <code>{{codeExample}}</code>
</pre>
  `
})
export class FooterComponent  {

  codeExample=` <dos-footer></dos-footer>`;

}
