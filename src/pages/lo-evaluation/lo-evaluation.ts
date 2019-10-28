import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NavigationProvider } from "../../providers/navigation/navigation";
import {FileChooserPage} from "../file-chooser/file-chooser";

/**
 * Generated class for the LoEvaluationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-lo-evaluation',
  templateUrl: 'lo-evaluation.html',
})
export class LoEvaluationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad LoEvaluationPage');
  }

  pushPageFileChooser(){
    let nav : NavigationProvider = new NavigationProvider();
    console.log(nav.pushPageNoParam(this.navCtrl, this.navParams, FileChooserPage));
  }
}
