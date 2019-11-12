import { Subscription } from 'rxjs';
import { HttpRequest } from '@angular/common/http';

enum UploadStatus {
  Initial,
  Uploading,
  Done,
  Error
}

export class Upload {
  public subscription: Subscription;
  public progress: number = 0.0;
  public status: UploadStatus = UploadStatus.Initial;
  public request: HttpRequest<any>;
  public error?: string;
}

export class UploadFile {
  public file: File;
  public upload: Upload;
}
