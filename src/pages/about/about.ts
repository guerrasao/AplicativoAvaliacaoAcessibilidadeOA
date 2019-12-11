import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DbProvider} from "../../providers/db/db";
import {ErrorDisplayProvider} from "../../providers/error-display/error-display";
import { ScreenOrientation } from '@ionic-native/screen-orientation';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public dbprovider : DbProvider, private errorDisplay : ErrorDisplayProvider, private screenOrientation: ScreenOrientation) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
    this.screenOrientation.lock('portrait');
  }

  public deleteDB(){
    this.dbprovider.dbConection.close();
    this.dbprovider.deleteDB().then(() => {
      this.errorDisplay.presentAlert('Aviso','Limpeza do BD concluida, feche completamente o aplicativo e ao inicia-lo novamente o BD será restaurado.');
    });
  }

}
