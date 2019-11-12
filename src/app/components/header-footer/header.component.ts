import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <h2>Dept Of State Header Example</h2>
 <p>Header is used in application </p>
  
<h4>HTML</h4>
<pre>
    <code>{{codeExample}}</code>
</pre>
  `
})
export class HeaderComponent  {

  codeExample=` <dos-header></dos-header>`;

}
