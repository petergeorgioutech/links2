<template>
  <div class="accordion-item">
    <div class="accordion-title" @click="toggle">
      <h2>{{ title }}</h2>
      <!-- Add an icon for visual feedback -->
      <Icon class="arrow" :icon="isOpen ? 'eva:arrow-ios-upward-outline' : 'eva:arrow-ios-downward-outline'" />
    </div>
    <transition name="collapse">
      <div v-show="isOpen" class="accordion-content">
        <!-- Your content goes here -->
        <slot />
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

// Props
const props = defineProps({
  title: String
})

// Accordion state
const isOpen = ref(false)

// Toggle function
const toggle = () => {
  isOpen.value = !isOpen.value
}
</script>

  <style scoped>
  .accordion-item {
    /* ... */
  }
  .accordion-title {
    /* ... */
    .arrow{
      /* ... */
    }
  }

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

  .accordion-content {
    /* ... */
    .accordion-child-item{
      /* ... */
    }
  }
  </style>
