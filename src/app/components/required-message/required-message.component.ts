import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-required-message',
  template: `
  <h2>Reqired Message with default message Example</h2>
  <sy-required-message></sy-required-message>
  
<h4>HTML</h4>
<pre>
    <code>{{codeExample}}</code>
</pre>

  <h2>Reqired Message with customized message Example</h2>
  <sy-required-message  [message]="message"></sy-required-message>

  <h4>HTML</h4>
<pre>
    <code>{{codeExample1}}</code>
</pre>

<h4>Script(TS)</h4>
<pre>
    <code>{{codeScript1}}</code>
</pre>
  `
})
export class RequiredMessageComponent  {

  message="Custom message for required component";
  codeExample=`<sy-required-message></sy-required-message>`;


  codeScript1=`message="Custom message for required component";`;

  codeExample1=`<sy-required-message [message]="message"></sy-required-message>`;
}
