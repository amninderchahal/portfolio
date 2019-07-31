import Vue from 'vue'
import App from './app/app.vue'
import router from './router'
import store from './store'

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

// GA 
// After route change
router.afterEach((to, from) => sendGAPageview(to.path));

// Initial pageview
setTimeout(() => sendGAPageview(router.currentRoute.path), 400);

const sendGAPageview = pageName => {
  ga('set', 'page', pageName);
  ga('send', 'pageview');
};