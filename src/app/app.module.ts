import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EscenaComponent } from './escena/escena.component';
import { FrasesEscenaComponent } from './frases-escena/frases-escena.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EscenaComponent,
    FrasesEscenaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
