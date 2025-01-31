<template>
  <div class="flex flex-row gap-4">
    <DashboardLandingCardItem v-for="(card, index) in dashboardCards" :key="index" :="card" />
  </div>
</template>

<script setup lang="ts">
const dashboardCards = ref([
  {
    icon: '/img/dashboard/svg/earnings.svg',
    title: 'Earnings',
    content: '$1,348.55',
    time: 'Last 30 Days',
  },
  {
    icon: '/img/dashboard/svg/packs_sold.svg',
    title: 'Packs Sold',
    content: '361',
    time: 'Last 30 Days',
  },
  {
    icon: '/img/dashboard/svg/total_plays.svg',
    title: 'Total Plays',
    content: '6.22K',
    time: 'All time',
  },
  {
    icon: '/img/dashboard/svg/views.svg',
    title: 'Views',
    content: '3.5K',
    time: 'All time',
  },
])
</script>
