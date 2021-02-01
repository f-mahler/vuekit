<template lang="html">
  <nav>
    <router-link
      v-for="link in site.menu"
      :key="link.uid"
      class="pl-4"
      :to="{ name: link.uid }"
      >{{ link.title }}</router-link
    >
  </nav>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState(["site"]),
};
</script>
