import { Injectable } from '@angular/core';
import {DbProvider} from "../db/db";
import {OA} from "../../models/OA";
import {ErrorDisplayProvider} from "../error-display/error-display";
import {SQLiteObject} from "@ionic-native/sqlite";

/*
  Generated class for the OaDaoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OaDaoProvider {

  private table : string = "OA";
  constructor(public dbProvider : DbProvider, private errorDisplay : ErrorDisplayProvider) {

  }

  // public insert(oa : OA) : void{
  //   this.dbProvider.getDB().then((db : SQLiteObject) =>{
  //     let sql = 'insert into '+this.table+'(idOA, formatoOA) values (?, ?)';
  //     let data = [oa.getIdOA(), oa.getFormatoOA()];
  //     db.executeSql(sql, data).then(() => {
  //       this.errorDisplay.presentAlertWarning(this.table+" inserido(a)");
  //     }).catch( e => this.errorDisplay.presentAlertError(e));
  //   }).catch( e => this.errorDisplay.presentAlertError(e));
  // }
  //
  // public remove(idOA : number) : void{
  //   this.dbProvider.getDB().then((db : SQLiteObject) =>{
  //     let sql = 'delete from '+this.table+' where idOA = ?';
  //     let data = [idOA];
  //     db.executeSql(sql, data).then(() => {
  //       this.errorDisplay.presentAlertWarning(this.table+" removido(a)");
  //     }).catch( e => this.errorDisplay.presentAlertError(e));
  //   }).catch( e => this.errorDisplay.presentAlertError(e));
  // }
  //
  // public update(oa : OA) : void{
  //   this.dbProvider.getDB().then((db : SQLiteObject) =>{
  //     let sql = 'update '+this.table+' set idOA = ?, formatoOA = ?  where idOA = ?';
  //     let data = [oa.getIdOA(), oa.getFormatoOA(), oa.getIdOA()];
  //     db.executeSql(sql, data).then(() => {
  //       this.errorDisplay.presentAlertWarning(this.table+" atualizado(a)");
  //     }).catch( e => this.errorDisplay.presentAlertError(e));
  //   }).catch( e => this.errorDisplay.presentAlertError(e));
  // }

  public getAll() : Array<OA>{
      let sql = 'select * from '+this.table;
      let data : any[];
      let oas = new Array<OA>();
      this.dbProvider.dbConection.executeSql(sql, data).then((data : any) => {
        //console.log(data);
        if(data.rows.length > 0){
          for (var i = 0; i < data.rows.length; i++){
            let tmp = data.rows.item(i);
            //console.log(tmp);
            var oa = new OA(tmp.idOA, tmp.formatoOA);
            oas.push(oa);
          }
          return oas;
        }
      }).catch( e => {
        this.errorDisplay.presentAlertError(e);
        return null;
      });
      return oas;
  }

  public getAllWhere(where : string) : Array<OA>{
    let sql = 'select * from ' + this.table +' where '+ where;
    let data : any[];
    let oas = new Array<OA>();
    this.dbProvider.dbConection.executeSql(sql, data).then((data : any) => {
      //console.log(data);
      if(data.rows.length > 0){
        for (var i = 0; i < data.rows.length; i++){
          let tmp = data.rows.item(i);
          //console.log(tmp);
          var oa = new OA(tmp.idOA, tmp.formatoOA);
          oas.push(oa);
        }
        return oas;
      }
    }).catch( e => {
      this.errorDisplay.presentAlertError(e);
      return null;
    });
    return oas;
  }

}
