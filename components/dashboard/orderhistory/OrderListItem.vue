<template>
  <NuxtLayout name="dashboard" title="Order History">
    <template #purchases>
      <div class="flex items-center gap-2 text-lg font-semibold">
        <h3 class="text-gray-800">Your Orders:</h3>
        <p class="rounded-md bg-primary/10 px-1 text-primary">{{ purchaseOrders.length ? purchaseOrders.length : '0' }}</p>
      </div>
    </template>

    <DashboardEmptyState
      v-if="isPurchasesEmpty"
      title="You haven’t made any purchases yet"
      subtitle="Any purchase you make will show up here. Click the button below to browse all kits."
      button-text="Shop Kits"
    />

    <div v-else class="border-dark grid gap-6 rounded-lg">
      <div
        v-for="order in purchaseOrders"
        :key="order.id"
        :class="['rounded-md border', { open: openPurchaseOrder === order.id }]"
      >
        <div class="flex items-center gap-16 bg-grey-light px-6 py-4 text-foreground">
          <div class="flex items-center gap-6">
            <UiCustomSVGIcon
              svg="chevron-right"
              class="cursor-pointer stroke-foreground transition-all duration-300"
              :class="openPurchaseOrder === order.id ? 'rotate-90' : ''"
              @click="togglePurchaseOrder(order.id)"
            />
            <div>
              <p class="text-xs text-foreground-secondary">Order Placed</p>
              <p>{{ order.date }}</p>
            </div>
          </div>
          <div>
            <p class="text-xs text-foreground-secondary">Total</p>
            <p>${{ order.amount }}</p>
          </div>
          <div>
            <p class="text-xs text-foreground-secondary">Order #</p>
            <p>{{ order.id }}</p>
          </div>
          <a class="ml-auto text-sm font-semibold text-primary hover:underline" href="">View Invoice</a>
        </div>
        <div
          class="grid overflow-hidden px-4 transition-all duration-700 ease-in-out"
          :class="openPurchaseOrder === order.id ? 'h-auto grid-rows-1 py-4 opacity-100' : 'h-0 grid-rows-none opacity-0'"
        >
          <div
            v-for="kit in order.kits"
            :key="kit.id"
            class="flex items-center justify-between overflow-hidden rounded-md p-3 transition-all duration-700 hover:bg-gray-100"
            :class="openPurchaseOrder === order.id ? 'h-auto' : 'h-0'"
          >
            <div class="flex items-center gap-4">
              <img :src="kit.imageUrl" alt="Kit Image" class="size-16 object-cover" />
              <div>
                <h3 class="text-base font-semibold">{{ kit.name }}</h3>
                <p class="text-xs text-secondary">{{ kit.producer }}</p>
              </div>
            </div>
            <CustomButton variant="default" size="sm"> Download </CustomButton>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
<script setup lang="ts">
definePageMeta({
  layout: false,
  name: 'Order History',
})

const purchaseOrders = ref([
  {
    id: '112-2304',
    date: '2024-01-01',
    samples: [
      {
        id: 1,
        name: 'Exotic Sample A',
        producer: 'Producer 1',
      },
      {
        id: 2,
        name: 'Rare Sample B',
        producer: 'Producer 2',
      },
    ],
    kits: [
      {
        id: 1,
        name: 'Deluxe Kit X',
        imageUrl: 'https://picsum.photos/200',
        producer: 'Producer 1',
      },
      {
        id: 2,
        name: 'Ultimate Kit Y',
        imageUrl: 'https://picsum.photos/200',
        producer: 'Producer 3',
      },
    ],
    amount: 100,
  },
  {
    id: '113-2305',
    date: '2024-01-02',
    samples: [
      {
        id: 3,
        name: 'Mystic Sample C',
        producer: 'Producer 4',
      },
      {
        id: 4,
        name: 'Enchanted Sample D',
        producer: 'Producer 6',
      },
    ],
    kits: [
      {
        id: 3,
        name: 'Adventure Kit Z',
        imageUrl: 'https://picsum.photos/200',
        producer: 'Producer 5',
      },
      {
        id: 4,
        name: 'Explorer Kit W',
        imageUrl: 'https://picsum.photos/200',
        producer: 'Producer 7',
      },
    ],
    amount: 150,
  },
  {
    id: '114-2306',
    date: '2024-01-03',
    samples: [
      {
        id: 5,
        name: 'Legendary Sample E',
        producer: 'Producer 8',
      },
      {
        id: 6,
        name: 'Mythical Sample F',
        producer: 'Producer 9',
      },
    ],
    kits: [
      {
        id: 5,
        name: 'Epic Kit A',
        imageUrl: 'https://picsum.photos/200',
        producer: 'Producer 10',
      },
      {
        id: 6,
        name: 'Supreme Kit B',
        imageUrl: 'https://picsum.photos/200',
        producer: 'Producer 11',
      },
    ],
    amount: 200,
  },
])

const isPurchasesEmpty = ref(false)
const openPurchaseOrder = ref<string | null>(null)

const togglePurchaseOrder = (id: string) => (openPurchaseOrder.value = openPurchaseOrder.value === id ? null : id)
</script>
