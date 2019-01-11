<template>
  <main class="projects">
    <li ref="project" v-for="project in projects.children" :key="project.uid">
      <h1>{{ project.title }}</h1>
      <img :src="project.files[0].url"/>
    </li>
  </main>
</template>

<script>
export default {
  computed: {
    projects() {
      return this.$store.getters.getPageByUID('projects')
    }
  }
}
</script>

<style lang="scss">
</style>
