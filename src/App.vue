<template>
  <div id="app">
    <h1>Vuekit</h1>
    <router-view/>
  </div>
</template>

<script>
  export default {
    beforeCreate () {
      this.$store.dispatch('loadContent')
    }
  }
</script>

<style lang="scss">
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
