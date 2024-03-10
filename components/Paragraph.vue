<template>
  <p class="paragraph text-center">
    {{ text }}
  </p>
</template>

<script setup lang="ts">
const props = defineProps({
  text: String
})
</script>
