import { Injectable } from '@angular/core';
import {DbProvider} from "../db/db";
import {ErrorDisplayProvider} from "../error-display/error-display";
// import {SQLiteObject} from "@ionic-native/sqlite";
import {Regra_Atributo} from "../../models/Regra_Atributo";

/*
  Generated class for the RegraAtributoDaoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RegraAtributoDaoProvider {

  private table : string = "Regra_Atributo";
  constructor(public dbProvider : DbProvider, private errorDisplay : ErrorDisplayProvider) {

  }

  // public insert(regraAtributo : Regra_Atributo) : void{
  //   this.dbProvider.getDB().then((db : SQLiteObject) =>{
  //     let sql = 'insert into '+this.table+'(idAtributo, idRegra) values (?, ?)';
  //     let data = [regraAtributo.getIdAtributo(), regraAtributo.getIdRegra()];
  //     db.executeSql(sql, data).then(() => {
  //       this.errorDisplay.presentAlertWarning(this.table+" inserido(a)");
  //     }).catch( e => this.errorDisplay.presentAlertError(e));
  //   }).catch( e => this.errorDisplay.presentAlertError(e));
  // }
  //
  // public remove(idAtributo : number, idRegra : number) : void{
  //   this.dbProvider.getDB().then((db : SQLiteObject) =>{
  //     let sql = 'delete from '+this.table+' where idAtributo = ? AND idRegra = ?';
  //     let data = [idAtributo, idRegra];
  //     db.executeSql(sql, data).then(() => {
  //       this.errorDisplay.presentAlertWarning(this.table+" removido(a)");
  //     }).catch( e => this.errorDisplay.presentAlertError(e));
  //   }).catch( e => this.errorDisplay.presentAlertError(e));
  // }
  //
  // public update(regraAtributo : Regra_Atributo) : void{
  //   this.dbProvider.getDB().then((db : SQLiteObject) =>{
  //     let sql = 'update '+this.table+' set idAtributo = ?, idRegra = ?  where idAtributo = ?';
  //     let data = [regraAtributo.getIdAtributo(), regraAtributo.getIdRegra(), regraAtributo.getIdAtributo()];
  //     db.executeSql(sql, data).then(() => {
  //       this.errorDisplay.presentAlertWarning(this.table+" atualizado(a)");
  //     }).catch( e => this.errorDisplay.presentAlertError(e));
  //   }).catch( e => this.errorDisplay.presentAlertError(e));
  // }

  public getAll() : Array<Regra_Atributo>{
      let sql = 'select * from '+this.table;
      let data : any[];
      let regrasAtributos = new Array<Regra_Atributo>();
      this.dbProvider.dbConection.executeSql(sql, data).then((data : any) => {
          if(data.rows.length > 0){
            for (var i = 0; i < data.rows.length; i++){
              let tmp = data.rows.item(i);
              var regraAtributo = new Regra_Atributo(tmp.idAtributo, tmp.idRegra);
              regrasAtributos.push(regraAtributo);
            }
            return regrasAtributos;
          }
        }).catch( e => {
          this.errorDisplay.presentAlertError(e);
          return null;
        });
      return regrasAtributos;
  }

  public getAllWhere(where : string) : Array<Regra_Atributo>{
    let sql = 'select * from ' + this.table +' where '+ where;
    let data : any[];
    let regrasAtributos = new Array<Regra_Atributo>();
    this.dbProvider.dbConection.executeSql(sql, data).then((data : any) => {
      if(data.rows.length > 0){
        for (var i = 0; i < data.rows.length; i++){
          let tmp = data.rows.item(i);
          var regraAtributo = new Regra_Atributo(tmp.idAtributo, tmp.idRegra);
          regrasAtributos.push(regraAtributo);
        }
        return regrasAtributos;
      }
    }).catch( e => {
      this.errorDisplay.presentAlertError(e);
      return null;
    });
    return regrasAtributos;
  }
}
