import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DiretivaCustomizadasComponent } from './diretiva-customizadas/diretiva-customizadas.component';

@NgModule({
  declarations: [	
    AppComponent,
      DiretivaCustomizadasComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
