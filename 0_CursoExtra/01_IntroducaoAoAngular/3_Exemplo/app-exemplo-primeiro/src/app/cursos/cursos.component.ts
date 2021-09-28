import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  nomePortal: string;
  cursos: string[];

  constructor() {
    this.nomePortal = "www.google.com.br";
    this.cursos = ['Angular', 'Css', 'Mobile']
   }

  ngOnInit() {
  }

}
