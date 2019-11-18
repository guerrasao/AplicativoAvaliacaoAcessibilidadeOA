import {Diretriz} from "./Diretriz";

export class DiretrizesPorDeficiencia {
  idDeficiencia : number;
  descricaoDeficiencia : string;
  diretrizes: Array<Diretriz>;

  constructor(idDeficiencia: number, descricaoDeficiencia: string, diretrizes: Array<Diretriz>) {
    this.idDeficiencia = idDeficiencia;
    this.descricaoDeficiencia = descricaoDeficiencia;
    this.diretrizes= diretrizes;

  }


}
