<template>
  <p class="paragraph text-center mb-6">
    {{ text }}
  </p>
</template>

<script setup lang="ts">
const props = defineProps({
  text: String
})
</script>
