import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { PokemonListComponent } from './pokemon-list.component';

@NgModule({
  declarations: [
    PokemonListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
      PokemonListComponent
  ],
  providers: [],
  bootstrap: []
})
export class PokemonModule { }
