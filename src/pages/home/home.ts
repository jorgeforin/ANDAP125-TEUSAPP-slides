import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavParams, LoadingController, Loading, AlertController } from 'ionic-angular';
import { NavController, Tabs } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';
import { Nav, Platform } from 'ionic-angular';
import { TabsallPage } from '../tabsall/tabsall';
import { AboutPage } from '../about/about';
import { Home2Page } from '../home2/home2';
import { AngularFireAuth } from '@angular/fire/auth';
import { VideoPage } from '../video/video';
import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  //@ViewChild('myTabs') tabRef: Tabs;

  //rootPage: any = TabsallPage;
  //public hideTabs:boolean = true;

  tab4Root = Home2Page;
  tab5Root = AboutPage;
  tab6Root = ContactPage;  
  tab7Root = VideoPage;

  constructor(public navCtrl: NavController,public afAuth: AngularFireAuth) {
    //document.getElementById("tabsini").style.display="None"; 
  }  

  logout(){
    this.afAuth.auth.signOut();
    document.getElementById("tabs").style.display="None";
    this.navCtrl.push(WelcomePage);
     //this.navCtrl.setroot(WelcomePage);
    }
}

//ionic generate page maps blank