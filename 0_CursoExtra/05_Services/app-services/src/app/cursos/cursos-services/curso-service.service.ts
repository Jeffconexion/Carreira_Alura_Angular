import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class CursoServiceService {


  emitirCursoCriado = new EventEmitter<string>();
  static criouNovoCurso = new EventEmitter<string>();

  private cursos: string[];

  constructor() {
    console.log("------> CursosService")
    this.cursos = ['Angular 12', 'C#', 'EF'];
  }

  getCursos(): string[] {
    debugger;
    return this.cursos;
  }

  addCurso(curso: string) {
    debugger;
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursoServiceService.criouNovoCurso.emit(curso);
  }

}
