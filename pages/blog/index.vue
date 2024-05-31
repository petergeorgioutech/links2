<template>
  <main>
    <ContentList path="/blog" v-slot="{ list }">
      <div v-for="article in list" :key="article._path">
        <pre>
          <!-- {{article}} -->
        </pre>
        <h2>{{ article.title }}</h2>
        <a :href="article._path">{{ article._path }}</a>
      </div>
    </ContentList>
  </main>
</template>

<script setup>
// const { data } = await useAsyncData('blog', () => queryContent('blog').findOne())

</script>