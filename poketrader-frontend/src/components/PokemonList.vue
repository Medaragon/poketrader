<script setup>
import { ref, onBeforeMount } from 'vue'
import PokeAPIService from '@/services/pokeapi.js'
import PokemonCard from './PokemonCard.vue'

const pokemons = ref([])

onBeforeMount(async () => {
  pokemons.value = await PokeAPIService.fetchPokemons()
})
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
