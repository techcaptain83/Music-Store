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
        <div class="flex flex-row gap-6">
          <div class="relative w-1/3">
            <img class="w-full" src="/marketplace/img/img_1.png" alt="" />
            <div class="absolute left-[41px] top-[31px] flex flex-col gap-4">
              <div class="font-inter text-semibold text-[38px] text-white">
                Access all purchases &
                <span class="text-primary">instant</span>
                downloads
              </div>
              <div class="font-inter text-sm font-normal text-[#AFAFAF]">
                After purchase, you can immediately access your packs and samples in your account. Enjoy instant availability of
                your purchased content.
              </div>
            </div>
          </div>
          <div class="relative w-2/3">
            <img class="w-full" src="/marketplace/img/img_2.png" alt="" />
            <div class="absolute left-[52px] top-[89px] flex w-[35%] flex-col gap-4">
              <div class="font-inter text-semibold text-[38px] text-white">
                <span class="text-primary">Only quality</span>
                from the industries leading producers!
              </div>
              <div class="font-inter text-base font-normal text-[#AFAFAF]">
                After purchase, you can immediately access your packs and samples in your account. Enjoy instant availability of
                your purchased content.
              </div>
              <CustomButton class="flex w-[147px] items-center">
                SHOP KITS
                <CustomSVGIcon svg="m-shop.svg" />
              </CustomButton>
            </div>
          </div>
        </div>
        <div class="relative w-full">
          <img class="w-full" src="/marketplace/img/img_3.png" alt="" />
          <div class="absolute left-[56px] top-[111px] flex flex-row">
            <div class="flex w-[38%] flex-col gap-4">
              <div class="font-inter text-semibold text-[38px] text-white">
                Don't Let Your Stash Run Dry! Get Alerts on
                <span class="text-primary"> New Sound Packs!</span>
              </div>
              <div class="font-inter text-base font-normal text-[#AFAFAF]">
                Join our exclusive mailing list and ensure your sound library is always stocked with the freshest packs and
                samples. Get notified about exclusive releases and updates from The Sample Stash.
              </div>
            </div>
            <div class="flex w-[53%] flex-col justify-center gap-4 px-32 pt-8">
              <div class="font-inter px-6 text-base font-semibold text-white">Your Email</div>
              <div class="relative">
                <Input id="email" type="text" class="h-[60px] rounded-full" />
                <CustomButton
                  class="font-[Euclid Circular B ] absolute right-2 top-3 flex items-center text-base font-semibold text-white"
                >
                  JOIN NEWSLETTER
                  <CustomSVGIcon svg="m-email.svg" />
                </CustomButton>
              </div>
              <div class="font-inter px-6 text-sm font-normal text-[#AFAFAF]">
                Your privacy is our priority. We'll never sell your data, and it's used exclusively for The Sample Stash updates.
                Unsubscribe anytime.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'marketplace',
})
</script>
