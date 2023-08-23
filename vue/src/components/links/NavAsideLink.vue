<template>
  <li>
    <router-link
      :to="routePath"
      class="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group"
    >
      <span class="text-2xl -mt-1 font-semibold"> &rarr; </span>
      <path
        fill-rule="evenodd"
        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
        clip-rule="evenodd"
      ></path>
      <span class="ml-3 flex-1 whitespace-nowrap">{{ linkText }}</span>
    </router-link>
  </li>
</template>

<script setup>
defineProps({
  routePath: String,
  linkText: String
})
</script>
