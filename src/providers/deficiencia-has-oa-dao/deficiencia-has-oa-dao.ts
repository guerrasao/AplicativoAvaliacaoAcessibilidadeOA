import { Injectable } from '@angular/core';
import {DbProvider} from "../db/db";
import {Deficiencia_has_OA} from "../../models/Deficiencia_has_OA";

/*
  Generated class for the DeficienciaHasOaDaoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DeficienciaHasOaDaoProvider {

  constructor(public dbProvider : DbProvider) {

  }
  public insert() : void{

  }

  public remove(id : number) : void{

  }

  public update() : void{

  }

  public getAll() : Array<Deficiencia_has_OA>{
    return null;
  }
}
