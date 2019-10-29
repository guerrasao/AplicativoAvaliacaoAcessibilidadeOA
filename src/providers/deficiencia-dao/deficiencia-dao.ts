import { Injectable } from '@angular/core';
import {DbProvider} from "../db/db";
import {Deficiencia} from "../../models/Deficiencia";

/*
  Generated class for the DeficienciaDaoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DeficienciaDaoProvider {

  constructor(public dbProvider : DbProvider) {

  }
  public insert() : void{

  }

  public remove(id : number) : void{

  }

  public update() : void{

  }

  public getAll() : Array<Deficiencia>{
    return null;
  }
}
