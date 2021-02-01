<template>
  <main class="grid grid-cols-1 md:grid-cols-2 gap-4" v-if="project">
    <div class="p-4">
      <h1 class="mb-4 text-4xl">{{ project.title }}</h1>
      <p class="uppercase mb-4 text-xs">
        {{ project.category }} / {{ project.year }}
      </p>
      <div v-html="project.description"></div>
    </div>
    <div v-if="project.images.length > 0" class="p-4">
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
export default {
  name: "project",
  metaInfo() {
    return {
      title: "– " + this.project.title,
    };
  },
  computed: {
    project() {
      return this.$store.state.project;
    },
  },
};
</script>
