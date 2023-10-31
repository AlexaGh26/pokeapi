import { getDetails, getList } from "@/services";
import home from "./home.module.scss";
import { HomeProps, PokemonDetails, PokemonKeys } from "@/models/homeProps";
import Image from 'next/image'
import { LIMIT } from "@/utils/CONST/limit";

const Home = ({ pokemonList }: HomeProps) => {
  console.log(pokemonList);

  return (
    <div className={home.main}>
      <div className={home.table}>
        {pokemonList.length &&
          pokemonList.map((pokemon: PokemonKeys) => {
            return (
              <>
                    <Image
                      src={pokemon.details?.sprites?.front_default}
                      width={100}
                      height={100}
                      alt="Picture of the author"
                    />
              </>
            );
          })}
      </div>
    </div>
  );
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
