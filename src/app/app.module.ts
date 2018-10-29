import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Geolocation, Geoposition } from '@ionic-native/geolocation'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Home2Page } from '../pages/home2/home2';
import { ListPage } from '../pages/list/list';
import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { MapsPage } from '../pages/maps/maps';
import { TabsiniPage } from '../pages/tabsini/tabsini';
import { TabsallPage } from '../pages/tabsall/tabsall';
import { AboutPage } from '../pages/about/about';
import { VideoPage } from '../pages/video/video';
import {YoutubePipe} from '../pipes/youtube/youtube';
import {SpinnerPipe} from '../pipes/spinner/spinner';
import { RegisterbiciPage } from '../pages/registerbici/registerbici';
import { RegisterviolationPage } from '../pages/registerviolation/registerviolation';
import { ContactPage } from '../pages/contact/contact';

//import { MapPage } from '../pages/map/map';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { GoogleMaps } from '@ionic-native/google-maps';
import { HttpModule} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Camera } from '@ionic-native/camera';


export const firebaseConfig = {
  apiKey: "AIzaSyCQmMXZ1VxD8HxaE4aRvLL43Eza6dzMK6M",
  authDomain: "pideya-e16ab.firebaseapp.com",
  databaseURL: "https://pideya-e16ab.firebaseio.com",
  projectId: "pideya-e16ab",
  storageBucket: "pideya-e16ab.appspot.com",
  messagingSenderId: "1022015182096"
};

//npm install @ionic-native/core
//npm install @ionic-native/google-maps

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    WelcomePage,
    LoginPage,
    SignupPage,
    ResetPasswordPage,
    MapsPage,
    TabsiniPage,
    TabsallPage,
    AboutPage,
    Home2Page,
    VideoPage,
    YoutubePipe,
    RegisterbiciPage,
    RegisterviolationPage,
    [YoutubePipe,
    SpinnerPipe],
	ContactPage
  ],
  exports: [YoutubePipe,
    SpinnerPipe],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    [],
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    WelcomePage,
    LoginPage,
    SignupPage,
    ResetPasswordPage,
    MapsPage,
    TabsiniPage,
    TabsallPage,
    AboutPage,
    Home2Page,
    VideoPage,
    RegisterbiciPage,
    RegisterviolationPage,
	ContactPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    HttpClient,
    Geolocation,
	Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
export class PipesModule {}
