<template>
  <div class="home" v-if="home">
    {{ home.title }}
  </div>
</template>

<script>
export default {
  computed: {
    home() {
      return this.$store.getters.getPageByUID('home')
    }
  }
  // data () {
  //   return {
  //     post: null,
  //     error: null
  //   }
  // },
  // beforeRouteEnter (to, from, next) {
  //   this.post = this.$store.getters.getPageByUID('home')
  // },
  // beforeRouteUpdate (to, from, next) {
  //   this.post = null
  //   this.post = this.$store.getters.getPageByUID('home')
  // },
  // methods: {
  // }
}
</script>
