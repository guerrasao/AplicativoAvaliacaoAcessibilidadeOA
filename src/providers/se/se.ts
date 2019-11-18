import { Injectable } from '@angular/core';
import { Data } from "./Data";
import {ErrorDisplayProvider} from "../error-display/error-display";
import {GeneralDaoProvider} from "../general-dao/general-dao";
import {ResponseRuleModel} from "./ResponseRuleModel";
import * as getContrast from "get-contrast/index.js"
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
  public regrasAvaliadas : Array<number> = null;
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

  private rule0(idRegra : number): number{
    //[0, 12, 'Verificar contraste entre o texto e a cor de fundo', ''],
    //verificando apenas em docx devido ao epub possuir campos em branco em relação as cores
    // res pode receber: -1 = nao avaliado, 0 nao foram encontrados erros, e 1 foram encontrados
    let res = -1;
    if(this.data.tipo != "epub") {
      let conteudoComErro: Array<string> = new Array<string>();
      for (let i = 0; i < this.data.textos.length; i++) {
        var corTexto = this.data.textos[i].corDaFonte;
        var corFundoTexto = this.data.textos[i].corDeFundo;
        var corFundoOA = '#'.concat(this.data.corDeFundo);
        if (corFundoTexto == "transparent") {
          corFundoTexto = corFundoOA;
        }
        // verificando se nao estao faltando os campos
        if(corTexto != "" && corFundoTexto != "") {
          var contrast = getContrast.isAccessible('#'.concat(corTexto), corFundoTexto);
          if (contrast == false) {
            conteudoComErro.push(this.data.textos[i].textoLinha);
          }
        }
        res = 0;
      }
      if (conteudoComErro.length > 0) {
        this.response.push(
          new ResponseRuleModel(
            idRegra,
            conteudoComErro
          )
        );
        res = 1;
      }
    }
    return res;
  }

  private rule1(idRegra : number): number{
    //[1, 21, 'Verificar se existem cabeçalhos identificados como títulos, verificação da existência de ao menos uma vez palavra título ou title no atributo titulo dos textos', ''],
    let res = -1;
    let conteudoComErro: Array<string> = new Array<string>();
    let titles: number = 0;
    if(this.data.tipo == "docx") {
      for (let i = 0; i < this.data.textos.length; i++) {
        if(this.data.textos[i].titulo != null){
          if (this.data.textos[i].titulo.indexOf("título") >= 0 ||
            this.data.textos[i].titulo.indexOf("titulo") >= 0 ||
            this.data.textos[i].titulo.indexOf("title") >= 0 ||
            this.data.textos[i].titulo.indexOf("Ttulo") >= 0 ||
            this.data.textos[i].titulo.indexOf("ttulo") >= 0
          ) {
            titles++;
          }
        }
        res = 0;
      }
    }else {
      if (this.data.tipo == "epub") {
        for (let i = 0; i < this.data.textos.length; i++) {
          if(this.data.textos[i].tagEpub != null) {
            if (this.data.textos[i].tagEpub.indexOf("h") >= 0) {
              titles++;
            }
          }
          res = 0;
        }
      }
    }
    if (titles == 0) {
      conteudoComErro.push("Não foi encontrado nenhum título no OA.");
    }
    if (conteudoComErro.length > 0) {
      this.response.push(
        new ResponseRuleModel(
          idRegra,
          conteudoComErro
        )
      );
      res = 1;
    }
    return res;
  }

  private rule2(idRegra : number): number{
    //[2, 29, 'Verificar se o texto não está com alinhamento justificado ou centralizado', ''],
    let res = -1;
    let conteudoComErro : Array<string> = new Array<string>();
    for (let i = 0; i < this.data.textos.length; i++){
      if(this.data.textos[i].alinhamentoTexto != null) {
        if (this.data.textos[i].alinhamentoTexto == "justify" || this.data.textos[i].alinhamentoTexto == "center") {
          conteudoComErro.push(this.data.textos[i].textoLinha);
        }
      }
      res = 0;
    }
    if(conteudoComErro.length > 0){
      this.response.push(
        new ResponseRuleModel(
          idRegra,
          conteudoComErro
        )
      );
      res = 1;
    }
    return res;
  }

  private rule3(idRegra : number): number{
    // [3, 33, 'Verificar se imagens possuem titulo e/ou descrição alternativa', ''],
    let res = -1;
    let conteudoComErro : Array<string> = new Array<string>();
    for (let i = 0; i < this.data.imagens.length; i++){
      if(this.data.imagens[i].tituloAlt != null) {
        if (this.data.imagens[i].tituloAlt == "" || this.data.imagens[i].descricaoAlt == "") {
          conteudoComErro.push("imagem " + this.data.imagens[i].idImagem);
        }
      }
      res = 0;
    }
    if(conteudoComErro.length > 0){
      this.response.push(
        new ResponseRuleModel(
          idRegra,
          conteudoComErro
        )
      );
      res = 1;
    }
    return res;
  }

  private rule4(idRegra : number): number{
    // [4, 34, 'Verificar se a tabela possui título', ''],
    let res = -1;
    let conteudoComErro : Array<string> = new Array<string>();
    for (let i = 0; i < this.data.tabelas.length; i++){
      if(this.data.tabelas[i].tituloAlt != null) {
        if (this.data.tabelas[i].tituloAlt == "") {
          conteudoComErro.push("tabela " + this.data.tabelas[i].idTabela);
        }
      }
      res = 0;
    }
    if(conteudoComErro.length > 0){
      this.response.push(
        new ResponseRuleModel(
          idRegra,
          conteudoComErro
        )
      );
      res = 1;
    }
    return res;
  }

  private rule5(idRegra : number): number{
    //[5, 36, 'Verificar se a tabela possui descrição alternativa', ''],
    let res = -1;
    let conteudoComErro : Array<string> = new Array<string>();
    for (let i = 0; i < this.data.tabelas.length; i++){
      if(this.data.tabelas[i].descricaoAlt != null) {
        if (this.data.tabelas[i].descricaoAlt == "") {
          conteudoComErro.push("tabela " + this.data.tabelas[i].idTabela);
        }
      }
      res = 0;
    }
    if(conteudoComErro.length > 0){
      this.response.push(
        new ResponseRuleModel(
          idRegra,
          conteudoComErro
        )
      );
      res = 1;
    }
    return res;
  }

  private rule6(idRegra : number): number{
    //[6, 41, 'Verificar se o vídeo possui título', ''],
    let conteudoComErro : Array<string> = new Array<string>();
    let res = -1;
    for (let i = 0; i < this.data.videos.length; i++){
      if(this.data.videos[i].tituloAlt != null) {
        if (this.data.videos[i].tituloAlt == "") {
          conteudoComErro.push("video " + this.data.videos[i].idVideo);
        }
      }
      res = 0;
    }
    if(conteudoComErro.length > 0){
      this.response.push(
        new ResponseRuleModel(
          idRegra,
          conteudoComErro
        )
      );
      res = 1;
    }
    return res;
  }

  private rule7(idRegra : number): number{
    //[7, 43, 'Verificar se o vídeo possui descrição alternativa', ''],
    let res = -1;
    let conteudoComErro : Array<string> = new Array<string>();
    for (let i = 0; i < this.data.videos.length; i++){
      if(this.data.videos[i].descricaoAlt != null) {
        if (this.data.videos[i].descricaoAlt == "") {
          conteudoComErro.push("video " + this.data.videos[i].idVideo);
        }
      }
      res = 0;
    }
    if(conteudoComErro.length > 0){
      this.response.push(
        new ResponseRuleModel(
          idRegra,
          conteudoComErro
        )
      );
      res = 1
    }
    return res;
  }

  private rule8(idRegra : number): number{
    //[8, 46, 'Verificar se o gráfico possui descrição alternativa', ''],
    let res = -1;
    let conteudoComErro : Array<string> = new Array<string>();
    for (let i = 0; i < this.data.graficos.length; i++){
      if(this.data.graficos[i].descricaoAlt == ""){
        conteudoComErro.push("grafico "+this.data.graficos[i].idGrafico);
      }
      res = 0;
    }
    if(conteudoComErro.length > 0){
      this.response.push(
        new ResponseRuleModel(
          idRegra,
          conteudoComErro
        )
      );
      res = 1
    }
    return res;
  }

  private rule9(idRegra : number): number{
    //[9, 47, 'Verificar se o gráfico possui um sumário no título, verificação da existência da palavra sumário', ''],
    let res = -1;
    let conteudoComErro : Array<string> = new Array<string>();
    for (let i = 0; i < this.data.graficos.length; i++){
      if(this.data.graficos[i].tituloAlt != null) {
        if (this.data.graficos[i].tituloAlt.indexOf("sumário") < 0 &&
          this.data.graficos[i].tituloAlt.indexOf("sumario") < 0 &&
          this.data.graficos[i].tituloAlt.indexOf("sumary") < 0
        ) {
          conteudoComErro.push("grafico " + this.data.graficos[i].idGrafico);
        }
      }
      res = 0;
    }
    if(conteudoComErro.length > 0){
      this.response.push(
        new ResponseRuleModel(
          idRegra,
          conteudoComErro
        )
      );
      res = 1
    }
    return res;
  }

  private rule10(idRegra : number): number{
    //[10, 49, 'Verificar se o áudio possui uma legenda', '']
    let res = -1;
    let conteudoComErro : Array<string> = new Array<string>();
    for (let i = 0; i < this.data.audios.length; i++){
      if(this.data.audios[i].legenda != null) {
        if (this.data.audios[i].legenda == "") {
          conteudoComErro.push("audio " + this.data.audios[i].idAudio);
        }
      }
      res = 0;
    }
    if(conteudoComErro.length > 0){
      this.response.push(
        new ResponseRuleModel(
          idRegra,
          conteudoComErro
        )
      );
      res = 1
    }
    return res;
  }

  public avaliaJSON(data : any, regrasAvaliadas : Array<number>){
    // API JSON response to temporary structure
    let dataTemp = JSON.parse(data);
    this.regrasAvaliadas = regrasAvaliadas;
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
    // let sql = 'select * from Regra ' +
    //   'inner join Regra_Atributo on Regra.idRegra = Regra_Atributo.idRegra ' +
    //   'inner join Atributo on Atributo.idAtributo = Regra_atributo.idAtributo ' +
    //   'where idMidia in ' +
    //   '(select Midia.idMidia from Midia,Midia_OA where Midia.idMidia = Midia_OA.idMidia and Midia_OA.idOA in ' +
    //   '     (select idOA from OA where formatoOA = "'+this.data.tipo+'"));';
    //
    // let respos : Array<any> = this.generalDAO.getAll(sql);
    // console.log(respos);

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

    this.regrasAvaliadas.push(this.rule0(0));
    this.regrasAvaliadas.push(this.rule1(1));
    this.regrasAvaliadas.push(this.rule2(2));
    this.regrasAvaliadas.push(this.rule3(3));
    this.regrasAvaliadas.push(this.rule4(4));
    this.regrasAvaliadas.push(this.rule5(5));
    this.regrasAvaliadas.push(this.rule6(6));
    this.regrasAvaliadas.push(this.rule7(7));
    this.regrasAvaliadas.push(this.rule8(8));
    this.regrasAvaliadas.push(this.rule9(9));
    this.regrasAvaliadas.push(this.rule10(10));

    //console.log(this.response);
    return this.response;
  }


}
