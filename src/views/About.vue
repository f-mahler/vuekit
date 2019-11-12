<template>
<main class="about grid c-2">
  <div>
    {{ about.title }}
  </div>
  <div v-html="about.markdown.text_md"></div>
</main>
</template>

<script>
export default {
  name: 'about',
  computed: {
    about() {
      return this.$store.getters.getPageByUID('about')
    }
  },
  metaInfo() {
    return {
      title: this.about.title,
      meta: [{
        description: this.about.content.intro
      }]
    }

  }
}
</script>
