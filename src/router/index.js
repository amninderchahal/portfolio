import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      meta: {title: 'Hello world'},
      component: HelloWorld
    }
  ]
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router;
