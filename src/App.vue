<template>
  <div id="app" v-if="isLoaded">
    <header>
      <h1>{{ site.title }}</h1>
      <navigation></navigation>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
  import Navigation from './components/Navigation.vue'

  export default {
    components: {
      Navigation
    },
    data() {
      return {
        isLoaded:false
      }
    },
    beforeCreate () {
      this.$store.dispatch('loadContent').then(() => {
        this.isLoaded = true
      })
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

a, a:hover, a:visited, a:active {
  color:black;
  text-decoration: none;
  &:hover {
    color:#AAA;
  }
}

body, html {
  font-size:1vmin;
}

#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size:2.5rem;
  header {
    padding:1rem;
    background:#EEE;
    display:flex;
    justify-content: space-between;
  }
  main {
    padding:1rem;
  }
  ul, li {
    list-style: none;
    margin:0;
    padding:0;
  }
}
</style>
