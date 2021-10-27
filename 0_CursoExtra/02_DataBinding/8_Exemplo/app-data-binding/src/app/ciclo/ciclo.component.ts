import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.scss']
})
export class CicloComponent implements OnChanges, OnInit,
  DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {

    @Input() valorInicial: number = 10;

  constructor() {
    this.log('constructor');
  }

  ngOnChanges() {
    // bastante utilizado
    this.log('ngOnChanges');
  }

  ngOnInit() {
    // bastante utilizado
    this.log('ngOnInit');
  }

  ngDoCheck() {
    this.log('ngDoCheck');
  }

  ngAfterContentInit() {
    this.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    this.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    this.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    this.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
  // bastante utilizado
    this.log('ngOnDestroy');
  }

  private log(hook: string) {
    console.log(hook);
  }

}
