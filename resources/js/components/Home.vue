<template>
  <div class="flex h-screen bg-gray-100">
    <div class="w-16 bg-gray-200 flex flex-col justify-between items-center">
      <div class="flex flex-col space-y-4 w-full mt-6">
        <a class="flex justify-center items-center">
          <div
            class="
              bg-gray-400
              rounded-full
              w-8
              h-8
              text-center text-xl
              font-semibold
            "
          >
            P
          </div></a
        >

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
      <div class="flex pt-3 items-center space-x-2">
        <div class="font-medium text-gray-700">Conversations</div>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
      <div class="flex flex-col p-2 pt-0 space-y-3">
        <!-- this will automatically grow if the text is too long it will apply the truncate class -->
        <div class="flex flex-row items-center space-x-2">
          <div class="flex-none bg-gray-400 h-6 w-6 rounded-full"></div>
          <div class="flex-grow truncate text-sm font-semibold text-blue-700">
            You
          </div>
          <div class="text-blue-700 font-semibold">7</div>
        </div>
        <!-- ends here -->
        <div class="flex flex-row items-center space-x-2">
          <div class="flex-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="gray"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
          </div>
          <div class="flex-grow truncate text-sm font-semibold text-gray-500">
            Mentions
          </div>
          <div class="text-gray-500 font-semibold">0</div>
        </div>
        <div class="flex flex-row items-center space-x-2">
          <div class="flex-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="gray"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div class="flex-grow truncate text-sm font-semibold text-gray-500">
            Unassigned
          </div>
          <div class="text-gray-500 font-semibold">2,497</div>
        </div>
        <div class="flex flex-row items-center space-x-2">
          <div class="flex-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="gray"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </div>
          <div class="flex-grow truncate text-sm font-semibold text-gray-500">
            All
          </div>
          <div class="text-gray-500 font-semibold">5,171</div>
        </div>
        <div class="flex flex-row items-center space-x-2">
          <div class="flex-none bg-gray-400 h-6 w-6 rounded-full"></div>
          <div class="flex-grow truncate text-sm font-semibold text-gray-500">
            A Spinach Filled Team
          </div>
          <div class="text-gray-500 font-semibold">1</div>
        </div>
        <div class="flex flex-row items-center space-x-2">
          <div class="flex-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="gray"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </div>
          <div class="flex-grow truncate text-sm font-semibold text-gray-500">
            Create view
          </div>
          <!-- <div class="text-gray-500 font-semibold">7</div> -->
        </div>
        <div class="flex flex-row items-center space-x-2">
          <!-- <div class="flex-none bg-gray-400 h-6 w-6 rounded-full"></div> -->
          <div class="flex-grow truncate text-sm font-semibold text-gray-500">
            See 124 more
          </div>
          <div class="text-gray-500 font-semibold">Edit</div>
        </div>
      </div>
      <div class="flex items-center space-x-2">
        <div class="font-medium text-gray-700">Automation</div>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
      <div class="flex items-center space-x-2">
        <div class="font-medium text-gray-700">Your preference</div>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
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
                <strong class="flex-grow">Paulos Tadesse</strong>
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
                <strong class="flex-grow">Paulos Tadesse</strong>
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
                <strong class="flex-grow">Paulos Tadesse</strong>
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
            <strong>Paulos Tadesse</strong>
            <input
              type="text"
              placeholder="Add conversation title"
              class="text-sm outline-none flex-grow border-b border-dashed"
            />
          </div>
          <div class="flex space-x-4">
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
        <div class="relative flex flex-col flex-none h-60 p-4 pt-0">
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
              p-8
              pt-16
              pb-16
              shadow-lg
            "
            placeholder="Type # to add a saved reply or try sending an article"
          >
          </textarea>
          <div
            class="
              absolute
              flex
              justify-evenly
              items-center
              top-0.5
              left-6
              bg-transparent
              p-2
              pl-4
              space-x-6
              text-gray-500
              bg-white
            "
          >
            <button class="border-b-2 border-blue-600 pb-1 text-blue-600">
              <span class="font-semibold">Reply</span>
            </button>
            <button class="border-b-2 border-white pb-1">
              <span class="font-semibold">Note</span>
            </button>
          </div>
          <div
            class="
              absolute
              flex
              justify-around
              items-center
              bottom-4
              left-0
              bg-transparent
              w-full
              mt-32
            "
          >
            <div class="flex space-x-4 shadow-sm bg-white rounded-md p-2">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="gray"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="gray"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="gray"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="gray"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="gray"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="gray"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                  />
                </svg>
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="gray"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="gray"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
                  />
                </svg>
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="gray"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                  />
                </svg>
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="gray"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  />
                </svg>
              </button>
            </div>
            <div class="flex p-4">
              <button
                class="
                  bg-blue-500
                  hover:bg-blue-700
                  text-white
                  font-bold
                  py-1
                  px-4
                  rounded
                "
              >
                Send
              </button>
            </div>
          </div>
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