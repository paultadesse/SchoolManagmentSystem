<template>
  <div class="flex h-screen bg-gray-100">
    <div class="w-16 bg-gray-200 flex flex-col justify-between items-center">
      <div class="flex flex-col space-y-4 w-full mt-6">
        <a class="flex justify-center items-center"> <div class="bg-gray-400 rounded-full w-8 h-8 text-center text-xl font-semibold">P</div></a>

        <a
          class="
            relative
            w-16
            h-16
            flex
            justify-center
            items-center
            bg-gray-100
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="blue"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
            />
          </svg>
          <div
            class="
              absolute
              top-0
              right-0
              mr-3
              mt-3
              bg-red-500
              text-white
              w-4
              h-4
              text-xs
              rounded-full
              text-center
            "
          >
            7
          </div>
        </a>
        <a class="relative w-16 h-16 flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-7 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
        </a>
        <a class="relative w-16 h-16 flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-7 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </a>
        <a class="relative w-16 h-16 flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-7 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        </a>
        <a class="relative w-16 h-16 flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-7 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
            />
          </svg>
        </a>
        <a class="relative w-16 h-16 flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-7 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
            />
          </svg>
        </a>
      </div>
      <div class="flex flex-col space-y-2 mb-6">
        <a> <div class="bg-gray-400 rounded-full w-8 h-8"></div> </a
        ><a> <div class="bg-gray-400 rounded-full w-8 h-8"></div> </a
        ><a> <div class="bg-gray-400 rounded-full w-8 h-8"></div> </a>
        <a> <div class="bg-gray-400 rounded-full w-8 h-8"></div> </a>
      </div>
    </div>
    <div class="flex-none w-64 bg-gray-100 p-4 space-y-4">
      <div class="flex flex-row items-center">
        <h1 class="flex-auto font-semibold text-3xl">Inbox</h1>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 flex-none"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
      <!-- below the inbox -->
      <div class="bg-gray-100 shadow-lg h-64"></div>
      <div class="bg-gray-100 shadow-lg h-64"></div>
    </div>
    <div class="flex-auto flex bg-white border rounded-tl-xl shadow-2xl">
      <div class="flex flex-col w-1/5">
        <div class="flex flex-none items-center p-4 h-16 space-x-4">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <h1 class="font-semibold text-3xl">You</h1>
        </div>
        <div class="overflow-y-auto">
          <a class="block border-b hover:bg-blue-50">
            <div class="border-l-4 border-white p-4 space-y-8">
              <div class="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 flex-none"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <strong class="flex-grow">Nicholas Tesla</strong>
                <span class="text-gray-400">5d</span>
              </div>
              <div class="flex flex-row items-center space-x-2">
                <div class="flex-none bg-gray-400 h-6 w-6 rounded-full"></div>
                <div class="flex-grow truncate text-sm text-gray-400">
                  asdfsdfdsfsdflskjdkasdksadjkjasdfsdfsdfsdfdssdfsdfsdfsdsdhjkashdk
                </div>
              </div>
            </div>
          </a>
          <a class="block border-b">
            <div class="border-l-4 border-blue-700 bg-blue-50 p-4 space-y-8">
              <div class="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 flex-none"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <strong class="flex-grow">Nicholas Tesla</strong>
                <span class="text-gray-400">5d</span>
              </div>
              <div class="flex flex-row items-center space-x-2">
                <div class="flex-none bg-gray-400 h-6 w-6 rounded-full"></div>
                <div class="flex-grow truncate text-sm text-gray-400">
                  asdfsdfdsfsdflskjdkasdksadjkjasdfsdfsdfsdfdssdfsdfsdfsdsdhjkashdk
                </div>
              </div>
            </div>
          </a>
          <a class="block border-b hover:bg-blue-50">
            <div class="border-l-4 border-white p-4 space-y-8">
              <div class="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 flex-none"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <strong class="flex-grow">Nicholas Tesla</strong>
                <span class="text-gray-400">5d</span>
              </div>
              <div class="flex flex-row items-center space-x-2">
                <div class="flex-none bg-gray-400 h-6 w-6 rounded-full"></div>
                <div class="flex-grow truncate text-sm text-gray-400">
                  asdfsdfdsfsdflskjdkasdksadjkjasdfsdfsdfsdfdssdfsdfsdfsdsdhjkashdk
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <!-- chat area -->
      <div class="w-3/5 border-r-2 border-l-2 flex flex-col">
        <div
          class="
            flex-none
            h-16
            border-b
            flex flex-row
            justify-between
            items-center
            p-4
          "
        >
          <div class="flex flex-col space-y-1">
            <strong>Nicola Tesla</strong>
            <input
              type="text"
              placeholder="Add conversation title"
              class="text-sm outline-none flex-grow border-b border-dashed"
            />
          </div>
          <div class="flex space-x-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
        </div>
        <div
          class="flex-auto overflow-y-auto h-16 p-5"
          style="
            background-image: url(https://static.intercomassets.com/ember/assets/images/messenger-backgrounds/background-1-99a36524645be823aabcd0e673cb47f8.png);
          "
        >
          <div class="flex flex-row space-x-2 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 flex-none"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div class="flex flex-col">
              <div class="bg-blue-100 rounded p-5">
                First text Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Numquam tempore nemo excepturi nostrum, quas consequuntur,
                autem corporis iure temporibus, exercitationem libero
                recusandae! Non ipsam quam asperiores a consequuntur rerum
                accusamus!
              </div>
              <div class="text-gray-400"><small>5hr ago</small></div>
            </div>
          </div>

          <div class="flex flex-row-reverse p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 flex-none"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div class="bg-gray-100 rounded p-5 mr-2">
              Second text Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Voluptatibus non fugit distinctio cum repudiandae delectus
              perspiciatis, veritatis possimus iure quo vero, quidem illum harum
              at, vel commodi ex voluptate animi. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Nesciunt repellendus assumenda ipsam
              ea odio accusantium illo iste perferendis provident.
            </div>
          </div>
        </div>
        <div class="flex-none h-48 p-4 pt-0">
          <textarea
            name=""
            id=""
            class="
              w-full
              h-full
              outline-none
              border
              hover:border-blue-700
              focus:border-blue-700
              rounded-md
              p-4
              shadow-lg
            "
          >
            Hi</textarea
          >
        </div>
        <div></div>
        <div></div>
      </div>
      <div class="w-1/5 bg-gray-200 overflow-y-auto flex flex-col">
        <div class="h-64 flex-none border-b border-gray-400"></div>
        <div class="flex flex-col space-y-4 p-4">
          <div
            class="
              flex-none
              bg-white
              h-96
              rounded-md
              flex
              justify-center
              items-center
            "
          >
            Card
          </div>
          <div class="flex-none bg-white h-64 rounded-md">Card</div>
          <div class="flex-none bg-white h-64 rounded-md">Card</div>
          <div class="flex-none bg-white h-64 rounded-md">Card</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>