import { getPokemonList } from '@/services';

export * from './home/page';

export async function getServerSideProps() {
    const response = getPokemonList(process.env.ALL_POKEMONS);
}