<template>
  <main class="p-4 grid grid-cols-1 gap-4 md:grid-cols-2" v-if="about">
    <div>
      <h1>{{ about.title }}</h1>
    </div>
    <div v-html="about.text"></div>
  </main>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "about",
  metaInfo() {
    return {
      title: "– About",
      meta: [
        {
          description: this.about.text,
        },
      ],
    };
  },
  computed: mapState(["about"]),
};
</script>
