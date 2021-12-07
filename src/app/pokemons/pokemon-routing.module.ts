import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import { PokemonListComponent } from "./pokemon-list.component";
import { PokemonDetailComponent } from "./profile/pokemon-detail.component";

const routes: Routes = [
    {path: 'pokedex/:id',  component: PokemonDetailComponent},
    {path: 'pokedex', component: PokemonListComponent},
    {path: '', redirectTo: './pokedex', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class PokemonRoutingModule { }