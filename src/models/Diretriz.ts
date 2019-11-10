export class Diretriz {
  private idDiretriz : number;
  private idMidia : number;
  private descricaoDiretriz : string;
  private recomendacao : string;

  constructor(idDiretriz? : number, idMidia? : number, descricaoDiretriz? : string, recomendacao?: string) {
    this.idDiretriz = idDiretriz;
    this.idMidia = idMidia;
    this.descricaoDiretriz = descricaoDiretriz;
    this.recomendacao = recomendacao;
  }

  public getIdDiretriz(): number {
    return this.idDiretriz;
  }

  public setIdDiretriz(value: number) {
    this.idDiretriz = value;
  }

  public getDescricaoDiretriz(): string {
    return this.descricaoDiretriz;
  }

  public setDescricaoDiretriz(value: string) {
    this.descricaoDiretriz = value;
  }

  public getIdMidia(): number {
    return this.idMidia;
  }

  public setIdMidia(value: number) {
    this.idMidia = value;
  }

  public getRecomendacao(): string {
    return this.recomendacao;
  }

  public setRecomendacao(value : string){
    this.recomendacao = value;
  }
}
