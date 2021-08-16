import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  @Input() transferenciasExtrato: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
