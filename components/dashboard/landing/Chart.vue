<template>
  <div class="flex flex-col gap-8 rounded-2xl bg-white p-4">
    <p class="font-inter text-left text-xl font-bold text-black">Earnings</p>
    <LineChart :data="data" index="month" :categories="['earnings']" :colors="['green']" :show-legend="false" />
  </div>
</template>

<script lang="ts" setup>
import { LineChart } from '@/components/ui/chart-line'

const data = [
  {
    month: 'Jan',
    earnings: 1.26,
  },
  {
    month: 'Mar',
    earnings: 1.25,
  },
  {
    month: 'May',
    earnings: 1.24,
  },
  {
    month: 'Jul',
    earnings: 1.25,
  },
  {
    month: 'Sep',
    earnings: 1.22,
  },
  {
    month: 'Nov',
    earnings: 1.2,
  },
  {
    month: 'Dec',
    earnings: 1.17,
  },
]
</script>

<style></style>
