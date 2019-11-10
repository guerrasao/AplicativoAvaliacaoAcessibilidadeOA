export class Regra {
  private idRegra : number;
  private idDiretriz : number;
  private idAtributo : number;
  private descricaoRegra : string;
  private regra_if : string;

  constructor(idRegra? : number, idDiretriz? : number, idAtributo?: number, descricaoRegra? : string, regra_if? : string) {
    this.idRegra = idRegra;
    this.idDiretriz = idDiretriz;
    this.idAtributo = idAtributo;
    this.descricaoRegra = descricaoRegra;
    this.regra_if = regra_if;
  }

  public getDescricaoRegra(): string {
    return this.descricaoRegra;
  }

  public setDescricaoRegra(value: string) {
    this.descricaoRegra = value;
  }

  public getRegra_if(): string {
    return this.regra_if;
  }

  public setRegra_if(value: string) {
    this.regra_if = value;
  }

  public getIdDiretriz(): number {
    return this.idDiretriz;
  }

  public setIdDiretriz(value: number) {
    this.idDiretriz = value;
  }

  public getIdRegra(): number {
    return this.idRegra;
  }

  public setIdRegra(value: number) {
    this.idRegra = value;
  }

  public getIdAtributo(): number {
    return this.idAtributo;
  }

  public setIdAtributo(value: number) {
    this.idAtributo = value;
  }
}
