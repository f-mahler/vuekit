<template>
<div id="app">
  <header>
    <router-link :to="{ name: 'home' }">{{ site.title }}</router-link>
    <navigation></navigation>
  </header>
  <router-view></router-view>
</div>
</template>

<script>
import {
  mapState
} from 'vuex'
const Navigation = () => import( /* webpackChunkName: "Navigation" */ '@/components/Navigation.vue')
export default {
  name: 'App',
  metaInfo() {
    return {
      title: "Vuekit",
      titleTemplate: "Vuekit" + ' %s'
    }
  },
  components: {
    Navigation
  },
  computed: mapState(['site']),
  created() {
    this.$store.dispatch('loadSite');
  }
}
</script>

<style lang="scss">
@import 'node_modules/reset-css/sass/_reset';
* {
    box-sizing: border-box;
}
:root {
    --fs: 1rem;
    --lh: calc(1.25 * 1rem);
    --color: rgb(0,0,0);
    --hover: rgb(150,150,150);
}

a,
a:active,
a:hover,
a:visited {
    color: var(--color);
    text-decoration: none;
    &:hover {
        color: var(--hover);
    }
}

body,
html {
    font-size: var(--fs);
    line-height: var(--lh);
}

#app {
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    header {
        padding: var(--lh);
        border-bottom: 1px solid var(--color);
        display: flex;
        justify-content: space-between;
    }
    main {
        width: 100%;
        padding: var(--lh);
        &.grid {
            display: grid;
            grid-gap: var(--lh);
            &.c-2 {
                grid-template-columns: repeat(2,1fr);
            }
            &.c-3 {
                grid-template-columns: repeat(3,1fr);
            }
        }
    }
    img {
        width: 100%;
    }
}
</style>
