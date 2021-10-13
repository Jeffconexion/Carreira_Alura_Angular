import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.scss']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number;

 @Output() mudouValor = new EventEmitter()


  constructor() {
    this.valor = 0;
  }

  ngOnInit() {
  }

  incrementa(){
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
