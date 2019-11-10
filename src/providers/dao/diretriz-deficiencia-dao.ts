import { Injectable } from '@angular/core';
import {DbProvider} from "../db/db";
import {Diretriz_Deficiencia} from "../../models/Diretriz_Deficiencia";
import {ErrorDisplayProvider} from "../error-display/error-display";
import {SQLiteObject} from "@ionic-native/sqlite";

/*
  Generated class for the DeficienciaHasOaDaoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DiretrizDeficienciaDaoProvider {

  private table : string = "Diretriz_Deficiencia";
  constructor(public dbProvider : DbProvider, private errorDisplay : ErrorDisplayProvider) {

  }

  public insert(diretrizDeficiencia : Diretriz_Deficiencia) : void{
    this.dbProvider.getDB().then((db : SQLiteObject) =>{
      let sql = 'insert into '+this.table+'(idDiretriz, idDeficiencia) values (?, ?)';
      let data = [diretrizDeficiencia.getIdDiretriz(), diretrizDeficiencia.getIdDeficiencia()];
      db.executeSql(sql, data).then(() => {
        this.errorDisplay.presentAlertWarning(this.table+" inserido(a)");
      }).catch( e => this.errorDisplay.presentAlertError(e));
    }).catch( e => this.errorDisplay.presentAlertError(e));
  }

  public remove(idDiretriz : number, idDeficiencia : number) : void{
    this.dbProvider.getDB().then((db : SQLiteObject) =>{
      let sql = 'delete from '+this.table+' where idDiretriz = ? AND idDeficiencia = ?';
      let data = [idDiretriz, idDeficiencia];
      db.executeSql(sql, data).then(() => {
        this.errorDisplay.presentAlertWarning(this.table+" removido(a)");
      }).catch( e => this.errorDisplay.presentAlertError(e));
    }).catch( e => this.errorDisplay.presentAlertError(e));
  }

  // public update(diretrizDeficiencia : Diretriz_Deficiencia) : void{
  //
  // }

  public getAll() : Array<Diretriz_Deficiencia>{
    this.dbProvider.getDB().then((db : SQLiteObject) =>{
      let sql = 'select * from '+this.table;
      let data : any[];
      db.executeSql(sql, data).then((data : any) => {
        if(data.rows.length > 0){
          let diretrizDeficiencias = new Array<Diretriz_Deficiencia>();
          for (var i = 0; i < data.rows.length; i++){
            let tmp = data.rows.item(i);
            var diretrizDeficiencia = new Diretriz_Deficiencia(tmp.idDiretriz, tmp.idDeficiencia);
            diretrizDeficiencias.push(diretrizDeficiencia);
          }
          return diretrizDeficiencias;
        } else{
          return new Array<Diretriz_Deficiencia>();
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

  public getAllWhere(where : String) : Array<Diretriz_Deficiencia> {
    this.dbProvider.getDB().then((db : SQLiteObject) =>{
      let sql = 'select * from ' + this.table +' where '+ where;
      let data : any[];
      db.executeSql(sql, data).then((data : any) => {
        if(data.rows.length > 0){
          let diretrizDeficiencias = new Array<Diretriz_Deficiencia>();
          for (var i = 0; i < data.rows.length; i++){
            let tmp = data.rows.item(i);
            var diretrizDeficiencia = new Diretriz_Deficiencia(tmp.idDiretriz, tmp.idDeficiencia);
            diretrizDeficiencias.push(diretrizDeficiencia);
          }
          return diretrizDeficiencias;
        } else{
          return new Array<Diretriz_Deficiencia>();
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
