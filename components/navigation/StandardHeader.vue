<script setup lang="ts">
const links = [
  {
    text: 'Home',
    link: '/',
  },
  {
    text: 'Pages',
    link: '/pages',
  },
  {
    text: 'Articles',
    link: '/articles',
  },
]
</script>

<template>
  <nav class=" border-gray-200">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <NuxtLink href="/" class="flex items-center">
        <img src="~/assets/icons/logo.svg" class="h-8 w-8 mr-3" alt="Admax Logo">
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ADMAX</span>
      </NuxtLink>
      <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>
      <div id="navbar-default" class="hidden w-full md:block md:w-auto">
        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
          <li v-for="(item, index) in links" :key="index">
            <NuxtLink
              :href="item.link"
              active-class="md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              {{ item.text }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
