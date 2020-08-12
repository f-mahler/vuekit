import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueMeta from "vue-meta";
import VueLazyload from "vue-lazyload";
import infiniteScroll from "vue-infinite-scroll";

Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
});
Vue.use(VueLazyload);
Vue.use(infiniteScroll);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
