import { Component, OnInit } from '@angular/core';
import { MediaService } from 'src/app/core/services/media/media.service';
import { IVideo } from 'src/app/core/interfaces/video';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  video: IVideo;
  url: SafeUrl;
  questions = [];

  constructor(private mediaService: MediaService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.loadVideo();
  }

  loadVideo() {
    this.mediaService.getVideo().subscribe(d => {
      this.video = d;
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${d.data.url}`)
      this.questions.push(...d.data.questions);
    })
  }

}
