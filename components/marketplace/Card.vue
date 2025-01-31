<template>
  <div class="flex flex-row gap-4">
    <div
      class="hover:opacity-900 group relative flex flex-col gap-4 rounded-2xl px-3 pb-4 pt-3 transition-opacity duration-300 ease-in-out hover:bg-[#2B2B2B]"
    >
      <!-- card img -->
      <div
        class="relative grid h-52 w-52 justify-items-end rounded-xl bg-cover bg-center"
        :style="{ backgroundImage: `url(${img})` }"
      >
        <div class="flex flex-row gap-1 p-1">
          <!-- Play Button -->
          <CustomButton
            class="absolute left-1/2 top-1/2 flex hidden -translate-x-1/2 -translate-y-1/2 transform items-center justify-center group-hover:flex"
            size="icon_lg"
          >
            <CustomSVGIcon class="flex items-center pl-1" svg="m-audio-play.svg" />
          </CustomButton>
          <!-- Top Right Icons -->
          <div class="flex h-6 flex-row items-center gap-1.5 rounded-full bg-[#3E3E3E] px-2 py-1">
            <CustomSVGIcon class="flex items-center" svg="m-audio.svg" :size="16" />
            <div class="text-[#BBB9B9]">20</div>
          </div>
          <div class="flex h-6 flex-row items-center rounded-full bg-[#3E3E3E] p-1">
            <CustomSVGIcon class="flex items-center" svg="m-heart-secondary.svg" :size="16" />
          </div>
        </div>
      </div>
      <!-- card detail -->
      <div class="flex flex-col gap-1">
        <div class="font-inter text-xl font-semibold text-white">{{ kit }}</div>
        <div class="font-inter text-base font-normal text-[#8D8D8D]">{{ producer }}</div>
      </div>
      <div class="flex flex-row gap-3">
        <CustomSVGIcon :svg="icon" />
        <div class="flex w-[64px] justify-center rounded-full bg-[#3e3e3e] text-[#BBB9B9]">Genre</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  img: string
  kit: string
  producer: string
  icon: string
}>()
</script>
