<template>
  <div
    :class="{ hidden: !store.modalActive }"
    class="overflow-x-hidden overflow-y-auto fixed top-4 left-0 right-0 md:inset-0 z-50 justify-center items-center h-modal sm:h-full"
  >
    <div class="relative w-full max-w-2xl px-4 h-full md:h-auto">
      <div class="bg-white rounded-lg shadow relative">
        <div class="flex items-start justify-between p-5 border-b rounded-t">
          <h3 class="text-xl font-semibold">{{ store.modalType }} bioskop</h3>
          <button
            type="button"
            @click="store.toggleModal()"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            data-modal-toggle="user-modal"
          >
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div class="p-6 space-y-6">
          <div class="grid grid-cols-6 gap-6">
            <div class="col-span-6 sm:col-span-3">
              <label class="text-sm font-medium text-gray-900 block mb-2">Naziv</label>
              <input
                type="text"
                v-model="store.selectedBioskop.name"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="name"
                required
              />
            </div>
            <div class="col-span-6 sm:col-span-3">
              <label class="text-sm font-medium text-gray-900 block mb-2">Grad</label>
              <input
                type="text"
                v-model="store.selectedBioskop.grad"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="grad"
                required
              />
            </div>
          </div>
        </div>

        <div class="items-center p-6 border-t border-gray-200 rounded-b">
          <button
            @click="saveUserData"
            class="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            type="submit"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'
import {store} from "@/store/bioskop";

function saveUserData() {
  let bioskop = store.selectedBioskop

  let path = null
  if (store.modalType === 'Create') {
    path = 'http://localhost:3000/api/korisnici/new'
  } else if (store.modalType === 'Edit') {
    path = 'http://localhost:3000/api/korisnici/' + bioskop.id
  }
  if (path) {
    axios
        .post(path, bioskop)
        .then((response) => {
          console.log(response)
        })
        .catch((e) => {
          console.log(e)
        })
  }
}
</script>
