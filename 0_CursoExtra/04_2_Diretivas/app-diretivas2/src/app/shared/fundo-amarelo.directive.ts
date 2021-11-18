import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFundoAmarelo]'
})
export class FundoAmareloDirective {
  /**
   * Rever a forma de como está isso aqui no anfular 12.
   */
  constructor(private _elementRef: ElementRef) {
      this._elementRef.nativeElement.style.backgroundColor = "yellow";
  }

}
