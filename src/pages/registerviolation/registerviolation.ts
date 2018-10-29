import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the RegisterviolationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-registerviolation',
  templateUrl: 'registerviolation.html',
})
export class RegisterviolationPage {
	
  image: string = null;
  myForm2: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, public formBuilder: FormBuilder) {
	  this.myForm2 = this.createMyForm();
  }

  saveData(){
    console.log(this.myForm2.value);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterviolationPage');
  }
  
    private createMyForm(){
    return this.formBuilder.group({
      comment: ['', Validators.required]
    });
  }
  
  getPicture(){
    let options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000,
      quality: 100
    }
    this.camera.getPicture( options )
    .then(imageData => {
      this.image = `data:image/jpeg;base64,${imageData}`; //this.image = 'data:image/jpeg;base64,${imageData}';
    })
    .catch(error =>{
      console.error( error );
    });
  }
}
