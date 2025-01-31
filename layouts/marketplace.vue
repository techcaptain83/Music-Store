<template>
  <div class="marketplace relative bg-[#171717]">
    <MarketplaceLayoutsHeader />
    <div class="min-h-screen pt-32">
      <div class="px-32">
        <slot />
      </div>
    </div>
    <MarketplaceLayoutsFooter />
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
