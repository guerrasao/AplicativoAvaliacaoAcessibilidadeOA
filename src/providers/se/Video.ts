export class Video {
  seguencia: number;
  idVideo: number;
  tituloAlt: string;
  descricaoAlt: string;
  nome: string;
  linkVideo: string;
  legenda: string;


  constructor(seguencia: number, idVideo: number, tituloAlt: string, descricaoAlt: string, nome: string, linkVideo: string, legenda: string) {
    this.seguencia = seguencia;
    this.idVideo = idVideo;
    this.tituloAlt = tituloAlt;
    this.descricaoAlt = descricaoAlt;
    this.nome = nome;
    this.linkVideo = linkVideo;
    this.legenda = legenda;
  }
}
