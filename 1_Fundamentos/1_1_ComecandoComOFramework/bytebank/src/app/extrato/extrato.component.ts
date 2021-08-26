import { Transferencia } from './../models/transferencia.models';
import { Component, Input, OnInit, Output } from '@angular/core';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  transferenciasExtrato: any[];

  constructor(private service: TransferenciaService) {
    this.transferenciasExtrato = []
  }

  ngOnInit(): void {
    this.service.todas().subscribe((transferencias: Transferencia[]) => {
      console.table(transferencias);
      this.transferenciasExtrato = transferencias;
    });

  }

}
