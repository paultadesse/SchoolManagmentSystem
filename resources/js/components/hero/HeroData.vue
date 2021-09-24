<template>
  <div class="h-screen">
    <div class="">
      <div class="flex flex-col">
        <!-- <div><hero-nav class="bg-blue-700" /></div> -->
        <div class="flex h-screen">
          <div class="w-1/4">
            <div
              class="flex flex-col space-y-6 pt-7 justify-center items-center"
            >
              <div class="flex space-x-2">
                <div class="h-6 w-6 bg-gray-300 rounded-full"></div>
                <div class="flex flex-col">
                  <div>Paul Tad</div>
                  <div class="flex items-center space-x-4">
                    <div class="h-4 w-4 bg-gray-300 rounded-full"></div>
                    <small>paultadesse</small>
                  </div>
                </div>
              </div>
              <div class="space-y-4">
                <button
                  class="block bg-blue-700 py-1 text-white rounded-md px-16"
                >
                  New Project
                </button>
                <button
                  class="
                    block
                    bg-white
                    ring-1 ring-gray-300
                    py-1
                    text-black
                    rounded-md
                    px-16
                  "
                >
                  Invite Team
                </button>
              </div>
            </div>
          </div>
          <!-- middle--------------------------------- -->
          <div class="border-r-2 border-l-2 w-full">
            <div class="flex justify-between p-7">
              <div>Projects</div>
              <div>
                <button class="ring-1 block py-1 px-3 rounded-md ring-gray-400">
                  Sort
                </button>
              </div>
            </div>

            <div v-for="i in 5" :key="i" :class="i == 1 ? 'border-t-2 border-b-2' : 'border-b-2'">
                <div class="flex justify-between p-7 pb-2">
                    <div>left</div>
                    <div>right</div>
                </div>
                <div class="flex justify-between p-7 pt-0">
                    <div>left</div>
                    <div>right</div>
                </div>
            </div>
          </div>
          <div class="w-1/3 bg-gray-100">right</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeroNav from "./HeroNav.vue";
export default {
  components: {
    HeroNav,
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>