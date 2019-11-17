export class Audio {
  seguencia: number;
  idAudio: number;
  descricaoCompleta: string;
  legenda: string;


  constructor(seguencia: number, idAudio: number, descricaoCompleta: string, legenda: string) {
    this.seguencia = seguencia;
    this.idAudio = idAudio;
    this.descricaoCompleta = descricaoCompleta;
    this.legenda = legenda;
  }
}
