import { Injectable } from '@angular/core';
import {Regra} from "../../models/Regra";
import {DiretrizesPorDeficiencia} from "../../models/diretrizes-por-deficiencia";
import {DbProvider} from "../db/db";
import {ErrorDisplayProvider} from "../error-display/error-display";
import {Diretriz} from "../../models/Diretriz";

/*
  Generated class for the DiretrizesPorDeficienciaDaoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DiretrizesPorDeficienciaDaoProvider {
  public diretrizesPorDeficiencias = new Array<DiretrizesPorDeficiencia>();
  constructor(public dbProvider : DbProvider, private errorDisplay : ErrorDisplayProvider) {
    console.log('Hello DiretrizesPorDeficienciaDaoProvider Provider');
  }
  public getAll(regras : string) : Array<DiretrizesPorDeficiencia>{
    let sql = 'select Deficiencia.idDeficiencia, Deficiencia.descricaoDeficiencia, Diretriz.idDiretriz, Diretriz.idMidia, Diretriz.descricaoDiretriz, Diretriz.recomendacao, Regra.idRegra, Regra.descricaoRegra ' +
      'from Deficiencia, Diretriz_Deficiencia, Diretriz, Regra ' +
      'where Diretriz.idDiretriz = Diretriz_Deficiencia.idDiretriz AND Diretriz_Deficiencia.idDeficiencia = Deficiencia.idDeficiencia AND Regra.idDiretriz = Diretriz.idDiretriz AND Regra.idRegra in ('+regras+')';
    let data : any[];
    this.dbProvider.dbConection.executeSql(sql, data).then((data : any) => {
      if(data.rows.length > 0){
        for (var i = 0; i < data.rows.length; i++){
          let tmp = data.rows.item(i);
          this.adicionarDeficiencia(tmp.idDeficiencia, tmp.descricaoDeficiencia);
          this.adicionarDiretriz(tmp.idDeficiencia, tmp.idDiretriz, tmp.idMidia, tmp.descricaoDiretriz, tmp.recomendacao);
        }
        return this.diretrizesPorDeficiencias;
      }
    }).catch( e => {
      this.errorDisplay.presentAlertError(e);
      return null;
    });
    return this.diretrizesPorDeficiencias;
  }

  public getAllNot(regras : string) : Array<DiretrizesPorDeficiencia>{
    let sql = 'select Deficiencia.idDeficiencia, Deficiencia.descricaoDeficiencia, Diretriz.idDiretriz, Diretriz.idMidia, Diretriz.descricaoDiretriz, Diretriz.recomendacao, Regra.idRegra, Regra.descricaoRegra ' +
      'from Deficiencia, Diretriz_Deficiencia, Diretriz, Regra ' +
      'where Diretriz.idDiretriz = Diretriz_Deficiencia.idDiretriz AND Diretriz_Deficiencia.idDeficiencia = Deficiencia.idDeficiencia AND Regra.idDiretriz = Diretriz.idDiretriz AND Regra.idRegra not in ('+regras+')';
    let data : any[];
    this.dbProvider.dbConection.executeSql(sql, data).then((data : any) => {
      if(data.rows.length > 0){
        for (var i = 0; i < data.rows.length; i++){
          let tmp = data.rows.item(i);
          this.adicionarDeficiencia(tmp.idDeficiencia, tmp.descricaoDeficiencia);
          this.adicionarDiretriz(tmp.idDeficiencia, tmp.idDiretriz, tmp.idMidia, tmp.descricaoDiretriz, tmp.recomendacao);
        }
        return this.diretrizesPorDeficiencias;
      }
    }).catch( e => {
      this.errorDisplay.presentAlertError(e);
      return null;
    });
    return this.diretrizesPorDeficiencias;
  }

  private pesquisaDeficiencia(idDeficiencia : number) : number{
    let resp : number = -1;
    for (let i = 0; i < this.diretrizesPorDeficiencias.length; i++){
      if(this.diretrizesPorDeficiencias[i].idDeficiencia == idDeficiencia){
        resp = i;
      }
    }
    return resp;
  }

  private adicionarDeficiencia(idDeficiencia : number, descricaoDeficiencia : string){
      if (this.pesquisaDeficiencia(idDeficiencia) == -1){
        let tempDeficiencia : DiretrizesPorDeficiencia = new DiretrizesPorDeficiencia(idDeficiencia, descricaoDeficiencia, new Array<Diretriz>());
        this.diretrizesPorDeficiencias.push(tempDeficiencia);
      }
  }

  private pesquisarDiretriz(idDeficiencia : number, idDiretriz : number) : number{
    let resp : number = -1;
    let indexDeficiencia = this.pesquisaDeficiencia(idDeficiencia);
    for (let i = 0; i < this.diretrizesPorDeficiencias[indexDeficiencia].diretrizes.length; i++){
      if(this.diretrizesPorDeficiencias[indexDeficiencia].diretrizes[i].getIdDiretriz() == idDiretriz){
        resp = i;
      }
    }
    return resp;
  }

  private adicionarDiretriz(idDeficiencia : number, idDiretriz : number, idMidia : number, descricaoDiretriz : string, recomendacao: string ){
    let indexDeficiencia = this.pesquisaDeficiencia(idDeficiencia);
    if (this.pesquisarDiretriz(idDeficiencia, idDiretriz) == -1){
      let tempDiretriz : Diretriz = new Diretriz(idDiretriz, idMidia, descricaoDiretriz, recomendacao);
      this.diretrizesPorDeficiencias[indexDeficiencia].diretrizes.push(tempDiretriz);
    }
  }

}
