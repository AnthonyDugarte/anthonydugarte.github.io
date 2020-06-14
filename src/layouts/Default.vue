<template>
  <div class="bg-gray-100">
    <div class="container min-h-screen mx-auto flex flex-col pb-5 bg-gray-300">
      <header
        class="flex justify-between items-center mb-2 px-8 h-20 shadow-md"
      >
        <strong>
          <g-link to="/" class="text-lg md:text-xl xl:text-2xl">
            {{ $static.metadata.siteName }}
          </g-link>
        </strong>

        <nav>
          <g-link class="text-lg md:text-xl xl:text-2xl ml-5" to="/">
            Home
          </g-link>

          <g-link class="text-lg md:text-xl xl:text-2xl ml-5" to="/about/">
            About
          </g-link>
        </nav>
      </header>

      <div class="mx-5">
        <slot />
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
