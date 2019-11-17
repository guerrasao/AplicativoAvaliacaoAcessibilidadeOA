import { Injectable } from '@angular/core';
import { Data } from "./Data";
import {ErrorDisplayProvider} from "../error-display/error-display";
import {GeneralDaoProvider} from "../general-dao/general-dao";
import {ResponseRuleModel} from "./ResponseRuleModel";
// import {OaDaoProvider} from "../dao/oa-dao";
// import {OA} from "../../models/OA";
// import {Regra_Atributo} from "../../models/Regra_Atributo";
// import {RegraAtributoDaoProvider} from "../dao/regra-atributo-dao";
// import {Atributo} from "../../models/Atributo";
// import {AtributoDaoProvider} from "../dao/atributo-dao";
// import {Midia} from "../../models/Midia";
// import {MidiaDaoProvider} from "../dao/midia-dao";
// import {Midia_OA} from "../../models/Midia_OA";
// import {MidiaOaDaoProvider} from "../dao/midia-oa-dao";
// import {Diretriz} from "../../models/Diretriz";
// import {DiretrizDaoProvider} from "../dao/diretriz-dao";
// import {DiretrizDeficienciaDaoProvider} from "../dao/diretriz-deficiencia-dao";
// import {DeficienciaDaoProvider} from "../dao/deficiencia-dao";
// import {Diretriz_Deficiencia} from "../../models/Diretriz_Deficiencia";
// import {Deficiencia} from "../../models/Deficiencia";

/*
  Generated class for the SeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SeProvider {
  private data : Data = new Data();
  public response : Array<ResponseRuleModel> = new Array<ResponseRuleModel>();
  constructor(
    private errorDisplay : ErrorDisplayProvider,
    private generalDAO : GeneralDaoProvider,

    // vars only used in tests
    // private oaDAO : OaDaoProvider,
    // private regraAtributoDAO : RegraAtributoDaoProvider,
    // private atributoDAO : AtributoDaoProvider,
    // private midiaDAO : MidiaDaoProvider,
    // private midiaOADAO : MidiaOaDaoProvider,
    // private diretrizDAO : DiretrizDaoProvider,
    // private diretrizDeficienciaDAO : DiretrizDeficienciaDaoProvider,
    // private deficienciaDAO : DeficienciaDaoProvider
    ) {
    console.log('Hello SeProvider Provider');
  }

  private rule0(idRegra : number): boolean{
    //[0, 12, 'Verificar contraste entre o texto e a cor de fundo', ''],

    return false;
  }

  private rule1(idRegra : number): boolean{
    //[1, 21, 'Verificar se existem cabeçalhos identificados como títulos, verificação da existência de ao menos uma vez palavra título ou title no atributo titulo dos textos', ''],
    let conteudoComErro : Array<string> = new Array<string>();
    for (let i = 0; i < this.data.textos.length; i++){
      if(this.data.textos[i].titulo.indexOf("título") < 0 &&
        this.data.textos[i].titulo.indexOf("titulo") < 0 &&
        this.data.textos[i].titulo.indexOf("title") < 0
      ){
        conteudoComErro.push(this.data.textos[i].textoLinha);
      }
    }
    if(conteudoComErro.length > 0){
      this.response.push(
        new ResponseRuleModel(
          idRegra,
          conteudoComErro
        )
      );
      return true;
    }
    return false;
  }

  private rule2(idRegra : number): boolean{
    //[2, 29, 'Verificar se o texto não está com alinhamento justificado ou centralizado', ''],
    let conteudoComErro : Array<string> = new Array<string>();
    for (let i = 0; i < this.data.textos.length; i++){
      if(this.data.textos[i].alinhamentoTexto == "justify" ||  this.data.textos[i].alinhamentoTexto == "center"){
        conteudoComErro.push(this.data.textos[i].textoLinha);
      }
    }
    if(conteudoComErro.length > 0){
      this.response.push(
        new ResponseRuleModel(
          idRegra,
          conteudoComErro
        )
      );
      return true;
    }
    return false;
  }

  private rule3(idRegra : number): boolean{
    // [3, 33, 'Verificar se imagens possuem titulo e descrição alternativa', ''],
    let conteudoComErro : Array<string> = new Array<string>();
    for (let i = 0; i < this.data.imagens.length; i++){
      if(this.data.imagens[i].tituloAlt == "" ||  this.data.imagens[i].descricaoAlt == ""){
        conteudoComErro.push("imagem "+this.data.imagens[i].idImagem);
      }
    }
    if(conteudoComErro.length > 0){
      this.response.push(
        new ResponseRuleModel(
          idRegra,
          conteudoComErro
        )
      );
      return true;
    }
    return false;
  }

  private rule4(idRegra : number): boolean{
    // [4, 34, 'Verificar se a tabela possui título', ''],
    let conteudoComErro : Array<string> = new Array<string>();
    for (let i = 0; i < this.data.tabelas.length; i++){
      if(this.data.tabelas[i].tituloAlt == ""){
        conteudoComErro.push("tabela "+this.data.tabelas[i].idTabela);
      }
    }
    if(conteudoComErro.length > 0){
      this.response.push(
        new ResponseRuleModel(
          idRegra,
          conteudoComErro
        )
      );
      return true;
    }
    return false;
  }

  private rule5(idRegra : number): boolean{
    //[5, 36, 'Verificar se a tabela possui descrição alternativa', ''],
    let conteudoComErro : Array<string> = new Array<string>();
    for (let i = 0; i < this.data.tabelas.length; i++){
      if(this.data.tabelas[i].descricaoAlt == ""){
        conteudoComErro.push("tabela "+this.data.tabelas[i].idTabela);
      }
    }
    if(conteudoComErro.length > 0){
      this.response.push(
        new ResponseRuleModel(
          idRegra,
          conteudoComErro
        )
      );
      return true;
    }
    return false;
  }

  private rule6(idRegra : number): boolean{
    //[6, 41, 'Verificar se o vídeo possui título', ''],
    let conteudoComErro : Array<string> = new Array<string>();
    for (let i = 0; i < this.data.videos.length; i++){
      if(this.data.videos[i].tituloAlt == ""){
        conteudoComErro.push("video "+this.data.videos[i].idVideo);
      }
    }
    if(conteudoComErro.length > 0){
      this.response.push(
        new ResponseRuleModel(
          idRegra,
          conteudoComErro
        )
      );
      return true;
    }
    return false;
  }

  private rule7(idRegra : number): boolean{
    //[7, 43, 'Verificar se o vídeo possui descrição alternativa', ''],
    let conteudoComErro : Array<string> = new Array<string>();
    for (let i = 0; i < this.data.videos.length; i++){
      if(this.data.videos[i].descricaoAlt == ""){
        conteudoComErro.push("video "+this.data.videos[i].idVideo);
      }
    }
    if(conteudoComErro.length > 0){
      this.response.push(
        new ResponseRuleModel(
          idRegra,
          conteudoComErro
        )
      );
      return true;
    }
    return false;
  }

  private rule8(idRegra : number): boolean{
    //[8, 46, 'Verificar se o gráfico possui descrição alternativa', ''],
    let conteudoComErro : Array<string> = new Array<string>();
    for (let i = 0; i < this.data.graficos.length; i++){
      if(this.data.graficos[i].descricaoAlt == ""){
        conteudoComErro.push("grafico "+this.data.graficos[i].idGrafico);
      }
    }
    if(conteudoComErro.length > 0){
      this.response.push(
        new ResponseRuleModel(
          idRegra,
          conteudoComErro
        )
      );
      return true;
    }
    return false;
  }

  private rule9(idRegra : number): boolean{
    //[9, 47, 'Verificar se o gráfico possui um sumário no título, verificação da existência da palavra sumário', ''],
    let conteudoComErro : Array<string> = new Array<string>();
    for (let i = 0; i < this.data.graficos.length; i++){
      if(this.data.graficos[i].tituloAlt.indexOf("sumário") < 0 &&
        this.data.graficos[i].tituloAlt.indexOf("sumario") < 0 &&
        this.data.graficos[i].tituloAlt.indexOf("sumary") < 0
      ){
        conteudoComErro.push("grafico "+this.data.graficos[i].idGrafico);
      }
    }
    if(conteudoComErro.length > 0){
      this.response.push(
        new ResponseRuleModel(
          idRegra,
          conteudoComErro
        )
      );
      return true;
    }
    return false;
  }

  private rule10(idRegra : number): boolean{
    //[10, 49, 'Verificar se o áudio possui uma legenda', '']
    let conteudoComErro : Array<string> = new Array<string>();
    for (let i = 0; i < this.data.audios.length; i++){
      if(this.data.audios[i].legenda == ""){
        conteudoComErro.push("audio "+this.data.audios[i].idAudio);
      }
    }
    if(conteudoComErro.length > 0){
      this.response.push(
        new ResponseRuleModel(
          idRegra,
          conteudoComErro
        )
      );
      return true;
    }
    return false;
  }

  public avaliaJSON(data : any){
    // API JSON response to temporary structure
    let dataTemp = JSON.parse(data);
    // temporary structure to Array type of Data
    this.data.inserirDadosDocumento(dataTemp.caminho, dataTemp.tipo, dataTemp.corDeFundo, dataTemp.themeColor, dataTemp.themeShade);
    for (let i = 0; i < dataTemp.textos.length; i++){
      this.data.inserirTextos(
        dataTemp.textos[i].seguencia,
        dataTemp.textos[i].idLinha,
        dataTemp.textos[i].textoLinha,
        dataTemp.textos[i].qtdCaracteresLinha,
        dataTemp.textos[i].corDaFonte,
        dataTemp.textos[i].tamanhoDaFonte,
        dataTemp.textos[i].tipoDaFonte,
        dataTemp.textos[i].corDeFundo,
        dataTemp.textos[i].titulo,
        dataTemp.textos[i].alinhamentoTexto,
        dataTemp.textos[i].tagEpub
      );
    }
    for (let i = 0; i < dataTemp.imagens.length; i++){
      this.data.inserirImagens(
        dataTemp.imagens[i].seguencia,
        dataTemp.imagens[i].idImagem,
        dataTemp.imagens[i].nome,
        dataTemp.imagens[i].tituloAlt,
        dataTemp.imagens[i].descricaoAlt,
        dataTemp.imagens[i].legenda,
        dataTemp.imagens[i].src,
        dataTemp.imagens[i].arquivo
      );
    }
    for (let i = 0; i < dataTemp.tabelas.length; i++) {
      this.data.inserirTabelas(
        dataTemp.tabelas[i].seguencia,
        dataTemp.tabelas[i].idTabela,
        dataTemp.tabelas[i].estilo,
        dataTemp.tabelas[i].tituloAlt,
        dataTemp.tabelas[i].descricaoAlt,
        dataTemp.tabelas[i].legenda
      );
    }
    for (let i = 0; i < dataTemp.videos.length; i++) {
      this.data.inserirVideos(
        dataTemp.videos[i].seguencia,
        dataTemp.videos[i].idVideo,
        dataTemp.videos[i].tituloAlt,
        dataTemp.videos[i].descricaoAlt,
        dataTemp.videos[i].nome,
        dataTemp.videos[i].linkVideo,
        dataTemp.videos[i].legenda
      );
    }
    for (let i = 0; i < dataTemp.graficos.length; i++) {
      this.data.inserirGraficos(
        dataTemp.graficos[i].seguencia,
        dataTemp.graficos[i].idGrafico,
        dataTemp.graficos[i].estilo,
        dataTemp.graficos[i].tituloAlt,
        dataTemp.graficos[i].descricaoAlt,
        dataTemp.graficos[i].nome,
        dataTemp.graficos[i].legenda
      );
    }
    for (let i = 0; i < dataTemp.audios.length; i++) {
      this.data.inserirAudios(
        dataTemp.audios[i].seguencia,
        dataTemp.audios[i].idAudio,
        dataTemp.audios[i].descricaoCompleta,
        dataTemp.audios[i].legenda
      );
    }

    console.log(this.data);
    let sql = 'select * from Regra ' +
      'inner join Regra_Atributo on Regra.idRegra = Regra_Atributo.idRegra ' +
      'inner join Atributo on Atributo.idAtributo = Regra_atributo.idAtributo ' +
      'where idMidia in ' +
      '(select Midia.idMidia from Midia,Midia_OA where Midia.idMidia = Midia_OA.idMidia and Midia_OA.idOA in ' +
      '     (select idOA from OA where formatoOA = "'+this.data.tipo+'"));';

    let respos : Array<any> = this.generalDAO.getAll(sql);
    console.log(respos);

    // db validate:
    // let resultOA : Array<OA> = this.oaDAO.getAll();
    // console.log(resultOA);
    // let resultRegra_atributo : Array<Regra_Atributo> = this.regraAtributoDAO.getAll();
    // console.log(resultRegra_atributo);
    // let resultAtributo : Array<Atributo> = this.atributoDAO.getAll();
    // console.log(resultAtributo);
    // let resultMidia : Array<Midia> = this.midiaDAO.getAll();
    // console.log(resultMidia);
    // let resultMidiaOA : Array<Midia_OA> = this.midiaOADAO.getAll();
    // console.log(resultMidiaOA);
    // let resultDiretriz : Array<Diretriz> = this.diretrizDAO.getAll();
    // console.log(resultDiretriz);
    // let resultDiretrizDeficiencia : Array<Diretriz_Deficiencia> = this.diretrizDeficienciaDAO.getAll();
    // console.log(resultDiretrizDeficiencia);
    // let resultDeficiencia : Array<Deficiencia> = this.deficienciaDAO.getAll();
    // console.log(resultDeficiencia);

  }


}
