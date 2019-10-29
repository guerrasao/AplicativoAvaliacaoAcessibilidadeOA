import {Midia} from "./Midia";

export class Diretriz {
  private idDiretriz : number;
  private descricaoDiretriz : string;
  private idMidia : number;

  constructor(idDiretriz? : number, descricaoDiretriz? : string, idMidia? : number) {
    this.idDiretriz = idDiretriz;
    this.descricaoDiretriz = descricaoDiretriz;
    this.idMidia = idMidia;
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
}
