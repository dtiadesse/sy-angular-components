import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { AlertFooterService } from 'sy-components/lib/components/public_api';
import { DocumentComponent } from './components/document/document.component';
import { HistoryComponent } from './components/history/history.component';
import { HistoryTableComponent } from './components/history-table/history-table.component';
import { ActionButtonComponent } from './components/action-button/action-button.component';
import { AuditTrailComponent } from './components/audit-trail/audit-trail.component';
import { AlertComponent } from './components/alert/alert.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { ExportComponent } from './components/export/export.component';
import { RequiredMessageComponent } from './components/required-message/required-message.component';
import { HeaderComponent } from './components/header-footer/header.component';
import { FooterComponent } from './components/header-footer/footer.component';
import { ListboxComponent } from './components/listbox/listbox.component';
import { AlertFooterComponent } from './components/alert-footer/alert-footer.component';
import { DownloadComponent } from './components/download/download.component';
import { POCComponent } from './components/point-of-contact/point-of-contact.component';
import { UploadComponent } from './components/upload/upload.component';
import { CopyToClipboardComponent } from './components/copy-to-clipboard/copy-to-clipboard.component';
import { VideoPlayComponent } from './components/video/video.component';
import { SyComponentsModule } from 'sy-components';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DocumentComponent,
    HistoryComponent,
    HistoryTableComponent,
    ActionButtonComponent,
    AuditTrailComponent,
    AlertComponent,
    ProgressBarComponent,
    ExportComponent,
    RequiredMessageComponent,
    ListboxComponent,
    AlertFooterComponent,
    DownloadComponent,
    POCComponent,
    UploadComponent,
    CopyToClipboardComponent,
    VideoPlayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    SyComponentsModule
   // SyComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
