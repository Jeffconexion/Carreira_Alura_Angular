import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {
  nomePortal: string;
  listaCursos: Array<string>;

  constructor() {
    this.nomePortal = "Dev Treine"
    this.listaCursos = ["Java", "C#", "Cloud"];
  }

  ngOnInit(): void {
  }

}
