<template>
<main class="project grid c-2">
  <div>
    <h1>{{ project.title }}</h1>
    <p>{{ project.year }}</p>
    <p>{{ project.category }}</p>
    <div v-html="project.description"></div>
  </div>
  <div>
    <img v-for="(file, index) in project.images" :key="index" v-lazy="file.url" :src="file.thumb" />
  </div>
</main>
</template>

<script>
export default {
  name: 'project',
  metaInfo() {
    return {
      title: '– ' + this.project.title,
    }
  },
  computed: {
    project() {
      return this.$store.getters.getProjectByUID(this.$route.params.id)
    }
  }
}
</script>

<style lang="scss">
</style>
