import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listbox',
  templateUrl: './listbox.component.html',
  styleUrls: ['./listbox.component.scss']
})
export class ListboxComponent implements OnInit {
  public selectItems1: any[] = [];
  public selectItems2: any[] = [];
  public options = [
    { name: 'id1', value: 'test1', label: 'test-id1', required: false, checked: false },
    { name: 'id2', value: 'test2', label: 'test-id2', required: true, checked: true },
    { name: 'id3', value: 'test3', label: 'test-id3', required: false, checked: false },
    { name: 'id4', value: 'test4', label: 'test-id4', required: false, checked: false },
    { name: 'id5', value: 'test5', label: 'test-id5', required: false, checked: true },
    { name: 'id6', value: 'test6', label: 'test-id6', required: false, checked: false },
    { name: 'id7', value: 'test7', label: 'test-id7', required: false, checked: false },
    { name: 'id8', value: 'test8', label: 'test-id8', required: false, checked: false },
  ];

  public options1 = [
    { name: 'id5', value: 'test5', label: 'test-id5', required: false, checked: true },
    { name: 'id6', value: 'test6', label: 'test-id6', required: false, checked: false },
    { name: 'id7', value: 'test7', label: 'test-id7', required: false, checked: false },
    { name: 'id8', value: 'test8', label: 'test-id8', required: false, checked: false },
  ];


  public ngOnInit() {
    this.selectItems2 = this.options.filter(item => item.checked);
    this.selectItems1 = this.options1.filter(item => item.checked);
  }


  codeScript = `public options = [
    { name: 'id1', value: 'test1', label: 'test-id1', required: false, checked: false },
    { name: 'id2', value: 'test2', label: 'test-id2', required: true, checked: true },
    { name: 'id3', value: 'test3', label: 'test-id3', required: false, checked: false },
    { name: 'id4', value: 'test4', label: 'test-id4', required: false, checked: false },
    { name: 'id5', value: 'test5', label: 'test-id5', required: false, checked: true },
    { name: 'id6', value: 'test6', label: 'test-id6', required: false, checked: false },
    { name: 'id7', value: 'test7', label: 'test-id7', required: false, checked: false },
    { name: 'id8', value: 'test8', label: 'test-id8', required: false, checked: false },
  ];`;

  codeExample = `<sy-listbox [options]="options" [(ngModel)]="selectItems2" [required]="true"></sy-listbox>`;

  codeScript1 = `public options1 = [
  { name: 'id5', value: 'test5', label: 'test-id5', required: false, checked: true },
    { name: 'id6', value: 'test6', label: 'test-id6', required: false, checked: false },
    { name: 'id7', value: 'test7', label: 'test-id7', required: false, checked: false },
    { name: 'id8', value: 'test8', label: 'test-id8', required: false, checked: false },
  ];`;

  codeExample1 = `<sy-listbox isSingleMode="true" [options]="options1" [(ngModel)]="selectItems1"></sy-listbox>`;

  apiRefences = `/**
    * Deprecated, Sets the bound value of the component
    */
  @Input() model: any = [];
  /**
   * Sets the array of checkbox values and labels (see OptionsType[])
   */
  @Input() options: OptionModel[];
  /**
   * Sets the label text
   */
  @Input() label: string;
  /**
   * Sets the semantic description for the component
   */
  @Input() name: string;
  /**
   * Sets helpful text for the using the component
   */
  @Input() hint: string;
  /**
   * Sets required text on component
   */
  @Input() required: boolean = false;
  /**
   * Sets the form control error message
   */
  @Input() errorMessage: string;
  /**
   * Sets the angular FormControl
   */
  @Input() control: FormControl;
  
  /**
    * Sets the id
    */
  @Input() id: string;
  
  OptionModel {
    name: string;
    value: string;
    label: any;
    required: boolean;
    checked: boolean;
    disabled: boolean;
  }`;



  
}

