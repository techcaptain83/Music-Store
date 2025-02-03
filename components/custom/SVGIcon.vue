<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'

interface IconComponentProps {
  svg: string
  size?: number
}

// Define props with default values
const props = withDefaults(defineProps<IconComponentProps>(), {
  size: 24,
})

// Reactive reference for SVG content
const svgContent = ref<string | null>(null)

// Function to fetch SVG content
const fetchSvg = async (svgText: string) => {
  try {
    const response = await fetch(`/icon/${svgText}`)
    if (!response.ok) {
      throw new Error(`Failed to fetch SVG: ${response.statusText}`)
    }
    svgContent.value = await response.text()
  } catch (error) {
    console.error(error)
    svgContent.value = null
  }
}

// On component mount, load the initial SVG
onMounted(() => {
  fetchSvg(props.svg)
})

// Watch for changes in the svg prop
watch(
  () => props.svg,
  (svgText) => {
    fetchSvg(svgText)
  },
)
</script>

<template>
  <div
    v-if="svgContent"
    v-html="svgContent"
    class="flex items-center fill-none"
    :style="{ width: `${props.size}px`, height: `${props.size}px` }"
  />
</template>
