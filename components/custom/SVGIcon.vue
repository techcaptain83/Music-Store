<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'

interface IconComponentProps {
  svg: string
  size?: number
}

const props = withDefaults(defineProps<IconComponentProps>(), {
  size: 20,
})

const dynamicSvg = ref(null)

const importSvg = async (svgText: string) => {
  console.log(svgText)
  if (svgText) return await import(`/img/dashboard/icon/${svgText}`)
}

onMounted(async () => (dynamicSvg.value = await importSvg(props.svg)))
watch(
  () => props.svg,
  async (svgText) => (dynamicSvg.value = await importSvg(svgText)),
)
</script>

<template>
  <component :is="dynamicSvg" v-if="dynamicSvg" class="fill-none" :width="size" :height="size" />
</template>
