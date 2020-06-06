import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideosComponent } from './videos/videos.component';
import { ElearningComponent } from './elearning/elearning.component';
import { EventsComponent } from './events/events.component';
import { ParticipateComponent } from './participate/participate.component';
import { AuthGuard } from '../core/guards/auth.guard';


const routes: Routes = [
  {
    path: 'elearning',
    component: ElearningComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'videos',
    component: VideosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'participate',
    component: ParticipateComponent
  },
  {
    path: 'events',
    component: EventsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MediaRoutingModule { }
