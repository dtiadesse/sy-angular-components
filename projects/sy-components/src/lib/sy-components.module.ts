import { NgModule } from '@angular/core';
import { HistoryComponent } from './history/history.component';
import { ListboxComponent } from './listbox/listbox.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentModule } from './components/component.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FieldsetWrapper } from './wrappers/fieldset-wrapper/fieldset-wrapper.component';
import { UploadModule } from './upload/upload.module';
import { HttpClientModule } from '@angular/common/http';
import { SyComponentsComponent } from './sy-components.component';

@NgModule({
  declarations: [SyComponentsComponent,
    HistoryComponent,
    ListboxComponent,
    FieldsetWrapper],
  imports: [
    FormsModule,
    CommonModule,
    FontAwesomeModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [SyComponentsComponent,
    HistoryComponent,
    ComponentModule,
    UploadModule,
    ListboxComponent]
})
export class SyComponentsModule {
  constructor() {
    library.add(fas, far);
  }
}
