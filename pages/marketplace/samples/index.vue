<template>
  <div class="flex flex-col gap-6">
    <!-- sample nav -->
    <MarketplaceTab :tabs="['All', 'Samples', 'Kits']" :current-tab="currentTab" @onClickTab="onClickTab">
      <div class="grid w-full grid-cols-4 gap-4" v-if="currentTab === 'All'">
        <MarketplaceSamplesSampleCard
          img="/marketplace/frame/16.png"
          kit="Kit Name"
          producer="Producer Name"
          icon="m-fire.svg"
          v-for="i in 8"
          :key="i"
        />
      </div>
      <div class="grid w-full grid-cols-4 gap-4" v-if="currentTab === 'Samples'">
        <MarketplaceSamplesSampleCard
          img="/marketplace/frame/16.png"
          kit="Kit Name"
          producer="Producer Name"
          icon="m-fire.svg"
          v-for="i in 8"
          :key="i"
        />
      </div>
      <div class="grid w-full grid-cols-4 gap-4" v-if="currentTab === 'Kits'">
        <MarketplaceSamplesSampleCard
          img="/marketplace/frame/16.png"
          kit="Kit Name"
          producer="Producer Name"
          icon="m-fire.svg"
          v-for="i in 8"
          :key="i"
        />
      </div>
    </MarketplaceTab>
    <!-- search box -->
    <MarketplaceSearch> </MarketplaceSearch>
    <!-- records -->
    <div class="flex flex-col gap-4">
      <MarketplaceRecord
        img="/marketplace/frame/16.png"
        title="SLS_SS_85_music_loop_resampled_soul_climax_Abmin.wav"
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
