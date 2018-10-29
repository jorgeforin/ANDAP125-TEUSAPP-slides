import { Component } from '@angular/core';

import { WelcomePage } from '../welcome/welcome';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';

@Component({
  templateUrl: 'tabsini.html'
})
export class TabsiniPage {

  public hideTabs:boolean = false;

  tab1Root = WelcomePage;
  tab2Root = LoginPage;
  tab3Root = SignupPage;

  constructor() {

  }
}
