<template>
  <div class="flex w-full flex-col gap-4 rounded-2xl bg-white p-4">
    <div class="row flex w-full gap-2.5">
      <img :src="icon" class="h-6 w-6" alt="" />
      <p class="font-inter text-left text-lg font-bold">
        {{ title }}
      </p>
    </div>
    <p class="text-center text-2xl font-bold">
      {{ content }}
    </p>
    <p class="text-center text-xs font-normal text-neutral-400">
      {{ time }}
    </p>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  icon: string
  title: string
  content: string
  time: string
}>()
</script>

<style>
/* You can remove this style block if not needed */
</style>
