import { ReactNode } from "react";
import { getDetails, getList } from "@/services";
import home from "./home.module.scss";
import { HomeProps, PokemonDetails, PokemonKeys } from "@/models/homeProps";
import Image from "next/image";
import { LIMIT } from "@/utils/CONST/limit";
import { Helmet } from "react-helmet";

const Home = ({ pokemonList }: HomeProps) => {
  return (
    <>
      <Helmet>
        <style>{"body { background-color: black; }"}</style>
      </Helmet>
      <div className={home["home-wrapper"]}>
        <h1>POKEMONS LIST</h1>
        <div className={home.table}>
          {pokemonList.length &&
            pokemonList.map((pokemon: PokemonKeys, index) => {
              return (
                <div className={home.card} key={`${index}-${pokemon.name}`}>
                  {showImage(pokemon)}
                  <h4 className={home["card__text-name"]}>
                    {pokemon.name.toUpperCase()}
                  </h4>
                  {showTypes(pokemon)}
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

const showImage = (pokemon: PokemonKeys) => {
  return (
    <Image
      src={pokemon.details?.sprites?.front_default}
      width={100}
      height={100}
      alt="Picture of the author"
    />
  );
};

function capitalizarPrimeraLetra(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

const showTypes = (pokemon: PokemonKeys): ReactNode => {
  return pokemon.details.types.map(({ type }, index) => {
    return (
      <span className={home["card__text-types"]} key={`${index}-${type.name}`}>
        {capitalizarPrimeraLetra(type.name)}
      </span>
    );
  });
};

export const getServerSideProps = async () => {
  let { results } = await getList(LIMIT);
  let pokemonList: PokemonKeys[] = [];
  let details = {} as PokemonDetails;

  for (let index = 0; index < results.length; index++) {
    details = await getDetails(index + 1);
    pokemonList.push({
      name: results[index].name,
      url: results[index].url,
      details,
    });
  }

  return {
    props: {
      pokemonList,
    },
  };
};

export default Home;
