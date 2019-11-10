import {SQLiteObject} from "@ionic-native/sqlite";
import {ErrorDisplayProvider} from "../error-display/error-display";

export class Db_seed {

  constructor(private db :  SQLiteObject , private errorDisplay : ErrorDisplayProvider, private forceInsert : boolean){

  }

  public contadorRegistrosTabela(table : string, db : SQLiteObject) : number{
    let sql = 'select count(*) from '+table;
    let data : any[];
    let resp : number;
    db.executeSql(sql, data).then((data : any) => {
        //console.log(data);
        //console.log(data.rows.item(0)['count(*)']);
        resp = data.rows.item(0)['count(*)'];
    }).catch( e => {
      this.errorDisplay.presentAlertError(e);
      resp = 0;
    });
    return resp;
  }

  // tabela deficiencia
  public seed_deficiencia() : void{
    if (this.forceInsert == true || (this.contadorRegistrosTabela('Deficiencia', this.db) == 0)) {
      let sql = 'insert into Deficiencia(idDeficiencia, descricaoDeficiencia) values(?, ?)';
      let data = [
        [0, 'Visual'],
        [1, 'Auditiva'],
        [2, 'Mental'],
        [3, 'Física'],
        [4, 'Múltipla']
      ];
      for (let i = 0; i < data.length; i++) {
        this.db.executeSql(sql, data[i]).then(() => {
          console.log('registros inseridos Deficiencia')
        }).catch(e => this.errorDisplay.presentAlertError(e));
      }
    }
  }

  // OA
  public seed_oa(){
    if (this.forceInsert == true || (this.contadorRegistrosTabela('OA', this.db) == 0)) {
      let sql = 'insert into OA(idOA, formatoOA) values(?, ?)';
      let data = [
        [0, 'docx'],
        [1, 'epub']
      ];
      for (let i = 0; i < data.length; i++) {
        this.db.executeSql(sql, data[i]).then(() => {
          console.log('registros inseridos OA')
        }).catch(e => this.errorDisplay.presentAlertError(e));
      }
    }
  }

  // midia
  public seed_midia(){
    if (this.forceInsert == true || (this.contadorRegistrosTabela('Midia', this.db) == 0)) {
      let sql = 'insert into Midia(idMidia, tipoMidia) values(?, ?)';
      let data = [
        [0, 'textos'],
        [1, 'imagens'],
        [2, 'tabelas'],
        [3, 'videos'],
        [4, 'graficos'],
        [5, 'audios'],
        [6, 'file'] // para as propriedades gerais do documento
      ];
      for (let i = 0; i < data.length; i++) {
        this.db.executeSql(sql, data[i]).then(() => {
          console.log('registros inseridos Midia')
        }).catch(e => this.errorDisplay.presentAlertError(e));
      }
    }
  }

  // midia_oa
  public seed_midia_oa(){
    if (this.forceInsert == true || (this.contadorRegistrosTabela('Midia_OA', this.db) == 0)) {
      let sql = 'insert into Midia_OA(idMidia, idOA) values(?, ?)';
      let data = [
        [0, 1],
        [0, 2],
        [0, 3],
        [0, 4],
        [0, 5],
        [1, 0],
        [1, 1],
        [1, 2],
        [1, 4]
      ];
      for (let i = 0; i < data.length; i++) {
        this.db.executeSql(sql, data[i]).then(() => {
          console.log('registros inseridos Midia_OA')
        }).catch(e => this.errorDisplay.presentAlertError(e));
      }
    }
  }

  // deretriz
  public seed_diretriz(){
    if (this.forceInsert == true || (this.contadorRegistrosTabela('Diretriz', this.db) == 0)) {
      let sql = 'insert into Diretriz(idDiretriz, idMidia, descricaoDiretriz, recomendacao) values(?, ?, ?, ?)';
      let data = [
        [0, 0, 'Todo texto apresentado deve ter Fundo de cor sólida', ''],
        [1, 0, 'Todo texto apresentado deve ter Cores alteráveis e perceptíveis sem cor', ''],
        [2, 0, 'Todo texto apresentado deve ter Estrutura e formatação adequada', ''],
        [3, 0, 'Todo texto apresentado deve ter Equivalentes gráficos ou sonoros', ''],
        [4, 0, 'Todo texto Pode ser Transformado em página somente textual', ''],
        [5, 0, 'Todo texto Pode ser Convertido em áudio, ou ter descrição sonora', ''],
        [6, 0, 'Todo texto Pode ser Traduzido ou transcrito em Libras', ''],
        [7, 0, 'Todo texto Pode ser Impresso', ''],
        [8, 0, 'Todo texto Pode ser Visualizado na tela na forma escrita', ''],
        [9, 0, 'Todo texto Pode ser Tátil, impresso em Braille', ''],
        [10, 0, 'Todo texto Pode ser Imagem de texto', ''],
        [11, 0, 'Todo texto Pode ser Texto alternativo ou descrição de outras mídias', ''],
        [12, 0, 'A apresentação de texto deve ter Fundo de cor sólida e contrastante, os melhores contrastes são entre cores complementares', ''],
        [13, 0, 'A apresentação de texto deve ter Cores modificáveis, com opção em preto e branco, e com destaques em tamanhos diferentes, itálico, negrito', ''],
        [14, 0, 'A apresentação de texto deve ter Texto alternativo com o conteúdo da imagem se for texto apresentado em imagem ou botão de comando', ''],
        [15, 0, 'A apresentação de texto deve ter Uma única coluna de preferência, para garantir a ordem de leitura', ''],
        [16, 0, 'Linguagem no texto deve ser Clara e simples', ''],
        [17, 0, 'Linguagem no texto deve ser Concisa e factual e direta', ''],
        [18, 0, 'Linguagem no texto deve ser Pontuada adequadamente, para percepção dos leitores de tela', ''],
        [19, 0, 'Linguagem no texto deve ser Apresentado em estilo de escrita e terminologia condizente com o nível do conteúdo', ''],
        [20, 0, 'Linguagem no texto deve ser Em forma de prosa', ''],
        [21, 0, 'Estrutura do texto deve apresentar Identificação de cabeçalhos, e outros elementos estruturais', ''],
        [22, 0, 'Estrutura do texto deve apresentar Organização do conteúdo de forma lógica e ordem compreensível', ''],
        [23, 0, 'Estrutura do texto deve apresentar Hierarquia de tópicos e enumeração', ''],
        [24, 0, 'Estrutura do texto deve apresentar No máximo 80 caracteres por linha', ''],
        [25, 0, 'Estrutura do texto deve apresentar Quebra do texto em segmentos, com título bem definido', ''],
        [26, 0, 'Estrutura do texto deve apresentar Versão para impressão em uma única página.', ''],
        [27, 0, 'Estrutura do texto deve apresentar Abreviaturas e acrônimos especificados por extenso na sua primeira ocorrência', ''],
        [28, 0, 'Estrutura do texto deve apresentar Definição de todas as palavras ou expressões não comuns, em texto alternativo ou link para glossário no documento.', ''],
        [29, 0, 'Estrutura do texto: Não usar texto justificado nem centralmente alinhado', ''],
        [30, 1, 'Imagens estáticas devem ter Visualização monocromática', ''],
        [31, 1, 'Imagens estáticas devem ter Alto contraste', ''],
        [32, 1, 'Imagens estáticas devem ter Escalonáveis, por lupa virtual até 200%', ''],
        [33, 1, 'Imagens estáticas devem ter Mídia alternativa, ao menos uma opção: Texto alternativo com propósito equivalente ao da imagem; Descrição completa equivalente em Áudio ou textual; Alternativa simplificada para impressão em Braille', ''],
        [34, 2, 'Tabelas devem ter Identificação clara de títulos, cabeçalhos, linhas e colunas', ''],
        [35, 2, 'Tabelas devem ter Leitura linear, linha a linha', ''],
        [36, 2, 'Tabelas devem ter Resumo textual', ''],
        [37, 2, 'Tabelas devem ter Toda a função da tabela descrita em Captions', ''],
        [38, 2, 'Tabelas devem ter Sumário para descrever a forma da tabela', ''],
        [39, 2, 'Tabelas complexas devem ser convertidas em tabelas simples.', ''],
        [40, 2, 'Tabelas Não devem ser usadas para formatação', ''],
        [41, 3, 'Vídeos, animações ou scripts devem ter Título claro que se relacione com o tema', ''],
        [42, 3, 'Vídeos, animações ou scripts devem ter Descrição textual do tema do filme ou animação', ''],
        [43, 3, 'Vídeos, animações ou scripts devem ter Texto alternativo que descreve a função do vídeo', ''],
        [44, 3, 'Vídeos, animações ou scripts devem ter Mídia alternativa, ao menos uma opção: Transcrição completa textual ou em áudio; Áudio descrição estendida; Áudio descrição sincronizada; Legenda Captions, ou interpretação em Libras se o conteúdo for sonorizado', ''],
        [45, 4, 'Gráficos Devem ser preferencialmente apresentados em forma de tabelas', ''],
        [46, 4, 'Gráficos devem apresentar Texto descritivo do layout do gráfico, localização das variáveis e resultados apresentados', ''],
        [47, 4, 'Gráficos devem apresentar Sumário do gráfico apresentado como título.', ''],
        [48, 4, 'Gráficos: O objetivo principal é informação e significado, e não uma sequencia de dados ou números', ''],
        [49, 5, 'Áudio Deve apresentar opção de mídia textual: Legenda', ''],
        [50, 5, 'Áudio Deve apresentar opção de mídia textual: Captions', ''],
        [51, 5, 'Áudio Deve apresentar opção de mídia textual: Descrição completa', ''],
        [52, 5, 'Áudio Deve apresentar opção de mídia textual: Texto Alternativo visual', ''],
        [53, 5, 'Áudio Deve apresentar opção de mídia textual: Tradução em Língua de Sinais', ''],
        [54, 5, 'Áudio Deve apresentar Controles aparentes de volume, pausa, liga/desliga', ''],
        [55, 5, 'Áudio Não deve ter som de fundo', '']
      ];
      for (let i = 0; i < data.length; i++) {
        this.db.executeSql(sql, data[i]).then(() => {
          console.log('registros inseridos Diretriz')
        }).catch(e => this.errorDisplay.presentAlertError(e));
      }
    }
  }

  // preciso de ajuda aqui no seed dessa tabela
  // diretriz_deficiencia
  public seed_diretriz_deficiencia(){
    if (this.forceInsert == true || (this.contadorRegistrosTabela('Diretriz_Deficiencia', this.db) == 0)) {
      let sql = 'insert into Diretriz_Deficiencia(idDiretriz, idDeficiencia) values(?, ?)';
      let data = [
// APENAS EXEMPLO PARA INTERFACE, ATUALIZAR
        [0, 0],
        [1, 0],
        [2, 0],
        [3, 0],
        [4, 0],
        [5, 0],
        [6, 0],
        [7, 0],
        [8, 0],
        [9, 0],
        [10, 0],
        [11, 0],
        [12, 0],
        [13, 0],
        [14, 0],
        [15, 0],
        [16, 0],
        [17, 0],
        [18, 0],
        [19, 0],
        [20, 0],
        [21, 0],
        [22, 0],
        [23, 0],
        [24, 0],
        [25, 0],
        [26, 0],
        [27, 0],
        [28, 0],
        [29, 0],
        [30, 1],
        [31, 1],
        [32, 1],
        [33, 1],
        [34, 2],
        [35, 2],
        [36, 2],
        [37, 2],
        [38, 2],
        [39, 2],
        [40, 2],
        [41, 3],
        [42, 3],
        [43, 3],
        [44, 3],
        [45, 4],
        [46, 4],
        [47, 4],
        [48, 4],
        [49, 4],
        [50, 4],
        [51, 4],
        [52, 4],
        [53, 4],
        [54, 4],
        [55, 4]
      ];
      for (let i = 0; i < data.length; i++) {
        this.db.executeSql(sql, data[i]).then(() => {
          console.log('registros inseridos Diretriz_Deficiencia')
        }).catch(e => this.errorDisplay.presentAlertError(e));
      }
    }
  }

  // atributo
  // esses atributos vem dos vetores da API de extracao de parametros da Juliana
  public seed_atributo(){
    if (this.forceInsert == true || (this.contadorRegistrosTabela('Atributo', this.db) == 0)) {
      let sql = 'insert into Atributo(idAtributo, idMidia, descricaoAtributo) values(?, ?, ?)';
      let data = [
        [0, 0, 'sequencia'],
        [1, 0, 'idLinha'],
        [2, 0, 'textoLinha'],
        [3, 0, 'qtdCaracteresLinha'],
        [4, 0, 'corDaFonte'],
        [5, 0, 'tamanhoDaFonte'],
        [6, 0, 'tipoDaFonte'],
        [7, 0, 'corDeFundo'],
        [8, 0, 'titulo'],
        [9, 0, 'alinhamentoTexto'],
        [10, 0, 'tagEpub'],
        [11, 1, 'sequencia'],
        [12, 1, 'idImagem'],
        [13, 1, 'nome'],
        [14, 1, 'tituloAlt'],
        [15, 1, 'descricaoAlt'],
        [16, 1, 'legenda'],
        [17, 1, 'src'],
        [18, 1, 'arquivo'],
        [19, 2, 'seguencia'],
        [20, 2, 'idTabela'],
        [21, 2, 'estilo'],
        [22, 2, 'tituloAlt'],
        [23, 2, 'descricaoAlt'],
        [24, 2, 'legenda'],
        [25, 3, 'seguencia'],
        [26, 3, 'idVideo'],
        [27, 3, 'tituloAlt'],
        [28, 3, 'descricaoAlt'],
        [29, 3, 'nome'],
        [30, 3, 'linkVideo'],
        [31, 3, 'legenda'],
        [32, 4, 'sequencia'],
        [33, 4, 'idGrafico'],
        [34, 4, 'estilo'],
        [35, 4, 'tituloAlt'],
        [36, 4, 'descricaoAlt'],
        [37, 4, 'nome'],
        [38, 4, 'legenda'],
        [39, 5, 'seguencia'],
        [40, 5, 'idAudio'],
        [41, 5, 'descricaoCompleta'],
        [42, 5, 'legenda'],
        [43, 6, 'caminho'],
        [44, 6, 'tipo'],
        [45, 6, 'corDeFundo'],
        [46, 6, 'themeColor'],
        [47, 6, 'themeShade']
      ];
      for (let i = 0; i < data.length; i++) {
        this.db.executeSql(sql, data[i]).then(() => {
          console.log('registros inseridos Atributo')
        }).catch(e => this.errorDisplay.presentAlertError(e));
      }
    }
  }

  // regra
  public seed_regra(){
    if (this.forceInsert == true || (this.contadorRegistrosTabela('Regra', this.db) == 0)) {
      let sql = 'insert into Regra(idRegra, idDiretriz, descricaoRegra, regraIf) values(?, ?, ?, ?)';
      let data = [
        [0, 12, 'Verificar contraste entre o texto e a cor de fundo', ''],
        [1, 21, 'Verificar se existem cabeçalhos identificados como títulos, verificação da existência de ao menos uma vez palavra título ou title no atributo titulo dos textos', ''],
        [2, 29, 'Verificar se o texto não está com alinhamento justificado ou centralizado', ''],
        [3, 33, 'Verificar se imagens possuem titulo e descrição alternativa', ''],
        [4, 34, 'Verificar se a tabela possui título', ''],
        [5, 36, 'Verificar se a tabela possui descrição alternativa', ''],
        [6, 41, 'Verificar se o vídeo possui título', ''],
        [7, 43, 'Verificar se o vídeo possui descrição alternativa', ''],
        [8, 46, 'Verificar se o gráfico possui descrição alternativa', ''],
        [9, 47, 'Verificar se o gráfico possui um sumário no título, verificação da existência da palavra sumário', ''],
        [10, 49, 'Verificar se o áudio possui uma legenda', '']
      ];
      for (let i = 0; i < data.length; i++) {
        this.db.executeSql(sql, data[i]).then(() => {
          console.log('registros inseridos Regra')
        }).catch(e => console.error(e));
      }
    }
  }

  //regra_atributo
  public seed_regra_atributo(){
    if (this.forceInsert == true || (this.contadorRegistrosTabela('Regra_Atributo', this.db) == 0)) {
      let sql = 'insert into Regra_Atributo(idAtributo, idRegra) values(?, ?)';
      let data = [
        [45, 0],
        [4, 0],
        [7, 0],
        [8, 1],
        [9, 2],
        [14, 3],
        [15, 3],
        [22, 4],
        [23, 5],
        [27, 6],
        [28, 7],
        [36, 8],
        [35, 9],
        [42, 10]
      ];
      for (let i = 0; i < data.length; i++) {
        this.db.executeSql(sql, data[i]).then(() => {
          console.log('registros inseridos Regra_Atributo')
        }).catch(e => this.errorDisplay.presentAlertError(e));
      }
    }
  }
}
