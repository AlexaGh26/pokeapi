export const getPokemonList = async (url: string | undefined) => {
    try {
        return await fetch(url='');
    } catch (error) {
        console.error(error);
    }
}
