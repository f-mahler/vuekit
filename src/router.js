import Vue from 'vue'
import Router from 'vue-router'
import store from './store.js'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "Home" */'./views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "About" */'./views/About.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import(/* webpackChunkName: "Projects" */'./views/Projects.vue'),
      beforeEnter: (to, from, next) => {
        if (store.state.projects.length === 0) {
          store.dispatch('loadProjects').then(next)
        } else {
          next()
        }
      }
    },
    {
      path: '/projects/:id',
      name: 'project',
      props: true,
      component: () => import(/* webpackChunkName: "Project" */'./views/Project.vue'),
      beforeEnter: (to, from, next) => {
        if (store.state.projects.length === 0) {
          store.dispatch('loadProjects').then(next)
        } else {
          next()
        }
      }
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
