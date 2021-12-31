import { CursoServiceService } from './cursos-services/curso-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];
  //cursoService: CursoServiceService;

  //Aqui que acontece a Injecao de dependencia.
  constructor(private _cursoService: CursoServiceService) {
    //this.cursoService = new CursoServiceService();
    //this.cursoService = _cursoService;
  }

  ngOnInit(): void {
    this.cursos = this._cursoService.getCursos();

    //subscribe para ficar na escutar do evento emitir
    this._cursoService.emitirCursoCriado.subscribe(

      //parametro     //funcao      //corpo
      curso            =>           console.log(curso)

      //arrayFunction equivalente
      // function (curso) {
      //   console.log(curso);
      // }

    );

    CursoServiceService.criouNovoCurso.subscribe(

      //parametro     //funcao      //corpo
      curso            =>           this.cursos.push(curso)

      //arrayFunction equivalente
      // function (curso) {
      //   console.log(curso);
      // }

    );
  }

}
