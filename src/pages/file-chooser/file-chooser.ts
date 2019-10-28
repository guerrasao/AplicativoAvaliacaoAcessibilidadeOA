import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Chooser } from '@ionic-native/chooser';
import { NavigationProvider } from "../../providers/navigation/navigation";
import {ValidateFileExtensionPage} from "../validate-file-extension/validate-file-extension";

/**
 * Generated class for the FileChooserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-file-chooser',
  templateUrl: 'file-chooser.html',
})
export class FileChooserPage {
  public nav = new NavigationProvider();
  public tmpFile : any = null;
  public errorr : any = null;
  constructor(public navCtrl: NavController, public navParams: NavParams, private chooser: Chooser) {
  }

  ionViewDidLoad() {

  }

  openFileChooser(){
    this.chooser.getFile("application/epub+zip,application/vnd.openxmlformats-officedocument.wordprocessingml.document")
      .then(file => this.tmpFile = file)
      .catch((error: any) => this.errorr = error);
  }

  nextPage(){
    if(this.errorr != null){
      this.nav.pushPageParams(this.navCtrl, this.navParams, ValidateFileExtensionPage, {errorr : this.errorr, tempFile : null});
    }else{
      this.nav.pushPageParams(this.navCtrl, this.navParams, ValidateFileExtensionPage, {errorr : null, tempFile : this.tmpFile});
    }
  }

}
