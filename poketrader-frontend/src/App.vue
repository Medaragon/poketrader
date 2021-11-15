<script setup>
import TheNavigationBar from './components/TheNavigationBar.vue'
</script>

<template>
  <TheNavigationBar />
  <img alt="Vue logo" src="./assets/logo.png" />
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
