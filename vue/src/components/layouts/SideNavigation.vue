<script setup>
import { store } from '@/store/store.js'
import NavAsideLink from '@/components/links/NavAsideLink.vue'
</script>
<template>
  <aside
    :class="{ hidden: store.isHidden }"
    class="fixed flex z-20 h-full top-0 left-0 pt-16 lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75"
    aria-label="Sidebar"
  >
    <div class="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
      <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
        <div class="flex-1 px-3 bg-white divide-y space-y-1">
          <ul class="space-y-2 pb-2">
            <NavAsideLink
              @click="store.toggleIsHidden()"
              link-text="Dashboard"
              route-path="dashboard"
            ></NavAsideLink>
            <NavAsideLink
              @click="store.toggleIsHidden()"
              link-text="Users"
              route-path="users"
            ></NavAsideLink>
            <NavAsideLink
              @click="store.toggleIsHidden()"
              link-text="Bioskopi"
              route-path="bioskopi"
            ></NavAsideLink>
            <NavAsideLink
              @click="store.toggleIsHidden()"
              link-text="Filmovi"
              route-path="filmovi"
            ></NavAsideLink>
            <NavAsideLink
              @click="store.toggleIsHidden()"
              link-text="Repertoar"
              route-path="repertoar"
            ></NavAsideLink>
            <NavAsideLink
              @click="store.toggleIsHidden()"
              link-text="Bioskop lokacije"
              route-path="lokacije"
            ></NavAsideLink>
          </ul>
        </div>
      </div>
    </div>
  </aside>
  <div class="bg-gray-900 opacity-50 fixed inset-0 z-10" :class="{ hidden: store.isHidden }"></div>
</template>
