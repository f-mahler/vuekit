<template>
<main class="projects grid c-3">
  <router-link :to="{ name: 'project', params: { id: project.uid } }" v-for="project in projects.children" :key="project.uid">
    <img :src="project.files[0].url" />
    <h1>{{ project.title }}</h1>
  </router-link>
</main>
</template>

<script>
export default {
  computed: {
    projects() {
      return this.$store.getters.getPageByUID('projects')
    }
  },
  metaInfo: {
    title: 'Projects',
  }
}
</script>

<style lang="scss" scoped>

</style>
