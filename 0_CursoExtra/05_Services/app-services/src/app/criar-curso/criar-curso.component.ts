import { CursoServiceService } from './../cursos/cursos-services/curso-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css']
})
export class CriarCursoComponent implements OnInit {

  cursos: string[] = [];

  constructor(private cursosServices: CursoServiceService) { }

  ngOnInit() {
    this.cursos = this.cursosServices.getCursos();
  }

}
