import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  transferencias: Array<any> = [];

  transferirValor($event: any) {
    const ValorDatransferencia = { ...$event, data: new Date() }
    this.transferencias.push(ValorDatransferencia);
  }

}
