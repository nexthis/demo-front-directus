<script setup lang="ts">
import type { PagesInterface } from 'database-types/dataset'

const props = defineProps<{
  page: PagesInterface
}>()

const componentMap: Record<any, any> = {
  block_content: resolveComponent('BlocksContent'),
  block_hero: resolveComponent('BlocksHero'),
  block_related_articles: resolveComponent('BlocksArticles'),
}

const blocks = computed(() => {
  const blocks = unref(props.page)?.blocks
  return blocks?.filter((block) => {
    return block.hide_block !== true
  })
})
</script>

<template>
  <div id="content" class="mx-auto">
    <template v-for="block in blocks" :key="block.id">
      <component :is="componentMap[block.collection]" v-if="block && block.collection" :data="block.item" />
    </template>
  </div>
</template>
