import { BrowserModule } from '@angular/platform-browser'; // prepara a aplicação para ser rodada em um browser
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
import { CursosModule } from './cursos/cursos.module';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    MeuPrimeiro2Component
  ],
  imports: [
    BrowserModule,
    CursosModule
  ],
  providers: [], // aqui coloca os servicos
  bootstrap: [AppComponent]
})
export class AppModule { }
