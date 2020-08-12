import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const auth = {
  username: process.env.VUE_APP_USERNAME,
  password: process.env.VUE_APP_PASSWORD
};

export default new Vuex.Store({
  state: {
    site: [],
    project: [],
    projects: [],
    about: []
  },
  getters: {
    getProjectByUID: state => (uid, collection = state.projects) => {
      let i = collection.length;
      while (i--) {
        if (collection[i].uid === uid) {
          return collection[i];
        }
      }
    }
  },
  actions: {
    async loadSite({ commit }) {
      await axios
        .post(
          "/api/query",
          {
            query: "site",
            select: {
              title: true,
              url: true,
              menu: {
                query: "site.children.listed",
                select: {
                  title: true,
                  uid: true
                }
              }
            }
          },
          { auth }
        )
        .then(function(response) {
          commit("SET_SITE", response.data.result);
        });
    },
    async loadProjects({ commit }, payload) {
      await axios
        .post(
          "/api/query",
          {
            query: "page('projects')",
            select: {
              items: {
                query: "page.children.listed",
                select: {
                  title: true,
                  uid: true,
                  year: true,
                  category: "page.category.value"
                },
                pagination: {
                  page: payload,
                  limit: 3
                }
              }
            }
          },
          { auth }
        )
        .then(function(response) {
          commit("SET_PROJECTS", response.data.result.items);
        });
    },
    async loadProject({ commit }, payload) {
      await axios
        .post(
          "/api/query",
          {
            query: `page('projects').children.find('${payload}')`,
            select: {
              title: true,
              uid: true,
              year: true,
              category: "page.category.value",
              description: "page.description.kirbytext",
              images: {
                query: "page.images",
                select: {
                  url: "file.url",
                  thumb: "file.resize(200).url"
                }
              }
            }
          },
          { auth }
        )
        .then(function(response) {
          commit("SET_PROJECT", response.data.result);
        });
    },
    async loadAbout({ commit }) {
      await axios
        .post(
          "/api/query",
          {
            query: "page('about')",
            select: {
              title: true,
              uid: true,
              text: "page.text.kirbytext"
            }
          },
          { auth }
        )
        .then(function(response) {
          commit("SET_ABOUT", response.data.result);
        });
    }
  },
  mutations: {
    SET_SITE(state, data) {
      state.site = data;
    },
    SET_PROJECTS(state, pages) {
      if (state.projects.pagination) {
        state.projects.pagination = pages.pagination;
        for (var i = 0; i < pages.data.length; i++) {
          state.projects.data.push(pages.data[i]);
        }
      } else {
        state.projects = pages;
      }
    },
    SET_PROJECT(state, project) {
      state.project = project;
    },
    SET_ABOUT(state, data) {
      state.about = data;
    }
  }
});
