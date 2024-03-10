<template>
  <a class="accordion-item" :href="link">
    <img :src="image" class="img-circle">
    <span>{{ text }}</span>
  </a>
</template>

<script setup lang="ts">

const props = defineProps({
  image: String,
  text: String,
  link: String
})

</script>

<style>
.nothing{}
</style>
