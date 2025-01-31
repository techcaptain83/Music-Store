<template>
  <div class="flex flex-col gap-2">
    <div class="font-inter flex flex-row gap-4 border-b border-neutral-800 text-neutral-400">
      <div
        class="cursor-pointer p-4"
        v-for="tab in tabs"
        :key="tab"
        :class="tab === currentTab ? 'border-b border-primary text-white' : ''"
        @click="() => emits('onClickTab', tab)"
      >
        {{ tab }}
      </div>
    </div>
    <div class="flex w-full">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
const emits = defineEmits(['onClickTab'])
defineProps<{
  tabs: string[]
  currentTab: string
}>()
</script>
