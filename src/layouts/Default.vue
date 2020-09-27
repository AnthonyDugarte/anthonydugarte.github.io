<template>
  <div>
    <div class="min-h-screen flex flex-col">
      <header class="mb-2 px-8 shadow-md bg-gray-300">
        <div class="container flex mx-auto justify-between items-center h-20">
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
        </div>
      </header>

      <body class="flex-1 container mx-auto px-5">
        <slot />
      </body>

      <Footer />
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

<script>
import Footer from './Footer'

export default {
  components: { Footer },
}
</script>
