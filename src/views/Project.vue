<template>
  <main class="grid c-2 cm-1" v-if="project">
    <div class="p">
      <h1 class="mb">{{ project.title }}</h1>
      <p class="tt-uc mb">{{ project.category }} / {{ project.year }}</p>
      <div v-html="project.description"></div>
    </div>
    <div v-if="project.images.length > 0" class="p">
      <img
        v-for="(file, index) in project.images"
        :key="index"
        v-lazy="file.url"
        :src="file.thumb"
      />
    </div>
  </main>
</template>

<script>
// import { mapState } from "vuex";
export default {
  name: "project",
  metaInfo() {
    return {
      title: "– " + this.project.title
    };
  },
  computed: {
    project() {
      return this.$store.state.project;
    }
  }
};
</script>

<style lang="scss"></style>
