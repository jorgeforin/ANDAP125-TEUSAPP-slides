import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';


@Component({
  templateUrl: 'tabsall.html'
})
export class TabsallPage {

  tab4Root = AboutPage;
  tab5Root = AboutPage;
  tab6Root = AboutPage;
  tab7Root = AboutPage;

  constructor() {

  }
}