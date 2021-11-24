<script setup>
import { ref } from 'vue'
import PokeApi from '@/services/pokeapi.js'
import PokemonCard from './PokemonCard.vue'

const pokemons = ref([])
PokeApi.fetchPokemons().then((result) => (pokemons.value = result))
</script>

<template>
  <div class="list">
    <PokemonCard
      v-for="(pokemon, index) in pokemons"
      :key="'pokemon' + index"
      :pokemon="pokemon"
    />
  </div>
</template>

<style scoped lang="scss">
.list {
  display: flex;
  flex-wrap: wrap;

  > * {
    margin: 10px;
  }
}
</style>
