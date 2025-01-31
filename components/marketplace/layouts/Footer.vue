<template>
  <nav class="mx-auto flex w-full items-stretch justify-between bg-[#121111] px-2 py-2 lg:px-8 lg:py-8">
    <!-- right -->
    <div class="flex flex-row justify-between gap-16">
      <!-- logo file -->
      <Logo class="" />
      <!-- copy right -->
      <div class="flex items-center text-marketplace">© The Sample Stash 2025</div>
    </div>
    <!-- left -->
    <div class="flex flex-row items-center justify-between gap-8">
      <nuxt-link
        to="/marketplace/"
        class="font-inter flex flex-row items-center gap-1 text-base font-medium text-marketplace hover:text-white"
      >
        Explore
      </nuxt-link>

      <nuxt-link
        to="/marketplace/sample"
        class="font-inter flex flex-row items-center gap-1 text-base font-medium text-marketplace hover:text-white"
      >
        Sample
      </nuxt-link>
      <div class="text-marketplace">|</div>

      <nuxt-link
        to="/marketplace/privacy-policy"
        class="font-inter flex flex-row items-center gap-1 text-base font-medium text-marketplace hover:text-white"
      >
        Privacy Policy
      </nuxt-link>

      <nuxt-link
        to="/marketplace/terms-of-use"
        class="font-inter flex flex-row items-center gap-1 text-base font-medium text-marketplace hover:text-white"
      >
        Terms of Use
      </nuxt-link>
    </div>
  </nav>
</template>

<script setup lang="ts">
// import Logo from '@/assets/logo.svg'
import Logo from '@/public/marketplace/logo.svg'
</script>
