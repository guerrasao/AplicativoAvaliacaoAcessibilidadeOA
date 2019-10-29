import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
//import {formattedError} from "@angular/compiler";
/*
  Generated class for the ErrorDisplayProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ErrorDisplayProvider {

  constructor(private alertCtrl: AlertController) {

  }

  presentAlertError(error : any) {
    // let alert = this.alertCtrl.create({
    //   title: 'Erro',
    //   subTitle: formattedError(error).toString(),
    //   buttons: ['OK']
    // });
    // alert.present();
    alert(error);
  }

  presentAlert(titleAlert : string, content : any){
    let alert = this.alertCtrl.create({
      title: titleAlert,
      subTitle: content.toString(),
      buttons: ['OK']
    });
    alert.present();
    //alert(content);
  }

  presentAlertWarning(content : any){
    let alert = this.alertCtrl.create({
      title: 'Aviso',
      subTitle: content.toString(),
      buttons: ['OK']
    });
    alert.present();
    //alert(content);
  }
}
