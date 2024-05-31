<template>
  <header class="top-section">
    <div class="banner">
      <img src="/header.webp" alt="banner image" class="img-rounded">
    </div>
    <div class="profile-information">
      <div class="profile-image">
        <img src="/profile.jpg" alt="" class="img-circle">
      </div>
      <h1 class="profile-name">
        Panayiotis Georgiou
      </h1>
      <p class="profile-description p-1">
        Tech setup enthusiast inspiring coders and tech nerds.
      </p>
      <nav class="social-links">
        <a href="" target="_blank">
          <Icon color="white" width="35" icon="entypo-social:instagram-with-circle" />
        </a>
        <a href="" target="_blank">
          <Icon color="white" width="35" icon="entypo-social:linkedin-with-circle" />
        </a>
        <a href="" target="_blank">
          <Icon color="white" width="35" icon="entypo-social:youtube-with-circle" />
        </a>
        <a href="" target="_blank">
          <Icon color="white" width="35" icon="mage:tiktok-circle" />
        </a>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>
