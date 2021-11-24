<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  pokemon: { type: Object, default: undefined }
})
</script>

<template>
  <div class="card">
    <img class="sprite" :src="props.pokemon.sprite" />
    <div>
      <span>{{ props.pokemon.id }} - </span>
      <span class="capitalize">{{ props.pokemon.name }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
  height: 150px;
  width: 150px;

  .sprite {
    object-fit: contain;
    height: 90%;
    width: 90%;
  }

  .capitalize {
    text-transform: capitalize;
  }
}
</style>
