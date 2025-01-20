<script setup lang="ts">
const { data } = useArticles()


</script>

<template>
  <div class="py-8 mx-auto px-6 lg:px-16 lg:py-24 max-w-6xl">
    <div class="space-y-4">
      <h2 class="font-medium tracking-wider uppercase font-display text-primary">
        Articles
      </h2>
      <div class="relative grid gap-8 md:gap-12 md:grid-cols-3 lg:grid-cols-6">
        <figure
          v-for="(item, index) in data" :key="item.id"
          class="flex-col flex group gap-6 border-b border-gray-300 pb-6 dark:border-gray-700 "
          :class="{ 'md:col-span-3': index < 2, 'md:col-span-2': index >= 2 }"
        >
          <NuxtLink :href="`/articles/${item.slug}`" class="w-full h-56 relative block overflow-hidden border dark:border-gray-700 group rounded-card flex-shrink-0">
            <NuxtImg :src="item.image" provider="directus" class="relative flex-shrink-0 object-cover w-full h-full transition duration-300 saturate-0 group-hover:opacity-75" />
            <div class="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-br from-transparent via-transparent to-primary group-hover:opacity-100" />
            <span v-if="item.tags && item.tags.length" class="inline-flex items-center font-display font-medium rounded-button px-2.5 py-0.5 absolute bottom-0 left-0 mb-4 ml-4" style="background-color: rgb(162, 181, 205); color: rgb(0, 0, 0);">{{ item.tags[0] }}</span>
          </NuxtLink>
          <div class="flex flex-col justify-between h-full gap-3">
            <NuxtLink :href="`/articles/${item.slug}`" class="space-y-4">
              <div class="text-xl font-display font-semibold leading-snug tracking-tight color-em dark:text-white group-hover:text-primary">
                {{ item.title }}
              </div>
              <p class="text-gray-600 dark:text-gray-300 text-sm sm:text-base line-clamp-2">
                {{ item.short }}
              </p>
            </NuxtLink>
            <div class="flex items-center flex-none group dark:text-gray-100" />
          </div>
        </figure>
      </div>
    </div>
  </div>
</template>
