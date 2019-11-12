import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent, UploadFile } from './upload.component';

import { ComponentModule } from '../components/component.module';
import { DirectivesModule } from '../directives/directive.module';
import { PipesModule } from '../pipes/pipes.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [UploadComponent ],
  exports: [ UploadComponent ],
  imports: [
    CommonModule,
    DirectivesModule,
    ComponentModule,
    PipesModule,
    FontAwesomeModule,
  ]
})
export class UploadModule { }
