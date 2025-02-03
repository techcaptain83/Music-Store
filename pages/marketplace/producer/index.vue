<template>
  <!-- producer title -->
  <div class="relative mb-32">
    <img src="/marketplace/img/img_2.png" alt="" width="100%" height="100%" />
    <div class="absolute top-[262px] flex w-[32%] flex-col gap-10">
      <div class="flex flex-row gap-8">
        <img src="/marketplace/producers/producer.png" alt="" width="84" height="84" />
        <span class="font-inter flex items-center text-[44px] font-normal text-white">Producer Name</span>
      </div>
      <div class="font-inter text-xl font-normal text-white">
        Eiusmod eu magna in aute et eu ea magna fugiat sint sint commodo voluptate quis nulla. Eiusmod eu magna in aute et eu ea
        magna fugiat sint sint commodo voluptate quis nulla.
      </div>
    </div>
  </div>

  <div class="flex flex-col gap-6">
    <MarketplaceTitle icon="" title="Most Popular" />
    <div class="mb-32 grid grid-cols-5 gap-4">
      <MarketplaceCard
        img="/marketplace/frame/16.png"
        kit="kit name"
        icon="m-fire.svg"
        producer="Brian Connor"
        v-for="i in 5"
        :key="i"
      />
    </div>
    <MarketplaceTitle icon="" title="All Packs" />
    <!-- search box -->
    <MarketplaceSearch> </MarketplaceSearch>
    <!-- cards -->
    <div class="grid grid-cols-5 gap-4">
      <MarketplaceCard
        img="/marketplace/frame/16.png"
        kit="kit name"
        icon="m-fire.svg"
        producer="Brian Connor"
        v-for="i in 10"
        :key="i"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: 'marketplace',
})

const currentTab = ref('All')
const onClickTab = (tab: string) => {
  currentTab.value = tab
}
</script>
