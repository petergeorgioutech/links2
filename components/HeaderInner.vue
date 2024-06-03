<template>
  <header class="top-mini flex justify-between items-center px-5 py-3">
    <a href="/" class="back-button">
      <Icon color="white" width="35" icon="mage:arrow-left" />
    </a>
    <h1 class="text-center text-sm font-medium m-0 hidden">
      <!-- {{ pageTitle }} -->
      @peterpandev
    </h1>
    <div class="profile-information flex justify-start items-center gap-3">
      <div class="profile-image">
        <img src="/profile.jpg" alt="" class="img-circle w-[50px]">
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

// Props
const props = defineProps({
  pageTitle: String
})

</script>
