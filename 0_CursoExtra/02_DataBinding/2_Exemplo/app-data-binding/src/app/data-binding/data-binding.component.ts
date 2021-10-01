import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  url: string = "www.google.com.br";
  cursoAngular: boolean = true;
  urlImagem: string = 'http://lorempixel.com/400/200/';

  constructor() { }

  ngOnInit(): void {
  }

  getValor():number{
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

}
