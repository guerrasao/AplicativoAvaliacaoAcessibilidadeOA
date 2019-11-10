import { Injectable } from '@angular/core';
import {DbProvider} from "../db/db";
import {Atributo} from "../../models/Atributo";
import {SQLiteObject} from "@ionic-native/sqlite";
import {ErrorDisplayProvider} from "../error-display/error-display";

/*
  Generated class for the AtributoDaoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AtributoDaoProvider {
  private table : string = "atributo";
  constructor(public dbProvider : DbProvider, private errorDisplay : ErrorDisplayProvider) {

  }

  public insert(atributo : Atributo) : void{
    this.dbProvider.getDB().then((db : SQLiteObject) =>{
      let sql = 'insert into '+this.table+'(idAtributo, idMidia, descricaoAtributo ) values (?, ?, ?)';
      let data = [atributo.getIdAtributo(), atributo.getIdMidia(), atributo.getDescricaoAtributo()];
      db.executeSql(sql, data).then(() => {
        this.errorDisplay.presentAlertWarning(this.table+" inserido(a)");
      }).catch( e => this.errorDisplay.presentAlertError(e));
    }).catch( e => this.errorDisplay.presentAlertError(e));
  }

  public remove(idAtributo : number) : void{
    this.dbProvider.getDB().then((db : SQLiteObject) =>{
      let sql = 'delete from '+this.table+' where idAtributo = ?';
      let data = [idAtributo];
      db.executeSql(sql, data).then(() => {
        this.errorDisplay.presentAlertWarning(this.table+" removido(a)");
      }).catch( e => this.errorDisplay.presentAlertError(e));
    }).catch( e => this.errorDisplay.presentAlertError(e));
  }

  public update(atributo : Atributo) : void{
    this.dbProvider.getDB().then((db : SQLiteObject) =>{
      let sql = 'update '+this.table+' set idAtributo = ?, idMidia = ?, descricaoAtributo = ?  where idAtributo = ?';
      let data = [atributo.getIdAtributo(), atributo.getIdMidia(), atributo.getDescricaoAtributo(), atributo.getIdAtributo()];
      db.executeSql(sql, data).then(() => {
        this.errorDisplay.presentAlertWarning(this.table+" atualizado(a)");
      }).catch( e => this.errorDisplay.presentAlertError(e));
    }).catch( e => this.errorDisplay.presentAlertError(e));
  }

  public getAll() : Array<Atributo>{
    this.dbProvider.getDB().then((db : SQLiteObject) =>{
      let sql = 'select * from '+this.table;
      let data : any[];
      db.executeSql(sql, data).then((data : any) => {
        if(data.rows.length > 0){
          let atributos = new Array<Atributo>();
          for (var i = 0; i < data.rows.length; i++){
            let tmp = data.rows.item(i);
            var atributo = new Atributo(tmp.idAtributo, tmp.descricaoAtributo, tmp.idMidia);
            atributos.push(atributo);
          }
          return atributos;
        } else{
          return new Array<Atributo>();
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

  public getAllWhere(where : String) : Array<Atributo>{
    this.dbProvider.getDB().then((db : SQLiteObject) =>{
      let sql = 'select * from '+this.table+' where '+where;
      let data : any[];
      db.executeSql(sql, data).then((data : any) => {
        if(data.rows.length > 0){
          let atributos = new Array<Atributo>();
          for (var i = 0; i < data.rows.length; i++){
            let tmp = data.rows.item(i);
            var atributo = new Atributo(tmp.idAtributo, tmp.descricaoAtributo, tmp.idMidia);
            atributos.push(atributo);
          }
          return atributos;
        } else{
          return new Array<Atributo>();
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
