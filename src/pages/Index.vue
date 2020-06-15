<template>
  <Layout>
    <div
      class="personal flex flex-col border rounded items-center justify-center p-2"
    >
      <g-image
        alt="Example image"
        src="~/assets/img/avatar.svg"
        class="my-1 w-10/12 sm:w-9/12 md:w-6/12 lg:w-2/6"
      />

      <h1 class="my-2 text-3xl md:text-4xl xl:text-6xl">
        <strong>
          Anthony Dugarte
        </strong>
      </h1>

      <h2 class="my-1 text-xl md:text-2xl xl:text-3xl">
        Software Dev & Student
      </h2>
    </div>

    <ul>
      <li
        class="flex shadow-md mb-5 rounded-lg bg-gray-100 px-5 md:px-2 py-4 flex-col md:flex-row"
      >
        <g-image
          alt="Universidad de los Andes"
          src="~/assets/img/ula.png"
          class="w-24 md:w-32 xl:w-40 shadow-inner bg-gray-100 rounded-full self-center my-4 md:mx-2"
        />

        <div class="flex-1 flex flex-col md:px-4">
          <h3
            class="text-lg md:text-xl xl:text-2xl mb-3 text-right md:text-right"
          >
            <strong>Systems Engineering</strong>
          </h3>

          <span class="flex-1 md:text-lg xl:text-xl">
            I'm a second year Systems Engineering student at the Univerisdad de
            los Andes, in Venezuela.
          </span>
        </div>
      </li>

      <li
        class="flex shadow-md mb-5 rounded-lg bg-gray-100 px-5 md:px-2 py-4 flex-col md:flex-row"
      >
        <g-image
          alt="ICPC"
          src="~/assets/img/icpc.png"
          class="w-24 md:w-32 xl:w-40 shadow-inner bg-gray-100 rounded-full self-center my-4 md:mx-2"
        />
        <div class="flex-1 flex flex-col md:px-4">
          <h3 class="text-lg md:text-xl xl:text-2xl mb-3 text-right">
            <strong>Competitive Programming</strong>
          </h3>

          <span class="flex-1 md:text-lg xl:text-xl">
            I've participated on Competitive Programming contests at my
            university.
          </span>
        </div>
      </li>

      <li
        class="flex shadow-md mb-5 rounded-lg bg-gray-100 px-5 md:px-2 py-4 flex-col md:flex-row"
      >
        <g-image
          alt="Pacman"
          src="~/assets/img/pacman.png"
          class="w-24 md:w-32 xl:w-40 shadow-inner bg-gray-100 rounded-full self-center my-4 md:mx-2"
        />

        <div class="flex-1 flex flex-col md:px-4">
          <h3
            class="text-lg md:text-xl xl:text-2xl mb-3 text-right md:text-right"
          >
            <strong>Developing games for fun</strong>
          </h3>

          <span class="flex-1 md:text-lg xl:text-xl">
            my most beloved one has been:
            <a href="https://github.com/AnthonyDugarte/PacMan" target="_blank"
              ><strong>Pacman</strong></a
            >, I coded every single line of it!
          </span>
        </div>
      </li>

      <li
        class="flex shadow-md rounded-lg bg-gray-100 px-5 md:px-2 py-4 flex-col md:flex-row"
      >
        <g-image
          alt="Example image"
          src="~/favicon.png"
          class="w-24 md:w-32 xl:w-40 shadow-inner bg-gray-100 rounded-full self-center my-4 md:mx-2"
        />

        <div class="flex-1 flex flex-col md:px-4">
          <h3 class="text-lg md:text-xl xl:text-2xl mb-3 text-right">
            <strong>What do I do?</strong>
          </h3>

          <span class="flex-1 md:text-lg xl:text-xl">
            I do web and mobile apps, I have been working through all the Stack
            for 2 years already.
          </span>
        </div>
      </li>
    </ul>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Cover',
  },
}
</script>

<style>
.personal {
  min-height: calc(100vh - 5.5rem);
}
</style>
