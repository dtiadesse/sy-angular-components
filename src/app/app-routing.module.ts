import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActionButtonComponent } from './components/action-button/action-button.component';
import { AlertComponent } from './components/alert/alert.component';
import { AlertFooterComponent } from './components/alert-footer/alert-footer.component';
import { AuditTrailComponent } from './components/audit-trail/audit-trail.component';
import { HistoryComponent } from './components/history/history.component';
import { HistoryTableComponent } from './components/history-table/history-table.component';
import { ListboxComponent } from './components/listbox/listbox.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { ExportComponent } from './components/export/export.component';
import { RequiredMessageComponent } from './components/required-message/required-message.component';
import { HeaderComponent } from './components/header-footer/header.component';
import { FooterComponent } from './components/header-footer/footer.component';
import { DownloadComponent } from './components/download/download.component';
import { POCComponent } from './components/point-of-contact/point-of-contact.component';
import { UploadComponent } from './components/upload/upload.component';
import { CopyToClipboardComponent } from './components/copy-to-clipboard/copy-to-clipboard.component';
import { VideoPlayComponent } from './components/video/video.component';

const routes: Routes = [
  {
    path: 'action-button', component: ActionButtonComponent,
  },
  {
    path: 'alert', component: AlertComponent,
  },
  {
    path: 'alert-footer', component: AlertFooterComponent,
  },
  {
    path: 'audit-trail', component: AuditTrailComponent,
  },
  {
    path: 'history', component: HistoryComponent,
  },
  {
    path: 'header', component: HeaderComponent,
  },
  {
    path: 'footer', component: FooterComponent,
  },
  {
    path: 'history-table', component: HistoryTableComponent,
  },
  {
    path: 'listbox', component: ListboxComponent,
  },
  {
    path: 'progress-bar', component: ProgressBarComponent,
  },
  {
    path: 'export', component: ExportComponent,
  },
  {
    path: 'download', component: DownloadComponent,
  },
  {
    path: 'upload', component: UploadComponent,
  },
  {
    path: 'required-message', component: RequiredMessageComponent,
  },
  {
    path: 'poc', component: POCComponent
  },
  {
    path: 'video', component: VideoPlayComponent
  },
  {
    path: 'copy-to-clipboard', component: CopyToClipboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
