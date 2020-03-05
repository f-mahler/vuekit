<template>
<main class="home">
  Homepage
</main>
</template>

<script>
import {
  mapState
} from 'vuex'
export default {
  name: 'home',
  metaInfo() {
    return {
      title: this.site.title,
      titleTemplate: null
    }
  },
  computed: mapState(['site']),
}
</script>
