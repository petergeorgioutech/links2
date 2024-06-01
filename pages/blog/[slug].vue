<script setup lang="ts">
const route = useRoute()
const { data } = await useAsyncData('page-data', () => queryContent(route.path).findOne())
</script>

<template>
  <main>
    <ContentRenderer :value="data">
      <h1>👇🏻 Title Field 👇🏻</h1>
      <h1>{{ data.title }}</h1> <br>
      <h1>👇🏻 Custom Fields 👇🏻</h1>
      <p>{{ data.description }}</p> <br>
      <h1>👇🏻 Image Field 👇🏻</h1>
      <img :src="data.thumbnail" alt=""> <br>
      <h1>👇🏻 Markdown WYSIWYG 👇🏻</h1>
      <ContentRendererMarkdown :value="data" />
    </ContentRenderer>
    <br>
    <h1>👇🏻 Source 👇🏻</h1>
    <pre>
      {{ data }}
    </pre>
  </main>
</template>
