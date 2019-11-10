export class Diretriz_Deficiencia{
  private idDiretriz : number;
  private idDeficiencia : number;

  constructor(idDiretriz?: number, idDeficiencia?: number) {
    this.idDiretriz = idDiretriz;
    this.idDeficiencia = idDeficiencia;
  }

  public getIdDeficiencia(): number {
    return this.idDeficiencia;
  }

  public setIdDeficiencia(value: number) {
    this.idDeficiencia = value;
  }

  public getIdDiretriz(): number {
    return this.idDiretriz;
  }

  public setIdDiretriz(value: number) {
    this.idDiretriz = value;
  }
}
