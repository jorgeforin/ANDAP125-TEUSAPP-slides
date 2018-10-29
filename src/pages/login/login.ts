import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs/Observable';
import { SignupPage } from '../signup/signup';
import { ResetPasswordPage } from '../reset-password/reset-password';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 * npm install @angular/firebase firebase
 */

//@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  myForm: FormGroup;
  user: Observable<firebase.User>;
  public loading:Loading;

  constructor(public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public afAuth: AngularFireAuth,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public navParams: NavParams) {

      this.myForm = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
      });
      this.user = afAuth.authState;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    // Your app login API web service call triggers 
    this.navCtrl.push(HomePage, {}, {animate: false});
    //this.navCtrl.push(HomePage);
  }  

  loginUser(){

    console.log("Email:" + this.myForm.value.email);
    console.log("Password:" + this.myForm.value.password);
   

    this.afAuth.auth.signInWithEmailAndPassword(this.myForm.value.email, this.myForm.value.password).then(() => {
      console.log("User logging");
      this.navCtrl.setRoot(HomePage);
    }, (err) => {
      this.loading.dismiss().then( () => {
        let alert = this.alertCtrl.create({
          message: err.message,
          buttons: [
            {
              text: "Ok",
              role: 'cancel'
            }
          ]
        });
        alert.present();
      });
    });

    this.loading = this.loadingCtrl.create({
      dismissOnPageChange: true,
    });
    this.loading.present();
  }

  goToSignup(){
    this.navCtrl.push(SignupPage);
  }

  goToResetPassword(){
    this.navCtrl.push(ResetPasswordPage);
  }

  signup(){
    this.navCtrl.push(SignupPage);
    }

}
