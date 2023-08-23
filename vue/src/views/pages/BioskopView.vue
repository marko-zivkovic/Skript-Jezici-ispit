<template>
  <div
      class="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5"
  >
    <div class="mb-1 w-full">
      <div class="mb-4">
        <PageHeader></PageHeader>

        <h1 class="text-xl sm:text-2xl font-semibold text-gray-900">Svi bioskopi</h1>
      </div>
      <div class="flex flex-col sm:flex-row sm:justify-between sm:mr-4">
        <div
            class="flex flex-col w-fit flex-wrap sm:flex-row gap-2 items-center sm:divide-x sm:divide-gray-100 mb-3 sm:mb-0"
        >
          <div class="relative lg:w-64 xl:w-96">
            <input
                type="text"
                v-model="search.name"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="Search name"
            />
          </div>
          <div class="relative lg:w-64 xl:w-96">
            <input
                type="text"
                v-model="search.grad"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="Search grad"
            />
          </div>
        </div>
        <div
            class="flex w-full sm:w-fit whitespace-nowrap items-center space-x-2 sm:space-x-3 ml-auto"
        >
          <button
              type="button"
              @click="create()"
              class="w-fit text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium inline-flex items-center justify-center rounded-lg text-sm px-3 py-2 text-center sm:w-auto"
          >
            <svg
                class="-ml-1 mr-2 h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  fill-rule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clip-rule="evenodd"
              ></path>
            </svg>
            Kreiraj
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="flex flex-col">
    <div class="overflow-x-auto">
      <div class="align-middle inline-block min-w-full">
        <div class="shadow overflow-hidden">
          <table class="table-fixed min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-100">
            <tr>
              <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                Naziv
              </th>
              <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                Grad
              </th>
              <th scope="col" class="p-4"></th>
            </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
            <tr class="hover:bg-gray-100" v-for="item in displayed" :key="item.id">
              <td class="p-4 whitespace-nowrap text-base font-medium text-gray-900">
                {{ item.name }}
              </td>
              <td class="p-4 whitespace-nowrap text-base font-medium text-gray-900">
                {{ item.grad }}
              </td>
              <td class="p-4 whitespace-nowrap space-x-2">
                <button
                    @click="edit(item)"
                    type="button"
                    class="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center"
                >
                  <svg
                      class="mr-2 h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                        d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
                    ></path>
                    <path
                        fill-rule="evenodd"
                        d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                        clip-rule="evenodd"
                    ></path>
                  </svg>
                  Izmeni
                </button>
                <button
                    @click="deleteItem(item.id)"
                    type="button"
                    class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center"
                >
                  <svg
                      class="mr-2 h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                        fill-rule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clip-rule="evenodd"
                    ></path>
                  </svg>
                  Izbrisi
                </button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <div
      class="bg-white sticky sm:flex items-center w-full sm:justify-between bottom-0 right-0 border-t border-gray-200 p-4"
  >
    <div class="flex items-center mb-4 sm:mb-0">
      <a
          href="#"
          class="text-gray-500 hover:text-gray-900 cursor-pointer p-1 hover:bg-gray-100 rounded inline-flex justify-center"
      >
        <svg
            class="w-7 h-7"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
        >
          <path
              fill-rule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clip-rule="evenodd"
          ></path>
        </svg>
      </a>
      <a
          href="#"
          class="text-gray-500 hover:text-gray-900 cursor-pointer p-1 hover:bg-gray-100 rounded inline-flex justify-center mr-2"
      >
        <svg
            class="w-7 h-7"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
        >
          <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
          ></path>
        </svg>
      </a>
      <span class="text-sm font-normal text-gray-500"
      >Showing
        <span class="text-gray-900 font-semibold">{{ startIndex + 1 }}-{{ endIndex + 1 }}</span> of
        <span class="text-gray-900 font-semibold">{{ items.length }}</span></span
      >
    </div>
    <div class="flex items-center space-x-3">
      <a
          @click="prevPage"
          :disabled="currentPage === 0"
          class="flex-1 text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium inline-flex items-center justify-center rounded-lg text-sm px-3 py-2 text-center"
      >
        <svg
            class="-ml-1 mr-1 h-5 w-5"
            fill=" currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
        >
          <path
              fill-rule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clip-rule="evenodd"
          ></path>
        </svg>
        Previous
      </a>
      <a
          @click="nextPage"
          :disabled="currentPage === pageCount - 1"
          class="flex-1 text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium inline-flex items-center justify-center rounded-lg text-sm px-3 py-2 text-center"
      >
        Next
        <svg
            class="-mr-1 ml-1 h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
        >
          <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
          ></path>
        </svg>
      </a>
    </div>
  </div>
  <CinemaModal></CinemaModal>
</template>
<script setup>
import { store } from '@/store/bioskop.js'
import { computed, onMounted, ref, watch } from 'vue'
import axios from 'axios'
import PageHeader from '@/components/layouts/PageHeader.vue'
import CinemaModal from "@/components/modals/CinemaModal.vue";

const items = ref([])

const search = ref({
  name: '',
  grad: '',
})

const itemsPerPage = 5
const currentPage = ref(0)
const pageCount = computed(() => Math.ceil(filtered.value.length / itemsPerPage))

// Calculate the start and end indices for the current page
const startIndex = computed(() => currentPage.value * itemsPerPage)
const endIndex = computed(() =>
    Math.min(startIndex.value + itemsPerPage - 1, filtered.value.length - 1)
)

const displayed = computed(() =>
    filtered.value.slice(startIndex.value, endIndex.value + 1)
)

watch(search, () => {
  currentPage.value = 0
})

const prevPage = () => {
  if (currentPage.value > 0) {
    currentPage.value--
  }
}

const nextPage = () => {
  if (currentPage.value < pageCount.value - 1) {
    currentPage.value++
  }
}

const filtered = computed(() => {
  return items.value.filter((item) => {
    return (
        item.name.includes(search.value.name) && item.grad.includes(search.value.grad)
    )
  })
})

function create() {
  store.clearSelectedBioskop()
  store.modalType = 'Create'
  store.toggleModal()
}

function edit(item) {
  store.setDataSelectedBioskop(item)
  store.modalType = 'Edit'
  store.toggleModal()
}

onMounted(() => {
  axios.get('http://localhost:3000/api/bioskop').then((response) => {
    items.value = response.data
  })
})
</script>
