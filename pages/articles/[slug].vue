<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string
const { data, suspense } = useArticle({ slug })
const { parse } = useContent()

await suspense()


</script>

<template>
  <div class="w-full max-w-4xl mx-auto my-24 px-4 sm:px-6">
    <div class="md:prose-base lg:prose-lg prose dark:prose-invert prose-img:rounded-lg prose-img:rounded-lg prose-img:border-2 prose-img:border-gray-500 prose-headings:font-display prose-headings:font-semibold">
      <NuxtImg :src="data?.image" provider="directus" />
      <h1 class="text-4xl font-display font-semibold leading-snug tracking-tight color-em dark:text-white mt-5">
        {{ data?.title }}
      </h1>

      <div v-if="data?.content" class="content mb-20" v-html="parse(data?.content).join('')" />
    </div>
  </div>
</template>
