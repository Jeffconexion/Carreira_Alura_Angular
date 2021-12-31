import { CursoServiceService } from './../cursos/cursos-services/curso-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css'],
  providers:[CursoServiceService]
})
export class CriarCursoComponent implements OnInit {

  cursos: string[] = [];

  constructor(private cursosServices: CursoServiceService) { }

  ngOnInit() {
    this.cursos = this.cursosServices.getCursos();
  }

  onAddCurso(curso: string) {
    debugger;
    this.cursosServices.addCurso(curso);
  }

}
