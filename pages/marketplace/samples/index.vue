<template>
  <div>
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
    <div class="relative mb-8 mt-12 w-full max-w-sm items-center">
      <Input id="search" type="text" placeholder="Search..." class="bg-[#111111] pl-10" />
      <span class="absolute inset-y-0 start-0 flex items-center justify-center px-2">
        <Search class="text-muted-foreground size-6" />
      </span>
    </div>
    <!-- records -->
    <MarketplaceRecord
      img="/marketplace/frame/16.png"
      title="SLS_SS_85_music_loop_resampled_soul_climax_Abmin.wav"
      producer="Brian Connor"
      v-for="i in 10"
      :key="i"
    />
  </div>
</template>
<script setup lang="ts">
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-vue-next'

definePageMeta({
  layout: 'marketplace',
})

const currentTab = ref('All')
const onClickTab = (tab: string) => {
  currentTab.value = tab
}
</script>
