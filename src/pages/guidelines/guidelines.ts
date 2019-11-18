import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DbProvider} from "../../providers/db/db";
import {ErrorDisplayProvider} from "../../providers/error-display/error-display";
import {DiretrizesPorDeficienciaDaoProvider} from "../../providers/dao/diretrizes-por-deficiencia-dao";
import {DiretrizesPorDeficiencia} from "../../models/diretrizes-por-deficiencia";

/**
 * Generated class for the GuidelinesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-guidelines',
  templateUrl: 'guidelines.html',
})
export class GuidelinesPage {
  public diretrizesPorDeficiencia : Array<DiretrizesPorDeficiencia> = null;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public dbProvider : DbProvider,
    private errorDisplay : ErrorDisplayProvider,
    public diretrizPorDeficienciaDAO : DiretrizesPorDeficienciaDaoProvider
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GuidelinesPage');
  }

  ionViewDidEnter(){
    let dpdDAO = this.diretrizPorDeficienciaDAO = new DiretrizesPorDeficienciaDaoProvider(this.dbProvider, this.errorDisplay);
    this.diretrizesPorDeficiencia = dpdDAO.getAllNotIn();
  }

}
