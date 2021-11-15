<script setup></script>

<template>
  <div class="nav">
    <router-link :to="{ name: 'Home' }">Home</router-link>
    <router-link :to="{ name: 'Pokedex' }">Pokédex</router-link>
    <router-link :to="{ name: 'About' }">About</router-link>
  </div>
</template>

<style scoped lang="scss">
.nav {
  > * {
    padding: 5px;
  }
}
</style>
