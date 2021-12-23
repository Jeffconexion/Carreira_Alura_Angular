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

  }

}
