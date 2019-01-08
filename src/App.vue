<template>
  <div id="app" v-if="site">
    <h1>{{ site.title }}</h1>
    <router-link :to="{ name: 'home' }">Home</router-link>
    <router-link :to="{ name: 'projects' }">Projects</router-link>
    <router-link :to="{ name: 'about' }">About</router-link>
    <router-view/>
  </div>
</template>

<script>
  export default {
    beforeCreate () {
      this.$store.dispatch('loadContent', { self: this })
    },
    computed: {
      site() {
        return this.$store.state.site
      }
    }
  }
</script>

<style lang="scss">
@import 'node_modules/reset-css/sass/_reset';

#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
