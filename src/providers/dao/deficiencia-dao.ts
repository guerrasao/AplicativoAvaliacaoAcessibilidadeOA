import { Injectable } from '@angular/core';
import {DbProvider} from "../db/db";
import {Deficiencia} from "../../models/Deficiencia";
import {ErrorDisplayProvider} from "../error-display/error-display";
import {SQLiteObject} from "@ionic-native/sqlite";

/*
  Generated class for the DeficienciaDaoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DeficienciaDaoProvider {

  private table : string = "Deficiencia";
  constructor(public dbProvider : DbProvider, private errorDisplay : ErrorDisplayProvider) {

  }

  // public insert(deficiencia : Deficiencia) : void{
  //   this.dbProvider.getDB().then((db : SQLiteObject) =>{
  //     let sql = 'insert into '+this.table+'(idDeficiencia, descricaoDeficiencia) values (?, ?)';
  //     let data = [deficiencia.getIdDeficiencia(), deficiencia.getDescricaoDeficiencia()];
  //     db.executeSql(sql, data).then(() => {
  //       console.log(this.table+" inserido(a)");
  //     }).catch( e => this.errorDisplay.presentAlertError(e));
  //   }).catch( e => this.errorDisplay.presentAlertError(e));
  // }
  //
  // public remove(idDeficiencia : number) : void{
  //   this.dbProvider.getDB().then((db : SQLiteObject) =>{
  //     let sql = 'delete from '+this.table+' where idDeficiencia = ?';
  //     let data = [idDeficiencia];
  //     db.executeSql(sql, data).then(() => {
  //       console.log(this.table+" removido(a)");
  //     }).catch( e => this.errorDisplay.presentAlertError(e));
  //   }).catch( e => this.errorDisplay.presentAlertError(e));
  // }
  //
  // public update(deficiencia : Deficiencia) : void{
  //   this.dbProvider.getDB().then((db : SQLiteObject) =>{
  //     let sql = 'update '+this.table+' set idDeficiencia = ?, descricaoDeficiencia = ? where idDeficiencia = ?';
  //     let data = [deficiencia.getIdDeficiencia(), deficiencia.getDescricaoDeficiencia(), deficiencia.getIdDeficiencia()];
  //     db.executeSql(sql, data).then(() => {
  //       console.log(this.table+" atualizado(a)");
  //     }).catch( e => this.errorDisplay.presentAlertError(e));
  //   }).catch( e => this.errorDisplay.presentAlertError(e));
  // }

  public getAll() : Array<Deficiencia>{
    let sql = 'select * from '+this.table;
    let data : any[];
    let deficiencias = new Array<Deficiencia>();
    this.dbProvider.dbConection.executeSql(sql, data).then((data : any) => {
      if(data.rows.length > 0){
        for (var i = 0; i < data.rows.length; i++){
          let tmp = data.rows.item(i);
          var deficiencia = new Deficiencia(tmp.idDeficiencia, tmp.descricaoDeficiencia);
          deficiencias.push(deficiencia);
        }
        return deficiencias;
      }
    }).catch( e => {
      this.errorDisplay.presentAlertError(e);
      return null;
    });
    return deficiencias;
  }
// let sql = 'select * from '+this.table+' where '+where;
  public getAllWhere(where : string) : Array<Deficiencia>{
    let sql = 'select * from '+this.table;
    let data : any[];
    let deficiencias = new Array<Deficiencia>();
    this.dbProvider.dbConection.executeSql(sql, data).then((data : any) => {
      if(data.rows.length > 0){
        for (var i = 0; i < data.rows.length; i++){
          let tmp = data.rows.item(i);
          var deficiencia = new Deficiencia(tmp.idDeficiencia, tmp.descricaoDeficiencia);
          deficiencias.push(deficiencia);
        }
        return deficiencias;
      }
    }).catch( e => {
      this.errorDisplay.presentAlertError(e);
      return null;
    });
    return deficiencias;
  }
}
