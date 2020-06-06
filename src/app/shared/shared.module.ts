import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MainCointainerComponent } from '../core/components/main-cointainer/main-cointainer.component';
import { QuestionsComponent } from '../core/components/questions/questions.component';

@NgModule({
  declarations: [
    MainCointainerComponent,
    QuestionsComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    MainCointainerComponent,
    QuestionsComponent
  ]
})
export class SharedModule { }
