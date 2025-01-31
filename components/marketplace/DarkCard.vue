<template>
  <div class="rounded-xl" :style="{ backgroundImage: `url(${bg_img})` }">
    <div class="font-[Euclid Circular B] flex grid h-[158px] items-center justify-items-center text-3xl font-semibold text-white">
      {{ title }}
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  bg_img: string
  title: string
}>()
</script>
