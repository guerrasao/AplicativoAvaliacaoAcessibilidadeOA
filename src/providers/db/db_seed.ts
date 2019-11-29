import {SQLiteObject} from "@ionic-native/sqlite";
import {ErrorDisplayProvider} from "../error-display/error-display";
import {Injectable} from "@angular/core";

@Injectable()
export class Db_seed {
  constructor(private db :  SQLiteObject , private errorDisplay : ErrorDisplayProvider, private forceInsert : boolean){

  }

  public contadorRegistrosTabela(table : string, db : SQLiteObject) : any{
    let sql = 'select count(*) as c from '+table;
    let data : any[];
    let resp : Number = null;
    return db.executeSql(sql, data).then((data : any) => {
        //console.log(data);
        //console.log(data.rows.item(0)['count(*)']);
        let result : any = data.rows.item(0);
        resp = result.c;
        return resp;
    }).catch( e => {
      this.errorDisplay.presentAlertError(e);
      return resp = null;
    });
  }

  // tabela deficiencia
  public seed_deficiencia() : void{
    let numero : any = this.contadorRegistrosTabela('Deficiencia', this.db);
    numero.then((num) => {
      if (this.forceInsert == true || num == 0 || num == null) {
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
            console.log('registros inseridos Deficiencia');
          }).catch(e => this.errorDisplay.presentAlertError(e));
        }
      }else{
        console.log(('Registros encontrados Deficiencia: '+num).toString());
      }
    });
  }

  // OA
  public seed_oa(){
    let numero : any = this.contadorRegistrosTabela('OA', this.db);
    numero.then((num) => {
      if (this.forceInsert == true || num == 0 || num == null) {
        let sql = 'insert into OA(idOA, formatoOA) values(?, ?)';
        let data = [
          [0, 'docx'],
          [1, 'epub']
        ];
        for (let i = 0; i < data.length; i++) {
          this.db.executeSql(sql, data[i]).then(() => {
            console.log('registros inseridos OA');
          }).catch(e => this.errorDisplay.presentAlertError(e));
        }
      }else{
        console.log(('Registros encontrados OA: '+num).toString());
      }
    });
  }

  // midia
  public seed_midia(){
    let numero : any = this.contadorRegistrosTabela('Midia', this.db);
    numero.then((num) => {
      if (this.forceInsert == true || num == 0 || num == null) {
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
            console.log('registros inseridos Midia');
          }).catch(e => this.errorDisplay.presentAlertError(e));
        }
      }else{
        console.log(('Registros encontrados Midia: '+num).toString());
      }
    });
  }

  // midia_oa
  public seed_midia_oa(){
    let numero : any = this.contadorRegistrosTabela('Midia_OA', this.db);
    numero.then((num) => {
      if (this.forceInsert == true || num == 0 || num == null) {
        let sql = 'insert into Midia_OA(idMidia, idOA) values(?, ?)';
        let data = [
          [0, 0],
          [1, 0],
          [2, 0],
          [3, 0],
          [4, 0],
          [5, 0],
          [6, 0],
          [0, 1],
          [1, 1],
          [2, 1],
          [4, 1],
          [6, 1]
        ];
        for (let i = 0; i < data.length; i++) {
          this.db.executeSql(sql, data[i]).then(() => {
            console.log('registros inseridos Midia_OA');
          }).catch(e => this.errorDisplay.presentAlertError(e));
        }
      }else{
        console.log(('Registros encontrados Midia_OA: '+num).toString());
      }
    });
  }

  // deretriz
  public seed_diretriz(){
    let numero : any = this.contadorRegistrosTabela('Diretriz', this.db);
    numero.then((num) => {
      if (this.forceInsert == true || num == 0 || num == null) {
        let sql = 'insert into Diretriz(idDiretriz, idMidia, descricaoDiretriz, recomendacao) values(?, ?, ?, ?)';
        let data = [
          [0, 0, 'Todo texto apresentado deve ter fundo de cor sólida', ''],
          [1, 0, 'Todo texto apresentado deve ter cores alteráveis e perceptíveis sem cor', ''],
          [2, 0, 'Todo texto apresentado deve ter estrutura e formatação adequada', ''],
          [3, 0, 'Todo texto apresentado deve ter equivalentes gráficos ou sonoros', ''],
          [4, 0, 'Todo texto Pode ser transformado em página somente textual', ''],
          [5, 0, 'Todo texto Pode ser convertido em áudio, ou ter descrição sonora', ''],
          [6, 0, 'Todo texto Pode ser traduzido ou transcrito em Libras', ''],
          [7, 0, 'Todo texto Pode ser impresso', ''],
          [8, 0, 'Todo texto Pode ser visualizado na tela na forma escrita', ''],
          [9, 0, 'Todo texto Pode ser tátil, impresso em Braille', ''],
          [10, 0, 'Todo texto Pode ser imagem de texto', ''],
          [11, 0, 'Todo texto Pode ser texto alternativo ou descrição de outras mídias', ''],
          [12, 0, 'A apresentação de texto deve ter fundo de cor sólida e contrastante, os melhores contrastes são entre cores complementares', ''],
          [13, 0, 'A apresentação de texto deve ter cores modificáveis, com opção em preto e branco, e com destaques em tamanhos diferentes, itálico, negrito', ''],
          [14, 0, 'A apresentação de texto deve ter texto alternativo com o conteúdo da imagem se for texto apresentado em imagem ou botão de comando', ''],
          [15, 0, 'A apresentação de texto deve ter uma única coluna de preferência, para garantir a ordem de leitura', ''],
          [16, 0, 'A linguagem do texto deve ser clara e simples', ''],
          [17, 0, 'A linguagem do texto deve ser concisa e factual e direta', ''],
          [18, 0, 'A linguagem do texto deve ser pontuada adequadamente, para percepção dos leitores de tela', ''],
          [19, 0, 'A linguagem do texto deve ser apresentado em estilo de escrita e terminologia condizente com o nível do conteúdo', ''],
          [20, 0, 'A linguagem do texto deve ser em forma de prosa', ''],
          [21, 0, 'A estrutura do texto deve apresentar identificação de cabeçalhos, e outros elementos estruturais', ''],
          [22, 0, 'A estrutura do texto deve apresentar organização do conteúdo de forma lógica e ordem compreensível', ''],
          [23, 0, 'A estrutura do texto deve apresentar hierarquia de tópicos e enumeração', ''],
          [24, 0, 'A estrutura do texto deve apresentar no máximo 80 caracteres por linha', ''],
          [25, 0, 'A estrutura do texto deve apresentar quebra do texto em segmentos, com título bem definido', ''],
          [26, 0, 'A estrutura do texto deve apresentar versão para impressão em uma única página.', ''],
          [27, 0, 'A estrutura do texto deve apresentar abreviaturas e acrônimos especificados por extenso na sua primeira ocorrência', ''],
          [28, 0, 'A estrutura do texto deve apresentar definição de todas as palavras ou expressões não comuns, em texto alternativo ou link para glossário no documento.', ''],
          [29, 0, 'Não usar texto justificado nem centralmente alinhado', ''],
          [30, 1, 'As imagens estáticas devem ter visualização monocromática', ''],
          [31, 1, 'As imagens estáticas devem ter alto contraste', ''],
          [32, 1, 'As imagens estáticas devem ter escalonáveis, por lupa virtual até 200%', ''],
          [33, 1, 'As imagens estáticas devem ter mídia alternativa, ao menos uma opção: texto alternativo com propósito equivalente ao da imagem; descrição completa equivalente em áudio ou textual; alternativa simplificada para impressão em Braille', ''],
          [34, 2, 'As tabelas devem ter identificação clara de títulos, cabeçalhos, linhas e colunas', ''],
          [35, 2, 'As tabelas devem ter leitura linear, linha a linha', ''],
          [36, 2, 'As tabelas devem ter resumo textual', ''],
          [37, 2, 'As tabelas devem ter toda a função da tabela descrita em captions', ''],
          [38, 2, 'As tabelas devem ter Sumário para descrever a forma da tabela', ''],
          [39, 2, 'As tabelas complexas devem ser convertidas em tabelas simples.', ''],
          [40, 2, 'As tabelas não devem ser usadas para formatação', ''],
          [41, 3, 'Os vídeos, animações ou scripts devem ter título claro que se relacione com o tema', ''],
          [42, 3, 'Os vídeos, animações ou scripts devem ter descrição textual do tema do filme ou animação', ''],
          [43, 3, 'Os vídeos, animações ou scripts devem ter texto alternativo que descreve a função do vídeo', ''],
          [44, 3, 'Os vídeos, animações ou scripts devem ter mídia alternativa, ao menos uma opção: transcrição completa textual ou em áudio; áudio descrição estendida; áudio descrição sincronizada; legenda Captions, ou interpretação em Libras se o conteúdo for sonorizado', ''],
          [45, 4, 'Os gráficos devem ser preferencialmente apresentados em forma de tabelas', ''],
          [46, 4, 'Os gráficos devem apresentar texto descritivo do layout do gráfico, localização das variáveis e resultados apresentados', ''],
          [47, 4, 'Os gráficos devem apresentar sumário do gráfico apresentado como título.', ''],
          [48, 4, 'Nos gráficos: o objetivo principal é informação e significado, e não uma sequencia de dados ou números', ''],
          [49, 5, 'O áudio deve apresentar opção de mídia textual: legenda', ''],
          [50, 5, 'O áudio deve apresentar opção de mídia textual: captions', ''],
          [51, 5, 'O áudio deve apresentar opção de mídia textual: descrição completa', ''],
          [52, 5, 'O áudio deve apresentar opção de mídia textual: texto alternativo visual', ''],
          [53, 5, 'O áudio deve apresentar opção de mídia textual: tradução em língua de sinais', ''],
          [54, 5, 'O áudio deve apresentar controles aparentes de volume, pausa, liga/desliga', ''],
          [55, 5, 'O áudio não deve ter som de fundo', '']
        ];
        for (let i = 0; i < data.length; i++) {
          this.db.executeSql(sql, data[i]).then(() => {
            console.log('registros inseridos Diretriz');
          }).catch(e => this.errorDisplay.presentAlertError(e));
        }
      }else{
        console.log(('Registros encontrados Diretriz: '+num).toString());
      }
    });
  }

  // preciso de ajuda aqui no seed dessa tabela
  // diretriz_deficiencia
  public seed_diretriz_deficiencia(){
    let numero : any = this.contadorRegistrosTabela('Diretriz_Deficiencia', this.db);
    numero.then((num) => {
      if (this.forceInsert == true || num == 0 || num == null) {
        let sql = 'insert into Diretriz_Deficiencia(idDiretriz, idDeficiencia) values(?, ?)';
        let data = [
          //para deficiência visual incluir todas as recomendações de texto, gráfico e tabela
          //de texto: de 0 até 29
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
          //e assim por diante até
          //[29,0]
          //para deficiência visual incluir a diretriz 33 sobre imagens
          [33, 0],
          //para deficiência visual incluir todas as diretrizes sobre tabelas
          [34, 0],
          [35, 0],
          [36, 0],
          [37, 0],
          [38, 0],
          [39, 0],
          [40, 0],
          //até [40,0]
          //para deficiência visual incluir a diretriz 44 sobre vídeos
          [44, 0],
          //para deficiência visual incluir a diretriz 46 sobre gráficos
          //[46, 0],
          //para deficiência visual incluir todas as recomendações sobre os gráficos
          //de 45 até 48
          [45, 0],
          [46, 0],
          [47, 0],
          [48, 0],
          //para deficiência visual incluir as recomendações de 49 até 53 sobre áudios
          [49, 0],
          [50, 0],
          [51, 0],
          [52, 0],
          [53, 0],
          //para deficiência auditiva incluir todas as recomendações sobre texto
          //de texto: de 0 até 29
          [0, 1],
          [1, 1],
          [2, 1],
          [3, 1],
          [4, 1],
          [5, 1],
          [6, 1],
          [7, 1],
          [8, 1],
          [9, 1],
          [10, 1],
          [11, 1],
          [12, 1],
          [13, 1],
          [14, 1],
          [15, 1],
          [16, 1],
          [17, 1],
          [18, 1],
          [19, 1],
          [20, 1],
          [21, 1],
          [22, 1],
          [23, 1],
          [24, 1],
          [25, 1],
          [26, 1],
          [27, 1],
          [28, 1],
          //e assim por diante até
          [29, 1],
          //para deficiência auditiva incluir todas as recomendações sobre tabelas
          [34, 1],
          [35, 1],
          [36, 1],
          [37, 1],
          [38, 1],
          [39, 1],
          [40, 1],
          //até [40,1]
          //para deficiência auditiva incluir todas as recomendações sobre os gráficos
          //de 45 até 48
          [45, 1],
          [46, 1],
          [47, 1],
          [48, 1],
          //para deficiência auditiva incluir as recomendações sobre áudio de 49 até 55
          [49, 1],
          [50, 1],
          [51, 1],
          [52, 1],
          [53, 1],
          [54, 1],
          [55, 1],
          //até [55,1]
          //para deficiência auditiva incluir as recomendações sobre imagens de 30 até 33
          [30, 1],
          [31, 1],
          [32, 1],
          [33, 1],
          //para deficiência auditiva incluir as recomendações sobre vídeos de 41 até 44
          [41, 1],
          [42, 1],
          [43, 1],
          [44, 1],
          //para deficiência mental incluir as recomendações de texto 16, 17 e 18
          [16, 2],
          [17, 2],
          [18, 2],
          //para deficiência física não sei que recomendações devemos incluir
          //para quem tem deficiência múltipla eu incluiria todas as diretrizes, de 0 até 55
          [0, 4],
          [1, 4],
          [2, 4],
          [3, 4],
          [4, 4],
          [5, 4],
          [6, 4],
          [7, 4],
          [8, 4],
          [9, 4],
          [10, 4],
          [11, 4],
          [12, 4],
          [13, 4],
          [14, 4],
          [15, 4],
          [16, 4],
          [17, 4],
          [18, 4],
          [19, 4],
          [20, 4],
          [21, 4],
          [22, 4],
          [23, 4],
          [24, 4],
          [25, 4],
          [26, 4],
          [27, 4],
          [28, 4],
          [29, 4],
          [30, 4],
          [31, 4],
          [32, 4],
          [33, 4],
          [34, 4],
          [35, 4],
          [36, 4],
          [37, 4],
          [38, 4],
          [39, 4],
          [40, 4],
          [41, 4],
          [42, 4],
          [43, 4],
          [44, 4],
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
          //até 55
          [55, 4]
        ];
        for (let i = 0; i < data.length; i++) {
          this.db.executeSql(sql, data[i]).then(() => {
            console.log('registros inseridos Diretriz_Deficiencia');
          }).catch(e => this.errorDisplay.presentAlertError(e));
        }
      }else{
        console.log(('Registros encontrados Diretriz_Deficiencia: '+num).toString());
      }
    });
  }

  // atributo
  // esses atributos vem dos vetores da API de extracao de parametros da Juliana
  public seed_atributo(){
    let numero : any = this.contadorRegistrosTabela('Atributo', this.db);
    numero.then((num) => {
      if (this.forceInsert == true || num == 0 || num == null) {
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
            console.log('registros inseridos Atributo');
          }).catch(e => this.errorDisplay.presentAlertError(e));
        }
      }else{
        console.log(('Registros encontrados Atributo: '+num).toString());
      }
    });
  }

  // regra
  public seed_regra(){
    let numero : any = this.contadorRegistrosTabela('Regra', this.db);
    numero.then((num) => {
      if (this.forceInsert == true || num == 0 || num == null) {
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
            console.log('registros inseridos Regra');
          }).catch(e => console.error(e));
        }
      }else{
        console.log(('Registros encontrados Regra: '+num).toString());
      }
    });
  }

  //regra_atributo
  public seed_regra_atributo(){
    let numero : any = this.contadorRegistrosTabela('Regra_Atributo', this.db);
    numero.then((num) => {
      if (this.forceInsert == true || num == 0 || num == null) {
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
            console.log('registros inseridos Regra_Atributo');
          }).catch(e => this.errorDisplay.presentAlertError(e));
        }
      }else{
        console.log(('Registros encontrados Regra_Atributo: '+num).toString());
      }
    });
  }
}
