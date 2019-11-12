import Vue from 'vue'
import Router from 'vue-router'

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
      component: () => import(/* webpackChunkName: "Projects" */'./views/Projects.vue')
    },
    {
      path: '/projects/:id',
      name: 'project',
      props: true,
      component: () => import(/* webpackChunkName: "Project" */'./views/Project.vue')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
