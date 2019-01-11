<template>
  <main class="about">
    {{ about.title }}
    {{ about.content.intro }}
  </main>
</template>

<script>
export default {
  name: 'about',
  computed: {
    about() {
      return this.$store.getters.getPageByUID('about')
    }
  }
}
</script>
