<template>
  <div class="mb-10 flex items-center justify-between md:-mt-1">
    <h3 class="font-inter text-xl font-bold">Kit List</h3>
    <div class="flex gap-3">
      <CustomButton variant="default" size="sm">
        Add New Kit
        <UiCustomSVGIcon class="stroke-primary-foreground" svg="plus" />
      </CustomButton>
    </div>
  </div>
  <div class="flex items-center gap-4">
    <img alt="Kit Image" class="size-16 rounded-md object-cover" />
    <div>
      <h3 class="text-base font-semibold">kit.name</h3>
      <p class="text-xs text-secondary">Sales</p>
    </div>
  </div>
  <div class="flex items-center gap-4">
    <p class="text-xs text-secondary">Published:</p>
    <CustomButton variant="outline" size="sm"> Edit Kit </CustomButton>
    <button><UiCustomSVGIcon class="stroke-primary" svg="archive" /></button>
    <button><UiCustomSVGIcon class="stroke-destructive" svg="trash" /></button>
  </div>
  <!-- <NuxtLink :to="`/dashboard/my-stash/${kit.id}`" class="flex items-center justify-between rounded-md p-3 hover:bg-gray-100">
    <div class="flex items-center gap-4">
      <img :src="kit.image" alt="Kit Image" class="size-16 rounded-md object-cover" />
      <div>
        <h3 class="text-base font-semibold">{{ kit.name }}</h3>
        <p class="text-xs text-secondary">{{ kit.sales }} Sales</p>
      </div>
    </div>
    <div class="flex items-center gap-4">
      <p class="text-xs text-secondary">Published: {{ publishedDate }}</p>
      <CustomButton variant="outline" size="sm"> Edit Kit </CustomButton>
      <button><UiCustomSVGIcon class="stroke-primary" svg="archive" /></button>
      <button><UiCustomSVGIcon class="stroke-destructive" svg="trash" /></button>
    </div>
  </NuxtLink> -->
</template>

<!-- <script setup lang="ts">
const kit = defineProps<{
  id: string
  name: string
  description: string
  price: number
  image: string
  file: string
  sales: number
  publishedDate: string
}>()

const publishedDate = computed(() => {
  return new Date(kit.publishedDate).toLocaleDateString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: '2-digit',
  })
})
</script> -->
