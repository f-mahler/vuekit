<template>
  <div class="home" v-if="home">
    {{ home.title }}
  </div>
</template>

<script>
export default {
  name: 'home',
  computed: {
    home() {
      return this.$store.getters.getPageByUID('home')
    }
  }
}
</script>
