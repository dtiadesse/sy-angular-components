import { Component, Input, Renderer2, ElementRef, } from '@angular/core';


@Component({
    selector: 'app-video',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.scss']
})

export class VideoPlayComponent {
    videos: any[] = [
        {
            poster: '',
            videoUrl: '/assets/DSPInterview-2.mp4',
            captionsUrl: 'Colin DSP Interview',
            title: 'Colin DSP Interview',
            videoId: 'Colin DSP Interview',
            captionOption: false,
            pdfUrl: '',
            // tslint:disable-next-line:max-line-length
            description: 'This video provides'
            // tslint:enable-next-line:max-line-length
        }];

    codeScript = `videos: any[] = [
            {
                poster: 'https://nilatst.delaware.gov/assets/images/plant-ind-section.jpg',
                videoUrl: '/assets/DSPInterview-2.mp4',
                captionsUrl: '',
                title: 'Single Sign On',
                videoId: 'singleSignOn',
                captionOption: false,
                pdfUrl: 'https://nilatst.delaware.gov/assets/videos/1-Single_Sign_On.pdf',
                description: 'The right time and for the right reasons. '
              },
           ];`;

    codeExample = `<div *ngFor="let video of videos">
          <sy-video-player [videoConfig]="video"></sy-video-player>
      </div>`;

    apiRefences = `
          Data Source to export
          @Input() videoConfig: VideoConfig

          VideoConfig {
            poster: string;
            videoUrl: string;
            captionsUrl: string;
            title: string;
            videoId: string;
            captionOption: boolean;
            seekInterval: number;
            videoTitle: string;
            description: string;
            pdfurl: string;
          }

          `;
}
