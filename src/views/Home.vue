<template>
  <main class="home" v-if="home">
    {{ home.title }}
  </main>
</template>

<script>
export default {
  computed: {
    home() {
      return this.$store.getters.getPageByUID('home')
    }
  }
}
</script>
