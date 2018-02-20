import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { FastSurveyPage } from '../fast-survey/fast-survey';
import { FullSurveyPage } from '../full-survey/full-survey';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = FastSurveyPage;
  tab2Root = FullSurveyPage;
  constructor() {

  }
}
