import { Injectable } from '@angular/core';
import {DbProvider} from "../db/db";
import {Diretriz_Deficiencia} from "../../models/Diretriz_Deficiencia";

/*
  Generated class for the DeficienciaHasOaDaoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DiretrizDeficienciaDaoProvider {

  constructor(public dbProvider : DbProvider) {

  }
  public insert() : void{

  }

  public remove(id : number) : void{

  }

  public update() : void{

  }

  public getAll() : Array<Diretriz_Deficiencia>{
    return null;
  }
}
