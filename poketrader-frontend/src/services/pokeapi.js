import axios from 'axios'

const pokeapiGraphQLUrl = 'https://beta.pokeapi.co/graphql/v1beta'
const sprite = (id) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`

const PokeAPIService = {
  async fetchPokemons() {
    const query = `query samplePokeAPIquery {
      species: pokemon_v2_pokemonspecies(order_by: {id: asc}) {
        name
        id
        types: pokemon_v2_pokemons {
          pokemon_v2_pokemontypes {
            pokemon_v2_type {
              name
            }
          }
        }
      }
    }`
    const results = await axios({
      url: pokeapiGraphQLUrl,
      method: 'post',
      data: {
        query
      }
    })

    const pokes = results.data.data.species.map((poke) => ({
      id: poke.id,
      name: poke.name,
      type: poke.types[0].pokemon_v2_pokemontypes.map(
        (type) => type.pokemon_v2_type.name
      ),
      sprite: sprite(poke.id)
    }))

    return pokes
  }
}

export default PokeAPIService
