const firstPokemonIndex = 0;

async function getNinePokemon() {
  const fetchedArray = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${firstPokemonIndex}`
  );

  const pokemonArrayJson = await fetchedArray.json();

  const pokemonObjects = pokemonArrayJson.results;

  const pokemon = pokemonObjects.map(async (pokemonObject) => {
    const fetchedPokemonObject = await fetch(pokemonObject.url);
    const pokemonObjectJson = fetchedPokemonObject.json();

    return pokemonObjectJson;
  });

  const singlePokemon = Promise.all(pokemon);
  return singlePokemon;
}

const getPokemon = await getNinePokemon();

export default getPokemon;
