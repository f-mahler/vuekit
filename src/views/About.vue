<template>
  <div class="about" v-if="about">
    {{ about.title }}
  </div>
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
