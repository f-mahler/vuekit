<template>
  <main
    class="flex fd-c"
    v-if="projects"
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="busy"
    infinite-scroll-distance="10"
  >
    <router-link
      v-for="project in projects.data"
      :key="project.uid"
      :to="{ name: 'project', params: { id: project.uid } }"
      class="p bb"
      :style="{ 'background-color': project.title }"
    >
      <h1 class="mb">{{ project.title }}</h1>
      <p class="tt-uc mb">
        {{ project.category }} / {{ project.year }} <br /><br /><br />
        <br /><br />
      </p>
    </router-link>
    <div v-if="busy" class="p ta-c">
      Loading more
    </div>
  </main>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "projects",
  metaInfo: {
    title: "– Projects"
  },
  data() {
    return {
      busy: false
    };
  },
  computed: mapState(["projects"]),
  methods: {
    loadMore() {
      this.busy = true;
      let curPage = this.projects.pagination.page;
      if (curPage < this.projects.pagination.pages) {
        this.$store.dispatch("loadProjects", curPage + 1).then(() => {
          this.busy = false;
        });
      } else {
        this.busy = false;
      }
    }
  }
};
</script>
