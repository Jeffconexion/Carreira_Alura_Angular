import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DiretivaNgIfComponent } from './diretiva-ngIf/diretiva-ngIf.component';
import { DiretivaNgSwitchComponent } from './diretiva-ngSwitch/diretiva-ngSwitch.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DiretivaNgForComponent } from './diretiva-ngFor/diretiva-ngFor.component';

@NgModule({
  declarations: [			
    AppComponent,
      DiretivaNgIfComponent,
      DiretivaNgSwitchComponent,
      DiretivaNgForComponent
   ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
