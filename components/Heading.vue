<template>
  <h2 class="heading text-center text-2xl font-extrabold mb-2">
    {{ heading }}
  </h2>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Props
const props = defineProps({
  heading: String
})

</script>
