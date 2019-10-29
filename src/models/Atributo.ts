export class Atributo {
  private idAtributo : number;
  private descricaoAtributo : string;
  private idMidia : number;

  constructor(idAtributo? : number, descricaoAtributo? : string, idMidia? : number) {
    this.idAtributo = idAtributo;
    this.descricaoAtributo = descricaoAtributo;
    this.idMidia = idMidia;
  }

  public getIdAtributo(): number {
    return this.idAtributo;
  }

  public setIdAtributo(value: number) {
    this.idAtributo = value;
  }

  public getDescricaiAtributo(): string {
    return this.descricaoAtributo;
  }

  public setDescricaiAtributo(value: string) {
    this.descricaoAtributo = value;
  }

  public getIdMidia(): number {
    return this.idMidia;
  }

  public setIdMidia(value: number) {
    this.idMidia = value;
  }
}
