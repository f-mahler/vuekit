import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import auth from './auth.js'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
    site: [],
    pages: []
  },
  getters: {
    getPagesByType: (state, getters) => (type, collection = state.pages) => {
      let results = []

      if (!collection || !collection.length) {
        return results
      }

      for (let i = 0; i < collection.length; i++) {
        if (collection[i].type === type) {
          results.push(collection[i])
        }

        let targetPages = getters.getPagesByType(type, collection[i].children)
        results = results.concat(targetPages)
      }

      return results
    },
    getPageByUID: (state, getters) => (uid, collection = state.pages) => {
      let i = collection.length
      while (i--) {
        if (collection[i].uid === uid) {
          return collection[i]
        }

        let targetPage = getters.getPageByUID(uid, collection[i].children)
        if (targetPage) {
          return targetPage
        }
      }
    }
  },
  actions: {
    async loadContent ({ commit }) {
      axios.get('/api/data', {
        withCredentials: true,
        auth: {
          username: auth.username,
          password: auth.password
        }
      })
      .then(function (response) {
        commit('SET_SITE', response.data.site)
        commit('SET_PAGES', response.data.pages)
      })
    }
  },
  mutations: {
    SET_SITE (state, site) {
      state.site = site
    },
    SET_PAGES (state, pages) {
      state.pages = pages
    }
  }
})
