import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DbProvider} from "../../providers/db/db";

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public dbprovider : DbProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

  public deleteDB(){
    this.dbprovider.dbConection.close();
    this.dbprovider.deleteDB();
  }

}
