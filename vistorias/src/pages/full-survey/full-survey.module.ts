import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FullSurveyPage } from './full-survey';

@NgModule({
  declarations: [
    FullSurveyPage,
  ],
  imports: [
    IonicPageModule.forChild(FullSurveyPage),
  ],
  exports: [
    FullSurveyPage
  ]
})
export class FullSurveyPageModule {}
