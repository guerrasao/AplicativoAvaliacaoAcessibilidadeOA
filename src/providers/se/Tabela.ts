export class Tabela {
  seguencia: number;
  idTabela: number;
  estilo: string;
  tituloAlt: string;
  descricaoAlt: string;
  legenda: string;


  constructor(seguencia: number, idTabela: number, estilo: string, tituloAlt: string, descricaoAlt: string, legenda: string) {
    this.seguencia = seguencia;
    this.idTabela = idTabela;
    this.estilo = estilo;
    this.tituloAlt = tituloAlt;
    this.descricaoAlt = descricaoAlt;
    this.legenda = legenda;
  }
}
