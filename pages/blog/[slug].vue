<script setup lang="ts">
const route = useRoute()
const { data } = await useAsyncData('page-data', () => queryContent(route.path).findOne())
</script>

<template>
  <main>
    
    <ContentRenderer :value="data">
      <p>{{ data.body }}</p> <br><br><br>
      <h1>{{ data.title }}</h1> <br>
      <p>{{ data.description }}</p> <br>
      <ContentRendererMarkdown :value="data" />
    </ContentRenderer>

    <pre>
      {{ data }}
    </pre>
  </main>
</template>