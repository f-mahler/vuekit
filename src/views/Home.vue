<template>
  <main class="p-4" v-if="site">
    <h1 class="mb-4">Hello World</h1>
    <p>
      Vuekit is a starterkit using Kirby 3 as headless CMS and Vue.js as
      front-end with Tailwind CSS.<br />
      You can read the instructions at
      <a
        class="underline"
        href="https://github.com/f-mahler/vuekit"
        target="blank"
        >Github</a
      >.
    </p>
  </main>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "home",
  metaInfo() {
    return {
      title: this.site.title,
      titleTemplate: null,
    };
  },
  computed: mapState(["site"]),
};
</script>
