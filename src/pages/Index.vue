<template>
  <Layout>
    <div class="flex flex-col border rounded items-center justify-center p-2">
      <g-image
        alt="Example image"
        src="~/favicon.png"
        class="shadow-md rounded-full my-1 w-10/12 sm:w-9/12 md:w-6/12 lg:w-2/6"
      />

      <h1 class="text-3xl md:text-4xl xl:text-5xl my-2">
        <strong>
          Anthony Dugarte
        </strong>
      </h1>

      <h2 class="text-base md:text-lg xl:text-xl my-1">
        Software Dev & Student
      </h2>
    </div>
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
.home-links a {
  margin-right: 1rem;
}
</style>
