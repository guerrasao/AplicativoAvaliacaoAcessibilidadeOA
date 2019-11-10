import { Injectable } from '@angular/core';
import {DbProvider} from "../db/db";
import {Midia} from "../../models/Midia";

/*
  Generated class for the MidiaDaoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MidiaDaoProvider {

  constructor(public dbProvider : DbProvider) {

  }
  public insert() : void{

  }

  public remove(id : number) : void{

  }

  public update() : void{

  }

  public getAll() : Array<Midia>{
    return null;
  }

}
