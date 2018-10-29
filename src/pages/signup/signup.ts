import { Component } from '@angular/core';
import { IonicPage, NavController,LoadingController, Loading, AlertController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  myForm: FormGroup;
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
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signup(){

    console.log("Email:" + this.myForm.value.email);
    console.log("Password:" + this.myForm.value.password);
   

    this.afAuth.auth.createUserWithEmailAndPassword(this.myForm.value.email, this.myForm.value.password)
    .then(
      res => {
        this.navCtrl.setRoot('HomePage');
      }, error => {
        this.loading.dismiss().then( () => {
          let alert = this.alertCtrl.create({
            message: error.message,
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

}


