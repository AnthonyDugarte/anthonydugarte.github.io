<template>
  <Layout>
    <Intro />
    <Stories />
  </Layout>
</template>

<script>
import Intro from '../components/index/Intro'
import Stories from '../components/index/Stories'

export default {
  metaInfo: {
    title: 'Cover',
  },
  components: { Intro, Stories },
}
</script>
