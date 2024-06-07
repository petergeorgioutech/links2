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
        <small class="leading-7 block">Frontend Developer | Content Creator</small>
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
        <a href="//www.amazon.com/shop/peterpandev/list/1YNZ82Q9EWNWS?ref_=aip_sf_list_spv_ofs_mixed_d" target="_blank">
          <Icon color="white" width="35" icon="entypo-social:500px-with-circle" />
        </a>
        <a href="//www.linkedin.com/in/peter-georgiou/" target="_blank">
          <Icon color="white" width="35" icon="entypo-social:linkedin-with-circle" />
        </a>
        <a href="mailto:hello@petergeorgiou.tech" target="_blank">
          <Icon color="white" width="35" icon="mage:email-opened" />
        </a>
      </nav>

      <a href="//secretlab.co/?rfsn=7910453.2764ccb&utm_source=refersion&utm_medium=affiliate&utm_campaign=7910453.2764ccb" target="_blank">
        <img src="/secretlab_official_partner_white.svg" class="block mx-auto mt-8 mb-8" alt="" width="350">
      </a>

      <a href="mailto:hello@petergeorgiou.tech" class="flex justify-center items-center rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-black shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-white hover:text-black w-1/2 mx-auto gap-2">
        <span class="whitespace-nowrap">For Collaborations</span>
        <Icon class="inline-block" width="20" icon="mage:email-opened" />
      </a>
      <a href="//beacons.ai/peterpandev/mediakit" target="_blank" class="flex justify-center items-center rounded-full bg-transparent px-4 py-2.5 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-white hover:text-black w-1/2 mx-auto gap-2 mt-4">
        <span class="whitespace-nowrap">Media Kit</span>
        <Icon class="inline-block" width="20" icon="mage:arrow-right-circle-fill" />
      </a>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>
