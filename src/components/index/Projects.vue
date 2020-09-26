<template>
  <div class="carousel shadow-2xl bg-white">
    <div class="relative overflow-hidden">
      <!--Slide 1-->

      <input
        class="carousel-open"
        type="radio"
        id="carousel-1"
        name="carousel"
        aria-hidden="true"
        hidden=""
        checked="checked"
      />

      <div class="carousel-item absolute opacity-0">
        <div
          class="block h-full w-full bg-indigo-500 text-white text-5xl text-center"
        >
          Slide 1
        </div>
      </div>
      <label
        for="carousel-3"
        class="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-indigo-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
        >‹</label
      >
      <label
        for="carousel-2"
        class="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-indigo-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
        >›</label
      >

      <!--Slide 2-->
      <input
        class="carousel-open"
        type="radio"
        id="carousel-2"
        name="carousel"
        aria-hidden="true"
        hidden=""
      />
      <div class="carousel-item absolute opacity-0">
        <div
          class="block h-full w-full bg-orange-500 text-white text-5xl text-center"
        >
          Slide 2
        </div>
      </div>
      <label
        for="carousel-1"
        class="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-indigo-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
        >‹</label
      >
      <label
        for="carousel-3"
        class="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-indigo-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
        >›</label
      >

      <!--Slide 3-->
      <input
        class="carousel-open"
        type="radio"
        id="carousel-3"
        name="carousel"
        aria-hidden="true"
        hidden=""
      />
      <div class="carousel-item absolute opacity-0">
        <div
          class="block h-full w-full bg-green-500 text-white text-5xl text-center"
        >
          Slide 3
        </div>
      </div>
      <label
        for="carousel-2"
        class="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-indigo-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
        >‹</label
      >
      <label
        for="carousel-1"
        class="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-indigo-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
        >›</label
      >

      <!-- Add additional indicators for each slide-->
      <ul
        class="carousel-indicators m-0 p-0 absolute inset-x-0 text-center z-10"
      >
        <li v-for="idx in [1, 2, 3]" v-bind:key="idx" class="inline-block mr-3">
          <label
            :for="`carousel-${idx}`"
            class="carousel-bullet transition-colors ease-in-out duration-100 cursor-pointer block text-4xl text-white hover:text-indigo-700"
            >•</label
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
.carousel-open:checked + .carousel-item {
  @apply static;
  @apply opacity-100;

  height: 75vh;
}

.carousel-item {
  @apply h-0;

  transition: opacity 0.6s ease-out;
}

#carousel-1:checked ~ .control-1,
#carousel-2:checked ~ .control-2,
#carousel-3:checked ~ .control-3 {
  @apply block;
}

.carousel-indicators {
  bottom: 2%;
}

#carousel-1:checked ~ .carousel-indicators li:nth-child(1) .carousel-bullet,
#carousel-2:checked ~ .carousel-indicators li:nth-child(2) .carousel-bullet,
#carousel-3:checked ~ .carousel-indicators li:nth-child(3) .carousel-bullet {
  @apply text-indigo-700;
}
</style>
