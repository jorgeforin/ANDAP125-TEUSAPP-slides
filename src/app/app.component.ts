import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';

import { HomePage } from '../pages/home/home';
import { Home2Page } from '../pages/home2/home2';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { WelcomePage } from '../pages/welcome/welcome';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { MapsPage } from '../pages/maps/maps';
import { TabsiniPage } from '../pages/tabsini/tabsini';
import { TabsallPage } from '../pages/tabsall/tabsall';
import { AboutPage } from '../pages/about/about';
import { VideoPage } from '../pages/video/video';
import { RegisterbiciPage } from '../pages/registerbici/registerbici';
import { RegisterviolationPage } from '../pages/registerviolation/registerviolation';
import { ContactPage } from '../pages/contact/contact';

//import { MapPage } from '../pages/map/map';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = TabsiniPage;
  //rootPage: any = WelcomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Inicio', component: HomePage },
      { title: 'Normas de Tránsito', component: VideoPage },
      { title: 'Registrar una bici', component: RegisterbiciPage },
      { title: 'Mi Ruta', component: MapsPage },
      { title: 'Registrar una infracción', component: RegisterviolationPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}
