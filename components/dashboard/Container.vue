<template>
  <div class="px-4 pb-20 md:overflow-y-auto">
    <div class="mb-10 flex w-full items-center gap-2 border-b-2 border-primary">
      <h1 class="mb-4 text-xl font-semibold">{{ title }}</h1>
    </div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
defineProps(['title'])
</script>

<style></style>
