import { Component, OnInit } from '@angular/core';
import { CursoServiceService } from '../cursos/cursos-services/curso-service.service';

@Component({
  selector: 'app-receber-curso-criado',
  templateUrl: './receber-curso-criado.component.html',
  styleUrls: ['./receber-curso-criado.component.css']
})
export class ReceberCursoCriadoComponent implements OnInit {
  curso: string;
  constructor(private cursosServices: CursoServiceService) {
    this.curso = "";
  }

  ngOnInit(): void {

    this.cursosServices.emitirCursoCriado.subscribe(
      cursoCriado => this.curso = cursoCriado

    );

  }

}
