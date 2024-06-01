<template>
  <div class="accordion-group">
    <div class="accordion-title" @click="toggle">
      <h2>{{ title }}</h2>
      <Icon class="arrow" :icon="isOpen ? 'eva:arrow-ios-upward-outline' : 'eva:arrow-ios-downward-outline'" />
    </div>
    <transition name="collapse">
      <div v-show="isOpen" class="accordion-content">
        <!-- Loop through items and render AccordionItem for each -->
        <AccordionItem v-for="(item, index) in items" :key="index" :image="item.image" :text="item.text" :link="item.link" />
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import AccordionItem from '~/components/AccordionItem.vue'

// Props
const props = defineProps({
  title: String,
  items: Array
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
  max-height: 60px; /* Set an approximate max height */
}
</style>
