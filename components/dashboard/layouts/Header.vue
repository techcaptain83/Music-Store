<template>
  <nav class="fixed w-full md:relative md:h-24">
    <div class="px-7.5 py-7.5 md:px-7.5 md:py-7.5 mx-auto flex items-stretch justify-between">
      <!-- logo file -->
      <Logo />

      <div class="flex flex-row gap-8">
        <!-- favorite -->
        <NuxtLink to="/dashboard/favorites" class="font-inter flex flex-row items-center gap-1 text-base font-medium">
          <CustomSVGIcon svg="d-heart.svg" />
          <span class="flex-grow text-sm">Favorites</span>
        </NuxtLink>

        <!-- avatar -->
        <div class="flex flex-row items-center gap-2">
          <NuxtImg src="/avatar.png" class="h-10 w-10 rounded-full" />
          <div class="font-inter text-base font-medium">Brian Connor</div>
          <Icon name="iconamoon:arrow-down-2-bold" style="color: #7283a7" />
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import Logo from '@/assets/logo.svg'
</script>
