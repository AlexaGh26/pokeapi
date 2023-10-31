export interface HomeProps {
    pokemonList: PokemonKeys[];
}

export interface PokemonKeys {
    name: string;
    url: string;
    details: PokemonDetails ;
}

export interface PokemonDetails {
    sprites: {
        back_default: string; 
        back_female: string;
        back_shiny: string;
        back_shiny_female: string;
        front_default: string;
        front_female: string;
        front_shiny: string;
        front_shiny_female: string;
    }
}