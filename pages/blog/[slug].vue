<template>
  <div v-if="post">
    <h2>{{ post.title }}</h2>
    <nuxt-content :document="post" />
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script setup>
import { useAsyncData, useRoute, useError } from '#imports'

// Use the current route to get the slug parameter
const route = useRoute()
const { params } = route

// Define a function to fetch the post data
const fetchPost = async () => {
  try {
    const post = await $content('blog', params.slug).fetch()
    return post
  } catch (e) {
    useError({ statusCode: 404, message: 'Blog Post not found' })
  }
}

// Use the useAsyncData composable to fetch the data
const { data: post, error } = await useAsyncData('post', fetchPost)

// Handle error if post not found
if (error.value) {
  useError({ statusCode: 404, message: 'Blog Post not found' })
}
</script>
