export class Atributo {
  private idAtributo : number;
  private descricaiAtributo : string;
  private idMidia : number;

  constructor(idAtributo? : number, descricaiAtributo? : string, idMidia? : number) {
    this.idAtributo = idAtributo;
    this.descricaiAtributo = descricaiAtributo;
    this.idMidia = idMidia;
  }

  public getIdAtributo(): number {
    return this.idAtributo;
  }

  public setIdAtributo(value: number) {
    this.idAtributo = value;
  }

  public getDescricaiAtributo(): string {
    return this.descricaiAtributo;
  }

  public setDescricaiAtributo(value: string) {
    this.descricaiAtributo = value;
  }

  public getIdMidia(): number {
    return this.idMidia;
  }

  public setIdMidia(value: number) {
    this.idMidia = value;
  }
}
