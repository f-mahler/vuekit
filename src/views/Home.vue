<template>
<main class="home">
  {{ home.title }}
</main>
</template>

<script>
export default {
  computed: {
    home() {
      return this.$store.getters.getPageByUID('home')
    },
    site() {
      return this.$store.state.site
    }
  },
  metaInfo() {
    return {
      title: this.site.title,
      titleTemplate: null
    }
  }
}
</script>
