<template>
    <div>
      <h1 class="text-center py-8">Blog Page</h1>
      <ul>
        <li v-for="post in posts" :key="post.slug">
          <NuxtLink :to="`/blog/${post.slug}`">{{ post.title }}</NuxtLink>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { useAsyncData } from '#imports'
  
  // Define a function to fetch the posts data
  const fetchPosts = async () => {
      const posts = await $content('blog').fetch()
      console.log('Posts:', posts)
    return posts
  }
  
  // Use the useAsyncData composable to fetch the data
  const { data: posts } = await useAsyncData('posts', fetchPosts)
  </script>
  