<template>
  <div class="flex flex-col rounded-2xl bg-white p-8">
    <div class="rounded-md border-2 border-dotted px-6 py-12">
      <div v-if="!isStripeConnected" class="flex flex-col items-center gap-4 px-40 py-10">
        <p class="font-inter text-xl font-bold">Connect with Stripe</p>
        <p class="font-inter text-center text-base font-normal text-[#4C4C66]">
          To receive automatic producer payouts, you must connect your Stripe account. If you do not yet have a Stripe account you
          can
          <span class="underline">create one here</span>. You will be able to view and manage all payouts from your Stripe
          dashboard.
        </p>
        <CustomButton class="mt-4 w-60 rounded-md bg-[#9333ea]">
          <img src="/dashboard/svg/payouts.svg" alt="" />
          <CustomSVGIcon class="" svg="payouts" />
          | Connect Stripe account</CustomButton
        >
      </div>

      <div v-else class="box p-10">
        <p class="font-inter text-xl font-bold">Disconnect with Stripe</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const isStripeConnected = ref(false)
</script>
