import { getPokemonList } from '@/services';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'

export const Home = ({
  result,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
return (
  <div>
    AQUI
    {result}
  </div>
);
}

export const getServerSideProps = async () => {
    const response = await getPokemonList(process.env.ALL_POKEMONS);
    const result = await response?.json()
    return { props: { result } };
  } 

