import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { PokemonListComponent } from './pokemon-list.component';
import { NotFoundComponent } from '../common/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonDetailComponent } from './profile/pokemon-detail.component';
import { PokemonRoutingModule } from './pokemon-routing.module';

@NgModule({
  declarations: [
    PokemonListComponent,
    NotFoundComponent,
    PokemonDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
      PokemonListComponent,
      PokemonDetailComponent,
      PokemonRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class PokemonModule { }
