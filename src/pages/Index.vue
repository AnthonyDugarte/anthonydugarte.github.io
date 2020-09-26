<template>
  <Layout>
    <Intro />

    <Stories />

    <!-- <Projects /> -->

    <div class="flex flex-col">
      <ul class="h-full bg-blue-100 overflow-x-scroll">
        <li class="mx-5 my-2">Item 1</li>
        <li class="mx-5 my-2">Item 2</li>
        <li class="mx-5 my-2">Item 3</li>
        <li class="mx-5 my-2">Item 4</li>
      </ul>

      <div class="flex flex-1 flex-col bg-indigo-600">
        <div class="flex-1 bg-gray-400">
          <!--  -->
        </div>

        <div>
          <span>Hello boy!</span>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Intro from '../components/index/Intro'
import Stories from '../components/index/Stories/Index'
import Projects from '../components/index/Projects'

export default {
  metaInfo: {
    title: 'Cover',
  },
  components: { Intro, Stories, Projects },
}
</script>
