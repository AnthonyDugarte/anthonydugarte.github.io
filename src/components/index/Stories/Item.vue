<template>
  <li
    class="flex shadow-md mb-5 rounded-lg bg-gray-100 px-5 md:px-2 py-4 flex-col md:flex-row"
  >
    <g-image
      :alt="imgAlt"
      :src="require(`!!assets-loader!@images/${imgSrc}`)"
      class="w-24 md:w-32 xl:w-40 shadow-inner bg-gray-100 rounded-full self-center my-4 md:mx-2"
    />

    <div class="flex-1 flex flex-col md:px-4">
      <h3 class="text-lg md:text-xl xl:text-2xl mb-3 text-right font-bold">
        {{ title }}
      </h3>

      <div class="flex-1 md:text-lg xl:text-xl">
        <slot />
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'StoryItem',
  props: ['title', 'imgSrc', 'imgAlt'],
}
</script>
