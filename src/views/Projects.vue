<template>
  <div class="projects" v-if="projects">
    <li v-for="project in projects.children" :key="project.uid">
      {{ project.title }}
      <img :src="project.files[0].url"/>
    </li>
  </div>
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
