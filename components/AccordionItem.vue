<template>
  <a class="accordion-item" :href="link" target="_blank">
    <img :src="image" class="img-circle fill-image">
    <span>{{ text }}</span>
    <Icon class="arrow" icon="fluent:ios-arrow-right-24-filled" />
  </a>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

const props = defineProps({
  image: String,
  text: String,
  link: String
})
</script>

<style scoped>
.fill-image {
  width: 120px;
  height: 50px;
}
</style>
