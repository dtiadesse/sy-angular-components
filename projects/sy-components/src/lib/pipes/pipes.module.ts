import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FilesizePipe} from './file-size/file-size.pipe';

@NgModule({
  declarations: [FilesizePipe],
  exports: [FilesizePipe],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
