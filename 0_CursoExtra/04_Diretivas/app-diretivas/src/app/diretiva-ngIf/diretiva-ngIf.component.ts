import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngIf',
  templateUrl: './diretiva-ngIf.component.html',
  styleUrls: ['./diretiva-ngIf.component.scss']
})
export class DiretivaNgIfComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  lista: string[] = [];

  mostrarCurso: boolean = false;


  onMostrarCursos(){
    this.mostrarCurso = !this.mostrarCurso;
  }

}
