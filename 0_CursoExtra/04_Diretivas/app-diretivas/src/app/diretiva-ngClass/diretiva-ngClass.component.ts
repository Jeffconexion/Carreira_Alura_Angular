import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngClass',
  templateUrl: './diretiva-ngClass.component.html',
  styleUrls: ['./diretiva-ngClass.component.scss']
})
export class DiretivaNgClassComponent implements OnInit {

  meuFavorito: boolean = false;

  constructor() { }

  ngOnInit() {
  }


  onClick(){
    this.meuFavorito = !this.meuFavorito;
  }
}
