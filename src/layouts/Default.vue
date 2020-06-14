<template>
  <div class="container min-h-screen mx-auto px-5 flex flex-col pb-5">
    <header class="flex justify-between items-center mb-2 h-20">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav>
        <g-link class="ml-5" to="/">Home</g-link>
        <g-link class="ml-5" to="/about/">About</g-link>
      </nav>
    </header>
    <slot />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
