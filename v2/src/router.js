import Vue from 'vue'
import Router from 'vue-router'
import About from './app/pages/about/about.vue'
import Work from './app/pages/work/work.vue'
import Project from './app/pages/project/project.vue'
import Contact from './app/pages/contact/contact.vue'
import Resume from './app/pages/resume/resume.vue'
import Error from './app/components/error'

Vue.use(Router)

const router = new Router({
  routes: [
    { 
      path: '/',
      redirect: '/about'
    },
    {
      path: '/about',
      meta: {title: 'About - Amninder Chahal'},
      component: About
    },
    {
      path: '/about/resume',
      meta: {title: 'Resume - Amninder Chahal'},
      component: Resume
    },
    {
      path: '/work',
      meta: {title: 'Work - Amninder Chahal'},
      component: Work
    },
    {
      path: '/work/project/:index',
      meta: {title: 'Personal Projects - Amninder Chahal'},
      component: Project
    },
    {
      path: '/contact',
      meta: {title: 'Contact - Amninder Chahal'},
      component: Contact
    },
    {
      path: '*',
      meta: {title: 'Page not found'},
      component: Error
    }
  ],
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router;