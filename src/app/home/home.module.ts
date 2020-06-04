import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ContainerComponent } from './container/container.component';
import { AuthModule } from '../auth/auth.module';


@NgModule({
  declarations: [ContainerComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    AuthModule
  ]
})
export class HomeModule { }
