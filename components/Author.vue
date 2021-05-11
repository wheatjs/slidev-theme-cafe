<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
  name: string;
  gravatar: string;
}>()
</script>

<template>
  <div display="flex" flex="row" items="center" space="x-2">
    <img w="8" border="rounded-full" :src="`https://s.gravatar.com/avatar/${gravatar}?s=80`" />
    <span>
      {{name}}
    </span>
  </div>
</template>
