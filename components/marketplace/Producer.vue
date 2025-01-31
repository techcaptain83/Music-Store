<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-row">
      <img class="-z-1" :src="img" alt="" />
      <div class="flex items-center">
        <div class="-ml-6 flex flex-col gap-2">
          <img class="rounded-xl" :src="sub_img[0]" alt="" />
          <img class="rounded-xl" :src="sub_img[1]" alt="" />
          <img class="rounded-xl" :src="sub_img[2]" alt="" />
        </div>
      </div>
    </div>
    <div class="font-inter grid justify-items-center text-xl font-semibold text-white">
      {{ name }}
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  img: string
  name: string
  sub_img: string[]
}>()
</script>
