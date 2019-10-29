export class Deficiencia {
  private idDeficiencia : number;
  private descricaoDeficiencia : string;

  constructor(idDeficiencia? : number, descricaoDeficiencia? : string) {
    this.idDeficiencia = idDeficiencia;
    this.descricaoDeficiencia = descricaoDeficiencia;
  }

  public getIdDeficiencia(): number {
    return this.idDeficiencia;
  }

  public setIdDeficiencia(value: number) {
    this.idDeficiencia = value;
  }

  public getDescricaoDeficiencia(): string {
    return this.descricaoDeficiencia;
  }

  public setDescricaoDeficiencia(value: string) {
    this.descricaoDeficiencia = value;
  }
}
