import { Injectable } from '@angular/core';
import {DbProvider} from "../db/db";
import {Regra} from "../../models/Regra";
import {ErrorDisplayProvider} from "../error-display/error-display";
import {SQLiteObject} from "@ionic-native/sqlite";

/*
  Generated class for the RegraDaoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RegraDaoProvider {
  private table : string = "Regra";
  constructor(public dbProvider : DbProvider, private errorDisplay : ErrorDisplayProvider) {

  }

  // public insert(regra : Regra) : void{
  //   this.dbProvider.getDB().then((db : SQLiteObject) =>{
  //     let sql = 'insert into '+this.table+'(idRegra, idDiretriz, descricaoRegra, regraIf) values (?, ?, ?, ?)';
  //     let data = [regra.getIdRegra(), regra.getIdDiretriz(), regra.getDescricaoRegra(), regra.getRegraIf()];
  //     db.executeSql(sql, data).then(() => {
  //       this.errorDisplay.presentAlertWarning(this.table+" inserido(a)");
  //     }).catch( e => this.errorDisplay.presentAlertError(e));
  //   }).catch( e => this.errorDisplay.presentAlertError(e));
  // }
  //
  // public remove(idRegra : number) : void{
  //   this.dbProvider.getDB().then((db : SQLiteObject) =>{
  //     let sql = 'delete from '+this.table+' where idRegra = ?';
  //     let data = [idRegra];
  //     db.executeSql(sql, data).then(() => {
  //       this.errorDisplay.presentAlertWarning(this.table+" removido(a)");
  //     }).catch( e => this.errorDisplay.presentAlertError(e));
  //   }).catch( e => this.errorDisplay.presentAlertError(e));
  // }
  //
  // public update(regra : Regra) : void{
  //   this.dbProvider.getDB().then((db : SQLiteObject) =>{
  //     let sql = 'update '+this.table+' set idRegra = ?, idDiretriz = ?, descricaoRegra = ?, regraIf = ?  where idRegra = ?';
  //     let data = [regra.getIdRegra(), regra.getIdDiretriz(), regra.getDescricaoRegra(), regra.getRegraIf(), regra.getIdRegra()];
  //     db.executeSql(sql, data).then(() => {
  //       this.errorDisplay.presentAlertWarning(this.table+" atualizado(a)");
  //     }).catch( e => this.errorDisplay.presentAlertError(e));
  //   }).catch( e => this.errorDisplay.presentAlertError(e));
  // }

  public getAll() : Array<Regra>{
    let sql = 'select * from '+this.table;
    let data : any[];
    let regras = new Array<Regra>();
    this.dbProvider.dbConection.executeSql(sql, data).then((data : any) => {
      if(data.rows.length > 0){
        for (var i = 0; i < data.rows.length; i++){
          let tmp = data.rows.item(i);
          var regra = new Regra(tmp.idRegra, tmp.idDiretriz, tmp.descricaoRegra, tmp.regraIf);
          regras.push(regra);
        }
        return regras;
      }
    }).catch( e => {
      this.errorDisplay.presentAlertError(e);
      return null;
    });
    return regras;
  }

  public getAllWhere(where : string) : Array<Regra>{
    let sql = 'select * from ' + this.table +' where '+ where;
    let data : any[];
    let regras = new Array<Regra>();
    this.dbProvider.dbConection.executeSql(sql, data).then((data : any) => {
      if(data.rows.length > 0){
        for (var i = 0; i < data.rows.length; i++){
          let tmp = data.rows.item(i);
          var regra = new Regra(tmp.idRegra, tmp.idDiretriz, tmp.descricaoRegra, tmp.regraIf);
          regras.push(regra);
        }
        return regras;
      }
    }).catch( e => {
      this.errorDisplay.presentAlertError(e);
      return null;
    });
    return regras;
  }

}
