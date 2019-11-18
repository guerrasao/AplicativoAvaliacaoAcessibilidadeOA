import { Component } from '@angular/core';
import {LoadingController, NavController, NavParams} from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import {ErrorDisplayProvider} from "../../providers/error-display/error-display";
import {NavigationProvider} from "../../providers/navigation/navigation";
import {SeProvider} from "../../providers/se/se";
import {DbProvider} from "../../providers/db/db";
import {GeneralDaoProvider} from "../../providers/general-dao/general-dao";
// import {OaDaoProvider} from "../../providers/dao/oa-dao";
// import {RegraAtributoDaoProvider} from "../../providers/dao/regra-atributo-dao";
// import {AtributoDaoProvider} from "../../providers/dao/atributo-dao";
// import {MidiaDaoProvider} from "../../providers/dao/midia-dao";
// import {MidiaOaDaoProvider} from "../../providers/dao/midia-oa-dao";
import {DiretrizDaoProvider} from "../../providers/dao/diretriz-dao";
import {DiretrizDeficienciaDaoProvider} from "../../providers/dao/diretriz-deficiencia-dao";
import {DeficienciaDaoProvider} from "../../providers/dao/deficiencia-dao";
import {ResponseRuleModel} from "../../providers/se/ResponseRuleModel";
import {ApiServerProvider} from "../../providers/api-server/api-server";
// import {Diretriz} from "../../models/Diretriz";
// import {Diretriz_Deficiencia} from "../../models/Diretriz_Deficiencia";
import {Deficiencia} from "../../models/Deficiencia";
// import {Regra} from "../../models/Regra";
import {RegraDaoProvider} from "../../providers/dao/regra-dao";
import {DiretrizesPorDeficiencia} from "../../models/diretrizes-por-deficiencia";
import {DiretrizesPorDeficienciaDaoProvider} from "../../providers/dao/diretrizes-por-deficiencia-dao";

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
  public responseEvaluation : Array<ResponseRuleModel> = null;
  public regrasAvaliadas : Array<number> = new Array<number>();
  public cRegrasAvaliadas : number = 0;
  public cRegrasComErro : number = 0;
  public cRegrasSemErro : number = 0;
  public cRegrasNaoAvaliadas : number = 0;
  public regrasComErro : Array<number> = new Array<number>();
  public regrasComErroString : string = "";
  // public diretrizes : Array<Diretriz> = null;
  // public diretrizesDeficiencia : Array<Diretriz_Deficiencia> = null;
  public deficiencias : Array<Deficiencia> = null;
  // public regras : Array<Regra> = null;
  public diretrizesPorDeficienciaComErro : Array<DiretrizesPorDeficiencia> = null;
  public diretrizesPorDeficienciaSemErro : Array<DiretrizesPorDeficiencia> = null;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: HTTP,
    public loadingCtrl: LoadingController,
    public dbProvider : DbProvider,
    private errorDisplay : ErrorDisplayProvider,
    private seProvider : SeProvider,
    public generalDAO : GeneralDaoProvider,
    public apiServerProvider : ApiServerProvider,
    public diretrizPorDeficienciaDAO : DiretrizesPorDeficienciaDaoProvider,
    public diretrizPorDeficienciaDAO2 : DiretrizesPorDeficienciaDaoProvider,
    public regraDAO : RegraDaoProvider,
    // public oaDAO : OaDaoProvider,
    // public regraAtributoDAO : RegraAtributoDaoProvider,
    // public atributoDAO : AtributoDaoProvider,
    // public midiaDAO : MidiaDaoProvider,
    // public midiaOADAO : MidiaOaDaoProvider,
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

    this.http.uploadFile(this.apiServerProvider.url, {}, {}, this.hasFile.uri, 'file' ).then( resp => {
      //console.log(resp);
      loadingEnv.dismiss();
      if(resp.status == 200){
        // show loading
        let loadingAnalise = this.loadingCtrl.create({
          content: 'Resposta recebida, avaliando Objeto de Aprendizagem...'
        });
        loadingAnalise.present();
        // arquivo enviado e recebida a resposta do server
        //resp.data
        let se = this.seProvider = new SeProvider(
          this.errorDisplay,
          this.generalDAO,
          // this.oaDAO,
          // this.regraAtributoDAO,
          // this.atributoDAO,
          // this.midiaDAO,
          // this.midiaOADAO,
          // this.diretrizDAO,
          // this.diretrizDeficienciaDAO,
          // this.deficienciaDAO
        );
        this.responseEvaluation = se.avaliaJSON(resp.data, this.regrasAvaliadas);
        // informacoes do resumo
        for (let i = 0; i < this.regrasAvaliadas.length; i++){
          if(this.regrasAvaliadas[i] == 1){
            this.cRegrasComErro++;
            this.cRegrasAvaliadas++;
          }else{
            if(this.regrasAvaliadas[i] == 0){
              this.cRegrasSemErro++;
              this.cRegrasAvaliadas++;
            }else{
              if (this.regrasAvaliadas[i] == -1) {
                this.cRegrasNaoAvaliadas++;
              }
            }
          }
        }
        let dpdDAOComErro = this.diretrizPorDeficienciaDAO = new DiretrizesPorDeficienciaDaoProvider(this.dbProvider, this.errorDisplay);
        let dpdDAOSemErro = this.diretrizPorDeficienciaDAO2 = new DiretrizesPorDeficienciaDaoProvider(this.dbProvider, this.errorDisplay);
        for (let i = 0; i < this.responseEvaluation.length; i++){
          this.regrasComErro.push(this.responseEvaluation[i].idRegra);
        }
        this.regrasComErroString = this.arrayNumberToString(this.regrasComErro);
        this.diretrizesPorDeficienciaComErro = dpdDAOComErro.getAll(this.regrasComErroString);
        this.diretrizesPorDeficienciaSemErro = dpdDAOSemErro.getAllNot(this.regrasComErroString);
        loadingAnalise.dismiss();
      }else{
        this.errorDisplay.presentAlert('Erro', 'Arquivo foi recebido no servidor mas não foi possível extrair os parâmetros do OA.');
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

  public arrayNumberToString(a : Array<number>) : string{
    let resposta : string = "";
    for (let i = 0; i < a.length; i++){
      if(i != a.length-1) {
        resposta += a[i].toString() + ", ";
      }else{
        resposta += a[i].toString();
      }
    }
    return resposta;
  }
}
