import { Injectable } from '@angular/core';
import {SQLite, SQLiteObject} from "@ionic-native/sqlite";
import {ErrorDisplayProvider} from "../error-display/error-display";

/*
  Generated class for the DbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DbProvider {

  constructor(private sqlite : SQLite, private errorDisplay : ErrorDisplayProvider) {

  }

  public getDB(){
    return this.sqlite.create({
      name : 'expertsystemdb',
      location : 'default'
    });
  }

  public createDB(){
    return this.getDB()
      .then((db : SQLiteObject) =>{
        this.createTables(db);
      })
      .catch(e => this.errorDisplay.presentAlertError(e));
  }

  private createTables(db : SQLiteObject){
    return db.sqlBatch(
      ['CREATE TABLE IF NOT EXISTS `Midia` (' +
      '  `idMidia` INT NOT NULL,' +
      '  `tipoMidia` VARCHAR(100) NULL,' +
      '  PRIMARY KEY (`idMidia`));']
      ['CREATE TABLE IF NOT EXISTS `OA` (' +
      '  `idOA` INT NOT NULL,' +
      '  `formatoOA` VARCHAR(45) NULL,' +
      '  PRIMARY KEY (`idOA`));']
      ['CREATE TABLE IF NOT EXISTS `Deficiencia` (' +
      '  `idDeficiencia` INT NOT NULL,' +
      '  `descricaoDeficiencia` VARCHAR(300) NULL,' +
      '  PRIMARY KEY (`idDeficiencia`));']
      ['CREATE TABLE IF NOT EXISTS `Diretriz` (' +
      '  `idDiretriz` INT NOT NULL,' +
      '  `descricaoDiretriz` VARCHAR(300) NULL,' +
      '  `idMidia` INT NOT NULL,' +
      '  PRIMARY KEY (`idDiretriz`, `idMidia`),' +
      '    FOREIGN KEY (`idMidia`)' +
      '    REFERENCES `Midia` (`idMidia`)' +
      '    ON DELETE NO ACTION' +
      '    ON UPDATE NO ACTION);']
      ['CREATE TABLE IF NOT EXISTS `Midia_OA` (' +
      '  `idMidia` INT NOT NULL,' +
      '  `idOA` INT NOT NULL,' +
      '  PRIMARY KEY (`idMidia`, `idOA`),' +
      '    FOREIGN KEY (`idMidia`)' +
      '    REFERENCES `Midia` (`idMidia`)' +
      '    ON DELETE NO ACTION' +
      '    ON UPDATE NO ACTION,' +
      '    FOREIGN KEY (`idOA`)' +
      '    REFERENCES `OA` (`idOA`)' +
      '    ON DELETE NO ACTION' +
      '    ON UPDATE NO ACTION);']
      ['CREATE TABLE IF NOT EXISTS `Deficiencia_has_OA` (' +
      '  `idDeficiencia` INT NOT NULL,' +
      '  `OA_idOA` INT NOT NULL,' +
      '  PRIMARY KEY (`idDeficiencia`, `OA_idOA`),' +
      '    FOREIGN KEY (`idDeficiencia`)' +
      '    REFERENCES `Deficiencia` (`idDeficiencia`)' +
      '    ON DELETE NO ACTION' +
      '    ON UPDATE NO ACTION,' +
      '    FOREIGN KEY (`OA_idOA`)' +
      '    REFERENCES `OA` (`idOA`)' +
      '    ON DELETE NO ACTION' +
      '    ON UPDATE NO ACTION);']
      ['CREATE TABLE IF NOT EXISTS `Atributo` (' +
      '  `idAtributo` INT NOT NULL,' +
      '  `descricaoAtributo` VARCHAR(100) NULL,' +
      '  `idMidia` INT NOT NULL,' +
      '  PRIMARY KEY (`idAtributo`),' +
      '    FOREIGN KEY (`idMidia`)' +
      '    REFERENCES `Midia` (`idMidia`)' +
      '    ON DELETE NO ACTION' +
      '    ON UPDATE NO ACTION);']
      ['CREATE TABLE IF NOT EXISTS `Regra` (' +
      '  `descricaoRegra` VARCHAR(300) NULL,' +
      '  `regra_if` VARCHAR(300) NULL,' +
      '  `recomendacao` VARCHAR(300) NULL,' +
      '  `idDiretriz` INT NOT NULL,' +
      '  `idRegra` INT NOT NULL,' +
      '  `idAtributo` INT NOT NULL,' +
      '  PRIMARY KEY (`idRegra`),' +
      '    FOREIGN KEY (`idDiretriz`)' +
      '    REFERENCES `Diretriz` (`idDiretriz`)' +
      '    ON DELETE NO ACTION' +
      '    ON UPDATE NO ACTION,' +
      '    FOREIGN KEY (`idAtributo`)' +
      '    REFERENCES `Atributo` (`idAtributo`)' +
      '    ON DELETE NO ACTION' +
      '    ON UPDATE NO ACTION);']
    ).then(() => {
      this.errorDisplay.presentAlert('Aviso:', 'Tabelas criadas com sucesso');
    }).catch(e => this.errorDisplay.presentAlertError(e));
  }
}
