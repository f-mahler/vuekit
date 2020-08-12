<template>
  <main class="p" v-if="site">
    <h1 class="mb">Welcome!</h1>
    <h2 class="mb">Kirby 3 and Vue.js together.</h2>
    <p>
      Vuekit is a starterkit using Kirby 3 as headless CMS and Vue.js as
      front-end.<br />
      You can read the instructions at
      <a class="td-ul" href="https://github.com/f-mahler/vuekit" target="blank"
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
      titleTemplate: null
    };
  },
  computed: mapState(["site"])
};
</script>
