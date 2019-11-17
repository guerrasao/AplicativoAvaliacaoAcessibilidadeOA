export class Imagem {
  seguencia: number;
  idImagem: number;
  nome: string;
  tituloAlt: string;
  descricaoAlt: string;
  legenda: string;
  src: string;
  arquivo: string;


  constructor(seguencia: number, idImagem: number, nome: string, tituloAlt: string, descricaoAlt: string, legenda: string, src: string, arquivo: string) {
    this.seguencia = seguencia;
    this.idImagem = idImagem;
    this.nome = nome;
    this.tituloAlt = tituloAlt;
    this.descricaoAlt = descricaoAlt;
    this.legenda = legenda;
    this.src = src;
    this.arquivo = arquivo;
  }
}
