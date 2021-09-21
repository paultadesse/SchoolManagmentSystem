<template>
  <header
    class="
      sm:flex
      sm:justify-between
      sm:items-center
      bg-gray-900
      sm:px-4
      sm:py-3
    "
  >
    <div class="flex justify-between items-center px-4 py-3 sm:p-0">
      <div>
        <img
          class="h-8"
          src="/img/workcation-inverted.svg"
          alt="workation logo"
        />
      </div>
      <div class="sm:hidden">
        <button
          @click="isOpen = !isOpen"
          class="
            block
            text-gray-500
            hover:text-white
            focus:text-white
            focus:outline-none
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              v-if="isOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
            <path
              v-if="!isOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
    <!-- links -->
    <nav :class="isOpen ? 'block' : 'hidden'" class="sm:block">
      <div class="px-2 pt-2 pb-4 sm:flex sm:p-0">
        <a href="#" class="px-2 py-1 block text-white hover:bg-gray-800 rounded"
          >List your property</a
        >
        <a
          href="#"
          class="
            px-2
            py-1
            mt-1
            sm:mt-0
            sm:ml-2
            block
            text-white
            hover:bg-gray-800
            rounded
          "
          >Trips</a
        >
        <a
          href="#"
          class="
            px-2
            py-1
            mt-1
            sm:mt-0
            sm:ml-2
            block
            text-white
            hover:bg-gray-800
            rounded
          "
          >Messages</a
        >
        <account-dropdown class="hidden sm:block sm:ml-6" />
      </div>

      <!-- below code for mobile view purpose its the same sa accountdropdown component but ... -->
      <div class="px-4 py-5 border-t border-gray-800 sm:hidden">
        <div class="flex items-center">
          <img
            class="h-8 w-8 object-cover border-2 border-gray-600 rounded-full"
            src="data:image/jpeg;base64,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"
            alt=""
          />
          <span class="text-white font-semibold ml-3">Paulos Tadesse</span>
        </div>

        <div class="mt-4">
          <a href="#" class="block text-gray-400 hover:text-white"
            >Account settings</a
          >
          <a href="#" class="block mt-2 text-gray-400 hover:text-white"
            >Support
          </a>
          <a href="#" class="block mt-2 text-gray-400 hover:text-white"
            >Signout</a
          >
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import AccountDropdown from "./AccountDropdown.vue";
export default {
  components: {
    AccountDropdown,
  },
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style>
</style>