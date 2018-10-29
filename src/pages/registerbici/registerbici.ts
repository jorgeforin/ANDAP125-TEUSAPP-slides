import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the RegisterbiciPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-registerbici',
  templateUrl: 'registerbici.html',
})
export class RegisterbiciPage {

  myForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
    this.myForm = this.createMyForm();
  }

  saveData(){
    console.log(this.myForm.value);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterbiciPage');
  }

  private createMyForm(){
    return this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      dateBirth: ['', Validators.required],
      datosBici: this.formBuilder.group({
        serial: ['', Validators.required]
      }),
    });
  }
}
