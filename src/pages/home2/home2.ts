import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavParams, LoadingController, Loading, AlertController } from 'ionic-angular';
import { NavController, Tabs } from 'ionic-angular';
import { Nav, Platform } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { WelcomePage } from '../welcome/welcome';

@Component({
  selector: 'page-home2',
  templateUrl: 'home2.html'
})

//  document.querySelector('Inittabs')['style'].display = 'none';

export class Home2Page {
  @ViewChild('myTabs') tabRef: Tabs;
  public hideTabs:boolean = true;

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
