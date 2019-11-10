export class Atributo {
  private idAtributo : number;
  private idMidia : number;
  private descricaoAtributo : string;

  constructor(idAtributo? : number, idMidia? : number, descricaoAtributo? : string) {
    this.idAtributo = idAtributo;
    this.idMidia = idMidia;
    this.descricaoAtributo = descricaoAtributo;
  }

  public getIdAtributo(): number {
    return this.idAtributo;
  }

  public setIdAtributo(value: number) {
    this.idAtributo = value;
  }

  public getDescricaoAtributo(): string {
    return this.descricaoAtributo;
  }

  public setDescricaoAtributo(value: string) {
    this.descricaoAtributo = value;
  }

  public getIdMidia(): number {
    return this.idMidia;
  }

  public setIdMidia(value: number) {
    this.idMidia = value;
  }
}
