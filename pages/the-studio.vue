<template>
  <div>
    <HeaderInner />
    <!-- <pre>
      {{ pageData }}
    </pre> -->
    <div class="p-8">
      <component
        :is="getComponentType(component)"
        v-for="(component, index) in pageData.components"
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
import Banner from '~/components/Banner.vue'

// Initialize pageData with default structure
const pageData = ref({ components: [] })

// Fetch the home data using useAsyncData
const { data, error } = await useAsyncData('studio', () => queryContent('pages/the-studio').findOne())

// Assign data to pageData if available
if (data.value) {
  pageData.value = data.value
} else {
  console.error('Error fetching home data:', error.value)
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
    case 'banner':
      return Banner
    default:
      return null
  }
}
</script>
