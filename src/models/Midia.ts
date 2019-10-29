export class Midia{
  private idMidia : number;
  private tipoMidia : string;

  constructor(idMidia? : number, tipoMidia? : string) {
    this.idMidia = idMidia;
    this.tipoMidia = tipoMidia;
  }

  public getIdMidia(): number {
    return this.idMidia;
  }

  public setIdMidia(value: number) {
    this.idMidia = value;
  }

  public getTipoMidia(): string {
    return this.tipoMidia;
  }

  public setTipoMidia(value: string) {
    this.tipoMidia = value;
  }
}
