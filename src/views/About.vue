<template>
<main class="about grid c-2">
  <div>
    {{ about.title }}
  </div>
  <div v-html="about.text"></div>
</main>
</template>

<script>
import {
  mapState
} from 'vuex'
export default {
  name: 'about',
  metaInfo() {
    return {
      title: '– About',
      meta: [{
        description: this.about.text
      }]
    }
  },
  created() {
    this.$store.dispatch('loadAbout');
  },
  computed: mapState(['about']),
}
</script>
