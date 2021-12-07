export type Pokemon = {
    name: string,
    url: string
}

export type PokemonDetail = {
    abilities: any[]
    base_experience: number
    forms: any[]
    game_indices: any[]
    height: number
    weight: number
    held_items: any[]
    id: number
    is_default: boolean
    location_area_encounters: string
    moves: any[]
    name: string
    order: number
    past_types: any[]
    species: {name: string, url: string}   
}