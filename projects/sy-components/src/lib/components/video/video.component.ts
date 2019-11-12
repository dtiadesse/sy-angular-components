import { Component, Input } from '@angular/core';
import { VideoConfig } from '../../types';

@Component({
    selector: 'sy-video-player',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.scss']
})

export class VideoPlayerComponent {
    @Input() public videoConfig: VideoConfig;
}
