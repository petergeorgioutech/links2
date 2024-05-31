<script setup lang="ts">
import '~/assets/css/tailwind.css'

useHead({
    script: [
      { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
    ],
  });

</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>


