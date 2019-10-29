export class Regra {
  private descricaoRegra : string;
  private regra_if : string;
  private recomendacao : string;
  private idDiretriz : number;
  private idRegra : number;
  private idAtributo : number;

  constructor(descricaoRegra? : string, regra_if? : string, recomendacao? : string, idDiretriz? : number, idRegra? : number, idAtributo? : number) {
    this.descricaoRegra = descricaoRegra;
    this.regra_if = regra_if;
    this.recomendacao = recomendacao;
    this.idDiretriz = idDiretriz;
    this.idRegra = idRegra;
    this.idAtributo = idAtributo;
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

  public getRecomendacao(): string {
    return this.recomendacao;
  }

  public setRecomendacao(value: string) {
    this.recomendacao = value;
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
