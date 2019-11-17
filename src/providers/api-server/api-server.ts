import { Injectable } from '@angular/core';

/*
  Generated class for the ApiServerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiServerProvider {
  // request server
  public url : string = 'http://localhost:3001/file/upload';
  constructor() {
    console.log('Hello ApiServerProvider Provider');
  }

}
