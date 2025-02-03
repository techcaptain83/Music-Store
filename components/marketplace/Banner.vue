<template>
  <div class="relative">
    <swiper
      :slidesPerView="3"
      :spaceBetween="5"
      :modules="modules"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :loop="true"
      :navigation="true"
      :pagination="{
        clickable: true,
      }"
      :centeredSlides="true"
      :breakpoints="{
        '320': {
          slidesPerView: 1.2,
          spaceBetween: 5,
        },
        '640': {
          slidesPerView: 1.2,
          spaceBetween: 5,
        },
        '820': {
          slidesPerView: 1.2,
          spaceBetween: 5,
        },
        '1035': {
          slidesPerView: 1.4,
          spaceBetween: 5,
        },
        '1240': {
          slidesPerView: 1.4,
          spaceBetween: 5,
        },
        '1440': {
          slidesPerView: 1.4,
          spaceBetween: 5,
        },
      }"
    >
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <div class="relative">
          <img :src="slide" alt="" class="rounded-md" />
          <div
            class="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-9"
          >
            <div class="font-inter text-[64px] font-bold text-white">After Hours</div>
            <div class="font-inter flex flex-col items-center text-center text-2xl font-normal text-white">
              An eclectic mix or smooth jazz sounds to encourage the
              <br />
              ever loving baby making process
            </div>
            <CustomButton class="h-[68px] text-xl font-semibold">BROWSER PACK</CustomButton>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const modules = [Navigation, Pagination, Scrollbar, A11y]
const slides = ref<string[]>([
  '/marketplace/banner/banner-1.png',
  '/marketplace/banner/banner-2.png',
  '/marketplace/banner/banner-3.png',
])

const onSwiper = (swiper: any) => {
  console.log(swiper)
}

const onSlideChange = () => {
  console.log('slide change')
}
</script>

<style scoped>
/* Add your custom styles here */
.swiper-pagination-bullet-active {
  background-color: #d9d9d9 !important;
}
</style>
