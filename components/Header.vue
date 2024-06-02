<template>
  <header class="top-section">
    <div class="banner">
      <img src="/secretlab-cover.jpg" alt="banner image" class="img-rounded">
    </div>
    <div class="profile-information">
      <div class="profile-image">
        <img src="/profile.jpg" alt="" class="img-circle">
      </div>
      <h1 class="profile-name">
        Panayiotis Georgiou <br>
        <small style="font-size: 65%;" class="leading-7 block">Frontend Developer | Content Creator</small>
      </h1>
      <p class="profile-description p-1">
        Tech setup enthusiast inspiring coders and tech nerds.
      </p>
      <nav class="social-links">
        <a href="//instagram.com/peterpandev" target="_blank">
          <Icon color="white" width="35" icon="entypo-social:instagram-with-circle" />
        </a>
        <a href="//tiktok.com/@peterpandeveloper" target="_blank">
          <Icon color="white" width="35" icon="mage:tiktok-circle" />
        </a>
        <a href="//youtube.com/@peterpandev" target="_blank">
          <Icon color="white" width="35" icon="entypo-social:youtube-with-circle" />
        </a>
        <a href="//www.linkedin.com/in/peter-georgiou/" target="_blank">
          <Icon color="white" width="35" icon="entypo-social:linkedin-with-circle" />
        </a>
        <a href="mailto:hello@petergeorgiou.tech" target="_blank">
          <Icon color="white" width="35" icon="mage:email-opened" />
        </a>
      </nav>
      <a href="//secretlab.co" target="_blank">
        <img src="/secretlab_official_partner_white.svg" class="block mx-auto mt-8" alt="" width="350">
      </a>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>
