import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ValidateFileExtensionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-validate-file-extension',
  templateUrl: 'validate-file-extension.html',
})
export class ValidateFileExtensionPage {
  public erro : any;
  public tmpFile : any;
  public hasErro : any;
  public hasFile : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //console.log('ionViewDidLoad ValidateFileExtensionPage');

  }

  ionViewDidLoad() {

  }

  ionViewDidEnter(){
    this.erro = this.navParams.get("errorr");
    this.tmpFile = this.navParams.get("tempFile");
    if(this.erro != null) {
      this.hasErro = this.erro.toString();
    }
    if(this.tmpFile != null){
      this.hasFile = this.tmpFile.name;
    }
  }

}
