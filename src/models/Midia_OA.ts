export class Midia_OA {
  private idMidia : number;
  private idOA : number;

  constructor(idMidia: number, idOA: number) {
    this.idMidia = idMidia;
    this.idOA = idOA;
  }

  public getIdMidia(): number {
    return this.idMidia;
  }

  public setIdMidia(value: number) {
    this.idMidia = value;
  }

  public getIdOA(): number {
    return this.idOA;
  }

  public setIdOA(value: number) {
    this.idOA = value;
  }
}
