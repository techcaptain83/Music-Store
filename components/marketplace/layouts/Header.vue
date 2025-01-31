<template>
  <nav class="fixed z-10 mx-auto flex w-full items-stretch justify-between bg-[#171717] px-2 py-2 lg:px-8 lg:py-8">
    <!-- right -->
    <div class="flex flex-row justify-between gap-16">
      <!-- logo file -->
      <Logo class="" />
      <!--  -->
      <div class="flex flex-row justify-between gap-8">
        <nuxt-link class="flex items-center" to="/marketplace/search">
          <Icon name="fluent:search-12-filled" class="h-6 w-6" style="color: #ffffff" />
        </nuxt-link>
        <nuxt-link
          to="/marketplace/"
          class="font-inter flex flex-row items-center gap-1 text-base font-medium text-marketplace hover:text-white"
        >
          Explore
        </nuxt-link>

        <nuxt-link
          to="/marketplace/samples"
          class="font-inter flex flex-row items-center gap-1 text-base font-medium text-marketplace hover:text-white"
        >
          Samples
        </nuxt-link>

        <nuxt-link
          to="/marketplace/kits"
          class="font-inter flex flex-row items-center gap-1 text-base font-medium text-marketplace hover:text-white"
        >
          Kits
        </nuxt-link>
      </div>
    </div>
    <!-- left -->
    <div class="flex flex-row items-center justify-between gap-8">
      <nuxt-link to="/marketplace/login" class="">
        <CustomButton variant="m_ghost">Login</CustomButton>
      </nuxt-link>
      <nuxt-link to="/marketplace/signup" class="flex items-center">
        <CustomButton variant="m_ghost">Signup</CustomButton>
      </nuxt-link>
      <div class="text-marketplace">|</div>
      <!-- Shop -->
      <nuxt-link to="/marketplace/shopping">
        <Icon name="ci:shopping-bag-01" class="h-6 w-6" style="color: #ffffff" />
      </nuxt-link>
    </div>
  </nav>
</template>

<script setup lang="ts">
// import Logo from '@/assets/logo.svg'
import Logo from '@/public/marketplace/logo.svg'
</script>
