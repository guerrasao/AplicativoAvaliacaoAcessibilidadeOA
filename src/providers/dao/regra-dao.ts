import { Injectable } from '@angular/core';
import {DbProvider} from "../db/db";
import {Regra} from "../../models/Regra";

/*
  Generated class for the RegraDaoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RegraDaoProvider {

  constructor(public dbProvider : DbProvider) {

  }
  public insert() : void{

  }

  public remove(id : number) : void{

  }

  public update() : void{

  }

  public getAll() : Array<Regra>{
    return null;
  }

}
