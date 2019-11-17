export class Texto {
  seguencia: number;
  idLinha: number;
  textoLinha: string;
  qtdCaracteresLinha: number;
  corDaFonte: string;
  tamanhoDaFonte: number;
  tipoDaFonte: string;
  corDeFundo: string;
  titulo: string;
  alinhamentoTexto: string;
  tagEpub: string;


  constructor(seguencia: number, idLinha: number, textoLinha: string, qtdCaracteresLinha: number, corDaFonte: string, tamanhoDaFonte: number, tipoDaFonte: string, corDeFundo: string, titulo: string, alinhamentoTexto: string, tagEpub: string) {
    this.seguencia = seguencia;
    this.idLinha = idLinha;
    this.textoLinha = textoLinha;
    this.qtdCaracteresLinha = qtdCaracteresLinha;
    this.corDaFonte = corDaFonte;
    this.tamanhoDaFonte = tamanhoDaFonte;
    this.tipoDaFonte = tipoDaFonte;
    this.corDeFundo = corDeFundo;
    this.titulo = titulo;
    this.alinhamentoTexto = alinhamentoTexto;
    this.tagEpub = tagEpub;
  }
}
