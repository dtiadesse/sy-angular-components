import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  public files: any[] = [];
  public onModelFilesChanges = new BehaviorSubject<any>('null');
  constructor() { }
  
  ngOnInit() {
    this.onModelFilesChanges.subscribe(x =>
      console.log(x.target.files, 'event files'));
  }

  selectFile(ev){
    console.log(ev.target.files, 'input file')
  }
  onSubmitClick() {
    console.log(this.files, 'files uploading');
    // array of file name streams
    // if (this.files && this.files.length) {
    //   const getS3Urls$ = this.files.map((uf: any) => {
    //     const fn = `fsd/${uf.file.name}`;
    //     return this.s3.getFsdForUpload(fn).map(s3url => {
    //       return { s3url, uf, fn };
    //     });
    //   });

    //   // array of upload streams
    //   const uploadToS3$ = getS3Urls$.map(s3Url$ => {
    //     return s3Url$.flatMap(o => {
    //       const { s3url, uf, fn } = o;
    //       return this.s3.uploadFile(s3url, uf.file).subscribe(res => {
    //         return fn;
    //       });
    //     });
    //   });
  //   }
  }
  action = {
    name: 'upload',
    label: 'Upload',
    icon: 'upload',
    callback: () => { console.log('click'); }
  };
}
