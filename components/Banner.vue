<template>
  <header class="top-section">
    <div class="banner">
      <img :src="image" alt="banner image" class="img-rounded">
    </div>
  </header>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
const props = defineProps({
  image: String
})
</script>
