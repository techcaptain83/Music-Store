<template>
  <!-- record list -->
  <div class="flex flex-row items-center justify-between gap-9 p-3">
    <!-- List player -->
    <div class="flex flex-row gap-6">
      <div class="flex flex-row items-center gap-4">
        <div class="h-[60px] w-[60px]">
          <img :src="img" alt="" class="rounded-md" />
        </div>
        <div class="flex flex-row gap-2.5">
          <CustomSVGIcon svg="m-audio-play.svg" />
          <img src="/icon/m-audio-bg.svg" alt="" />
        </div>
      </div>

      <div class="flex items-center">
        <div>
          <div class="font-inter text-base font-normal text-white">{{ title }}</div>
          <div class="font-inter text-normal text-xs text-secondary">{{ producer }}</div>
        </div>
      </div>
    </div>
    <!-- List detail -->
    <div class="flex flex-row gap-6">
      <CustomSVGIcon svg="m-fire.svg" />
      <div class="font-inter flex items-center rounded-md border border-[#4D4D4D] text-xs font-medium text-white">STEMS</div>
      <div class="font-inter flex items-center text-xs font-medium text-white">Instrument</div>
      <div class="font-inter flex items-center text-xs font-medium text-white">Genre</div>
      <div class="font-inter flex items-center text-xs font-medium text-white">80 BPM</div>
      <div class="font-inter flex items-center text-xs font-medium text-white">A# minor</div>
      <CustomSVGIcon svg="m-add-to-cart.svg" />
      <CustomSVGIcon svg="m-heart.svg" />
      <!-- <CustomSVGIcon svg="m-check-circle.svg" /> -->
      <CustomSVGIcon svg="m-3-dots.svg" />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  img: string
  title: string
  producer: string
}>()
</script>
