import { Texto } from "./Texto";
import { Imagem } from "./Imagem";
import {Tabela} from "./Tabela";
import {Video} from "./Video";
import {Grafico} from "./Grafico";
import {Audio} from "./Audio";

export class Data{
  caminho: string;
  tipo: string;
  corDeFundo: string;
  themeColor: string;
  themeShade: string;
  textos: Texto[];
  imagens: Imagem[];
  tabelas: Tabela[];
  videos: Video[];
  graficos: Grafico[];
  audios: Audio[];

  constructor() {
    this.caminho ='';
    this.tipo = '';
    this.corDeFundo = '';
    this.themeColor = '';
    this.themeShade = '';
    this.textos = new Array<Texto>();
    this.imagens = new Array<Imagem>();
    this.tabelas = new Array<Tabela>();
    this.videos = new Array<Video>();
    this.graficos = new Array<Grafico>();
    this.audios = new Array<Audio>();
  }

  inserirDadosDocumento(caminho, tipo, corDeFundo, themeColor, themeShade) {
    this.caminho = caminho;
    this.tipo = tipo;
    this.corDeFundo = corDeFundo;
    this.themeColor = themeColor;
    this.themeShade = themeShade
  }

  inserirTextos(seguencia, idLinha, textoLinha, qtdCaracteresLinha, corDaFonte,
                tamanhoDaFonte, tipoDaFonte, corDeFundo, titulo, alinhamentoTexto,tagEpub) {
    this.textos.push(
      new Texto(
        seguencia,
        idLinha,
        textoLinha,
        qtdCaracteresLinha,
        corDaFonte,
        tamanhoDaFonte,
        tipoDaFonte,
        corDeFundo,
        titulo,
        alinhamentoTexto,
        tagEpub
      )
    );
  }

  inserirImagens(seguencia, idImagem, nome, tituloAlt, descricaoAlt, legenda, src, arquivo) {
      this.imagens.push(
        new Imagem(
          seguencia,
          idImagem,
          nome,
          tituloAlt,
          descricaoAlt,
          legenda,
          src,
          arquivo
        )
      );
  }

  inserirTabelas(seguencia, idTabela, estilo, tituloAlt, descricaoAlt, legenda) {
    this.tabelas.push(
      new Tabela(
        seguencia,
        idTabela,
        estilo,
        tituloAlt,
        descricaoAlt,
        legenda
      )
    );
  }

  inserirVideos(seguencia, idVideo, tituloAlt, descricaoAlt, nome, linkVideo, legenda) {
      this.videos.push(
        new Video(
          seguencia,
          idVideo,
          tituloAlt,
          descricaoAlt,
          nome,
          linkVideo,
          legenda
        )
      );
  }

  inserirGraficos(seguencia, idGrafico, estilo, tituloAlt, descricaoAlt, nome, legenda) {
      this.graficos.push(
        new Grafico(
          seguencia,
          idGrafico,
          estilo,
          tituloAlt,
          descricaoAlt,
          nome,
          legenda
        )
      );
  }

  inserirAudios(seguencia, idAudio, descricaoCompleta, legenda) {
      this.audios.push(
        new Audio(
          seguencia,
          idAudio,
          descricaoCompleta,
          legenda
        )
      );
  }

}
