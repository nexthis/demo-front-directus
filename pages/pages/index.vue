<script setup lang="ts">
const { data } = usePages()


</script>

<template>
  <div class="mx-auto max-w-screen-xl pb-4 lg:py-20 px-4 sm:px-8">
    <NuxtLink v-for="item in data" :key="item.id" class="flex items-center justify-start mt-10 lg:mx-40" :href="`/pages/${item.slug}`">
      <NuxtImg v-if="item.image" provider="directus" sizes="96px md:488px" :src="item.image" class="h-24 w-24 lg:h-72 lg:w-72 object-cover object-center" />
      <div class="ml-3 lg:ml-14">
        <h2 class="text-xl font-bold md:text-3xl">
          {{ item.title }}
        </h2>
        <p class="text-base max-lines md:text-lg lg:mt-2">
          {{ item.description }}
        </p>
      </div>
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
.max-lines{
  overflow: hidden;
   display: -webkit-box;
   -webkit-line-clamp: 2; /* number of lines to show */
           line-clamp: 2;
   -webkit-box-orient: vertical;
}
</style>
