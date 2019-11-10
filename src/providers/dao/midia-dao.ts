import { Injectable } from '@angular/core';
import {DbProvider} from "../db/db";
import {Midia} from "../../models/Midia";
import {ErrorDisplayProvider} from "../error-display/error-display";
import {SQLiteObject} from "@ionic-native/sqlite";

/*
  Generated class for the MidiaDaoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MidiaDaoProvider {

  private table : string = "Midia";
  constructor(public dbProvider : DbProvider, private errorDisplay : ErrorDisplayProvider) {

  }

  public insert(midia : Midia) : void{
    this.dbProvider.getDB().then((db : SQLiteObject) =>{
      let sql = 'insert into '+this.table+'(idMidia, tipoMidia) values (?, ?)';
      let data = [midia.getIdMidia(), midia.getTipoMidia()];
      db.executeSql(sql, data).then(() => {
        this.errorDisplay.presentAlertWarning(this.table+" inserido(a)");
      }).catch( e => this.errorDisplay.presentAlertError(e));
    }).catch( e => this.errorDisplay.presentAlertError(e));
  }

  public remove(idMidia : number) : void{
    this.dbProvider.getDB().then((db : SQLiteObject) =>{
      let sql = 'delete from '+this.table+' where idMidia = ?';
      let data = [idMidia];
      db.executeSql(sql, data).then(() => {
        this.errorDisplay.presentAlertWarning(this.table+" removido(a)");
      }).catch( e => this.errorDisplay.presentAlertError(e));
    }).catch( e => this.errorDisplay.presentAlertError(e));
  }

  public update(midia : Midia) : void{
    this.dbProvider.getDB().then((db : SQLiteObject) =>{
      let sql = 'update '+this.table+' set idMidia = ?, tipoMidia = ?  where idMidia = ?';
      let data = [midia.getIdMidia(), midia.getTipoMidia(), midia.getIdMidia()];
      db.executeSql(sql, data).then(() => {
        this.errorDisplay.presentAlertWarning(this.table+" atualizado(a)");
      }).catch( e => this.errorDisplay.presentAlertError(e));
    }).catch( e => this.errorDisplay.presentAlertError(e));
  }

  public getAll() : Array<Midia>{
    this.dbProvider.getDB().then((db : SQLiteObject) =>{
      let sql = 'select * from '+this.table;
      let data : any[];
      db.executeSql(sql, data).then((data : any) => {
        if(data.rows.length > 0){
          let midias = new Array<Midia>();
          for (var i = 0; i < data.rows.length; i++){
            let tmp = data.rows.item(i);
            var midia = new Midia(tmp.idMidia, tmp.tipoMidia);
            midias.push(midia);
          }
          return midias;
        } else{
          return new Array<Midia>();
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

  public getAllWhere(where : String) : Array<Midia> {
    this.dbProvider.getDB().then((db : SQLiteObject) =>{
      let sql = 'select * from ' + this.table +' where '+ where;
      let data : any[];
      db.executeSql(sql, data).then((data : any) => {
        if(data.rows.length > 0){
          let midias = new Array<Midia>();
          for (var i = 0; i < data.rows.length; i++){
            let tmp = data.rows.item(i);
            var midia = new Midia(tmp.idMidia, tmp.tipoMidia);
            midias.push(midia);
          }
          return midias;
        } else{
          return new Array<Midia>();
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
