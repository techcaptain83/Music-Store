<script setup lang="ts">
provide('customContent', 'This is a custom message for the Purchases page.')

const isFavouritesEmpty = ref(true)
</script>

<template>
  <NuxtLayout name="dashboard" title="Favourites">
    <DashboardEmptyState
      v-if="isFavouritesEmpty"
      title="You haven’t favorited any kits yet"
      subtitle="All your favorites will show up here. Click the button below to browse all kits."
      button-text="Shop Kits"
    />

    <div v-else class="rounded-lg border border-dashed p-8 text-center">
      <h2 class="">Purchases</h2>
    </div>
  </NuxtLayout>
</template>
