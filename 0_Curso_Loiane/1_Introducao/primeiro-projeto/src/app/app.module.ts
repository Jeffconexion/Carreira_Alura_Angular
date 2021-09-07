import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CursosModule } from './cursos/cursos.module';
import { MeuPrimeiroComponentComponent } from './meu-primeiro-component/meu-primeiro-component.component';
import { MeuSegundoComponentComponent } from './meu-segundo-component/meu-segundo-component.component';

@NgModule({
  declarations: [
    AppComponent,
      MeuPrimeiroComponentComponent,
      MeuSegundoComponentComponent
   ],
  imports: [
    BrowserModule,
    CursosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
