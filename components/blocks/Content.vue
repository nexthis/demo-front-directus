<script setup lang="ts">
import type { BlockContentInterface } from 'database-types/dataset'

defineProps<{
  data: BlockContentInterface
}>()

const { parse } = useContent()
</script>

<template>
  <div v-if="data.content" class="content max-w-4xl mx-auto" v-html="parse(data.content).join('')" />
</template>
