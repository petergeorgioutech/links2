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

// Accordion state
const isOpen = ref(false)

// Toggle function
const toggle = () => {
  isOpen.value = !isOpen.value
}
</script>

  <style scoped>

  /* Transition styles for collapsing animation */
  .collapse-enter-active, .collapse-leave-active {
    transition: max-height 0.3s ease;
  }
  .collapse-enter-from, .collapse-leave-to {
    max-height: 0;
  }
  .collapse-enter-to, .collapse-leave-from {
    max-height: 80px; /* Set an approximate max height */
  }

  </style>
