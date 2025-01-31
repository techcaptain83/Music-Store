<template>
  <div>
    <!-- search box -->
    <!-- tabs -->
    <MarketplaceTab :tabs="['All', 'Samples', 'Midi', 'One Shots']" :current-tab="currentTab" @onClickTab="onClickTab">
      <div class="grid w-full grid-cols-5 gap-4" v-if="currentTab === 'All'">
        <MarketplaceCard
          img="/marketplace/frame/16.png"
          kit="Kit Name"
          producer="Producer Name"
          icon="m-fire.svg"
          v-for="i in 30"
          :key="i"
        />
      </div>
      <div class="grid w-full grid-cols-5 gap-4" v-if="currentTab === 'Samples'">
        <MarketplaceCard
          img="/marketplace/frame/16.png"
          kit="Kit Name"
          producer="Producer Name"
          icon="m-fire.svg"
          v-for="i in 30"
          :key="i"
        />
      </div>
      <div class="grid w-full grid-cols-5 gap-4" v-if="currentTab === 'Midi'">
        <MarketplaceCard
          img="/marketplace/frame/16.png"
          kit="Kit Name"
          producer="Producer Name"
          icon="m-fire.svg"
          v-for="i in 30"
          :key="i"
        />
      </div>
      <div class="grid w-full grid-cols-5 gap-4" v-if="currentTab === 'One Shots'">
        <MarketplaceCard
          img="/marketplace/frame/16.png"
          kit="Kit Name"
          producer="Producer Name"
          icon="m-fire.svg"
          v-for="i in 30"
          :key="i"
        />
      </div>
    </MarketplaceTab>
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
