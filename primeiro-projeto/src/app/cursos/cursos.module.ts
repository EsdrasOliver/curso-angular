import { CursosService } from './cursos.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // ele contem as diretivas e partes para serem usadas na app
// aqui nn usa o BrowserModule e sim o CommonModule

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

@NgModule({
  // aqui são os metadados
  imports: [
    CommonModule
  ],
  declarations: [ // aqui declara os modulos usados nesse componente
    CursosComponent,
    CursoDetalheComponent
  ],
  exports: [ // exporta para outros modulos
    CursosComponent
  ],
  providers: [ CursosService ]
})
export class CursosModule { }
