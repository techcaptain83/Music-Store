<template>
  <nav class="fixed w-full md:relative md:h-24">
    <div class="mx-auto flex items-stretch justify-between px-4 py-8 md:px-4 md:py-8">
      <!-- logo file -->
      <Logo />

      <div class="flex flex-row gap-8">
        <!-- favorite -->
        <NuxtLink to="/dashboard/favorites" class="font-inter flex flex-row items-center gap-1 text-base font-medium">
          <img :src="`/img/dashboard/icon/heart.svg`" />
          <span class="flex-grow text-sm">Favorites</span>
        </NuxtLink>

        <!-- avatar -->
        <div class="flex flex-row items-center gap-2">
          <NuxtImg src="/img/avatar.png" class="h-10 w-10 rounded-full" />
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
