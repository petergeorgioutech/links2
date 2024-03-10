<template>
  <div>
    <header class="top-section">
      <div class="banner">
        <img src="https://cdn.beacons.ai/user_content/jnule9yLa2aKMVQbA5Bzm49aPpN2/referenced_images/my-posts__link-in-bio__header-block__home__a905f00a-d6c7-4f8a-beb4-d75b628bf461__b4aee71f-2f92-412e-bdcb-0b8bbd238ec8.jpg?t=1709475467748" alt="banner image" class="img-rounded">
      </div>
      <div class="profile-information">
        <div class="profile-image">
          <img src="https://cdn.beacons.ai/user_content/jnule9yLa2aKMVQbA5Bzm49aPpN2/profile_peterpandev.png?q=1709473970.1259835" alt="" class="img-circle">
        </div>
        <h1 class="profile-handle">
          peterpandev
        </h1>
        <p class="profile-description">
          Tech setup enthusiast inspiring coders and tech nerds.
        </p>
        <nav class="social-links">
          <a href="" target="_blank">
            <Icon color="white" width="40" icon="entypo-social:instagram-with-circle" />
          </a>
          <a href="" target="_blank">
            <Icon color="white" width="40" icon="entypo-social:linkedin-with-circle" />
          </a>
          <a href="" target="_blank">
            <Icon color="white" width="40" icon="entypo-social:youtube-with-circle" />
          </a>
          <a href="" target="_blank">
            <Icon color="white" width="40" icon="mage:tiktok-circle" />
          </a>
        </nav>
      </div>
    </header>
    <div class="p-8">
      <Heading heading="Shop My Gear" />

      <Paragraph text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto at laudantium explicabo labore recusandae voluptate, suscipit sit ipsa rerum porro, perspiciatis harum expedita sunt, eum odit ut! Ea, facere autem?" />

      <AccordionGroup title="Accordion Group">
        <AccordionItem image="https://placehold.co/600x600" text="Item in Group" link="https://google.com" />
      </AccordionGroup>

      <LinkButton title="Button with link" link="https://google.com" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>
