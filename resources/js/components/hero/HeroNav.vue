<template>
  <div class="p-4">
    <header
      class="
        sm:rounded-none
        rounded-md
        sm:shadow-none
        shadow-xl
        sm:ring-0
        ring-1 ring-gray-100
        sm:flex
        sm:items-center
        sm:justify-between
        md:justify-start
      "
    >
      <div class="flex items-center justify-between p-4">
        <div>
          <img
            class="h-12"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt=""
          />
        </div>
        <div class="sm:hidden">
          <button @click="isOpen = !isOpen" class="block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="gray"
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
      <div
        :class="isOpen ? 'block' : 'hidden'"
        class=" sm:flex sm:space-x-4 text-gray-500"
      >
        <div class="px-4 py-2">
          <a class="hover:text-black" href="#">Product</a>
        </div>
        <div class="px-4 py-2 sm:mt-0 mt-1">
          <a class="hover:text-black" href="#">Features</a>
        </div>
        <div class="px-4 py-2 sm:mt-0 mt-1">
          <a class="hover:text-black" href="#">Marketplace</a>
        </div>
        <div class="px-4 py-2 sm:mt-0 mt-1">
          <a class="hover:text-black" href="#">Company</a>
        </div>
        <div class="px-4 py-2 sm:mt-0 mt-1 text-blue-700  bg-gray-100 sm:bg-white text-center sm:text-base">
          <a class="hover:text-blue-500" href="#">Login</a>
        </div>
      </div>
    </header>
  </div>
  <!-- <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
    <svg
      class="
        hidden
        lg:block
        absolute
        right-0
        inset-y-0
        h-full
        w-48
        text-white
        transform
        translate-x-1/2
      "
      fill="currentColor"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <polygon points="50,0 100,0 50,100 0,100" />
    </svg>
  </div> -->
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style>
</style>