import { Injectable } from '@angular/core';
import {SQLite, SQLiteObject} from "@ionic-native/sqlite";
import {ErrorDisplayProvider} from "../error-display/error-display";
import {Db_seed} from "./db_seed";

/*
  Generated class for the DbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DbProvider {
  private dbSeedClass : Db_seed;
  constructor(private sqlite : SQLite, private errorDisplay : ErrorDisplayProvider) {

  }

  public getDB(){
    return this.sqlite.create({
      name : 'expertsystemdb.db',
      location : 'default'
    });
  }

  public deleteDB(){
    return this.sqlite.deleteDatabase({
      name : 'expertsystemdb.db',
      location : 'default'
    });
  }

  public createDB(){
    return this.getDB()
      .then((db : SQLiteObject) =>{
        this.createTables(db);
        this.dbSeed(db, this.errorDisplay, false);
      })
      .catch(e => this.errorDisplay.presentAlertError(e));
  }

  private createTables(db : SQLiteObject){
    return db.sqlBatch([
      'CREATE TABLE IF NOT EXISTS Midia (idMidia INT NOT NULL, tipoMidia VARCHAR(100) NULL, PRIMARY KEY (idMidia));',
      'CREATE TABLE IF NOT EXISTS OA (idOA INT NOT NULL, formatoOA VARCHAR(45) NULL, PRIMARY KEY (idOA));',
      'CREATE TABLE IF NOT EXISTS Deficiencia (idDeficiencia INT NOT NULL, descricaoDeficiencia VARCHAR(300) NULL, PRIMARY KEY (idDeficiencia));',
      'CREATE TABLE IF NOT EXISTS Diretriz (idDiretriz INT NOT NULL, idMidia INT NOT NULL, descricaoDiretriz VARCHAR(300) NULL, recomendacao VARCHAR(300) NULL, PRIMARY KEY (idDiretriz), FOREIGN KEY (idMidia) REFERENCES Midia (idMidia) ON DELETE NO ACTION ON UPDATE NO ACTION);',
      'CREATE TABLE IF NOT EXISTS Midia_OA (idMidia INT NOT NULL, idOA INT NOT NULL, PRIMARY KEY (idMidia, idOA), FOREIGN KEY (idMidia) REFERENCES Midia (idMidia) ON DELETE NO ACTION ON UPDATE NO ACTION, FOREIGN KEY (idOA) REFERENCES OA (idOA) ON DELETE NO ACTION ON UPDATE NO ACTION);',
      'CREATE TABLE IF NOT EXISTS Diretriz_Deficiencia (idDiretriz INT NOT NULL, idDeficiencia INT NOT NULL, PRIMARY KEY (idDiretriz, idDeficiencia), FOREIGN KEY (idDiretriz) REFERENCES Diretriz (idDiretriz) ON DELETE NO ACTION ON UPDATE NO ACTION, FOREIGN KEY (idDeficiencia) REFERENCES Deficiencia (idDeficiencia) ON DELETE NO ACTION ON UPDATE NO ACTION);',
      'CREATE TABLE IF NOT EXISTS Atributo (idAtributo INT NOT NULL, idMidia INT NOT NULL, descricaoAtributo VARCHAR(100) NULL, PRIMARY KEY (idAtributo), FOREIGN KEY (idMidia) REFERENCES Midia (idMidia) ON DELETE NO ACTION ON UPDATE NO ACTION);',
      'CREATE TABLE IF NOT EXISTS Regra (idRegra INT NOT NULL, idDiretriz INT NOT NULL, descricaoRegra VARCHAR(300) NULL, regraIf VARCHAR(300) NULL, PRIMARY KEY (idRegra), FOREIGN KEY (idDiretriz) REFERENCES Diretriz (idDiretriz) ON DELETE NO ACTION ON UPDATE NO ACTION);',
      'CREATE TABLE IF NOT EXISTS Regra_Atributo (idAtributo INT NOT NULL, idRegra INT NOT NULL, PRIMARY KEY (idAtributo, idRegra), FOREIGN KEY (idAtributo) REFERENCES Atributo (idAtributo) ON DELETE NO ACTION ON UPDATE NO ACTION, FOREIGN KEY (idRegra) REFERENCES Regra (idRegra) ON DELETE NO ACTION ON UPDATE NO ACTION);'
  ]).then(() => {
      //this.errorDisplay.presentAlertWarning('Tabelas criadas com sucesso');
    }).catch(e => this.errorDisplay.presentAlertError(e));
  }


  public dbSeed(db : SQLiteObject, errorDisplay : ErrorDisplayProvider, forceInsert : boolean){
    this.dbSeedClass = new Db_seed(db, errorDisplay, forceInsert);
    this.dbSeedClass.seed_deficiencia();
    this.dbSeedClass.seed_oa();
    this.dbSeedClass.seed_midia();
    this.dbSeedClass.seed_midia_oa();
    this.dbSeedClass.seed_diretriz();
    this.dbSeedClass.seed_diretriz_deficiencia();
    this.dbSeedClass.seed_atributo();
    this.dbSeedClass.seed_regra();
    this.dbSeedClass.seed_regra_atributo();
  }
}
