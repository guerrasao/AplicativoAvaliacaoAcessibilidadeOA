export class Deficiencia_has_OA{
  private idDeficiencia : number;
  private OA_idOA : number;

  constructor(idDeficiencia? : number, OA_idOA? : number) {
    this.idDeficiencia = idDeficiencia;
    this.OA_idOA = OA_idOA;
  }

  public getIdDeficiencia(): number {
    return this.idDeficiencia;
  }

  public setIdDeficiencia(value: number) {
    this.idDeficiencia = value;
  }

  public getOA_idOA(): number {
    return this.OA_idOA;
  }

  public setOA_idOA(value: number) {
    this.OA_idOA = value;
  }
}
