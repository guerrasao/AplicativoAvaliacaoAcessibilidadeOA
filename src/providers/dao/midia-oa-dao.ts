import { Injectable } from '@angular/core';
import {DbProvider} from "../db/db";
import {Midia_OA} from "../../models/Midia_OA";

/*
  Generated class for the MidiaOaDaoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MidiaOaDaoProvider {

  constructor(public dbProvider : DbProvider) {

  }
  public insert() : void{

  }

  public remove(id : number) : void{

  }

  public update() : void{

  }

  public getAll() : Array<Midia_OA>{
    return null;
  }

}
