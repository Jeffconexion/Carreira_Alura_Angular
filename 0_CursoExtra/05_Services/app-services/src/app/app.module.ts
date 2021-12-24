import { CursoServiceService } from './cursos/cursos-services/curso-service.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CriarCursoModule } from './criar-curso/criar-curso.module';
import { CursoModule } from './cursos/criar-curso.module';

@NgModule({
  declarations: [
    AppComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CriarCursoModule,
    CursoModule
  ],
  providers: [CursoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
