export class Regra_Atributo {
  private idAtributo : number;
  private idRegra : number;

  constructor(idAtributo?: number, idRegra?: number) {
    this.idAtributo = idAtributo;
    this.idRegra = idRegra;
  }

  public getIdAtributo(): number {
    return this.idAtributo;
  }

  public setIdAtributo(value : number) {
    this.idAtributo = value;
  }

  public getIdRegra(): number {
    return this.idRegra;
  }

  public setIdRegra(value : number) {
    this.idRegra = value;
  }
}
