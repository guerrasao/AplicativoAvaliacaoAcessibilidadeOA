import { Injectable } from '@angular/core';
import {NavController, NavParams} from "ionic-angular";

/*
  Generated class for the NavigationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NavigationProvider {

  constructor() {
    console.log('Hello NavigationProvider Provider');
  }

  public pushPageNoParam(navCtrl: NavController, navParams: NavParams, page : any){
    return navCtrl.push(page);
  }

  public pushPageParams(navCtrl: NavController, navParams: NavParams, page : any, params : any = {}){
    return navCtrl.push(page,params);
  }

  public popPage(navCtrl: NavController, navParams: NavParams){
    return navCtrl.pop();
  }

  public popToRoot(navCtrl: NavController, navParams: NavParams){
    return navCtrl.popToRoot();
  }
}
