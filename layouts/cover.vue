<script setup lang="ts">
import { handleBackground } from '@slidev/client/layoutHelper'
import { defineProps, computed } from 'vue'

const props = defineProps({
  background: {
    default: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1957&q=80'
  }
})

const style = computed(() => handleBackground(props.background, true))
</script>

<template>
  <div class="slidev-layout cover text-center" :style="style">
    <div class="my-auto w-full">
      <slot />
    </div>
  </div>
</template>
