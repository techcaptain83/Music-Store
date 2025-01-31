<script setup lang="ts">
import { dashboardRoutesPrefix } from '~/routes'

defineProps<{
  path: string
  name: string
  icon: string
}>()
</script>

<template>
  <li class="relative cursor-pointer items-center">
    <NuxtLink class="router-link flex gap-1 px-4 py-3" :to="`${dashboardRoutesPrefix}/${path}`">
      <img :src="`/dashboard/icon/${icon}`" />
      <span class="flex-grow text-sm">{{ name }}</span>
    </NuxtLink>
  </li>
</template>
