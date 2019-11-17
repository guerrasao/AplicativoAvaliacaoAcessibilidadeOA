import { Component } from '@angular/core';
import {LoadingController, NavController, NavParams} from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import {ErrorDisplayProvider} from "../../providers/error-display/error-display";
import {NavigationProvider} from "../../providers/navigation/navigation";
import {SeProvider} from "../../providers/se/se";
import {DbProvider} from "../../providers/db/db";
import {GeneralDaoProvider} from "../../providers/general-dao/general-dao";
import {OaDaoProvider} from "../../providers/dao/oa-dao";
import {RegraAtributoDaoProvider} from "../../providers/dao/regra-atributo-dao";
import {AtributoDaoProvider} from "../../providers/dao/atributo-dao";
import {MidiaDaoProvider} from "../../providers/dao/midia-dao";
import {MidiaOaDaoProvider} from "../../providers/dao/midia-oa-dao";
import {DiretrizDaoProvider} from "../../providers/dao/diretriz-dao";
import {DiretrizDeficienciaDaoProvider} from "../../providers/dao/diretriz-deficiencia-dao";
import {DeficienciaDaoProvider} from "../../providers/dao/deficiencia-dao";

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
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: HTTP,
    public loadingCtrl: LoadingController,
    public dbProvider : DbProvider,
    private errorDisplay : ErrorDisplayProvider,
    private seProvider : SeProvider,
    public generalDAO : GeneralDaoProvider,
    public oaDAO : OaDaoProvider,
    public regraAtributoDAO : RegraAtributoDaoProvider,
    public atributoDAO : AtributoDaoProvider,
    public midiaDAO : MidiaDaoProvider,
    public midiaOADAO : MidiaOaDaoProvider,
    public diretrizDAO : DiretrizDaoProvider,
    public diretrizDeficienciaDAO : DiretrizDeficienciaDaoProvider,
    public deficienciaDAO : DeficienciaDaoProvider
  ) {
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
      this.hasFile = this.tmpFile;
    }

    // show loading
    let loadingEnv = this.loadingCtrl.create({
      content: 'Enviando arquivo ao servidor...'
    });

    loadingEnv.present();


    let nav : NavigationProvider = new NavigationProvider();

    this.http.uploadFile('http://192.168.0.111:3001/file/upload', {}, {}, this.hasFile.uri, 'file' ).then( resp => {
      //console.log(resp);
      loadingEnv.dismiss();
      if(resp.status == 200){
        // arquivo enviado e recebida a resposta do server
        //resp.data
        let se = this.seProvider = new SeProvider(
          this.errorDisplay,
          this.generalDAO,
          this.oaDAO,
          this.regraAtributoDAO,
          this.atributoDAO,
          this.midiaDAO,
          this.midiaOADAO,
          this.diretrizDAO,
          this.diretrizDeficienciaDAO,
          this.deficienciaDAO
        );
        se.avaliaJSON(resp.data);
      }
    }).catch(error => {
      loadingEnv.dismiss();
      console.error(error);
      if(error.status == -1){
        if((error.error.toString().indexOf('Failed to connect to')) != -1){
          this.errorDisplay.presentAlert('Erro: ','Não foi possível conectar-se ao servidor. Tente novamente mais tarde!');
        }else{
          this.errorDisplay.presentAlert('Erro: ', error.error.toString());
        }
      }
      // popPage
      console.log(nav.popPage(this.navCtrl, this.navParams));
    });
  }

}
