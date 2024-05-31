<template>
  <div class="link-button">
    <a class="link" :href="link">
      <h2>{{ title }}</h2>
      <Icon class="arrow" icon="fluent:ios-arrow-right-24-filled" />
    </a>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

// Props
const props = defineProps({
  title: String,
  link: String
})

</script>

<style>

.nothing{}

</style>
