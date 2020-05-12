import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const auth = {
  username: process.env.VUE_APP_USERNAME,
  password: process.env.VUE_APP_PASSWORD
}

export default new Vuex.Store({
  state: {
    site: [],
    projects: [],
    about: [],
  },
  getters: {
    getProjectByUID: (state) => (uid, collection = state.projects) => {
      let i = collection.length
      while (i--) {
        if (collection[i].uid === uid) {
          return collection[i]
        }
      }
    }
  },
  actions: {
    async loadSite ({ commit }) {
      await axios.post('/api/query', {
        "query": "site",
        "select": {
          "title": true,
          "url": true,
        }
      }, { auth }
      ).then(function(response) {
        commit('SET_SITE', response.data.result)
      })
    },
    async loadProjects ({ commit }) {
      await axios.post('/api/query', {
        "query": "page('projects').children.listed",
        "select": {
          "title": true,
          "uid": true,
          "year": true,
          "category": true,
          "description": "page.description.kirbytext",
          "images": {
            "query": "page.images",
            "select": {
              "url": "file.url",
              "thumb": "file.resize(200).url"
            }
          }
        }
      }, { auth }
      ).then(function(response) {
        commit('SET_PROJECTS', response.data.result.data)
      })
    },
    async loadAbout ({ commit }) {
      await axios.post('/api/query', {
        "query": "page('about')",
        "select": {
          "title": true,
          "uid": true,
          "text": "page.text.kirbytext"
        }
      }, { auth }
      ).then(function(response) {
        commit('SET_ABOUT', response.data.result)
      })
    }
  },
  mutations: {
    SET_SITE (state, site) {
      state.site = site
    },
    SET_PROJECTS (state, pages) {
      state.projects = pages
    },
    SET_ABOUT (state, pages) {
      state.about = pages
    }
  }
})
