import { Injectable } from "@angular/core";
import { dataPokemons } from "./mockdata";
@Injectable({
    providedIn: 'root'
})

export class PokemonService{
    constructor(){}
    getPokemonList(){
        return dataPokemons.results;
    }

    getPokemonImageUri (id: number) {
        const imageId = ('00' + id).slice(-3); // para 1 => 001
        return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${imageId}.png`;
    }
}