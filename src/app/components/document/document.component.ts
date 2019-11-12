import { Component, OnInit, Input } from '@angular/core';
import Prism from 'prismjs';

@Component({
  selector: 'sy-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {

  @Input() example;
  constructor() { }

  ngOnInit() {
    // ==========================================================
    // Run Prism JS
    // ==========================================================
    if (this.example) {
      this.example = this.example.trim();
      this.example = Prism.highlight(this.example, Prism.languages.html);
    }

  }

}
