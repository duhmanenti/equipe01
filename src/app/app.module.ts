import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
 marcosgabriel
import { MarcosgabrielComponent } from './marcosgabriel/marcosgabriel.component';

import { ClaraLarissaComponent } from './clara-larissa/clara-larissa.component';
 master

@NgModule({
  declarations: [
    AppComponent,
 marcosgabriel
    MarcosgabrielComponent

    ClaraLarissaComponent
 master
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
