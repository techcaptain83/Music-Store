<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <NuxtLayout name="dashboard" :title="`Kit Name ${route.params.id}`" :has-go-back-button="true">
    <p>content</p>
    <!-- <h3 class="text-base font-semibold">Kit Name {{ route.params.id }}</h3> -->
  </NuxtLayout>
</template>
