import { Injectable } from '@angular/core';
import {DbProvider} from "../db/db";
import {ErrorDisplayProvider} from "../error-display/error-display";
import {SQLiteObject} from "@ionic-native/sqlite";

/*
  Generated class for the GeneralDaoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GeneralDaoProvider {
  constructor(public dbProvider : DbProvider, private errorDisplay : ErrorDisplayProvider) {

  }

  public getAll(sql : string) : Array<any>{
    // this.dbProvider.dbConection.close().catch(e => {
    //   this.errorDisplay.presentAlertError(e);
    //   return null;
    // });
    let resultado = new Array<any>();
      let data : any[];
      this.dbProvider.dbConection.executeSql(sql, data).then((data : any) => {
        if(data.rows.length > 0){
          let resultado = new Array<any>();
          for (var i = 0; i < data.rows.length; i++){
            let tmp = data.rows.item(i);
            //var regra = new Regra(tmp.idRegra, tmp.idDiretriz, tmp.descricaoRegra, tmp.regraIf);
            resultado.push(tmp);
          }
          return resultado;
        }
      }).catch( e => {
        this.errorDisplay.presentAlertError(e);
        return null;
      });
      return resultado;
  }

}
