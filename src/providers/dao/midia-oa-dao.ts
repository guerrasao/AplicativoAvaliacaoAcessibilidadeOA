import { Injectable } from '@angular/core';
import {DbProvider} from "../db/db";
import {Midia_OA} from "../../models/Midia_OA";
import {ErrorDisplayProvider} from "../error-display/error-display";
import {SQLiteObject} from "@ionic-native/sqlite";

/*
  Generated class for the MidiaOaDaoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MidiaOaDaoProvider {

  private table : string = "Midia_OA";
  constructor(public dbProvider : DbProvider, private errorDisplay : ErrorDisplayProvider) {

  }

  public insert(midiaOA : Midia_OA) : void{
    this.dbProvider.getDB().then((db : SQLiteObject) =>{
      let sql = 'insert into '+this.table+'(idMidia, idOA) values (?, ?)';
      let data = [midiaOA.getIdMidia(), midiaOA.getIdOA()];
      db.executeSql(sql, data).then(() => {
        this.errorDisplay.presentAlertWarning(this.table+" inserido(a)");
      }).catch( e => this.errorDisplay.presentAlertError(e));
    }).catch( e => this.errorDisplay.presentAlertError(e));
  }

  public remove(idMidia : number, idOA : number) : void{
    this.dbProvider.getDB().then((db : SQLiteObject) =>{
      let sql = 'delete from '+this.table+' where idMidia = ? AND idOA = ?';
      let data = [idMidia, idOA];
      db.executeSql(sql, data).then(() => {
        this.errorDisplay.presentAlertWarning(this.table+" removido(a)");
      }).catch( e => this.errorDisplay.presentAlertError(e));
    }).catch( e => this.errorDisplay.presentAlertError(e));
  }

  // public update(midiaOA : Midia_OA) : void{
  //
  // }

  public getAll() : Array<Midia_OA>{
    this.dbProvider.getDB().then((db : SQLiteObject) =>{
      let sql = 'select * from '+this.table;
      let data : any[];
      db.executeSql(sql, data).then((data : any) => {
        if(data.rows.length > 0){
          let midiasOA = new Array<Midia_OA>();
          for (var i = 0; i < data.rows.length; i++){
            let tmp = data.rows.item(i);
            var midiaOA = new Midia_OA(tmp.idMidia, tmp.idOA);
            midiasOA.push(midiaOA);
          }
          return midiasOA;
        } else{
          return new Array<Midia_OA>();
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

  public getAllWhere(where : String) : Array<Midia_OA> {
    this.dbProvider.getDB().then((db : SQLiteObject) =>{
      let sql = 'select * from ' + this.table +' where '+ where;
      let data : any[];
      db.executeSql(sql, data).then((data : any) => {
        if(data.rows.length > 0){
          let midiasOA = new Array<Midia_OA>();
          for (var i = 0; i < data.rows.length; i++){
            let tmp = data.rows.item(i);
            var midiaOA = new Midia_OA(tmp.idMidia, tmp.idOA);
            midiasOA.push(midiaOA);
          }
          return midiasOA;
        } else{
          return new Array<Midia_OA>();
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
