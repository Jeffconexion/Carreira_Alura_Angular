import { EventEmitter, Injectable } from '@angular/core';
import { LogService } from 'src/app/shared/log.service';

@Injectable()
export class CursoServiceService {


  emitirCursoCriado = new EventEmitter<string>();
  static criouNovoCurso = new EventEmitter<string>();

  private cursos: string[];

  constructor(private logService: LogService) {
    console.log("------> CursosService")
    this.cursos = ['Angular 12', 'C#', 'EF'];
  }

  getCursos(): string[] {
    debugger;
    this.logService.consoleLaog("Obtendo lista de curso.");
    return this.cursos;
  }

  addCurso(curso: string) {
    this.logService.consoleLaog(`Criando um novo curso \o/ ${curso}`);
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursoServiceService.criouNovoCurso.emit(curso);
  }

}
