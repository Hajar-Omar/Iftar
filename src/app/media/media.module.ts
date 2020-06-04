import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaRoutingModule } from './media-routing.module';
import { VideosComponent } from './videos/videos.component';
import { EventsComponent } from './events/events.component';
import { ParticipateComponent } from './participate/participate.component';
import { ElearningComponent } from './elearning/elearning.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [VideosComponent, EventsComponent, ParticipateComponent, ElearningComponent],
  imports: [
    CommonModule,
    MediaRoutingModule,
    SharedModule
  ]
})
export class MediaModule { }
