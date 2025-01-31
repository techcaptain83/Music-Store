<script setup lang="ts">
import { dashboardRoutesUserList, dashboardRoutesSellerList } from '~/routes'
</script>

<template>
  <div class="hidden md:mt-10 md:block md:basis-60">
    <ul>
      <DashboardLayoutsSidebarItem
        v-for="route in dashboardRoutesSellerList"
        :key="route.path"
        :path="route.path"
        :name="route.name"
        :icon="route.icon"
      />

      <li class="my-4 h-px w-full bg-gray-300" />

      <DashboardLayoutsSidebarItem
        v-for="route in dashboardRoutesUserList"
        :key="route.path"
        :path="route.path"
        :name="route.name"
        :icon="route.icon"
      />
    </ul>
  </div>
</template>
