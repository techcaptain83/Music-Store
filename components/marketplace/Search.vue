<template>
  <div class="relative w-full items-center">
    <!-- input -->
    <Input id="search" type="text" class="rounded-full border border-[#383838] bg-[#111111] pl-32 text-marketplace" />
    <!-- search -->
    <div class="absolute left-2 top-2 flex flex-row gap-4">
      <CustomSVGIcon svg="m-search.svg" />
      <div class="text-marketplace">Search</div>
    </div>
    <!-- filter -->
  </div>
</template>

<script setup lang="ts">
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-vue-next'
</script>
