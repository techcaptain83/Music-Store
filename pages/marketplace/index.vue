<template>
  <div class="-mx-32 pb-32">
    <MarketplaceBanner />
  </div>
  <div class="flex flex-col gap-24">
    <!-- Latest Releases -->
    <div>
      <!-- header -->
      <div class="mb-6 flex flex-row justify-between">
        <!-- title -->
        <MarketplaceTitle icon="" title="Latest Releases" />
      </div>
      <!-- content -->
      <div class="grid grid-cols-6">
        <MarketplaceCard
          img="/marketplace/frame/16.png"
          kit="Kit Name"
          producer="Producer Name"
          icon="m-fire.svg"
          v-for="i in 6"
          :key="i"
        />
      </div>
    </div>

    <!-- Trending Kits -->
    <div>
      <!-- header -->
      <div class="mb-6 flex flex-row justify-between">
        <!-- title -->
        <MarketplaceTitle title="Trending Kits" icon="m-fire.svg" />
        <!-- left button -->
        <div class="flex flex-row gap-2">
          <button class="w-[36px] rounded-full bg-[#2B2B2B]">
            <Icon name="fluent:arrow-left-12-filled" width="24" height="24" style="color: #fff" />
          </button>
          <button class="w-[36px] rounded-full bg-[#2B2B2B]">
            <Icon name="fluent:arrow-right-12-filled" width="24" height="24" style="color: #fff" />
          </button>
        </div>
      </div>
      <!-- content -->
      <div class="grid grid-cols-6">
        <MarketplaceCard
          img="/marketplace/frame/16.png"
          kit="Kit Name"
          producer="Producer Name"
          icon="m-fire.svg"
          v-for="i in 6"
          :key="i"
        />
      </div>
    </div>

    <!-- Sample Stash Exclusives -->
    <div>
      <!-- header -->
      <div class="mb-6 flex flex-row justify-between">
        <!-- title -->
        <MarketplaceTitle icon="" title="Sample Stash Exclusives" />
        <!-- left button -->
        <div class="flex flex-row gap-2">
          <button class="w-[36px] rounded-full bg-[#2B2B2B]">
            <Icon name="fluent:arrow-left-12-filled" width="24" height="24" style="color: #fff" />
          </button>
          <button class="w-[36px] rounded-full bg-[#2B2B2B]">
            <Icon name="fluent:arrow-right-12-filled" width="24" height="24" style="color: #fff" />
          </button>
        </div>
      </div>
      <!-- content -->
      <div class="grid grid-cols-6">
        <MarketplaceCard
          img="/marketplace/frame/16.png"
          kit="Kit Name"
          producer="Producer Name"
          icon="m-fire.svg"
          v-for="i in 6"
          :key="i"
        />
      </div>
    </div>

    <!-- Trending Samples -->
    <div>
      <div class="mb-6 flex flex-row justify-between">
        <!-- title -->
        <MarketplaceTitle icon="m-fire.svg" title="Trending Samples" />
        <!-- left button -->
      </div>
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

    <!-- Browse by Genre -->
    <div>
      <!-- header -->
      <div class="mb-6 flex flex-row justify-between">
        <!-- title -->
        <MarketplaceTitle icon="" title="Browse by Genre" />
      </div>
      <!-- content -->
      <div class="flex grid grid-cols-3 flex-col gap-4">
        <MarketplaceDarkCard bg_img="/marketplace/genre/image2.png" title="Soul/R&B" />
        <MarketplaceDarkCard bg_img="/marketplace/genre/image3.png" title="Hip Hop" />
        <MarketplaceDarkCard bg_img="/marketplace/genre/image4.png" title="Pop" />
        <MarketplaceDarkCard bg_img="/marketplace/genre/image5.png" title="Afrobeat" />
        <MarketplaceDarkCard bg_img="/marketplace/genre/image6.png" title="Trap" />
        <MarketplaceDarkCard bg_img="/marketplace/genre/image7.png" title="Multi" />
      </div>
    </div>

    <!-- Top Creators -->
    <div>
      <!-- header -->
      <div class="mb-6 flex flex-row justify-between">
        <!-- title -->
        <MarketplaceTitle icon="" title="Top Creators " />
        <!-- left button -->
        <div class="flex flex-row gap-2">
          <button class="w-[36px] rounded-full bg-[#2B2B2B]">
            <Icon name="fluent:arrow-left-12-filled" width="24" height="24" style="color: #fff" />
          </button>
          <button class="w-[36px] rounded-full bg-[#2B2B2B]">
            <Icon name="fluent:arrow-right-12-filled" width="24" height="24" style="color: #fff" />
          </button>
        </div>
      </div>
      <!-- content -->
      <div class="grid grid-cols-5 gap-6">
        <MarketplaceProducer
          img="/marketplace/producers/producer-1.png"
          name="Brian Corner"
          :sub_img="['/marketplace/frame/1.png', '/marketplace/frame/2.png', '/marketplace/frame/3.png']"
        />
        <MarketplaceProducer
          img="/marketplace/producers/producer-3.png"
          name="Brian Corner"
          :sub_img="['/marketplace/frame/4.png', '/marketplace/frame/5.png', '/marketplace/frame/6.png']"
        />
        <MarketplaceProducer
          img="/marketplace/producers/producer-2.png"
          name="Brian Corner"
          :sub_img="['/marketplace/frame/9.png', '/marketplace/frame/8.png', '/marketplace/frame/7.png']"
        />
        <MarketplaceProducer
          img="/marketplace/producers/producer-4.png"
          name="Brian Corner"
          :sub_img="['/marketplace/frame/10.png', '/marketplace/frame/11.png', '/marketplace/frame/13.png']"
        />
        <MarketplaceProducer
          img="/marketplace/producers/producer-5.png"
          name="Brian Corner"
          :sub_img="['/marketplace/frame/14.png', '/marketplace/frame/15.png', '/marketplace/frame/18.png']"
        />
      </div>
    </div>

    <!-- Contact -->
    <div>
      <div class="flex flex-col gap-6">
        <div class="flex flex-row gap-6"></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'marketplace',
})
</script>
