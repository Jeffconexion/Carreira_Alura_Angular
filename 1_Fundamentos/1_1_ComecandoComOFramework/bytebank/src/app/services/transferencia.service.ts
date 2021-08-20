import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private listaTransferencia: any[];

  constructor() {
    this.listaTransferencia = [];
  }

  get transferencias() {
    return this.listaTransferencia;
  }

  adicionar(transferencia: any) {

    this.tratarValor(transferencia);
    this.listaTransferencia.push(transferencia);
  }

  tratarValor(transferencia: any) {
    transferencia.data = new Date();
  }

}
