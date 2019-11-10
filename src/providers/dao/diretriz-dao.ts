import { Injectable } from '@angular/core';
import {DbProvider} from "../db/db";
import {Diretriz} from "../../models/Diretriz";
import {ErrorDisplayProvider} from "../error-display/error-display";
import {SQLiteObject} from "@ionic-native/sqlite";

/*
  Generated class for the DiretrizDaoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DiretrizDaoProvider {

  private table : string = "Diretriz";
  constructor(public dbProvider : DbProvider, private errorDisplay : ErrorDisplayProvider) {

  }

  public insert(diretriz : Diretriz) : void{
    this.dbProvider.getDB().then((db : SQLiteObject) =>{
      let sql = 'insert into '+this.table+'(idDiretriz, idMidia, descricaoDiretriz, recomendacao) values (?, ?, ?, ?)';
      let data = [diretriz.getIdDiretriz(), diretriz.getIdMidia(), diretriz.getDescricaoDiretriz(), diretriz.getRecomendacao()];
      db.executeSql(sql, data).then(() => {
        this.errorDisplay.presentAlertWarning(this.table+" inserido(a)");
      }).catch( e => this.errorDisplay.presentAlertError(e));
    }).catch( e => this.errorDisplay.presentAlertError(e));
  }

  public remove(idDiretriz : number) : void{
    this.dbProvider.getDB().then((db : SQLiteObject) =>{
      let sql = 'delete from '+this.table+' where idDiretriz = ?';
      let data = [idDiretriz];
      db.executeSql(sql, data).then(() => {
        this.errorDisplay.presentAlertWarning(this.table+" removido(a)");
      }).catch( e => this.errorDisplay.presentAlertError(e));
    }).catch( e => this.errorDisplay.presentAlertError(e));
  }

  public update(diretriz : Diretriz) : void{
    this.dbProvider.getDB().then((db : SQLiteObject) =>{
      let sql = 'update '+this.table+' set idDiretriz = ?, idMidia = ?, descricaoDiretriz = ?, recomendacao = ?  where idDiretriz = ?';
      let data = [diretriz.getIdDiretriz(), diretriz.getIdMidia(), diretriz.getDescricaoDiretriz(), diretriz.getRecomendacao(), diretriz.getIdDiretriz()];
      db.executeSql(sql, data).then(() => {
        this.errorDisplay.presentAlertWarning(this.table+" atualizado(a)");
      }).catch( e => this.errorDisplay.presentAlertError(e));
    }).catch( e => this.errorDisplay.presentAlertError(e));
  }

  public getAll() : Array<Diretriz>{
    this.dbProvider.getDB().then((db : SQLiteObject) =>{
      let sql = 'select * from '+this.table;
      let data : any[];
      db.executeSql(sql, data).then((data : any) => {
        if(data.rows.length > 0){
          let diretrizes = new Array<Diretriz>();
          for (var i = 0; i < data.rows.length; i++){
            let tmp = data.rows.item(i);
            var diretriz = new Diretriz(tmp.idMidia, tmp.tipoMidia);
            diretrizes.push(diretriz);
          }
          return diretrizes;
        } else{
          return new Array<Diretriz>();
        }
      }).catch( e => {
        this.errorDisplay.presentAlertError(e);
        return null;
      });
    }).catch( e => {
      this.errorDisplay.presentAlertError(e);
      return null;
    });
    return null;
  }

  public getAllWhere(where : String) : Array<Diretriz> {
    this.dbProvider.getDB().then((db : SQLiteObject) =>{
      let sql = 'select * from ' + this.table +' where '+ where;
      let data : any[];
      db.executeSql(sql, data).then((data : any) => {
        if(data.rows.length > 0){
          let diretrizes = new Array<Diretriz>();
          for (var i = 0; i < data.rows.length; i++){
            let tmp = data.rows.item(i);
            var diretriz = new Diretriz(tmp.idMidia, tmp.tipoMidia);
            diretrizes.push(diretriz);
          }
          return diretrizes;
        } else{
          return new Array<Diretriz>();
        }
      }).catch( e => {
        this.errorDisplay.presentAlertError(e);
        return null;
      });
    }).catch( e => {
      this.errorDisplay.presentAlertError(e);
      return null;
    });
    return null;
  }

}
