export class OA{
  private idOA : number;
  private formatoOA : string;

  constructor(idOA? : number, formatoOA? : string) {
    this.idOA = idOA;
    this.formatoOA = formatoOA;
  }

  public getIdOA(): number {
    return this.idOA;
  }

  public setIdOA(value: number) {
    this.idOA = value;
  }

  public getFormatoOA(): string {
    return this.formatoOA;
  }

  public setFormatoOA(value: string) {
    this.formatoOA = value;
  }
}
