<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string

const { data, suspense } = usePage({ slug })

await suspense()


</script>

<template>
  <div class="mx-auto max-w-screen-xl pb-4 lg:py-20 px-4 sm:px-8">
    <PageBuilder v-if="data" :page="data" />
  </div>
</template>
