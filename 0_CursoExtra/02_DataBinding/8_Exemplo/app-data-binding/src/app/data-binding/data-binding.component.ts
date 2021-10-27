import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  nomeDoCurso: string = "Angular";



  constructor() { }

  ngOnInit(): void {
  }


  onMudouValor(evento:any){
    console.log("-------------->"+typeof(evento));
    console.log(evento.novoValor);
  }


}
