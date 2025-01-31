<template>
  <div class="flex flex-col rounded-2xl bg-white p-8">
    <!-- <template v-if="(kits?.length || 0) > 0">
      <DashboardOrderListItem
        v-for="kit in kits ?? []"
        :id="kit.id"
        :key="kit.id"
        :name="kit.name"
        :image="kit.imageUrl"
        :sales="100"
        :published-date="
          new Date().toLocaleDateString('en-US', {
            month: '2-digit',
            day: '2-digit',
            year: '2-digit',
          })
        "
      />
    </template>
    <template v-else>
      <DashboardOrderhistoryEmptyState
        content="You haven’t uploaded any kits yet"
        subContent="Get started by clicking the “Add New Kit” button to publish your first kit to the market place."
        btn-text="Add New Kit"
        kits=""
      />
    </template> -->
    <DashboardOrderhistoryEmptyState
      content="You haven’t uploaded any kits yet"
      subContent="Any purchase you make will show up here. Click the button below to browse all kits."
      btn-text="Shop Kits"
      kits=""
    />
  </div>
</template>

<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { apiClient } from '@/lib/api-client'

const kitsServer = async () => (await apiClient.GET('/kits')).data
const { data: kits, suspense } = useQuery({ queryKey: ['kits'], queryFn: kitsServer })

await suspense()

provide('customContent', 'This is a custom message for the Purchases page.')
</script>
