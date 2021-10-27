import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.scss']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number;

 @Output() mudouValor = new EventEmitter()


//  PEGANDO O VALOR DIRETO DO INPUT, MEDIANTE A VARIÁVEL CRIADA #campoInput.
 @ViewChild('campoInput') campoValorInput: ElementRef | undefined;


  constructor() {
    this.valor = 0;
  }

  ngOnInit() {
  }

  incrementa(){
    console.log(this.campoValorInput);
    this.valor++;
    //emit um evento
    this.mudouValor.emit({novoValor: this.valor})
  }

  decrementa(){
    this.valor--;
    //emit um evento
    this.mudouValor.emit({novoValor: this.valor})

  }

}
