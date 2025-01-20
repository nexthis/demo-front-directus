<script setup lang="ts">
import type { BlockRelatedArticlesInterface } from 'database-types/dataset'

defineProps<{
  data: BlockRelatedArticlesInterface
}>()
</script>

<template>
  <section class="body-font">
    <h2 class="max-w-2xl mx-auto text-center mt-10 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
      {{ data.title }}
    </h2>
    <div class="container px-5 pb-24 pt-14 mx-auto">
      <div class="flex flex-wrap justify-center -m-4">
        <div v-for="item in data.articles" :key="item.id" class="p-4 md:w-1/3">
          <div v-if="(typeof item.articles_id !== 'number')" class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <NuxtLink :href="`/articles/${item.articles_id?.slug}`">
              <NuxtImg v-if="item.articles_id?.image" :src="item?.articles_id?.image" provider="directus" class="lg:h-48 md:h-36 w-full object-cover object-center" />

              <div class="p-6">
                <h3 class="title-font text-lg font-medium mb-3">
                  {{ item.articles_id?.title }}
                </h3>
                <p class="leading-relaxed mb-3">
                  {{ item.articles_id?.short }}
                </p>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
