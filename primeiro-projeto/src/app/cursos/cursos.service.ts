import { Injectable } from '@angular/core';

@Injectable() // PARA INJEÇÃO DE DEPENDÊNCIAS | faz com q essa classe seja injetavel em outras classes
export class CursosService {

  constructor() { }

  getCursos(){
    return ['Java', 'Ext JS', 'Angular'];
  }

}
