export const getList = async (limit: number): Promise<any> => {
    try {
        return (await fetch(`${process.env.POKE_API}api/v2/pokemon?limit=${limit}`)).json();
    } catch (error) {
        console.error(error);
    }
}

export const getDetails = async (numberPokemon: number): Promise<any> => {
    try {
        return (await fetch(`${process.env.POKE_API}api/v2/pokemon/${numberPokemon}`)).json();
    } catch (error) {
        console.error(error);
    }
}
