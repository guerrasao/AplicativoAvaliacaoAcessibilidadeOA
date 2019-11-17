export class Grafico {
  seguencia: number;
  idGrafico: number;
  estilo: string;
  tituloAlt: string;
  descricaoAlt: string;
  nome: string;
  legenda: string;


  constructor(seguencia: number, idGrafico: number, estilo: string, tituloAlt: string, descricaoAlt: string, nome: string, legenda: string) {
    this.seguencia = seguencia;
    this.idGrafico = idGrafico;
    this.estilo = estilo;
    this.tituloAlt = tituloAlt;
    this.descricaoAlt = descricaoAlt;
    this.nome = nome;
    this.legenda = legenda;
  }
}
