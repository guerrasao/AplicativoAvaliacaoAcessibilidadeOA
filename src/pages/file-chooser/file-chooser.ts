import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Chooser } from '@ionic-native/chooser';

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
    this.chooser.getFile("application/epub+zip,application/vnd.openxmlformats-officedocument.wordprocessingml.document")
      .then(file => console.log(file ? file.name : 'canceled'))
      .catch((error: any) => console.error(error));

  }

}
