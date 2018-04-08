import Vue from 'vue'
import Router from 'vue-router'
import About from '@/pages/about/about'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'About',
      meta: {title: 'Portfolio - About'},
      component: About
    }
  ]
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router;
