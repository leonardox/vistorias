import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FastSurveyPage } from './fast-survey';

@NgModule({
  declarations: [
    FastSurveyPage,
  ],
  imports: [
    IonicPageModule.forChild(FastSurveyPage),
  ],
  exports: [
    FastSurveyPage
  ]
})
export class FastSurveyPageModule {}
