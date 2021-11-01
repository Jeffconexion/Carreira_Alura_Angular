import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-diretivas';

  lista: string[] = [];

  mostrarCurso: boolean = false;


  onMostrarCursos(){
    this.mostrarCurso = !this.mostrarCurso;
  }

}


