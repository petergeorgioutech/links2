<template>
  <div class="single-product">
    <img :src="productImage" class="product-image">
    <div class="product-details">
      <h4 class="product-title">
        {{ productName }}
      </h4>
      <p class="product-description">
        {{ productDescription }}
      </p>
      <div class="product-price">
        <span class="product-discount crossed-out mr-2">{{ productOldPrice }}</span>
        <span class="product-total">{{ productNewPrice }}</span>
      </div>
      <a :href="productbuttonLink" class="btn-rounded-white border-rounded">{{ productButtonText }}</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
const props = defineProps({
  productName: String,
  productDescription: String,
  productImage: String,
  productOldPrice: String,
  productNewPrice: String,
  productButtonText: String,
  productbuttonLink: String
})
</script>
