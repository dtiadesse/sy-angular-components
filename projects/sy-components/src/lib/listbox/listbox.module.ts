import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListboxComponent } from './listbox.component';
import { FieldsetWrapper } from '../wrappers/fieldset-wrapper/fieldset-wrapper.component';


@NgModule({
  declarations: [ListboxComponent],
  imports: [
    CommonModule,
    FieldsetWrapper
  ],
  exports: [ListboxComponent]
})
export class ListboxModule { }
