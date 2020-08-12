<template>
  <div id="app">
    <header class="p bb flex jc-sb">
      <router-link class="logo" :to="{ name: 'home' }">{{
        site.title
      }}</router-link>
      <navigation></navigation>
    </header>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { mapState } from "vuex";
const Navigation = () =>
  import(/* webpackChunkName: "Navigation" */ "@/components/Navigation.vue");
export default {
  name: "App",
  metaInfo() {
    return {
      titleTemplate: "Vuekit" + " %s"
    };
  },
  components: {
    Navigation
  },
  computed: mapState(["site"]),
  created() {
    this.$store.dispatch("loadSite");
  }
};
</script>

<style lang="scss">
@import "node_modules/reset-css/sass/_reset";
@import "@/assets/css/defaults";
@import "@/assets/css/typography";
@import "@/assets/css/transitions";
</style>
