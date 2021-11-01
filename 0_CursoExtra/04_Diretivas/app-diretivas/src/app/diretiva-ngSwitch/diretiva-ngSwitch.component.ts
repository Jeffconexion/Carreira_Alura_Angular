import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngSwitch',
  templateUrl: './diretiva-ngSwitch.component.html',
  styleUrls: ['./diretiva-ngSwitch.component.scss']
})
export class DiretivaNgSwitchComponent implements OnInit {

  aba: string = "home";

  constructor() { }

  ngOnInit() {
  }

}
