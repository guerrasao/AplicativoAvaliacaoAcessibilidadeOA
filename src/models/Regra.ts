export class Regra {
  private idRegra : number;
  private idDiretriz : number;
  private descricaoRegra : string;
  private regraIf : string;

  constructor(idRegra? : number, idDiretriz? : number, descricaoRegra? : string, regraIf? : string) {
    this.idRegra = idRegra;
    this.idDiretriz = idDiretriz;
    this.descricaoRegra = descricaoRegra;
    this.regraIf = regraIf;
  }

  public getDescricaoRegra(): string {
    return this.descricaoRegra;
  }

  public setDescricaoRegra(value: string) {
    this.descricaoRegra = value;
  }

  public getRegraIf(): string {
    return this.regraIf;
  }

  public setRegraIf(value: string) {
    this.regraIf = value;
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

}
