import { CursoServiceService } from './../cursos/cursos-services/curso-service.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';

@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    CommonModule
  ],
  // providers: [
  //   CursoServiceService
  // ],
  exports:[
    CursosComponent
  ]
})
export class CursoModule { }
