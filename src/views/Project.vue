<template>
<main class="project grid c-2">
  <h1>{{ project.title }}</h1>
  <img :src="project.files[0].url" />
</main>
</template>

<script>
export default {
  data() {
    return {
      projectTitle: ''
    }
  },
  mounted() {
    this.projectTitle = this.project.title
  },
  computed: {
    project() {
      return this.$store.getters.getPageByUID(this.$route.params.id)
    }
  },
  metaInfo() {
    return {
      title: this.projectTitle,
      meta: [{
        description: 'project description'
      }]
    }
  }
}
</script>

<style lang="scss">
</style>
