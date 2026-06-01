<template>
  <div class="section-panel p-6 rounded-[18px]">
    <div class="font-semibold font-display text-sm uppercase tracking-[0.35em] text-paper mb-4">{{ title }}</div>
    <p class="text-paper text-sm leading-7 font-serif">{{ content }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  content: String,
})
</script>
