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
  valorAtual: string | undefined;
  Valor: string | undefined;
    isMouseOver: boolean = false;



  constructor() { }

  ngOnInit(): void {
  }

  getValor():number{
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  botaoClicado(){
    alert('Botão clicado!');
  }

  // onKeyUp(event: any){
  //   console.log((<HTMLInputElement>event.target).value);
  // }

  onKeyUp(event: any){
    this.valorAtual = (<HTMLInputElement>event.target).value;
  }

  salvarValor(valor: any){
    this.Valor = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }



}
