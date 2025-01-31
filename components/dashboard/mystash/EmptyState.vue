<template>
  <div class="mb-10 flex items-center justify-between md:-mt-1">
    <h3 class="font-inter text-xl font-bold">
      Total Kits: <span class="text-primary">{{ kits?.length ? kits?.length : '0' }}</span>
    </h3>
    <div class="flex gap-3">
      <CustomButton variant="default" size="sm">
        Add New Kit
        <UiCustomSVGIcon class="stroke-primary-foreground" svg="plus" />
      </CustomButton>
    </div>
  </div>

  <div class="overflow-hidden rounded-lg border border-gray-300 bg-gray-100 text-center">
    <div class="mb-2 flex justify-center gap-6 pt-12">
      <img
        v-for="(img, index) in shuffledImages"
        :key="img"
        :src="img"
        :class="['aspect-square size-16 object-cover', { '-mt-4': index % 2 === 0 }]"
      />
    </div>
    <div class="flex flex-col gap-2 px-60 pb-10 pt-6">
      <h2 class="font-inter font-semibold text-black">{{ content }}</h2>
      <p class="font-inter px-10 text-base font-normal text-black">{{ subContent }}</p>
      <div class="flex flex-row px-40">
        <CustomButton class="mt-4 w-48">
          {{ btnText }}
        </CustomButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  kits: string
  content: string
  subContent: string
  btnText: string
}>()

const staticImages = [
  'https://images.unsplash.com/photo-1724775255163-b0f5f5241642?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4NHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1724764147764-3eb2a66cdf11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4OXx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1721332149346-00e39ce5c24f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5MXx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1724880438345-f70bd9ee6147?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5M3x8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1719937051176-9b98352a6cf4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDF8fHxlbnwwfHx8fHw%3D',
  'https://plus.unsplash.com/premium_photo-1724014999905-d698d5b8be55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDl8fHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1723300677966-ab58ec1d0b2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMTB8fHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1721332154373-17e78d19b4a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMTF8fHxlbnwwfHx8fHw%3D',
  'https://plus.unsplash.com/premium_photo-1695680239804-0301e04d8f1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMTh8fHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1723581049530-04c60a257155?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMjV8fHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1719937206168-f4c829152b91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzF8fHxlbnwwfHx8fHw%3D',
]

const shuffledImages = useState('shuffledImages', () => [...staticImages].sort(() => 0.5 - Math.random()))
</script>
