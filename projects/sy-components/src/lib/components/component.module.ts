import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GlobalDateTime } from '../globaldatetime.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CopyClipboardComponent } from './copy-to-clipboard/copy-clipboard.component';
import { ActionButtonComponent } from '../components/action-button/action-button.component';
import { AuditTrailComponent } from '../components/audit-trail/audit-trail.component';
import { HistoryTableComponent } from './history-table/history-table.component';
import { AlertComponent } from './alert/alert.component';
import { AlertFooterComponent } from './alert-footer/alert-footer.component';
import { DosHeaderComponent } from './dos-header/dos-header.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ExportComponent } from './export/export.component';
import { RequiredMessageComponent } from './required-message/required-message.component';
import { DosFooterComponent } from './dos-footer/dos-footer.component';
import { DownloadComponent } from './download/download.component';
import { PointOfContactComponent } from './point-of-contact/point-of-contact.component';
import { AlertFooterService } from './alert-footer/alert-footer.service';
import { VideoPlayerComponent } from './video/video.component';

export const COMPONENT_COMPONENTS = [
    AuditTrailComponent,
    GlobalDateTime,
    HistoryTableComponent,
    AlertComponent,
    AlertFooterComponent,
    DosHeaderComponent,
    ProgressBarComponent,
    ActionButtonComponent,
    ToolbarComponent,
    ExportComponent,
    RequiredMessageComponent,
    DosFooterComponent,
    DownloadComponent,
    PointOfContactComponent,
    CopyClipboardComponent,
    VideoPlayerComponent
];
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        FontAwesomeModule,
        ReactiveFormsModule
    ],
    declarations: [
        ...COMPONENT_COMPONENTS
        ],
    exports: [
        ...COMPONENT_COMPONENTS
    ],
    providers: [AlertFooterService]

})
export class ComponentModule { }
