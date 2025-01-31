<template>
  <swiper
    class=""
    :modules="modules"
    :slides-per-view="1"
    :space-between="50"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    :loop="true"
    :navigation="true"
    :pagination="{
      enabled: true,
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
        spaceBetween: 10,
      },
      '1035': {
        slidesPerView: 1.2,
        spaceBetween: 10,
      },
      '1240': {
        slidesPerView: 1.2,
        spaceBetween: 10,
      },
      '1440': {
        slidesPerView: 1.4,
        spaceBetween: 10,
      },
    }"
  >
    <swiper-slide v-for="(slide, index) in slides" :key="index">
      <img :src="slide" alt="" class="rounded-md" />
    </swiper-slide>
  </swiper>
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
