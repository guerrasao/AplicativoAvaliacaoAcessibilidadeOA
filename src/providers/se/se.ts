import { Injectable } from '@angular/core';

/*
  Generated class for the SeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SeProvider {
  private data : any;
  constructor() {
    console.log('Hello SeProvider Provider');
  }

  public avaliaJSON(data : any){
    this.data = JSON.parse(data);


    console.log(this.data);
  }
}
