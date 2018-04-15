import Vue from 'vue'
import Router from 'vue-router'
import About from './app/pages/about/about.vue'
import Work from './app/pages/work/work.vue'
import Project from './app/pages/project/project.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      meta: {title: 'Portfolio - About'},
      component: About
    },
    {
      path: '/work',
      meta: {title: 'Portfolio - Work'},
      component: Work
    },
    {
      path: '/work/project/:index',
      meta: {title: 'Portfolio - Projects'},
      component: Project
    }
  ]
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router;