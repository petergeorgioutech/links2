<template>
  <div class="product-page">
    <!-- <pre>
      {{ pageData }}
    </pre> -->
    <HeaderInner :page-title="theTitle" />
    <div v-if="bannerComponent" class="inner-content">
      <component :is="getComponentType(bannerComponent)" v-bind="bannerComponent" />
    </div>
    <div class="p-8">
      <component
        :is="getComponentType(component)"
        v-for="(component, index) in otherComponents"
        :key="`component-${index}`"
        v-bind="component"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import Heading from '~/components/Heading.vue'
import Paragraph from '~/components/Paragraph.vue'
import AccordionGroup from '~/components/AccordionGroup.vue'
import LinkButton from '~/components/LinkButton.vue'
import Product from '~/components/Product.vue'
import Banner from '~/components/Banner.vue'

// Initialize pageData with default structure
const pageData = ref({ components: [] })

// Fetch the home data using useAsyncData
const { data, error } = await useAsyncData('home-office', () => queryContent('pages/the-home-office').findOne())

if (data.value) {
  pageData.value = data.value
} else {
  console.error('Error fetching page data:', error.value)
}

const theTitle = pageData.value.title

// Filter components to get the banner and other components
const bannerComponent = computed(() => pageData.value?.components?.find(component => component.type === 'banner') || null)
const otherComponents = computed(() => pageData.value?.components?.filter(component => component.type !== 'banner') || [])

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

useSeoMeta({
  title: 'The Home Office | Panayiotis Georgiou | @peterpandev',
  ogTitle: 'The Home Office | Panayiotis Georgiou | @peterpandev',
  description: 'Frontend Coder | Tech Setup Enthusiast',
  ogDescription: 'Frontend Coder | Tech Setup Enthusiast',
  ogImage: '/profile.jpg',
  twitterCard: '/profile.jpg'
})
</script>
