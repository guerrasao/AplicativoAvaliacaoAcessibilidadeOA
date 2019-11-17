export class ResponseRuleModel {
  idRegra : number;
  conteudosComErros : Array<string>;

  constructor(idRegra: number, conteudosComErros: Array<string>) {
    this.idRegra = idRegra;
    this.conteudosComErros = conteudosComErros;
  }
}
