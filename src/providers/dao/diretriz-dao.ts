import { Injectable } from '@angular/core';
import {DbProvider} from "../db/db";
import {Diretriz} from "../../models/Diretriz";

/*
  Generated class for the DiretrizDaoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DiretrizDaoProvider {

  constructor(public dbProvider : DbProvider) {

  }
  public insert() : void{

  }

  public remove(id : number) : void{

  }

  public update() : void{

  }

  public getAll() : Array<Diretriz>{
    return null;
  }

}
