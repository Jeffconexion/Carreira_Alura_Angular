import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngFor',
  templateUrl: './diretiva-ngFor.component.html',
  styleUrls: ['./diretiva-ngFor.component.scss']
})
export class DiretivaNgForComponent implements OnInit {

  lista: string[] = ['curso 1','curso 2','curso 3','curso 4'];

  constructor() { }

  ngOnInit() {
  }

}
