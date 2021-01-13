<template>
  <div id="app antialiased">
    <header class="p-4 border-b border-black flex justify-between">
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
      titleTemplate: "Vuekit" + " %s",
    };
  },
  components: {
    Navigation,
  },
  computed: mapState(["site"]),
  created() {
    this.$store.dispatch("loadSite");
  },
};
</script>
