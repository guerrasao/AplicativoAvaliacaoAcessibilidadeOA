import { Injectable } from '@angular/core';
import {DbProvider} from "../db/db";
import {OA} from "../../models/OA";

/*
  Generated class for the OaDaoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OaDaoProvider {

  constructor(public dbProvider : DbProvider) {

  }
  public insert() : void{

  }

  public remove(id : number) : void{

  }

  public update() : void{

  }

  public getAll() : Array<OA>{
    return null;
  }

}
