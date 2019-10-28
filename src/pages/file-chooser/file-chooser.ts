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

  constructor(public navCtrl: NavController, public navParams: NavParams, private chooser: Chooser) {
  }

  ionViewDidLoad() {

  }

  openFileChooser(){
    let nav = new NavigationProvider();
    let tmpFile : any = undefined;
    let erro : any = undefined;

    this.chooser.getFile("application/epub+zip,application/vnd.openxmlformats-officedocument.wordprocessingml.document")
      .then(file => tmpFile = file)
      .catch((error: any) => erro = error);

    if(erro != undefined){
      nav.pushPageParams(this.navCtrl, this.navParams, ValidateFileExtensionPage, {erro, undefined});
    }else{
      nav.pushPageParams(this.navCtrl, this.navParams, ValidateFileExtensionPage, {undefined, tmpFile});
    }
  }

}
