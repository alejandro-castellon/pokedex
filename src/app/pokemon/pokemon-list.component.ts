import { Component } from "@angular/core";
import { dataPokemons, getPokemonImageUri } from "./mockdata";

type PokemonType = {
    name: string,
    url: string,
    id: number
}

@Component({
    selector: 'pokemon-list',
    templateUrl: './pokemon-list.component.html',
    styleUrls: ['./pokemon-list.component.less']
})

export class PokemonListComponent {
    pokemons: PokemonType[] = [];
    private pokemonList: PokemonType[] = [];

    constructor() {
        this.pokemonList = dataPokemons.results.map(this.normalizePokeItem);
        this.pokemons = this.pokemonList;
    }

    private normalizePokeItem(pokemon:{name: string, url: string}, index: number): PokemonType {
        return({
            ...pokemon,
            id: index + 1
        })
    }

    getImageUri(pokemon: PokemonType){
        return getPokemonImageUri(pokemon.id)
    }
}