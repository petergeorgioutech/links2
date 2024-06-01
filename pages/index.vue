<template>
  <div>
    <Header />
    <div class="p-8">
      <component
        :is="getComponentType(component)"
        v-for="(component, index) in homeData.components"
        :key="`component-${index}`"
        v-bind="component"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
// import { useAsyncData } from '@nuxt/content'
import Heading from '~/components/Heading.vue'
import Paragraph from '~/components/Paragraph.vue'
import AccordionGroup from '~/components/AccordionGroup.vue'
import LinkButton from '~/components/LinkButton.vue'
import Product from '~/components/Product.vue'

// Initialize homeData with default structure
const homeData = ref({ components: [] })

// Fetch the homepage data using useAsyncData
const { data, error } = await useAsyncData('homepage', () => queryContent('/homepage/home').findOne())

// Assign data to homeData if available
if (data.value) {
  homeData.value = data.value
} else {
  console.error('Error fetching homepage data:', error.value)
}

// Function to get the component type
const getComponentType = (component) => {
  switch (component.type) {
    case 'heading':
      return Heading
    case 'paragraph':
      return Paragraph
    case 'accordionGroup':
      return AccordionGroup
    case 'linkButton':
      return LinkButton
    case 'product':
      return Product
    default:
      return null
  }
}
</script>
