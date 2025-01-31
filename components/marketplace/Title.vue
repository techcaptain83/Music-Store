<template>
  <!-- content title -->
  <div class="flex flex-row items-center gap-3">
    <CustomSVGIcon :svg="icon" />
    <div class="title font-[Euclid Circular B] text-3xl font-semibold text-white">{{ title }}</div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  icon: string
  title: string
}>()
</script>
