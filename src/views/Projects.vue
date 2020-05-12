<template>
<main class="projects grid c-3">
  <router-link :to="{ name: 'project', params: { id: project.uid } }" v-for="project in projects" :key="project.uid">
    <img v-lazy="project.images[0].url" :data-srcset="project.images[0].srcset" />
    <h1>{{ project.title }}</h1>
  </router-link>
</main>
</template>

<script>
import {
  mapState
} from 'vuex'
export default {
  name: 'projects',
  metaInfo: {
    title: '– Projects',
  },
  computed: mapState(['projects']),
}
</script>

<style lang="scss" scoped>

</style>
