<script setup lang="ts">
const stats = [
  {
    data: '35K',
    title: 'Customers',
  },
  {
    data: '10K+',
    title: 'Downloads',
  },
  {
    data: '40+',
    title: 'Countries',
  },
  {
    data: '30M+',
    title: 'Total revenue',
  },
]

const features = [
  {
    icon:
               ` <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>`,
    title: 'Fast Refresh',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus.',
  },
  {
    icon:
                `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>`,
    title: 'Analytics',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus.',
  },
  {
    icon:
                `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>`,
    title: 'Datacenter security',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus.',
  },
  {
    icon:
              ` <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
              </svg>`,
    title: 'Build on your terms',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus.',
  },
  {
    icon:
                `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>`,
    title: 'Safe to use',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus.',
  },
  {
    icon:
                `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>,`,
    title: 'Flexible',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus.',
  },
]


</script>

<template>
  <div>
    <section class="mt-24 mx-auto max-w-screen-xl pb-4 lg:py-20 px-4 sm:px-8">
      <div class="text-center space-y-4">
        <h1 class="text-white font-bold text-4xl md:text-5xl">
          Optimize your website for
          <span class="text-blue-600"> Search engine</span>
        </h1>
        <p class="text-gray-500 max-w-xl mx-auto leading-relaxed">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum
        </p>
      </div>
      <div class="mt-12 justify-center items-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex">
        <a href="javascript:void(0)" class="px-10 py-3.5 w-full bg-blue-600 text-white text-center rounded-md shadow-md block sm:w-auto">
          Get started
        </a>
        <a href="javascript:void(0)" class="px-10 py-3.5 w-full text-gray-500 text-center border rounded-md duration-300 hover:text-blue-600 hover:shadow block sm:w-auto">
          Try it out
        </a>
      </div>
    </section>

    <div class="my-20" />

    <section class="py-14">
      <div class="max-w-screen-xl mx-auto px-4 text-gray-500 gap-x-12 items-start justify-between lg:flex md:px-8">
        <div class="sm:hidden lg:block lg:max-w-xl">
          <img src="https://images.unsplash.com/photo-1622675363311-3e1904dc1885?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" class="rounded-lg" alt="">
        </div>
        <div class="mt-6 gap-12 sm:mt-0 md:flex lg:block">
          <div class="max-w-2xl">
            <h3 class="text-white text-3xl font-semibold sm:text-4xl">
              We do our best to make customers always happy
            </h3>
            <p class="mt-3 max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis sollicitudin quam ut tincidunt.
            </p>
          </div>
          <div class="flex-none mt-6 md:mt-0 lg:mt-6">
            <ul class="inline-grid gap-y-8 gap-x-14 grid-cols-2">
              <li v-for="(item, index) in stats" :key="index" class="">
                <h4 class="text-4xl text-blue-600 font-semibold">
                  {{ item.data }}
                </h4>
                <p class="mt-3 font-medium">
                  {{ item.title }}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <div class="my-20" />

    <section class="py-14">
      <div class="max-w-screen-xl mx-auto px-4 text-gray-500 md:px-8">
        <div class="max-w-xl mx-auto space-y-3 sm:text-center">
          <h3 class="text-blue-600 font-semibold">
            Features
          </h3>
          <p class="text-white text-3xl font-semibold sm:text-4xl">
            Do more with less complexity
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus
          </p>
        </div>
        <div class="mt-12">
          <ul class="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
            <li v-for="(item, index) in features" :key="index" class="flex gap-x-4">
              <div class="flex-none w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center" v-html="item.icon" />
              <div>
                <h4 class="text-lg text-white font-semibold">
                  {{ item.title }}
                </h4>
                <p class="mt-3">
                  {{ item.desc }}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <div class="my-20" />

    <section class="max-w-xl mt-12 mx-auto px-4 md:px-8">
      <div class="space-y-3 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-14 w-14 mx-auto text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="{2}" d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
        </svg>
        <h3 class="text-3xl text-white font-bold">
          Subscribe to our newsletter
        </h3>
        <p class="text-gray-300 leading-relaxed">
          Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.
        </p>
      </div>
      <div class="mt-6">
        <form
          class="items-center justify-center sm:flex"
        >
          <input
            type="email"
            placeholder="Enter your email"
            class="text-gray-400 w-full p-3 rounded-md border outline-none focus:border-blue-600"
          >
          <button
            class="w-full mt-3 px-5 py-3 rounded-md text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 duration-150 outline-none shadow-md focus:shadow-none focus:ring-2 ring-offset-2 ring-blue-600 sm:mt-0 sm:ml-3 sm:w-auto"
          >
            Subscribe
          </button>
        </form>
        <p class="mt-3 mx-auto text-center max-w-lg text-[15px] text-gray-300">
          No spam ever, we are care about the protection of your data.
          Read our <a class="text-blue-600 underline" href="javascript:void(0)"> Privacy Policy </a>
        </p>
      </div>
    </section>

    <div class="my-20" />
  </div>
</template>
