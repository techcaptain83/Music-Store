<template>
  <div class="dashboard bg-[background: #EFF1F5]">
    <div class="md:mx-auto md:max-w-screen-xl">
      <DashboardLayoutsHeader />
      <div class="pt-24 md:grid md:h-[calc(100vh-6rem)] md:grid-cols-[160px_1fr] md:gap-8 md:overflow-hidden md:pt-0">
        <DashboardLayoutsSidebar />
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: 'bg-background text-foreground',
  },
})
</script>
